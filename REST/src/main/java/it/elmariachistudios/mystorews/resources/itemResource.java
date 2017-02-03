/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.resources;

import com.codahale.metrics.annotation.Timed;
import it.elmariachistudios.mystorews.model.Item;
import it.elmariachistudios.mystorews.model.StoreBox;
import it.elmariachistudios.mystorews.persistance.ItemDAO;
import static it.elmariachistudios.mystorews.utils.LogUtils.formatUserData;
import it.elmariachistudios.mystorews.utils.ResponseUtils;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author paolo
 */

@Path("/items")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class itemResource {
    
    private static final Logger LOG = LoggerFactory.getLogger(itemResource.class);
    private final ItemDAO itemDao;
    
    public itemResource(ItemDAO itemDao) {
        this.itemDao = itemDao;
    }
    
    @GET
    @Timed
    @Valid
    public Response getItems(
            @QueryParam("box") Integer boxId,
            @Context HttpServletRequest request
    ) {
        final List<Item> result;
        // verifico se mi hanno passato la queryParam
        if (boxId == null) {
            result = itemDao.findAllItem();
            LOG.info("getItems()" + formatUserData(request));
        } else {
            result = itemDao.findAllItemByBox(boxId);
            LOG.info("getItems() with boxId " + boxId + formatUserData(request));
        }
        
        itemDao.close();
        return ResponseUtils.buildResponse(result);
        
    }
    
    @POST
    @Path("/create")
    @Timed
    @Valid
    public Response CreateItem(
            @NotNull @Valid Item item,
            @Context HttpServletRequest request
    ) {
        final int sqlQueryResult;
        final Item result;
        sqlQueryResult = itemDao.createItem(item);
        result = itemDao.findItemById(sqlQueryResult);
        
        itemDao.close();
        return ResponseUtils.buildResponse(result);
        
    }
    //private final StoreBoxDAO;
}

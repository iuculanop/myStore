/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.resources;

import com.codahale.metrics.annotation.Timed;
import it.elmariachistudios.mystorews.model.StoreBox;
import it.elmariachistudios.mystorews.persistance.ItemDAO;
import it.elmariachistudios.mystorews.persistance.StoreBoxDAO;
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
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author Paolo Iuculano <paolo.iuculano@unimi.it>
 */

@Path("/boxes")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class boxResource {
    
    private static final Logger LOG = LoggerFactory.getLogger(boxResource.class);
    private final StoreBoxDAO storeboxDao;
    private final ItemDAO itemDao;
    
    public boxResource(StoreBoxDAO storeboxDao, ItemDAO itemDao) {
        this.storeboxDao = storeboxDao;
        this.itemDao = itemDao;
    }
    
    @GET
    @Timed
    @Valid
    public Response getBoxes(
            @Context HttpServletRequest request
    ) {
        final List<StoreBox> result;
        result = storeboxDao.findAllBoxes();
        
        for (StoreBox box: result) {
            box.setItemList(itemDao.findAllItemByBox(box.getId()));
        }
                
        LOG.info("getBoxes()" + formatUserData(request));
        
        storeboxDao.close();
        
        return ResponseUtils.buildResponse(result);
        
    }
    
    @GET
    @Path("/{id}")
    @Timed
    @Valid
    public Response getBoxes(
            @PathParam("id") Integer idBox,
            @Context HttpServletRequest request
    ) {
        final StoreBox result;
        result = storeboxDao.findBoxById(idBox);
        
        result.setItemList(itemDao.findAllItemByBox(result.getId()));
                        
        LOG.info("getBoxes()" + formatUserData(request));
        
        storeboxDao.close();
        
        return ResponseUtils.buildResponse(result);
        
    }
    
    @POST
    @Path("/create")
    @Timed
    @Valid
    public Response createBox(
            @Context HttpServletRequest request,
            @NotNull @Valid StoreBox box
    ) {
        final int sqlQueryResult;
        final StoreBox result;
        sqlQueryResult = storeboxDao.createBox(box);
        result = storeboxDao.findBoxById(sqlQueryResult);
        
        LOG.info("createBoxes()" + formatUserData(request));
        
        storeboxDao.close();
        return ResponseUtils.buildResponse(result);
    }
    
}

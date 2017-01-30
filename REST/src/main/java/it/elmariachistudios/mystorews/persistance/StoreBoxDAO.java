/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.persistance;

import it.elmariachistudios.mystorews.model.StoreBox;
import java.util.List;
import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.BindBean;
import org.skife.jdbi.v2.sqlobject.GetGeneratedKeys;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

/**
 *
 * @author Paolo Iuculano <paolo.iuculano@unimi.it>
 */

@RegisterMapper(StoreBoxMapper.class)
public interface StoreBoxDAO {
    public void close();
    
    @SqlQuery("select * from StoreBox where name= :name")
    StoreBox findBoxByName(@Bind("name") String name);
    
    @SqlQuery("select * from StoreBox where box_id= :id")
    StoreBox findBoxById(@Bind("id") int id);
    
    @SqlQuery("select * from StoreBox")
    List<StoreBox> findAllBoxes();
    
    @SqlUpdate("insert into StoreBox ( "
            + "name,location,weight_status,space_status,isFragile,height,width,depth) "
            + "values "
            + "(:name,:location,:weightStatus,:spaceStatus,:isFragile,:height,:width,:depth)")
    @GetGeneratedKeys
    public int createBox(@BindBean StoreBox b);
}

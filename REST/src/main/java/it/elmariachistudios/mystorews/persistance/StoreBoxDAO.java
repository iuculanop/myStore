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
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;

/**
 *
 * @author Paolo Iuculano <paolo.iuculano@unimi.it>
 */


public interface StoreBoxDAO {
    public void close();
    
    @SqlQuery("select * from box where name= :name")
    StoreBox findBoxByName(@Bind("name") String name);
    
    @SqlQuery("select * from box")
    List<StoreBox> findAllBoxes();
    
    @SqlUpdate("insert into box (name,location,weight,total_items) values (:name,:location,:totalWeight,:totalItems)")
    StoreBox createBox(@BindBean StoreBox b);
}

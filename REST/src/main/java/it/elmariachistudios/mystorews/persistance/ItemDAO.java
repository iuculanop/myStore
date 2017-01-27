/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.persistance;

import it.elmariachistudios.mystorews.model.Item;
import java.util.List;
import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.BindBean;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

/**
 *
 * @author paolo
 */

@RegisterMapper(ItemMapper.class)
public interface ItemDAO {
    public void close();
            
    @SqlQuery("select * from item")
    @RegisterMapper(ItemMapper.class)
    List<Item> findAllItem();
    
    @SqlQuery("select * from item where storedinbox= :boxID")
    @RegisterMapper(ItemMapper.class)
    List<Item> findAllItemByBox(@Bind("boxID") int boxID);
    
    @SqlUpdate("insert into item (name,description,weight,storedinbox) values (:name,:description,:weight,:storedinBox)")
    @RegisterMapper(ItemMapper.class)
    void createItem(@BindBean Item s);
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.persistance;

import it.elmariachistudios.mystorews.model.Item;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

/**
 *
 * @author paolo
 */


public class ItemMapper implements ResultSetMapper<Item> {
    
    @Override
    public Item map(int i, ResultSet rs, StatementContext sc) throws SQLException {
        
        return new Item(
                rs.getInt("item_id"),
                rs.getString("name"),
                rs.getString("description"),
                rs.getInt("quantity"),
                rs.getDouble("height"),
                rs.getDouble("width"),
                rs.getDouble("depth"),
                rs.getInt("storedInBox"),
                rs.getBoolean("inUse")
        );
    }
    
}

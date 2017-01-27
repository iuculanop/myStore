/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.persistance;

import it.elmariachistudios.mystorews.model.StoreBox;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

/**
 *
 * @author paolo
 * this.id = id;
        this.name = name;
        this.location = location;
        this.weightStatus = weightStatus;
        this.spaceStatus = spaceStatus;
        this.isFragile = isFragile;
        this.height = height;
        this.width = width;
        this.depth = depth;
 */


public class StoreBoxMapper implements ResultSetMapper<StoreBox> {
    
    @Override
    public StoreBox map(int i, ResultSet rs, StatementContext sc) throws SQLException {
        
        return new StoreBox(
                rs.getInt("box_id"),
                rs.getInt("father_id"),
                rs.getString("name"),
                rs.getString("location"),
                rs.getString("weight_status"),
                rs.getString("space_status"),
                rs.getBoolean("isFragile"),
                rs.getDouble("height"),
                rs.getDouble("width"),
                rs.getDouble("depth")
        );
    }
    
}

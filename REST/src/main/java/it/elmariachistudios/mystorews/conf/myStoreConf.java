/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.conf;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import io.dropwizard.db.DataSourceFactory;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;

/**
 *
 * @author paolo
 */


public class myStoreConf extends Configuration{
    
    @NotEmpty
    private String timezone;
    
    @Valid
    @NotNull
    @JsonProperty
    private DataSourceFactory database = new DataSourceFactory();

    public String getTimezone() {
        return timezone;
    }
    
    public DataSourceFactory getDataSourceFactory() {
        return database;
    }
    
}

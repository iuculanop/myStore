/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.app;

import io.dropwizard.Application;
import io.dropwizard.jdbi.DBIFactory;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import it.elmariachistudios.mystorews.conf.myStoreConf;
import it.elmariachistudios.mystorews.persistance.ItemDAO;
import it.elmariachistudios.mystorews.persistance.StoreBoxDAO;
import it.elmariachistudios.mystorews.resources.boxResource;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.glassfish.jersey.server.ServerProperties;
import org.skife.jdbi.v2.DBI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author paolo
 */


public class myStoreApp extends Application<myStoreConf>{
    
    private static final Logger LOG = LoggerFactory.getLogger(myStoreApp.class);
    
    public static void main(String[] args) throws Exception {
        new myStoreApp().run(args);
    }
    
    private void configureCors(Environment environment) {
        FilterRegistration.Dynamic filter = environment.servlets().addFilter("CORS", CrossOriginFilter.class);
        filter.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_METHODS_PARAM, "GET,PUT,POST,DELETE,OPTIONS");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*");
        filter.setInitParameter(CrossOriginFilter.ACCESS_CONTROL_ALLOW_ORIGIN_HEADER, "*");
        filter.setInitParameter("allowedHeaders", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin");
        filter.setInitParameter("allowCredentials", "true");
    }
    
    @Override
    public void initialize(Bootstrap btstrp) {
        // quanto segue serve per dire a jackson di serializzare le date non come timestamp.
        btstrp.getObjectMapper().disable(com.fasterxml.jackson.databind.SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    }
    
    @Override
    public void run(myStoreConf t, Environment e) throws Exception {
        
        //initialize CORS filter
        configureCors(e);
        
        LOG.info("TimeZone: " + t.getTimezone());
        
        //initialize db connections
        final DBIFactory factory = new DBIFactory();
        final DBI jdbi = factory.build(e, t.getDataSourceFactory(), "mysql");
        //initialize daos
        final StoreBoxDAO storeboxDao = jdbi.onDemand(StoreBoxDAO.class);
        final ItemDAO itemDao = jdbi.onDemand(ItemDAO.class);
        
        // abilita la generazione del wadl (url http://localhost:9000/application.wadl ad esempio)
        // poichè vengono esposti i nomi dei metodi che vengono erogati, verificare se non sia meglio disabilitarne la generazione
        Map<String, Object> properties = new HashMap<>();
        properties.put(ServerProperties.WADL_FEATURE_DISABLE, Boolean.FALSE);
        e.jersey().getResourceConfig().addProperties(properties);
        
        // Inizializza le risorse del WS
        e.jersey().register(new boxResource(storeboxDao,itemDao));
        
        // Inizializza i task del WS

    }
}

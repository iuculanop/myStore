/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.elmariachistudios.mystorews.utils;

import java.net.URI;
import java.util.Locale;
import javax.ws.rs.core.Response;

/**
 * Contiene alcune utilities per la costruzione delle response dei servizi.
 * @author Paolo Iuculano <paolo.iuculano@unimi.it>
 */
// TODO: trasformare questa cosa in una libreria a se stante da usare nelle varie applicazioni
public class ResponseUtils {

    public static Response buildResponse(Object entity) {
        return Response.ok(entity).header("X-Content-Type-Options", "nosniff").language(Locale.ITALIAN).build();
    }

    public static Response notFound() {
        return Response.status(Response.Status.NOT_FOUND).header("X-Content-Type-Options", "nosniff").language(Locale.ITALIAN).build();
    }


    public static Response ok() {
        return Response.ok().header("X-Content-Type-Options", "nosniff").language(Locale.ITALIAN).build();
    }

    public static Response created(URI uri) {
        return Response.created(uri).header("X-Content-Type-Options", "nosniff").language(Locale.ITALIAN).build();
    }

}

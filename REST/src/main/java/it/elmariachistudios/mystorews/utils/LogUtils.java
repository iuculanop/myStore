/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.elmariachistudios.mystorews.utils;

// import it.unimi.incentivazioni_services.authentication.User;
// import it.unimi.incentivazioni_services.authentication.UserType;
import javax.servlet.http.HttpServletRequest;

/**
 * Utilities utili per il logging
 *
 * @author Vincenzo Pupillo <vincenzo.pupillo@unimi.it>
 */
public class LogUtils {

    // TODO: questa roba va riscritta e messa in una libreria: i log devono essere di tipo strutturato, i dati che vengono loggati
    // potrebbero essere restituiti come un json, questo lo renderebbe sia human redeable e al contempo sarebbero processabili facilmente
    // in modo automatico
    private static String generateContextMessage(HttpServletRequest context) {
        if (context != null) {
            return "browser["
                    + context.getHeader("X-Forwarded-For")
                    + ", " + context.getRemoteAddr()
                    + ", " + context.getHeader("Referer")
                    + ", " + context.getHeader("User-Agent")
                    + "] ";
        }
        return "browser[,,]";
    }

    /**
     * Formatta i dati per la domanda
     *
     * @param matricola
     * @param triennio
     * @return
     */
    public static String formatDocenteDomanda(int matricola, int triennio) {
        return " docente[" + matricola + "," + triennio + "] ";
    }

    /**
     * Formatta i dati dell'utente per il logging
     *
     * @param user
     * @param context the value of context
     * @return the java.lang.String
     */
    public static String formatUserData(HttpServletRequest context) {

        return generateContextMessage(context);
        // return " utente[" + user.getUserType().toString() + "," + user.getCASEmployeeNumber() + "," + user.getEmployeeNumber() + "] , " + generateContextMessage(context);
    }

    /**
     * Formatta i dati dell'utente per il logging, mostra tutti i dati
     *
     * @param user
     * @param context the value of context
     * @return the java.lang.String
     */
    public static String formatUserDataExtended(HttpServletRequest context) {
        return generateContextMessage(context);
        // return " utente[" + user.getUserType() + "," + user.getCASEmployeeNumber() + "," + user.getEmployeeNumber() + "], " + generateContextMessage(context) + ", utentefull[" + user.toString() + "]";
    }

    /**
     * Commento per il ruolo autorizzato
     *
     * @param authRole ruolo autorizzato
     * @return
     */
    // public static String formatAuthRole(UserType authRole) {
    //     return "(authRole = " + authRole + ")";
    // }

}

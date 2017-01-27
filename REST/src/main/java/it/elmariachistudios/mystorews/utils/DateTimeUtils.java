/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.elmariachistudios.mystorews.utils;

import java.sql.Timestamp;
import java.util.Date;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.LocalDate;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

/**
 * Utility varie per la gestione delle date
 * @author Paolo Iuculano <paolo.iuculano@unimi.it>
 */
public class DateTimeUtils {
    private static final DateTimeFormatter formatter = DateTimeFormat.forPattern("YYYY-MM-dd");
    private static final DateTimeFormatter formatterPdf = DateTimeFormat.forPattern("YYYYMMdd_HH_mm_ss");
    private static final DateTimeFormatter formatterDayITA = DateTimeFormat.forPattern("dd-MM-yyyy");

    /**
     *
     * @return  il formatter usato per le date
     */
    public static DateTimeFormatter getFormatter() {
        return formatter;
    }

    /**
     * Converte un timestamp nel formato necessario alla generazione del documento che rappresenta la domanda
     * @param date
     * @return la data formattata
     */
    public static long convertForDomandaDoc(DateTime date) {
        if (date == null) {
            return 0;
        }
        return date.getMillis();
//        return date.toString(formatterPdf);
    }

    /**
     * Converte un timestamp nel formato necessario alla generazione del documento che rappresenta la domanda
     * @param date
     * @return la data formattata
     */
    public static String convertForDomandaITA(DateTime date) {
        if (date == null) {
            return "";
        }
        return date.toString(formatterDayITA);
    }

    /**
     * Converte una date in formato YYYY-MM-dd in un DateTime per Joda
     * @param date
     * @return la data convertita
     */
    public static DateTime convertToDateTime(String date) {
        return formatter.parseDateTime(date);
    }

    /**
     * Converte una data espressa in DateTime in una stringa nel formato YYYY-MM-dd
     * @param date
     * @return una stringa con la data convertita
     */
    public static String convertToString(DateTime date) {
        if (date == null) {
            return "";
        }
        return date.toString(formatter);
    }

    /**
     * Restituisce la data e l'ora del timezone locale in formato Java Date
     * @return  la data, completa di ora in formato Java Date
     */
    public static Date getNowInJavaDate() {
        return DateTime.now(DateTimeZone.forID("Europe/Rome")).toDate();
    }

    /**
     * Restituisce la data e l'ora del timezone locale in formato Java Date
     * @return la data completa di ora in formato Joda DateTime
     */
    public static DateTime getNowInJoda() {
        return DateTime.now(DateTimeZone.forID("Europe/Rome"));
    }

    /**
     * Restituisce la data priva di ora in formato Java Date
     * @return la data senza orario in formato Java Date
     */
    public static Date getNowNoHourInJavaDate() {
        return LocalDate.now(DateTimeZone.forID("Europe/Rome")).toDate();
    }

    /**
     * Restituisce la data priva di ora in formato Joda
     * @return la data in formato Joda senza ora
     */
    public static LocalDate getNowNoHourInJoda() {
        return  LocalDate.now(DateTimeZone.forID("Europe/Rome"));
    }

    /**
     * Restituisce true se la data di scadenza è passata
     * @param expireDateDocente
     * @return
     */
    public static boolean isExpiredDate(DateTime expireDateDocente) {
        return expireDateDocente != null && DateTimeUtils.getNowInJoda().isAfter(expireDateDocente);
    }

}

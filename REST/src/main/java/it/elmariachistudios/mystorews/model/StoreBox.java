/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import org.joda.time.DateTime;

/**
 *
 * @author paolo
 */

public class StoreBox {
    
    @JsonProperty("id")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private int id;
    @JsonProperty("idFather")
    private int idFather;
    @JsonProperty("name")
    private String name;
    @JsonProperty("location")
    private String location;
    @JsonProperty("weightStatus")
    private String weightStatus;
    @JsonProperty("spaceStatus")
    private String spaceStatus;
    @JsonProperty("isFragile")
    private boolean isFragile;
    
    private double height;
    private double width;
    private double depth;
    
    private List<Item> items;
    private List<StoreBox> boxes;

    @JsonCreator
    public StoreBox(
            @JsonProperty("id") Integer id,
            @JsonProperty("idFather") Integer idFather,
            @JsonProperty("name") String name,
            @JsonProperty("location") String location,
            @JsonProperty("weightStatus") String weightStatus,
            @JsonProperty("spaceStatus") String spaceStatus,
            @JsonProperty("isFragile") boolean isFragile
            ) {
        this.id = id;
        this.idFather = idFather;
        this.name = name;
        this.location = location;
        this.weightStatus = weightStatus;
        this.spaceStatus = spaceStatus;
        this.isFragile = isFragile;
    }
    
    public StoreBox(int idFather, String name, String location, int height, int width, int depth) {
        this.idFather = idFather;
        this.name = name;
        this.location = location;
        this.height = height;
        this.width = width;
        this.depth = depth;
    }

    public StoreBox(int id, int idFather, String name, String location, String weightStatus, String spaceStatus, boolean isFragile, double height, double width, double depth) {
        this.id = id;
        this.idFather = idFather;
        this.name = name;
        this.location = location;
        this.weightStatus = weightStatus;
        this.spaceStatus = spaceStatus;
        this.isFragile = isFragile;
        this.height = height;
        this.width = width;
        this.depth = depth;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdFather() {
        return idFather;
    }

    public void setIdFather(int idFather) {
        this.idFather = idFather;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getWeightStatus() {
        return weightStatus;
    }

    public void setWeightStatus(String weightStatus) {
        this.weightStatus = weightStatus;
    }

    public String getSpaceStatus() {
        return spaceStatus;
    }

    public void setSpaceStatus(String spaceStatus) {
        this.spaceStatus = spaceStatus;
    }

    public boolean isIsFragile() {
        return isFragile;
    }

    public void setIsFragile(boolean isFragile) {
        this.isFragile = isFragile;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public double getDepth() {
        return depth;
    }

    public void setDepth(int depth) {
        this.depth = depth;
    }
    
    public void setItemList(List<Item> items) {
        this.items = items;
    }
    
    public void setContainerList(List<StoreBox> conts) {
        this.boxes = conts;
    }
}

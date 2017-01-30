/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author paolo
 */


public class Item {
    @JsonProperty("id")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("description")
    private String description;
    @JsonProperty("quantity")
    private int quantity;
    @JsonProperty("height")
    private Double height;
    @JsonProperty("width")
    private Double width;
    @JsonProperty("depth")
    private Double depth;
    @JsonProperty("storedInBox")
    private int storedInBox;
    @JsonProperty("inUse")
    private boolean inUse;

    @JsonCreator
    public Item(
            @JsonProperty("id") Integer id,
            @JsonProperty("name") String name,
            @JsonProperty("description") String desc,
            @JsonProperty("quantity") int quantity,
            @JsonProperty("height") Double height,
            @JsonProperty("width") Double width,
            @JsonProperty("depth") Double depth,
            @JsonProperty("storedInBox") int storedInBox,
            @JsonProperty("inUse") boolean inUse
    ) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.quantity = quantity;
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.storedInBox = storedInBox;
        this.inUse = inUse;
    }
    
    public Item(String name, String description, int quantity, double height, double width, double depth) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.height = height;
        this.width = width;
        this.depth = depth;
    }

    public Item(int id, String name, String description, int quantity, double height, double width, double depth, int storedInBox, boolean inUse) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.storedInBox = storedInBox;
        this.inUse = inUse;
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public Double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public Double getDepth() {
        return depth;
    }

    public void setDepth(double depth) {
        this.depth = depth;
    }

    public int getStoredInBox() {
        return storedInBox;
    }

    public void setStoredInBox(int storedInBox) {
        this.storedInBox = storedInBox;
    }

    public boolean isInUse() {
        return inUse;
    }

    public void setInUse(boolean inUse) {
        this.inUse = inUse;
    }
    
}

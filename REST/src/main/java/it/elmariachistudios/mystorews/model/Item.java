/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package it.elmariachistudios.mystorews.model;

/**
 *
 * @author paolo
 */


public class Item {
    private int id;
    private String name;
    private String description;
    private int quantity;
    
    private double height;
    private double width;
    private double depth;
    private int storedInBox;
    private boolean inUse;

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

    public int getId() {
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

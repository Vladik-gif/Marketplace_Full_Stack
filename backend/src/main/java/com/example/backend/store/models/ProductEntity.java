package com.example.backend.store.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description_product;
    @Column(columnDefinition = "TEXT")
    private String characteristic_product;
    private double price;
    //private String customer_reviews;
    private String category; //version 2.0
    private String seller; //version 2.0
    private String number; //seller
    private LocalDateTime createDate = LocalDateTime.now();

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "gallery_id", referencedColumnName = "gallery_id")
    private GalleryEntity gallery;

    public ProductEntity() {}

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long id) {
        this.productId = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription_product() {
        return description_product;
    }

    public void setDescription_product(String description_product) {
        this.description_product = description_product;
    }

    public String getCharacteristic_product() {
        return characteristic_product;
    }

    public void setCharacteristic_product(String characteristic_product) {
        this.characteristic_product = characteristic_product;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public GalleryEntity getGallery() {
        return gallery;
    }

    public void setGallery(GalleryEntity gallery) {
        this.gallery = gallery;
    }
}
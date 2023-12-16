package com.example.backend.store.models;


import jakarta.persistence.*;

@Entity
@Table(name = "photo")
public class PhotoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "photo_id")
    private Long photoId;
    @Column(nullable = false, length = 1023)
    private String url;
    @ManyToOne
    private GalleryEntity gallery;

    public PhotoEntity() {}

    public Long getId() {
        return photoId;
    }

    public void setId(Long photoId) {
        this.photoId = photoId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}

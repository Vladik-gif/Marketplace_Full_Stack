package com.example.backend.store.models;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "gallery")
public class GalleryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gallery_id")
    private Long galleryId;
    @ManyToOne
    private PhotoEntity photos;

//    public void addPhoto(PhotoEntity photo){
//        if (photos==null){
//                photos = new ArrayList<>();
//                    photos.add(photo);
//        }
//    }

    public GalleryEntity() {}

    public Long getGalleryId() {
        return galleryId;
    }

    public void setGalleryId(Long galleryId) {
        this.galleryId = galleryId;
    }

    public PhotoEntity getPhotos() {
        return photos;
    }

    public void setPhotos(PhotoEntity photos) {
        this.photos = photos;
    }
}

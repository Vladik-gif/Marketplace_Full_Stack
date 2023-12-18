package com.example.backend.api.DTO;

import com.example.backend.store.models.PhotoEntity;

import java.util.List;

public class GalleryDTO {

    private Long galleryId;

    private PhotoEntity photos;

    public GalleryDTO() {}

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

package com.example.backend.api.DTO;

import java.util.List;

public class GalleryDTO {

    private Long galleryId;

    private List<PhotoDTO> photos;

    public GalleryDTO() {}

    public Long getGalleryId() {
        return galleryId;
    }

    public void setGalleryId(Long galleryId) {
        this.galleryId = galleryId;
    }

    public List<PhotoDTO> getPhotos() {
        return photos;
    }

    public void setPhotos(List<PhotoDTO> photos) {
        this.photos = photos;
    }
}

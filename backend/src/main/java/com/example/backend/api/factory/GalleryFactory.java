package com.example.backend.api.factory;

import com.example.backend.api.DTO.GalleryDTO;
import com.example.backend.store.models.GalleryEntity;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class GalleryFactory {

    private final PhotoFactory photoFactory;

    public GalleryFactory(PhotoFactory photoFactory) {
        this.photoFactory = photoFactory;
    }

    public GalleryDTO makeGallery(GalleryEntity gallery){
        GalleryDTO galleryDTO = new GalleryDTO();

        galleryDTO.setGalleryId(gallery.getGalleryId());
        galleryDTO.setPhotos(gallery.getPhotos());

        return galleryDTO;
    }
}

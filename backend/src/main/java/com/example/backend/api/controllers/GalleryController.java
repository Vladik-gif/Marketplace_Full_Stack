package com.example.backend.api.controllers;

import com.example.backend.api.DTO.GalleryDTO;
import com.example.backend.api.services.GalleryService;
import com.example.backend.store.models.GalleryEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class GalleryController {

    public final GalleryService galleryService;

    private static final String CREATE_GALLERY = "/create/gallery/product/{id}";
    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    @PostMapping(CREATE_GALLERY)
    public GalleryDTO create(@RequestBody GalleryEntity gallery, @PathVariable("id") Long productId){
        return galleryService.createProductId(gallery,productId);
    }
}

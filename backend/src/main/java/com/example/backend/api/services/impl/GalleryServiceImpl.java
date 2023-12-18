package com.example.backend.api.services.impl;

import com.example.backend.api.DTO.GalleryDTO;
import com.example.backend.store.models.GalleryEntity;

public interface GalleryServiceImpl {
    GalleryDTO createProductId(GalleryEntity gallery, Long productId);
}
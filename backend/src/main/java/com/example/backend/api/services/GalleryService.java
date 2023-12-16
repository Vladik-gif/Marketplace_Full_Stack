package com.example.backend.api.services;

import com.example.backend.api.DTO.GalleryDTO;
import com.example.backend.api.factory.GalleryFactory;
import com.example.backend.api.services.impl.GalleryServiceImpl;
import com.example.backend.store.models.GalleryEntity;
import com.example.backend.store.models.ProductEntity;
import com.example.backend.store.repository.GalleryRepository;
import com.example.backend.store.repository.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class GalleryService implements GalleryServiceImpl {

    private final GalleryRepository galleryRepository;
    private final ProductRepository productRepository;
    private final GalleryFactory galleryFactory;

    public GalleryService(GalleryRepository galleryRepository,
                          ProductRepository productRepository,
                          GalleryFactory galleryFactory) {
        this.galleryRepository = galleryRepository;
        this.productRepository = productRepository;
        this.galleryFactory = galleryFactory;
    }

    @Override
    public GalleryDTO createProductId(GalleryEntity gallery, Long productId) {
        ProductEntity productSave = productRepository.getReferenceById(productId);
        GalleryEntity gallerySave = galleryRepository.save(gallery);

        productSave.setGallery(gallery);
        productRepository.save(productSave);

        return galleryFactory.makeGallery(gallerySave);
    }
}

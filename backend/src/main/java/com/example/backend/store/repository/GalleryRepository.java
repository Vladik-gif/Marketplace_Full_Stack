package com.example.backend.store.repository;

import com.example.backend.store.models.GalleryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryRepository extends JpaRepository<GalleryEntity, Long> {

}
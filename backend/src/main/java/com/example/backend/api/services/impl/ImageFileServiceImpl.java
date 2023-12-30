package com.example.backend.api.services.impl;

import com.example.backend.api.DTO.ImageFileDTO;
import org.springframework.web.multipart.MultipartFile;

public interface ImageFileServiceImpl {

    ImageFileDTO uploadImage(MultipartFile image);
    void deleteIdImage(Long id);
}

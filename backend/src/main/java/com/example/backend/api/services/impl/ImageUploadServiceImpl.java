package com.example.backend.api.services.impl;

import org.springframework.web.multipart.MultipartFile;

public interface ImageUploadServiceImpl {
    
    boolean saveImage(MultipartFile file, String filename);

    String getUniqueFilename(String originalFilename);
}
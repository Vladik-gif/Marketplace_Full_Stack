package com.example.backend.api.services.impl;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageFileServiceImpl {

    String uploadImage(Long id, MultipartFile image) throws IOException;
    byte[] downloadImage(String name);
    void deleteIdImage(Long id);
}

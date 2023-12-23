package com.example.backend.api.controllers;

import com.example.backend.api.services.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class ImageController {

    private final ImageService imageService;
    private static final String CREATE_IMAGE = "/{id}/image";
    private static final String GET_IMAGE_NAME = "/{name}";
    private static final String DELETE_IMAGE_ID = "/delete/image/{id}";

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping(CREATE_IMAGE)
    public ResponseEntity<?> create(@PathVariable Long id, @ModelAttribute MultipartFile image) throws IOException {
        String uploadImage = imageService.uploadImage(id,image);

        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }

    @GetMapping(GET_IMAGE_NAME)
    public ResponseEntity<?> downloadImage(@PathVariable String name){
        byte[] imageData = imageService.downloadImage(name);

        return ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }

    @DeleteMapping(DELETE_IMAGE_ID)
    public void deleteIdImage(@PathVariable Long id){
        imageService.deleteIdImage(id);
    }
}

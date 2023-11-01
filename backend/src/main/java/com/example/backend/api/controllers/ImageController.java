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

    private ImageService imageService;

    private static final String CREATE_IMAGE = "/image";
    private static final String GET_IMAGE_NAME = "/{name}";

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping(CREATE_IMAGE)
    public ResponseEntity<?> create(@RequestParam MultipartFile image) throws IOException {
        String uploadImage = imageService.uploadImage(image);

        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }

    @GetMapping(GET_IMAGE_NAME)
    public ResponseEntity<?> downloadImage(@PathVariable String name){
        byte[] imageData= imageService.downloadImage(name);

        return ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }
}

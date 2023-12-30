package com.example.backend.api.controllers;

import com.example.backend.api.DTO.ImageFileDTO;
import com.example.backend.api.services.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class ImageController {

    private final ImageService imageService;
    private static final String CREATE_IMAGE = "/image";
    private static final String GET_IMAGE_BY_ID = "/{id}";
    private static final String DELETE_IMAGE_ID = "/delete/image/{id}";

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping(CREATE_IMAGE)
    public ResponseEntity<?> create(@ModelAttribute MultipartFile image) throws IOException {
        ImageFileDTO uploadImage = imageService.uploadImage(image);
        return ResponseEntity.status(HttpStatus.CREATED).body(uploadImage);
    }

    @GetMapping(GET_IMAGE_BY_ID)
    public ResponseEntity<?> getImageByID(@PathVariable("id") Long id){
        ImageFileDTO imageFileDTO = imageService.getImageFileById(id);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(imageFileDTO);
    }

    @DeleteMapping(DELETE_IMAGE_ID)
    public void deleteIdImage(@PathVariable Long id){
        imageService.deleteIdImage(id);
    }
}

package com.example.backend.api.factory;

import com.example.backend.api.DTO.PhotoDTO;
import com.example.backend.store.models.PhotoEntity;
import org.springframework.stereotype.Component;

@Component
public class PhotoFactory {
    public PhotoDTO makePhoto(PhotoEntity photo) {
        PhotoDTO photoDTO = new PhotoDTO();

        photoDTO.setPhotoId(photo.getId());
        photoDTO.setUrl(photo.getUrl());

        return photoDTO;
    }
}

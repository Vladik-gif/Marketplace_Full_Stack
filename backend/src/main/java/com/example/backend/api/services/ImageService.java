package com.example.backend.api.services;

import com.example.backend.api.DTO.ImageFileDTO;
import com.example.backend.api.factory.ImageFileFactory;
import com.example.backend.api.services.impl.ImageFileServiceImpl;
import com.example.backend.store.models.ImageFile;
import com.example.backend.store.models.ProductEntity;
import com.example.backend.store.repository.ImageFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ImageService implements ImageFileServiceImpl {

    private final ImageFileRepository imageFileRepository;
    private final ImageFileFactory imageFileFactory;
    private final ImageUploadService imageUploadService;

    @Autowired
    public ImageService(ImageFileRepository imageFileRepository,
                        ImageFileFactory imageFileFactory,
                        ImageUploadService imageUploadService) {
        this.imageFileRepository = imageFileRepository;
        this.imageFileFactory = imageFileFactory;
        this.imageUploadService = imageUploadService;
    }

    @Override
    public ImageFileDTO uploadImage(MultipartFile image) {
        ImageFile file = new ImageFile();
        String filename = imageUploadService.getUniqueFilename(image.getOriginalFilename() + " ");
        imageUploadService.saveImage(image, filename);

        file.setName(filename);
        file.setType(image.getContentType());
        file.setImage(filename);

        return imageFileFactory.makeImageFile(imageFileRepository.save(file));
    }

    public void setProductEntity(ProductEntity product) {
        List<ImageFile> images = product.getImage();
        for (ImageFile image : images) {
            image.setProduct(product);
            imageFileRepository.save(image);
        }
    }

    public ImageFileDTO getImageFileById(Long id) {
        return imageFileFactory.makeImageFile(imageFileRepository.getReferenceById(id));
    }

    @Override
    public void deleteIdImage(Long id) {
        imageFileRepository.deleteById(id);
    }
}
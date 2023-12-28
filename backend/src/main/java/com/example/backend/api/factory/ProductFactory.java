package com.example.backend.api.factory;

import com.example.backend.api.DTO.ProductDTO;
import com.example.backend.store.models.ProductEntity;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class ProductFactory {

    private final ImageFileFactory imageFileFactory;

    public ProductFactory(ImageFileFactory imageFileFactory) {
        this.imageFileFactory = imageFileFactory;
    }

    public ProductDTO makeProduct(ProductEntity entity){
        ProductDTO productDTO = new ProductDTO();

        productDTO.setId(entity.getId());
        productDTO.setName(entity.getName());
        productDTO.setCategory(entity.getCategory());
        productDTO.setSeller(entity.getSeller());
        productDTO.setNumber(entity.getNumber());
        productDTO.setPrice(entity.getPrice());
        productDTO.setCharacteristic_product(entity.getCharacteristic_product());
        productDTO.setDescription_product(entity.getDescription_product());
        productDTO.setCreateDate(entity.getCreateDate());
        productDTO.setImage(entity.getImage().stream()
                .map(imageFileFactory::makeImageFile)
                .collect(Collectors.toList()));
        return productDTO;
    }
}

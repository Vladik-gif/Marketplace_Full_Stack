package com.example.backend.api.servers;

import com.example.backend.api.DTO.ProductDTO;
import com.example.backend.api.factory.ProductFactory;
import com.example.backend.store.models.ProductEntity;
import com.example.backend.store.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductFactory productFactory;

    public ProductService(ProductRepository productRepository,
                          ProductFactory productFactory) {
        this.productRepository = productRepository;
        this.productFactory = productFactory;
    }

    public ProductDTO createProduct(ProductEntity entity) {
        return productFactory.makeProduct(productRepository.save(entity));
    }

    public List<ProductDTO> getAllProduct() {
        return productRepository.findAll().stream().map(productFactory::makeProduct).collect(Collectors.toList());
    }

    public ProductDTO getOneProduct(Long id) {
        ProductEntity entity_Id = productRepository.getReferenceById(id);

        return productFactory.makeProduct(entity_Id);
    }

    public ProductDTO editProduct(Long id, ProductEntity entity) {
        ProductEntity entity_update = productRepository.getReferenceById(id);

        entity_update.setName(entity.getName());
        entity_update.setNumber(entity.getNumber());
        entity_update.setPrice(entity.getPrice());
        entity_update.setSeller(entity.getSeller());
        entity_update.setDescription_product(entity.getDescription_product());
        entity_update.setCharacteristic_product(entity.getCharacteristic_product());

        return productFactory.makeProduct(entity_update);
    }

    public void deleteIdProduct(Long id) {
        productRepository.deleteById(id);
    }

    public void deleteAll(){
        productRepository.deleteAll();
    }
}

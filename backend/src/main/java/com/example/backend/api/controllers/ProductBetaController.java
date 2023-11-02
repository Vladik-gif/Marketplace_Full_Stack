package com.example.backend.api.controllers;

import com.example.backend.store.models.ProductBeta;
import com.example.backend.store.repository.ProductBetaRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class ProductBetaController {

    private final ProductBetaRepository productBetaRepository;

    private static final String CREATE_PRODUCT = "/create/productModel";
    private static final String GET_PRODUCTS = "/get/productModel";
    private static final String GET_ONE_PRODUCT = "/productModel/{id}";
    private static final String EDIT_ID_PRODUCT = "/edit/productModel/{id}";
    private static final String DELETE_PRODUCT = "delete/productModel/{id}";

    public ProductBetaController(ProductBetaRepository productBetaRepository) {
        this.productBetaRepository = productBetaRepository;
    }

    @PostMapping(CREATE_PRODUCT)
    public ProductBeta createProduct(@RequestParam MultipartFile image,
                                     @RequestParam String name) throws IOException {
        ProductBeta productBeta = new ProductBeta();

        productBeta.setName(name);
        productBeta.setPhoto(savePhoto(image));

        return productBetaRepository.save(productBeta);
    }

    @GetMapping(GET_PRODUCTS)
    public List<ProductBeta> getAll(){
        return productBetaRepository.findAll();
    }


    @GetMapping(GET_ONE_PRODUCT)
    public ProductBeta getProduct(@PathVariable Long id) {
        return productBetaRepository.findById(id).orElse(null);
    }

    @PutMapping(EDIT_ID_PRODUCT)
    public ProductBeta updateProduct(@PathVariable Long id,
                                     @RequestParam String name,
                                     @RequestParam MultipartFile photo) throws IOException {
        ProductBeta product = productBetaRepository.findById(id).orElse(null);
        if (product != null) {
            product.setName(name);
            product.setPhoto(savePhoto(photo));
            return productBetaRepository.save(product);
        }
        return null;
    }

    @DeleteMapping(DELETE_PRODUCT)
    public void deleteProduct(@PathVariable Long id) {
        productBetaRepository.deleteById(id);
    }

    private String savePhoto(MultipartFile image) {
        return "/uploads/" + image.getOriginalFilename();
    }
}

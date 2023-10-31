package com.example.backend.api.controllers;

import com.example.backend.api.DTO.ProductDTO;
import com.example.backend.api.servers.ProductService;
import com.example.backend.store.models.ProductEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    private final ProductService productService;

    private static final String CREATE_PRODUCT = "/create/product";
    private static final String GET_PRODUCTS = "/get/product";
    private static final String GET_ONE_PRODUCT = "/product/{id}";
    private static final String EDIT_ID_PRODUCT = "/edit/product/{id}";
    private static final String DELETE_PRODUCT = "delete/product/{id}";

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping(CREATE_PRODUCT)
    public ProductDTO createProduct(@RequestBody ProductEntity entity){
        return productService.createProduct(entity);
    }

    @GetMapping(GET_PRODUCTS)
    public List<ProductDTO> getProducts(){
        return productService.getAllProduct();
    }

    @GetMapping(GET_ONE_PRODUCT)
    public ProductDTO getOneProduct(@PathVariable Long id){
        return productService.getOneProduct(id);
    }

    @PutMapping(EDIT_ID_PRODUCT)
    public ProductDTO editProduct(@PathVariable Long id, @RequestBody ProductEntity entity){
        return productService.editProduct(id, entity);
    }

    @DeleteMapping(DELETE_PRODUCT)
    public void deleteIdProduct(@PathVariable Long id){
        productService.deleteIdProduct(id);
    }
}

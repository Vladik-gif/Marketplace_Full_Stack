package com.example.backend.api.DTO;

import lombok.*;
import java.time.LocalDateTime;
import java.util.List;

@Builder
public record ProductDTO (Long id,
                          String name,
                          String description_product,
                          String characteristic_product,
                          double price,
                          String category,
                          String seller,
                          String number,
                          LocalDateTime createDate,
                          List<ImageFileDTO> image){}
package com.example.backend.store.repository;

import com.example.backend.store.models.ProductBeta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductBetaRepository extends JpaRepository<ProductBeta, Long> {


}

package com.projetoerp.ERPEstoque.Repository;


import com.projetoerp.ERPEstoque.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}

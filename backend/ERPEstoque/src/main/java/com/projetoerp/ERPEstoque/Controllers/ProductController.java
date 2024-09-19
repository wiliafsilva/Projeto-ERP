package com.projetoerp.ERPEstoque.Controllers;


import com.projetoerp.ERPEstoque.Models.Product;
import com.projetoerp.ERPEstoque.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/estoque/produtos")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> produtos = productRepository.findAll();
        return ResponseEntity.ok(produtos);
    }
    
}

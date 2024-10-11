package com.projetoerp.ERPEstoque.Controllers;


import com.projetoerp.ERPEstoque.Exceptions.ProductNotFoundException;
import com.projetoerp.ERPEstoque.Models.Product;
import com.projetoerp.ERPEstoque.Repository.ProductRepository;
import com.projetoerp.ERPEstoque.Services.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "endpoint de produtos")
@RestController
@RequestMapping("/estoque/produtos")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductService productService;

    @Operation(summary = "Listar Produtos")
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> produtos = productRepository.findAll();
        return ResponseEntity.ok(produtos);
    }

    @Operation(summary = "Inserir Produtos")
    @PostMapping("/novo")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {

        Product newProduct = productService.createProduct(product);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }

    @Operation(summary = "Alterar Produtos")
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id,@RequestBody Product updatedProduct) {

        Product existingProduct = productRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Produto não Encontrado"));
        existingProduct.setDescricao(updatedProduct.getDescricao());
        existingProduct.setQuantidade(updatedProduct.getQuantidade());

        Product savedProduct = productRepository.save(existingProduct);


        return ResponseEntity.ok(savedProduct);
    }


    @Operation(summary = "Deletar Produtos")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Produto Deletado com Sucesso!");
    }


    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<String> handleProductNotFound(ProductNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
    
}

package com.projetoerp.ERPEstoque.Controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoerp.ERPEstoque.Exceptions.ProductNotFoundException;
import com.projetoerp.ERPEstoque.Models.Product;
import com.projetoerp.ERPEstoque.Repository.ProductRepository;
import com.projetoerp.ERPEstoque.Services.ProductService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Endpoint de Produtos")
@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/estoque/produtos")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductService productService;

    @Operation(summary = "Obter Produtos")
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> produtos = productRepository.findAll(Sort.by(Sort.Order.asc("id")));
        return ResponseEntity.ok(produtos);
    }

    @Operation(summary = "Obter Produto pelo Id")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Product>> getAllProducts(@PathVariable Long id) {
        Optional<Product> produto = productRepository.findById(id);
        return ResponseEntity.ok(produto);
    }

    @Operation(summary = "Inserir Produtos")
    @PostMapping("/novo")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {

        Product newProduct = productService.createProduct(product);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }

    @Operation(summary = "Alterar Produto")
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id,@RequestBody Product updatedProduct) {

        Product existingProduct = productRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Produto não Encontrado"));
        existingProduct.setDescricao(updatedProduct.getDescricao());
        existingProduct.setCompra(updatedProduct.getCompra());
        existingProduct.setValidade(updatedProduct.getValidade());
        existingProduct.setQuantidade(updatedProduct.getQuantidade());

        Product savedProduct = productRepository.saveAndFlush(existingProduct);


        return ResponseEntity.ok(savedProduct);
    }


    @Operation(summary = "Deletar Produto")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Produto deletado com sucesso!");
    }


    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<String> handleProductNotFound(ProductNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
    
}
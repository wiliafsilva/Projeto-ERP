package com.projetoerp.ERPEstoque.Services;

import com.projetoerp.ERPEstoque.Exceptions.ProductNotFoundException;
import com.projetoerp.ERPEstoque.Models.Product;
import com.projetoerp.ERPEstoque.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product createProduct(Product produto) {
        return productRepository.save(produto);
    }

    public void deleteProduct(Long id) {
        if(!productRepository.existsById(id)) throw new ProductNotFoundException(id);
        productRepository.deleteById(id);
    }


}

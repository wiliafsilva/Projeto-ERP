package com.projetoerp.ERPEstoque.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoerp.ERPEstoque.Models.Stock;
import com.projetoerp.ERPEstoque.Repository.StockRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "produtos do estoque")
@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/estoque")
public class StockController {

    @Autowired
    private StockRepository stockRepository;

    @Operation(summary = "Listar Estoque")
    @GetMapping
    public ResponseEntity<List<Stock>> getStock() {
        List<Stock> estoque = stockRepository.findAll();
        return ResponseEntity.ok(estoque);
    }
}

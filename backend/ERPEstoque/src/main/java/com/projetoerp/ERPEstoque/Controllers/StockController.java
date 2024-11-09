package com.projetoerp.ERPEstoque.Controllers;


import com.projetoerp.ERPEstoque.Models.Stock;
import com.projetoerp.ERPEstoque.Repository.StockRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Endpoint de Produtos do Estoque")
@RestController
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

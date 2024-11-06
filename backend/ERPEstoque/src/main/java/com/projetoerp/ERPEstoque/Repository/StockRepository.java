package com.projetoerp.ERPEstoque.Repository;

import com.projetoerp.ERPEstoque.Models.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock,Long> {
}

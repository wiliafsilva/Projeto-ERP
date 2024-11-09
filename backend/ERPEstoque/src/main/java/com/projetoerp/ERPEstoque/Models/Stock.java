package com.projetoerp.ERPEstoque.Models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "estoque")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descricao")
    private String description;

    @Column(name = "unidade")
    private String unity;

    private LocalDateTime validade;

    private LocalDateTime compra;

    private Float peso_bruto;

    private Float peso_liquido;

    public Stock() {
    }

    public Stock(Long id, String description, LocalDateTime validade, String unity, Float peso_bruto, LocalDateTime compra, Float peso_liquido) {
        this.id = id;
        this.description = description;
        this.validade = validade;
        this.unity = unity;
        this.peso_bruto = peso_bruto;
        this.compra = compra;
        this.peso_liquido = peso_liquido;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnity() {
        return unity;
    }

    public void setUnity(String unity) {
        this.unity = unity;
    }

    public LocalDateTime getValidade() {
        return validade;
    }

    public void setValidade(LocalDateTime validade) {
        this.validade = validade;
    }

    public LocalDateTime getCompra() {
        return compra;
    }

    public void setCompra(LocalDateTime compra) {
        this.compra = compra;
    }

    public Float getPeso_bruto() {
        return peso_bruto;
    }

    public void setPeso_bruto(Float peso_bruto) {
        this.peso_bruto = peso_bruto;
    }

    public Float getPeso_liquido() {
        return peso_liquido;
    }

    public void setPeso_liquido(Float peso_liquido) {
        this.peso_liquido = peso_liquido;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        Stock stock = (Stock) object;
        return Objects.equals(id, stock.id) && Objects.equals(description, stock.description) && Objects.equals(unity, stock.unity) && Objects.equals(validade, stock.validade) && Objects.equals(compra, stock.compra) && Objects.equals(peso_bruto, stock.peso_bruto) && Objects.equals(peso_liquido, stock.peso_liquido);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, unity, validade, compra, peso_bruto, peso_liquido);
    }
}

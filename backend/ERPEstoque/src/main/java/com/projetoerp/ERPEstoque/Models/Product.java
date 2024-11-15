package com.projetoerp.ERPEstoque.Models;


import java.time.LocalDate;
import java.util.Objects;

import org.hibernate.annotations.CreationTimestamp;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "produto")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(hidden = true)
    private Long id;

    @Column(name = "descricao",nullable = false)
    private String descricao;

    @Column(name = "compra",nullable = false)
    @CreationTimestamp
    private LocalDate compra;

    @Column(name = "validade",nullable = false)
    private LocalDate validade;

    @Column(name = "quantidade",nullable = false)
    private int quantidade;


    public Product() {
    }

    public Product(Long id, LocalDate compra, String descricao, int quantidade, LocalDate validade) {
        this.id = id;
        this.descricao = descricao;
        this.compra = compra;
        this.validade = validade;
        this.quantidade = quantidade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao.trim();
    }

    public LocalDate getCompra() {
        return compra;
    }

    public void setCompra(LocalDate compra) {
        this.compra = compra;
    }

    public LocalDate getValidade() {
        return validade;
    }

    public void setValidade(LocalDate validade) {
        this.validade = validade;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        Product product = (Product) object;
        return quantidade == product.quantidade && Objects.equals(id, product.id) && Objects.equals(descricao, product.descricao) && Objects.equals(compra, product.compra) && Objects.equals(validade, product.validade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, descricao, compra, validade, quantidade);
    }
}

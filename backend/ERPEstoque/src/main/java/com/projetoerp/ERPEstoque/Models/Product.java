package com.projetoerp.ERPEstoque.Models;


import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "produto")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descricao",nullable = false)
    private String descricao;

    @Column(name = "compra",nullable = false)
    @CreationTimestamp
    private LocalDateTime data_de_compra;

    @Column(name = "validade",nullable = false)
    private LocalDateTime data_de_validade;

    @Column(name = "quantidade",nullable = false)
    private int quantidade;

    public Product(Long id, String descricao, LocalDateTime data_de_compra, LocalDateTime data_de_validade, int quantidade) {
        this.id = id;
        this.descricao = descricao;
        this.data_de_compra = data_de_compra;
        this.data_de_validade = data_de_validade;
        this.quantidade = quantidade;
    }

    public Product() {
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
        this.descricao = descricao;
    }

    public LocalDateTime getData_de_compra() {
        return data_de_compra;
    }

    public void setData_de_compra(LocalDateTime data_de_compra) {
        this.data_de_compra = data_de_compra;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public LocalDateTime getData_de_validade() {
        return data_de_validade;
    }

    public void setData_de_validade(LocalDateTime data_de_validade) {
        this.data_de_validade = data_de_validade;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        Product product = (Product) object;
        return quantidade == product.quantidade && Objects.equals(id, product.id) && Objects.equals(descricao, product.descricao) && Objects.equals(data_de_compra, product.data_de_compra) && Objects.equals(data_de_validade, product.data_de_validade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, descricao, data_de_compra, data_de_validade, quantidade);
    }
}

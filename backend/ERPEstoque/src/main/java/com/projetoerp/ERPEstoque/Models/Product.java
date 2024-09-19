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

    @Column(name = "nome",nullable = false)
    private String nome;

    @Column(name = "descricao",nullable = false)
    private String descricao;

    @Column(name = "tipo",nullable = false)
    private String tipo;

    @Column(name = "createdAt")
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name = "validade")
    private LocalDateTime data_de_validade;

    public Product(Long id, String descricao, String nome, String tipo, LocalDateTime data_de_validade, LocalDateTime createdAt) {
        this.id = id;
        this.descricao = descricao;
        this.nome = nome;
        this.tipo = tipo;
        this.data_de_validade = data_de_validade;
        this.createdAt = createdAt;
    }

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
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
        return Objects.equals(id, product.id) && Objects.equals(nome, product.nome) && Objects.equals(descricao, product.descricao) && Objects.equals(tipo, product.tipo) && Objects.equals(createdAt, product.createdAt) && Objects.equals(data_de_validade, product.data_de_validade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, descricao, tipo, createdAt, data_de_validade);
    }
}

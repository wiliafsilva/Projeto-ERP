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

    @Column(name = "unidade", length = 2)
    private String unidade;

    @Column(name = "validade",nullable = false)
    private LocalDateTime data_de_validade;

    @Column(name = "quantidade",nullable = false)
    private int quantidade;

    @Column(nullable = true)
    private Float peso_bruto;

    @Column(nullable = true)
    private Float peso_liquido;


    public Product() {
    }

    public Product(Long id, LocalDateTime data_de_compra, String descricao, int quantidade, LocalDateTime data_de_validade, String unidade, Float peso_bruto,Float peso_liquido) {
        this.id = id;
        this.data_de_compra = data_de_compra;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.data_de_validade = data_de_validade;
        this.unidade = unidade;
        this.peso_bruto = peso_bruto;
        this.peso_liquido = peso_liquido;
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

    public String getUnidade() {
        return unidade;
    }

    public void setUnidade(String unidade) {
        this.unidade = unidade;
    }

    public LocalDateTime getData_de_validade() {
        return data_de_validade;
    }

    public void setData_de_validade(LocalDateTime data_de_validade) {
        this.data_de_validade = data_de_validade;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
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
        Product product = (Product) object;
        return quantidade == product.quantidade && Objects.equals(id, product.id) && Objects.equals(descricao, product.descricao) && Objects.equals(data_de_compra, product.data_de_compra) && Objects.equals(unidade, product.unidade) && Objects.equals(data_de_validade, product.data_de_validade) && Objects.equals(peso_bruto, product.peso_bruto) && Objects.equals(peso_liquido, product.peso_liquido);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, descricao, data_de_compra, unidade, data_de_validade, quantidade, peso_bruto, peso_liquido);
    }
}

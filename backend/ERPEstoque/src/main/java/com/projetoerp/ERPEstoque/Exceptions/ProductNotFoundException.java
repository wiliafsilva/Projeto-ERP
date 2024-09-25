package com.projetoerp.ERPEstoque.Exceptions;



public class ProductNotFoundException extends RuntimeException{

    //@ResponseStatus(HttpStatus.NOT_FOUND)
    public ProductNotFoundException (Long id ) {
        super("Produto não encontrado: "+ id);
    }
}

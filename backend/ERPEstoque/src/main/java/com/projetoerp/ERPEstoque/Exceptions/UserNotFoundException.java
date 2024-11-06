package com.projetoerp.ERPEstoque.Exceptions;


public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException (Long id ) {
        super("Usuário não encontrado: " + id);
    }
}

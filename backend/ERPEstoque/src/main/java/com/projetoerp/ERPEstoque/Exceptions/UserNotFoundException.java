package com.projetoerp.ERPEstoque.Exceptions;


public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException() {
        super("Usuário não encontrado.");
    }

    public UserNotFoundException (Long id ) {
        super("Usuário não encontrado: " + id);
    }

    public UserNotFoundException(String id) {
        super("Usuário não encontrado: " + id);
    }
}

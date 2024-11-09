package com.projetoerp.ERPEstoque.Exceptions;


public class UserAlreadyRegisteredException extends RuntimeException{

    public UserAlreadyRegisteredException (String username) {
        super("Usuário já registrado:" + username);
    }
}

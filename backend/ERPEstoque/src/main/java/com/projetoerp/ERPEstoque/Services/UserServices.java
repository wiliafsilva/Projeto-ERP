package com.projetoerp.ERPEstoque.Services;

import com.projetoerp.ERPEstoque.Exceptions.UserNotFoundException;
import com.projetoerp.ERPEstoque.Models.User;
import com.projetoerp.ERPEstoque.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {

    @Autowired
    private UserRepository productRepository;

    public User createUser(User produto) {
        return productRepository.save(produto);
    }

    public void deleteUser(Long id) {
        if(!productRepository.existsById(id)) throw new UserNotFoundException(id);
        productRepository.deleteById(id);
    }
}

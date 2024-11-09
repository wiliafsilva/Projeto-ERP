package com.projetoerp.ERPEstoque.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.projetoerp.ERPEstoque.Exceptions.UserNotFoundException;
import com.projetoerp.ERPEstoque.Models.User;
import com.projetoerp.ERPEstoque.Repository.UserRepository;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public User findById(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuário Não Encontrado"));
        return user;
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User createUser(User user) {
        user = new User(
            user.getUsername(),
            user.getEmail(),
            passwordEncoder.encode(user.getPassword())
        );
        return userRepository.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        User existingUser = this.findById(id);
        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));

        return userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
        if(!userRepository.existsById(id)) throw new UserNotFoundException(id);
        userRepository.deleteById(id);
    }
}

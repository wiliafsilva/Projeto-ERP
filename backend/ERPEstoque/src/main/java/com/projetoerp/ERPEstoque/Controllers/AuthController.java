package com.projetoerp.ERPEstoque.Controllers;


import com.projetoerp.ERPEstoque.Exceptions.UserNotFoundException;
import com.projetoerp.ERPEstoque.Forms.LoginForm;
import com.projetoerp.ERPEstoque.Models.User;
import com.projetoerp.ERPEstoque.Services.UserServices;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import javax.crypto.SecretKey;

@Tag(name = "Endpoint de Autenticação")
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserServices userService;

    SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @Operation(summary = "Autenticar usuário")
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginForm loginForm) {
        User user = userService.findByUsername(loginForm.getUsername());

        if (user == null || !user.getPassword().equals(loginForm.getPassword())) {
            throw new UserNotFoundException("Usuário ou senha incorretos.");
        }

        String token = generateToken(user);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private String generateToken(User user) {
        return Jwts.builder()
            .setSubject(user.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000))
            .signWith(key, SignatureAlgorithm.HS256) 
            .compact();
    }

    public static class JwtResponse {
        private String token;

        public JwtResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }
}

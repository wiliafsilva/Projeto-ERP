package com.projetoerp.ERPEstoque.Repository;

import com.projetoerp.ERPEstoque.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    User findByUsername(String username);
}

package com.northmarket.service;

import com.northmarket.dto.LoginRequest;
import com.northmarket.dto.UserDTO;
import com.northmarket.entity.User;
import com.northmarket.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public abstract class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public abstract User findByUsername(String username);

    public abstract User registerUser(UserDTO userDTO);

    public abstract String authenticateUser(LoginRequest loginRequest);
}

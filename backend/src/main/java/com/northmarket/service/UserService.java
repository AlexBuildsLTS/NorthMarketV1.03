package com.northmarket.service;

import com.northmarket.dto.LoginRequest;
import com.northmarket.dto.UserDTO;
import com.northmarket.entity.User;

public interface UserService {

    User registerUser(UserDTO userDTO);

    String authenticateUser(LoginRequest loginRequest);

    User findByUsername(String username);
}

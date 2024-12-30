package com.northmarket.controller;

import com.northmarket.dto.JwtResponse;
import com.northmarket.dto.LoginRequest;
import com.northmarket.dto.UserDTO;
import com.northmarket.service.UserService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final ModelMapper modelMapper;

    @Autowired
    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserDTO userDTO) {
        try {
            userService.registerUser(userDTO);
            return ResponseEntity.ok("User registered successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JwtResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        String jwt = userService.authenticateUser(loginRequest);
        return ResponseEntity.ok(new JwtResponse(jwt));
    }

    @PostMapping("/api/settings")
    public ResponseEntity<String> updateSettings(
            @RequestParam(required = false) MultipartFile profilePicture,
            @RequestParam(required = false) String about,
            @RequestParam(required = false) String password,
            @RequestParam(required = false) String newPassword
    ) {
        // Update profile picture, about section, and password logic here
        return ResponseEntity.ok("Settings updated successfully");
    }

}

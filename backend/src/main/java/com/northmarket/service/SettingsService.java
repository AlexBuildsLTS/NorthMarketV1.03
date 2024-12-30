package com.northmarket.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class SettingsService {
    public void updateProfilePicture(MultipartFile file) {
        // Save the file to the server or cloud storage
    }

    public void updateAbout(String about) {
        // Update the about section for the user
    }

    public void updatePassword(String password, String newPassword) {
        // Validate current password and update it with newPassword
    }
}

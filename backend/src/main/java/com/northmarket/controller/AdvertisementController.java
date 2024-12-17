package com.northmarket.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.northmarket.dto.AdvertisementDTO;
import com.northmarket.service.AdvertisementService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/advertisements")
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    @Autowired
    public AdvertisementController(AdvertisementService advertisementService) {
        this.advertisementService = advertisementService;
    }

    @PostMapping
    public ResponseEntity<AdvertisementDTO> createAdvertisement(
            @Valid @RequestBody AdvertisementDTO advertisementDTO,
            Authentication authentication) {
        String username = authentication.getName();
        AdvertisementDTO createdAd = advertisementService.createAdvertisement(advertisementDTO, username);
        return ResponseEntity.ok(createdAd);
    }

    @GetMapping("/valid")
    public ResponseEntity<List<AdvertisementDTO>> getAllValidAdvertisements() {
        return ResponseEntity.ok(advertisementService.findAllValidAdvertisements());
    }

    @PreAuthorize("hasRole('SELLER')")
    @PostMapping
    public ResponseEntity<AdvertisementDTO> createAdvertisement(@RequestBody AdvertisementDTO advertisementDTO, Principal principal) {
        String username = principal.getName();
        AdvertisementDTO createdAd = advertisementService.createAdvertisement(advertisementDTO, username);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAd);
    }
}

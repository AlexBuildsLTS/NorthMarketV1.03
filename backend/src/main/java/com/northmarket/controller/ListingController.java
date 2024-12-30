package com.northmarket.controller;

import com.northmarket.entity.Listing;
import com.northmarket.service.ListingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/listings")
@RequiredArgsConstructor
public class ListingController {
    private final ListingService listingService;

    @PostMapping
    @PreAuthorize("hasRole('SELLER')")
    public ResponseEntity<Listing> createListing(@RequestBody Listing listing) {
        return ResponseEntity.ok(listingService.createListing(listing));
    }

    @GetMapping("/seller")
    @PreAuthorize("hasRole('SELLER')")
    public ResponseEntity<List<Listing>> getSellerListings() {
        // Replace with authenticated user's ID
        String sellerId = "sellerId-placeholder";
        return ResponseEntity.ok(listingService.getSellerListings(sellerId));
    }

    @GetMapping
    public ResponseEntity<List<Listing>> getAllListings(@RequestParam String sellerId,
                                                        @RequestParam int page,
                                                        @RequestParam int size) {
        return ResponseEntity.ok(listingService.getAllListings(sellerId, page, size));
    }
}

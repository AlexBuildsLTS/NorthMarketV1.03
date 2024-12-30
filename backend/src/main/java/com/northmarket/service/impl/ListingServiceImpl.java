package com.northmarket.service.impl;

import com.northmarket.entity.Listing;
import com.northmarket.repository.ListingRepository;
import com.northmarket.service.ListingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ListingServiceImpl implements ListingService {
    private final ListingRepository listingRepository;

    @Override
    public Listing createListing(Listing listing) {
        return listingRepository.save(listing);
    }

    @Override
    public List<Listing> getAllListings(String sellerId, int page, int size) {
        // Example implementation; use pagination logic here
        return listingRepository.findAll();
    }

    @Override
    public List<Listing> getSellerListings(String sellerId) {
        return listingRepository.findBySellerId(sellerId);
    }
}

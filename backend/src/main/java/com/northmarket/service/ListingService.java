package com.northmarket.service;

import com.northmarket.entity.Listing;

import java.util.List;

public interface ListingService {
    Listing createListing(Listing listing);

    List<Listing> getAllListings(String sellerId, int page, int size);

    List<Listing> getSellerListings(String sellerId);
}

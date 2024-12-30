package com.northmarket.repository;

import com.northmarket.entity.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListingRepository extends JpaRepository<Listing, Long> {
    List<Listing> findBySellerId(String sellerId);
}

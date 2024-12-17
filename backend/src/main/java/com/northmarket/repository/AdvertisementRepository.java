package com.northmarket.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.northmarket.entity.Advertisement;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {

    @Query("SELECT a FROM Advertisement a WHERE a.createdAt >= :validSince")
    List<Advertisement> findAllValidAdvertisements(LocalDateTime validSince);
}

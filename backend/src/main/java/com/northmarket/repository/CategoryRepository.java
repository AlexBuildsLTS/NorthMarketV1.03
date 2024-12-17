package com.northmarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.northmarket.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    boolean existsByName(String name);
}

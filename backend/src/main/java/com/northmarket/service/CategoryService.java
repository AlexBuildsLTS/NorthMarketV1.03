package com.northmarket.service;

import java.util.List;

import com.northmarket.entity.Category;

public interface CategoryService {

    Category createCategory(Category category);

    List<Category> findAll();
}

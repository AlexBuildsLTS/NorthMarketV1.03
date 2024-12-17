package com.northmarket.service.impl;

import lombok.Getter;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.northmarket.entity.Category;
import com.northmarket.repository.CategoryRepository;
import com.northmarket.service.CategoryService;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private static final Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);
    private final CategoryRepository categoryRepository;
    @Getter
    private final ModelMapper modelMapper;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Category createCategory(Category category) {
        if (categoryRepository.existsByName(category.getName())) {
            logger.warn("Category name {} already exists", category.getName());
            throw new IllegalArgumentException("Category name must be unique.");
        }
        Category savedCategory = categoryRepository.save(category);
        logger.info("Category {} created successfully with ID {}", savedCategory.getName(), savedCategory.getId());
        return savedCategory;
    }

    @Override
    public List<Category> findAll() {
        List<Category> categories = categoryRepository.findAll();
        logger.info("Fetched {} categories", categories.size());
        return categories;
    }

}

package com.northmarket.service.impl;

import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.northmarket.dto.AdvertisementDTO;
import com.northmarket.entity.Advertisement;
import com.northmarket.repository.AdvertisementRepository;
import com.northmarket.repository.CategoryRepository;
import com.northmarket.service.AdvertisementService;
import com.northmarket.entity.Category;
import com.northmarket.service.UserService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;

@Service
public class AdvertisementServiceImpl implements AdvertisementService {

    private static final Logger logger = LoggerFactory.getLogger(AdvertisementServiceImpl.class);
    private final AdvertisementRepository advertisementRepository;
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;
    private final UserService userService;

    @Autowired
    public AdvertisementServiceImpl(AdvertisementRepository advertisementRepository, CategoryRepository categoryRepository, ModelMapper modelMapper, UserService userService) {
        this.advertisementRepository = advertisementRepository;
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    @Override
    public AdvertisementDTO createAdvertisement(AdvertisementDTO advertisementDTO, String username) {
        User user = (User) userService.findByUsername(username);
        logger.info("User {} is creating an advertisement", username);

        Advertisement advertisement = modelMapper.map(advertisementDTO, Advertisement.class);

        // Fetch Category by ID
        Optional<Category> categoryOpt = Optional.empty();
        if (categoryOpt.isEmpty()) {
            logger.warn("Category not found with id {}", advertisementDTO.getCategoryId());
            throw new IllegalArgumentException("Category not found with id " + advertisementDTO.getCategoryId());
        }
        advertisement.setCategory(categoryOpt.get());

        advertisement.setUser(user);
        Advertisement savedAd = advertisementRepository.save(advertisement);
        logger.info("Advertisement '{}' created successfully with ID {}", savedAd.getTitle(), savedAd.getId());

        // Map back to DTO, setting categoryId
        AdvertisementDTO savedAdDTO = modelMapper.map(savedAd, AdvertisementDTO.class);
        savedAdDTO.setCategoryId(savedAd.getCategory().getId());

        return savedAdDTO;
    }

    @Override
    public List<AdvertisementDTO> findAllValidAdvertisements() {
        // Define "valid" as advertisements created within the last 30 days (adjust as needed)
        LocalDateTime validSince = LocalDateTime.now().minusDays(30);
        List<Advertisement> validAds = advertisementRepository.findAllValidAdvertisements(validSince);
        logger.info("Fetched {} valid advertisements", validAds.size());
        List<AdvertisementDTO> collect;
        collect = validAds.stream()
                .map(ad -> {
                    AdvertisementDTO dto = modelMapper.map(ad, AdvertisementDTO.class);
                    dto.setCategoryId(ad.getCategory().getId());
                    return dto;
                })
                .collect(toCollection());
        return collect;
    }

    private Collector<? super AdvertisementDTO, Object, List<AdvertisementDTO>> toCollection() {
        return null;
    }
}

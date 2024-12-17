package com.northmarket.service;

import java.util.List;

import com.northmarket.dto.AdvertisementDTO;

public interface AdvertisementService {

    AdvertisementDTO createAdvertisement(AdvertisementDTO advertisementDTO, String username);

    List<AdvertisementDTO> findAllValidAdvertisements();
}

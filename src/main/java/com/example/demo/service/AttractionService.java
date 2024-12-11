package com.example.demo.service;

import com.example.demo.model.Attraction;
import com.example.demo.repository.AttractionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttractionService {

    @Autowired
    private AttractionRepository attractionRepository;

    public Attraction addAttraction(Attraction attraction) {
        return attractionRepository.save(attraction);
    }
}

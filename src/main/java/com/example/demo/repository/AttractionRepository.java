package com.example.demo.repository;

import com.example.demo.model.Attraction;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AttractionRepository {

    @PersistenceContext
    private EntityManager entityManager;

    // Method to get attractions by city
    public List<Attraction> findByCity(String city) {
        return entityManager.createQuery("SELECT a FROM Attraction a WHERE a.city = :city", Attraction.class)
                            .setParameter("city", city)
                            .getResultList();
    }

    // Method to save an attraction
    public Attraction save(Attraction attraction) {
        if (attraction.getId() == null) {
            entityManager.persist(attraction); // Insert if no ID
            return attraction;
        } else {
            return entityManager.merge(attraction); // Update if ID exists
        }
    }
}

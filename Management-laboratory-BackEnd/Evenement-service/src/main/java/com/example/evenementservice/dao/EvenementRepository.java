package com.example.evenementservice.dao;


import com.example.evenementservice.entities.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import java.util.List;


public interface EvenementRepository extends JpaRepository<Evenement, Long> {

    Evenement saveAndFlush(Evenement e);
    Evenement findEvenementByTitre(String titre);
    List<Evenement> findAll();
}

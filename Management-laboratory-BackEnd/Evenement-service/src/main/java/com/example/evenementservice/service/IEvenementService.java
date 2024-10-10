package com.example.evenementservice.service;

import com.example.evenementservice.entities.Evenement;

import java.util.List;

public interface IEvenementService {
    public Evenement addEvenement(Evenement e);
    void deleteEvenementById(Long id);
    public Evenement updateEvenement(Evenement e);

    public Evenement findEvenement(Long id);

    public List<Evenement> findAll();
    public Evenement findEveByTitre(String titre);
}

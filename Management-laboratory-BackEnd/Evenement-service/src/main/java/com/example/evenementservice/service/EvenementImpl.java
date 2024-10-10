package com.example.evenementservice.service;

import com.example.evenementservice.dao.EvenementRepository;
import com.example.evenementservice.entities.Evenement;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@AllArgsConstructor
@Service
public class EvenementImpl implements IEvenementService {
    EvenementRepository evenementRepository;
    @Override
    public Evenement addEvenement(Evenement e) {
        evenementRepository.save(e);
        return e;
    }

    @Override
    public void deleteEvenementById(Long id) {
        evenementRepository.deleteById(id);
    }

    @Override
    public Evenement updateEvenement(Evenement e) {
        return evenementRepository.saveAndFlush(e);
    }

    @Override
    public Evenement findEvenement(Long id) {
         Evenement e= evenementRepository.findById(id).get();
        return e;
    }

    @Override
    public List<Evenement> findAll() {
         List evs = evenementRepository.findAll();
        return evs;
    }

    @Override
    public Evenement findEveByTitre(String titre) {
        return evenementRepository.findEvenementByTitre(titre);
    }
}

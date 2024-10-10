package com.example.outilsservice.service;

import com.example.outilsservice.dao.OutilRepository;
import com.example.outilsservice.entities.Outil;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@AllArgsConstructor
@Service
public class OutilImpl implements IOutilService {
    OutilRepository outilRepository;
    @Override
    public Outil addOutil(Outil e) {
        outilRepository.save(e);
        return e;
    }

    @Override
    public void deleteOutilById(Long id) {
        outilRepository.deleteById(id);
    }

    @Override
    public Outil updateOutil(Outil e) {
        return outilRepository.saveAndFlush(e);
    }

    @Override
    public Outil findOutil(Long id) {
         Outil e= outilRepository.findById(id).get();
        return e;
    }

    @Override
    public List<Outil> findAll() {
         List outils = outilRepository.findAll();
        return outils;
    }

    @Override
    public Outil findOutBySource(String src) {
        return outilRepository.findOutilBySource(src);
    }
}

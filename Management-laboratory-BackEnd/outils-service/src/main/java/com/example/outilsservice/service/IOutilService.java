package com.example.outilsservice.service;

import com.example.outilsservice.entities.Outil;

import java.util.List;

public interface IOutilService {
    public Outil addOutil(Outil o);
    void deleteOutilById(Long id);
    public Outil updateOutil(Outil o);

    public Outil findOutil(Long id);

    public List<Outil> findAll();
    public Outil findOutBySource(String src);
}

package com.example.publicationservice.service;


import com.example.publicationservice.entities.Publication;

import java.util.List;

public interface IPublicationService {
    public Publication addPublication(Publication pub);
    void deletePublicationById(Long id);
    public Publication updatePublication(Publication pub);

    public Publication findPublication(Long id);

    public List<Publication> findAll();
    public List<Publication> findPublicationByType(String type);


}

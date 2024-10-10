package com.example.publicationservice.service;


import com.example.publicationservice.PublicationServiceApplication;
import com.example.publicationservice.dao.PublicationRepository;
import com.example.publicationservice.entities.Publication;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PublicationImpl implements IPublicationService   {
    PublicationRepository publicationRepository;
    @Override
    public Publication addPublication(Publication pub) {
        publicationRepository.save(pub);
        return pub;
    }

    @Override
    public void deletePublicationById(Long id) {
       publicationRepository.deleteById(id);

    }

    @Override
    public Publication updatePublication(Publication pub) {
        return publicationRepository.saveAndFlush(pub);
    }

    public Publication findPublication(Long id){
        Publication p = publicationRepository.findById(id).get();
        return p;

    }
    public List<Publication> findAll(){
        List pubs = publicationRepository.findAll();
        return pubs;
    }
    public List<Publication> findPublicationByType(String type){
        List<Publication> pubs = publicationRepository.findByType(type);
        return pubs;
    }
}

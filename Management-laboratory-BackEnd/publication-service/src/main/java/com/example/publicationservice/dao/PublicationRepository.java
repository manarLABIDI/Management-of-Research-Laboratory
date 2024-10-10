package com.example.publicationservice.dao;


import com.example.publicationservice.entities.Publication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface PublicationRepository extends JpaRepository<Publication, Long> {
   List<Publication> findByType(String type);
    List<Publication> findAll();


    Publication deletePublicationById(Long id);


   Publication saveAndFlush(Publication p);
}

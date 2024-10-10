package com.example.outilsservice.dao;



import com.example.outilsservice.entities.Outil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestController
public interface OutilRepository extends JpaRepository<Outil, Long> {

    Outil saveAndFlush(Outil e);

    Outil findOutilBySource(String src);

}

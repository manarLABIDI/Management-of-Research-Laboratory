package com.example.publicationservice.controller;


import com.example.publicationservice.entities.Publication;
import com.example.publicationservice.service.IPublicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
//@RequestMapping("/publications")
public class PublicationRestController {
    private final IPublicationService publicationService;

    @GetMapping("/publications")
    public List<Publication> findMembres() {
        return publicationService.findAll();
    }

    @GetMapping("/publications/{id}")
    public Publication findPublicationById(@PathVariable Long id) {
        return publicationService.findPublication(id);
    }

    @GetMapping("/type")
    public List<Publication> findPublicationByType(@RequestParam String type) {
        return publicationService.findPublicationByType(type);
    }

    ///POST
    @PostMapping("/publication")
    public Publication addPublication(@RequestBody Publication p)
    {
        return publicationService.addPublication(p);
    }

    @DeleteMapping(value="/{id}")
    public void deletePublication(@PathVariable Long id) {
        publicationService.deletePublicationById(id);
    }
    @PutMapping(value="/{id}")
    public Publication updatePub(@PathVariable Long id, @RequestBody Publication p) {
        p.setId(id);
        return publicationService.updatePublication(p);
    }




}

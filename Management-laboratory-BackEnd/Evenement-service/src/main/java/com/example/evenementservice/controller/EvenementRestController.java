package com.example.evenementservice.controller;

import com.example.evenementservice.entities.Evenement;
import com.example.evenementservice.service.IEvenementService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
//@RequestMapping("/Evenements")
public class EvenementRestController {

    private final IEvenementService evenementService;

    @GetMapping("/evenements")
    public List<Evenement> findMembres() {
        return evenementService.findAll();
    }

    @GetMapping("/evenements/{id}")
    public Evenement findEvenementById(@PathVariable Long id) {
        return evenementService.findEvenement(id);
    }

    @GetMapping("/evenements/titre")
    public Evenement findOneEvenementByTitre(@RequestParam String titre) {
        return evenementService.findEveByTitre(titre);
    }

    ///POST
    @PostMapping("/evenement")
    public Evenement addEvenement(@RequestBody Evenement e)
    {
        return evenementService.addEvenement(e);
    }

    @DeleteMapping(value="/evenements/{id}")
    public void deleteEvenement(@PathVariable Long id) {
        evenementService.deleteEvenementById(id);
    }


    @PutMapping(value="/evenement/{id}")
    public Evenement updateEvenement(@PathVariable Long id, @RequestBody
    Evenement e)
    {
        e.setId(id);
        return evenementService.updateEvenement(e);
    }

}

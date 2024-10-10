package com.example.outilsservice.controller;

import com.example.outilsservice.entities.Outil;
import com.example.outilsservice.service.IOutilService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
//@RequestMapping("/Evenements")
public class OutilRestController {

    private final IOutilService outilService;

    @GetMapping("/outils")
    public List<Outil> findOutils() {
        return outilService.findAll();
    }


    @GetMapping("/outils/source")
    public Outil findOneOutilBySource(@RequestParam String source) {
        return outilService.findOutBySource(source);
    }

    ///POST
    @PostMapping("/outil")
    public Outil addNewOutil(@RequestBody Outil e)
    {
        return outilService.addOutil(e);
    }

    @DeleteMapping(value="/outils/{id}")
    public void deleteOutil(@PathVariable Long id) {
        outilService.deleteOutilById(id);
    }


    @PutMapping(value="/evenement/{id}")
    public Outil updateOutil(@PathVariable Long id, @RequestBody
    Outil e)
    {
        e.setId(id);
        return outilService.updateOutil(e);
    }
    @GetMapping("/outils/{id}")
    public Outil findOutilById(@PathVariable(name = "id") Long id){
    return outilService.findOutil(id);
    }

}

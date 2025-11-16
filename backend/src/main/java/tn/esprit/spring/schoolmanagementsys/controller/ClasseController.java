package tn.esprit.spring.schoolmanagementsys.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.schoolmanagementsys.entity.Classe;
import tn.esprit.spring.schoolmanagementsys.repository.ClasseRepository;
import tn.esprit.spring.schoolmanagementsys.service.ClasseService;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ClasseController {

    private final ClasseService service;
    @GetMapping
    public List<Classe> getAllClasses() {
        return service.getAllClasses();
    }

    @PostMapping
    public Classe addClasse(@RequestBody Classe c) {
        return service.addClasse(c);
    }

    @PutMapping("/{id}")
    public Classe updateClasse(@PathVariable Long id, @RequestBody Classe c) {
        return service.updateClasse(id, c);
    }

    @DeleteMapping("/{id}")
    public void deleteClasse(@PathVariable Long id) {
        service.deleteClasse(id);
    }
}

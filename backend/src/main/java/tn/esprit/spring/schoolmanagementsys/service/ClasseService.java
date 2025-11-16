package tn.esprit.spring.schoolmanagementsys.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.spring.schoolmanagementsys.entity.Classe;
import tn.esprit.spring.schoolmanagementsys.repository.ClasseRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClasseService {

    private final ClasseRepository repo;

    public List<Classe> getAllClasses() {
        return repo.findAll();
    }

    public Classe addClasse(Classe c) {
        return repo.save(c);
    }

    public Classe updateClasse(Long id, Classe updated) {
        Classe c = repo.findById(id).orElseThrow(() -> new RuntimeException("Classe not found"));
        if (updated.getNom() != null) c.setNom(updated.getNom());
        if (updated.getNiveau() != null) c.setNiveau(updated.getNiveau());
        if (updated.getCapacite() != 0) c.setCapacite(updated.getCapacite());
        return repo.save(c);
    }

    public void deleteClasse(Long id) {
        repo.deleteById(id);
    }
}

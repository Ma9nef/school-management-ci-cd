package tn.esprit.spring.schoolmanagementsys.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.spring.schoolmanagementsys.entity.Classe;

public interface ClasseRepository extends JpaRepository<Classe, Long> {
}

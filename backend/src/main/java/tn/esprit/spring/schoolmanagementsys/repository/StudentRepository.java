package tn.esprit.spring.schoolmanagementsys.repository;
import tn.esprit.spring.schoolmanagementsys.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {



}

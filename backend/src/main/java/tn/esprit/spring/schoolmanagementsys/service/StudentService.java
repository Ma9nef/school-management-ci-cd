package tn.esprit.spring.schoolmanagementsys.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.spring.schoolmanagementsys.entity.Student;
import tn.esprit.spring.schoolmanagementsys.repository.StudentRepository;

import java.util.List;


@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student addStudent(Student s){
        return studentRepository.save(s);
    }


    public void deleteStudent(Long id) {
         studentRepository.deleteById(id);
    }
    public Student updateStudent(Long id, Student updated) {
        Student s = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        if (updated.getName() != null) s.setName(updated.getName());
        if (updated.getPrenom() != null) s.setPrenom(updated.getPrenom());
        if (updated.getAge() != 0) s.setAge(updated.getAge());
        if (updated.getClasse() != null) s.setClasse(updated.getClasse());

        return studentRepository.save(s);
    }


}



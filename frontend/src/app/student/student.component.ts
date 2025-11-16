import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { ClasseService } from '../services/classe.service';
import { Classe } from '../models/classe';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  classes: Classe[] = []; // 🔹 for dropdown
  newStudent: Student = { name: '', prenom: '', age: 0 };
  editingStudent: Student | null = null;

  constructor(
    private studentService: StudentService,
    private classeService: ClasseService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
    this.loadClasses();
  }

  loadStudents() {
    this.studentService.getAll().subscribe(data => this.students = data);
  }

  loadClasses() {
    this.classeService.getAll().subscribe(data => {
      console.log('Classes loaded:', data);
      this.classes = data;
    });
  }

  addStudent() {
    if (this.editingStudent) {
      // update
      this.studentService.update(this.editingStudent.id!, this.newStudent).subscribe(() => {
        this.loadStudents();
        this.cancelEdit();
      });
    } else {
      // add
      this.studentService.add(this.newStudent).subscribe(() => {
        this.loadStudents();
        this.newStudent = { name: '', prenom: '', age: 0 };
      });
    }
  }
  
  

  editStudent(s: Student) {
    this.editingStudent = s;
  
    this.newStudent = {
      id: s.id,
      name: s.name,
      prenom: s.prenom,
      age: s.age,
      classe: s.classe   // Important !
    };
  }
  

  cancelEdit() {
    this.editingStudent = null;
    this.newStudent = { name: '', prenom: '', age: 0 };
  }

  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(() => this.loadStudents());
  }
}

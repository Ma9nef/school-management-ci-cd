import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClasseService } from '../services/classe.service';
import { Classe } from '../models/classe';

@Component({
  selector: 'app-classe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  classes: Classe[] = [];
  newClasse: Classe = { nom: '', niveau: '', capacite: 0 };
  editingClasse: Classe | null = null;

  constructor(private classeService: ClasseService) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses() {
    this.classeService.getAll().subscribe(data => this.classes = data);
  }

  addClasse() {
    if (this.editingClasse) {
      this.classeService.update(this.editingClasse.id!, this.newClasse)
        .subscribe(() => {
          this.loadClasses();
          this.cancelEdit();
        });
    } else {
      this.classeService.add(this.newClasse).subscribe(() => {
        this.loadClasses();
        this.newClasse = { nom: '', niveau: '', capacite: 0 };
      });
    }
  }

  editClasse(c: Classe) {
    this.editingClasse = c;
  
    // we copy the fields manually, including the id
    this.newClasse = {
      id: c.id,
      nom: c.nom,
      niveau: c.niveau,
      capacite: c.capacite
    };
  }
  
  cancelEdit() {
    this.editingClasse = null;
    this.newClasse = { nom: '', niveau: '', capacite: 0 };
  }

  deleteClasse(id: number) {
    this.classeService.delete(id).subscribe(() => this.loadClasses());
  }
}

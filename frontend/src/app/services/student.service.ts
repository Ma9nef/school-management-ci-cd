import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8081/api/students'; // Your Spring Boot endpoint

  constructor(private http: HttpClient) {}

  // ✅ Get all students
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  // ✅ Add a new student
  add(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }

  // ✅ Update an existing student
  update(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/${id}`, student);
  }

  // ✅ Delete a student
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

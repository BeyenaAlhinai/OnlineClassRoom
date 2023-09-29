import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/students`);
  }

  getAttendanceData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/attendance`);
  }
  
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    // Return the observable from the HTTP post request
    return this.http.post<any>(`${this.baseUrl}/upload`, formData);
  }

  // Assuming you have a method to handle adding uploaded files
  addUploadedFile(uploadedFile: any): void {
    // Implement your logic for adding the uploaded file to the application data
    // e.g., store it in a list or update a service property
    console.log('Uploaded file added:', uploadedFile);
  }
}

// attendance.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.css']
})
export class AttendanceComponent implements OnInit {
  attendanceData: any;
  students: any;
  date : any;
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    // Fetch students and attendance data
    this.studentService.getStudents().subscribe(
      (students: any[]) => {
        this.students = students;
      },
      error => {
        console.error('Error fetching student data', error);
      }
    );

    this.studentService.getAttendanceData().subscribe(
      (attendanceData: any[]) => {
        this.attendanceData = attendanceData;
      },
      error => {
        console.error('Error fetching attendance data', error);
      }
    );
  }

  getStudentName(studentId: string): string {
    const student = this.students.find((s: { id: string; }) => s.id === studentId);
    return student ? student.name : 'Unknown';
  }
}

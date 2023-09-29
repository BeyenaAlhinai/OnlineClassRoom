import { Component, OnDestroy } from '@angular/core';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnDestroy {
  selectedFile: File | null = null;
  allowedFileTypes = ['text/plain', 'image/jpeg', 'image/png', 'application/pdf'];
  private subscription: Subscription | undefined;
  uploadError: string | null = null;
  uploadSuccess: boolean = false;

  constructor(private studentService: StudentService) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0] as File;

    if (file && this.allowedFileTypes.includes(file.type)) {
      this.selectedFile = file;
    } else {
      this.selectedFile = null;
      Swal.fire({
        icon: 'error',
        title: 'Invalid File Type',
        text: 'Please choose a valid file type (Text, JPEG, PNG, PDF).',
      });
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.subscription = this.studentService.uploadFile(this.selectedFile).subscribe(
        (response: { id: any; filename: any; }) => {
          console.log('File upload response:', response);

          const uploadedFile = {
            id: response.id,
            filename: response.filename,
            originalname: this.selectedFile?.name || 'Untitled',
            uploaderId: 'CURRENT_USER_ID',
            uploadDate: new Date().toISOString()
          };

          this.studentService.addUploadedFile(uploadedFile);

          Swal.fire({
            icon: 'success',
            title: 'File Uploaded Successfully',
            showConfirmButton: true,
            timer: 1500
          });
        },
        (error: any) => {
          console.error('Error uploading file:', error);
          Swal.fire({
            icon: 'error',
            title: 'File Upload Failed',
            text: 'Please try again later.',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'No File Selected',
        text: 'Please choose a file to upload.',
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

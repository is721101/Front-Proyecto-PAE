import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../../../services/upload.service';
@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.less']
})
export class ListUploadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private uploadService: UploadFileService) {
    this.fileUploads = this.uploadService.getFiles();
   }

  ngOnInit(): void {
  }

}

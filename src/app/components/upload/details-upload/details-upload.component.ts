import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.less']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: string;
  constructor() { }

  ngOnInit(): void {
  }

}

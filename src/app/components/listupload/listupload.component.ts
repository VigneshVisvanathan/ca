import { Component, OnInit } from '@angular/core';
import { UploadfileService } from '../../services/uploadfile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listupload',
  templateUrl: './listupload.component.html',
  styleUrls: ['./listupload.component.css']
})
export class ListuploadComponent implements OnInit {

 
  showFile = false;
  fileUploads: Observable<string[]>;
 
  constructor(private uploadService: UploadfileService) { }
 
  ngOnInit() {
  }
 
  showFiles(enable: boolean) {
    this.showFile = enable;
 
    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}

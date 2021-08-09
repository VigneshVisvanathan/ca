import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detailsupload',
  templateUrl: './detailsupload.component.html',
  styleUrls: ['./detailsupload.component.css']
})
export class DetailsuploadComponent implements OnInit {
  @Input() fileUpload: string;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthorsServiceService } from '../authors-service.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors
  constructor(service:AuthorsServiceService) {
    this.authors=service.getAuthors();
   }

  ngOnInit(): void {
  }

}

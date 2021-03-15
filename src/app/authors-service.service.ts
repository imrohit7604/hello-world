import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsServiceService {
  getAuthors()
  {
    return ["Author1","Author2","Author3","Author4","Author5"]
  }
  constructor() { }
}

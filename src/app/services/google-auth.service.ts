import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  URI = 'http://localhost:3000/auth/';
  constructor(private http: HttpClient) { }

  Login(){
    return this.http.get(this.URI+"google")
  }
}

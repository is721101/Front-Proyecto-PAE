import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  URI = '/auth/';
  constructor(private http: HttpClient) { }

  Login(){
    return this.http.get(this.URI+"google")
  }
}

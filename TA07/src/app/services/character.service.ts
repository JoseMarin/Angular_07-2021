import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://localhost:3000/characters");
  }

  getById(id: string) {
    return this.http.get(`http://localhost:3000/characters/${id}`);
  }

  add(data: any) {
    return this.http.post(`http://localhost:3000/characters/`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }

}

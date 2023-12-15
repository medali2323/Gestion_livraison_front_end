import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionLivraisonServiceService {
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) {}

getAll(model: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${model}/`);
}

getById(model: string, id: number): Observable<any> {
  console.log(`${this.apiUrl}/${model}/${id}/`);
  
  return this.http.get(`${this.apiUrl}/${model}/${id}/`);
}

create(model: string, data: any): Observable<any> {
  console.log(data);
  
  return this.http.post(`${this.apiUrl}/${model}/`, data);
}

update(model: string, id: number, data: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${model}/${id}/`, data);
}

delete(model: string, id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${model}/${id}/`);
}
getcolisforexpparetat(code_expediteur:number,code_etat:number){
  return this.http.get<any>(this.apiUrl+"/colis/list_colis_expediteur_by_etat/"+code_expediteur+"/"+code_etat);

}
getEtatscolis(id:any):Observable<any>{
  return this.http.get<any>(this.apiUrl+"/details_colis/"+id+"/");

}
all_with_etat():Observable<any>{
  return this.http.get<any>(this.apiUrl+"/all_with_etat/");

}
register(data: any): Observable<any> {
  console.log(data);
  
  return this.http.post("http://127.0.0.1:8000/api/register", data);
}
login(data: any): Observable<any> {
  console.log(data);
  
  return this.http.post("http://127.0.0.1:8000/api/login", data);
}

}

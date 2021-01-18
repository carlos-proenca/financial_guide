import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Operation } from "./operation.model";

@Injectable({providedIn: 'root'})
export class OperationsService {

  private _baseUrl = "https://financial-guide-back.herokuapp.com/api/operations";

  constructor(private _api: HttpClient) { }

  getOperations(): Observable<Operation[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxMSwibmFtZSI6ImNhcmxvcyIsInJvbGUiOiJBRE1JTiJ9LCJpYXQiOjE2MTA5MzU3NzksImV4cCI6MTYxMDkzOTM3OX0.8VvULDwQ6JG-2YLnFKIEckH-n5FLfjm_vIGLFtkKG2U'
      })
    };
    return this._api.request<Operation[]>("GET", this._baseUrl, httpOptions);
  }
}

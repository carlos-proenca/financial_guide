import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Balance } from "./balances.model";

@Injectable({providedIn: 'root'})
export class BalancesService {

  private _baseUrl = "https://financial-guide-back.herokuapp.com/api/balances";

  constructor(private _api: HttpClient) { }

  getBalances(): Observable<Balance[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxMSwibmFtZSI6ImNhcmxvcyIsInJvbGUiOiJBRE1JTiJ9LCJpYXQiOjE2MTA5MzU3NzksImV4cCI6MTYxMDkzOTM3OX0.8VvULDwQ6JG-2YLnFKIEckH-n5FLfjm_vIGLFtkKG2U'
      })
    };
    return this._api.request<Balance[]>("GET", this._baseUrl, httpOptions);
  }
}

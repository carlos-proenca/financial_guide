import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BillingCycle } from "./billing-cycles.model";

@Injectable({providedIn: 'root'})
export class BillingCycleService {

  private _baseUrl = "https://financial-guide-back.herokuapp.com/api/balances/1/billing/cycles";

  constructor(private _api: HttpClient) { }

  getBillingCycles(): Observable<BillingCycle[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxMSwibmFtZSI6ImNhcmxvcyIsInJvbGUiOiJBRE1JTiJ9LCJpYXQiOjE2MTA5MzU3NzksImV4cCI6MTYxMDkzOTM3OX0.8VvULDwQ6JG-2YLnFKIEckH-n5FLfjm_vIGLFtkKG2U'
      })
    };
    return this._api.request<BillingCycle[]>("GET", this._baseUrl, httpOptions);
  }
}

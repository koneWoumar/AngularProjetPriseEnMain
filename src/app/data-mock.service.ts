import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IData } from './jxc_tp2_angular-main/IData';
import { DATA } from './jxc_tp2_angular-main/mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  constructor() { }

  getAll(): Observable<IData[]>{
    return of(DATA);
}

}

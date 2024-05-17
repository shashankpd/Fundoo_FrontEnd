import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private drawerState=new BehaviorSubject(false)
  currDrawerState=this.drawerState.asObservable();
 
  private searchString = new BehaviorSubject('');
  currSearchString=this.searchString.asObservable();
  
  constructor() { }
  updateDrawerState(val:boolean)
  {
    this.drawerState.next(val)

  }
  updateSearchString(state:string){
    this.searchString.next(state)
  }
}

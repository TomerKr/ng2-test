import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

export interface Store{
  [key: string]: {date: Date, text: string}
}

@Injectable()
export class MockStoreService {

  private store = {};
  private observableStore = new Subject<Store>();

  constructor() {
  }

  public getStore(): Observable<Store>{
    return this.observableStore;
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     this.store = {
    //       resource: {
    //         date: new Date(),
    //         text: 'Foo'
    //       }
    //     };
    //     resolve(this.store)
    //   },1000);
    // });
  }

  public fetchData(configuration: string | Function){
    if(typeof configuration === "string"){
      console.log(`Got config string: ${configuration}`);
      setTimeout(() => {
        this.store = {
          resource: {
            date: new Date(),
            text: 'String'
          }
        };
        console.log('Updated my journal');
        this.observableStore.next(this.store);
      },1000);
    }
    else{
      console.log(`Got config function that returned: ${configuration()}`);
      const data = configuration();
      setTimeout(() => {
        this.store = {
          resource: data
        };
        console.log('Updated my journal');
        this.observableStore.next(this.store);
      },1000);
    }
  }

}

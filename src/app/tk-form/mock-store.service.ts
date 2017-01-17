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

      setTimeout(() => {
        this.store = {
          resource: {
            date: new Date(),
            text: 'Foo'
          }
        };
        console.log('Updated my journal');
        this.observableStore.next(this.store);
        // resolve(this.store)
        setTimeout(() => {
          this.store = {
            resource: {
              date: new Date(),
              text: 'Foo'
            }
          };
          console.log('Updated my journal2');
          this.observableStore.next(this.store);
          // resolve(this.store)
        },10000);
      },1000);


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

}

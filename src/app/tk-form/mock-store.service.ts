import { Injectable } from '@angular/core';

export interface Store{
  [key: string]: {date: Date, text: string}
}

@Injectable()
export class MockStoreService {

  private store = {};

  constructor() {

  }

  public getStore(): Promise<Store>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.store = {
          resource: {
            date: new Date(),
            text: 'Foo'
          }
        };
        resolve(this.store)
      },1000);
    });
  }

}

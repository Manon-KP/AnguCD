import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getCDById(id: number): CD {
    const cd = this.getCDs().find(cd => cd.id === id);
    if (cd) {
      return cd;
    }
    else {
      throw new Error('CD not found');
    }
  }

  getCDs(): CD[] {
    return [
      {
        id: 1,
        title: 'The Darkside of the Moon',
        author: 'Pink Floyd',
        price: 20,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Dark_Side_of_the_Moon.png/220px-Dark_Side_of_the_Moon.png',
        releaseDate: new Date(1973, 3, 1),
        quantity: 1
      },
      {
        id: 2,
        title: 'Pulse',
        author: 'Pink Floyd',
        price: 25,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Pink_Floyd_-_Pulse.png/220px-Pink_Floyd_-_Pulse.png',
        releaseDate: new Date(1995, 4, 29),
        quantity: 200,
        onsale: true
      },
      {
        id: 3,
        title: 'Pulse1',
        author: 'Pink Floyd',
        price: 25,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Pink_Floyd_-_Pulse.png/220px-Pink_Floyd_-_Pulse.png',
        releaseDate: new Date(1995, 4, 29),
        quantity: 0
      }
    ];
  }

}

import { Component, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-list-cd',
  standalone: false,
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCDComponent implements OnInit {
  listcd!: CD[];

  ngOnInit(): void {
    this.listcd = [
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
            quantity: 2,
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
    ]
  }

}

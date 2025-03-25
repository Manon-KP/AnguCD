import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CD } from '../models/cd.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  standalone: false,
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {

  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex!: RegExp;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');
    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.minLength(0)]],
      thumbnail: [null, [Validators.required, Validators.pattern(this.thumbRegex)]],
      releaseDate: [null, [Validators.required, Validators.minLength(0)]],
      quantity: [null, [Validators.required, Validators.minLength(0)]],

    },
      { updateOn: 'blur' }
    );

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        price: formValue.price,
        thumbnail: formValue.thumbnail,
        releaseDate: formValue.releaseDate,
        quantity: formValue.quantity,
        onsale: false,
      }
    });
  }

  // image test : https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg
  onSubmit(): void {
    // Ajouter un nouveau CD
    console.log("Ajout de : " + this.currentCD);
  }

}

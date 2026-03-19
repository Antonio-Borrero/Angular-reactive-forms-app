import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.html',
})

export class BasicPage { 

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  isValidField (fieldName: string): Boolean | null {
    return (this.myForm.controls[fieldName].errors && this.myForm.controls[fieldName].touched)
  }

  getFieldError(fieldName: string): string | null {

    if (!this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)){
      switch (key){
        case 'required': return 'Este campo es requerido';
        case 'minlenght': return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min': return `Valor mínimo de ${errors['min'].min}`;
      }
    }

    return null
    
  }

  onSubmit(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset();
  }
}

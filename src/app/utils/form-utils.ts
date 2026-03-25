import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

async function sleep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 2500)
  })
}

export class FormUtils {
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

  static getTextErrors(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
        case 'email':
          return `El correo ingresado no es un correo valido`;
        case 'emailTaken':
          return `El correo electrónico ya esta en uso`;
        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'El valor ingresado no parece un correo electrónico';
          }
          return 'Error de patron contra expresión regular';

        default:
          return `Error de validación no controlado ${key}`;
      }
    }
    return null;
  }

  static isValidField(form: FormGroup, fieldName: string): Boolean | null {
    return !!form.controls[fieldName].errors && form.controls[fieldName].touched;
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    return this.getTextErrors(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return this.getTextErrors(errors);
  }

  static isFieldOneEqualToFieldTwo(field1: string, field2: string){
    return (FormGroup: AbstractControl) => {
      const Field1Value = FormGroup.get(field1)?.value;
      const Field2Value = FormGroup.get(field2)?.value;
      
      return Field1Value === Field2Value ? null : {passwordsNotEqual: true}
    }
  }

  static async CheckingServerResponse (control: AbstractControl): Promise<ValidationErrors | null> {
    await sleep();

    const formValue = control.value; 

    if(formValue === 'hola@mundo.com'){
      return {
        emailTaken: true,
      }
    }
    return null;
  }
}

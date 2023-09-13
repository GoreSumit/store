import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export const forbiddenNameValidator:ValidatorFn=(control:AbstractControl) : ValidationErrors | null => {
//     return control.value === 'bob'? {forbidden:'bob'} : null;
// };

export const forbiddenNameValidator =(name:string) :ValidatorFn=>{
 return (control:AbstractControl) : ValidationErrors | null => {
    return control.value === name? {forbidden:name} : null;
};
};


export const verifyPass:ValidatorFn=(control:AbstractControl) : ValidationErrors | null => {
    const pass = control.get('password')?.value;
    const pass2 = control.get('password2')?.value;

    return pass !== pass2? { match : false } : null;
};

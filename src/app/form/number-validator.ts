import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NumberValidator {
    static isNumbericValue (control: AbstractControl) : ValidationErrors | null{
        if (typeof +control.value === "number" && !isNaN(+control.value)) {
            return null;
        } else {
            return {notANumber : "Enter value is not a number"};
        }
    }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NumberValidator } from './number-validator'  // import custom validator

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  testForm : FormGroup = new FormGroup({});
  output!: number;
  showOutput:boolean = false;

  
  ngOnInit(): void {
    this.createFormControls();
  }


  // Form controls for all form fields are created here along with their validations
  createFormControls() : void{
    this.testForm = new FormGroup({
      firstNumber:  new FormControl(null,[Validators.required,NumberValidator.isNumbericValue]),
      secondNumber: new FormControl(null, [Validators.required, NumberValidator.isNumbericValue])

    })
  }  



  // On change function for firstNumber and secondNumber changes
  onTestFormChange(number1: number, number2: number){
    if(number1 && number2){
      this.output = number1/number2;
      isNaN(this.output) || this.output == Infinity ? this.showOutput = false : this.showOutput = true ;
    }else {
      this.showOutput = false;
    }
   
  }
}

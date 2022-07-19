import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test case to check if output is visiable
  it('should divide two  numbers and display result', () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    const num1 = 10;
    const num2 = 5;
    app.onTestFormChange(num1,num2);
    expect(app.output).toEqual(2);
    expect(app.showOutput).toBe(true);
  });


  // testcase to check if output is not visible
  it('should not display output', () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.componentInstance;
    const num1 = 10;
    const num2 = 0;
    app.onTestFormChange(num1,num2);
    expect(app.showOutput).toBe(false);
  });
});

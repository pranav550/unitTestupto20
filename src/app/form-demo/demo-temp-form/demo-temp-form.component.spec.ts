import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoTempFormComponent } from './demo-temp-form.component';
import { By } from '@angular/platform-browser';

describe('DemoTempFormComponent', () => {
  let component: DemoTempFormComponent;
  let fixture: ComponentFixture<DemoTempFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTempFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('[Email check invalid] should check email field is not valid', waitForAsync(() => {

    fixture.whenStable().then(()=>{
      let email = component.forgotForm.form.controls['useremail'];
      expect(email.valid).toBeFalsy();
      expect(component.forgotForm.valid).toBeFalsy();
      email.setValue('abc');
      expect(email.errors['email']).toBeTruthy();
    })
    
  }));
  fit('[Email check valid] should check email field is valid', waitForAsync(() => {

    fixture.whenStable().then(()=>{
      let email = component.forgotForm.form.controls['useremail'];
      email.setValue('abc@gmail.com');
      expect(email.valid).toBeTruthy();
      expect(component.forgotForm.valid).toBeTruthy();
    })
    
  }));
  fit('[Form Submit] should check Form is submitted Successfull', waitForAsync(() => {

    fixture.whenStable().then(()=>{
      let email = component.forgotForm.form.controls['useremail'];
      email.setValue('abc@gmail.com');
      component.submitForm();
      fixture.detectChanges();
      let successMsg = fixture.debugElement.query(By.css('#success-msg'));
      expect(successMsg.nativeElement.innerText).toBe(component.message);
    })
    
  }));
});

import { By } from '@angular/platform-browser';
import { HelloDirective } from './../hello.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveDemoComponent } from './custom-directive-demo.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';


describe('CustomDirectiveDemoComponent', () => {
  let component: CustomDirectiveDemoComponent;
  let fixture: ComponentFixture<CustomDirectiveDemoComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveDemoComponent, HelloDirective ],
      imports:[FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  fit('should test the directive for its change to div', () => {
    component.username = "Rudra";
    let btn = debugElement.query(By.css('button'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();

    let div = debugElement.query(By.css('#customDiv'));
    expect(div.nativeElement.innerText).toContain('Hello Rudra');
    expect(div.nativeElement.style.backgroundColor).toBe("green");
    
    div.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    console.log(div.nativeElement.style.background)
    expect(div.nativeElement.style.backgroundColor).toBe('orange');
    expect(div.nativeElement.style.fontSize).toBe('28px');
  });
});

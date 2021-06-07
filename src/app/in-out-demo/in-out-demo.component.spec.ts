import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InOutDemoComponent } from './in-out-demo.component';
import { DebugElement } from '@angular/core';
import { User } from './user';
import { By } from '@angular/platform-browser';

describe('InOutDemoComponent', () => {
  let userListComponent: InOutDemoComponent;
  let userDetailComponent: UserDetailComponent;
  let listfixture: ComponentFixture<InOutDemoComponent>;
  let detailfixure: ComponentFixture<UserDetailComponent>;
  let listDebugEl: DebugElement;
  let detailDebugEl: DebugElement;
  let user:User;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutDemoComponent, UserDetailComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    listfixture = TestBed.createComponent(InOutDemoComponent);
    userListComponent = listfixture.componentInstance;

    listDebugEl = listfixture.debugElement;
    
    user = new User();
    user.name = 'pranav';
    user.id = 1;
    user.age = 30;
    userListComponent.selectedUser = user;
    listfixture.detectChanges();

    detailfixure = TestBed.createComponent(UserDetailComponent);
    userDetailComponent = detailfixure.componentInstance;
    detailfixure.detectChanges();
    detailDebugEl = listfixture.debugElement;
  });

  fit('[input] - Should test the input changes', waitForAsync(() => {
   
    let idDiv = listDebugEl.query(By.css('#userid')).nativeElement.innerText;      
    expect(idDiv).toContain('1');

  listfixture.whenStable().then(()=>{
    let inputEl = listDebugEl.query(By.css('#username')).nativeElement.value;      
    expect(inputEl).toContain('pranav');
  });
}));

fit('[output] should check output changes are working or not', ()=>{
  user.age = 100;
  let selectUser:User;
  userDetailComponent.updateUser.subscribe((data)=>{
    console.log(data);
    selectUser = data;
  })
  userDetailComponent.userid = user.id;
  userDetailComponent.username = user.name;
  userDetailComponent.age = user.age;
  userDetailComponent.saveUser();
  expect(selectUser.age).toBe(user.age);
})

});

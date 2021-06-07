import { AuthService } from './../auth.service';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

class MockAuthService extends AuthService{
  public isAuthenticated(){
    return true;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let auth:AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule,HttpClientModule],
      providers:[AuthService]
    })
    .compileComponents();

    TestBed.overrideComponent(
      LoginComponent,
      {set:{providers:[{provide:AuthService, useClass:MockAuthService}]}}
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    auth = TestBed.inject(AuthService); 
  });

  fit('should check the service', () => {
    expect(auth instanceof AuthService).toBeTruthy();
  });

  fit('should inject service using inject function and check its instance', inject([AuthService],(injectedService:AuthService)=>{
    expect(injectedService).toBeTruthy();
    expect(injectedService instanceof AuthService).toBeTruthy();
  }))


  it('should test injected service injected using component overriding', ()=>{
    let overRiddenService = fixture.debugElement.injector.get(AuthService);
    expect(overRiddenService instanceof MockAuthService).toBeTruthy();
  })


});

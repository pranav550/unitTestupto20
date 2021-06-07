import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { HelloDirective } from './hello.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SquarePipe } from './square.pipe';
import { EnclosePipe } from './enclose.pipe';
import { SpyDemoComponent } from './spy-demo/spy-demo.component';
import { InOutDemoComponent } from './in-out-demo/in-out-demo.component';
import { UserDetailComponent } from './in-out-demo/user-detail/user-detail.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { DemoTempFormComponent } from './form-demo/demo-temp-form/demo-temp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    CustomDirectiveDemoComponent,
    HelloDirective,
    CustomPipeComponent,
    SquarePipe,
    EnclosePipe,
    SpyDemoComponent,
    InOutDemoComponent,
    UserDetailComponent,
    FormDemoComponent,
    DemoTempFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

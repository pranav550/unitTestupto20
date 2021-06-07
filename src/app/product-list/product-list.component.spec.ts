import { ProductService } from './../product.service';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement:DebugElement;
  let productService:ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports:[FormsModule, RouterTestingModule],
      providers:[ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.inject(ProductService);
    debugElement = fixture.debugElement;
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should test filter product list (done)', (done)=>{
    component.searchText = 'fresh';
    let productSpy = spyOn(productService,'filterProductList').and.callThrough();
     component.filterProductList({});
     productSpy.calls.mostRecent().returnValue.then(()=>{
      fixture.detectChanges();
      const value = debugElement.query(By.css("#product_0")).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done()
     })
    })

    fit('should test filter product list (async)', waitForAsync(()=>{
      component.searchText = 'fresh';
     let productSpy = spyOn(productService,'filterProductList').withArgs('fresh').and.callThrough();
       component.filterProductList({});
       fixture.whenStable().then(()=>{
        fixture.detectChanges();
        const value = debugElement.query(By.css("#product_0")).nativeElement.innerText;
        expect(value).toContain(component.searchText);
        })

      }))

      fit('should test filter product list (fakeAsync)', fakeAsync(()=>{
        component.searchText = 'fresh';
       let productSpy = spyOn(productService,'filterProductList').withArgs('fresh').and.callThrough();
         component.filterProductList({});
         tick();
          fixture.detectChanges();
          const value = debugElement.query(By.css("#product_0")).nativeElement.innerText;
          expect(value).toContain(component.searchText);
        }))
        
        fit('example fake async and tick - test the asynchronouts code in a synchronous way',()=>{
         fakeAsync(()=>{
           let isLoggedIn = false;
           setTimeout(()=>{
             isLoggedIn = true
           },100)
           expect(isLoggedIn).toBe(false);
           tick(50);
           expect(isLoggedIn).toBe(false);
           tick(50);
           expect(isLoggedIn).toBe(true);
         })
        })


});

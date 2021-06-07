import { MockSpyService } from './../mock-spy.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyDemoComponent } from './spy-demo.component';

describe('SpyDemoComponent', () => {
  let component: SpyDemoComponent;
  let fixture: ComponentFixture<SpyDemoComponent>;
  let mockService: MockSpyService;
  let demofetchData: any;
  let demoList:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyDemoComponent ],
      providers:[MockSpyService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockService = TestBed.inject(MockSpyService);

    // code for jasmine createSpy
    demofetchData = jasmine.createSpy('fetchData');
    demofetchData('Dummy Data Fetched');

    //code for jasmine.createSpyObj
    demoList = jasmine.createSpyObj('demoList',['add','remove','refresh']);
    demoList.add();
    demoList.remove(1);
    demoList.refresh();
  });

  fit('[spyOn] check spy method is callled', () => {
    let mockSpy = spyOn(mockService, 'getValue');
    component.ngOnInit();
    expect(mockSpy).toHaveBeenCalled();
  });

  fit('[jasmine.createSpy] should check demo data is defined',()=>{
    expect(demofetchData).toBeDefined();
  })
  fit('[jasmine.createSpy] should check demo data is Called',()=>{
    expect(demofetchData).toHaveBeenCalled();
  })
  fit('[jasmine.createSpy] should check demo data is defined once',()=>{
    expect(demofetchData.calls.count()).toBe(1);
  })
  fit('[jasmine.createSpyObj] should check demo data is defined',()=>{
    expect(demoList.add).toBeDefined();
    expect(demoList.remove).toBeDefined();
    expect(demoList.refresh).toBeDefined();
  })
  fit('[jasmine.createSpyObj] should check demo data is Called',()=>{
    expect(demoList.add).toHaveBeenCalled();
    expect(demoList.remove).toHaveBeenCalled();
    expect(demoList.refresh).toHaveBeenCalled();
  })
  fit('[jasmine.createSpyObj] should check demo data is defined once',()=>{
    expect(demoList.add.calls.count()).toBe(1);
    expect(demoList.remove.calls.count()).toBe(1);
    expect(demoList.refresh.calls.count()).toBe(1);
  })
});

import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './square.pipe';

describe('SquarePipe', () => {
  let pipe:SquarePipe;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquarePipe ],
      imports:[FormsModule]
    })
    .compileComponents();
    pipe = new SquarePipe();
  });
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  fit('Should check transform the number into its square', ()=>{
    expect(pipe.transform(10)).toBe(100);
    expect(pipe.transform('10a')).toBe('Not a number');
  })
});

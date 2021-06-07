import { EnclosePipe } from './enclose.pipe';

describe('EnclosePipe (with Paramerter)', () => {
  let pipe;
  beforeEach(()=>{
    pipe = new EnclosePipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  fit('should test pipe with parameter', ()=>{
    expect(pipe.transform('Simple Text', 'curly')).toBe('{Simple Text}');
  })
  fit('should test pipe without parameter', ()=>{
    expect(pipe.transform('Simple Text')).toBe('(Simple Text)');
  })
});

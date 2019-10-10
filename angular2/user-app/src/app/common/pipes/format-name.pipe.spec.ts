import { FormatNamePipe } from './format-name.pipe';

describe('FormatNamePipe', () => {
  let pipe: FormatNamePipe;

  beforeEach(() => {
    pipe = new FormatNamePipe();
  });

  it('convert name', () => {
    expect(pipe).toBeTruthy();
    expect(pipe.transform('ducuim')).toEqual('Mr ducuim');
    expect(pipe.transform('da silva')).toEqual('Mr da silva');
    expect(pipe.transform('da silva', true)).toEqual('MR DA SILVA');
    expect(pipe.transform('ducuim', true)).toEqual('MR DUCUIM');
    expect(pipe.transform('ducuim', false)).toEqual('Mr ducuim');
  });
});

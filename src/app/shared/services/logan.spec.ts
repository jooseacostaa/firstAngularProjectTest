import { TestBed } from '@angular/core/testing';
import { Logan } from './logan';

describe('Logan', () => {
  let service: Logan;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logan);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

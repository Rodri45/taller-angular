import { inject, TestBed } from '@angular/core/testing';
import { SerieService } from './serie.service';
describe('Service: Serie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieService]
    });
  });
  it('should ...', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));
});
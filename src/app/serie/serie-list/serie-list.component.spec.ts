/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Agregar esta importación
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SerieService } from '../serie.service'; // Importar el servicio si es necesario
import { SerieListComponent } from './serie-list.component';

describe('SerieListComponent', () => {
  let component: SerieListComponent;
  let fixture: ComponentFixture<SerieListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Agregar HttpClientTestingModule aquí
      declarations: [SerieListComponent],
      providers: [SerieService] // Asegúrate de proveer el servicio si es necesario
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

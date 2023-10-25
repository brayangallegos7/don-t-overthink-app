import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiendaPage } from './tienda.page';

describe('TiendaPage', () => {
  let component: TiendaPage;
  let fixture: ComponentFixture<TiendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TiendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

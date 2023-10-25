import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilJdPage } from './perfil-jd.page';

describe('PerfilJdPage', () => {
  let component: PerfilJdPage;
  let fixture: ComponentFixture<PerfilJdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilJdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

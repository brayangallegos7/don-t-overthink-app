import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilJtPage } from './perfil-jt.page';

describe('PerfilJtPage', () => {
  let component: PerfilJtPage;
  let fixture: ComponentFixture<PerfilJtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilJtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

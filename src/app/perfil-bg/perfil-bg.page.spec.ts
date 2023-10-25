import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilBgPage } from './perfil-bg.page';

describe('PerfilBgPage', () => {
  let component: PerfilBgPage;
  let fixture: ComponentFixture<PerfilBgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilBgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

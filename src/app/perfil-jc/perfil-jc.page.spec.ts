import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilJcPage } from './perfil-jc.page';

describe('PerfilJcPage', () => {
  let component: PerfilJcPage;
  let fixture: ComponentFixture<PerfilJcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilJcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

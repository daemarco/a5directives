import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretpasswordComponent } from './secretpassword.component';

describe('SecretpasswordComponent', () => {
  let component: SecretpasswordComponent;
  let fixture: ComponentFixture<SecretpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

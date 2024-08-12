import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachhomeComponent } from './coachhome.component';

describe('CoachhomeComponent', () => {
  let component: CoachhomeComponent;
  let fixture: ComponentFixture<CoachhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoachhomeComponent]
    });
    fixture = TestBed.createComponent(CoachhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

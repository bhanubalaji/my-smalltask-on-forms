import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterdataComponent } from './enterdata.component';

describe('EnterdataComponent', () => {
  let component: EnterdataComponent;
  let fixture: ComponentFixture<EnterdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

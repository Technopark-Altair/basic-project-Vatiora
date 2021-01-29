import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecComponent } from './myrec.component';

describe('MyrecComponent', () => {
  let component: MyrecComponent;
  let fixture: ComponentFixture<MyrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

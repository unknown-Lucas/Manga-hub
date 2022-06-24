import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVarComponent } from './top-var.component';

describe('TopVarComponent', () => {
  let component: TopVarComponent;
  let fixture: ComponentFixture<TopVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

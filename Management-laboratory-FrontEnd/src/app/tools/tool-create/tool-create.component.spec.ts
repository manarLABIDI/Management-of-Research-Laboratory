import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCreateComponent } from './tool-create.component';

describe('EventCreateComponent', () => {
  let component: ToolCreateComponent;
  let fixture: ComponentFixture<ToolCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

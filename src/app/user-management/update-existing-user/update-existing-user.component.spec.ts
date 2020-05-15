import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExistingUserComponent } from './update-existing-user.component';

describe('UpdateExistingUserComponent', () => {
  let component: UpdateExistingUserComponent;
  let fixture: ComponentFixture<UpdateExistingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExistingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExistingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

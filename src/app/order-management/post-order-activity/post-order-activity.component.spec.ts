import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOrderActivityComponent } from './post-order-activity.component';

describe('PostOrderActivityComponent', () => {
  let component: PostOrderActivityComponent;
  let fixture: ComponentFixture<PostOrderActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOrderActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOrderActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistEntriesComponent } from './wishlist-entries.component';

describe('WishlistEntriesComponent', () => {
  let component: WishlistEntriesComponent;
  let fixture: ComponentFixture<WishlistEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

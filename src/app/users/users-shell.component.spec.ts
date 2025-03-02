import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersShellComponent } from './users-shell.component';

describe('UsersShellComponent', () => {
  let component: UsersShellComponent;
  let fixture: ComponentFixture<UsersShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

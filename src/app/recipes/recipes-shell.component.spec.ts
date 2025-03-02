import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesShellComponent } from './recipes-shell.component';

describe('RecipesShellComponent', () => {
  let component: RecipesShellComponent;
  let fixture: ComponentFixture<RecipesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

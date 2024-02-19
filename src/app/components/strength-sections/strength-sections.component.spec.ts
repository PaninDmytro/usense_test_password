import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthSectionsComponent } from './strength-sections.component';

describe('StrengthSectionsComponent', () => {
  let component: StrengthSectionsComponent;
  let fixture: ComponentFixture<StrengthSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthSectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrengthSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

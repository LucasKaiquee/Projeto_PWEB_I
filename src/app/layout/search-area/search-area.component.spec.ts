import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAreaComponent } from './search-area.component';

describe('SearchAreaComponent', () => {
  let component: SearchAreaComponent;
  let fixture: ComponentFixture<SearchAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

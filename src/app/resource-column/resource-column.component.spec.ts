import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceColumnComponent } from './resource-column.component';

describe('ResourceColumnComponent', () => {
  let component: ResourceColumnComponent;
  let fixture: ComponentFixture<ResourceColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

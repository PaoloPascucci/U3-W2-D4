import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDettaglioComponent } from './post-dettaglio.component';

describe('PostDettaglioComponent', () => {
  let component: PostDettaglioComponent;
  let fixture: ComponentFixture<PostDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDettaglioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

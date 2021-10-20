import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleRoutePage } from './multiple-route.page';

describe('MultipleRoutePage', () => {
  let component: MultipleRoutePage;
  let fixture: ComponentFixture<MultipleRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleRoutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

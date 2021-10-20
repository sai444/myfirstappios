import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleVehiclePage } from './multiple-vehicle.page';

describe('MultipleVehiclePage', () => {
  let component: MultipleVehiclePage;
  let fixture: ComponentFixture<MultipleVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

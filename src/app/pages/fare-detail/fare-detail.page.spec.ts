import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FareDetailPage } from './fare-detail.page';

describe('FareDetailPage', () => {
  let component: FareDetailPage;
  let fixture: ComponentFixture<FareDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FareDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FareDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

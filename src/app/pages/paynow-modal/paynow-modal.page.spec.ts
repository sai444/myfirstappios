import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaynowModalPage } from './paynow-modal.page';

describe('PaynowModalPage', () => {
  let component: PaynowModalPage;
  let fixture: ComponentFixture<PaynowModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaynowModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaynowModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

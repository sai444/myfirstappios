import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmountModalPage } from './amount-modal.page';

describe('AmountModalPage', () => {
  let component: AmountModalPage;
  let fixture: ComponentFixture<AmountModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmountModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

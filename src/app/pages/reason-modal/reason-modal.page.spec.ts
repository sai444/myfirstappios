import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReasonModalPage } from './reason-modal.page';

describe('ReasonModalPage', () => {
  let component: ReasonModalPage;
  let fixture: ComponentFixture<ReasonModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReasonModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

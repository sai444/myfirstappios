import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdeliveryDetailPage } from './mdelivery-detail.page';

describe('MdeliveryDetailPage', () => {
  let component: MdeliveryDetailPage;
  let fixture: ComponentFixture<MdeliveryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdeliveryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdeliveryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

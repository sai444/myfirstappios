import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnGoingJobPage } from './on-going-job.page';

describe('OnGoingJobPage', () => {
  let component: OnGoingJobPage;
  let fixture: ComponentFixture<OnGoingJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnGoingJobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnGoingJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

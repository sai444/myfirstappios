import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmergenceContactPage } from './emergence-contact.page';

describe('EmergenceContactPage', () => {
  let component: EmergenceContactPage;
  let fixture: ComponentFixture<EmergenceContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergenceContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergenceContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

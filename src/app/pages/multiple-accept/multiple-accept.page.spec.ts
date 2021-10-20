import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleAcceptPage } from './multiple-accept.page';

describe('MultipleAcceptPage', () => {
  let component: MultipleAcceptPage;
  let fixture: ComponentFixture<MultipleAcceptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleAcceptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleAcceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

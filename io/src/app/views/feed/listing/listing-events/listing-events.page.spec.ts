import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingEventsPage } from './listing-events.page';

describe('ListingEventsPage', () => {
  let component: ListingEventsPage;
  let fixture: ComponentFixture<ListingEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingEventsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingBookTablePage } from './listing-book-table.page';

describe('ListingBookTablePage', () => {
  let component: ListingBookTablePage;
  let fixture: ComponentFixture<ListingBookTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingBookTablePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingBookTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

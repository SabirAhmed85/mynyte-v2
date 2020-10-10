import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedSearchPage } from './feed-search.page';

describe('FeedSearchPage', () => {
  let component: FeedSearchPage;
  let fixture: ComponentFixture<FeedSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedSearchPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

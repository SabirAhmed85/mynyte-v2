import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MyNytePage } from './mynyte.page';

describe('MyNytePage', () => {
  let component: MyNytePage;
  let fixture: ComponentFixture<MyNytePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyNytePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MyNytePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

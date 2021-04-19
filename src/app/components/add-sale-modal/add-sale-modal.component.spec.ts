import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/reducers';

import { AddSaleModalComponent } from './add-sale-modal.component';

describe('AddSaleModalComponent', () => {
  let component: AddSaleModalComponent;
  let fixture: ComponentFixture<AddSaleModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSaleModalComponent ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSaleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

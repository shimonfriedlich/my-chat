import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessagesBarComponent } from './send-messages-bar.component';

describe('SendMessagesBarComponent', () => {
  let component: SendMessagesBarComponent;
  let fixture: ComponentFixture<SendMessagesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessagesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessagesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

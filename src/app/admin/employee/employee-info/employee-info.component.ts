import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ActionTypeOnEmployee = 'CLOSE';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.scss',
})
export class EmployeeInfoComponent {
  @Input() employee: any;
  @Output() actionOnEmployee = new EventEmitter();

  emitEmployeeEvent(eventType: ActionTypeOnEmployee) {
    this.actionOnEmployee.emit(eventType);
  }
}

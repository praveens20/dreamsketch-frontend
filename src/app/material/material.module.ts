import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

const matModules = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModules],
  exports: [...matModules],
})
export class MaterialModule {}

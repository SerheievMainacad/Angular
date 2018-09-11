import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { todoComponent } from './todo-component/todo-component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [todoComponent],
  exports: [todoComponent]
})
export class todoModule {}

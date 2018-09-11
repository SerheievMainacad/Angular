import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { todoComponent } from './todo-component/todo-component';

@NgModule({
  imports: [CommonModule],
  declarations: [todoComponent],
  exports: [todoComponent]
})
export class todoModule {}

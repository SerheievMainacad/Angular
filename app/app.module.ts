import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { firstComponent } from './first-component/first-component';
import { secondComponent } from './second-component/second-component';
import { newComponent } from './new-component/new-component';
import { newComponentChild1 } from './new-component/new-component-child-1/new-component-child1';
import { newComponentChild2 } from './new-component/new-component-child-2/new-component-child2';
import { bindingComponent } from './binding-component/binding-component';
import { directiveComponent } from './directive-component/directive-component';
import { todoModule } from './todo/todo.module';
import { todoComponent } from './todo/todo-component/todo-component';
import { storageService } from './storage.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    todoModule,
    RouterModule.forRoot([
      { path: 'first', component: firstComponent },
      { path: 'second', component: secondComponent },
      { path: 'newchild', component: newComponent },
      { path: 'binding', component: bindingComponent },
      { path: 'directive', component: directiveComponent },
      { path: 'todo', component: todoComponent },
      { path: '', redirectTo: 'todo', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    firstComponent,
    secondComponent,
    newComponent,
    newComponentChild1,
    newComponentChild2,
    bindingComponent,
    directiveComponent
  ],
  bootstrap: [AppComponent],
  providers: [storageService]
})
export class AppModule {}

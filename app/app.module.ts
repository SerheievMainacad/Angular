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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'first', component: firstComponent },
      { path: 'second', component: secondComponent },
      { path: 'newchild', component: newComponent },
      { path: '', redirectTo: 'first', pathMatch: 'full' }
    ])
  ],
  declarations: [AppComponent, firstComponent, secondComponent, newComponent, newComponentChild1, newComponentChild2],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestLibComponent } from './test-lib/test-lib.component';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
    {path: '', pathMatch: 'full', component: TestLibComponent} 
    ])
  ],
  declarations: [TestLibComponent]
})
export class MylibModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    // RouterModule.forRoot(
    //   [
    //     {
    //       path: '',
    //       loadChildren: '@dynamic-load-module/mylib#MylibModule'
    //     }
    //   ],
    //   { initialNavigation: 'enabled' }
    // )
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

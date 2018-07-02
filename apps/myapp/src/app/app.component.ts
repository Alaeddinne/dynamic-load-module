import { Component, NgModuleFactoryLoader, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { TestLibComponent } from 'libs/mylib/src/lib/test-lib/test-lib.component'


@Component({
  selector: 'dynamic-load-module-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('divLib', { read: ViewContainerRef }) divLib;
  constructor(private loader: NgModuleFactoryLoader,
    private injector: Injector, ) {

  }

  ngOnInit() {

  }


  loadModule(){


    this.loader.load('@dynamic-load-module/mylib#MylibModule').then(ngModuleFactory => {

      const moduleRef = ngModuleFactory.create(this.injector);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(TestLibComponent);

      const ref = this.divLib.createComponent(compFactory);
    })
  }
}

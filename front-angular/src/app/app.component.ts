import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Event, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-angular';

  /**
   * Construtor responsável por trabalhar com a questão do LoadingBar na aplicação.
   */
  constructor(private SlimLoadingBarService: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
        this.navigationInterceptor(event);
    });
  }


  /**
   *
   * @param event Método responsável por tratar as condicionais em relação ao LoadingBar.
   */
  private navigationInterceptor(event: Event): void{
    if(event instanceof NavigationStart){
       this.SlimLoadingBarService.start();
    }

    if(event instanceof NavigationCancel || event instanceof NavigationError){
      this.SlimLoadingBarService.stop();
    }

    if(event instanceof NavigationEnd){
      this.SlimLoadingBarService.complete();
    }
  }
}

import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { CustomRouteReuseStrategy } from './core/route-reuse';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ]
};

import { inject, Injectable, Injector, NgZone } from '@angular/core';
import {
    RouteReuseStrategy,
    ActivatedRouteSnapshot,
    DetachedRouteHandle,
    Router,
} from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
    private storedHandles = new Map<string, DetachedRouteHandle>();
    refreshComponent = new Subject<void>();

    shouldDetach(route: ActivatedRouteSnapshot): boolean {  //prev route
        // const currParent = this.getRouteKey(route).split('/').filter((e => e))[0];
        // console.log(currParent, this.storedHandles.has(`/${currParent}`), route.routeConfig?.data?.['reuse'])
        return route.routeConfig?.data?.['reuse'] === true
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void { //prev route
        const prevParent = this.getRouteKey(route).split('/').filter((e => e))[0];
        // console.log(prevParent, this.storedHandles.has(`/${prevParent}`), route.routeConfig?.data?.['reuse'])
        const key = this.getRouteKey(route);
        // this.storedHandles.clear();
        this.clearStoredHandles(prevParent);
        this.storedHandles.set(key, handle);
    }

    clearStoredHandles(prevParent: string): void {
        if (!this.storedHandles.has(`/${prevParent}`)) {
            this.storedHandles.forEach((handle) => {
                if ((handle as any)?.componentRef?.instance?.ngOnDestroy) {
                    (handle as any).componentRef.instance.ngOnDestroy();
                }
            });
        }
        this.storedHandles.clear();
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean { //curr
        const key = this.getRouteKey(route);
        console.log(key, "Key")
        return this.storedHandles.has(key);
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { //curr
        // console.log("Retrieve",route)

        const key = this.getRouteKey(route);
        console.log(key, "key")
        return this.storedHandles.get(key) || null;
    }

    shouldReuseRoute(
        future: ActivatedRouteSnapshot,
        curr: ActivatedRouteSnapshot
    ): boolean {
        // console.log(future.routeConfig === curr.routeConfig,"Route",this.storedHandles)
        // return future.routeConfig === curr.routeConfig;
        return false;
    }

    private getRouteKey(route: ActivatedRouteSnapshot): string {
        return route.pathFromRoot.map((r) => r.url.join('/')).join('/');
        // return route.pathFromRoot[1]?.url.map((r) => r.path).join('/') || '';
    }

    triggerComponentRefresh(value: any = ''): void {
        this.refreshComponent.next(value);
    }
}


import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { UserDetailsComponent } from './components/user-list/user-details/user-details.component';
import { UserSubComponent } from './components/user-list/user-sub/user-sub.component';
import { BookDetailsComponent } from './components/book-list/book-details/book-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserListComponent,
        data: { reuse: true, parentName: 'users' },
    },
    {
        path: 'users/details',
        component: UserDetailsComponent,
    },
    {
        path: 'users/sub',
        component: UserSubComponent,
    },

    {
        path: 'books',
        component: BookListComponent,
        data: { reuse: true, parentName: 'books' },
    },
    {
        path: 'books/details',
        component: BookDetailsComponent
    }

];

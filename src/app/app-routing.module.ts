import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './pageNotFound/not-found.component';

import { CanDeactivateGuard }       from './auth/can-deactivate-guard.service';
import { AuthGuard }                from './auth/auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import {UploadDocumentComponent} from "./upload/Upload-Document.Component";
import {ViewDocumentComponent} from "./view/View-Document.Component";
import {ReviewDocumentComponent} from "./review/Review-Document.Component";
import {SearchDocumentComponent} from "./search/Search-Document.Component";
import {DocumentWorkFlowComponent} from "./workflow/Document-WorkFlow.Component";
import {SignDocumentComponent} from "./sign/Sign-Document.Component";

const appRoutes: Routes = [
  {
    path: 'upload',
    component: UploadDocumentComponent
  },
  {
        path: 'view',
        component: ViewDocumentComponent,

    },
    {
        path: 'review',
        component: ReviewDocumentComponent,

    },
    {
        path: 'search',
        component: SearchDocumentComponent,
    },
    {
        path: 'workflow',
        component: DocumentWorkFlowComponent,
    },
    { path: 'sign',
      component: SignDocumentComponent,

    },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
    declarations: [
      UploadDocumentComponent,
        ViewDocumentComponent,
        ReviewDocumentComponent,
        SearchDocumentComponent,
        DocumentWorkFlowComponent,
        SignDocumentComponent
    ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }

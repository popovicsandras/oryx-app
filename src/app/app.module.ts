import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ADF modules
import { AdfModule } from './adf.module';
import { AuthGuardBpm } from '@alfresco/adf-core';
import { AuthGuardEcm } from '@alfresco/adf-core';

// Custom stencils
import { StencilsModule } from './stencils.module';

// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OryxComponent } from './oryx/oryx.component';
import { LoginComponent } from './login/login.component';
import { AppsComponent } from './apps/apps.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { StartProcessComponent } from './start-process/start-process.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'apps',
    component: AppsComponent,
    canActivate: [ AuthGuardBpm ]
  },
  {
    path: 'oryx',
    component: OryxComponent,
    canActivate: [ AuthGuardBpm ]
  },
  {
    path: 'apps/:appId/tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardBpm ]
  },
  {
    path: 'apps/:appId/tasks/:taskId',
    component: TaskDetailsComponent,
    canActivate: [ AuthGuardBpm ]
  },
  {
    path: 'apps/:appId/start-process',
    component: StartProcessComponent,
    canActivate: [ AuthGuardBpm ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdfModule,
    StencilsModule
  ],
  declarations: [
    AppComponent,
    AppsComponent,
    HomeComponent,
    OryxComponent,
    LoginComponent,
    TasksComponent,
    TaskDetailsComponent,
    StartProcessComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

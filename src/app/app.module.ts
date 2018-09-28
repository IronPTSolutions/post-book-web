import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterComponent } from './components/misc/register/register.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserItemComponent } from './components/user/user-item/user-item.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostItemComponent } from './components/post/post-item/post-item.component';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserItemComponent,
    PostListComponent,
    PostItemComponent,
    PostFormComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

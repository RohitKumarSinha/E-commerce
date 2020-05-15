
// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {AutoCompleteModule} from 'primeng/autocomplete';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// env file
import { environment } from '../environments/environment';


// service
import {DataService} from './service/data.service';
import { DataShareService } from './service/data-share.service';
import { FakeBackendInterceptor } from './service/fake-backend.service';
import { WishlistEntriesComponent } from './product-management/wishlist-entries/wishlist-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WishlistEntriesComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    AutoCompleteModule,
//    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService, DataShareService,
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

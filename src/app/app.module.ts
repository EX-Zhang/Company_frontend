import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
    declarations: [
        AppComponent,
        InfoComponent,
        CompanyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NgxEchartsModule.forRoot({ echarts, }),
        HttpClientModule,
        Ng2SmartTableModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

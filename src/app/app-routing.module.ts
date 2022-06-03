import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [

    { path: 'Company/:Company_ID', component: InfoComponent },
    { path: 'Company', component: CompanyComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

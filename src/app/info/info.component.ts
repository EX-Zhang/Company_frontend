import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { EChartsOption } from 'echarts';

import { Info } from './info';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    CompanyInfo: any;

    echartsOption: any;

    constructor(private route: ActivatedRoute, private http: HttpClient, private titleService: Title) {

    }

    private get_CompanyInfo(Company_ID: string): void {

        var params = new HttpParams().set('Symbol', Company_ID);

        this.http.get('/Company/requestDetail', { params }).subscribe((result: any) => {

            this.CompanyInfo = result['Info'];

            this.titleService.setTitle(this.CompanyInfo['name'] + " Detail");

            this.echartsOption = JSON.parse(result['Option']);

        });

    }

    ngOnInit(): void {

        this.route.params.subscribe(params => {

            this.get_CompanyInfo(params['Company_ID']);

        });

    }

}



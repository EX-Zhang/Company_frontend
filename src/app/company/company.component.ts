import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { EChartsOption } from 'echarts';

import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    title: string;

    echart_mode: boolean;

    table_setting: any;
    table_data: LocalDataSource;

    echart_options: EChartsOption;

    constructor(private titleService: Title, private http: HttpClient) {

        this.title = 'Companies';

        this.echart_mode = false;

        this.table_setting = {

            actions: false,

            columns: {

                symbol: {

                    title: 'Symbol',
                    type: 'html',
                    valuePrepareFunction: (cell: any, row: any) => {
                        return '<a href="/Company/' + row.symbol + '">' + row.symbol + '</a>';
                    },

                },
                name: {

                    title: 'Company Name',
                    type: 'html',
                    valuePrepareFunction: (cell: any, row: any) => {
                        return '<a href="/Company/' + row.symbol + '">' + row.name + '</a>';
                    },

                },
                ipo_year: {

                    title: 'IPO Year',

                },
                country: {

                    title: 'Country',

                },
                sector: {

                    title: 'Sector',

                },
                last_sale: {

                    title: 'Last Sale',

                },

            },

        };

        this.table_data = new LocalDataSource();

        this.echart_options = {};

    }

    ngOnInit(): void {

        this.titleService.setTitle("Company Information");

        this.getCompanies();

    }

    getCompanies(): void {

        this.title = "Companies";

        this.requestData("Company");

    }

    getBySector(): void {

        this.title = "Companies by Sector";

        this.requestData("Sector");

    }

    getByCountry(): void {

        this.title = "Companies by Country";

        this.requestData("Country");

    }

    private requestData(Data_Type: string): void {

        var params = new HttpParams().set('type', Data_Type);

        this.http.get('/Company/requestData', { params }).subscribe((result: any) => {

            if (Data_Type == "Country" || Data_Type == "Sector") {

                this.echart_options = JSON.parse(result);
                this.echart_mode = true;

            }
            else {

                this.table_data.load(result);
                this.echart_mode = false;

            }

        });

    }

}

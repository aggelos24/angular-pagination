import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface size {
	number: number;
}

interface data {
	id: number;
	username: string;
	email: string;
	score: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	sizeSub;
	dataSub;

	pageContent: Array<data> = [];
	page: number;
	limit: number;
	sort: string;
	order: string;
	buttonArray: Array<number>;
	end: number;
	size: number;

	errorMessage: string;

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.page = 1;								//initialize data
		this.limit = 10;
		this.sort = 'id';
		this.order = 'asc';
		this.buttonArray = [1, 2, 3];
		this.errorMessage = '';

		this.getSize();								//call function getSize
		this.getData();								//call function getData
  }

	getSize() {
		let url: string = 'http://localhost:3000/size';				//this is the url from where we are going to get data
		this.sizeSub = this.http.get<size>(url).subscribe(data => {		//subscribe to server's response
			this.size = data.number;					//assign server's response to a variable
			this.end = Math.ceil(this.size / this.limit);			//this is the number of last page
			this.errorMessage = '';						//no error occured, so there is no error message
		}, error => {								//in case of errror
			this.pageContent = [];						//no data to display
			this.errorMessage = 'Probably json-server isnt running';	//display error message
		});
	}

	getData() {
		let url: string;
		this.end = Math.ceil(this.size / this.limit);				//this is the number of last page
		url = 'http://localhost:3000/data' + '?_page=' + this.page + '&_limit=' + this.limit + '&_sort=' + this.sort + '&_order=' + this.order;
																			//if the url seems complicated, read the documentation of json-server on github
		this.dataSub = this.http.get<data[]>(url).subscribe(data => {		//subscribe to server's response
			this.pageContent = data;					//assign server's response to a variable
			this.errorMessage = '';						//no error occured, so there is no error message
		}, error => {								//in case of errror
			this.pageContent = [];						//no data to display
			this.errorMessage = 'Probably json-server isnt running';	//display error message
		});
	}

	changePage(page: number) {
		this.page = page;							//set variable
		if (this.page == 1 || this.page == 2) {					//depending on selected page, display the correct buttons for pagination
			this.buttonArray = [1, 2, 3];
		}
		else if (this.page == this.end || this.page == this.end - 1) {
			this.buttonArray = [this.end - 2, this.end - 1, this.end];
		}
		else {
			this.buttonArray = [this.page - 1, this.page, this.page + 1];
		}
		this.getData();								//call function getData
	}

	changeLimit(limit: number) {
		this.limit = (limit == null || limit <= 0)? 10: limit;			//initialize limit if it is invalid
		this.page = 1;								//set page to 1
		this.buttonArray = [1, 2, 3];						//display the correct buttons
		this.getData();								//call function getData
	}

	changeSorting(column: string, order: string) {
		this.sort = column;							//set variables
		this.order = order;
		this.getData();
	}

	ngOnDestroy() {
		this.sizeSub.unsubscribe();						//you delete the subscriptions to server
		this.dataSub.unsubscribe();
	}
}

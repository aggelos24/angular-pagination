import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Size {
	number: number;
}

interface Data {
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
	sizeSub;									//variables for managing subscriptions
	dataSub;
	
	page: number;									//current page
	limit: number;									//page limit
	sort: string;									//property by which table is sorted
	order: string;									//ascending or descending order
	end: number;									//last page
	
	errorMessage: string;								//error message
	
	size: number;									//total data size
	tableData: Array<Data> = [];							//data displayed in table
	noData: boolean;								//true if empty table
	
	buttonArray: Array<number>;							//button values for pagination

	constructor(private http: HttpClient) {}
	
	@HostListener('document:keydown', ['$event'])					//when key is pressed
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == 'ArrowRight' && this.page != this.end) {		//if right arrow is pressed and current page isnt the last
			this.changePage(this.page + 1);					//go to next page
		}
		else if (event.key == 'ArrowLeft' && this.page != 1) {			//if left arrow is pressed and current page isnt the 1st
			this.changePage(this.page - 1);					//go to last page
		}
	}

	ngOnInit() {
		this.page = 1;								//initialize variables
		this.limit = 10;
		this.sort = 'id';
		this.order = 'asc';
		this.errorMessage = null;
		this.buttonArray = [1, 2, 3];

		this.getSize();								//call function getSize
	}

	getSize() {
		let url: string = 'http://localhost:3000/size';				//this is the url from where we are going to get data
		this.sizeSub = this.http.get<Size>(url).subscribe(data => {		//subscribe to server's response
			this.size = data.number;					//assign server's response to a variable
			this.errorMessage = null;					//no error occured, so there is no error message
			
			this.getData();							//call function getData
		}, error => {								//in case of errror
			this.connectionErrorHandler();					//call function connectionErrorHandler
		});
	}

	getData() {
		let url: string;
		this.end = Math.ceil(this.size / this.limit);				//calculate last page
		url = 'http://localhost:3000/data' + '?_page=' + this.page + '&_limit=' + this.limit + '&_sort=' + this.sort + '&_order=' + this.order;
																			//if the url seems complicated, read the documentation of json-server on github
		this.dataSub = this.http.get<Data[]>(url).subscribe(data => {		//subscribe to server's response
			this.tableData = data;						//assign server's response to a variable
			this.noData = false;
			this.errorMessage = '';						//no error occured, so there is no error message
		}, error => {								//in case of error
			this.connectionErrorHandler();					//call function connectionErrorHandler
		});
	}

	changePage(page: number) {
		this.page = page;							//refresh page
		if (this.page == 1 || this.page == 2) {					//depending on selected page, display the correct buttons for pagination
			this.buttonArray = [ 1, 2, 3 ];
		}
		else if (this.page == this.end || this.page == this.end - 1) {
			this.buttonArray = [ this.end - 2, this.end - 1, this.end ];
		}
		else {
			this.buttonArray = [ this.page - 1, this.page, this.page + 1 ];
		}
		
		this.getData();								//call function getData
	}

	changeLimit(limit: string) {
		this.limit = (Number(limit) <= 0)? 10: Number(limit);			//initialize limit if it is invalid
		this.page = 1;								//set page to 1
		this.buttonArray = [ 1, 2, 3 ];						//display the correct buttons
		
		this.getData();								//call function getData
	}

	changeSorting(column: string, order: string) {
		this.sort = column;							//refresh variables
		this.order = order;
		
		this.getData();								//call function getData
	}
	
	connectionErrorHandler() {
		this.tableData = [];							//no data to display
		this.noData = true;
		this.errorMessage = "Probably json-server isnt running";		//display error message
	}

	ngOnDestroy() {
		this.sizeSub.unsubscribe();						//delete subscriptions to server
		this.dataSub.unsubscribe();
	}
}

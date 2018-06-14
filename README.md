# Pagination example made with Angular

### Description
This is a simple, single-page application that gets data (generated with [JSON Generator](https://www.json-generator.com/)) from a fake REST API (I use [json-server](https://github.com/typicode/json-server)), sorts, paginates and displays them. The application requests data for one page at a time.

### Steps
* Install json-server
```
npm install -g json-server
```
* Download `angular-pagination` project
* cd to the path you have the `data.json` file and type:
```
json-server data.json
```
Now you have a fake REST API, dont interrupt it. Just click [here](https://aggelos24.github.io/angular-pagination/) to test it.

If you want to build it yourself, you will need to follow some additional steps:

* Install Angular
```
npm install -g @angular/cli
```
* Create new project
```
ng new myproject
```
* Copy `angular-pagination` project's files inside `src` and paste them in your `myproject/src` folder.
* Open a new terminal window, cd to your `myproject` folder and type:
```
ng serve --open
```
You are ready, the application must be running at [localhost:4200](http://localhost:4200/)

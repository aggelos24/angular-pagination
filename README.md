# Pagination example made with Angular

### Description
This is a simple, single-page application that gets data from a fake REST API (I use [json-server](https://github.com/typicode/json-server)), paginates and displays them. The application requests data for one page at a time.

### Steps
* Install Angular
```
npm install -g @angular/cli
```
* Install json-server
```
npm install -g json-server
```
* Create new project
```
ng new myproject
```
* Download angular-pagination, copy all the files inside src and paste them in your project's src folder.
* cd to the path you have the data.json file and type:
```
json-server --watch data.json
```
Now you have a fake REST API, dont interrupt it
* Open a new terminal window, cd to your project's folder and type:
```
ng serve --open
```
You are ready, application must be running at localhost:4200

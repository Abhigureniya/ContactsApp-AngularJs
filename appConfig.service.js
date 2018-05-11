(function(){
    var myApp = angular.module("ContactsApp");
    myApp.service("AppDataSvc", function AppConfig(AppNameSvc){

    this.name = AppNameSvc;
    this.author = "Abhijeet";
    this.company = "Java Brains";
    this.version = 1,
    this.builtDate = new Date().toDateString();

    });
})();

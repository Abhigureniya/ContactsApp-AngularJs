(function () {
    var myApp = angular.module("ContactsApp");
    myApp.controller("MyContactsController", ContactsCtrl);

    function ContactsCtrl(ContactDataSvc, $scope) {
        //console.log("Inside controller function");

        var self = this;

        this.editMode = false;
        self.addMode = false;
        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
            console.log(this.editMode);
        };

        this.saveUser = function () {
            this.toggleEditMode();
            var userData = this.selectedContact;
            if(self.addMode){
                ContactDataSvc.addUser(userData).then(function(){
                    self.successMessage = "Data Successfully Saved.";
            }, function () {
                self.errorMessage = "Something Went Wrong. Please try again.";
            });
            }else{
                 ContactDataSvc.saveUser(userData).then(function () {
                self.successMessage = "Data Successfully Updated.";
            }, function () {
                self.errorMessage = "Something Went Wrong. Please try again.";
            });
            }
           self.addMode = false;
        };
        ContactDataSvc.getContacts().then(function (data) {
            self.contacts = data;
            self.selectedContact = self.contacts[0];
            self.selectContact(0);
        });

        this.addUser = function () {
            this.selectedContact = {
                "id": new Date().toTimeString(),
                "picture": {
                    "large": "",
                    "medium": "",
                    "thumbnail": ""
                }
            };
            this.addMode = true;
            this.editMode = true;
        }

        this.selectContact = function (index) {
            this.successMessage = undefined;
            this.errorMessage = undefined;
            this.selectedContact = self.contacts[index];
        }
    }
})();

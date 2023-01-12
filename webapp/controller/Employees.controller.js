sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict"
        return Controller.extend("stk.starterkit.controller.Employees", {
            onInit: function () {
            },
            onBack: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteMaster")
            },
            onMotivatePress: function(oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<your_domain_name_goes_here>.com";
                var sSubject= "Good job!";
                var sBody = "You are doing well, thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            }, 
            onFirePress: function(oEvent) {
                var oModel = new sap.ui.model.json.JSONModel()
             oModel.loadData("https://evilinsult.com/generate_insult.php", {
                        lang:"en",
                         type: "json"
                    }).then(function() {
                        var sBody = oModel.getData().insult
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody)
        })
            }
        });
    });

   
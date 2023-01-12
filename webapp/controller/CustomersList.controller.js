sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomersList", {
            onInit: function () {
                
            }
        });
    });

    function onCustomerPress (oEvent){
    const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
    oRouter.navTo("CustomerDetails",{
        CustomerID:oEvent.getSource().getBindingContext().getObject().CustomerID
    })
};

function onCreateCustomerPress (){
    const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
    oRouter.navTo("CreateCustomer")
};

function onEmployeesPress (){
    const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
    oRouter.navTo("Employees")
};

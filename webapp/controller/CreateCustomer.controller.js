sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        

        return Controller.extend("stk.starterkit.controller.CreateCustomer", {
            onInit: function () {
            },
            onBack: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomersList")
            },
        });


        
    });
    function onCreatePress() {
        const sId = this.byId("CustomerID").getValue()

        const sName = this.byId("CustomerName").getValue()
        this.getView().getModel().create("/Customers", {
            CustomerID:sId,
            CompanyName: sName
        })
    }
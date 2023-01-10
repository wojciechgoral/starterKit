sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, Fragment) {
        "use strict";
        

        return Controller.extend("stk.starterkit.controller.CustomerDetails", {
            formatter: Formatter,
            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this)
            },

        _onPatternMatched: function(oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                })
            },

        

            onPress: function () {

                var oView = this.getView();
    
                if (!this.byId("contactDialog")) {
    
                    this.loadFragment({
    
                        name: "stk.starterkit.view.ContactInfoDialog"
    
                    }).then(function (oDialog) {
    
                        oView.addDependent(oDialog);
    
                        oDialog.open();
    
                    });
    
                } else {
    
                    this.byId("contactDialog").open();
    
                }},
            onCloseDialog: function(){
                this.byId("contactDialog").close()
            }
        });

        
        
    });


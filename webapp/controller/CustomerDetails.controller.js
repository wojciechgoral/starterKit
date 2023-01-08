sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomerDetails", {
            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this)
            },

        _onPatternMatched: function(oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
    
                })
            }
        });

        
    });


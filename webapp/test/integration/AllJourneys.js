sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./CustomersListJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "stk.starterkit.view.",
		autoWait: true
	});
});

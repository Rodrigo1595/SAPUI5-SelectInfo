sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "ExposicionSelectInfo/ExposicionSelectInfo/util/Constants",
        "sap/ui/core/routing/History"

        
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Constants, History) {
		"use strict";

		return Controller.extend("ExposicionSelectInfo.ExposicionSelectInfo.controller.Detail", {
			onInit: function () {

            },
            onNavBack : function() {
            var sPreviousHash = History.getInstance().getPreviousHash();

            //The history contains a previous entry
            if (sPreviousHash !== undefined) {
                history.go(-1);
            } else {
                // There is no history!
                // Naviate to master page
                this.getOwnerComponent().getRouter().navTo(Constants.routes.main);
            }
        }
		});
	});
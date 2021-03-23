sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "ExposicionSelectInfo/ExposicionSelectInfo/util/Services",
        "ExposicionSelectInfo/ExposicionSelectInfo/util/Constants"
        
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Services, Constants) {
		"use strict";

		return Controller.extend("ExposicionSelectInfo.ExposicionSelectInfo.controller.Main", {
			onInit: function () {
                this.loadModelShippers();

            },
            loadModelShippers: async function() {
                let oComponent = this.getOwnerComponent();
                let oResponse = await Services.getShippers();
                let oData = oResponse[0];
                let oShippers = new JSONModel();
                oShippers.setData(oData);
                oComponent.setModel(oShippers, Constants.routes.MODELS.shippers);
            },
            onSelect: async function(oEvent) {
            
                let oSelectedItemEvent = oEvent.getSource().getSelectedKey();

                let oSelectedItemById = this.getView().byId("IdShip").getSelectedItem().getText();

                let oModelTools = new JSONModel();
                let oShipId = {shipId: oSelectedItemById};
                oModelTools.setData(oShipId);
                this.getOwnerComponent().setModel(oModelTools, Constants.routes.MODELS.toolsModel);

                
                let oComponent = this.getOwnerComponent();
                let oResponse = await Services.getShippersDetail(oShipId.shipId);
                let oData = oResponse[0];
                let oShippers = new JSONModel();
                oShippers.setData(oData);
                oComponent.setModel(oShippers, Constants.routes.MODELS.shipDetail);

                this.getOwnerComponent().getRouter().navTo(Constants.routes.detail);

            },

            onPressCell: async function(oEvent) {

                let oItem = oEvent.getSource().getSelectedItem().getBindingContext(Constants.routes.MODELS.shippers);
                let oModel = this.getView().getModel(Constants.routes.MODELS.shippers);
                let oIdSeleccionada = oModel.getProperty((oItem).getPath());
                let oIdItem = {shipId: oIdSeleccionada.ShipperID};
                
                let oModelShip = new JSONModel();
                oModelShip.setData(oIdItem);
                this.getOwnerComponent().setModel(oModelShip, Constants.routes.MODELS.toolsModel);
                
                let oComponent = this.getOwnerComponent();
                let oResponse = await Services.getShippersDetail(oIdItem.shipId);
                let oData = oResponse[0];
                let oShippers = new JSONModel();
                oShippers.setData(oData);
                oComponent.setModel(oShippers, Constants.routes.MODELS.shipDetail);

                this.getOwnerComponent().getRouter().navTo(Constants.routes.detail);

            }
		});
	});
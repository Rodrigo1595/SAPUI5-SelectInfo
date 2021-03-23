sap.ui.define ([
    "ExposicionSelectInfo/ExposicionSelectInfo/util/Services",
    "ExposicionSelectInfo/ExposicionSelectInfo/util/Constants"
], function(Services, Constants) {
    "use strict";

    const Commons = {
        onPressDetail: async function(shipId) {
            let oComponent = this.getOwnerComponent();
            let oResponse = await Services.getShippersDetail(shipId);
            let oData = oResponse[0];
            let oShippers = new JSONModel();
            oShippers.setData(oData);
            oComponent.setModel(oShippers, Constants.routes.MODELS.shipDetail);

            this.getOwnerComponent().getRouter().navTo(Constants.routes.detail);
        }
    }
}
)
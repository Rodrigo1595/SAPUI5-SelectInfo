sap.ui.define([], function() {
    "user strict";
    return {
        model: {

            I18N: "i18n",

        },

        properties: {
            TOOLS_MODEL: {
                name: "/name"
            }
        },

        entity : {
            shippers : "/V3/Northwind/Northwind.svc/Shippers",
        },

        ids: {
            
        },

        routes: {
            detail: "RouteDetail",
            main: "RouteMain",
            MODELS: {
                shippers: "modelShippers",
                toolsModel: "toolsModel",
                shipDetail: "shipDetail"
            }
        }
    };
}, true);
/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ExposicionSelectInfo/ExposicionSelectInfo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});

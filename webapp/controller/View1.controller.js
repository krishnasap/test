sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("test.controller.View1", {
            onInit: function () {

            },
            onSaveButtonPress: function () {
                alert("Welcome Krishna");
            },
            onCancelButtonPress: function () {
                alert("Bye krishna");
            }
        });
    });

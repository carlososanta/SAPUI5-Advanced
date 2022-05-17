sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        var Main = Controller.extend("logaligroup.employees.controller.MasterEmployee", {});

        function onInit(){

        };

        Main.prototype.onInit = onInit;

        return Main;
    }
) ;    
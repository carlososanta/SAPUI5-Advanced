sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        var Main = Controller.extend("logaligroup.employees.controller.Main", {});

        function onInit(){
            var oView = this.getView();
            // var i18nBundle = oView.getModel("i18n").getResourceBundle();

            var oJSONModel = new sap.ui.model.json.JSONModel();
            oJSONModel.loadData("./localService/mockdata/Employees.json", false);
            oView.setModel(oJSONModel,"jsonEmployees");

            var oJSONModelCountries = new sap.ui.model.json.JSONModel();
            oJSONModelCountries.loadData("./localService/mockdata/Countries.json", false);
            oView.setModel(oJSONModelCountries,"jsonCountries");

            var oJSONModelConfig = new sap.ui.model.json.JSONModel({
                visibleID: true,
                visiblenName: true,
                visibleIDCountry: true,
                visibleCity: false,
                visibleBtnShowCity: true,
                visibleBtnHideCity: false
            });
            oView.setModel(oJSONModelConfig,"jsonConfig");
        };

        Main.prototype.onInit = onInit;

        return Main;
    }
) ;    
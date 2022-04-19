"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_helmet_1 = require("react-helmet");
var validator_1 = __importDefault(require("validator"));
var sweetalert2_1 = __importDefault(require("sweetalert2"));
require("./css/style.css");
var Button = function (_a) {
    var parameters = _a.parameters;
    var _b = (0, react_1.useState)(false), isModalVisible = _b[0], setModalVisible = _b[1];
    var customFunction = "\n      parameters = {\n         isProduction: ".concat(parameters.isProduction ? parameters.isProduction : false, ",\n         amount: ").concat(parameters.amount, ",\n         fullName: \"").concat(parameters.fullName, "\",\n         email: \"").concat(parameters.email, "\",\n         receiveEmail: \"").concat(parameters.receiveEmail, "\",\n         receiveName: \"").concat(parameters.receiveName, "\",\n         successRedirect: \"").concat(parameters.successRedirect, "\",\n         errorRedirect: \"").concat(parameters.errorRedirect, "\",\n      },\n      setTimeout(function () {\n         iframe.contentWindow.postMessage(parameters, '*');\n      }, 5000);\n  ");
    var Alerts = function (title, text) {
        sweetalert2_1.default.fire({
            icon: 'error',
            title: title,
            text: text,
        });
    };
    var validations = function (params) {
        if (Object.keys(params.parameters).length === 0) {
            Alerts('Parametros Vacios', 'No pueden estar vacios los parametros');
            return setModalVisible(false);
        }
        if (!validator_1.default.isURL(params.parameters.successRedirect)) {
            Alerts('Datos Erróneos', 'La Url ingresada no es válida');
            return setModalVisible(false);
        }
        if (!validator_1.default.isURL(params.parameters.errorRedirect)) {
            Alerts('Datos Erróneos', 'La Url ingresada no es válida');
            return setModalVisible(false);
        }
        if (!validator_1.default.isEmail(params.parameters.email)) {
            Alerts('Datos Erróneos', 'El email no es valido');
            return setModalVisible(false);
        }
        if (!validator_1.default.isEmail(params.parameters.receiveEmail)) {
            Alerts('Datos Erróneos', 'El email no es valido');
            return setModalVisible(false);
        }
        return setModalVisible(true);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { className: "QuiklyButton", disabled: parameters.disabled ? parameters.disabled : false, onClick: function () { return validations({ parameters: parameters }); } }),
        isModalVisible ?
            react_1.default.createElement("div", { hidden: !isModalVisible },
                react_1.default.createElement("div", { className: "modal-background", onClick: function () { return setModalVisible(false); } },
                    parameters.paymentGateway === 'Square' ?
                        react_1.default.createElement("iframe", { className: "modal-card", src: "https://paybox.quikly.app/cdn/reactjs/square.html", width: "100%", height: "100%", scrolling: "no", id: "iframe" })
                        :
                            react_1.default.createElement("iframe", { className: "modal-card", src: "https://paybox.quikly.app/cdn/reactjs/paybox.html", width: "100%", height: "100%", scrolling: "no", id: "iframe" }),
                    react_1.default.createElement(react_helmet_1.Helmet, null,
                        react_1.default.createElement("script", { src: "https://code.jquery.com/jquery-2.2.4.js" }),
                        react_1.default.createElement("script", { type: "text/javascript" }, customFunction))))
            :
                react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = Button;

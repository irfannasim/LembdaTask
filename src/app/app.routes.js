"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login.component");
var AppRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'index', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
];
exports.routes = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routes.js.map
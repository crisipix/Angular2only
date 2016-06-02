"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_viewcomponent_1 = require('./app.viewcomponent');
var app_service_component_1 = require('./app.service.component');
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
platform_browser_dynamic_1.bootstrap(app_viewcomponent_1.AppViewComponent);
platform_browser_dynamic_1.bootstrap(app_service_component_1.AppServiceComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map
/**
 * Add the route info
 * Create an update view function
 * wire up the update view function with url changes
 * fetch the view html
 * call the controller function
 * process the view (replace the {{tokens}}) 
 * render the view html in the view container
 */

((w, d) => {
    var _viewElement = _defaultRoute = null,
        _rendered = false;

    var jsMvc = () => {
        this._routeMap = {}
    }

    jsMvc.prototype.addRoute = (controller, route, template) => {
        this._routeMap[route] = new routeObj(controller, route, template);
    }

    /**
     * Create the update view delegate
     * Get the view element reference
     * Set a default route value
     * Wire up the url change event with the update view delegate
     * Call the update view delegate
     */
    jsMvc.prototype.initialize = () => {
        var updateViewDelegate = updateView.bind(this);
        _viewElement = d.querySelector('[view]');
        if (!_viewElement)
            return;
        _defaultRoute = this._routeMap[Object.getOwnPropertyNames(this._routeMap)[0]];
        w.onhashchange = updateViewDelegate;
        updateViewDelegate();
    }

    /**
     * Get the route name from url #
     * Fetch the route object using the route name, default to default route object
     * Render the view html associated with the route
     */
    function updateView() {
        var urlRoute = w.location.hash.replace('#', '');
        routeName = urlRoute.replace('/', '');
        _rendered = false;
        routeObj = this._routeMap[routeName] || _defaultRoute;
        loadTemplate(routeObj, _viewElement);
    }

    function loadTemplate(routeObj, viewElement) {
        var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                loadView(routeObj, viewElement, xmlHttp.responseText);
            };
        }
        xmlHttp.open('GET', routeObj.template, true);
    }

    /**
     * Create the model object
     * Call the controller function associated with the route
     * Replace the template {{tokens}} with the model properties
     * Render the view
     */
    function loadView(routeObj, viewElement, viewHtml) {
        var model = {};
        routeObj.controller(model);
        viewHtml = replaceTokens(viewHtml, model);
        if (!_rendered) {
            viewElement.innerHTML = viewHtml;
            _rendered = true;
        }
    }

    function replaceTokens(viewHtml, model) {
        var properties = Object.getOwnPropertyNames(model);
        properties.forEach((property) => {
            viewHtml = viewHtml.replace(`{{${property}}}`, model[property])
        });
        return viewHtml;
    }

    var routeObj = (c, r, t) => {
        this.controller = c;
        this.route = r;
        this.template = t;
    }

    w['jsMvc'] = new jsMvc();
})(window, document)
/* Tiny template runtime for this page.
   Renders the <template id="page"> using values from Component.renderVals():
   {{name}} holes in text and attributes, <sc-if value="{{x}}">, <sc-for list="{{xs}}" as="item">,
   and onClick="{{handler}}". Re-renders with morphdom so scroll positions and open FAQ items survive. */
(function () {
  function lookup(expr, scopes) {
    expr = expr.trim();
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    var parts = expr.split('.');
    for (var i = scopes.length - 1; i >= 0; i--) {
      if (scopes[i] && Object.prototype.hasOwnProperty.call(scopes[i], parts[0])) {
        var v = scopes[i][parts[0]];
        for (var j = 1; j < parts.length; j++) v = v == null ? v : v[parts[j]];
        return v;
      }
    }
    return undefined;
  }
  var HOLE = /\{\{([^}]+)\}\}/g;
  var ONLY = /^\s*\{\{([^}]+)\}\}\s*$/;
  function interp(str, scopes) {
    return str.replace(HOLE, function (_, e) { var v = lookup(e, scopes); return v == null ? '' : String(v); });
  }
  var handlers = [];
  function process(node, scopes, out) {
    if (node.nodeType === 3) { out.appendChild(document.createTextNode(interp(node.nodeValue, scopes))); return; }
    if (node.nodeType !== 1) return;
    var tag = node.tagName.toLowerCase();
    if (tag === 'sc-if') {
      var m = ONLY.exec(node.getAttribute('value') || '');
      if (m && lookup(m[1], scopes)) node.childNodes.forEach(function (c) { process(c, scopes, out); });
      return;
    }
    if (tag === 'sc-for') {
      var lm = ONLY.exec(node.getAttribute('list') || '');
      var list = lm ? lookup(lm[1], scopes) || [] : [];
      var as = node.getAttribute('as') || 'item';
      list.forEach(function (item) {
        var s = {}; s[as] = item;
        var sc = scopes.concat([s]);
        node.childNodes.forEach(function (c) { process(c, sc, out); });
      });
      return;
    }
    var el = document.createElement(node.tagName);
    for (var i = 0; i < node.attributes.length; i++) {
      var a = node.attributes[i];
      if (a.name === 'onclick') {
        var hm = ONLY.exec(a.value);
        var fn = hm ? lookup(hm[1], scopes) : null;
        if (typeof fn === 'function') { handlers.push(fn); el.setAttribute('data-h', String(handlers.length - 1)); }
        continue;
      }
      if (a.name.indexOf('hint-') === 0) continue;
      el.setAttribute(a.name, interp(a.value, scopes));
    }
    if (tag === 'svg' || node.namespaceURI === 'http://www.w3.org/2000/svg') {
      el = document.createElementNS('http://www.w3.org/2000/svg', node.tagName);
      for (var k = 0; k < node.attributes.length; k++) el.setAttribute(node.attributes[k].name, interp(node.attributes[k].value, scopes));
    }
    node.childNodes.forEach(function (c) { process(c, scopes, el); });
    out.appendChild(el);
  }
  window.DCLogic = function DCLogic(props) { this.props = props || {}; this.state = {}; };
  window.DCLogic.prototype.setState = function (patch) {
    Object.assign(this.state, patch);
    if (!this._pending) { var self = this; this._pending = true; requestAnimationFrame(function () { self._pending = false; self._render(); }); }
  };
  window.mountPage = function (Component, defaults) {
    var tpl = document.getElementById('page');
    var root = document.getElementById('root');
    var comp = new Component(defaults);
    comp._render = function () {
      handlers = [];
      var vals = comp.renderVals();
      var frag = document.createElement('div');
      frag.id = 'root';
      tpl.content.childNodes.forEach(function (c) { process(c, [vals], frag); });
      morphdom(root, frag, {
        onBeforeElUpdated: function (from, to) {
          if (from.tagName === 'DETAILS') to.open = from.open;
          if (from.isEqualNode(to)) return false;
          return true;
        }
      });
      comp._handlers = handlers;
    };
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-h]');
      if (!t || !root.contains(t)) return;
      var fn = comp._handlers[Number(t.getAttribute('data-h'))];
      if (fn) fn({ currentTarget: t, target: e.target, preventDefault: function () { e.preventDefault(); } });
    });
    comp._render();
  };
})();

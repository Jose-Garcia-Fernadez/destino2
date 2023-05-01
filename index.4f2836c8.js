// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"beiqW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "562fc2e44f2836c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1pr6H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "l", ()=>l);
parcelHelpers.export(exports, "escribir_tiempo", ()=>escribir_tiempo);
parcelHelpers.export(exports, "leer_tiempo_tamano", ()=>leer_tiempo_tamano);
parcelHelpers.export(exports, "texto_leer_tiempo_tamano", ()=>texto_leer_tiempo_tamano);
parcelHelpers.export(exports, "leer_velocidad", ()=>leer_velocidad);
var nazaree_1_comentario = [
    "Santuario de Nuestra Se\xf1ora de Nazar\xe9",
    "Puerta faro Nazar\xe9",
    "Vista desde el faro de Nazar\xe9",
    "Vista desde el faro de Nazar\xe9",
    "PlayaSur Nazar\xe9",
    "Entrada faro Nazar\xe9",
    "ciudad de Nazar\xe9 ",
    "Vista monta\xf1a faro Nazar\xe9",
    "Playa Sur de Nazar\xe9",
    "Frutos del mar de Nazar\xe9",
    "Vista desde el faro de Nazar\xe9",
    "Museo de surf faro de Nazar\xe9",
    "Museo de surf faro de Nazar\xe9",
    "Vista del faro Nazar\xe9",
    "Playanorte de Nazar\xe9",
    "Monta\xf1a del faro de Nazar\xe9",
    "Faro de Nazar\xe9",
    "Faro de Nazar\xe9"
];
var fatima_1_comentario = [
    "Santuario de F\xe1tima",
    "Lapidas de Jacinta y Lucia",
    "Santuario de F\xe1tima",
    "Santuario de F\xe1tima de noche",
    "Interior del Santuario de F\xe1tima",
    "Exterior del Santuario de F\xe1tima",
    "Exterior del Santuario de F\xe1tima",
    "Exterior del Santuario de F\xe1tima"
];
var obidos_1_comentario = [
    "Castilo de \xd3bidos",
    "Castillo de \xd3bidos",
    "Museo Museu de Sardinha",
    "Vista de bidos"
];
var alcobasa_1_comentario = [
    "Monasterio de Alcoba\xe7a",
    "Vista interior Monasterio de Alcoba\xe7a",
    "Monasterio de Alcoba\xe7a",
    "Jardines del Monasterio de Alcoba\xe7a"
];
var sintra_1_comentario = [
    "Sintra",
    "Sala das Pegas Sintra",
    "Vista de Sintra",
    "Pal\xe1cio da Regaleira Sintra",
    "Palacio da Pena Sintra"
];
var nazaree_6_comentario = [
    "Estatua faro Nazar\xe9",
    "Museo faro Nazar\xe9",
    "Faro Nazar\xe9",
    "Caseta faro Nazar\xe9"
];
var fatima_6_comentario = [
    "Santuario de F\xe1tima",
    "Imagen pastoras del Santuario de F\xe1tima",
    "Imagen del Santuario de F\xe1tima",
    "Exterior delSantuario de F\xe1tima"
];
var obidos_6_comentario = [
    "Puerta de la muralla de \xd3bidos",
    "Muralla de \xd3bidos",
    "Puerta de la muralla \xd3bidos"
];
var alcobasa_6_comentario = [
    "Exterior Monasterio de Alcoba\xe7a",
    "Exterior Monasterio de Alcoba\xe7a",
    "Interior Monasterio de Alcoba\xe7a",
    "Interior Monasterio de Alcoba\xe7a",
    "Interior Monasterio de Alcoba\xe7a"
];
var sintra_6_comentario = [
    "Ciudad de Sintra",
    "Pal\xe1cio Nacional Sintra",
    "Pal\xe1cio Nacional Sintra",
    "Pal\xe1cio da Regaleira Sintra",
    "Pal\xe1cio da Pena Sintra",
    "Pal\xe1cio da Pena Sintra",
    "Pal\xe1cio da Regaleira Sintra",
    "Pal\xe1cio da Regaleira Sintra"
];
var nazaree_png_300_1 = [
    new URL(require("6815054daa0690eb")),
    "85487",
    new URL(require("9002b5cf8ddce7d6")),
    "100524",
    new URL(require("cc2ac753da663f3f")),
    "120590",
    new URL(require("e0f28944bb27864a")),
    "95618",
    new URL(require("c07f11098886b3bc")),
    "71088",
    new URL(require("da67e534610d175f")),
    "95248",
    new URL(require("ca40b4877a7f8228")),
    "103765",
    new URL(require("d7958646a0e7915")),
    "77533",
    new URL(require("f5468db775d2d9fd")),
    "101625",
    new URL(require("bb2345b97cf38e1")),
    "104904",
    new URL(require("958cb9da902bbdbf")),
    "93228",
    new URL(require("b2fbb3381a79c943")),
    "141178",
    new URL(require("495a31fad623b703")),
    "107859",
    new URL(require("1b431528e048474a")),
    "164801",
    new URL(require("6ed3c7cb7c4703fa")),
    "122052",
    new URL(require("b3995c59d78491f3")),
    "117082",
    new URL(require("34f86d900e85f444")),
    "90609"
];
var nazaree_png_600_1 = [
    new URL(require("4a6c1bbcb9c5dd66")),
    "333552",
    new URL(require("ec067b243e259b71")),
    "383491",
    new URL(require("48fb11f2f3f6e382")),
    "439757",
    new URL(require("f52795f74dd0f07d")),
    "366692",
    new URL(require("ef24993273d8d7d")),
    "282482",
    new URL(require("690d8567c98cfa8e")),
    "359985",
    new URL(require("5300360bfd5433a6")),
    "391227",
    new URL(require("8075294b2c815748")),
    "305444",
    new URL(require("354a1446de6a3a15")),
    "361824",
    new URL(require("c3c0ecb2b2d0df2f")),
    "378864",
    new URL(require("c4e1e115593e7687")),
    "369227",
    new URL(require("cd907c52972ac561")),
    "510147",
    new URL(require("9d71f168df8446ad")),
    "399335",
    new URL(require("6a36e7316e14701f")),
    "620259",
    new URL(require("991b3d070aba6cb8")),
    "470332",
    new URL(require("a4773c1436894055")),
    "459427",
    new URL(require("2a15c209294ecf07")),
    "344523"
];
var nazaree_png_900_1 = [
    new URL(require("1d906be6b93acece")),
    "734846",
    new URL(require("7622b16fbad78665")),
    "820818",
    new URL(require("bed24d88ac2c69ee")),
    "913285",
    new URL(require("e2f1200e1e228156")),
    "796353",
    new URL(require("635f8f354ca26075")),
    "625944",
    new URL(require("ed950bae61ebde42")),
    "778617",
    new URL(require("f5c58de3f85c5533")),
    "858530",
    new URL(require("36c06fb446894580")),
    "661751",
    new URL(require("272b3784dfcb040e")),
    "748467",
    new URL(require("d57538d2a47f69ae")),
    "793359",
    new URL(require("5b4cd090559a84fe")),
    "807505",
    new URL(require("26587742d52ef4f2")),
    "1056584",
    new URL(require("5c3d9f8f90bdcf70")),
    "847115",
    new URL(require("4e3b7468da000925")),
    "1246313",
    new URL(require("5178015f822c0e13")),
    "1012998",
    new URL(require("96c51995642c6095")),
    "1018006",
    new URL(require("5703bc37f99680e1")),
    "751926"
];
var nazaree_png_300_6 = [
    new URL(require("4daaf79c04657efb")),
    "78760",
    new URL(require("cd1f3a76878b497b")),
    "105415"
];
var nazaree_png_600_6 = [
    new URL(require("d88a3c1a59dd024c")),
    "308713",
    new URL(require("e84bbe6af7a1ef65")),
    "384510"
];
var nazaree_png_900_6 = [
    new URL(require("94366d8b00f2c1aa")),
    "676420",
    new URL(require("2b1bb4b1105183a2")),
    "809845"
];
var fatima_png_300_1 = [
    new URL(require("8ae6a8de6482bb6c")),
    "82519",
    new URL(require("f68997c787efc4b2")),
    "97971",
    new URL(require("e5c8b53691bce90e")),
    "86647",
    new URL(require("ff5046338ef4a12e")),
    "73220",
    new URL(require("f5ed5b6b43b9f8d6")),
    "158555",
    new URL(require("efb61963868b4d61")),
    "120956",
    new URL(require("d7771f851fb64618")),
    "75894"
];
var fatima_png_600_1 = [
    new URL(require("184c445edeeb542d")),
    "293931",
    new URL(require("861ad2398b23c813")),
    "350786",
    new URL(require("17f8521fc0bfb225")),
    "317844",
    new URL(require("fe0cb458bfe5ba56")),
    "275671",
    new URL(require("9044e8de54f2efab")),
    "579017",
    new URL(require("f8811322461eda35")),
    "462863",
    new URL(require("85baf348785533e5")),
    "281592"
];
var fatima_png_900_1 = [
    new URL(require("6992e21295eb6b10")),
    "601946",
    new URL(require("67d46ee0fd37375")),
    "735400",
    new URL(require("abf22b49f52efe81")),
    "681182",
    new URL(require("649b13c4cb2cd81e")),
    "607660",
    new URL(require("fd7147b90740e3a6")),
    "1179877",
    new URL(require("11bab176eb12f345")),
    "1017421",
    new URL(require("aea1cd27dc7c51b")),
    "612906"
];
var fatima_png_300_6 = [
    new URL(require("90948cbacf45cd45")),
    "72716",
    new URL(require("72c8a00aaeb543ec")),
    "129466"
];
var fatima_png_600_6 = [
    new URL(require("7f25c06131dc3f95")),
    "244330",
    new URL(require("f60cae17cadf3180")),
    "486395"
];
var fatima_png_900_6 = [
    new URL(require("8cb4e818983ba036")),
    "469749",
    new URL(require("a1965bfe2d175997")),
    "1012635"
];
var obidos_png_300_1 = [
    new URL(require("bb02389f06f4774f")),
    "90441",
    new URL(require("988b8e57875b2e66")),
    "148108",
    new URL(require("6853836180508601")),
    "156043"
];
var obidos_png_600_1 = [
    new URL(require("9f74b13ab213eae7")),
    "344145",
    new URL(require("2a4ac48e4db1f56e")),
    "601077",
    new URL(require("55192faea18f2ab2")),
    "621472"
];
var obidos_png_900_1 = [
    new URL(require("77845fba3a5431d4")),
    "750242",
    new URL(require("b125df48c2b28787")),
    "1289407",
    new URL(require("4e1b51811087ef15")),
    "1381978"
];
var obidos_png_300_6 = [
    new URL(require("23de6a8fa264ad07")),
    "144254",
    new URL(require("ba774b0cd73b8333")),
    "92542"
];
var obidos_png_600_6 = [
    new URL(require("a7bf1f7f633eb928")),
    "579197",
    new URL(require("4665696b2843e6b")),
    "359262"
];
var obidos_png_900_6 = [
    new URL(require("6f2f41e3f48f1582")),
    "1231531",
    new URL(require("4fb7bc68ec86bbb")),
    "788397"
];
var alcobasa_png_300_1 = [
    new URL(require("afa6876a9c8e9abd")),
    "120483",
    new URL(require("6e5da658c7901b14")),
    "140783",
    new URL(require("932956b673768cd1")),
    "168277"
];
var alcobasa_png_600_1 = [
    new URL(require("4712de33ca30cb2c")),
    "458545",
    new URL(require("641bb3d58c62d7bd")),
    "510276",
    new URL(require("2200c2a1044a700f")),
    "655015"
];
var alcobasa_png_900_1 = [
    new URL(require("acdb25a617a1440e")),
    "1012662",
    new URL(require("a7f9fbbbb9cf6218")),
    "1063468",
    new URL(require("a70b03eaf752528d")),
    "1428839"
];
var alcobasa_png_300_6 = [
    new URL(require("be0b404d684c9955")),
    "97658",
    new URL(require("ffd66a9d376283a2")),
    "103127",
    new URL(require("9a5fba2bb9d175a6")),
    "77830",
    new URL(require("3f56bcd686be9777")),
    "80118"
];
var alcobasa_png_600_6 = [
    new URL(require("3a9cd25ff1e4e263")),
    "365127",
    new URL(require("504063d0f2a139b7")),
    "386008",
    new URL(require("f8a035c753dc81d6")),
    "290382",
    new URL(require("49cb88e9fa7c0a35")),
    "295074"
];
var alcobasa_png_900_6 = [
    new URL(require("619b9e802b80817")),
    "789368",
    new URL(require("853fc60c062faaf2")),
    "836257",
    new URL(require("d890dc989eb21617")),
    "631930",
    new URL(require("6e36883c87207240")),
    "631986"
];
var sintra_png_300_1 = [
    new URL(require("340d0609abcfcff7")),
    "100346",
    new URL(require("9708348b808eb16d")),
    "82745",
    new URL(require("1bdeb1e8dae0cf3f")),
    "130318",
    new URL(require("4b4e0150ea106feb")),
    "156394"
];
var sintra_png_600_1 = [
    new URL(require("fcca34200588ecb6")),
    "390684",
    new URL(require("11d8e27c90648743")),
    "330301",
    new URL(require("7a27cbd3cba1df85")),
    "491287",
    new URL(require("edcb6feebdf16e1a")),
    "602843"
];
var sintra_png_900_1 = [
    new URL(require("f23c05b687c3e3a8")),
    "884266",
    new URL(require("5112461d0a748fb5")),
    "735613",
    new URL(require("fe2395e864292357")),
    "1067764",
    new URL(require("4c4eb44d241a5dca")),
    "1275526"
];
var sintra_png_300_6 = [
    new URL(require("2525671bbceacf49")),
    "102443",
    new URL(require("cd59e62882dd1313")),
    "130853",
    new URL(require("e30bb98f2a98822a")),
    "144032",
    new URL(require("97dcf3b0fc320b9d")),
    "145814",
    new URL(require("8199bdaade1ffa01")),
    "132250",
    new URL(require("464182e24d8cbe8b")),
    "96824",
    new URL(require("8bb62e24bdfd3096")),
    "109846"
];
var sintra_png_600_6 = [
    new URL(require("3bfe7472b8e32a6f")),
    "373178",
    new URL(require("a71e0091c2a29ed7")),
    "512123",
    new URL(require("de69acc4bbd1020e")),
    "516895",
    new URL(require("a5f0891165ecc2a7")),
    "566471",
    new URL(require("a077991912d8e46e")),
    "476093",
    new URL(require("1d3b52eb26a912fc")),
    "365898",
    new URL(require("3657c5f60d50c781")),
    "380527"
];
var sintra_png_900_6 = [
    new URL(require("d3b3113679a7c097")),
    "804017",
    new URL(require("6cd9e26706fb6579")),
    "1105249",
    new URL(require("d66042ffe69604c4")),
    "1055198",
    new URL(require("eb34b339bc16d70")),
    "1203487",
    new URL(require("4a64c921256ee3b8")),
    "957422",
    new URL(require("b36da1639bf25a8")),
    "796609",
    new URL(require("db862746b6530c43")),
    "777137"
];
var fotos = {
    nazare_png_300_1: nazaree_png_300_1,
    nazare_png_600_1: nazaree_png_600_1,
    nazare_png_900_1: nazaree_png_900_1,
    nazare_png_300_6: nazaree_png_300_6,
    nazare_png_600_6: nazaree_png_600_6,
    nazare_png_900_6: nazaree_png_900_6,
    nazaree_png_300_1: nazaree_png_300_1,
    nazaree_png_600_1: nazaree_png_600_1,
    nazaree_png_900_1: nazaree_png_900_1,
    nazaree_png_300_6: nazaree_png_300_6,
    nazaree_png_600_6: nazaree_png_600_6,
    nazaree_png_900_6: nazaree_png_900_6,
    fatima_png_300_1: fatima_png_300_1,
    fatima_png_600_1: fatima_png_600_1,
    fatima_png_900_1: fatima_png_900_1,
    fatima_png_300_6: fatima_png_300_6,
    fatima_png_600_6: fatima_png_600_6,
    fatima_png_900_6: fatima_png_900_6,
    obidos_png_300_1: obidos_png_300_1,
    obidos_png_600_1: obidos_png_600_1,
    obidos_png_900_1: obidos_png_900_1,
    obidos_png_300_6: obidos_png_300_6,
    obidos_png_600_6: obidos_png_600_6,
    obidos_png_900_6: obidos_png_900_6,
    alcobasa_png_300_1: alcobasa_png_300_1,
    alcobasa_png_600_1: alcobasa_png_600_1,
    alcobasa_png_900_1: alcobasa_png_900_1,
    alcobasa_png_300_6: alcobasa_png_300_6,
    alcobasa_png_600_6: alcobasa_png_600_6,
    alcobasa_png_900_6: alcobasa_png_900_6,
    sintra_png_300_1: sintra_png_300_1,
    sintra_png_600_1: sintra_png_600_1,
    sintra_png_900_1: sintra_png_900_1,
    sintra_png_300_6: sintra_png_300_6,
    sintra_png_600_6: sintra_png_600_6,
    sintra_png_900_6: sintra_png_900_6
};
var alcobasa_mp4_comentario = [
    "Vista interior del Monasterio de Alcoba\xe7a",
    "Monasterio de Alcoba\xe7a"
];
var alcobasa_mp4_320 = [
    new URL(require("479aa471dce28a7f")),
    "393953008",
    new URL(require("238593ea4a045185")),
    "199511646"
];
var alcobasa_mp4_640 = [
    new URL(require("f4db63aae561be31")),
    "393953008",
    new URL(require("268726d78e40e976")),
    "199511646"
];
var alcobasa_mp4_1280 = [
    new URL(require("c7610be8968ccacd")),
    "393953008",
    new URL(require("f7b88337af19b8f8")),
    "199511646"
];
var fatima_mp4_comentario = [
    "Interior Santuario de F\xe1tima",
    "Interior Santuario de F\xe1tima"
];
var fatima_mp4_320 = [
    new URL(require("ff8dbe3994fe91de")),
    "281285867",
    new URL(require("e3f579749ef4f2a1")),
    "318926018"
];
var fatima_mp4_640 = [
    new URL(require("e65aa0bee05c31e0")),
    "281285867",
    new URL(require("6b43207fa052d173")),
    "318926018"
];
var fatima_mp4_1280 = [
    new URL(require("fa6eb5d63711569f")),
    "281285867",
    new URL(require("78da27abb4debffa")),
    "318926018"
];
var nazaree_mp4_320 = [
    new URL(require("e337c572ce4b5e1c")),
    "206719009",
    new URL(require("345da06d0bdc3109")),
    "133303739",
    new URL(require("1cf8178629d7f642")),
    "236280925",
    new URL(require("69b49d69b9a7824")),
    "326161373"
];
var nazaree_mp4_640 = [
    new URL(require("af0586c65369426b")),
    "206719009",
    new URL(require("e6aee815e0d48e56")),
    "133303739",
    new URL(require("fee3749bc6f06da4")),
    "236280925",
    new URL(require("50ffca89cce86d67")),
    "326161373"
];
var nazaree_mp4_1280 = [
    new URL(require("497ba780e2a9e86f")),
    "206719009",
    new URL(require("7bbc5d809e08aa39")),
    "133303739",
    new URL(require("19f02db7c73447a")),
    "236280925",
    new URL(require("fc7ecab3bd604599")),
    "326161373"
];
var nazaree_mp4_comentario = [
    "Playa sur Nazar\xe9",
    "Playa sur Nazar\xe9",
    "Playa sur Nazar\xe9",
    "Olas Nazar\xe9"
];
var sintra_mp4_comentario = [
    "Palacio Nacional de Sintra"
];
var sintra_mp4_320 = [
    new URL(require("79f8280ac0f2dfd4")),
    "220535851"
];
var sintra_mp4_640 = [
    new URL(require("9f7e4635509e31d8")),
    "220535851"
];
var sintra_mp4_1280 = [
    new URL(require("bf01cb91aa401f34")),
    "220535851"
];
var obidos_mp4_comentario = [
    "Castillo de \xd3bidos",
    "Ciudad amurallada de \xd3bidos",
    "Ciudad amurallada de \xd3bidos"
];
var obidos_mp4_320 = [
    new URL(require("5193695006ff5f2d")),
    "160717341",
    new URL(require("94740d2b3bd214a8")),
    "102304510",
    new URL(require("e2324e9cd1b0dce9")),
    "222344000"
];
var obidos_mp4_640 = [
    new URL(require("4890aed0eb6ab033")),
    "160717341",
    new URL(require("4c4c1f360e7be0aa")),
    "102304510",
    new URL(require("3a65f7f49fb52b93")),
    "222344000"
];
var obidos_mp4_1280 = [
    new URL(require("3ef4b6c7938441f9")),
    "160717341",
    new URL(require("eb8766c12c65b0a")),
    "102304510",
    new URL(require("b76bf37f954f3a6c")),
    "222344000"
];
var alcobasa_mp4 = [
    alcobasa_mp4_320,
    alcobasa_mp4_640,
    alcobasa_mp4_1280
];
var fatima_mp4 = [
    fatima_mp4_320,
    fatima_mp4_640,
    fatima_mp4_1280
];
var nazaree_mp4 = [
    nazaree_mp4_320,
    nazaree_mp4_640,
    nazaree_mp4_1280
];
var sintra_mp4 = [
    sintra_mp4_320,
    sintra_mp4_640,
    sintra_mp4_1280
];
var obidos_mp4 = [
    obidos_mp4_320,
    obidos_mp4_640,
    obidos_mp4_1280
];
var mp4 = {
    alcobasa_mp4: alcobasa_mp4,
    fatima_mp4: fatima_mp4,
    nazaree_mp4: nazaree_mp4,
    nazare_mp4: nazaree_mp4,
    sintra_mp4: sintra_mp4,
    obidos_mp4: obidos_mp4
};
/* Durración de cada video en segundos */ var alcobasa_duracion = [
    33,
    17
];
var fatima_duracion = [
    34,
    29
];
var nazare_duracion = [
    29,
    23,
    18,
    38
];
var nazaree_duracion = [
    29,
    23,
    18,
    38
];
var sintra_duracion = [
    30
];
var obidos_duracion = [
    28,
    17,
    18
];
var duracion = {
    alcobasa_duracion: alcobasa_duracion,
    fatima_duracion: fatima_duracion,
    nazaree_duracion: nazaree_duracion,
    nazare_duracion: nazare_duracion,
    sintra_duracion: sintra_duracion,
    obidos_duracion: obidos_duracion
};
var ciudades = [
    "alcobasa",
    "nazare",
    "fatima",
    "obidos",
    "sintra"
];
var comentario_1 = {
    nazaree_1_comentario: nazaree_1_comentario,
    nazare_1_comentario: nazaree_1_comentario,
    fatima_1_comentario: fatima_1_comentario,
    obidos_1_comentario: obidos_1_comentario,
    alcobasa_1_comentario: alcobasa_1_comentario,
    sintra_1_comentario: sintra_1_comentario
};
var comentario_6 = {
    nazaree_6_comentario: nazaree_6_comentario,
    fatima_6_comentario: fatima_6_comentario,
    obidos_6_comentario: obidos_6_comentario,
    alcobasa_6_comentario: alcobasa_6_comentario,
    sintra_6_comentario: sintra_6_comentario
};
var comentario_mp4 = {
    nazare_mp4_comentario: nazaree_mp4_comentario,
    nazaree_mp4_comentario: nazaree_mp4_comentario,
    fatima_mp4_comentario: fatima_mp4_comentario,
    obidos_mp4_comentario: obidos_mp4_comentario,
    alcobasa_mp4_comentario: alcobasa_mp4_comentario,
    sintra_mp4_comentario: sintra_mp4_comentario
};
var l = {
    comentario_1: comentario_1,
    comentario_6: comentario_6,
    comentario_mp4: comentario_mp4,
    fotos: fotos,
    mp4: mp4,
    ciudades: ciudades,
    duracion: duracion
};
var tiempo_tamano = [
    1,
    1
]; // PEC2
function escribir_tiempo(t, c) {
    tiempo_tamano[0] = t;
    tiempo_tamano[1] = c;
} // Para escibir los datos
function leer_tiempo_tamano() {
    return tiempo_tamano;
}
function texto_leer_tiempo_tamano() {
    if (tiempo_tamano[0] <= 0) return "Tiempo <=0";
    return "V= " + (tiempo_tamano[1] / tiempo_tamano[0]).toFixed(0) + " kbytes/s Tama\xf1o= " + tiempo_tamano[1] + " Tiempo= " + tiempo_tamano[0];
}
function leer_velocidad() {
    if (tiempo_tamano[0] <= 0) return 1;
    return tiempo_tamano[1] / tiempo_tamano[0];
}

},{"6815054daa0690eb":"cU76n","9002b5cf8ddce7d6":"14ZRF","cc2ac753da663f3f":"cgYeQ","e0f28944bb27864a":"cShTy","c07f11098886b3bc":"fEaBB","da67e534610d175f":"iYC6N","ca40b4877a7f8228":"3fslh","d7958646a0e7915":"6oyFE","f5468db775d2d9fd":"6SoT5","bb2345b97cf38e1":"c6oV6","958cb9da902bbdbf":"7xHpu","b2fbb3381a79c943":"i3Gzv","495a31fad623b703":"h0Cq0","1b431528e048474a":"hyzKg","6ed3c7cb7c4703fa":"226Kf","b3995c59d78491f3":"7SSyh","34f86d900e85f444":"8qLcJ","4a6c1bbcb9c5dd66":"cPESA","ec067b243e259b71":"bXNlB","48fb11f2f3f6e382":"1ZUBZ","f52795f74dd0f07d":"ko0v5","ef24993273d8d7d":"4STag","690d8567c98cfa8e":"i3Zlp","5300360bfd5433a6":"atS79","8075294b2c815748":"2lqdT","354a1446de6a3a15":"0TvfW","c3c0ecb2b2d0df2f":"4rLJH","c4e1e115593e7687":"jXP08","cd907c52972ac561":"byoSf","9d71f168df8446ad":"40yGQ","6a36e7316e14701f":"8cykP","991b3d070aba6cb8":"aSIbO","a4773c1436894055":"lfNQZ","2a15c209294ecf07":"kwNuf","1d906be6b93acece":"buuDU","7622b16fbad78665":"6j9F9","bed24d88ac2c69ee":"gby7z","e2f1200e1e228156":"5KN6S","635f8f354ca26075":"bOIUV","ed950bae61ebde42":"5bc7R","f5c58de3f85c5533":"1JM7V","36c06fb446894580":"lSeT9","272b3784dfcb040e":"9Lfgl","d57538d2a47f69ae":"jJcoR","5b4cd090559a84fe":"6iOLE","26587742d52ef4f2":"gYVZ7","5c3d9f8f90bdcf70":"6CH7L","4e3b7468da000925":"4EEXv","5178015f822c0e13":"eWCeV","96c51995642c6095":"cVH5a","5703bc37f99680e1":"h68Se","4daaf79c04657efb":"lOSVD","cd1f3a76878b497b":"d13DN","d88a3c1a59dd024c":"gwg5z","e84bbe6af7a1ef65":"3joaI","94366d8b00f2c1aa":"49VzZ","2b1bb4b1105183a2":"9WJMU","8ae6a8de6482bb6c":"8o2S3","f68997c787efc4b2":"ahfUv","e5c8b53691bce90e":"jfRwl","ff5046338ef4a12e":"9mK8M","f5ed5b6b43b9f8d6":"b4HOH","efb61963868b4d61":"bzOya","d7771f851fb64618":"3wgwf","184c445edeeb542d":"e4NcB","861ad2398b23c813":"gY3HC","17f8521fc0bfb225":"8mVBU","fe0cb458bfe5ba56":"gk3jh","9044e8de54f2efab":"gA08U","f8811322461eda35":"jBueU","85baf348785533e5":"6yPuR","6992e21295eb6b10":"hwwic","67d46ee0fd37375":"6yy3T","abf22b49f52efe81":"hZrBF","649b13c4cb2cd81e":"6z6k1","fd7147b90740e3a6":"dVBA0","11bab176eb12f345":"aHzQo","aea1cd27dc7c51b":"9k5WO","90948cbacf45cd45":"gvIiH","72c8a00aaeb543ec":"bVSZG","7f25c06131dc3f95":"b99pL","f60cae17cadf3180":"e6CQ1","8cb4e818983ba036":"aDn8m","a1965bfe2d175997":"2wKDQ","bb02389f06f4774f":"jjpqg","988b8e57875b2e66":"dlXXZ","6853836180508601":"8FIzv","9f74b13ab213eae7":"kYGix","2a4ac48e4db1f56e":"3Bgxx","55192faea18f2ab2":"2bHpS","77845fba3a5431d4":"7d5C8","b125df48c2b28787":"bRhdl","4e1b51811087ef15":"aE7ik","23de6a8fa264ad07":"j2gOc","ba774b0cd73b8333":"64nU9","a7bf1f7f633eb928":"boiOQ","4665696b2843e6b":"h9K68","6f2f41e3f48f1582":"bSwvB","4fb7bc68ec86bbb":"PxWjR","afa6876a9c8e9abd":"5wy7S","6e5da658c7901b14":"bV6uG","932956b673768cd1":"cdXLT","4712de33ca30cb2c":"6I6f5","641bb3d58c62d7bd":"4I0G2","2200c2a1044a700f":"8qVq0","acdb25a617a1440e":"4y7O5","a7f9fbbbb9cf6218":"53nKz","a70b03eaf752528d":"e6mQd","be0b404d684c9955":"8hNcD","ffd66a9d376283a2":"4sfiy","9a5fba2bb9d175a6":"dXoiF","3f56bcd686be9777":"dooNe","3a9cd25ff1e4e263":"1Yqrn","504063d0f2a139b7":"7xW2i","f8a035c753dc81d6":"42g3g","49cb88e9fa7c0a35":"2FPi8","619b9e802b80817":"6Li4X","853fc60c062faaf2":"35n5U","d890dc989eb21617":"iAkn7","6e36883c87207240":"6gG3z","340d0609abcfcff7":"alZs1","9708348b808eb16d":"l4u4r","1bdeb1e8dae0cf3f":"7g6gT","4b4e0150ea106feb":"gy7g3","fcca34200588ecb6":"33u61","11d8e27c90648743":"aipNs","7a27cbd3cba1df85":"2vRmY","edcb6feebdf16e1a":"21Jjz","f23c05b687c3e3a8":"js9xw","5112461d0a748fb5":"hey0v","fe2395e864292357":"tMY4c","4c4eb44d241a5dca":"doEvd","2525671bbceacf49":"6HTUh","cd59e62882dd1313":"jpMtT","e30bb98f2a98822a":"bS13C","97dcf3b0fc320b9d":"2toVv","8199bdaade1ffa01":"3edsd","464182e24d8cbe8b":"gDrdf","8bb62e24bdfd3096":"bpqi9","3bfe7472b8e32a6f":"3YXrg","a71e0091c2a29ed7":"3zNED","de69acc4bbd1020e":"33zzf","a5f0891165ecc2a7":"2D4Oy","a077991912d8e46e":"2eDOP","1d3b52eb26a912fc":"6YT3B","3657c5f60d50c781":"gf7Lh","d3b3113679a7c097":"7zxfB","6cd9e26706fb6579":"eXZx9","d66042ffe69604c4":"5dAsL","eb34b339bc16d70":"9w2K4","4a64c921256ee3b8":"lCjJp","b36da1639bf25a8":"hJib9","db862746b6530c43":"7enYk","479aa471dce28a7f":"3EzDW","238593ea4a045185":"fJqkh","f4db63aae561be31":"jtQz2","268726d78e40e976":"fH4TQ","c7610be8968ccacd":"fOUVn","f7b88337af19b8f8":"eCSwG","ff8dbe3994fe91de":"2RLkl","e3f579749ef4f2a1":"dxWE7","e65aa0bee05c31e0":"j0R9p","6b43207fa052d173":"1ZK5G","fa6eb5d63711569f":"jexnN","78da27abb4debffa":"9tD83","e337c572ce4b5e1c":"1FWkh","345da06d0bdc3109":"9ToCL","1cf8178629d7f642":"eDbIh","69b49d69b9a7824":"9nINb","af0586c65369426b":"2Wkmd","e6aee815e0d48e56":"7pH0m","fee3749bc6f06da4":"KLwqX","50ffca89cce86d67":"3185X","497ba780e2a9e86f":"8PPWc","7bbc5d809e08aa39":"gE0sb","19f02db7c73447a":"6z2cB","fc7ecab3bd604599":"5zb1z","79f8280ac0f2dfd4":"bIwBd","9f7e4635509e31d8":"3APsu","bf01cb91aa401f34":"hGOKt","5193695006ff5f2d":"cvpnn","94740d2b3bd214a8":"hr1Hm","e2324e9cd1b0dce9":"5ZMNq","4890aed0eb6ab033":"1qtJ8","4c4c1f360e7be0aa":"lGSLq","3a65f7f49fb52b93":"6jOXP","3ef4b6c7938441f9":"fvWjH","eb8766c12c65b0a":"8jLas","b76bf37f954f3a6c":"18Jro","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"cU76n":[function(require,module,exports) {
module.exports = require("4dfe4a9ea13636d8").getBundleURL("7oLGk") + "0.c05f597e.png" + "?" + Date.now();

},{"4dfe4a9ea13636d8":"dhz1j"}],"dhz1j":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"14ZRF":[function(require,module,exports) {
module.exports = require("6a338ef863bd4067").getBundleURL("7oLGk") + "1.f5e0bbca.png" + "?" + Date.now();

},{"6a338ef863bd4067":"dhz1j"}],"cgYeQ":[function(require,module,exports) {
module.exports = require("8c8a770d18b92685").getBundleURL("7oLGk") + "2.6e5a4f0f.png" + "?" + Date.now();

},{"8c8a770d18b92685":"dhz1j"}],"cShTy":[function(require,module,exports) {
module.exports = require("18aa3e295b7d7b32").getBundleURL("7oLGk") + "3.f5fa0501.png" + "?" + Date.now();

},{"18aa3e295b7d7b32":"dhz1j"}],"fEaBB":[function(require,module,exports) {
module.exports = require("bc7e4ccee3c6d17e").getBundleURL("7oLGk") + "4.4abc774b.png" + "?" + Date.now();

},{"bc7e4ccee3c6d17e":"dhz1j"}],"iYC6N":[function(require,module,exports) {
module.exports = require("c460777a06add4eb").getBundleURL("7oLGk") + "5.da2c8650.png" + "?" + Date.now();

},{"c460777a06add4eb":"dhz1j"}],"3fslh":[function(require,module,exports) {
module.exports = require("5fddaec8f5416453").getBundleURL("7oLGk") + "6.ea9ec2f6.png" + "?" + Date.now();

},{"5fddaec8f5416453":"dhz1j"}],"6oyFE":[function(require,module,exports) {
module.exports = require("a934939ede2962f8").getBundleURL("7oLGk") + "7.301ec684.png" + "?" + Date.now();

},{"a934939ede2962f8":"dhz1j"}],"6SoT5":[function(require,module,exports) {
module.exports = require("8ee12ad3a546e333").getBundleURL("7oLGk") + "8.b06abc28.png" + "?" + Date.now();

},{"8ee12ad3a546e333":"dhz1j"}],"c6oV6":[function(require,module,exports) {
module.exports = require("f4f4edd449ac205c").getBundleURL("7oLGk") + "9.26742fae.png" + "?" + Date.now();

},{"f4f4edd449ac205c":"dhz1j"}],"7xHpu":[function(require,module,exports) {
module.exports = require("6a3af84988a526d7").getBundleURL("7oLGk") + "10.822bf667.png" + "?" + Date.now();

},{"6a3af84988a526d7":"dhz1j"}],"i3Gzv":[function(require,module,exports) {
module.exports = require("147cc468819c7b38").getBundleURL("7oLGk") + "11.449a5e9c.png" + "?" + Date.now();

},{"147cc468819c7b38":"dhz1j"}],"h0Cq0":[function(require,module,exports) {
module.exports = require("e4b935dc44214f47").getBundleURL("7oLGk") + "12.d9546cf7.png" + "?" + Date.now();

},{"e4b935dc44214f47":"dhz1j"}],"hyzKg":[function(require,module,exports) {
module.exports = require("66392f01ce08097f").getBundleURL("7oLGk") + "13.974d4d52.png" + "?" + Date.now();

},{"66392f01ce08097f":"dhz1j"}],"226Kf":[function(require,module,exports) {
module.exports = require("b429bd8611856d55").getBundleURL("7oLGk") + "14.52e1ebb3.png" + "?" + Date.now();

},{"b429bd8611856d55":"dhz1j"}],"7SSyh":[function(require,module,exports) {
module.exports = require("885f59299763866b").getBundleURL("7oLGk") + "15.d1a1daf0.png" + "?" + Date.now();

},{"885f59299763866b":"dhz1j"}],"8qLcJ":[function(require,module,exports) {
module.exports = require("5d1767a80f16ea0").getBundleURL("7oLGk") + "16.50f9fa1d.png" + "?" + Date.now();

},{"5d1767a80f16ea0":"dhz1j"}],"cPESA":[function(require,module,exports) {
module.exports = require("6c03acce5d53ed5e").getBundleURL("7oLGk") + "0.193e2e66.png" + "?" + Date.now();

},{"6c03acce5d53ed5e":"dhz1j"}],"bXNlB":[function(require,module,exports) {
module.exports = require("589f9fe411f5dde5").getBundleURL("7oLGk") + "1.a5561b19.png" + "?" + Date.now();

},{"589f9fe411f5dde5":"dhz1j"}],"1ZUBZ":[function(require,module,exports) {
module.exports = require("63a9f63ebff62fe8").getBundleURL("7oLGk") + "2.4495a959.png" + "?" + Date.now();

},{"63a9f63ebff62fe8":"dhz1j"}],"ko0v5":[function(require,module,exports) {
module.exports = require("1f85813c7e90b302").getBundleURL("7oLGk") + "3.17530a32.png" + "?" + Date.now();

},{"1f85813c7e90b302":"dhz1j"}],"4STag":[function(require,module,exports) {
module.exports = require("3d1a64cdfb697fcc").getBundleURL("7oLGk") + "4.2b6bb0c6.png" + "?" + Date.now();

},{"3d1a64cdfb697fcc":"dhz1j"}],"i3Zlp":[function(require,module,exports) {
module.exports = require("89d10cad1f2605ee").getBundleURL("7oLGk") + "5.15620d2d.png" + "?" + Date.now();

},{"89d10cad1f2605ee":"dhz1j"}],"atS79":[function(require,module,exports) {
module.exports = require("e5261767b35c5bfd").getBundleURL("7oLGk") + "6.d6e35f7b.png" + "?" + Date.now();

},{"e5261767b35c5bfd":"dhz1j"}],"2lqdT":[function(require,module,exports) {
module.exports = require("82e33e2f1ee5d45b").getBundleURL("7oLGk") + "7.9ec250db.png" + "?" + Date.now();

},{"82e33e2f1ee5d45b":"dhz1j"}],"0TvfW":[function(require,module,exports) {
module.exports = require("37a7694aabc50ec0").getBundleURL("7oLGk") + "8.ac44445a.png" + "?" + Date.now();

},{"37a7694aabc50ec0":"dhz1j"}],"4rLJH":[function(require,module,exports) {
module.exports = require("3028e9f519cea104").getBundleURL("7oLGk") + "9.66d0deb5.png" + "?" + Date.now();

},{"3028e9f519cea104":"dhz1j"}],"jXP08":[function(require,module,exports) {
module.exports = require("66f79eb94f2567ac").getBundleURL("7oLGk") + "10.919b07f0.png" + "?" + Date.now();

},{"66f79eb94f2567ac":"dhz1j"}],"byoSf":[function(require,module,exports) {
module.exports = require("a5e6adbe5b0891a").getBundleURL("7oLGk") + "11.7ae218ca.png" + "?" + Date.now();

},{"a5e6adbe5b0891a":"dhz1j"}],"40yGQ":[function(require,module,exports) {
module.exports = require("5e91e597680bfb47").getBundleURL("7oLGk") + "12.ab13bd0d.png" + "?" + Date.now();

},{"5e91e597680bfb47":"dhz1j"}],"8cykP":[function(require,module,exports) {
module.exports = require("186a0c77346445c2").getBundleURL("7oLGk") + "13.e7fbb1d0.png" + "?" + Date.now();

},{"186a0c77346445c2":"dhz1j"}],"aSIbO":[function(require,module,exports) {
module.exports = require("4882765123a7b06c").getBundleURL("7oLGk") + "14.7cd9ba3f.png" + "?" + Date.now();

},{"4882765123a7b06c":"dhz1j"}],"lfNQZ":[function(require,module,exports) {
module.exports = require("1bdbf37fb1294873").getBundleURL("7oLGk") + "15.48c0ac6b.png" + "?" + Date.now();

},{"1bdbf37fb1294873":"dhz1j"}],"kwNuf":[function(require,module,exports) {
module.exports = require("680d0df3285ecd7").getBundleURL("7oLGk") + "16.5a9c6892.png" + "?" + Date.now();

},{"680d0df3285ecd7":"dhz1j"}],"buuDU":[function(require,module,exports) {
module.exports = require("579ed3bd4abb243e").getBundleURL("7oLGk") + "0.3639ed90.png" + "?" + Date.now();

},{"579ed3bd4abb243e":"dhz1j"}],"6j9F9":[function(require,module,exports) {
module.exports = require("3f4fa27f2d8674fc").getBundleURL("7oLGk") + "1.8ae217f4.png" + "?" + Date.now();

},{"3f4fa27f2d8674fc":"dhz1j"}],"gby7z":[function(require,module,exports) {
module.exports = require("b66af80399893b45").getBundleURL("7oLGk") + "2.3624aafa.png" + "?" + Date.now();

},{"b66af80399893b45":"dhz1j"}],"5KN6S":[function(require,module,exports) {
module.exports = require("5b8dbe441060c5f1").getBundleURL("7oLGk") + "3.26d4178a.png" + "?" + Date.now();

},{"5b8dbe441060c5f1":"dhz1j"}],"bOIUV":[function(require,module,exports) {
module.exports = require("2af7a01e26912f12").getBundleURL("7oLGk") + "4.a9fcc8c6.png" + "?" + Date.now();

},{"2af7a01e26912f12":"dhz1j"}],"5bc7R":[function(require,module,exports) {
module.exports = require("f3e689fd2d2e981b").getBundleURL("7oLGk") + "5.9687d14b.png" + "?" + Date.now();

},{"f3e689fd2d2e981b":"dhz1j"}],"1JM7V":[function(require,module,exports) {
module.exports = require("dba218094f269689").getBundleURL("7oLGk") + "6.181ecc68.png" + "?" + Date.now();

},{"dba218094f269689":"dhz1j"}],"lSeT9":[function(require,module,exports) {
module.exports = require("f7d57865d4f7e7b4").getBundleURL("7oLGk") + "7.eba5d7fc.png" + "?" + Date.now();

},{"f7d57865d4f7e7b4":"dhz1j"}],"9Lfgl":[function(require,module,exports) {
module.exports = require("d61e4d92599721e0").getBundleURL("7oLGk") + "8.3989665e.png" + "?" + Date.now();

},{"d61e4d92599721e0":"dhz1j"}],"jJcoR":[function(require,module,exports) {
module.exports = require("c8cef9f913712da7").getBundleURL("7oLGk") + "9.399e354b.png" + "?" + Date.now();

},{"c8cef9f913712da7":"dhz1j"}],"6iOLE":[function(require,module,exports) {
module.exports = require("aa67fe9f7a2860e5").getBundleURL("7oLGk") + "10.86c52300.png" + "?" + Date.now();

},{"aa67fe9f7a2860e5":"dhz1j"}],"gYVZ7":[function(require,module,exports) {
module.exports = require("5c200a0d90c33edf").getBundleURL("7oLGk") + "11.b5df9679.png" + "?" + Date.now();

},{"5c200a0d90c33edf":"dhz1j"}],"6CH7L":[function(require,module,exports) {
module.exports = require("19234a75cf20eb19").getBundleURL("7oLGk") + "12.60821c78.png" + "?" + Date.now();

},{"19234a75cf20eb19":"dhz1j"}],"4EEXv":[function(require,module,exports) {
module.exports = require("fcdf8295927cec1").getBundleURL("7oLGk") + "13.00ff10d2.png" + "?" + Date.now();

},{"fcdf8295927cec1":"dhz1j"}],"eWCeV":[function(require,module,exports) {
module.exports = require("9910ee33841dc736").getBundleURL("7oLGk") + "14.80d403ef.png" + "?" + Date.now();

},{"9910ee33841dc736":"dhz1j"}],"cVH5a":[function(require,module,exports) {
module.exports = require("7e6ad195e60f2676").getBundleURL("7oLGk") + "15.b82aa396.png" + "?" + Date.now();

},{"7e6ad195e60f2676":"dhz1j"}],"h68Se":[function(require,module,exports) {
module.exports = require("a8f480cd4ba287a3").getBundleURL("7oLGk") + "16.550c461a.png" + "?" + Date.now();

},{"a8f480cd4ba287a3":"dhz1j"}],"lOSVD":[function(require,module,exports) {
module.exports = require("7eecf40935c2cbe2").getBundleURL("7oLGk") + "0.665bc96e.png" + "?" + Date.now();

},{"7eecf40935c2cbe2":"dhz1j"}],"d13DN":[function(require,module,exports) {
module.exports = require("c9772e07b002e2fc").getBundleURL("7oLGk") + "1.bb08120e.png" + "?" + Date.now();

},{"c9772e07b002e2fc":"dhz1j"}],"gwg5z":[function(require,module,exports) {
module.exports = require("844ebec5beb1f622").getBundleURL("7oLGk") + "0.b9b166ae.png" + "?" + Date.now();

},{"844ebec5beb1f622":"dhz1j"}],"3joaI":[function(require,module,exports) {
module.exports = require("b47e22e6a16f9541").getBundleURL("7oLGk") + "1.494dee77.png" + "?" + Date.now();

},{"b47e22e6a16f9541":"dhz1j"}],"49VzZ":[function(require,module,exports) {
module.exports = require("d4b9589d0b7f76c8").getBundleURL("7oLGk") + "0.b53c2dc9.png" + "?" + Date.now();

},{"d4b9589d0b7f76c8":"dhz1j"}],"9WJMU":[function(require,module,exports) {
module.exports = require("794c403f2b6301da").getBundleURL("7oLGk") + "1.3a2fef45.png" + "?" + Date.now();

},{"794c403f2b6301da":"dhz1j"}],"8o2S3":[function(require,module,exports) {
module.exports = require("fe2b3ead63a3a874").getBundleURL("7oLGk") + "0.47fafcca.png" + "?" + Date.now();

},{"fe2b3ead63a3a874":"dhz1j"}],"ahfUv":[function(require,module,exports) {
module.exports = require("899e2d87aad08c5c").getBundleURL("7oLGk") + "1.07a7f6f3.png" + "?" + Date.now();

},{"899e2d87aad08c5c":"dhz1j"}],"jfRwl":[function(require,module,exports) {
module.exports = require("32d93b3968560ad8").getBundleURL("7oLGk") + "2.8adc8632.png" + "?" + Date.now();

},{"32d93b3968560ad8":"dhz1j"}],"9mK8M":[function(require,module,exports) {
module.exports = require("a4dc37e3e6c06f3c").getBundleURL("7oLGk") + "3.70eb75c6.png" + "?" + Date.now();

},{"a4dc37e3e6c06f3c":"dhz1j"}],"b4HOH":[function(require,module,exports) {
module.exports = require("a99b3e78713f2875").getBundleURL("7oLGk") + "4.ce12d47a.png" + "?" + Date.now();

},{"a99b3e78713f2875":"dhz1j"}],"bzOya":[function(require,module,exports) {
module.exports = require("21f17e4dbe136a34").getBundleURL("7oLGk") + "5.071c1240.png" + "?" + Date.now();

},{"21f17e4dbe136a34":"dhz1j"}],"3wgwf":[function(require,module,exports) {
module.exports = require("96c5132f9ce566a8").getBundleURL("7oLGk") + "6.8684514b.png" + "?" + Date.now();

},{"96c5132f9ce566a8":"dhz1j"}],"e4NcB":[function(require,module,exports) {
module.exports = require("5720949b513033c5").getBundleURL("7oLGk") + "0.b9d8eb08.png" + "?" + Date.now();

},{"5720949b513033c5":"dhz1j"}],"gY3HC":[function(require,module,exports) {
module.exports = require("a992c640dfbf80fc").getBundleURL("7oLGk") + "1.02d137e6.png" + "?" + Date.now();

},{"a992c640dfbf80fc":"dhz1j"}],"8mVBU":[function(require,module,exports) {
module.exports = require("abdacf8b6ddb50eb").getBundleURL("7oLGk") + "2.937b6f73.png" + "?" + Date.now();

},{"abdacf8b6ddb50eb":"dhz1j"}],"gk3jh":[function(require,module,exports) {
module.exports = require("73ca058b3e878c2").getBundleURL("7oLGk") + "3.53511686.png" + "?" + Date.now();

},{"73ca058b3e878c2":"dhz1j"}],"gA08U":[function(require,module,exports) {
module.exports = require("b91ae40cbe1c7f99").getBundleURL("7oLGk") + "4.e0b9e2d0.png" + "?" + Date.now();

},{"b91ae40cbe1c7f99":"dhz1j"}],"jBueU":[function(require,module,exports) {
module.exports = require("8265386917ca300").getBundleURL("7oLGk") + "5.44f19494.png" + "?" + Date.now();

},{"8265386917ca300":"dhz1j"}],"6yPuR":[function(require,module,exports) {
module.exports = require("3c817eda58b8d9c0").getBundleURL("7oLGk") + "6.ae7d27e4.png" + "?" + Date.now();

},{"3c817eda58b8d9c0":"dhz1j"}],"hwwic":[function(require,module,exports) {
module.exports = require("a37232a4cfa6fc02").getBundleURL("7oLGk") + "0.8fa95051.png" + "?" + Date.now();

},{"a37232a4cfa6fc02":"dhz1j"}],"6yy3T":[function(require,module,exports) {
module.exports = require("8514ed478831e0eb").getBundleURL("7oLGk") + "1.b89394f0.png" + "?" + Date.now();

},{"8514ed478831e0eb":"dhz1j"}],"hZrBF":[function(require,module,exports) {
module.exports = require("f880bcca36b5621a").getBundleURL("7oLGk") + "2.86e25a86.png" + "?" + Date.now();

},{"f880bcca36b5621a":"dhz1j"}],"6z6k1":[function(require,module,exports) {
module.exports = require("12bb50dc428bf67c").getBundleURL("7oLGk") + "3.cbf74ba1.png" + "?" + Date.now();

},{"12bb50dc428bf67c":"dhz1j"}],"dVBA0":[function(require,module,exports) {
module.exports = require("4037bb279f39e2d0").getBundleURL("7oLGk") + "4.cf20c243.png" + "?" + Date.now();

},{"4037bb279f39e2d0":"dhz1j"}],"aHzQo":[function(require,module,exports) {
module.exports = require("35e97bbb4640cf69").getBundleURL("7oLGk") + "5.52e02548.png" + "?" + Date.now();

},{"35e97bbb4640cf69":"dhz1j"}],"9k5WO":[function(require,module,exports) {
module.exports = require("c102b8af34bea83e").getBundleURL("7oLGk") + "6.d5751dd7.png" + "?" + Date.now();

},{"c102b8af34bea83e":"dhz1j"}],"gvIiH":[function(require,module,exports) {
module.exports = require("ae00f3001bbb73b7").getBundleURL("7oLGk") + "0.7bf4b80b.png" + "?" + Date.now();

},{"ae00f3001bbb73b7":"dhz1j"}],"bVSZG":[function(require,module,exports) {
module.exports = require("33b06e076b8d41e7").getBundleURL("7oLGk") + "1.1e459d26.png" + "?" + Date.now();

},{"33b06e076b8d41e7":"dhz1j"}],"b99pL":[function(require,module,exports) {
module.exports = require("8b5b0014e7c745de").getBundleURL("7oLGk") + "0.02fcac5d.png" + "?" + Date.now();

},{"8b5b0014e7c745de":"dhz1j"}],"e6CQ1":[function(require,module,exports) {
module.exports = require("440fe44e44cd9dd9").getBundleURL("7oLGk") + "1.d47ded85.png" + "?" + Date.now();

},{"440fe44e44cd9dd9":"dhz1j"}],"aDn8m":[function(require,module,exports) {
module.exports = require("19c801bae4f5cabc").getBundleURL("7oLGk") + "0.d58179f3.png" + "?" + Date.now();

},{"19c801bae4f5cabc":"dhz1j"}],"2wKDQ":[function(require,module,exports) {
module.exports = require("53d4d1b18ae7279a").getBundleURL("7oLGk") + "1.c90533b8.png" + "?" + Date.now();

},{"53d4d1b18ae7279a":"dhz1j"}],"jjpqg":[function(require,module,exports) {
module.exports = require("1b09e1755a929d68").getBundleURL("7oLGk") + "0.1ca82a97.png" + "?" + Date.now();

},{"1b09e1755a929d68":"dhz1j"}],"dlXXZ":[function(require,module,exports) {
module.exports = require("f8174ccc8110897b").getBundleURL("7oLGk") + "1.183544ea.png" + "?" + Date.now();

},{"f8174ccc8110897b":"dhz1j"}],"8FIzv":[function(require,module,exports) {
module.exports = require("69643f98a4915635").getBundleURL("7oLGk") + "2.925ff2fe.png" + "?" + Date.now();

},{"69643f98a4915635":"dhz1j"}],"kYGix":[function(require,module,exports) {
module.exports = require("646be8c68002dfab").getBundleURL("7oLGk") + "0.7f2655b9.png" + "?" + Date.now();

},{"646be8c68002dfab":"dhz1j"}],"3Bgxx":[function(require,module,exports) {
module.exports = require("dbeaad89502dcbaa").getBundleURL("7oLGk") + "1.29b1634a.png" + "?" + Date.now();

},{"dbeaad89502dcbaa":"dhz1j"}],"2bHpS":[function(require,module,exports) {
module.exports = require("40cb0a7c3a9c5f11").getBundleURL("7oLGk") + "2.e9ae6571.png" + "?" + Date.now();

},{"40cb0a7c3a9c5f11":"dhz1j"}],"7d5C8":[function(require,module,exports) {
module.exports = require("c6ae7f6dfc60c254").getBundleURL("7oLGk") + "0.f67f4ca5.png" + "?" + Date.now();

},{"c6ae7f6dfc60c254":"dhz1j"}],"bRhdl":[function(require,module,exports) {
module.exports = require("6ad2a838fe5bf6bb").getBundleURL("7oLGk") + "1.7a00a821.png" + "?" + Date.now();

},{"6ad2a838fe5bf6bb":"dhz1j"}],"aE7ik":[function(require,module,exports) {
module.exports = require("26f9073c26c45219").getBundleURL("7oLGk") + "2.0fd24eab.png" + "?" + Date.now();

},{"26f9073c26c45219":"dhz1j"}],"j2gOc":[function(require,module,exports) {
module.exports = require("2afe435c608f9ba0").getBundleURL("7oLGk") + "0.d664e154.png" + "?" + Date.now();

},{"2afe435c608f9ba0":"dhz1j"}],"64nU9":[function(require,module,exports) {
module.exports = require("5b5f25af429408cd").getBundleURL("7oLGk") + "1.84e98fe3.png" + "?" + Date.now();

},{"5b5f25af429408cd":"dhz1j"}],"boiOQ":[function(require,module,exports) {
module.exports = require("bd6b4cbeff29a267").getBundleURL("7oLGk") + "0.25491624.png" + "?" + Date.now();

},{"bd6b4cbeff29a267":"dhz1j"}],"h9K68":[function(require,module,exports) {
module.exports = require("a5d016103cce7611").getBundleURL("7oLGk") + "1.72447919.png" + "?" + Date.now();

},{"a5d016103cce7611":"dhz1j"}],"bSwvB":[function(require,module,exports) {
module.exports = require("70c965a3990b4151").getBundleURL("7oLGk") + "0.69e48132.png" + "?" + Date.now();

},{"70c965a3990b4151":"dhz1j"}],"PxWjR":[function(require,module,exports) {
module.exports = require("1e6641f7e8979bae").getBundleURL("7oLGk") + "1.bed8f360.png" + "?" + Date.now();

},{"1e6641f7e8979bae":"dhz1j"}],"5wy7S":[function(require,module,exports) {
module.exports = require("957316d27a08dc7c").getBundleURL("7oLGk") + "0.a945627c.png" + "?" + Date.now();

},{"957316d27a08dc7c":"dhz1j"}],"bV6uG":[function(require,module,exports) {
module.exports = require("195ecd9b85171d16").getBundleURL("7oLGk") + "1.d67f7f85.png" + "?" + Date.now();

},{"195ecd9b85171d16":"dhz1j"}],"cdXLT":[function(require,module,exports) {
module.exports = require("31a121c6c251fcaa").getBundleURL("7oLGk") + "2.856e4f6a.png" + "?" + Date.now();

},{"31a121c6c251fcaa":"dhz1j"}],"6I6f5":[function(require,module,exports) {
module.exports = require("7582aa891397161b").getBundleURL("7oLGk") + "0.789fd4a1.png" + "?" + Date.now();

},{"7582aa891397161b":"dhz1j"}],"4I0G2":[function(require,module,exports) {
module.exports = require("4b79451338cb02e1").getBundleURL("7oLGk") + "1.8b40dd4a.png" + "?" + Date.now();

},{"4b79451338cb02e1":"dhz1j"}],"8qVq0":[function(require,module,exports) {
module.exports = require("ba7267a9c000fa87").getBundleURL("7oLGk") + "2.ca95d9a6.png" + "?" + Date.now();

},{"ba7267a9c000fa87":"dhz1j"}],"4y7O5":[function(require,module,exports) {
module.exports = require("701a2fe2ebf1e0eb").getBundleURL("7oLGk") + "0.4458cafc.png" + "?" + Date.now();

},{"701a2fe2ebf1e0eb":"dhz1j"}],"53nKz":[function(require,module,exports) {
module.exports = require("7f0ab718b3be7e20").getBundleURL("7oLGk") + "1.b03a4630.png" + "?" + Date.now();

},{"7f0ab718b3be7e20":"dhz1j"}],"e6mQd":[function(require,module,exports) {
module.exports = require("dd50b850ad30042b").getBundleURL("7oLGk") + "2.51782ce6.png" + "?" + Date.now();

},{"dd50b850ad30042b":"dhz1j"}],"8hNcD":[function(require,module,exports) {
module.exports = require("f507dc48689eb8dc").getBundleURL("7oLGk") + "0.344dfc5d.png" + "?" + Date.now();

},{"f507dc48689eb8dc":"dhz1j"}],"4sfiy":[function(require,module,exports) {
module.exports = require("f9570aeea96f0f22").getBundleURL("7oLGk") + "1.6cfd4c0f.png" + "?" + Date.now();

},{"f9570aeea96f0f22":"dhz1j"}],"dXoiF":[function(require,module,exports) {
module.exports = require("abea7d63a02863ae").getBundleURL("7oLGk") + "2.d3829fbe.png" + "?" + Date.now();

},{"abea7d63a02863ae":"dhz1j"}],"dooNe":[function(require,module,exports) {
module.exports = require("68f6b5f8bc3fdd26").getBundleURL("7oLGk") + "3.f973e4e6.png" + "?" + Date.now();

},{"68f6b5f8bc3fdd26":"dhz1j"}],"1Yqrn":[function(require,module,exports) {
module.exports = require("e2f432db37632534").getBundleURL("7oLGk") + "0.8a16c0d1.png" + "?" + Date.now();

},{"e2f432db37632534":"dhz1j"}],"7xW2i":[function(require,module,exports) {
module.exports = require("5056c39174a9f86b").getBundleURL("7oLGk") + "1.b7e32682.png" + "?" + Date.now();

},{"5056c39174a9f86b":"dhz1j"}],"42g3g":[function(require,module,exports) {
module.exports = require("fc875d13bfc9785").getBundleURL("7oLGk") + "2.56781b8b.png" + "?" + Date.now();

},{"fc875d13bfc9785":"dhz1j"}],"2FPi8":[function(require,module,exports) {
module.exports = require("5751d7a861935b0a").getBundleURL("7oLGk") + "3.9ad0da0e.png" + "?" + Date.now();

},{"5751d7a861935b0a":"dhz1j"}],"6Li4X":[function(require,module,exports) {
module.exports = require("edabf236f6f7ebef").getBundleURL("7oLGk") + "0.67ca11be.png" + "?" + Date.now();

},{"edabf236f6f7ebef":"dhz1j"}],"35n5U":[function(require,module,exports) {
module.exports = require("c52ff87825c92b89").getBundleURL("7oLGk") + "1.58a318a4.png" + "?" + Date.now();

},{"c52ff87825c92b89":"dhz1j"}],"iAkn7":[function(require,module,exports) {
module.exports = require("1615019364a55cf4").getBundleURL("7oLGk") + "2.3a2455c9.png" + "?" + Date.now();

},{"1615019364a55cf4":"dhz1j"}],"6gG3z":[function(require,module,exports) {
module.exports = require("c444319c0ab072b7").getBundleURL("7oLGk") + "3.2eddc175.png" + "?" + Date.now();

},{"c444319c0ab072b7":"dhz1j"}],"alZs1":[function(require,module,exports) {
module.exports = require("843c59fa5ab5db0a").getBundleURL("7oLGk") + "0.6d26c893.png" + "?" + Date.now();

},{"843c59fa5ab5db0a":"dhz1j"}],"l4u4r":[function(require,module,exports) {
module.exports = require("8209de61d36df91").getBundleURL("7oLGk") + "1.a7ad66df.png" + "?" + Date.now();

},{"8209de61d36df91":"dhz1j"}],"7g6gT":[function(require,module,exports) {
module.exports = require("badded7c89f99f7e").getBundleURL("7oLGk") + "2.4d31e85d.png" + "?" + Date.now();

},{"badded7c89f99f7e":"dhz1j"}],"gy7g3":[function(require,module,exports) {
module.exports = require("cb0662848ec0d9a2").getBundleURL("7oLGk") + "3.03170b54.png" + "?" + Date.now();

},{"cb0662848ec0d9a2":"dhz1j"}],"33u61":[function(require,module,exports) {
module.exports = require("b53f646934b29380").getBundleURL("7oLGk") + "0.32920bc1.png" + "?" + Date.now();

},{"b53f646934b29380":"dhz1j"}],"aipNs":[function(require,module,exports) {
module.exports = require("db792b361883e33d").getBundleURL("7oLGk") + "1.e87a028f.png" + "?" + Date.now();

},{"db792b361883e33d":"dhz1j"}],"2vRmY":[function(require,module,exports) {
module.exports = require("84306181c8053190").getBundleURL("7oLGk") + "2.461f64a2.png" + "?" + Date.now();

},{"84306181c8053190":"dhz1j"}],"21Jjz":[function(require,module,exports) {
module.exports = require("a6e0286c1e12ad11").getBundleURL("7oLGk") + "3.7d1e4de7.png" + "?" + Date.now();

},{"a6e0286c1e12ad11":"dhz1j"}],"js9xw":[function(require,module,exports) {
module.exports = require("4d9444f804c5322d").getBundleURL("7oLGk") + "0.feb1f169.png" + "?" + Date.now();

},{"4d9444f804c5322d":"dhz1j"}],"hey0v":[function(require,module,exports) {
module.exports = require("efe07f773b348533").getBundleURL("7oLGk") + "1.9864c0d8.png" + "?" + Date.now();

},{"efe07f773b348533":"dhz1j"}],"tMY4c":[function(require,module,exports) {
module.exports = require("cda7ea3d51e45396").getBundleURL("7oLGk") + "2.96b03293.png" + "?" + Date.now();

},{"cda7ea3d51e45396":"dhz1j"}],"doEvd":[function(require,module,exports) {
module.exports = require("e538c7acf9c5cbac").getBundleURL("7oLGk") + "3.9b35045e.png" + "?" + Date.now();

},{"e538c7acf9c5cbac":"dhz1j"}],"6HTUh":[function(require,module,exports) {
module.exports = require("dc8c3f5e8dad759f").getBundleURL("7oLGk") + "0.519e3560.png" + "?" + Date.now();

},{"dc8c3f5e8dad759f":"dhz1j"}],"jpMtT":[function(require,module,exports) {
module.exports = require("1d2308795a497213").getBundleURL("7oLGk") + "1.df870eb6.png" + "?" + Date.now();

},{"1d2308795a497213":"dhz1j"}],"bS13C":[function(require,module,exports) {
module.exports = require("1ccfffa202035dcc").getBundleURL("7oLGk") + "2.05831082.png" + "?" + Date.now();

},{"1ccfffa202035dcc":"dhz1j"}],"2toVv":[function(require,module,exports) {
module.exports = require("7bdd9cd2e0a2b176").getBundleURL("7oLGk") + "3.9e4676ba.png" + "?" + Date.now();

},{"7bdd9cd2e0a2b176":"dhz1j"}],"3edsd":[function(require,module,exports) {
module.exports = require("b864b173b6748eb2").getBundleURL("7oLGk") + "4.cfbe719f.png" + "?" + Date.now();

},{"b864b173b6748eb2":"dhz1j"}],"gDrdf":[function(require,module,exports) {
module.exports = require("e39f976cae28f5e5").getBundleURL("7oLGk") + "5.d69f4ebb.png" + "?" + Date.now();

},{"e39f976cae28f5e5":"dhz1j"}],"bpqi9":[function(require,module,exports) {
module.exports = require("161fff17b56afdc5").getBundleURL("7oLGk") + "6.3e30cbe5.png" + "?" + Date.now();

},{"161fff17b56afdc5":"dhz1j"}],"3YXrg":[function(require,module,exports) {
module.exports = require("dc021d3a4e950e08").getBundleURL("7oLGk") + "0.de9a1197.png" + "?" + Date.now();

},{"dc021d3a4e950e08":"dhz1j"}],"3zNED":[function(require,module,exports) {
module.exports = require("56a66b2aaf0f58ad").getBundleURL("7oLGk") + "1.f144bb4a.png" + "?" + Date.now();

},{"56a66b2aaf0f58ad":"dhz1j"}],"33zzf":[function(require,module,exports) {
module.exports = require("ae15e78657a499c8").getBundleURL("7oLGk") + "2.e5258106.png" + "?" + Date.now();

},{"ae15e78657a499c8":"dhz1j"}],"2D4Oy":[function(require,module,exports) {
module.exports = require("bf5e2f2ace1416d6").getBundleURL("7oLGk") + "3.2a976c28.png" + "?" + Date.now();

},{"bf5e2f2ace1416d6":"dhz1j"}],"2eDOP":[function(require,module,exports) {
module.exports = require("f458ba896b64c29d").getBundleURL("7oLGk") + "4.aa561ad9.png" + "?" + Date.now();

},{"f458ba896b64c29d":"dhz1j"}],"6YT3B":[function(require,module,exports) {
module.exports = require("b32ab762a3cfbff6").getBundleURL("7oLGk") + "5.cb5750b3.png" + "?" + Date.now();

},{"b32ab762a3cfbff6":"dhz1j"}],"gf7Lh":[function(require,module,exports) {
module.exports = require("eb56cdc7d80ca268").getBundleURL("7oLGk") + "6.45b87dec.png" + "?" + Date.now();

},{"eb56cdc7d80ca268":"dhz1j"}],"7zxfB":[function(require,module,exports) {
module.exports = require("99f4aba67db50247").getBundleURL("7oLGk") + "0.a86e0f14.png" + "?" + Date.now();

},{"99f4aba67db50247":"dhz1j"}],"eXZx9":[function(require,module,exports) {
module.exports = require("c48a54dce8e71277").getBundleURL("7oLGk") + "1.198fb7df.png" + "?" + Date.now();

},{"c48a54dce8e71277":"dhz1j"}],"5dAsL":[function(require,module,exports) {
module.exports = require("8ef5aaa713dc2cdc").getBundleURL("7oLGk") + "2.95895dc3.png" + "?" + Date.now();

},{"8ef5aaa713dc2cdc":"dhz1j"}],"9w2K4":[function(require,module,exports) {
module.exports = require("42fcdaed8b3eadf8").getBundleURL("7oLGk") + "3.d9d409b4.png" + "?" + Date.now();

},{"42fcdaed8b3eadf8":"dhz1j"}],"lCjJp":[function(require,module,exports) {
module.exports = require("76519ff3ec6c3dd7").getBundleURL("7oLGk") + "4.9adab829.png" + "?" + Date.now();

},{"76519ff3ec6c3dd7":"dhz1j"}],"hJib9":[function(require,module,exports) {
module.exports = require("31cc97ca31443b68").getBundleURL("7oLGk") + "5.e1e413c6.png" + "?" + Date.now();

},{"31cc97ca31443b68":"dhz1j"}],"7enYk":[function(require,module,exports) {
module.exports = require("e5ca8f619a3b83af").getBundleURL("7oLGk") + "6.822d523f.png" + "?" + Date.now();

},{"e5ca8f619a3b83af":"dhz1j"}],"3EzDW":[function(require,module,exports) {
module.exports = require("3c2db3f1ee2b2d54").getBundleURL("7oLGk") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.622bc019.MP4" + "?" + Date.now();

},{"3c2db3f1ee2b2d54":"dhz1j"}],"fJqkh":[function(require,module,exports) {
module.exports = require("20672610fb6219e6").getBundleURL("7oLGk") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.6a4c9c74.MP4" + "?" + Date.now();

},{"20672610fb6219e6":"dhz1j"}],"jtQz2":[function(require,module,exports) {
module.exports = require("bcab2d58a5cfd01e").getBundleURL("7oLGk") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.ca27e8d7.MP4" + "?" + Date.now();

},{"bcab2d58a5cfd01e":"dhz1j"}],"fH4TQ":[function(require,module,exports) {
module.exports = require("2b27c96c6a1e44e2").getBundleURL("7oLGk") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.7e1a6fe0.MP4" + "?" + Date.now();

},{"2b27c96c6a1e44e2":"dhz1j"}],"fOUVn":[function(require,module,exports) {
module.exports = require("50768c573b076ec2").getBundleURL("7oLGk") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.71195177.MP4" + "?" + Date.now();

},{"50768c573b076ec2":"dhz1j"}],"eCSwG":[function(require,module,exports) {
module.exports = require("9117ea16d5017604").getBundleURL("7oLGk") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.0174dd88.MP4" + "?" + Date.now();

},{"9117ea16d5017604":"dhz1j"}],"2RLkl":[function(require,module,exports) {
module.exports = require("ac1af23a831d923c").getBundleURL("7oLGk") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.123228f5.MP4" + "?" + Date.now();

},{"ac1af23a831d923c":"dhz1j"}],"dxWE7":[function(require,module,exports) {
module.exports = require("2830e7aa3433725a").getBundleURL("7oLGk") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b253633b.MP4" + "?" + Date.now();

},{"2830e7aa3433725a":"dhz1j"}],"j0R9p":[function(require,module,exports) {
module.exports = require("be86cb337fccd773").getBundleURL("7oLGk") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.06dd88ee.MP4" + "?" + Date.now();

},{"be86cb337fccd773":"dhz1j"}],"1ZK5G":[function(require,module,exports) {
module.exports = require("57f821a7a88e50d2").getBundleURL("7oLGk") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.d0558e52.MP4" + "?" + Date.now();

},{"57f821a7a88e50d2":"dhz1j"}],"jexnN":[function(require,module,exports) {
module.exports = require("c762cce6dc706b21").getBundleURL("7oLGk") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.db86c704.MP4" + "?" + Date.now();

},{"c762cce6dc706b21":"dhz1j"}],"9tD83":[function(require,module,exports) {
module.exports = require("c261359290c02d9f").getBundleURL("7oLGk") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.fbfc1b21.MP4" + "?" + Date.now();

},{"c261359290c02d9f":"dhz1j"}],"1FWkh":[function(require,module,exports) {
module.exports = require("42afb9f239a8f9eb").getBundleURL("7oLGk") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.4026b1b9.MP4" + "?" + Date.now();

},{"42afb9f239a8f9eb":"dhz1j"}],"9ToCL":[function(require,module,exports) {
module.exports = require("e1e7ee5fe448cc0a").getBundleURL("7oLGk") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.9ee181f7.MP4" + "?" + Date.now();

},{"e1e7ee5fe448cc0a":"dhz1j"}],"eDbIh":[function(require,module,exports) {
module.exports = require("dd22da5d8e39ad43").getBundleURL("7oLGk") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.992112fd.MP4" + "?" + Date.now();

},{"dd22da5d8e39ad43":"dhz1j"}],"9nINb":[function(require,module,exports) {
module.exports = require("9b53d49dfbbe5522").getBundleURL("7oLGk") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.e83c0f3a.MP4" + "?" + Date.now();

},{"9b53d49dfbbe5522":"dhz1j"}],"2Wkmd":[function(require,module,exports) {
module.exports = require("4728604416b78dbe").getBundleURL("7oLGk") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.d879fa06.MP4" + "?" + Date.now();

},{"4728604416b78dbe":"dhz1j"}],"7pH0m":[function(require,module,exports) {
module.exports = require("b7feb7e8c569c650").getBundleURL("7oLGk") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.fb1b0300.MP4" + "?" + Date.now();

},{"b7feb7e8c569c650":"dhz1j"}],"KLwqX":[function(require,module,exports) {
module.exports = require("1e014175e9100be6").getBundleURL("7oLGk") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.58840480.MP4" + "?" + Date.now();

},{"1e014175e9100be6":"dhz1j"}],"3185X":[function(require,module,exports) {
module.exports = require("7c090cd15fbf19ef").getBundleURL("7oLGk") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.5728a622.MP4" + "?" + Date.now();

},{"7c090cd15fbf19ef":"dhz1j"}],"8PPWc":[function(require,module,exports) {
module.exports = require("b2670fe6605d6a06").getBundleURL("7oLGk") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.4d11b1bd.MP4" + "?" + Date.now();

},{"b2670fe6605d6a06":"dhz1j"}],"gE0sb":[function(require,module,exports) {
module.exports = require("b0492d5498ecd400").getBundleURL("7oLGk") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.efd250da.MP4" + "?" + Date.now();

},{"b0492d5498ecd400":"dhz1j"}],"6z2cB":[function(require,module,exports) {
module.exports = require("a6f383146038c959").getBundleURL("7oLGk") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.042ad484.MP4" + "?" + Date.now();

},{"a6f383146038c959":"dhz1j"}],"5zb1z":[function(require,module,exports) {
module.exports = require("6c0edd130adf10ec").getBundleURL("7oLGk") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.0f278cb4.MP4" + "?" + Date.now();

},{"6c0edd130adf10ec":"dhz1j"}],"bIwBd":[function(require,module,exports) {
module.exports = require("2e5267e8cbf4e976").getBundleURL("7oLGk") + "2021_09_11 22_49_16    @   Portugal Sintra @.29b755d2.MP4" + "?" + Date.now();

},{"2e5267e8cbf4e976":"dhz1j"}],"3APsu":[function(require,module,exports) {
module.exports = require("2db917fcf7236dac").getBundleURL("7oLGk") + "2021_09_11 22_49_16    @   Portugal Sintra @.dc60a31b.MP4" + "?" + Date.now();

},{"2db917fcf7236dac":"dhz1j"}],"hGOKt":[function(require,module,exports) {
module.exports = require("abce889343a5f8dc").getBundleURL("7oLGk") + "2021_09_11 22_49_16    @   Portugal Sintra @.03f64803.MP4" + "?" + Date.now();

},{"abce889343a5f8dc":"dhz1j"}],"cvpnn":[function(require,module,exports) {
module.exports = require("5cec04b9c2849b25").getBundleURL("7oLGk") + "2021_09_11 18_36_02    @   Portugal Obidos @.72fa430a.MP4" + "?" + Date.now();

},{"5cec04b9c2849b25":"dhz1j"}],"hr1Hm":[function(require,module,exports) {
module.exports = require("9113e29bb4126026").getBundleURL("7oLGk") + "2021_09_11 18_15_50    @   Portugal Obidos @.db01c981.MP4" + "?" + Date.now();

},{"9113e29bb4126026":"dhz1j"}],"5ZMNq":[function(require,module,exports) {
module.exports = require("5eeda5f40652608a").getBundleURL("7oLGk") + "2021_09_11 17_56_56    @   Portugal Obidos @.acb207c4.MP4" + "?" + Date.now();

},{"5eeda5f40652608a":"dhz1j"}],"1qtJ8":[function(require,module,exports) {
module.exports = require("556056fe7202cb69").getBundleURL("7oLGk") + "2021_09_11 18_36_02    @   Portugal Obidos @.5b6bd0f0.MP4" + "?" + Date.now();

},{"556056fe7202cb69":"dhz1j"}],"lGSLq":[function(require,module,exports) {
module.exports = require("e736c92c51455755").getBundleURL("7oLGk") + "2021_09_11 18_15_50    @   Portugal Obidos @.eb6a3c48.MP4" + "?" + Date.now();

},{"e736c92c51455755":"dhz1j"}],"6jOXP":[function(require,module,exports) {
module.exports = require("ec7de2f77f0223a").getBundleURL("7oLGk") + "2021_09_11 17_56_56    @   Portugal Obidos @.3b06e62c.MP4" + "?" + Date.now();

},{"ec7de2f77f0223a":"dhz1j"}],"fvWjH":[function(require,module,exports) {
module.exports = require("9bcba6a6baa94e41").getBundleURL("7oLGk") + "2021_09_11 18_36_02    @   Portugal Obidos @.e282e9f3.MP4" + "?" + Date.now();

},{"9bcba6a6baa94e41":"dhz1j"}],"8jLas":[function(require,module,exports) {
module.exports = require("fb2ee7218a2ebc0f").getBundleURL("7oLGk") + "2021_09_11 18_15_50    @   Portugal Obidos @.54eb92dc.MP4" + "?" + Date.now();

},{"fb2ee7218a2ebc0f":"dhz1j"}],"18Jro":[function(require,module,exports) {
module.exports = require("c5e75eb68fc9fcd").getBundleURL("7oLGk") + "2021_09_11 17_56_56    @   Portugal Obidos @.2bca2198.MP4" + "?" + Date.now();

},{"c5e75eb68fc9fcd":"dhz1j"}],"dBYYk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ct35Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debug", ()=>debug);
var debug = true;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["beiqW"], null, "parcelRequire3c64")

//# sourceMappingURL=index.4f2836c8.js.map

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
})({"4BVU2":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c498aef6608ac3d";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
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
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
        console.log("[parcel] \u2728 Error resolved");
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
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"72Mpf":[function(require,module,exports) {
// import { electedPokemanName } from "./script.js";
//创造两个obj ，最好用constructor 去创建 把属性输入进去  相互攻击 基于摇骰子判定攻击数值
//进化系统开一个头 还有exp系统 需要加一个血槽 一个箭头 ，谁是active player高亮度
//卡片攻击动画 和防守动画， 卡片颜色补上  第一页加入选中提示和 选中动画
var selectedPokemanName = sessionStorage.getItem("selectedPokemanName");
console.log(selectedPokemanName);
// console.log(selectedPokemanName);
const play01El = document.querySelector(".player--0");
const play02El = document.querySelector(".player--1");
const score01El = document.querySelector("#score--0");
const score02El = document.getElementById("score--1");
const current01El = document.querySelector("#current--0");
const current02El = document.querySelector("#current--1");
const dice00 = document.querySelector(".dice--0");
const dice01 = document.querySelector(".dice--1");
const dice02 = document.querySelector(".dice--2");
// const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnNext = document.querySelector(".btn--next");
const insertPlayercard = document.querySelector(".pokemancard--0");
// const insertAIcard = document.querySelector(".pokemancard--1");
const insertAIcard = document.querySelector(".pokemancard--1");
const hp01 = document.querySelector(".hp--01");
const hp02 = document.querySelector(".hp--02");
const delay01 = document.querySelector(".delay--01");
const delay02 = document.querySelector(".delay--02");
//import from scrpt1
// const search = document.querySelector(".search");
// const random = document.querySelector(".random");
// const input = document.querySelector("input");
// const cards = document.querySelector(".cards");
let isWinner = false;
let isPlaying = true;
// score01El.textContent = 0;
// score02El.textContent = 0;
// diceEl.classList.add("hidden");
let score, currentScore, activePlayer, playing;
//try to get data from first page
let pokemanData = [];
const hiddenDice = (ans)=>{
    if (ans) {
        dice00.classList.add("hidden");
        dice01.classList.add("hidden");
        dice02.classList.add("hidden");
    } else {
        dice00.classList.remove("hidden");
        dice01.classList.remove("hidden");
        dice02.classList.remove("hidden");
    }
};
const hpreset = ()=>{
    delay01.style.left = "300px";
    delay01.style.width = "300px";
    delay02.style.left = "300px";
    delay02.style.width = "300px";
    hp01.style.width = "300px";
    hp02.style.width = "300px";
};
const initiInterFace = async ()=>{
    // score = [0, 0];
    // currentScore = 0;
    // activePlayer = 0;
    // playing = true;
    // play01El.classList.add("player--active");
    // play02El.classList.remove("player--active");
    // play01El.classList.remove("player--winner");
    // play02El.classList.remove("player--winner");
    // current01El.textContent = 0;
    // current02El.textContent = 0;
    // score01El.textContent = 0;
    // score02El.textContent = 0;
    let randomId = generateRandomNumber(0, 912, {
        round: true,
        place: 0
    });
    hiddenDice(true);
    isWinner = false;
    isPlaying = true;
    hpreset();
    // btnNext.disabled = true;
    pokemanData = [];
    try {
        // const query = input.value.toLowerCase();初始化两张牌
        const { data  } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemanName}`);
        console.log(data);
        renderCard(data, insertPlayercard);
        //初始化另外一张牌
        // const { dataofplayer2 } = await axios.get(
        //   `https://pokeapi.co/api/v2/pokemon/${selectedPokemanName}`
        // );
        const dataofAI = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        console.log(dataofAI);
        renderCard(dataofAI.data, insertAIcard);
    // return randomId;
    } catch (error) {
        console.log(error.response);
    }
    return randomId;
// console.log(data);
};
initiInterFace();
const swichPlayer = function() {
    play01El.classList.toggle("player--active");
    play02El.classList.toggle("player--active");
};
// current2 = 0;
// btnHold.addEventListener("click", function () {
//   if (playing) {
//     score[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       score[activePlayer];
//     if (score[activePlayer] >= 100) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add("player--winner");
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove("player--active");
//     } else {
//       swichPlayer();
//     }
//   }
// });
// btnNew.addEventListener("click", init);
//===============================================import from script1
// insertPlayercard;
function generateRandomNumber(min = 0, max = 10, options = {
    round: false,
    place: null
}) {
    if (min > max) throw new Error("min cannot be greater than max");
    let randomNum = Math.random() * (max - min) + min;
    const { round , place  } = options;
    if (round && typeof place === "number") {
        if (options.place > 20) throw new Error("Place must be between 0 & 20");
        randomNum = +randomNum.toFixed(options.place);
    }
    return randomNum;
}
// const totalHP = [];
function getPokemonAttributes(data) {
    // 4 random moves if more than 4
    const { height , name , weight  } = data;
    const hp = data.stats[0].base_stat;
    const atk = data.stats[1].base_stat;
    const def = data.stats[2].base_stat;
    const spatk = data.stats[3].base_stat;
    const spdef = data.stats[4].base_stat;
    const spd = data.stats[5].base_stat;
    const type1 = data.types[0].type.name;
    const image = data.sprites.other["official-artwork"].front_default;
    let type2 = null;
    let ability = null;
    const moves = [];
    pokemanData.push([
        hp * 3,
        atk,
        def,
        spd,
        name,
        hp * 3
    ]);
    // totalHP.push(hp);
    // sets type2 if one is available
    if (data.types[1]) type2 = data.types[1].type.name;
    // chooses random ability if multiple are available
    if (data.abilities.length > 1) {
        const max = data.abilities.length - 1;
        const random = generateRandomNumber(0, max, {
            round: true,
            place: 0
        });
        ability = data.abilities[random].ability.name;
    } else ability = data.abilities[0].ability.name;
    // choose 4 randoms move if we have more than four moves to choose from
    // will not allow duplicate moves
    // else add all the moves
    if (data.moves.length > 4) while(moves.length < 4){
        const max = data.moves.length - 1;
        const random = generateRandomNumber(0, max, {
            round: true,
            place: 0
        });
        const move = data.moves[random].move.name;
        if (!moves.includes(move)) moves.push(move);
    }
    else for(let i = 0; i < data.moves.length; i++){
        const { move  } = data.moves[i];
        moves.push(move.name);
    }
    return {
        height,
        name,
        weight,
        hp,
        atk,
        def,
        spatk,
        spdef,
        spd,
        type1,
        type2,
        image,
        ability,
        moves
    };
}
// console.log(`Battledata: ${pokemanData}`);
function capitalize(str) {
    if (str.length === 0 || typeof str !== "string") return str;
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}
function formatWord(str) {
    if (typeof str !== "string") return str;
    return str.split("-").map((word)=>capitalize(word)).join(" ");
}
//i want export this variable later to second page
function generatePokemonHTML(attributes) {
    const moves = attributes.moves.map((move)=>{
        return `<div class="pokemon__move">${formatWord(move)}</div>`;
    }).join("");
    const { type1 , type2 , name , image , ability , hp , atk , def , spdef , spatk , spd , weight , height ,  } = attributes;
    const multiType = `${formatWord(type1)} / ${formatWord(type2)}`;
    const types = !type2 ? formatWord(type1) : multiType;
    const html = `
      <article class="pokemon pokemon__${type1}">
      <div class="pokemon__inner">
        <header class="pokemon__title">
          <!-- name -->
          <h1 class="pokemon__name">${formatWord(name)}</h1>
          <!-- type -->
          <div class="pokemon__type">${types}</div>
        </header>
        <!-- image -->
        <div class="pokemon__image">
          <img src="${image}" alt="">
        </div>
        <!-- ability -->
        <div class="pokemon__ability">
          Ability - ${formatWord(ability)}
        </div>
        <!-- Main -->
        <div class="pokemon__info">
          <!-- Stats -->
          <div class="pokemon__stats">
            <!-- HP -->
            <div class="pokemon__stat-type">HP</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--hp">${hp}</div>
            <!-- ATT -->
            <div class="pokemon__stat-type">ATK</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--atk">${atk}</div>
            <!-- DEF -->
            <div class="pokemon__stat-type">DEF</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--def">${def}</div>
            <!-- SP. ATK -->
            <div class="pokemon__stat-type">SP. ATK</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--spdef">${spdef}</div>
            <!--SP. DEF -->
            <div class="pokemon__stat-type">SP. DEF</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--spatk">${spatk}</div>
            <!-- SPD -->
            <div class="pokemon__stat-type">SPD</div>
            <div class="pokemon__stat-bar pokemon__stat-bar--spd">${spd}</div>
          </div>
          <!-- Moves -->
          <div class="pokemon__moves">
            ${moves}
          </div>
        </div>
        <!-- Extras -->
        <div class="pokemon__extras">
          <!-- Weight ft -->
          <div class="pokemon__weight">
            Weight - ${weight}
          </div>
          <!-- Height ft -->
          <div class="pokemon__height">
            Height - ${height}
          </div>
        </div>
      </div>
    </article>
  `;
    return html;
}
function renderCard(data, root) {
    const attributes = getPokemonAttributes(data);
    const html = generatePokemonHTML(attributes);
    root.innerHTML = html;
}
//=== battle start
// 血槽= 攻击力 - 防御力 必须大于等于0 并且  如果🎲  = 18 就是暴击 3倍攻击力
// 如果🎲  = 3-6 就是miss 0倍攻击力
// 7-12 攻击力 1.0
//  13-17  1.5
//每一场战斗的结果
// function checkRoundresult() {}
function fightRound(attacker, defender, dice) {
    // if (dice > 18 || dice < 3) return error;
    if (dice >= 18) {
        defender[0] -= Math.max(attacker[1] * 2.5 - defender[2], 25); //can't make demage <0
        console.log(`${attacker[4]} Hitting the vitals, generating critical demage(${attacker[1] * 1.8})`);
    } else if (dice <= 6) console.log(`${attacker[4]} missed his attack Made 0 demage`);
    else if (dice >= 7 && dice <= 12) {
        defender[0] -= Math.max(attacker[1] * 0.8 - defender[2], 10);
        console.log(`${attacker[4]}  Made ${attacker[1] * 0.8} demage`);
    } else {
        defender[0] -= Math.max(attacker[1] * 1.1 - defender[2], 15);
        console.log(`${attacker[4]}  Made ${attacker[1] * 1.1}demage`);
    }
}
//一开始有hidden
function rolldice() {
    const diceNumber__00 = generateRandomNumber(1, 6, {
        round: true,
        place: 0
    });
    // dice00.img.classList.remove("hidden");
    dice00.src = `./dice/dice-${diceNumber__00}.png`;
    const diceNumber__01 = generateRandomNumber(1, 6, {
        round: true,
        place: 0
    });
    // dice01.img.classList.remove("hidden");
    dice01.src = `./dice/dice-${diceNumber__01}.png`;
    const diceNumber__02 = generateRandomNumber(1, 6, {
        round: true,
        place: 0
    });
    // dice02.img.classList.remove("hidden");
    dice02.src = `./dice/dice-${diceNumber__02}.png`;
    let diceresult = diceNumber__00 + diceNumber__01 + diceNumber__02;
    console.log(diceresult);
    return diceresult;
}
const endingimg = document.querySelector(".endingPic");
//Battle Start  卡在异步函数很久 最后用settimeout解决  之后变一下promise
// async function startBattle() {
// setTimeout((endingimg.style.display = "block"), 4000);
// setTimeout((endingimg.style.display = "none"), 3000);
// console.log(Array.isArray(dataOfPokeman));
// }
function hpBar(defenderdata, defenderHPBar) {
    let HP = Number(defenderdata[0] / defenderdata[5] * 50).toFixed(2);
    console.log(HP);
    HP = Math.max(HP, 0);
    setTimeout(function() {
        defenderHPBar.style.width = `${HP}%`; //currenthealth, totalHealth
        // hpDelay.style.width = `${HP}%`;
        // hpDelay.style.left = 0;
        defenderHPBar.firstElementChild.style.width = `${HP}%`;
        defenderHPBar.firstElementChild.style.left = `${HP}%`;
    }, 700);
}
function battleWinnerCheck(player1, AIplayer) {
    if (player1[0] <= 0 || AIplayer[0] <= 0) {
        if (player1[0] > AIplayer[0]) {
            console.log(`Winner of this Game is Player1 and his Pokeman + ${player1[4]}}`);
            isPlaying = false;
            isWinner = true;
            hiddenDice(true);
        // setTimeout(loadLosePic(), 1000);
        } else {
            console.log(`Winner of this Game is AIplayer and his Pokeman:" + ${AIplayer[4]}`);
            isPlaying = false;
            setTimeout(loadLosePic(endingimg), 1000);
            isWinner = false;
            hiddenDice(true);
        }
    }
}
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
//加listener
// btnRoll.addEventListener("click", function rolldice() => {
// })
// ;
// let totalHealthOfAIPlayer;
btnRoll.addEventListener("click", async ()=>{
    if (isPlaying) try {
        const [player1, AIPlyaer] = pokemanData;
        console.log(player1, AIPlyaer);
        if (player1[0] > 0 || AIPlyaer[0] > 0) {
            if (player1[3] >= AIPlyaer[3]) {
                //check who's spd faster
                hiddenDice(false);
                swichPlayer();
                let diceResult = rolldice();
                await wait(1);
                fightRound(player1, AIPlyaer, diceResult);
                hpBar(AIPlyaer, hp02);
                //当前血量/ 总血量 防守方血量变化
                swichPlayer();
                diceResult = rolldice();
                swichPlayer();
                setTimeout(fightRound(AIPlyaer, player1, diceResult), 1000);
                hpBar(player1, hp01);
                console.log(player1);
                console.log(AIPlyaer);
            //  防守方血量变化 hpBar(AIPlyaer[0], totalHealthOfAIPlayer, hp01);
            } else {
                swichPlayer();
                let diceResult = rolldice();
                setTimeout(fightRound(AIPlyaer, player1, diceResult), 1000);
                hpBar(player1, hp01);
                swichPlayer();
                diceResult = rolldice();
                setTimeout(fightRound(player1, AIPlyaer, diceResult), 1000);
                hpBar(AIPlyaer, hp02);
                console.log(player1);
                console.log(AIPlyaer);
            }
        }
        battleWinnerCheck(player1, AIPlyaer);
    // btnNext.disabled = true;
    // player1[0] > AIPlyaer[0] ?
    } catch (err) {
        console.error(err);
    }
});
// const hpDelay = document.getElementById("delay");
// contoal hp system
// function winnerCheck() {
//
//     document.getElementById("hp").style.width = 0;
//
const loadLosePic = async function(endingimg) {
    try {
        // Load image 1
        await wait(3);
        img.style.display = "block";
        await wait(4);
        img.style.display = "none";
        // Load image 1
        img = await createImage("img/img-2.jpg");
        console.log("Image 2 loaded");
        await wait(2);
        img.style.display = "none";
    } catch (err) {
        console.error(err);
    }
};
//   loadLosePic(endingimg);
// }
btnNext.addEventListener("click", async function nextgame() {
    console.log(isWinner);
    console.log(isPlaying);
    if (isWinner === true) {
        insertPlayercard.firstElementChild.remove();
        insertAIcard.firstElementChild.remove();
        try {
            await initiInterFace();
        } catch (err) {
            console.log(err);
        }
    }
});

},{}]},["4BVU2","72Mpf"], "72Mpf", "parcelRequire4458")

//# sourceMappingURL=index.6608ac3d.js.map

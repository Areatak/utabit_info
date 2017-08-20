/**
 * Created by root on 5/23/17.
 */
!function t(e, n, i) {
    function r(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)return l(s, !0);
                if (o)return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var c = n[s] = {exports: {}};
            e[s][0].call(c.exports, function (t) {
                var n = e[s][1][t];
                return r(n ? n : t)
            }, c, c.exports, t, e, n, i)
        }
        return n[s].exports
    }

    for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)r(i[s]);
    return r
}({
    1: [function (t, e, n) {
        !function (t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (t) {
                if (!t.document)throw new Error("jQuery requires a window with a document");
                return n(t)
            } : n(t)
        }("undefined" != typeof window ? window : this, function (t, e) {
            function n(t) {
                var e = !!t && "length" in t && t.length, n = ft.type(t);
                return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }

            function i(t, e, n) {
                if (ft.isFunction(e))return ft.grep(t, function (t, i) {
                    return !!e.call(t, i, t) !== n
                });
                if (e.nodeType)return ft.grep(t, function (t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (kt.test(e))return ft.filter(e, t, n);
                    e = ft.filter(e, t)
                }
                return ft.grep(t, function (t) {
                    return ft.inArray(t, e) > -1 !== n
                })
            }

            function r(t, e) {
                do t = t[e]; while (t && 1 !== t.nodeType);
                return t
            }

            function o(t) {
                var e = {};
                return ft.each(t.match(Nt) || [], function (t, n) {
                    e[n] = !0
                }), e
            }

            function s() {
                it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
            }

            function a() {
                (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), ft.ready())
            }

            function l(t, e, n) {
                if (void 0 === n && 1 === t.nodeType) {
                    var i = "data-" + e.replace(Pt, "-$1").toLowerCase();
                    if (n = t.getAttribute(i), "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : At.test(n) ? ft.parseJSON(n) : n)
                        } catch (t) {
                        }
                        ft.data(t, e, n)
                    } else n = void 0
                }
                return n
            }

            function u(t) {
                var e;
                for (e in t)if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
                return !0
            }

            function c(t, e, n, i) {
                if (Ot(t)) {
                    var r, o, s = ft.expando, a = t.nodeType, l = a ? ft.cache : t, u = a ? t[s] : t[s] && s;
                    if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)return u || (u = a ? t[s] = nt.pop() || ft.guid++ : s), l[u] || (l[u] = a ? {} : {toJSON: ft.noop}), "object" != typeof e && "function" != typeof e || (i ? l[u] = ft.extend(l[u], e) : l[u].data = ft.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ft.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[ft.camelCase(e)])) : r = o, r
                }
            }

            function h(t, e, n) {
                if (Ot(t)) {
                    var i, r, o = t.nodeType, s = o ? ft.cache : t, a = o ? t[ft.expando] : ft.expando;
                    if (s[a]) {
                        if (e && (i = n ? s[a] : s[a].data)) {
                            ft.isArray(e) ? e = e.concat(ft.map(e, ft.camelCase)) : e in i ? e = [e] : (e = ft.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                            for (; r--;)delete i[e[r]];
                            if (n ? !u(i) : !ft.isEmptyObject(i))return
                        }
                        (n || (delete s[a].data, u(s[a]))) && (o ? ft.cleanData([t], !0) : ht.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                    }
                }
            }

            function d(t, e, n, i) {
                var r, o = 1, s = 20, a = i ? function () {
                    return i.cur()
                } : function () {
                    return ft.css(t, e, "")
                }, l = a(), u = n && n[3] || (ft.cssNumber[e] ? "" : "px"), c = (ft.cssNumber[e] || "px" !== u && +l) && Yt.exec(ft.css(t, e));
                if (c && c[3] !== u) {
                    u = u || c[3], n = n || [], c = +l || 1;
                    do o = o || ".5", c /= o, ft.style(t, e, c + u); while (o !== (o = a() / l) && 1 !== o && --s)
                }
                return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
            }

            function f(t) {
                var e = Ut.split("|"), n = t.createDocumentFragment();
                if (n.createElement)for (; e.length;)n.createElement(e.pop());
                return n
            }

            function p(t, e) {
                var n, i, r = 0, o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
                if (!o)for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)!e || ft.nodeName(i, e) ? o.push(i) : ft.merge(o, p(i, e));
                return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], o) : o
            }

            function m(t, e) {
                for (var n, i = 0; null != (n = t[i]); i++)ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
            }

            function g(t) {
                Wt.test(t.type) && (t.defaultChecked = t.checked)
            }

            function y(t, e, n, i, r) {
                for (var o, s, a, l, u, c, h, d = t.length, y = f(e), v = [], w = 0; w < d; w++)if (s = t[w], s || 0 === s)if ("object" === ft.type(s))ft.merge(v, s.nodeType ? [s] : s); else if ($t.test(s)) {
                    for (l = l || y.appendChild(e.createElement("div")), u = (qt.exec(s) || ["", ""])[1].toLowerCase(), h = zt[u] || zt._default, l.innerHTML = h[1] + ft.htmlPrefilter(s) + h[2], o = h[0]; o--;)l = l.lastChild;
                    if (!ht.leadingWhitespace && Bt.test(s) && v.push(e.createTextNode(Bt.exec(s)[0])), !ht.tbody)for (s = "table" !== u || Gt.test(s) ? "<table>" !== h[1] || Gt.test(s) ? 0 : l : l.firstChild, o = s && s.childNodes.length; o--;)ft.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (ft.merge(v, l.childNodes), l.textContent = ""; l.firstChild;)l.removeChild(l.firstChild);
                    l = y.lastChild
                } else v.push(e.createTextNode(s));
                for (l && y.removeChild(l), ht.appendChecked || ft.grep(p(v, "input"), g), w = 0; s = v[w++];)if (i && ft.inArray(s, i) > -1)r && r.push(s); else if (a = ft.contains(s.ownerDocument, s), l = p(y.appendChild(s), "script"), a && m(l), n)for (o = 0; s = l[o++];)It.test(s.type || "") && n.push(s);
                return l = null, y
            }

            function v() {
                return !0
            }

            function w() {
                return !1
            }

            function b() {
                try {
                    return it.activeElement
                } catch (t) {
                }
            }

            function x(t, e, n, i, r, o) {
                var s, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = void 0);
                    for (a in e)x(t, a, n, i, e[a], o);
                    return t
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1)r = w; else if (!r)return t;
                return 1 === o && (s = r, r = function (t) {
                    return ft().off(t), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = ft.guid++)), t.each(function () {
                    ft.event.add(this, e, r, i, n)
                })
            }

            function _(t, e) {
                return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function k(t) {
                return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
            }

            function S(t) {
                var e = re.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function T(t, e) {
                if (1 === e.nodeType && ft.hasData(t)) {
                    var n, i, r, o = ft._data(t), s = ft._data(e, o), a = o.events;
                    if (a) {
                        delete s.handle, s.events = {};
                        for (n in a)for (i = 0, r = a[n].length; i < r; i++)ft.event.add(e, n, a[n][i])
                    }
                    s.data && (s.data = ft.extend({}, s.data))
                }
            }

            function C(t, e) {
                var n, i, r;
                if (1 === e.nodeType) {
                    if (n = e.nodeName.toLowerCase(), !ht.noCloneEvent && e[ft.expando]) {
                        r = ft._data(e);
                        for (i in r.events)ft.removeEvent(e, i, r.handle);
                        e.removeAttribute(ft.expando)
                    }
                    "script" === n && e.text !== t.text ? (k(e).text = t.text, S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ht.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Wt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                }
            }

            function D(t, e, n, i) {
                e = ot.apply([], e);
                var r, o, s, a, l, u, c = 0, h = t.length, d = h - 1, f = e[0], m = ft.isFunction(f);
                if (m || h > 1 && "string" == typeof f && !ht.checkClone && ie.test(f))return t.each(function (r) {
                    var o = t.eq(r);
                    m && (e[0] = f.call(this, r, o.html())), D(o, e, n, i)
                });
                if (h && (u = y(e, t[0].ownerDocument, !1, t, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                    for (a = ft.map(p(u, "script"), k), s = a.length; c < h; c++)o = u, c !== d && (o = ft.clone(o, !0, !0), s && ft.merge(a, p(o, "script"))), n.call(t[c], o, c);
                    if (s)for (l = a[a.length - 1].ownerDocument, ft.map(a, S), c = 0; c < s; c++)o = a[c], It.test(o.type || "") && !ft._data(o, "globalEval") && ft.contains(l, o) && (o.src ? ft._evalUrl && ft._evalUrl(o.src) : ft.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
                    u = r = null
                }
                return t
            }

            function M(t, e, n) {
                for (var i, r = e ? ft.filter(e, t) : t, o = 0; null != (i = r[o]); o++)n || 1 !== i.nodeType || ft.cleanData(p(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
                return t
            }

            function N(t, e) {
                var n = ft(e.createElement(t)).appendTo(e.body), i = ft.css(n[0], "display");
                return n.detach(), i
            }

            function j(t) {
                var e = it, n = ue[t];
                return n || (n = N(t, e), "none" !== n && n || (le = (le || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = N(t, e), le.detach()), ue[t] = n), n
            }

            function E(t, e) {
                return {
                    get: function () {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function O(t) {
                if (t in Se)return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = ke.length; n--;)if (t = ke[n] + e, t in Se)return t
            }

            function A(t, e) {
                for (var n, i, r, o = [], s = 0, a = t.length; s < a; s++)i = t[s], i.style && (o[s] = ft._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Rt(i) && (o[s] = ft._data(i, "olddisplay", j(i.nodeName)))) : (r = Rt(i), (n && "none" !== n || !r) && ft._data(i, "olddisplay", r ? n : ft.css(i, "display"))));
                for (s = 0; s < a; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
                return t
            }

            function P(t, e, n) {
                var i = be.exec(e);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
            }

            function L(t, e, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2)"margin" === n && (s += ft.css(t, n + Ft[o], !0, r)), i ? ("content" === n && (s -= ft.css(t, "padding" + Ft[o], !0, r)), "margin" !== n && (s -= ft.css(t, "border" + Ft[o] + "Width", !0, r))) : (s += ft.css(t, "padding" + Ft[o], !0, r), "padding" !== n && (s += ft.css(t, "border" + Ft[o] + "Width", !0, r)));
                return s
            }

            function Y(t, e, n) {
                var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = pe(t), s = ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, o);
                if (r <= 0 || null == r) {
                    if (r = me(t, e, o), (r < 0 || null == r) && (r = t.style[e]), he.test(r))return r;
                    i = s && (ht.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
                }
                return r + L(t, e, n || (s ? "border" : "content"), i, o) + "px"
            }

            function F(t, e, n, i, r) {
                return new F.prototype.init(t, e, n, i, r)
            }

            function R() {
                return t.setTimeout(function () {
                    Te = void 0
                }), Te = ft.now()
            }

            function H(t, e) {
                var n, i = {height: t}, r = 0;
                for (e = e ? 1 : 0; r < 4; r += 2 - e)n = Ft[r], i["margin" + n] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t), i
            }

            function W(t, e, n) {
                for (var i, r = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, s = r.length; o < s; o++)if (i = r[o].call(n, e, t))return i
            }

            function q(t, e, n) {
                var i, r, o, s, a, l, u, c, h = this, d = {}, f = t.style, p = t.nodeType && Rt(t), m = ft._data(t, "fxshow");
                n.queue || (a = ft._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || l()
                }), a.unqueued++, h.always(function () {
                    h.always(function () {
                        a.unqueued--, ft.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ft.css(t, "display"), c = "none" === u ? ft._data(t, "olddisplay") || j(t.nodeName) : u, "inline" === c && "none" === ft.css(t, "float") && (ht.inlineBlockNeedsLayout && "inline" !== j(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ht.shrinkWrapBlocks() || h.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }));
                for (i in e)if (r = e[i], De.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])continue;
                        p = !0
                    }
                    d[i] = m && m[i] || ft.style(t, i)
                } else u = void 0;
                if (ft.isEmptyObject(d))"inline" === ("none" === u ? j(t.nodeName) : u) && (f.display = u); else {
                    m ? "hidden" in m && (p = m.hidden) : m = ft._data(t, "fxshow", {}), o && (m.hidden = !p), p ? ft(t).show() : h.done(function () {
                        ft(t).hide()
                    }), h.done(function () {
                        var e;
                        ft._removeData(t, "fxshow");
                        for (e in d)ft.style(t, e, d[e])
                    });
                    for (i in d)s = W(p ? m[i] : 0, i, h), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }

            function I(t, e) {
                var n, i, r, o, s;
                for (n in t)if (i = ft.camelCase(n), r = e[i], o = t[n], ft.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ft.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete t[i];
                    for (n in o)n in t || (t[n] = o[n], e[n] = r)
                } else e[i] = r
            }

            function B(t, e, n) {
                var i, r, o = 0, s = B.prefilters.length, a = ft.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (r)return !1;
                    for (var e = Te || R(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; s < l; s++)u.tweens[s].run(o);
                    return a.notifyWith(t, [u, o, n]), o < 1 && l ? n : (a.resolveWith(t, [u]), !1)
                }, u = a.promise({
                    elem: t,
                    props: ft.extend({}, e),
                    opts: ft.extend(!0, {specialEasing: {}, easing: ft.easing._default}, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Te || R(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = ft.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0, i = e ? u.tweens.length : 0;
                        if (r)return this;
                        for (r = !0; n < i; n++)u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }), c = u.props;
                for (I(c, u.opts.specialEasing); o < s; o++)if (i = B.prefilters[o].call(u, t, c, u.opts))return ft.isFunction(i.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(i.stop, i)), i;
                return ft.map(c, W, u), ft.isFunction(u.opts.start) && u.opts.start.call(t, u), ft.fx.timer(ft.extend(l, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function U(t) {
                return ft.attr(t, "class") || ""
            }

            function z(t) {
                return function (e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, r = 0, o = e.toLowerCase().match(Nt) || [];
                    if (ft.isFunction(n))for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }

            function $(t, e, n, i) {
                function r(a) {
                    var l;
                    return o[a] = !0, ft.each(t[a] || [], function (t, a) {
                        var u = a(e, n, i);
                        return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                    }), l
                }

                var o = {}, s = t === Je;
                return r(e.dataTypes[0]) || !o["*"] && r("*")
            }

            function G(t, e) {
                var n, i, r = ft.ajaxSettings.flatOptions || {};
                for (i in e)void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
                return n && ft.extend(!0, t, n), t
            }

            function V(t, e, n) {
                for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                if (r)for (s in a)if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
                if (l[0] in n)o = l[0]; else {
                    for (s in n) {
                        if (!l[0] || t.converters[s + " " + l[0]]) {
                            o = s;
                            break
                        }
                        i || (i = s)
                    }
                    o = o || i
                }
                if (o)return o !== l[0] && l.unshift(o), n[o]
            }

            function X(t, e, n, i) {
                var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
                if (c[1])for (s in t.converters)u[s.toLowerCase()] = t.converters[s];
                for (o = c.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
                    if (s = u[l + " " + o] || u["* " + o], !s)for (r in u)if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
                    if (s !== !0)if (s && t.throws)e = s(e); else try {
                        e = s(e)
                    } catch (t) {
                        return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o}
                    }
                }
                return {state: "success", data: e}
            }

            function Q(t) {
                return t.style && t.style.display || ft.css(t, "display")
            }

            function Z(t) {
                if (!ft.contains(t.ownerDocument || it, t))return !0;
                for (; t && 1 === t.nodeType;) {
                    if ("none" === Q(t) || "hidden" === t.type)return !0;
                    t = t.parentNode
                }
                return !1
            }

            function J(t, e, n, i) {
                var r;
                if (ft.isArray(e))ft.each(e, function (e, r) {
                    n || rn.test(t) ? i(t, r) : J(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
                }); else if (n || "object" !== ft.type(e))i(t, e); else for (r in e)J(t + "[" + r + "]", e[r], n, i)
            }

            function K() {
                try {
                    return new t.XMLHttpRequest
                } catch (t) {
                }
            }

            function tt() {
                try {
                    return new t.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {
                }
            }

            function et(t) {
                return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
            }

            var nt = [], it = t.document, rt = nt.slice, ot = nt.concat, st = nt.push, at = nt.indexOf, lt = {}, ut = lt.toString, ct = lt.hasOwnProperty, ht = {}, dt = "1.12.4", ft = function (t, e) {
                return new ft.fn.init(t, e)
            }, pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, mt = /^-ms-/, gt = /-([\da-z])/gi, yt = function (t, e) {
                return e.toUpperCase()
            };
            ft.fn = ft.prototype = {
                jquery: dt, constructor: ft, selector: "", length: 0, toArray: function () {
                    return rt.call(this)
                }, get: function (t) {
                    return null != t ? t < 0 ? this[t + this.length] : this[t] : rt.call(this)
                }, pushStack: function (t) {
                    var e = ft.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                }, each: function (t) {
                    return ft.each(this, t)
                }, map: function (t) {
                    return this.pushStack(ft.map(this, function (e, n) {
                        return t.call(e, n, e)
                    }))
                }, slice: function () {
                    return this.pushStack(rt.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (t) {
                    var e = this.length, n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: st, sort: nt.sort, splice: nt.splice
            }, ft.extend = ft.fn.extend = function () {
                var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ft.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)if (null != (r = arguments[a]))for (i in r)t = s[i], n = r[i], s !== n && (u && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1, o = t && ft.isArray(t) ? t : []) : o = t && ft.isPlainObject(t) ? t : {}, s[i] = ft.extend(u, o, n)) : void 0 !== n && (s[i] = n));
                return s
            }, ft.extend({
                expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () {
                },
                isFunction: function (t) {
                    return "function" === ft.type(t)
                },
                isArray: Array.isArray || function (t) {
                    return "array" === ft.type(t)
                },
                isWindow: function (t) {
                    return null != t && t == t.window
                },
                isNumeric: function (t) {
                    var e = t && t.toString();
                    return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t)return !1;
                    return !0
                },
                isPlainObject: function (t) {
                    var e;
                    if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t))return !1;
                    try {
                        if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))return !1
                    } catch (t) {
                        return !1
                    }
                    if (!ht.ownFirst)for (e in t)return ct.call(t, e);
                    for (e in t);
                    return void 0 === e || ct.call(t, e)
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
                },
                globalEval: function (e) {
                    e && ft.trim(e) && (t.execScript || function (e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function (t) {
                    return t.replace(mt, "ms-").replace(gt, yt)
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function (t, e) {
                    var i, r = 0;
                    if (n(t))for (i = t.length; r < i && e.call(t[r], r, t[r]) !== !1; r++); else for (r in t)if (e.call(t[r], r, t[r]) === !1)break;
                    return t
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(pt, "")
                },
                makeArray: function (t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
                },
                inArray: function (t, e, n) {
                    var i;
                    if (e) {
                        if (at)return at.call(e, t, n);
                        for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)if (n in e && e[n] === t)return n
                    }
                    return -1
                },
                merge: function (t, e) {
                    for (var n = +e.length, i = 0, r = t.length; i < n;)t[r++] = e[i++];
                    if (n !== n)for (; void 0 !== e[i];)t[r++] = e[i++];
                    return t.length = r, t
                },
                grep: function (t, e, n) {
                    for (var i, r = [], o = 0, s = t.length, a = !n; o < s; o++)i = !e(t[o], o), i !== a && r.push(t[o]);
                    return r
                },
                map: function (t, e, i) {
                    var r, o, s = 0, a = [];
                    if (n(t))for (r = t.length; s < r; s++)o = e(t[s], s, i), null != o && a.push(o); else for (s in t)o = e(t[s], s, i), null != o && a.push(o);
                    return ot.apply([], a)
                },
                guid: 1,
                proxy: function (t, e) {
                    var n, i, r;
                    if ("string" == typeof e && (r = t[e], e = t, t = r), ft.isFunction(t))return n = rt.call(arguments, 2), i = function () {
                        return t.apply(e || this, n.concat(rt.call(arguments)))
                    }, i.guid = t.guid = t.guid || ft.guid++, i
                },
                now: function () {
                    return +new Date
                },
                support: ht
            }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                lt["[object " + e + "]"] = e.toLowerCase()
            });
            var vt = function (t) {
                function e(t, e, n, i) {
                    var r, o, s, a, l, u, h, f, p = e && e.ownerDocument, m = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)return n;
                    if (!i && ((e ? e.ownerDocument || e : W) !== O && E(e), e = e || O, P)) {
                        if (11 !== m && (u = yt.exec(t)))if (r = u[1]) {
                            if (9 === m) {
                                if (!(s = e.getElementById(r)))return n;
                                if (s.id === r)return n.push(s), n
                            } else if (p && (s = p.getElementById(r)) && R(e, s) && s.id === r)return n.push(s), n
                        } else {
                            if (u[2])return J.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = u[3]) && x.getElementsByClassName && e.getElementsByClassName)return J.apply(n, e.getElementsByClassName(r)), n
                        }
                        if (x.qsa && !z[t + " "] && (!L || !L.test(t))) {
                            if (1 !== m)p = e, f = t; else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = H), h = T(t), o = h.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; o--;)h[o] = l + " " + d(h[o]);
                                f = h.join(","), p = vt.test(t) && c(e.parentNode) || e
                            }
                            if (f)try {
                                return J.apply(n, p.querySelectorAll(f)), n
                            } catch (t) {
                            } finally {
                                a === H && e.removeAttribute("id")
                            }
                        }
                    }
                    return D(t.replace(at, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }

                    var e = [];
                    return t
                }

                function i(t) {
                    return t[H] = !0, t
                }

                function r(t) {
                    var e = O.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;)_.attrHandle[n[i]] = e
                }

                function s(t, e) {
                    var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                    if (i)return i;
                    if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function l(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function u(t) {
                    return i(function (e) {
                        return e = +e, i(function (n, i) {
                            for (var r, o = t([], n.length, e), s = o.length; s--;)n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function c(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function h() {
                }

                function d(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++)i += t[e].value;
                    return i
                }

                function f(t, e, n) {
                    var i = e.dir, r = n && "parentNode" === i, o = I++;
                    return e.first ? function (e, n, o) {
                        for (; e = e[i];)if (1 === e.nodeType || r)return t(e, n, o)
                    } : function (e, n, s) {
                        var a, l, u, c = [q, o];
                        if (s) {
                            for (; e = e[i];)if ((1 === e.nodeType || r) && t(e, n, s))return !0
                        } else for (; e = e[i];)if (1 === e.nodeType || r) {
                            if (u = e[H] || (e[H] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === q && a[1] === o)return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, s))return !0
                        }
                    }
                }

                function p(t) {
                    return t.length > 1 ? function (e, n, i) {
                        for (var r = t.length; r--;)if (!t[r](e, n, i))return !1;
                        return !0
                    } : t[0]
                }

                function m(t, n, i) {
                    for (var r = 0, o = n.length; r < o; r++)e(t, n[r], i);
                    return i
                }

                function g(t, e, n, i, r) {
                    for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
                    return s
                }

                function y(t, e, n, r, o, s) {
                    return r && !r[H] && (r = y(r)), o && !o[H] && (o = y(o, s)), i(function (i, s, a, l) {
                        var u, c, h, d = [], f = [], p = s.length, y = i || m(e || "*", a.nodeType ? [a] : a, []), v = !t || !i && e ? y : g(y, d, t, a, l), w = n ? o || (i ? t : p || r) ? [] : s : v;
                        if (n && n(v, w, a, l), r)for (u = g(w, f), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (w[f[c]] = !(v[f[c]] = h));
                        if (i) {
                            if (o || t) {
                                if (o) {
                                    for (u = [], c = w.length; c--;)(h = w[c]) && u.push(v[c] = h);
                                    o(null, w = [], u, l)
                                }
                                for (c = w.length; c--;)(h = w[c]) && (u = o ? tt(i, h) : d[c]) > -1 && (i[u] = !(s[u] = h))
                            }
                        } else w = g(w === s ? w.splice(p, w.length) : w), o ? o(null, s, w, l) : J.apply(s, w)
                    })
                }

                function v(t) {
                    for (var e, n, i, r = t.length, o = _.relative[t[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = f(function (t) {
                        return t === e
                    }, s, !0), u = f(function (t) {
                        return tt(e, t) > -1
                    }, s, !0), c = [function (t, n, i) {
                        var r = !o && (i || n !== M) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, r
                    }]; a < r; a++)if (n = _.relative[t[a].type])c = [f(p(c), n)]; else {
                        if (n = _.filter[t[a].type].apply(null, t[a].matches), n[H]) {
                            for (i = ++a; i < r && !_.relative[t[i].type]; i++);
                            return y(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), n, a < i && v(t.slice(a, i)), i < r && v(t = t.slice(i)), i < r && d(t))
                        }
                        c.push(n)
                    }
                    return p(c)
                }

                function w(t, n) {
                    var r = n.length > 0, o = t.length > 0, s = function (i, s, a, l, u) {
                        var c, h, d, f = 0, p = "0", m = i && [], y = [], v = M, w = i || o && _.find.TAG("*", u), b = q += null == v ? 1 : Math.random() || .1, x = w.length;
                        for (u && (M = s === O || s || u); p !== x && null != (c = w[p]); p++) {
                            if (o && c) {
                                for (h = 0, s || c.ownerDocument === O || (E(c), a = !P); d = t[h++];)if (d(c, s || O, a)) {
                                    l.push(c);
                                    break
                                }
                                u && (q = b)
                            }
                            r && ((c = !d && c) && f--, i && m.push(c))
                        }
                        if (f += p, r && p !== f) {
                            for (h = 0; d = n[h++];)d(m, y, s, a);
                            if (i) {
                                if (f > 0)for (; p--;)m[p] || y[p] || (y[p] = Q.call(l));
                                y = g(y)
                            }
                            J.apply(l, y), u && !i && y.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (q = b, M = v), m
                    };
                    return r ? i(s) : s
                }

                var b, x, _, k, S, T, C, D, M, N, j, E, O, A, P, L, Y, F, R, H = "sizzle" + 1 * new Date, W = t.document, q = 0, I = 0, B = n(), U = n(), z = n(), $ = function (t, e) {
                    return t === e && (j = !0), 0
                }, G = 1 << 31, V = {}.hasOwnProperty, X = [], Q = X.pop, Z = X.push, J = X.push, K = X.slice, tt = function (t, e) {
                    for (var n = 0, i = t.length; n < i; n++)if (t[n] === e)return n;
                    return -1
                }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", st = new RegExp(nt + "+", "g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ht = new RegExp(ot), dt = new RegExp("^" + it + "$"), ft = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it + "|[*])"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                }, pt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, wt = /'|\\/g, bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), xt = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, _t = function () {
                    E()
                };
                try {
                    J.apply(X = K.call(W.childNodes), W.childNodes), X[W.childNodes.length].nodeType
                } catch (t) {
                    J = {
                        apply: X.length ? function (t, e) {
                            Z.apply(t, K.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                x = e.support = {}, S = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, E = e.setDocument = function (t) {
                    var e, n, i = t ? t.ownerDocument || t : W;
                    return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, A = O.documentElement, P = !S(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), x.attributes = r(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), x.getElementsByTagName = r(function (t) {
                        return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length
                    }), x.getElementsByClassName = gt.test(O.getElementsByClassName), x.getById = r(function (t) {
                        return A.appendChild(t).id = H, !O.getElementsByName || !O.getElementsByName(H).length
                    }), x.getById ? (_.find.ID = function (t, e) {
                        if ("undefined" != typeof e.getElementById && P) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }, _.filter.ID = function (t) {
                        var e = t.replace(bt, xt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete _.find.ID, _.filter.ID = function (t) {
                        var e = t.replace(bt, xt);
                        return function (t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), _.find.TAG = x.getElementsByTagName ? function (t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [], r = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];)1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, _.find.CLASS = x.getElementsByClassName && function (t, e) {
                            if ("undefined" != typeof e.getElementsByClassName && P)return e.getElementsByClassName(t)
                        }, Y = [], L = [], (x.qsa = gt.test(O.querySelectorAll)) && (r(function (t) {
                        A.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + H + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]")
                    }), r(function (t) {
                        var e = O.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                    })), (x.matchesSelector = gt.test(F = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function (t) {
                        x.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), Y.push("!=", ot)
                    }), L = L.length && new RegExp(L.join("|")), Y = Y.length && new RegExp(Y.join("|")), e = gt.test(A.compareDocumentPosition), R = e || gt.test(A.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e)for (; e = e.parentNode;)if (e === t)return !0;
                        return !1
                    }, $ = e ? function (t, e) {
                        if (t === e)return j = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === O || t.ownerDocument === W && R(W, t) ? -1 : e === O || e.ownerDocument === W && R(W, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e)return j = !0, 0;
                        var n, i = 0, r = t.parentNode, o = e.parentNode, a = [t], l = [e];
                        if (!r || !o)return t === O ? -1 : e === O ? 1 : r ? -1 : o ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                        if (r === o)return s(t, e);
                        for (n = t; n = n.parentNode;)a.unshift(n);
                        for (n = e; n = n.parentNode;)l.unshift(n);
                        for (; a[i] === l[i];)i++;
                        return i ? s(a[i], l[i]) : a[i] === W ? -1 : l[i] === W ? 1 : 0
                    }, O) : O
                }, e.matches = function (t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function (t, n) {
                    if ((t.ownerDocument || t) !== O && E(t), n = n.replace(ct, "='$1']"), x.matchesSelector && P && !z[n + " "] && (!Y || !Y.test(n)) && (!L || !L.test(n)))try {
                        var i = F.call(t, n);
                        if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                    } catch (t) {
                    }
                    return e(n, O, null, [t]).length > 0
                }, e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== O && E(t), R(t, e)
                }, e.attr = function (t, e) {
                    (t.ownerDocument || t) !== O && E(t);
                    var n = _.attrHandle[e.toLowerCase()], i = n && V.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
                    return void 0 !== i ? i : x.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function (t) {
                    var e, n = [], i = 0, r = 0;
                    if (j = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort($), j) {
                        for (; e = t[r++];)e === t[r] && (i = n.push(r));
                        for (; i--;)t.splice(n[i], 1)
                    }
                    return N = null, t
                }, k = e.getText = function (t) {
                    var e, n = "", i = 0, r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent)return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)n += k(t)
                        } else if (3 === r || 4 === r)return t.nodeValue
                    } else for (; e = t[i++];)n += k(e);
                    return n
                }, _ = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ft,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(bt, xt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = B[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function (t) {
                                    return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                })
                        }, ATTR: function (t, n, i) {
                            return function (r) {
                                var o = e.attr(r, t);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                            return 1 === i && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var u, c, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, y = a && e.nodeName.toLowerCase(), v = !l && !a, w = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = e; d = d[m];)if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)return !1;
                                            p = m = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? g.firstChild : g.lastChild], s && v) {
                                        for (d = g, h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], w = f && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (w = f = 0) || p.pop();)if (1 === d.nodeType && ++w && d === e) {
                                            c[t] = [q, f, w];
                                            break
                                        }
                                    } else if (v && (d = e, h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], w = f), w === !1)for (; (d = ++f && d && d[m] || (w = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++w || (v && (h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), c[t] = [q, w]), d !== e)););
                                    return w -= r, w === i || w % i === 0 && w / i >= 0
                                }
                            }
                        }, PSEUDO: function (t, n) {
                            var r, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[H] ? o(n) : o.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                for (var i, r = o(t, n), s = r.length; s--;)i = tt(t, r[s]), t[i] = !(e[i] = r[s])
                            }) : function (t) {
                                return o(t, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function (t) {
                            var e = [], n = [], r = C(t.replace(at, "$1"));
                            return r[H] ? i(function (t, e, n, i) {
                                for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function (t, i, o) {
                                return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }), has: i(function (t) {
                            return function (n) {
                                return e(t, n).length > 0
                            }
                        }), contains: i(function (t) {
                            return t = t.replace(bt, xt), function (e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                        }), lang: i(function (t) {
                            return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(), function (e) {
                                var n;
                                do if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === A
                        }, focus: function (t) {
                            return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: function (t) {
                            return t.disabled === !1
                        }, disabled: function (t) {
                            return t.disabled === !0
                        }, checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                            return !0
                        }, parent: function (t) {
                            return !_.pseudos.empty(t)
                        }, header: function (t) {
                            return mt.test(t.nodeName)
                        }, input: function (t) {
                            return pt.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: u(function () {
                            return [0]
                        }), last: u(function (t, e) {
                            return [e - 1]
                        }), eq: u(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }), even: u(function (t, e) {
                            for (var n = 0; n < e; n += 2)t.push(n);
                            return t
                        }), odd: u(function (t, e) {
                            for (var n = 1; n < e; n += 2)t.push(n);
                            return t
                        }), lt: u(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; --i >= 0;)t.push(i);
                            return t
                        }), gt: u(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;)t.push(i);
                            return t
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})_.pseudos[b] = a(b);
                for (b in{submit: !0, reset: !0})_.pseudos[b] = l(b);
                return h.prototype = _.filters = _.pseudos, _.setFilters = new h, T = e.tokenize = function (t, n) {
                    var i, r, o, s, a, l, u, c = U[t + " "];
                    if (c)return n ? 0 : c.slice(0);
                    for (a = t, l = [], u = _.preFilter; a;) {
                        i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(at, " ")
                        }), a = a.slice(i.length));
                        for (s in _.filter)!(r = ft[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: s,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i)break
                    }
                    return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
                }, C = e.compile = function (t, e) {
                    var n, i = [], r = [], o = z[t + " "];
                    if (!o) {
                        for (e || (e = T(t)), n = e.length; n--;)o = v(e[n]), o[H] ? i.push(o) : r.push(o);
                        o = z(t, w(r, i)), o.selector = t
                    }
                    return o
                }, D = e.select = function (t, e, n, i) {
                    var r, o, s, a, l, u = "function" == typeof t && t, h = !i && T(t = u.selector || t);
                    if (n = n || [], 1 === h.length) {
                        if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && P && _.relative[o[1].type]) {
                            if (e = (_.find.ID(s.matches[0].replace(bt, xt), e) || [])[0], !e)return n;
                            u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)if ((l = _.find[a]) && (i = l(s.matches[0].replace(bt, xt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = i.length && d(o), !t)return J.apply(n, i), n;
                            break
                        }
                    }
                    return (u || C(t, h))(i, e, !P, n, !e || vt.test(t) && c(e.parentNode) || e), n
                }, x.sortStable = H.split("").sort($).join("") === H, x.detectDuplicates = !!j, E(), x.sortDetached = r(function (t) {
                    return 1 & t.compareDocumentPosition(O.createElement("div"))
                }), r(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (t, e, n) {
                    if (!n)return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), x.attributes && r(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase())return t.defaultValue
                }), r(function (t) {
                    return null == t.getAttribute("disabled")
                }) || o(et, function (t, e, n) {
                    var i;
                    if (!n)return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(t);
            ft.find = vt, ft.expr = vt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = vt.uniqueSort, ft.text = vt.getText, ft.isXMLDoc = vt.isXML, ft.contains = vt.contains;
            var wt = function (t, e, n) {
                for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                    if (r && ft(t).is(n))break;
                    i.push(t)
                }
                return i
            }, bt = function (t, e) {
                for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                return n
            }, xt = ft.expr.match.needsContext, _t = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, kt = /^.[^:#\[\.,]*$/;
            ft.filter = function (t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, ft.fn.extend({
                find: function (t) {
                    var e, n = [], i = this, r = i.length;
                    if ("string" != typeof t)return this.pushStack(ft(t).filter(function () {
                        for (e = 0; e < r; e++)if (ft.contains(i[e], this))return !0
                    }));
                    for (e = 0; e < r; e++)ft.find(t, i[e], n);
                    return n = this.pushStack(r > 1 ? ft.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
                }, filter: function (t) {
                    return this.pushStack(i(this, t || [], !1))
                }, not: function (t) {
                    return this.pushStack(i(this, t || [], !0))
                }, is: function (t) {
                    return !!i(this, "string" == typeof t && xt.test(t) ? ft(t) : t || [], !1).length
                }
            });
            var St, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Ct = ft.fn.init = function (t, e, n) {
                var i, r;
                if (!t)return this;
                if (n = n || St, "string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), _t.test(i[1]) && ft.isPlainObject(e))for (i in e)ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (r = it.getElementById(i[2]), r && r.parentNode) {
                        if (r.id !== i[2])return St.find(t);
                        this.length = 1, this[0] = r
                    }
                    return this.context = it, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this))
            };
            Ct.prototype = ft.fn, St = ft(it);
            var Dt = /^(?:parents|prev(?:Until|All))/, Mt = {children: !0, contents: !0, next: !0, prev: !0};
            ft.fn.extend({
                has: function (t) {
                    var e, n = ft(t, this), i = n.length;
                    return this.filter(function () {
                        for (e = 0; e < i; e++)if (ft.contains(this, n[e]))return !0
                    })
                }, closest: function (t, e) {
                    for (var n, i = 0, r = this.length, o = [], s = xt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i < r; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? ft.uniqueSort(o) : o)
                }, index: function (t) {
                    return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (t, e) {
                    return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
                }, addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), ft.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                }, parents: function (t) {
                    return wt(t, "parentNode")
                }, parentsUntil: function (t, e, n) {
                    return wt(t, "parentNode", n)
                }, next: function (t) {
                    return r(t, "nextSibling")
                }, prev: function (t) {
                    return r(t, "previousSibling")
                }, nextAll: function (t) {
                    return wt(t, "nextSibling")
                }, prevAll: function (t) {
                    return wt(t, "previousSibling")
                }, nextUntil: function (t, e, n) {
                    return wt(t, "nextSibling", n)
                }, prevUntil: function (t, e, n) {
                    return wt(t, "previousSibling", n)
                }, siblings: function (t) {
                    return bt((t.parentNode || {}).firstChild, t)
                }, children: function (t) {
                    return bt(t.firstChild)
                }, contents: function (t) {
                    return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
                }
            }, function (t, e) {
                ft.fn[t] = function (n, i) {
                    var r = ft.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ft.filter(i, r)), this.length > 1 && (Mt[t] || (r = ft.uniqueSort(r)), Dt.test(t) && (r = r.reverse())), this.pushStack(r)
                }
            });
            var Nt = /\S+/g;
            ft.Callbacks = function (t) {
                t = "string" == typeof t ? o(t) : ft.extend({}, t);
                var e, n, i, r, s = [], a = [], l = -1, u = function () {
                    for (r = t.once, i = e = !0; a.length; l = -1)for (n = a.shift(); ++l < s.length;)s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                }, c = {
                    add: function () {
                        return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
                            ft.each(n, function (n, i) {
                                ft.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== ft.type(i) && e(i)
                            })
                        }(arguments), n && !e && u()), this
                    }, remove: function () {
                        return ft.each(arguments, function (t, e) {
                            for (var n; (n = ft.inArray(e, s, n)) > -1;)s.splice(n, 1), n <= l && l--
                        }), this
                    }, has: function (t) {
                        return t ? ft.inArray(t, s) > -1 : s.length > 0
                    }, empty: function () {
                        return s && (s = []), this
                    }, disable: function () {
                        return r = a = [], s = n = "", this
                    }, disabled: function () {
                        return !s
                    }, lock: function () {
                        return r = !0, n || c.disable(), this
                    }, locked: function () {
                        return !!r
                    }, fireWith: function (t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                    }, fire: function () {
                        return c.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!i
                    }
                };
                return c
            }, ft.extend({
                Deferred: function (t) {
                    var e = [["resolve", "done", ft.Callbacks("once memory"), "resolved"], ["reject", "fail", ft.Callbacks("once memory"), "rejected"], ["notify", "progress", ft.Callbacks("memory")]], n = "pending", i = {
                        state: function () {
                            return n
                        }, always: function () {
                            return r.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return ft.Deferred(function (n) {
                                ft.each(e, function (e, o) {
                                    var s = ft.isFunction(t[e]) && t[e];
                                    r[o[1]](function () {
                                        var t = s && s.apply(this, arguments);
                                        t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? ft.extend(t, i) : i
                        }
                    }, r = {};
                    return i.pipe = i.then, ft.each(e, function (t, o) {
                        var s = o[2], a = o[3];
                        i[o[1]] = s.add, a && s.add(function () {
                            n = a
                        }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                            return r[o[0] + "With"](this === r ? i : this, arguments), this
                        }, r[o[0] + "With"] = s.fireWith
                    }), i.promise(r), t && t.call(r, r), r
                }, when: function (t) {
                    var e, n, i, r = 0, o = rt.call(arguments), s = o.length, a = 1 !== s || t && ft.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ft.Deferred(), u = function (t, n, i) {
                        return function (r) {
                            n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                    if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); r < s; r++)o[r] && ft.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
                    return a || l.resolveWith(i, o), l.promise()
                }
            });
            var jt;
            ft.fn.ready = function (t) {
                return ft.ready.promise().done(t), this
            }, ft.extend({
                isReady: !1, readyWait: 1, holdReady: function (t) {
                    t ? ft.readyWait++ : ft.ready(!0)
                }, ready: function (t) {
                    (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || (jt.resolveWith(it, [ft]), ft.fn.triggerHandler && (ft(it).triggerHandler("ready"), ft(it).off("ready"))))
                }
            }), ft.ready.promise = function (e) {
                if (!jt)if (jt = ft.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll)t.setTimeout(ft.ready); else if (it.addEventListener)it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a); else {
                    it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                    var n = !1;
                    try {
                        n = null == t.frameElement && it.documentElement
                    } catch (t) {
                    }
                    n && n.doScroll && !function e() {
                        if (!ft.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (n) {
                                return t.setTimeout(e, 50)
                            }
                            s(), ft.ready()
                        }
                    }()
                }
                return jt.promise(e)
            }, ft.ready.promise();
            var Et;
            for (Et in ft(ht))break;
            ht.ownFirst = "0" === Et, ht.inlineBlockNeedsLayout = !1, ft(function () {
                var t, e, n, i;
                n = it.getElementsByTagName("body")[0], n && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ht.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }), function () {
                var t = it.createElement("div");
                ht.deleteExpando = !0;
                try {
                    delete t.test
                } catch (t) {
                    ht.deleteExpando = !1
                }
                t = null
            }();
            var Ot = function (t) {
                var e = ft.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
            }, At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pt = /([A-Z])/g;
            ft.extend({
                cache: {},
                noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
                hasData: function (t) {
                    return t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando], !!t && !u(t)
                },
                data: function (t, e, n) {
                    return c(t, e, n)
                },
                removeData: function (t, e) {
                    return h(t, e)
                },
                _data: function (t, e, n) {
                    return c(t, e, n, !0)
                },
                _removeData: function (t, e) {
                    return h(t, e, !0)
                }
            }), ft.fn.extend({
                data: function (t, e) {
                    var n, i, r, o = this[0], s = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (r = ft.data(o), 1 === o.nodeType && !ft._data(o, "parsedAttrs"))) {
                            for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), l(o, i, r[i])));
                            ft._data(o, "parsedAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof t ? this.each(function () {
                        ft.data(this, t)
                    }) : arguments.length > 1 ? this.each(function () {
                        ft.data(this, t, e)
                    }) : o ? l(o, t, ft.data(o, t)) : void 0
                }, removeData: function (t) {
                    return this.each(function () {
                        ft.removeData(this, t)
                    })
                }
            }), ft.extend({
                queue: function (t, e, n) {
                    var i;
                    if (t)return e = (e || "fx") + "queue", i = ft._data(t, e), n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)), i || []
                }, dequeue: function (t, e) {
                    e = e || "fx";
                    var n = ft.queue(t, e), i = n.length, r = n.shift(), o = ft._queueHooks(t, e), s = function () {
                        ft.dequeue(t, e)
                    };
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
                }, _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return ft._data(t, n) || ft._data(t, n, {
                            empty: ft.Callbacks("once memory").add(function () {
                                ft._removeData(t, e + "queue"), ft._removeData(t, n)
                            })
                        })
                }
            }), ft.fn.extend({
                queue: function (t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var n = ft.queue(this, t, e);
                        ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                    })
                }, dequeue: function (t) {
                    return this.each(function () {
                        ft.dequeue(this, t)
                    })
                }, clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                }, promise: function (t, e) {
                    var n, i = 1, r = ft.Deferred(), o = this, s = this.length, a = function () {
                        --i || r.resolveWith(o, [o])
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = ft._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                    return a(), r.promise(e)
                }
            }), function () {
                var t;
                ht.shrinkWrapBlocks = function () {
                    if (null != t)return t;
                    t = !1;
                    var e, n, i;
                    return n = it.getElementsByTagName("body")[0], n && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
                }
            }();
            var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Yt = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"), Ft = ["Top", "Right", "Bottom", "Left"], Rt = function (t, e) {
                return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
            }, Ht = function (t, e, n, i, r, o, s) {
                var a = 0, l = t.length, u = null == n;
                if ("object" === ft.type(n)) {
                    r = !0;
                    for (a in n)Ht(t, e, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, ft.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                        return u.call(ft(t), n)
                    })), e))for (; a < l; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
            }, Wt = /^(?:checkbox|radio)$/i, qt = /<([\w:-]+)/, It = /^$|\/(?:java|ecma)script/i, Bt = /^\s+/, Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            !function () {
                var t = it.createElement("div"), e = it.createDocumentFragment(), n = it.createElement("input");
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ht.leadingWhitespace = 3 === t.firstChild.nodeType, ht.tbody = !t.getElementsByTagName("tbody").length, ht.htmlSerialize = !!t.getElementsByTagName("link").length, ht.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ht.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ht.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.noCloneEvent = !!t.addEventListener, t[ft.expando] = 1, ht.attributes = !t.getAttribute(ft.expando)
            }();
            var zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ht.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
            var $t = /<|&#?\w+;/, Gt = /<tbody/i;
            !function () {
                var e, n, i = it.createElement("div");
                for (e in{
                    submit: !0,
                    change: !0,
                    focusin: !0
                })n = "on" + e, (ht[e] = n in t) || (i.setAttribute(n, "t"), ht[e] = i.attributes[n].expando === !1);
                i = null
            }();
            var Vt = /^(?:input|select|textarea)$/i, Xt = /^key/, Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Zt = /^(?:focusinfocus|focusoutblur)$/, Jt = /^([^.]*)(?:\.(.+)|)/;
            ft.event = {
                global: {},
                add: function (t, e, n, i, r) {
                    var o, s, a, l, u, c, h, d, f, p, m, g = ft._data(t);
                    if (g) {
                        for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = ft.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function (t) {
                            return "undefined" == typeof ft || t && ft.event.triggered === t.type ? void 0 : ft.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), e = (e || "").match(Nt) || [""], a = e.length; a--;)o = Jt.exec(e[a]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (u = ft.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = ft.event.special[f] || {}, h = ft.extend({
                            type: f,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && ft.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), ft.event.global[f] = !0);
                        t = null
                    }
                },
                remove: function (t, e, n, i, r) {
                    var o, s, a, l, u, c, h, d, f, p, m, g = ft.hasData(t) && ft._data(t);
                    if (g && (c = g.events)) {
                        for (e = (e || "").match(Nt) || [""], u = e.length; u--;)if (a = Jt.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (h = ft.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;)s = d[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                            l && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || ft.removeEvent(t, f, g.handle), delete c[f])
                        } else for (f in c)ft.event.remove(t, f + e[u], n, i, !0);
                        ft.isEmptyObject(c) && (delete g.handle, ft._removeData(t, "events"))
                    }
                },
                trigger: function (e, n, i, r) {
                    var o, s, a, l, u, c, h, d = [i || it], f = ct.call(e, "type") ? e.type : e, p = ct.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Zt.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), u = ft.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                        if (!r && !u.noBubble && !ft.isWindow(i)) {
                            for (l = u.delegateType || f, Zt.test(l + f) || (a = a.parentNode); a; a = a.parentNode)d.push(a), c = a;
                            c === (i.ownerDocument || it) && d.push(c.defaultView || c.parentWindow || t)
                        }
                        for (h = 0; (a = d[h++]) && !e.isPropagationStopped();)e.type = h > 1 ? l : u.bindType || f, o = (ft._data(a, "events") || {})[e.type] && ft._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && Ot(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                        if (e.type = f, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && Ot(i) && s && i[f] && !ft.isWindow(i)) {
                            c = i[s], c && (i[s] = null), ft.event.triggered = f;
                            try {
                                i[f]()
                            } catch (t) {
                            }
                            ft.event.triggered = void 0, c && (i[s] = c)
                        }
                        return e.result
                    }
                },
                dispatch: function (t) {
                    t = ft.event.fix(t);
                    var e, n, i, r, o, s = [], a = rt.call(arguments), l = (ft._data(this, "events") || {})[t.type] || [], u = ft.event.special[t.type] || {};
                    if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                        for (s = ft.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, i = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function (t, e) {
                    var n, i, r, o, s = [], a = e.delegateCount, l = t.target;
                    if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; n < a; n++)o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ft(r, this).index(l) > -1 : ft.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({elem: l, handlers: i})
                    }
                    return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
                },
                fix: function (t) {
                    if (t[ft.expando])return t;
                    var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
                    for (s || (this.fixHooks[r] = s = Qt.test(r) ? this.mouseHooks : Xt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ft.Event(o), e = i.length; e--;)n = i[e], t[n] = o[n];
                    return t.target || (t.target = o.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (t, e) {
                        var n, i, r, o = e.button, s = e.fromElement;
                        return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                    }
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== b() && this.focus)try {
                                return this.focus(), !1
                            } catch (t) {
                            }
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            if (this === b() && this.blur)return this.blur(), !1
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                        }, _default: function (t) {
                            return ft.nodeName(t.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function (t, e, n) {
                    var i = ft.extend(new ft.Event, n, {type: t, isSimulated: !0});
                    ft.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
                }
            }, ft.removeEvent = it.removeEventListener ? function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            } : function (t, e, n) {
                var i = "on" + e;
                t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
            }, ft.Event = function (t, e) {
                return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : w) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
            }, ft.Event.prototype = {
                constructor: ft.Event,
                isDefaultPrevented: w,
                isPropagationStopped: w,
                isImmediatePropagationStopped: w,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = v, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = v, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = v, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, ft.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, e) {
                ft.event.special[t] = {
                    delegateType: e, bindType: e, handle: function (t) {
                        var n, i = this, r = t.relatedTarget, o = t.handleObj;
                        return r && (r === i || ft.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), ht.submit || (ft.event.special.submit = {
                setup: function () {
                    return !ft.nodeName(this, "form") && void ft.event.add(this, "click._submit keypress._submit", function (t) {
                            var e = t.target, n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : void 0;
                            n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function (t) {
                                t._submitBubble = !0
                            }), ft._data(n, "submit", !0))
                        })
                }, postDispatch: function (t) {
                    t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
                }, teardown: function () {
                    return !ft.nodeName(this, "form") && void ft.event.remove(this, "._submit")
                }
            }), ht.change || (ft.event.special.change = {
                setup: function () {
                    return Vt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function (t) {
                        "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                    }), ft.event.add(this, "click._change", function (t) {
                        this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
                    })), !1) : void ft.event.add(this, "beforeactivate._change", function (t) {
                        var e = t.target;
                        Vt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function (t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                        }), ft._data(e, "change", !0))
                    })
                }, handle: function (t) {
                    var e = t.target;
                    if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)return t.handleObj.handler.apply(this, arguments)
                }, teardown: function () {
                    return ft.event.remove(this, "._change"), !Vt.test(this.nodeName)
                }
            }), ht.focusin || ft.each({focus: "focusin", blur: "focusout"}, function (t, e) {
                var n = function (t) {
                    ft.event.simulate(e, t.target, ft.event.fix(t))
                };
                ft.event.special[e] = {
                    setup: function () {
                        var i = this.ownerDocument || this, r = ft._data(i, e);
                        r || i.addEventListener(t, n, !0), ft._data(i, e, (r || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this, r = ft._data(i, e) - 1;
                        r ? ft._data(i, e, r) : (i.removeEventListener(t, n, !0), ft._removeData(i, e))
                    }
                }
            }), ft.fn.extend({
                on: function (t, e, n, i) {
                    return x(this, t, e, n, i)
                }, one: function (t, e, n, i) {
                    return x(this, t, e, n, i, 1)
                }, off: function (t, e, n) {
                    var i, r;
                    if (t && t.preventDefault && t.handleObj)return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof t) {
                        for (r in t)this.off(r, e, t[r]);
                        return this
                    }
                    return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = w), this.each(function () {
                        ft.event.remove(this, t, n, e)
                    })
                }, trigger: function (t, e) {
                    return this.each(function () {
                        ft.event.trigger(t, e, this)
                    })
                }, triggerHandler: function (t, e) {
                    var n = this[0];
                    if (n)return ft.event.trigger(t, e, n, !0)
                }
            });
            var Kt = / jQuery\d+="(?:null|\d+)"/g, te = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"), ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ne = /<script|<style|<link/i, ie = /checked\s*(?:[^=]|=\s*.checked.)/i, re = /^true\/(.*)/, oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, se = f(it), ae = se.appendChild(it.createElement("div"));
            ft.extend({
                htmlPrefilter: function (t) {
                    return t.replace(ee, "<$1></$2>")
                }, clone: function (t, e, n) {
                    var i, r, o, s, a, l = ft.contains(t.ownerDocument, t);
                    if (ht.html5Clone || ft.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(o = ae.firstChild)), !(ht.noCloneEvent && ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))for (i = p(o), a = p(t), s = 0; null != (r = a[s]); ++s)i[s] && C(r, i[s]);
                    if (e)if (n)for (a = a || p(t), i = i || p(o), s = 0; null != (r = a[s]); s++)T(r, i[s]); else T(t, o);
                    return i = p(o, "script"), i.length > 0 && m(i, !l && p(t, "script")), i = a = r = null, o
                }, cleanData: function (t, e) {
                    for (var n, i, r, o, s = 0, a = ft.expando, l = ft.cache, u = ht.attributes, c = ft.event.special; null != (n = t[s]); s++)if ((e || Ot(n)) && (r = n[a], o = r && l[r])) {
                        if (o.events)for (i in o.events)c[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(r))
                    }
                }
            }), ft.fn.extend({
                domManip: D, detach: function (t) {
                    return M(this, t, !0)
                }, remove: function (t) {
                    return M(this, t)
                }, text: function (t) {
                    return Ht(this, function (t) {
                        return void 0 === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
                    }, null, t, arguments.length)
                }, append: function () {
                    return D(this, arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = _(this, t);
                            e.appendChild(t)
                        }
                    })
                }, prepend: function () {
                    return D(this, arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = _(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                }, before: function () {
                    return D(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                }, after: function () {
                    return D(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                }, empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && ft.cleanData(p(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                        t.options && ft.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                }, clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function () {
                        return ft.clone(this, t, e)
                    })
                }, html: function (t) {
                    return Ht(this, function (t) {
                        var e = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(Kt, "") : void 0;
                        if ("string" == typeof t && !ne.test(t) && (ht.htmlSerialize || !te.test(t)) && (ht.leadingWhitespace || !Bt.test(t)) && !zt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = ft.htmlPrefilter(t);
                            try {
                                for (; n < i; n++)e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(p(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {
                            }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                }, replaceWith: function () {
                    var t = [];
                    return D(this, arguments, function (e) {
                        var n = this.parentNode;
                        ft.inArray(this, t) < 0 && (ft.cleanData(p(this)), n && n.replaceChild(e, this))
                    }, t)
                }
            }), ft.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                ft.fn[t] = function (t) {
                    for (var n, i = 0, r = [], o = ft(t), s = o.length - 1; i <= s; i++)n = i === s ? this : this.clone(!0), ft(o[i])[e](n), st.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var le, ue = {
                HTML: "block",
                BODY: "block"
            }, ce = /^margin/, he = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"), de = function (t, e, n, i) {
                var r, o, s = {};
                for (o in e)s[o] = t.style[o], t.style[o] = e[o];
                r = n.apply(t, i || []);
                for (o in e)t.style[o] = s[o];
                return r
            }, fe = it.documentElement;
            !function () {
                function e() {
                    var e, c, h = it.documentElement;
                    h.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = s = !0, t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {width: "4px"}).width, u.style.marginRight = "50%", i = "4px" === (c || {marginRight: "4px"}).marginRight, e = u.appendChild(it.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", o = 0 === u.getClientRects().length, o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), h.removeChild(l)
                }

                var n, i, r, o, s, a, l = it.createElement("div"), u = it.createElement("div");
                u.style && (u.style.cssText = "float:left;opacity:.5", ht.opacity = "0.5" === u.style.opacity, ht.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === u.style.backgroundClip, l = it.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), ht.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ft.extend(ht, {
                    reliableHiddenOffsets: function () {
                        return null == n && e(), o
                    }, boxSizingReliable: function () {
                        return null == n && e(), r
                    }, pixelMarginRight: function () {
                        return null == n && e(), i
                    }, pixelPosition: function () {
                        return null == n && e(), n
                    }, reliableMarginRight: function () {
                        return null == n && e(), s
                    }, reliableMarginLeft: function () {
                        return null == n && e(), a
                    }
                }))
            }();
            var pe, me, ge = /^(top|right|bottom|left)$/;
            t.getComputedStyle ? (pe = function (e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            }, me = function (t, e, n) {
                var i, r, o, s, a = t.style;
                return n = n || pe(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)), n && !ht.pixelMarginRight() && he.test(s) && ce.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 === s ? s : s + ""
            }) : fe.currentStyle && (pe = function (t) {
                return t.currentStyle
            }, me = function (t, e, n) {
                var i, r, o, s, a = t.style;
                return n = n || pe(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), he.test(s) && !ge.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
            });
            var ye = /alpha\([^)]*\)/i, ve = /opacity\s*=\s*([^)]*)/i, we = /^(none|table(?!-c[ea]).+)/, be = new RegExp("^(" + Lt + ")(.*)$", "i"), xe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, _e = {
                letterSpacing: "0",
                fontWeight: "400"
            }, ke = ["Webkit", "O", "Moz", "ms"], Se = it.createElement("div").style;
            ft.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = me(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {float: ht.cssFloat ? "cssFloat" : "styleFloat"},
                style: function (t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r, o, s, a = ft.camelCase(e), l = t.style;
                        if (e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], void 0 === n)return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                        if (o = typeof n, "string" === o && (r = Yt.exec(n)) && r[1] && (n = d(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ft.cssNumber[a] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))try {
                            l[e] = n
                        } catch (t) {
                        }
                    }
                },
                css: function (t, e, n, i) {
                    var r, o, s, a = ft.camelCase(e);
                    return e = ft.cssProps[a] || (ft.cssProps[a] = O(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = me(t, e, i)), "normal" === o && e in _e && (o = _e[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
                }
            }), ft.each(["height", "width"], function (t, e) {
                ft.cssHooks[e] = {
                    get: function (t, n, i) {
                        if (n)return we.test(ft.css(t, "display")) && 0 === t.offsetWidth ? de(t, xe, function () {
                            return Y(t, e, i)
                        }) : Y(t, e, i)
                    }, set: function (t, n, i) {
                        var r = i && pe(t);
                        return P(t, n, i ? L(t, e, i, ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, r), r) : 0)
                    }
                }
            }), ht.opacity || (ft.cssHooks.opacity = {
                get: function (t, e) {
                    return ve.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                }, set: function (t, e) {
                    var n = t.style, i = t.currentStyle, r = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = i && i.filter || n.filter || "";
                    n.zoom = 1, (e >= 1 || "" === e) && "" === ft.trim(o.replace(ye, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ye.test(o) ? o.replace(ye, r) : o + " " + r)
                }
            }), ft.cssHooks.marginRight = E(ht.reliableMarginRight, function (t, e) {
                if (e)return de(t, {display: "inline-block"}, me, [t, "marginRight"])
            }), ft.cssHooks.marginLeft = E(ht.reliableMarginLeft, function (t, e) {
                if (e)return (parseFloat(me(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - de(t, {marginLeft: 0}, function () {
                        return t.getBoundingClientRect().left
                    }) : 0)) + "px"
            }), ft.each({margin: "", padding: "", border: "Width"}, function (t, e) {
                ft.cssHooks[t + e] = {
                    expand: function (n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)r[t + Ft[i] + e] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, ce.test(t) || (ft.cssHooks[t + e].set = P)
            }), ft.fn.extend({
                css: function (t, e) {
                    return Ht(this, function (t, e, n) {
                        var i, r, o = {}, s = 0;
                        if (ft.isArray(e)) {
                            for (i = pe(t), r = e.length; s < r; s++)o[e[s]] = ft.css(t, e[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
                    }, t, e, arguments.length > 1)
                }, show: function () {
                    return A(this, !0)
                }, hide: function () {
                    return A(this)
                }, toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        Rt(this) ? ft(this).show() : ft(this).hide()
                    })
                }
            }), ft.Tween = F, F.prototype = {
                constructor: F, init: function (t, e, n, i, r, o) {
                    this.elem = t, this.prop = n, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ft.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var t = F.propHooks[this.prop];
                    return t && t.get ? t.get(this) : F.propHooks._default.get(this)
                }, run: function (t) {
                    var e, n = F.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
                }
            }, F.prototype.init.prototype = F.prototype, F.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                    }, set: function (t) {
                        ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, ft.easing = {
                linear: function (t) {
                    return t
                }, swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }, _default: "swing"
            }, ft.fx = F.prototype.init, ft.fx.step = {};
            var Te, Ce, De = /^(?:toggle|show|hide)$/, Me = /queueHooks$/;
            ft.Animation = ft.extend(B, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return d(n.elem, t, Yt.exec(e), n), n
                    }]
                }, tweener: function (t, e) {
                    ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Nt);
                    for (var n, i = 0, r = t.length; i < r; i++)n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
                }, prefilters: [q], prefilter: function (t, e) {
                    e ? B.prefilters.unshift(t) : B.prefilters.push(t)
                }
            }), ft.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? ft.extend({}, t) : {
                    complete: n || !n && e || ft.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ft.isFunction(e) && e
                };
                return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
                }, i
            }, ft.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(Rt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
                }, animate: function (t, e, n, i) {
                    var r = ft.isEmptyObject(t), o = ft.speed(e, n, i), s = function () {
                        var e = B(this, ft.extend({}, t), o);
                        (r || ft._data(this, "finish")) && e.stop(!0)
                    };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                }, stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0, r = null != t && t + "queueHooks", o = ft.timers, s = ft._data(this);
                        if (r)s[r] && s[r].stop && i(s[r]); else for (r in s)s[r] && s[r].stop && Me.test(r) && i(s[r]);
                        for (r = o.length; r--;)o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        !e && n || ft.dequeue(this, t)
                    })
                }, finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, n = ft._data(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = ft.timers, s = i ? i.length : 0;
                        for (n.finish = !0, ft.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < s; e++)i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ft.each(["toggle", "show", "hide"], function (t, e) {
                var n = ft.fn[e];
                ft.fn[e] = function (t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, r)
                }
            }), ft.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (t, e) {
                ft.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ft.timers = [], ft.fx.tick = function () {
                var t, e = ft.timers, n = 0;
                for (Te = ft.now(); n < e.length; n++)t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || ft.fx.stop(), Te = void 0
            }, ft.fx.timer = function (t) {
                ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
            }, ft.fx.interval = 13, ft.fx.start = function () {
                Ce || (Ce = t.setInterval(ft.fx.tick, ft.fx.interval))
            }, ft.fx.stop = function () {
                t.clearInterval(Ce), Ce = null
            }, ft.fx.speeds = {slow: 600, fast: 200, _default: 400}, ft.fn.delay = function (e, n) {
                return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                    var r = t.setTimeout(n, e);
                    i.stop = function () {
                        t.clearTimeout(r)
                    }
                })
            }, function () {
                var t, e = it.createElement("input"), n = it.createElement("div"), i = it.createElement("select"), r = i.appendChild(it.createElement("option"));
                n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ht.getSetAttribute = "t" !== n.className, ht.style = /top/.test(t.getAttribute("style")), ht.hrefNormalized = "/a" === t.getAttribute("href"), ht.checkOn = !!e.value, ht.optSelected = r.selected, ht.enctype = !!it.createElement("form").enctype, i.disabled = !0, ht.optDisabled = !r.disabled, e = it.createElement("input"), e.setAttribute("value", ""), ht.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ht.radioValue = "t" === e.value
            }();
            var Ne = /\r/g, je = /[\x20\t\r\n\f]+/g;
            ft.fn.extend({
                val: function (t) {
                    var e, n, i, r = this[0];
                    {
                        if (arguments.length)return i = ft.isFunction(t), this.each(function (n) {
                            var r;
                            1 === this.nodeType && (r = i ? t.call(this, n, ft(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ft.isArray(r) && (r = ft.map(r, function (t) {
                                return null == t ? "" : t + ""
                            })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                        });
                        if (r)return e = ft.valHooks[r.type] || ft.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ne, "") : null == n ? "" : n)
                    }
                }
            }), ft.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = ft.find.attr(t, "value");
                            return null != e ? e : ft.trim(ft.text(t)).replace(je, " ")
                        }
                    }, select: {
                        get: function (t) {
                            for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)if (n = i[l], (n.selected || l === r) && (ht.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ft(n).val(), o)return e;
                                s.push(e)
                            }
                            return s
                        }, set: function (t, e) {
                            for (var n, i, r = t.options, o = ft.makeArray(e), s = r.length; s--;)if (i = r[s], ft.inArray(ft.valHooks.option.get(i), o) > -1)try {
                                i.selected = n = !0
                            } catch (t) {
                                i.scrollHeight
                            } else i.selected = !1;
                            return n || (t.selectedIndex = -1), r
                        }
                    }
                }
            }), ft.each(["radio", "checkbox"], function () {
                ft.valHooks[this] = {
                    set: function (t, e) {
                        if (ft.isArray(e))return t.checked = ft.inArray(ft(t).val(), e) > -1
                    }
                }, ht.checkOn || (ft.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            });
            var Ee, Oe, Ae = ft.expr.attrHandle, Pe = /^(?:checked|selected)$/i, Le = ht.getSetAttribute, Ye = ht.input;
            ft.fn.extend({
                attr: function (t, e) {
                    return Ht(this, ft.attr, t, e, arguments.length > 1)
                }, removeAttr: function (t) {
                    return this.each(function () {
                        ft.removeAttr(this, t)
                    })
                }
            }), ft.extend({
                attr: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === o && ft.isXMLDoc(t) || (e = e.toLowerCase(), r = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Oe : Ee)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
                }, attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!ht.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                }, removeAttr: function (t, e) {
                    var n, i, r = 0, o = e && e.match(Nt);
                    if (o && 1 === t.nodeType)for (; n = o[r++];)i = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? Ye && Le || !Pe.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""), t.removeAttribute(Le ? n : i)
                }
            }), Oe = {
                set: function (t, e, n) {
                    return e === !1 ? ft.removeAttr(t, n) : Ye && Le || !Pe.test(n) ? t.setAttribute(!Le && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
                }
            }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var n = Ae[e] || ft.find.attr;
                Ye && Le || !Pe.test(e) ? Ae[e] = function (t, e, i) {
                    var r, o;
                    return i || (o = Ae[e], Ae[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Ae[e] = o), r
                } : Ae[e] = function (t, e, n) {
                    if (!n)return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
                }
            }), Ye && Le || (ft.attrHooks.value = {
                set: function (t, e, n) {
                    return ft.nodeName(t, "input") ? void(t.defaultValue = e) : Ee && Ee.set(t, e, n)
                }
            }), Le || (Ee = {
                set: function (t, e, n) {
                    var i = t.getAttributeNode(n);
                    if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n))return e
                }
            }, Ae.id = Ae.name = Ae.coords = function (t, e, n) {
                var i;
                if (!n)return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
            }, ft.valHooks.button = {
                get: function (t, e) {
                    var n = t.getAttributeNode(e);
                    if (n && n.specified)return n.value
                }, set: Ee.set
            }, ft.attrHooks.contenteditable = {
                set: function (t, e, n) {
                    Ee.set(t, "" !== e && e, n)
                }
            }, ft.each(["width", "height"], function (t, e) {
                ft.attrHooks[e] = {
                    set: function (t, n) {
                        if ("" === n)return t.setAttribute(e, "auto"), n
                    }
                }
            })), ht.style || (ft.attrHooks.style = {
                get: function (t) {
                    return t.style.cssText || void 0
                }, set: function (t, e) {
                    return t.style.cssText = e + ""
                }
            });
            var Fe = /^(?:input|select|textarea|button|object)$/i, Re = /^(?:a|area)$/i;
            ft.fn.extend({
                prop: function (t, e) {
                    return Ht(this, ft.prop, t, e, arguments.length > 1)
                }, removeProp: function (t) {
                    return t = ft.propFix[t] || t, this.each(function () {
                        try {
                            this[t] = void 0, delete this[t]
                        } catch (t) {
                        }
                    })
                }
            }), ft.extend({
                prop: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                }, propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = ft.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Fe.test(t.nodeName) || Re.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), ht.hrefNormalized || ft.each(["href", "src"], function (t, e) {
                ft.propHooks[e] = {
                    get: function (t) {
                        return t.getAttribute(e, 4)
                    }
                }
            }), ht.optSelected || (ft.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                }, set: function (t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                ft.propFix[this.toLowerCase()] = this
            }), ht.enctype || (ft.propFix.enctype = "encoding");
            var He = /[\t\r\n\f]/g;
            ft.fn.extend({
                addClass: function (t) {
                    var e, n, i, r, o, s, a, l = 0;
                    if (ft.isFunction(t))return this.each(function (e) {
                        ft(this).addClass(t.call(this, e, U(this)))
                    });
                    if ("string" == typeof t && t)for (e = t.match(Nt) || []; n = this[l++];)if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(He, " ")) {
                        for (s = 0; o = e[s++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = ft.trim(i), r !== a && ft.attr(n, "class", a)
                    }
                    return this
                }, removeClass: function (t) {
                    var e, n, i, r, o, s, a, l = 0;
                    if (ft.isFunction(t))return this.each(function (e) {
                        ft(this).removeClass(t.call(this, e, U(this)))
                    });
                    if (!arguments.length)return this.attr("class", "");
                    if ("string" == typeof t && t)for (e = t.match(Nt) || []; n = this[l++];)if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(He, " ")) {
                        for (s = 0; o = e[s++];)for (; i.indexOf(" " + o + " ") > -1;)i = i.replace(" " + o + " ", " ");
                        a = ft.trim(i), r !== a && ft.attr(n, "class", a)
                    }
                    return this
                }, toggleClass: function (t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function (n) {
                        ft(this).toggleClass(t.call(this, n, U(this), e), e)
                    }) : this.each(function () {
                        var e, i, r, o;
                        if ("string" === n)for (i = 0, r = ft(this), o = t.match(Nt) || []; e = o[i++];)r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else void 0 !== t && "boolean" !== n || (e = U(this), e && ft._data(this, "__className__", e), ft.attr(this, "class", e || t === !1 ? "" : ft._data(this, "__className__") || ""))
                    })
                }, hasClass: function (t) {
                    var e, n, i = 0;
                    for (e = " " + t + " "; n = this[i++];)if (1 === n.nodeType && (" " + U(n) + " ").replace(He, " ").indexOf(e) > -1)return !0;
                    return !1
                }
            }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
                ft.fn[e] = function (t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), ft.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            });
            var We = t.location, qe = ft.now(), Ie = /\?/, Be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ft.parseJSON = function (e) {
                if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
                var n, i = null, r = ft.trim(e + "");
                return r && !ft.trim(r.replace(Be, function (t, e, r, o) {
                    return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
                })) ? Function("return " + r)() : ft.error("Invalid JSON: " + e)
            }, ft.parseXML = function (e) {
                var n, i;
                if (!e || "string" != typeof e)return null;
                try {
                    t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
                } catch (t) {
                    n = void 0
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
            };
            var Ue = /#.*$/, ze = /([?&])_=[^&]*/, $e = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ge = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ve = /^(?:GET|HEAD)$/, Xe = /^\/\//, Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ze = {}, Je = {}, Ke = "*/".concat("*"), tn = We.href, en = Qe.exec(tn.toLowerCase()) || [];
            ft.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: tn,
                    type: "GET",
                    isLocal: Ge.test(en[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ke,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": ft.parseJSON, "text xml": ft.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (t, e) {
                    return e ? G(G(t, ft.ajaxSettings), e) : G(ft.ajaxSettings, t)
                },
                ajaxPrefilter: z(Ze),
                ajaxTransport: z(Je),
                ajax: function (e, n) {
                    function i(e, n, i, r) {
                        var o, h, v, w, x, k = n;
                        2 !== b && (b = 2, l && t.clearTimeout(l), c = void 0, a = r || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (w = V(d, _, i)), w = X(d, w, _, o), o ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (ft.lastModified[s] = x), x = _.getResponseHeader("etag"), x && (ft.etag[s] = x)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, h = w.data, v = w.error, o = !v)) : (v = k, !e && k || (k = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (n || k) + "", o ? m.resolveWith(f, [h, k, _]) : m.rejectWith(f, [_, k, v]), _.statusCode(y), y = void 0, u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [_, d, o ? h : v]), g.fireWith(f, [_, k]), u && (p.trigger("ajaxComplete", [_, d]), --ft.active || ft.event.trigger("ajaxStop")))
                    }

                    "object" == typeof e && (n = e, e = void 0), n = n || {};
                    var r, o, s, a, l, u, c, h, d = ft.ajaxSetup({}, n), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? ft(f) : ft.event, m = ft.Deferred(), g = ft.Callbacks("once memory"), y = d.statusCode || {}, v = {}, w = {}, b = 0, x = "canceled", _ = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!h)for (h = {}; e = $e.exec(a);)h[e[1].toLowerCase()] = e[2];
                                e = h[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return b || (t = w[n] = w[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return b || (d.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)if (b < 2)for (e in t)y[e] = [y[e], t[e]]; else _.always(t[_.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || x;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                    if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || tn) + "").replace(Ue, "").replace(Xe, en[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ft.trim(d.dataType || "*").toLowerCase().match(Nt) || [""], null == d.crossDomain && (r = Qe.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ft.param(d.data, d.traditional)), $(Ze, d, n, _), 2 === b)return _;
                    u = ft.event && d.global, u && 0 === ft.active++ && ft.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ve.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (Ie.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = ze.test(s) ? s.replace(ze, "$1_=" + qe++) : s + (Ie.test(s) ? "&" : "?") + "_=" + qe++)), d.ifModified && (ft.lastModified[s] && _.setRequestHeader("If-Modified-Since", ft.lastModified[s]), ft.etag[s] && _.setRequestHeader("If-None-Match", ft.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : d.accepts["*"]);
                    for (o in d.headers)_.setRequestHeader(o, d.headers[o]);
                    if (d.beforeSend && (d.beforeSend.call(f, _, d) === !1 || 2 === b))return _.abort();
                    x = "abort";
                    for (o in{success: 1, error: 1, complete: 1})_[o](d[o]);
                    if (c = $(Je, d, n, _)) {
                        if (_.readyState = 1, u && p.trigger("ajaxSend", [_, d]), 2 === b)return _;
                        d.async && d.timeout > 0 && (l = t.setTimeout(function () {
                            _.abort("timeout")
                        }, d.timeout));
                        try {
                            b = 1, c.send(v, i)
                        } catch (t) {
                            if (!(b < 2))throw t;
                            i(-1, t)
                        }
                    } else i(-1, "No Transport");
                    return _
                },
                getJSON: function (t, e, n) {
                    return ft.get(t, e, n, "json")
                },
                getScript: function (t, e) {
                    return ft.get(t, void 0, e, "script")
                }
            }), ft.each(["get", "post"], function (t, e) {
                ft[e] = function (t, n, i, r) {
                    return ft.isFunction(n) && (r = r || i, i = n, n = void 0), ft.ajax(ft.extend({
                        url: t,
                        type: e,
                        dataType: r,
                        data: n,
                        success: i
                    }, ft.isPlainObject(t) && t))
                }
            }), ft._evalUrl = function (t) {
                return ft.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
            }, ft.fn.extend({
                wrapAll: function (t) {
                    if (ft.isFunction(t))return this.each(function (e) {
                        ft(this).wrapAll(t.call(this, e))
                    });
                    if (this[0]) {
                        var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                            return t
                        }).append(this)
                    }
                    return this
                }, wrapInner: function (t) {
                    return ft.isFunction(t) ? this.each(function (e) {
                        ft(this).wrapInner(t.call(this, e))
                    }) : this.each(function () {
                        var e = ft(this), n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                }, wrap: function (t) {
                    var e = ft.isFunction(t);
                    return this.each(function (n) {
                        ft(this).wrapAll(e ? t.call(this, n) : t)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), ft.expr.filters.hidden = function (t) {
                return ht.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Z(t)
            }, ft.expr.filters.visible = function (t) {
                return !ft.expr.filters.hidden(t)
            };
            var nn = /%20/g, rn = /\[\]$/, on = /\r?\n/g, sn = /^(?:submit|button|image|reset|file)$/i, an = /^(?:input|select|textarea|keygen)/i;
            ft.param = function (t, e) {
                var n, i = [], r = function (t, e) {
                    e = ft.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
                if (void 0 === e && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t))ft.each(t, function () {
                    r(this.name, this.value)
                }); else for (n in t)J(n, t[n], e, r);
                return i.join("&").replace(nn, "+")
            }, ft.fn.extend({
                serialize: function () {
                    return ft.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var t = ft.prop(this, "elements");
                        return t ? ft.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !ft(this).is(":disabled") && an.test(this.nodeName) && !sn.test(t) && (this.checked || !Wt.test(t))
                    }).map(function (t, e) {
                        var n = ft(this).val();
                        return null == n ? null : ft.isArray(n) ? ft.map(n, function (t) {
                            return {name: e.name, value: t.replace(on, "\r\n")}
                        }) : {name: e.name, value: n.replace(on, "\r\n")}
                    }).get()
                }
            }), ft.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
                return this.isLocal ? tt() : it.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || tt()
            } : K;
            var ln = 0, un = {}, cn = ft.ajaxSettings.xhr();
            t.attachEvent && t.attachEvent("onunload", function () {
                for (var t in un)un[t](void 0, !0)
            }), ht.cors = !!cn && "withCredentials" in cn, cn = ht.ajax = !!cn, cn && ft.ajaxTransport(function (e) {
                if (!e.crossDomain || ht.cors) {
                    var n;
                    return {
                        send: function (i, r) {
                            var o, s = e.xhr(), a = ++ln;
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (o in e.xhrFields)s[o] = e.xhrFields[o];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (o in i)void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                            s.send(e.hasContent && e.data || null), n = function (t, i) {
                                var o, l, u;
                                if (n && (i || 4 === s.readyState))if (delete un[a], n = void 0, s.onreadystatechange = ft.noop, i)4 !== s.readyState && s.abort(); else {
                                    u = {}, o = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                    try {
                                        l = s.statusText
                                    } catch (t) {
                                        l = ""
                                    }
                                    o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                                }
                                u && r(o, l, u, s.getAllResponseHeaders())
                            }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = un[a] = n : n()
                        }, abort: function () {
                            n && n(void 0, !0)
                        }
                    }
                }
            }), ft.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (t) {
                        return ft.globalEval(t), t
                    }
                }
            }), ft.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
            }), ft.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var e, n = it.head || ft("head")[0] || it.documentElement;
                    return {
                        send: function (i, r) {
                            e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                                (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                            }, n.insertBefore(e, n.firstChild)
                        }, abort: function () {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            });
            var hn = [], dn = /(=)\?(?=&|$)|\?\?/;
            ft.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var t = hn.pop() || ft.expando + "_" + qe++;
                    return this[t] = !0, t
                }
            }), ft.ajaxPrefilter("json jsonp", function (e, n, i) {
                var r, o, s, a = e.jsonp !== !1 && (dn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0])return r = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(dn, "$1" + r) : e.jsonp !== !1 && (e.url += (Ie.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return s || ft.error(r + " was not called"), s[0]
                }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
                    s = arguments
                }, i.always(function () {
                    void 0 === o ? ft(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, hn.push(r)), s && ft.isFunction(o) && o(s[0]), s = o = void 0
                }), "script"
            }), ft.parseHTML = function (t, e, n) {
                if (!t || "string" != typeof t)return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || it;
                var i = _t.exec(t), r = !n && [];
                return i ? [e.createElement(i[1])] : (i = y([t], e, r), r && r.length && ft(r).remove(), ft.merge([], i.childNodes))
            };
            var fn = ft.fn.load;
            ft.fn.load = function (t, e, n) {
                if ("string" != typeof t && fn)return fn.apply(this, arguments);
                var i, r, o, s = this, a = t.indexOf(" ");
                return a > -1 && (i = ft.trim(t.slice(a, t.length)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ft.ajax({
                    url: t,
                    type: r || "GET",
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    o = arguments, s.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
                }).always(n && function (t, e) {
                        s.each(function () {
                            n.apply(this, o || [t.responseText, e, t])
                        })
                    }), this
            }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                ft.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), ft.expr.filters.animated = function (t) {
                return ft.grep(ft.timers, function (e) {
                    return t === e.elem
                }).length
            }, ft.offset = {
                setOffset: function (t, e, n) {
                    var i, r, o, s, a, l, u, c = ft.css(t, "position"), h = ft(t), d = {};
                    "static" === c && (t.style.position = "relative"), a = h.offset(), o = ft.css(t, "top"), l = ft.css(t, "left"), u = ("absolute" === c || "fixed" === c) && ft.inArray("auto", [o, l]) > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
                }
            }, ft.fn.extend({
                offset: function (t) {
                    if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                        ft.offset.setOffset(this, t, e)
                    });
                    var e, n, i = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
                    if (o)return e = o.documentElement, ft.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = et(o), {
                        top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : i
                }, position: function () {
                    if (this[0]) {
                        var t, e, n = {top: 0, left: 0}, i = this[0];
                        return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                            e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - n.top - ft.css(i, "marginTop", !0),
                            left: e.left - n.left - ft.css(i, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");)t = t.offsetParent;
                        return t || fe
                    })
                }
            }), ft.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
                var n = /Y/.test(e);
                ft.fn[t] = function (i) {
                    return Ht(this, function (t, i, r) {
                        var o = et(t);
                        return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? ft(o).scrollLeft() : r, n ? r : ft(o).scrollTop()) : t[i] = r)
                    }, t, i, arguments.length, null)
                }
            }), ft.each(["top", "left"], function (t, e) {
                ft.cssHooks[e] = E(ht.pixelPosition, function (t, n) {
                    if (n)return n = me(t, e), he.test(n) ? ft(t).position()[e] + "px" : n
                })
            }), ft.each({Height: "height", Width: "width"}, function (t, e) {
                ft.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                    ft.fn[i] = function (i, r) {
                        var o = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || r === !0 ? "margin" : "border");
                        return Ht(this, function (e, n, i) {
                            var r;
                            return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ft.css(e, n, s) : ft.style(e, n, i, s)
                        }, e, o ? i : void 0, o, null)
                    }
                })
            }), ft.fn.extend({
                bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                }, unbind: function (t, e) {
                    return this.off(t, null, e)
                }, delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i)
                }, undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            }), ft.fn.size = function () {
                return this.length
            }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return ft
            });
            var pn = t.jQuery, mn = t.$;
            return ft.noConflict = function (e) {
                return t.$ === ft && (t.$ = mn), e && t.jQuery === ft && (t.jQuery = pn), ft
            }, e || (t.jQuery = t.$ = ft), ft
        })
    }, {}],
    2: [function (t, e, n) {
        !function (t, i) {
            "object" == typeof n && "undefined" != typeof e ? e.exports = i() : "function" == typeof define && define.amd ? define(i) : t.moment = i()
        }(this, function () {
            "use strict";
            function n() {
                return mi.apply(null, arguments)
            }

            function i(t) {
                mi = t
            }

            function r(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function o(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function s(t) {
                var e;
                for (e in t)return !1;
                return !0
            }

            function a(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function l(t, e) {
                var n, i = [];
                for (n = 0; n < t.length; ++n)i.push(e(t[n], n));
                return i
            }

            function u(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function c(t, e) {
                for (var n in e)u(e, n) && (t[n] = e[n]);
                return u(e, "toString") && (t.toString = e.toString), u(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function h(t, e, n, i) {
                return ve(t, e, n, i, !0).utc()
            }

            function d() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }

            function f(t) {
                return null == t._pf && (t._pf = d()), t._pf
            }

            function p(t) {
                if (null == t._isValid) {
                    var e = f(t), n = gi.call(e.parsedDateParts, function (t) {
                        return null != t
                    }), i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                    if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t))return i;
                    t._isValid = i
                }
                return t._isValid
            }

            function m(t) {
                var e = h(NaN);
                return null != t ? c(f(e), t) : f(e).userInvalidated = !0, e
            }

            function g(t) {
                return void 0 === t
            }

            function y(t, e) {
                var n, i, r;
                if (g(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), g(e._i) || (t._i = e._i), g(e._f) || (t._f = e._f), g(e._l) || (t._l = e._l), g(e._strict) || (t._strict = e._strict), g(e._tzm) || (t._tzm = e._tzm), g(e._isUTC) || (t._isUTC = e._isUTC), g(e._offset) || (t._offset = e._offset), g(e._pf) || (t._pf = f(e)), g(e._locale) || (t._locale = e._locale), yi.length > 0)for (n in yi)i = yi[n], r = e[i], g(r) || (t[i] = r);
                return t
            }

            function v(t) {
                y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), vi === !1 && (vi = !0, n.updateOffset(this), vi = !1)
            }

            function w(t) {
                return t instanceof v || null != t && null != t._isAMomentObject
            }

            function b(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }

            function x(t) {
                var e = +t, n = 0;
                return 0 !== e && isFinite(e) && (n = b(e)), n
            }

            function _(t, e, n) {
                var i, r = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
                for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && x(t[i]) !== x(e[i])) && s++;
                return s + o
            }

            function k(t) {
                n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function S(t, e) {
                var i = !0;
                return c(function () {
                    if (null != n.deprecationHandler && n.deprecationHandler(null, t), i) {
                        for (var r, o = [], s = 0; s < arguments.length; s++) {
                            if (r = "", "object" == typeof arguments[s]) {
                                r += "\n[" + s + "] ";
                                for (var a in arguments[0])r += a + ": " + arguments[0][a] + ", ";
                                r = r.slice(0, -2)
                            } else r = arguments[s];
                            o.push(r)
                        }
                        k(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), i = !1
                    }
                    return e.apply(this, arguments)
                }, e)
            }

            function T(t, e) {
                null != n.deprecationHandler && n.deprecationHandler(t, e), wi[t] || (k(e), wi[t] = !0)
            }

            function C(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function D(t) {
                var e, n;
                for (n in t)e = t[n], C(e) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function M(t, e) {
                var n, i = c({}, t);
                for (n in e)u(e, n) && (o(t[n]) && o(e[n]) ? (i[n] = {}, c(i[n], t[n]), c(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                for (n in t)u(t, n) && !u(e, n) && o(t[n]) && (i[n] = c({}, i[n]));
                return i
            }

            function N(t) {
                null != t && this.set(t)
            }

            function j(t, e, n) {
                var i = this._calendar[t] || this._calendar.sameElse;
                return C(i) ? i.call(e, n) : i
            }

            function E(t) {
                var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }

            function O() {
                return this._invalidDate
            }

            function A(t) {
                return this._ordinal.replace("%d", t)
            }

            function P(t, e, n, i) {
                var r = this._relativeTime[n];
                return C(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
            }

            function L(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return C(n) ? n(e) : n.replace(/%s/i, e)
            }

            function Y(t, e) {
                var n = t.toLowerCase();
                Mi[n] = Mi[n + "s"] = Mi[e] = t
            }

            function F(t) {
                return "string" == typeof t ? Mi[t] || Mi[t.toLowerCase()] : void 0
            }

            function R(t) {
                var e, n, i = {};
                for (n in t)u(t, n) && (e = F(n), e && (i[e] = t[n]));
                return i
            }

            function H(t, e) {
                Ni[t] = e
            }

            function W(t) {
                var e = [];
                for (var n in t)e.push({unit: n, priority: Ni[n]});
                return e.sort(function (t, e) {
                    return t.priority - e.priority
                }), e
            }

            function q(t, e) {
                return function (i) {
                    return null != i ? (B(this, t, i), n.updateOffset(this, e), this) : I(this, t)
                }
            }

            function I(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function B(t, e, n) {
                t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
            }

            function U(t) {
                return t = F(t), C(this[t]) ? this[t]() : this
            }

            function z(t, e) {
                if ("object" == typeof t) {
                    t = R(t);
                    for (var n = W(t), i = 0; i < n.length; i++)this[n[i].unit](t[n[i].unit])
                } else if (t = F(t), C(this[t]))return this[t](e);
                return this
            }

            function $(t, e, n) {
                var i = "" + Math.abs(t), r = e - i.length, o = t >= 0;
                return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
            }

            function G(t, e, n, i) {
                var r = i;
                "string" == typeof i && (r = function () {
                    return this[i]()
                }), t && (Ai[t] = r), e && (Ai[e[0]] = function () {
                    return $(r.apply(this, arguments), e[1], e[2])
                }), n && (Ai[n] = function () {
                    return this.localeData().ordinal(r.apply(this, arguments), t)
                })
            }

            function V(t) {
                return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
            }

            function X(t) {
                var e, n, i = t.match(ji);
                for (e = 0, n = i.length; e < n; e++)Ai[i[e]] ? i[e] = Ai[i[e]] : i[e] = V(i[e]);
                return function (e) {
                    var r, o = "";
                    for (r = 0; r < n; r++)o += i[r] instanceof Function ? i[r].call(e, t) : i[r];
                    return o
                }
            }

            function Q(t, e) {
                return t.isValid() ? (e = Z(e, t.localeData()), Oi[e] = Oi[e] || X(e), Oi[e](t)) : t.localeData().invalidDate()
            }

            function Z(t, e) {
                function n(t) {
                    return e.longDateFormat(t) || t
                }

                var i = 5;
                for (Ei.lastIndex = 0; i >= 0 && Ei.test(t);)t = t.replace(Ei, n), Ei.lastIndex = 0, i -= 1;
                return t
            }

            function J(t, e, n) {
                Zi[t] = C(e) ? e : function (t, i) {
                    return t && n ? n : e
                }
            }

            function K(t, e) {
                return u(Zi, t) ? Zi[t](e._strict, e._locale) : new RegExp(tt(t))
            }

            function tt(t) {
                return et(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, r) {
                    return e || n || i || r
                }))
            }

            function et(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function nt(t, e) {
                var n, i = e;
                for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function (t, n) {
                    n[e] = x(t)
                }), n = 0; n < t.length; n++)Ji[t[n]] = i
            }

            function it(t, e) {
                nt(t, function (t, n, i, r) {
                    i._w = i._w || {}, e(t, i._w, i, r)
                })
            }

            function rt(t, e, n) {
                null != e && u(Ji, t) && Ji[t](e, n._a, n, t)
            }

            function ot(t, e) {
                return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
            }

            function st(t, e) {
                return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || lr).test(e) ? "format" : "standalone"][t.month()] : this._months
            }

            function at(t, e) {
                return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[lr.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
            }

            function lt(t, e, n) {
                var i, r, o, s = t.toLocaleLowerCase();
                if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i)o = h([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                return n ? "MMM" === e ? (r = xi.call(this._shortMonthsParse, s), r !== -1 ? r : null) : (r = xi.call(this._longMonthsParse, s), r !== -1 ? r : null) : "MMM" === e ? (r = xi.call(this._shortMonthsParse, s), r !== -1 ? r : (r = xi.call(this._longMonthsParse, s), r !== -1 ? r : null)) : (r = xi.call(this._longMonthsParse, s), r !== -1 ? r : (r = xi.call(this._shortMonthsParse, s), r !== -1 ? r : null))
            }

            function ut(t, e, n) {
                var i, r, o;
                if (this._monthsParseExact)return lt.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (r = h([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t))return i;
                    if (n && "MMM" === e && this._shortMonthsParse[i].test(t))return i;
                    if (!n && this._monthsParse[i].test(t))return i
                }
            }

            function ct(t, e) {
                var n;
                if (!t.isValid())return t;
                if ("string" == typeof e)if (/^\d+$/.test(e))e = x(e); else if (e = t.localeData().monthsParse(e), "number" != typeof e)return t;
                return n = Math.min(t.date(), ot(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }

            function ht(t) {
                return null != t ? (ct(this, t), n.updateOffset(this, !0), this) : I(this, "Month")
            }

            function dt() {
                return ot(this.year(), this.month())
            }

            function ft(t) {
                return this._monthsParseExact ? (u(this, "_monthsRegex") || mt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = hr), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function pt(t) {
                return this._monthsParseExact ? (u(this, "_monthsRegex") || mt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = dr), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }

            function mt() {
                function t(t, e) {
                    return e.length - t.length
                }

                var e, n, i = [], r = [], o = [];
                for (e = 0; e < 12; e++)n = h([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
                for (i.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++)i[e] = et(i[e]), r[e] = et(r[e]);
                for (e = 0; e < 24; e++)o[e] = et(o[e]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function gt(t) {
                return yt(t) ? 366 : 365
            }

            function yt(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }

            function vt() {
                return yt(this.year())
            }

            function wt(t, e, n, i, r, o, s) {
                var a = new Date(t, e, n, i, r, o, s);
                return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
            }

            function bt(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
            }

            function xt(t, e, n) {
                var i = 7 + e - n, r = (7 + bt(t, 0, i).getUTCDay() - e) % 7;
                return -r + i - 1
            }

            function _t(t, e, n, i, r) {
                var o, s, a = (7 + n - i) % 7, l = xt(t, i, r), u = 1 + 7 * (e - 1) + a + l;
                return u <= 0 ? (o = t - 1, s = gt(o) + u) : u > gt(t) ? (o = t + 1, s = u - gt(t)) : (o = t, s = u), {
                    year: o,
                    dayOfYear: s
                }
            }

            function kt(t, e, n) {
                var i, r, o = xt(t.year(), e, n), s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                return s < 1 ? (r = t.year() - 1, i = s + St(r, e, n)) : s > St(t.year(), e, n) ? (i = s - St(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = s), {
                    week: i,
                    year: r
                }
            }

            function St(t, e, n) {
                var i = xt(t, e, n), r = xt(t + 1, e, n);
                return (gt(t) - i + r) / 7
            }

            function Tt(t) {
                return kt(t, this._week.dow, this._week.doy).week
            }

            function Ct() {
                return this._week.dow
            }

            function Dt() {
                return this._week.doy
            }

            function Mt(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function Nt(t) {
                var e = kt(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function jt(t, e) {
                return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
            }

            function Et(t, e) {
                return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
            }

            function Ot(t, e) {
                return t ? r(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
            }

            function At(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }

            function Pt(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }

            function Lt(t, e, n) {
                var i, r, o, s = t.toLocaleLowerCase();
                if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i)o = h([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                return n ? "dddd" === e ? (r = xi.call(this._weekdaysParse, s), r !== -1 ? r : null) : "ddd" === e ? (r = xi.call(this._shortWeekdaysParse, s), r !== -1 ? r : null) : (r = xi.call(this._minWeekdaysParse, s), r !== -1 ? r : null) : "dddd" === e ? (r = xi.call(this._weekdaysParse, s), r !== -1 ? r : (r = xi.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = xi.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : "ddd" === e ? (r = xi.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = xi.call(this._weekdaysParse, s), r !== -1 ? r : (r = xi.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : (r = xi.call(this._minWeekdaysParse, s), r !== -1 ? r : (r = xi.call(this._weekdaysParse, s), r !== -1 ? r : (r = xi.call(this._shortWeekdaysParse, s), r !== -1 ? r : null)))
            }

            function Yt(t, e, n) {
                var i, r, o;
                if (this._weekdaysParseExact)return Lt.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                    if (r = h([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t))return i;
                    if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))return i;
                    if (n && "dd" === e && this._minWeekdaysParse[i].test(t))return i;
                    if (!n && this._weekdaysParse[i].test(t))return i
                }
            }

            function Ft(t) {
                if (!this.isValid())return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = jt(t, this.localeData()), this.add(t - e, "d")) : e
            }

            function Rt(t) {
                if (!this.isValid())return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }

            function Ht(t) {
                if (!this.isValid())return null != t ? this : NaN;
                if (null != t) {
                    var e = Et(t, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }

            function Wt(t) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = vr), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function qt(t) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = wr), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function It(t) {
                return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = br), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function Bt() {
                function t(t, e) {
                    return e.length - t.length
                }

                var e, n, i, r, o, s = [], a = [], l = [], u = [];
                for (e = 0; e < 7; e++)n = h([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(i), a.push(r), l.push(o), u.push(i), u.push(r), u.push(o);
                for (s.sort(t), a.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++)a[e] = et(a[e]), l[e] = et(l[e]), u[e] = et(u[e]);
                this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function Ut() {
                return this.hours() % 12 || 12
            }

            function zt() {
                return this.hours() || 24
            }

            function $t(t, e) {
                G(t, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function Gt(t, e) {
                return e._meridiemParse
            }

            function Vt(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }

            function Xt(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function Qt(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function Zt(t) {
                for (var e, n, i, r, o = 0; o < t.length;) {
                    for (r = Qt(t[o]).split("-"), e = r.length, n = Qt(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                        if (i = Jt(r.slice(0, e).join("-")))return i;
                        if (n && n.length >= e && _(r, n, !0) >= e - 1)break;
                        e--
                    }
                    o++
                }
                return null
            }

            function Jt(n) {
                var i = null;
                if (!Tr[n] && "undefined" != typeof e && e && e.exports)try {
                    i = xr._abbr, t("./locale/" + n), Kt(i)
                } catch (t) {
                }
                return Tr[n]
            }

            function Kt(t, e) {
                var n;
                return t && (n = g(e) ? ne(t) : te(t, e), n && (xr = n)), xr._abbr
            }

            function te(t, e) {
                if (null !== e) {
                    var n = Sr;
                    return e.abbr = t, null != Tr[t] ? (T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Tr[t]._config) : null != e.parentLocale && (null != Tr[e.parentLocale] ? n = Tr[e.parentLocale]._config : T("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), Tr[t] = new N(M(n, e)), Kt(t), Tr[t]
                }
                return delete Tr[t], null
            }

            function ee(t, e) {
                if (null != e) {
                    var n, i = Sr;
                    null != Tr[t] && (i = Tr[t]._config), e = M(i, e), n = new N(e), n.parentLocale = Tr[t], Tr[t] = n, Kt(t)
                } else null != Tr[t] && (null != Tr[t].parentLocale ? Tr[t] = Tr[t].parentLocale : null != Tr[t] && delete Tr[t]);
                return Tr[t]
            }

            function ne(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)return xr;
                if (!r(t)) {
                    if (e = Jt(t))return e;
                    t = [t]
                }
                return Zt(t)
            }

            function ie() {
                return bi(Tr)
            }

            function re(t) {
                var e, n = t._a;
                return n && f(t).overflow === -2 && (e = n[tr] < 0 || n[tr] > 11 ? tr : n[er] < 1 || n[er] > ot(n[Ki], n[tr]) ? er : n[nr] < 0 || n[nr] > 24 || 24 === n[nr] && (0 !== n[ir] || 0 !== n[rr] || 0 !== n[or]) ? nr : n[ir] < 0 || n[ir] > 59 ? ir : n[rr] < 0 || n[rr] > 59 ? rr : n[or] < 0 || n[or] > 999 ? or : -1, f(t)._overflowDayOfYear && (e < Ki || e > er) && (e = er), f(t)._overflowWeeks && e === -1 && (e = sr), f(t)._overflowWeekday && e === -1 && (e = ar), f(t).overflow = e), t
            }

            function oe(t) {
                var e, n, i, r, o, s, a = t._i, l = Cr.exec(a) || Dr.exec(a);
                if (l) {
                    for (f(t).iso = !0, e = 0, n = Nr.length; e < n; e++)if (Nr[e][1].exec(l[1])) {
                        r = Nr[e][0], i = Nr[e][2] !== !1;
                        break
                    }
                    if (null == r)return void(t._isValid = !1);
                    if (l[3]) {
                        for (e = 0, n = jr.length; e < n; e++)if (jr[e][1].exec(l[3])) {
                            o = (l[2] || " ") + jr[e][0];
                            break
                        }
                        if (null == o)return void(t._isValid = !1)
                    }
                    if (!i && null != o)return void(t._isValid = !1);
                    if (l[4]) {
                        if (!Mr.exec(l[4]))return void(t._isValid = !1);
                        s = "Z"
                    }
                    t._f = r + (o || "") + (s || ""), he(t)
                } else t._isValid = !1
            }

            function se(t) {
                var e = Er.exec(t._i);
                return null !== e ? void(t._d = new Date(+e[1])) : (oe(t), void(t._isValid === !1 && (delete t._isValid, n.createFromInputFallback(t))))
            }

            function ae(t, e, n) {
                return null != t ? t : null != e ? e : n
            }

            function le(t) {
                var e = new Date(n.now());
                return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
            }

            function ue(t) {
                var e, n, i, r, o = [];
                if (!t._d) {
                    for (i = le(t), t._w && null == t._a[er] && null == t._a[tr] && ce(t), t._dayOfYear && (r = ae(t._a[Ki], i[Ki]), t._dayOfYear > gt(r) && (f(t)._overflowDayOfYear = !0), n = bt(r, 0, t._dayOfYear), t._a[tr] = n.getUTCMonth(), t._a[er] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e)t._a[e] = o[e] = i[e];
                    for (; e < 7; e++)t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[nr] && 0 === t._a[ir] && 0 === t._a[rr] && 0 === t._a[or] && (t._nextDay = !0, t._a[nr] = 0), t._d = (t._useUTC ? bt : wt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[nr] = 24)
                }
            }

            function ce(t) {
                var e, n, i, r, o, s, a, l;
                e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, s = 4, n = ae(e.GG, t._a[Ki], kt(we(), 1, 4).year), i = ae(e.W, 1), r = ae(e.E, 1), (r < 1 || r > 7) && (l = !0)) : (o = t._locale._week.dow, s = t._locale._week.doy, n = ae(e.gg, t._a[Ki], kt(we(), o, s).year), i = ae(e.w, 1), null != e.d ? (r = e.d, (r < 0 || r > 6) && (l = !0)) : null != e.e ? (r = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : r = o), i < 1 || i > St(n, o, s) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (a = _t(n, i, r, o, s), t._a[Ki] = a.year, t._dayOfYear = a.dayOfYear)
            }

            function he(t) {
                if (t._f === n.ISO_8601)return void oe(t);
                t._a = [], f(t).empty = !0;
                var e, i, r, o, s, a = "" + t._i, l = a.length, u = 0;
                for (r = Z(t._f, t._locale).match(ji) || [], e = 0; e < r.length; e++)o = r[e], i = (a.match(K(o, t)) || [])[0], i && (s = a.substr(0, a.indexOf(i)), s.length > 0 && f(t).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), u += i.length), Ai[o] ? (i ? f(t).empty = !1 : f(t).unusedTokens.push(o), rt(o, i, t)) : t._strict && !i && f(t).unusedTokens.push(o);
                f(t).charsLeftOver = l - u, a.length > 0 && f(t).unusedInput.push(a), t._a[nr] <= 12 && f(t).bigHour === !0 && t._a[nr] > 0 && (f(t).bigHour = void 0), f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[nr] = de(t._locale, t._a[nr], t._meridiem), ue(t), re(t)
            }

            function de(t, e, n) {
                var i;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
            }

            function fe(t) {
                var e, n, i, r, o;
                if (0 === t._f.length)return f(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (r = 0; r < t._f.length; r++)o = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], he(e), p(e) && (o += f(e).charsLeftOver, o += 10 * f(e).unusedTokens.length, f(e).score = o, (null == i || o < i) && (i = o, n = e));
                c(t, n || e)
            }

            function pe(t) {
                if (!t._d) {
                    var e = R(t._i);
                    t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                        return t && parseInt(t, 10)
                    }), ue(t)
                }
            }

            function me(t) {
                var e = new v(re(ge(t)));
                return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
            }

            function ge(t) {
                var e = t._i, n = t._f;
                return t._locale = t._locale || ne(t._l), null === e || void 0 === n && "" === e ? m({nullInput: !0}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), w(e) ? new v(re(e)) : (r(n) ? fe(t) : a(e) ? t._d = e : n ? he(t) : ye(t), p(t) || (t._d = null), t))
            }

            function ye(t) {
                var e = t._i;
                void 0 === e ? t._d = new Date(n.now()) : a(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? se(t) : r(e) ? (t._a = l(e.slice(0), function (t) {
                    return parseInt(t, 10)
                }), ue(t)) : "object" == typeof e ? pe(t) : "number" == typeof e ? t._d = new Date(e) : n.createFromInputFallback(t)
            }

            function ve(t, e, n, i, a) {
                var l = {};
                return "boolean" == typeof n && (i = n, n = void 0), (o(t) && s(t) || r(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = n, l._i = t, l._f = e, l._strict = i, me(l)
            }

            function we(t, e, n, i) {
                return ve(t, e, n, i, !1)
            }

            function be(t, e) {
                var n, i;
                if (1 === e.length && r(e[0]) && (e = e[0]), !e.length)return we();
                for (n = e[0], i = 1; i < e.length; ++i)e[i].isValid() && !e[i][t](n) || (n = e[i]);
                return n
            }

            function xe() {
                var t = [].slice.call(arguments, 0);
                return be("isBefore", t)
            }

            function _e() {
                var t = [].slice.call(arguments, 0);
                return be("isAfter", t)
            }

            function ke(t) {
                var e = R(t), n = e.year || 0, i = e.quarter || 0, r = e.month || 0, o = e.week || 0, s = e.day || 0, a = e.hour || 0, l = e.minute || 0, u = e.second || 0, c = e.millisecond || 0;
                this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ne(), this._bubble()
            }

            function Se(t) {
                return t instanceof ke
            }

            function Te(t) {
                return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
            }

            function Ce(t, e) {
                G(t, 0, 0, function () {
                    var t = this.utcOffset(), n = "+";
                    return t < 0 && (t = -t, n = "-"), n + $(~~(t / 60), 2) + e + $(~~t % 60, 2)
                })
            }

            function De(t, e) {
                var n = (e || "").match(t) || [], i = n[n.length - 1] || [], r = (i + "").match(Lr) || ["-", 0, 0], o = +(60 * r[1]) + x(r[2]);
                return "+" === r[0] ? o : -o
            }

            function Me(t, e) {
                var i, r;
                return e._isUTC ? (i = e.clone(), r = (w(t) || a(t) ? t.valueOf() : we(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), n.updateOffset(i, !1), i) : we(t).local()
            }

            function Ne(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function je(t, e) {
                var i, r = this._offset || 0;
                return this.isValid() ? null != t ? ("string" == typeof t ? t = De(Vi, t) : Math.abs(t) < 16 && (t *= 60), !this._isUTC && e && (i = Ne(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!e || this._changeInProgress ? $e(this, qe(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : Ne(this) : null != t ? this : NaN
            }

            function Ee(t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }

            function Oe(t) {
                return this.utcOffset(0, t)
            }

            function Ae(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ne(this), "m")), this
            }

            function Pe() {
                if (this._tzm)this.utcOffset(this._tzm); else if ("string" == typeof this._i) {
                    var t = De(Gi, this._i);
                    0 === t ? this.utcOffset(0, !0) : this.utcOffset(De(Gi, this._i))
                }
                return this
            }

            function Le(t) {
                return !!this.isValid() && (t = t ? we(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
            }

            function Ye() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Fe() {
                if (!g(this._isDSTShifted))return this._isDSTShifted;
                var t = {};
                if (y(t, this), t = ge(t), t._a) {
                    var e = t._isUTC ? h(t._a) : we(t._a);
                    this._isDSTShifted = this.isValid() && _(t._a, e.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Re() {
                return !!this.isValid() && !this._isUTC
            }

            function He() {
                return !!this.isValid() && this._isUTC
            }

            function We() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function qe(t, e) {
                var n, i, r, o = t, s = null;
                return Se(t) ? o = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (s = Yr.exec(t)) ? (n = "-" === s[1] ? -1 : 1, o = {
                    y: 0,
                    d: x(s[er]) * n,
                    h: x(s[nr]) * n,
                    m: x(s[ir]) * n,
                    s: x(s[rr]) * n,
                    ms: x(Te(1e3 * s[or])) * n
                }) : (s = Fr.exec(t)) ? (n = "-" === s[1] ? -1 : 1, o = {
                    y: Ie(s[2], n),
                    M: Ie(s[3], n),
                    w: Ie(s[4], n),
                    d: Ie(s[5], n),
                    h: Ie(s[6], n),
                    m: Ie(s[7], n),
                    s: Ie(s[8], n)
                }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Ue(we(o.from), we(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new ke(o), Se(t) && u(t, "_locale") && (i._locale = t._locale), i
            }

            function Ie(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }

            function Be(t, e) {
                var n = {milliseconds: 0, months: 0};
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
            }

            function Ue(t, e) {
                var n;
                return t.isValid() && e.isValid() ? (e = Me(e, t), t.isBefore(e) ? n = Be(t, e) : (n = Be(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function ze(t, e) {
                return function (n, i) {
                    var r, o;
                    return null === i || isNaN(+i) || (T(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = qe(n, i), $e(this, r, t), this
                }
            }

            function $e(t, e, i, r) {
                var o = e._milliseconds, s = Te(e._days), a = Te(e._months);
                t.isValid() && (r = null == r || r, o && t._d.setTime(t._d.valueOf() + o * i), s && B(t, "Date", I(t, "Date") + s * i), a && ct(t, I(t, "Month") + a * i), r && n.updateOffset(t, s || a))
            }

            function Ge(t, e) {
                var n = t.diff(e, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }

            function Ve(t, e) {
                var i = t || we(), r = Me(i, this).startOf("day"), o = n.calendarFormat(this, r) || "sameElse", s = e && (C(e[o]) ? e[o].call(this, i) : e[o]);
                return this.format(s || this.localeData().calendar(o, this, we(i)))
            }

            function Xe() {
                return new v(this)
            }

            function Qe(t, e) {
                var n = w(t) ? t : we(t);
                return !(!this.isValid() || !n.isValid()) && (e = F(g(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
            }

            function Ze(t, e) {
                var n = w(t) ? t : we(t);
                return !(!this.isValid() || !n.isValid()) && (e = F(g(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
            }

            function Je(t, e, n, i) {
                return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
            }

            function Ke(t, e) {
                var n, i = w(t) ? t : we(t);
                return !(!this.isValid() || !i.isValid()) && (e = F(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
            }

            function tn(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }

            function en(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }

            function nn(t, e, n) {
                var i, r, o, s;
                return this.isValid() ? (i = Me(t, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = F(e), "year" === e || "month" === e || "quarter" === e ? (s = rn(this, i), "quarter" === e ? s /= 3 : "year" === e && (s /= 12)) : (o = this - i, s = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - r) / 864e5 : "week" === e ? (o - r) / 6048e5 : o), n ? s : b(s)) : NaN) : NaN
            }

            function rn(t, e) {
                var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(r, "months");
                return e - o < 0 ? (n = t.clone().add(r - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"), i = (e - o) / (n - o)), -(r + i) || 0
            }

            function on() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function sn() {
                var t = this.clone().utc();
                return 0 < t.year() && t.year() <= 9999 ? C(Date.prototype.toISOString) ? this.toDate().toISOString() : Q(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Q(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function an(t) {
                t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                var e = Q(this, t);
                return this.localeData().postformat(e)
            }

            function ln(t, e) {
                return this.isValid() && (w(t) && t.isValid() || we(t).isValid()) ? qe({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function un(t) {
                return this.from(we(), t)
            }

            function cn(t, e) {
                return this.isValid() && (w(t) && t.isValid() || we(t).isValid()) ? qe({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function hn(t) {
                return this.to(we(), t)
            }

            function dn(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (e = ne(t), null != e && (this._locale = e), this)
            }

            function fn() {
                return this._locale
            }

            function pn(t) {
                switch (t = F(t)) {
                    case"year":
                        this.month(0);
                    case"quarter":
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                    case"date":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function mn(t) {
                return t = F(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }

            function gn() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function yn() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function vn() {
                return new Date(this.valueOf())
            }

            function wn() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }

            function bn() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }

            function xn() {
                return this.isValid() ? this.toISOString() : null
            }

            function _n() {
                return p(this)
            }

            function kn() {
                return c({}, f(this))
            }

            function Sn() {
                return f(this).overflow
            }

            function Tn() {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }

            function Cn(t, e) {
                G(0, [t, t.length], 0, e)
            }

            function Dn(t) {
                return En.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Mn(t) {
                return En.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function Nn() {
                return St(this.year(), 1, 4)
            }

            function jn() {
                var t = this.localeData()._week;
                return St(this.year(), t.dow, t.doy)
            }

            function En(t, e, n, i, r) {
                var o;
                return null == t ? kt(this, i, r).year : (o = St(t, i, r), e > o && (e = o), On.call(this, t, e, n, i, r))
            }

            function On(t, e, n, i, r) {
                var o = _t(t, e, n, i, r), s = bt(o.year, 0, o.dayOfYear);
                return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
            }

            function An(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }

            function Pn(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }

            function Ln(t, e) {
                e[or] = x(1e3 * ("0." + t))
            }

            function Yn() {
                return this._isUTC ? "UTC" : ""
            }

            function Fn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Rn(t) {
                return we(1e3 * t)
            }

            function Hn() {
                return we.apply(null, arguments).parseZone()
            }

            function Wn(t) {
                return t
            }

            function qn(t, e, n, i) {
                var r = ne(), o = h().set(i, e);
                return r[n](o, t)
            }

            function In(t, e, n) {
                if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)return qn(t, e, n, "month");
                var i, r = [];
                for (i = 0; i < 12; i++)r[i] = qn(t, i, n, "month");
                return r
            }

            function Bn(t, e, n, i) {
                "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
                var r = ne(), o = t ? r._week.dow : 0;
                if (null != n)return qn(e, (n + o) % 7, i, "day");
                var s, a = [];
                for (s = 0; s < 7; s++)a[s] = qn(e, (s + o) % 7, i, "day");
                return a
            }

            function Un(t, e) {
                return In(t, e, "months")
            }

            function zn(t, e) {
                return In(t, e, "monthsShort")
            }

            function $n(t, e, n) {
                return Bn(t, e, n, "weekdays")
            }

            function Gn(t, e, n) {
                return Bn(t, e, n, "weekdaysShort")
            }

            function Vn(t, e, n) {
                return Bn(t, e, n, "weekdaysMin")
            }

            function Xn() {
                var t = this._data;
                return this._milliseconds = Xr(this._milliseconds), this._days = Xr(this._days), this._months = Xr(this._months), t.milliseconds = Xr(t.milliseconds), t.seconds = Xr(t.seconds), t.minutes = Xr(t.minutes), t.hours = Xr(t.hours), t.months = Xr(t.months), t.years = Xr(t.years), this
            }

            function Qn(t, e, n, i) {
                var r = qe(e, n);
                return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
            }

            function Zn(t, e) {
                return Qn(this, t, e, 1)
            }

            function Jn(t, e) {
                return Qn(this, t, e, -1)
            }

            function Kn(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }

            function ti() {
                var t, e, n, i, r, o = this._milliseconds, s = this._days, a = this._months, l = this._data;
                return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Kn(ni(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, t = b(o / 1e3), l.seconds = t % 60, e = b(t / 60), l.minutes = e % 60, n = b(e / 60), l.hours = n % 24, s += b(n / 24), r = b(ei(s)), a += r, s -= Kn(ni(r)), i = b(a / 12), a %= 12, l.days = s, l.months = a, l.years = i, this
            }

            function ei(t) {
                return 4800 * t / 146097
            }

            function ni(t) {
                return 146097 * t / 4800
            }

            function ii(t) {
                var e, n, i = this._milliseconds;
                if (t = F(t), "month" === t || "year" === t)return e = this._days + i / 864e5, n = this._months + ei(e), "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(ni(this._months)), t) {
                    case"week":
                        return e / 7 + i / 6048e5;
                    case"day":
                        return e + i / 864e5;
                    case"hour":
                        return 24 * e + i / 36e5;
                    case"minute":
                        return 1440 * e + i / 6e4;
                    case"second":
                        return 86400 * e + i / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * e) + i;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }

            function ri() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12)
            }

            function oi(t) {
                return function () {
                    return this.as(t)
                }
            }

            function si(t) {
                return t = F(t), this[t + "s"]()
            }

            function ai(t) {
                return function () {
                    return this._data[t]
                }
            }

            function li() {
                return b(this.days() / 7)
            }

            function ui(t, e, n, i, r) {
                return r.relativeTime(e || 1, !!n, t, i)
            }

            function ci(t, e, n) {
                var i = qe(t).abs(), r = ho(i.as("s")), o = ho(i.as("m")), s = ho(i.as("h")), a = ho(i.as("d")), l = ho(i.as("M")), u = ho(i.as("y")), c = r < fo.s && ["s", r] || o <= 1 && ["m"] || o < fo.m && ["mm", o] || s <= 1 && ["h"] || s < fo.h && ["hh", s] || a <= 1 && ["d"] || a < fo.d && ["dd", a] || l <= 1 && ["M"] || l < fo.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
                return c[2] = e, c[3] = +t > 0, c[4] = n, ui.apply(null, c)
            }

            function hi(t) {
                return void 0 === t ? ho : "function" == typeof t && (ho = t, !0)
            }

            function di(t, e) {
                return void 0 !== fo[t] && (void 0 === e ? fo[t] : (fo[t] = e, !0))
            }

            function fi(t) {
                var e = this.localeData(), n = ci(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }

            function pi() {
                var t, e, n, i = po(this._milliseconds) / 1e3, r = po(this._days), o = po(this._months);
                t = b(i / 60), e = b(t / 60), i %= 60, t %= 60, n = b(o / 12), o %= 12;
                var s = n, a = o, l = r, u = e, c = t, h = i, d = this.asSeconds();
                return d ? (d < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (u || c || h ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (h ? h + "S" : "") : "P0D"
            }

            var mi, gi;
            gi = Array.prototype.some ? Array.prototype.some : function (t) {
                for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)if (i in e && t.call(this, e[i], i, e))return !0;
                return !1
            };
            var yi = n.momentProperties = [], vi = !1, wi = {};
            n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
            var bi;
            bi = Object.keys ? Object.keys : function (t) {
                var e, n = [];
                for (e in t)u(t, e) && n.push(e);
                return n
            };
            var xi, _i = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            }, ki = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }, Si = "Invalid date", Ti = "%d", Ci = /\d{1,2}/, Di = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            }, Mi = {}, Ni = {}, ji = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ei = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Oi = {}, Ai = {}, Pi = /\d/, Li = /\d\d/, Yi = /\d{3}/, Fi = /\d{4}/, Ri = /[+-]?\d{6}/, Hi = /\d\d?/, Wi = /\d\d\d\d?/, qi = /\d\d\d\d\d\d?/, Ii = /\d{1,3}/, Bi = /\d{1,4}/, Ui = /[+-]?\d{1,6}/, zi = /\d+/, $i = /[+-]?\d+/, Gi = /Z|[+-]\d\d:?\d\d/gi, Vi = /Z|[+-]\d\d(?::?\d\d)?/gi, Xi = /[+-]?\d+(\.\d{1,3})?/, Qi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Zi = {}, Ji = {}, Ki = 0, tr = 1, er = 2, nr = 3, ir = 4, rr = 5, or = 6, sr = 7, ar = 8;
            xi = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
                var e;
                for (e = 0; e < this.length; ++e)if (this[e] === t)return e;
                return -1
            }, G("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), G("MMM", 0, 0, function (t) {
                return this.localeData().monthsShort(this, t)
            }), G("MMMM", 0, 0, function (t) {
                return this.localeData().months(this, t)
            }), Y("month", "M"), H("month", 8), J("M", Hi), J("MM", Hi, Li), J("MMM", function (t, e) {
                return e.monthsShortRegex(t)
            }), J("MMMM", function (t, e) {
                return e.monthsRegex(t)
            }), nt(["M", "MM"], function (t, e) {
                e[tr] = x(t) - 1
            }), nt(["MMM", "MMMM"], function (t, e, n, i) {
                var r = n._locale.monthsParse(t, i, n._strict);
                null != r ? e[tr] = r : f(n).invalidMonth = t
            });
            var lr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ur = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), cr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), hr = Qi, dr = Qi;
            G("Y", 0, 0, function () {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), G(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), Y("year", "y"), H("year", 1), J("Y", $i), J("YY", Hi, Li), J("YYYY", Bi, Fi), J("YYYYY", Ui, Ri), J("YYYYYY", Ui, Ri), nt(["YYYYY", "YYYYYY"], Ki), nt("YYYY", function (t, e) {
                e[Ki] = 2 === t.length ? n.parseTwoDigitYear(t) : x(t)
            }), nt("YY", function (t, e) {
                e[Ki] = n.parseTwoDigitYear(t)
            }), nt("Y", function (t, e) {
                e[Ki] = parseInt(t, 10)
            }), n.parseTwoDigitYear = function (t) {
                return x(t) + (x(t) > 68 ? 1900 : 2e3)
            };
            var fr = q("FullYear", !0);
            G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), Y("week", "w"), Y("isoWeek", "W"), H("week", 5), H("isoWeek", 5), J("w", Hi), J("ww", Hi, Li), J("W", Hi), J("WW", Hi, Li), it(["w", "ww", "W", "WW"], function (t, e, n, i) {
                e[i.substr(0, 1)] = x(t)
            });
            var pr = {dow: 0, doy: 6};
            G("d", 0, "do", "day"), G("dd", 0, 0, function (t) {
                return this.localeData().weekdaysMin(this, t)
            }), G("ddd", 0, 0, function (t) {
                return this.localeData().weekdaysShort(this, t)
            }), G("dddd", 0, 0, function (t) {
                return this.localeData().weekdays(this, t)
            }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), Y("day", "d"), Y("weekday", "e"), Y("isoWeekday", "E"), H("day", 11), H("weekday", 11), H("isoWeekday", 11), J("d", Hi), J("e", Hi), J("E", Hi), J("dd", function (t, e) {
                return e.weekdaysMinRegex(t)
            }), J("ddd", function (t, e) {
                return e.weekdaysShortRegex(t)
            }), J("dddd", function (t, e) {
                return e.weekdaysRegex(t)
            }), it(["dd", "ddd", "dddd"], function (t, e, n, i) {
                var r = n._locale.weekdaysParse(t, i, n._strict);
                null != r ? e.d = r : f(n).invalidWeekday = t
            }), it(["d", "e", "E"], function (t, e, n, i) {
                e[i] = x(t)
            });
            var mr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), gr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), yr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), vr = Qi, wr = Qi, br = Qi;
            G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, Ut), G("k", ["kk", 2], 0, zt), G("hmm", 0, 0, function () {
                return "" + Ut.apply(this) + $(this.minutes(), 2)
            }), G("hmmss", 0, 0, function () {
                return "" + Ut.apply(this) + $(this.minutes(), 2) + $(this.seconds(), 2)
            }), G("Hmm", 0, 0, function () {
                return "" + this.hours() + $(this.minutes(), 2)
            }), G("Hmmss", 0, 0, function () {
                return "" + this.hours() + $(this.minutes(), 2) + $(this.seconds(), 2)
            }), $t("a", !0), $t("A", !1), Y("hour", "h"), H("hour", 13), J("a", Gt), J("A", Gt), J("H", Hi), J("h", Hi), J("HH", Hi, Li), J("hh", Hi, Li), J("hmm", Wi), J("hmmss", qi), J("Hmm", Wi), J("Hmmss", qi), nt(["H", "HH"], nr), nt(["a", "A"], function (t, e, n) {
                n._isPm = n._locale.isPM(t), n._meridiem = t
            }), nt(["h", "hh"], function (t, e, n) {
                e[nr] = x(t), f(n).bigHour = !0
            }), nt("hmm", function (t, e, n) {
                var i = t.length - 2;
                e[nr] = x(t.substr(0, i)), e[ir] = x(t.substr(i)), f(n).bigHour = !0
            }), nt("hmmss", function (t, e, n) {
                var i = t.length - 4, r = t.length - 2;
                e[nr] = x(t.substr(0, i)), e[ir] = x(t.substr(i, 2)), e[rr] = x(t.substr(r)), f(n).bigHour = !0
            }), nt("Hmm", function (t, e, n) {
                var i = t.length - 2;
                e[nr] = x(t.substr(0, i)), e[ir] = x(t.substr(i))
            }), nt("Hmmss", function (t, e, n) {
                var i = t.length - 4, r = t.length - 2;
                e[nr] = x(t.substr(0, i)), e[ir] = x(t.substr(i, 2)), e[rr] = x(t.substr(r))
            });
            var xr, _r = /[ap]\.?m?\.?/i, kr = q("Hours", !0), Sr = {
                calendar: _i,
                longDateFormat: ki,
                invalidDate: Si,
                ordinal: Ti,
                ordinalParse: Ci,
                relativeTime: Di,
                months: ur,
                monthsShort: cr,
                week: pr,
                weekdays: mr,
                weekdaysMin: yr,
                weekdaysShort: gr,
                meridiemParse: _r
            }, Tr = {}, Cr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Dr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Mr = /Z|[+-]\d\d(?::?\d\d)?/, Nr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], jr = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Er = /^\/?Date\((\-?\d+)/i;
            n.createFromInputFallback = S("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), n.ISO_8601 = function () {
            };
            var Or = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var t = we.apply(null, arguments);
                return this.isValid() && t.isValid() ? t < this ? this : t : m()
            }), Ar = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var t = we.apply(null, arguments);
                return this.isValid() && t.isValid() ? t > this ? this : t : m()
            }), Pr = function () {
                return Date.now ? Date.now() : +new Date
            };
            Ce("Z", ":"), Ce("ZZ", ""), J("Z", Vi), J("ZZ", Vi), nt(["Z", "ZZ"], function (t, e, n) {
                n._useUTC = !0, n._tzm = De(Vi, t)
            });
            var Lr = /([\+\-]|\d\d)/gi;
            n.updateOffset = function () {
            };
            var Yr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Fr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            qe.fn = ke.prototype;
            var Rr = ze(1, "add"), Hr = ze(-1, "subtract");
            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Wr = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });
            G(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), G(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), Cn("gggg", "weekYear"), Cn("ggggg", "weekYear"), Cn("GGGG", "isoWeekYear"), Cn("GGGGG", "isoWeekYear"), Y("weekYear", "gg"), Y("isoWeekYear", "GG"), H("weekYear", 1), H("isoWeekYear", 1), J("G", $i), J("g", $i), J("GG", Hi, Li), J("gg", Hi, Li), J("GGGG", Bi, Fi), J("gggg", Bi, Fi), J("GGGGG", Ui, Ri), J("ggggg", Ui, Ri), it(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
                e[i.substr(0, 2)] = x(t)
            }), it(["gg", "GG"], function (t, e, i, r) {
                e[r] = n.parseTwoDigitYear(t)
            }), G("Q", 0, "Qo", "quarter"), Y("quarter", "Q"), H("quarter", 7), J("Q", Pi), nt("Q", function (t, e) {
                e[tr] = 3 * (x(t) - 1)
            }), G("D", ["DD", 2], "Do", "date"), Y("date", "D"), H("date", 9), J("D", Hi), J("DD", Hi, Li), J("Do", function (t, e) {
                return t ? e._ordinalParse : e._ordinalParseLenient
            }), nt(["D", "DD"], er), nt("Do", function (t, e) {
                e[er] = x(t.match(Hi)[0], 10)
            });
            var qr = q("Date", !0);
            G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), Y("dayOfYear", "DDD"), H("dayOfYear", 4), J("DDD", Ii), J("DDDD", Yi), nt(["DDD", "DDDD"], function (t, e, n) {
                n._dayOfYear = x(t)
            }), G("m", ["mm", 2], 0, "minute"), Y("minute", "m"), H("minute", 14), J("m", Hi), J("mm", Hi, Li), nt(["m", "mm"], ir);
            var Ir = q("Minutes", !1);
            G("s", ["ss", 2], 0, "second"), Y("second", "s"), H("second", 15), J("s", Hi), J("ss", Hi, Li), nt(["s", "ss"], rr);
            var Br = q("Seconds", !1);
            G("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            }), G(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }), G(0, ["SSS", 3], 0, "millisecond"), G(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), G(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), G(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), G(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), G(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), G(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), Y("millisecond", "ms"), H("millisecond", 16), J("S", Ii, Pi), J("SS", Ii, Li), J("SSS", Ii, Yi);
            var Ur;
            for (Ur = "SSSS"; Ur.length <= 9; Ur += "S")J(Ur, zi);
            for (Ur = "S"; Ur.length <= 9; Ur += "S")nt(Ur, Ln);
            var zr = q("Milliseconds", !1);
            G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
            var $r = v.prototype;
            $r.add = Rr, $r.calendar = Ve, $r.clone = Xe, $r.diff = nn, $r.endOf = mn, $r.format = an, $r.from = ln, $r.fromNow = un, $r.to = cn, $r.toNow = hn, $r.get = U, $r.invalidAt = Sn, $r.isAfter = Qe, $r.isBefore = Ze, $r.isBetween = Je, $r.isSame = Ke, $r.isSameOrAfter = tn, $r.isSameOrBefore = en, $r.isValid = _n, $r.lang = Wr, $r.locale = dn, $r.localeData = fn, $r.max = Ar, $r.min = Or, $r.parsingFlags = kn, $r.set = z, $r.startOf = pn, $r.subtract = Hr, $r.toArray = wn, $r.toObject = bn, $r.toDate = vn, $r.toISOString = sn, $r.toJSON = xn, $r.toString = on, $r.unix = yn, $r.valueOf = gn, $r.creationData = Tn, $r.year = fr, $r.isLeapYear = vt, $r.weekYear = Dn, $r.isoWeekYear = Mn, $r.quarter = $r.quarters = An, $r.month = ht, $r.daysInMonth = dt, $r.week = $r.weeks = Mt, $r.isoWeek = $r.isoWeeks = Nt, $r.weeksInYear = jn, $r.isoWeeksInYear = Nn, $r.date = qr, $r.day = $r.days = Ft, $r.weekday = Rt, $r.isoWeekday = Ht, $r.dayOfYear = Pn, $r.hour = $r.hours = kr, $r.minute = $r.minutes = Ir, $r.second = $r.seconds = Br, $r.millisecond = $r.milliseconds = zr, $r.utcOffset = je, $r.utc = Oe, $r.local = Ae, $r.parseZone = Pe, $r.hasAlignedHourOffset = Le, $r.isDST = Ye, $r.isLocal = Re, $r.isUtcOffset = He, $r.isUtc = We, $r.isUTC = We, $r.zoneAbbr = Yn, $r.zoneName = Fn, $r.dates = S("dates accessor is deprecated. Use date instead.", qr), $r.months = S("months accessor is deprecated. Use month instead", ht), $r.years = S("years accessor is deprecated. Use year instead", fr), $r.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ee), $r.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Fe);
            var Gr = $r, Vr = N.prototype;
            Vr.calendar = j, Vr.longDateFormat = E, Vr.invalidDate = O, Vr.ordinal = A, Vr.preparse = Wn, Vr.postformat = Wn, Vr.relativeTime = P, Vr.pastFuture = L, Vr.set = D, Vr.months = st, Vr.monthsShort = at, Vr.monthsParse = ut, Vr.monthsRegex = pt, Vr.monthsShortRegex = ft, Vr.week = Tt, Vr.firstDayOfYear = Dt, Vr.firstDayOfWeek = Ct, Vr.weekdays = Ot, Vr.weekdaysMin = Pt, Vr.weekdaysShort = At, Vr.weekdaysParse = Yt, Vr.weekdaysRegex = Wt, Vr.weekdaysShortRegex = qt, Vr.weekdaysMinRegex = It, Vr.isPM = Vt, Vr.meridiem = Xt, Kt("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (t) {
                    var e = t % 10, n = 1 === x(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + n
                }
            }), n.lang = S("moment.lang is deprecated. Use moment.locale instead.", Kt), n.langData = S("moment.langData is deprecated. Use moment.localeData instead.", ne);
            var Xr = Math.abs, Qr = oi("ms"), Zr = oi("s"), Jr = oi("m"), Kr = oi("h"), to = oi("d"), eo = oi("w"), no = oi("M"), io = oi("y"), ro = ai("milliseconds"), oo = ai("seconds"), so = ai("minutes"), ao = ai("hours"), lo = ai("days"), uo = ai("months"), co = ai("years"), ho = Math.round, fo = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, po = Math.abs, mo = ke.prototype;
            mo.abs = Xn, mo.add = Zn, mo.subtract = Jn, mo.as = ii, mo.asMilliseconds = Qr, mo.asSeconds = Zr, mo.asMinutes = Jr, mo.asHours = Kr, mo.asDays = to, mo.asWeeks = eo, mo.asMonths = no, mo.asYears = io, mo.valueOf = ri, mo._bubble = ti, mo.get = si, mo.milliseconds = ro, mo.seconds = oo, mo.minutes = so, mo.hours = ao, mo.days = lo, mo.weeks = li, mo.months = uo, mo.years = co, mo.humanize = fi, mo.toISOString = pi, mo.toString = pi, mo.toJSON = pi, mo.locale = dn, mo.localeData = fn, mo.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", pi), mo.lang = Wr, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), J("x", $i), J("X", Xi), nt("X", function (t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }), nt("x", function (t, e, n) {
                n._d = new Date(x(t))
            }), n.version = "2.15.2", i(we), n.fn = Gr, n.min = xe, n.max = _e, n.now = Pr, n.utc = h, n.unix = Rn, n.months = Un, n.isDate = a, n.locale = Kt, n.invalid = m, n.duration = qe, n.isMoment = w, n.weekdays = $n, n.parseZone = Hn, n.localeData = ne, n.isDuration = Se, n.monthsShort = zn, n.weekdaysMin = Vn, n.defineLocale = te, n.updateLocale = ee, n.locales = ie, n.weekdaysShort = Gn, n.normalizeUnits = F, n.relativeTimeRounding = hi, n.relativeTimeThreshold = di, n.calendarFormat = Ge, n.prototype = Gr;
            var go = n;
            return go
        })
    }, {}],
    3: [function (t, e, n) {
        (function () {
            function t(t) {
                function e(e, n, i, r, o, s) {
                    for (; o >= 0 && o < s; o += t) {
                        var a = r ? r[o] : o;
                        i = n(i, e[a], a, e)
                    }
                    return i
                }

                return function (n, i, r, o) {
                    i = x(i, o, 4);
                    var s = !M(n) && b.keys(n), a = (s || n).length, l = t > 0 ? 0 : a - 1;
                    return arguments.length < 3 && (r = n[s ? s[l] : l], l += t), e(n, i, r, s, l, a)
                }
            }

            function i(t) {
                return function (e, n, i) {
                    n = _(n, i);
                    for (var r = D(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t)if (n(e[o], o, e))return o;
                    return -1
                }
            }

            function r(t, e, n) {
                return function (i, r, o) {
                    var s = 0, a = D(i);
                    if ("number" == typeof o)t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (n && o && a)return o = n(i, r), i[o] === r ? o : -1;
                    if (r !== r)return o = e(d.call(i, s, a), b.isNaN), o >= 0 ? o + s : -1;
                    for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)if (i[o] === r)return o;
                    return -1
                }
            }

            function o(t, e) {
                var n = A.length, i = t.constructor, r = b.isFunction(i) && i.prototype || u, o = "constructor";
                for (b.has(t, o) && !b.contains(e, o) && e.push(o); n--;)o = A[n], o in t && t[o] !== r[o] && !b.contains(e, o) && e.push(o)
            }

            var s = this, a = s._, l = Array.prototype, u = Object.prototype, c = Function.prototype, h = l.push, d = l.slice, f = u.toString, p = u.hasOwnProperty, m = Array.isArray, g = Object.keys, y = c.bind, v = Object.create, w = function () {
            }, b = function (t) {
                return t instanceof b ? t : this instanceof b ? void(this._wrapped = t) : new b(t)
            };
            "undefined" != typeof n ? ("undefined" != typeof e && e.exports && (n = e.exports = b), n._ = b) : s._ = b, b.VERSION = "1.8.3";
            var x = function (t, e, n) {
                if (void 0 === e)return t;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function (n) {
                            return t.call(e, n)
                        };
                    case 2:
                        return function (n, i) {
                            return t.call(e, n, i)
                        };
                    case 3:
                        return function (n, i, r) {
                            return t.call(e, n, i, r)
                        };
                    case 4:
                        return function (n, i, r, o) {
                            return t.call(e, n, i, r, o)
                        }
                }
                return function () {
                    return t.apply(e, arguments)
                }
            }, _ = function (t, e, n) {
                return null == t ? b.identity : b.isFunction(t) ? x(t, e, n) : b.isObject(t) ? b.matcher(t) : b.property(t)
            };
            b.iteratee = function (t, e) {
                return _(t, e, 1 / 0)
            };
            var k = function (t, e) {
                return function (n) {
                    var i = arguments.length;
                    if (i < 2 || null == n)return n;
                    for (var r = 1; r < i; r++)for (var o = arguments[r], s = t(o), a = s.length, l = 0; l < a; l++) {
                        var u = s[l];
                        e && void 0 !== n[u] || (n[u] = o[u])
                    }
                    return n
                }
            }, S = function (t) {
                if (!b.isObject(t))return {};
                if (v)return v(t);
                w.prototype = t;
                var e = new w;
                return w.prototype = null, e
            }, T = function (t) {
                return function (e) {
                    return null == e ? void 0 : e[t]
                }
            }, C = Math.pow(2, 53) - 1, D = T("length"), M = function (t) {
                var e = D(t);
                return "number" == typeof e && e >= 0 && e <= C
            };
            b.each = b.forEach = function (t, e, n) {
                e = x(e, n);
                var i, r;
                if (M(t))for (i = 0, r = t.length; i < r; i++)e(t[i], i, t); else {
                    var o = b.keys(t);
                    for (i = 0, r = o.length; i < r; i++)e(t[o[i]], o[i], t)
                }
                return t
            }, b.map = b.collect = function (t, e, n) {
                e = _(e, n);
                for (var i = !M(t) && b.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) {
                    var a = i ? i[s] : s;
                    o[s] = e(t[a], a, t)
                }
                return o
            }, b.reduce = b.foldl = b.inject = t(1), b.reduceRight = b.foldr = t(-1), b.find = b.detect = function (t, e, n) {
                var i;
                if (i = M(t) ? b.findIndex(t, e, n) : b.findKey(t, e, n), void 0 !== i && i !== -1)return t[i]
            }, b.filter = b.select = function (t, e, n) {
                var i = [];
                return e = _(e, n), b.each(t, function (t, n, r) {
                    e(t, n, r) && i.push(t)
                }), i
            }, b.reject = function (t, e, n) {
                return b.filter(t, b.negate(_(e)), n)
            }, b.every = b.all = function (t, e, n) {
                e = _(e, n);
                for (var i = !M(t) && b.keys(t), r = (i || t).length, o = 0; o < r; o++) {
                    var s = i ? i[o] : o;
                    if (!e(t[s], s, t))return !1
                }
                return !0
            }, b.some = b.any = function (t, e, n) {
                e = _(e, n);
                for (var i = !M(t) && b.keys(t), r = (i || t).length, o = 0; o < r; o++) {
                    var s = i ? i[o] : o;
                    if (e(t[s], s, t))return !0
                }
                return !1
            }, b.contains = b.includes = b.include = function (t, e, n, i) {
                return M(t) || (t = b.values(t)), ("number" != typeof n || i) && (n = 0), b.indexOf(t, e, n) >= 0
            }, b.invoke = function (t, e) {
                var n = d.call(arguments, 2), i = b.isFunction(e);
                return b.map(t, function (t) {
                    var r = i ? e : t[e];
                    return null == r ? r : r.apply(t, n)
                })
            }, b.pluck = function (t, e) {
                return b.map(t, b.property(e))
            }, b.where = function (t, e) {
                return b.filter(t, b.matcher(e))
            }, b.findWhere = function (t, e) {
                return b.find(t, b.matcher(e))
            }, b.max = function (t, e, n) {
                var i, r, o = -(1 / 0), s = -(1 / 0);
                if (null == e && null != t) {
                    t = M(t) ? t : b.values(t);
                    for (var a = 0, l = t.length; a < l; a++)i = t[a], i > o && (o = i)
                } else e = _(e, n), b.each(t, function (t, n, i) {
                    r = e(t, n, i), (r > s || r === -(1 / 0) && o === -(1 / 0)) && (o = t, s = r)
                });
                return o
            }, b.min = function (t, e, n) {
                var i, r, o = 1 / 0, s = 1 / 0;
                if (null == e && null != t) {
                    t = M(t) ? t : b.values(t);
                    for (var a = 0, l = t.length; a < l; a++)i = t[a], i < o && (o = i)
                } else e = _(e, n), b.each(t, function (t, n, i) {
                    r = e(t, n, i), (r < s || r === 1 / 0 && o === 1 / 0) && (o = t, s = r)
                });
                return o
            }, b.shuffle = function (t) {
                for (var e, n = M(t) ? t : b.values(t), i = n.length, r = Array(i), o = 0; o < i; o++)e = b.random(0, o), e !== o && (r[o] = r[e]), r[e] = n[o];
                return r
            }, b.sample = function (t, e, n) {
                return null == e || n ? (M(t) || (t = b.values(t)), t[b.random(t.length - 1)]) : b.shuffle(t).slice(0, Math.max(0, e))
            }, b.sortBy = function (t, e, n) {
                return e = _(e, n), b.pluck(b.map(t, function (t, n, i) {
                    return {value: t, index: n, criteria: e(t, n, i)}
                }).sort(function (t, e) {
                    var n = t.criteria, i = e.criteria;
                    if (n !== i) {
                        if (n > i || void 0 === n)return 1;
                        if (n < i || void 0 === i)return -1
                    }
                    return t.index - e.index
                }), "value")
            };
            var N = function (t) {
                return function (e, n, i) {
                    var r = {};
                    return n = _(n, i), b.each(e, function (i, o) {
                        var s = n(i, o, e);
                        t(r, i, s)
                    }), r
                }
            };
            b.groupBy = N(function (t, e, n) {
                b.has(t, n) ? t[n].push(e) : t[n] = [e]
            }), b.indexBy = N(function (t, e, n) {
                t[n] = e
            }), b.countBy = N(function (t, e, n) {
                b.has(t, n) ? t[n]++ : t[n] = 1
            }), b.toArray = function (t) {
                return t ? b.isArray(t) ? d.call(t) : M(t) ? b.map(t, b.identity) : b.values(t) : []
            }, b.size = function (t) {
                return null == t ? 0 : M(t) ? t.length : b.keys(t).length
            }, b.partition = function (t, e, n) {
                e = _(e, n);
                var i = [], r = [];
                return b.each(t, function (t, n, o) {
                    (e(t, n, o) ? i : r).push(t)
                }), [i, r]
            }, b.first = b.head = b.take = function (t, e, n) {
                if (null != t)return null == e || n ? t[0] : b.initial(t, t.length - e)
            }, b.initial = function (t, e, n) {
                return d.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
            }, b.last = function (t, e, n) {
                if (null != t)return null == e || n ? t[t.length - 1] : b.rest(t, Math.max(0, t.length - e))
            }, b.rest = b.tail = b.drop = function (t, e, n) {
                return d.call(t, null == e || n ? 1 : e)
            }, b.compact = function (t) {
                return b.filter(t, b.identity)
            };
            var j = function (t, e, n, i) {
                for (var r = [], o = 0, s = i || 0, a = D(t); s < a; s++) {
                    var l = t[s];
                    if (M(l) && (b.isArray(l) || b.isArguments(l))) {
                        e || (l = j(l, e, n));
                        var u = 0, c = l.length;
                        for (r.length += c; u < c;)r[o++] = l[u++]
                    } else n || (r[o++] = l)
                }
                return r
            };
            b.flatten = function (t, e) {
                return j(t, e, !1)
            }, b.without = function (t) {
                return b.difference(t, d.call(arguments, 1))
            }, b.uniq = b.unique = function (t, e, n, i) {
                b.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = _(n, i));
                for (var r = [], o = [], s = 0, a = D(t); s < a; s++) {
                    var l = t[s], u = n ? n(l, s, t) : l;
                    e ? (s && o === u || r.push(l), o = u) : n ? b.contains(o, u) || (o.push(u), r.push(l)) : b.contains(r, l) || r.push(l)
                }
                return r
            }, b.union = function () {
                return b.uniq(j(arguments, !0, !0))
            }, b.intersection = function (t) {
                for (var e = [], n = arguments.length, i = 0, r = D(t); i < r; i++) {
                    var o = t[i];
                    if (!b.contains(e, o)) {
                        for (var s = 1; s < n && b.contains(arguments[s], o); s++);
                        s === n && e.push(o)
                    }
                }
                return e
            }, b.difference = function (t) {
                var e = j(arguments, !0, !0, 1);
                return b.filter(t, function (t) {
                    return !b.contains(e, t)
                })
            }, b.zip = function () {
                return b.unzip(arguments)
            }, b.unzip = function (t) {
                for (var e = t && b.max(t, D).length || 0, n = Array(e), i = 0; i < e; i++)n[i] = b.pluck(t, i);
                return n
            }, b.object = function (t, e) {
                for (var n = {}, i = 0, r = D(t); i < r; i++)e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
                return n
            }, b.findIndex = i(1), b.findLastIndex = i(-1), b.sortedIndex = function (t, e, n, i) {
                n = _(n, i, 1);
                for (var r = n(e), o = 0, s = D(t); o < s;) {
                    var a = Math.floor((o + s) / 2);
                    n(t[a]) < r ? o = a + 1 : s = a
                }
                return o
            }, b.indexOf = r(1, b.findIndex, b.sortedIndex), b.lastIndexOf = r(-1, b.findLastIndex), b.range = function (t, e, n) {
                null == e && (e = t || 0, t = 0), n = n || 1;
                for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++, t += n)r[o] = t;
                return r
            };
            var E = function (t, e, n, i, r) {
                if (!(i instanceof e))return t.apply(n, r);
                var o = S(t.prototype), s = t.apply(o, r);
                return b.isObject(s) ? s : o
            };
            b.bind = function (t, e) {
                if (y && t.bind === y)return y.apply(t, d.call(arguments, 1));
                if (!b.isFunction(t))throw new TypeError("Bind must be called on a function");
                var n = d.call(arguments, 2), i = function () {
                    return E(t, i, e, this, n.concat(d.call(arguments)))
                };
                return i
            }, b.partial = function (t) {
                var e = d.call(arguments, 1), n = function () {
                    for (var i = 0, r = e.length, o = Array(r), s = 0; s < r; s++)o[s] = e[s] === b ? arguments[i++] : e[s];
                    for (; i < arguments.length;)o.push(arguments[i++]);
                    return E(t, n, this, this, o)
                };
                return n
            }, b.bindAll = function (t) {
                var e, n, i = arguments.length;
                if (i <= 1)throw new Error("bindAll must be passed function names");
                for (e = 1; e < i; e++)n = arguments[e], t[n] = b.bind(t[n], t);
                return t
            }, b.memoize = function (t, e) {
                var n = function (i) {
                    var r = n.cache, o = "" + (e ? e.apply(this, arguments) : i);
                    return b.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
                };
                return n.cache = {}, n
            }, b.delay = function (t, e) {
                var n = d.call(arguments, 2);
                return setTimeout(function () {
                    return t.apply(null, n)
                }, e)
            }, b.defer = b.partial(b.delay, b, 1), b.throttle = function (t, e, n) {
                var i, r, o, s = null, a = 0;
                n || (n = {});
                var l = function () {
                    a = n.leading === !1 ? 0 : b.now(), s = null, o = t.apply(i, r), s || (i = r = null)
                };
                return function () {
                    var u = b.now();
                    a || n.leading !== !1 || (a = u);
                    var c = e - (u - a);
                    return i = this, r = arguments, c <= 0 || c > e ? (s && (clearTimeout(s), s = null), a = u, o = t.apply(i, r), s || (i = r = null)) : s || n.trailing === !1 || (s = setTimeout(l, c)), o
                }
            }, b.debounce = function (t, e, n) {
                var i, r, o, s, a, l = function () {
                    var u = b.now() - s;
                    u < e && u >= 0 ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(o, r), i || (o = r = null)))
                };
                return function () {
                    o = this, r = arguments, s = b.now();
                    var u = n && !i;
                    return i || (i = setTimeout(l, e)), u && (a = t.apply(o, r), o = r = null), a
                }
            }, b.wrap = function (t, e) {
                return b.partial(e, t)
            }, b.negate = function (t) {
                return function () {
                    return !t.apply(this, arguments)
                }
            }, b.compose = function () {
                var t = arguments, e = t.length - 1;
                return function () {
                    for (var n = e, i = t[e].apply(this, arguments); n--;)i = t[n].call(this, i);
                    return i
                }
            }, b.after = function (t, e) {
                return function () {
                    if (--t < 1)return e.apply(this, arguments)
                }
            }, b.before = function (t, e) {
                var n;
                return function () {
                    return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
                }
            }, b.once = b.partial(b.before, 2);
            var O = !{toString: null}.propertyIsEnumerable("toString"), A = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            b.keys = function (t) {
                if (!b.isObject(t))return [];
                if (g)return g(t);
                var e = [];
                for (var n in t)b.has(t, n) && e.push(n);
                return O && o(t, e), e
            }, b.allKeys = function (t) {
                if (!b.isObject(t))return [];
                var e = [];
                for (var n in t)e.push(n);
                return O && o(t, e), e
            }, b.values = function (t) {
                for (var e = b.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)i[r] = t[e[r]];
                return i
            }, b.mapObject = function (t, e, n) {
                e = _(e, n);
                for (var i, r = b.keys(t), o = r.length, s = {}, a = 0; a < o; a++)i = r[a], s[i] = e(t[i], i, t);
                return s
            }, b.pairs = function (t) {
                for (var e = b.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)i[r] = [e[r], t[e[r]]];
                return i
            }, b.invert = function (t) {
                for (var e = {}, n = b.keys(t), i = 0, r = n.length; i < r; i++)e[t[n[i]]] = n[i];
                return e
            }, b.functions = b.methods = function (t) {
                var e = [];
                for (var n in t)b.isFunction(t[n]) && e.push(n);
                return e.sort()
            }, b.extend = k(b.allKeys), b.extendOwn = b.assign = k(b.keys), b.findKey = function (t, e, n) {
                e = _(e, n);
                for (var i, r = b.keys(t), o = 0, s = r.length; o < s; o++)if (i = r[o], e(t[i], i, t))return i
            }, b.pick = function (t, e, n) {
                var i, r, o = {}, s = t;
                if (null == s)return o;
                b.isFunction(e) ? (r = b.allKeys(s), i = x(e, n)) : (r = j(arguments, !1, !1, 1), i = function (t, e, n) {
                    return e in n
                }, s = Object(s));
                for (var a = 0, l = r.length; a < l; a++) {
                    var u = r[a], c = s[u];
                    i(c, u, s) && (o[u] = c)
                }
                return o
            }, b.omit = function (t, e, n) {
                if (b.isFunction(e))e = b.negate(e); else {
                    var i = b.map(j(arguments, !1, !1, 1), String);
                    e = function (t, e) {
                        return !b.contains(i, e)
                    }
                }
                return b.pick(t, e, n)
            }, b.defaults = k(b.allKeys, !0), b.create = function (t, e) {
                var n = S(t);
                return e && b.extendOwn(n, e), n
            }, b.clone = function (t) {
                return b.isObject(t) ? b.isArray(t) ? t.slice() : b.extend({}, t) : t
            }, b.tap = function (t, e) {
                return e(t), t
            }, b.isMatch = function (t, e) {
                var n = b.keys(e), i = n.length;
                if (null == t)return !i;
                for (var r = Object(t), o = 0; o < i; o++) {
                    var s = n[o];
                    if (e[s] !== r[s] || !(s in r))return !1
                }
                return !0
            };
            var P = function (t, e, n, i) {
                if (t === e)return 0 !== t || 1 / t === 1 / e;
                if (null == t || null == e)return t === e;
                t instanceof b && (t = t._wrapped), e instanceof b && (e = e._wrapped);
                var r = f.call(t);
                if (r !== f.call(e))return !1;
                switch (r) {
                    case"[object RegExp]":
                    case"[object String]":
                        return "" + t == "" + e;
                    case"[object Number]":
                        return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                    case"[object Date]":
                    case"[object Boolean]":
                        return +t === +e
                }
                var o = "[object Array]" === r;
                if (!o) {
                    if ("object" != typeof t || "object" != typeof e)return !1;
                    var s = t.constructor, a = e.constructor;
                    if (s !== a && !(b.isFunction(s) && s instanceof s && b.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e)return !1
                }
                n = n || [], i = i || [];
                for (var l = n.length; l--;)if (n[l] === t)return i[l] === e;
                if (n.push(t), i.push(e), o) {
                    if (l = t.length, l !== e.length)return !1;
                    for (; l--;)if (!P(t[l], e[l], n, i))return !1
                } else {
                    var u, c = b.keys(t);
                    if (l = c.length, b.keys(e).length !== l)return !1;
                    for (; l--;)if (u = c[l], !b.has(e, u) || !P(t[u], e[u], n, i))return !1
                }
                return n.pop(), i.pop(), !0
            };
            b.isEqual = function (t, e) {
                return P(t, e)
            }, b.isEmpty = function (t) {
                return null == t || (M(t) && (b.isArray(t) || b.isString(t) || b.isArguments(t)) ? 0 === t.length : 0 === b.keys(t).length)
            }, b.isElement = function (t) {
                return !(!t || 1 !== t.nodeType)
            }, b.isArray = m || function (t) {
                    return "[object Array]" === f.call(t)
                }, b.isObject = function (t) {
                var e = typeof t;
                return "function" === e || "object" === e && !!t
            }, b.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
                b["is" + t] = function (e) {
                    return f.call(e) === "[object " + t + "]"
                }
            }), b.isArguments(arguments) || (b.isArguments = function (t) {
                return b.has(t, "callee")
            }), "function" != typeof/./ && "object" != typeof Int8Array && (b.isFunction = function (t) {
                return "function" == typeof t || !1
            }), b.isFinite = function (t) {
                return isFinite(t) && !isNaN(parseFloat(t))
            }, b.isNaN = function (t) {
                return b.isNumber(t) && t !== +t
            }, b.isBoolean = function (t) {
                return t === !0 || t === !1 || "[object Boolean]" === f.call(t)
            }, b.isNull = function (t) {
                return null === t
            }, b.isUndefined = function (t) {
                return void 0 === t
            }, b.has = function (t, e) {
                return null != t && p.call(t, e)
            }, b.noConflict = function () {
                return s._ = a, this
            }, b.identity = function (t) {
                return t
            }, b.constant = function (t) {
                return function () {
                    return t
                }
            }, b.noop = function () {
            }, b.property = T, b.propertyOf = function (t) {
                return null == t ? function () {
                } : function (e) {
                    return t[e]
                }
            }, b.matcher = b.matches = function (t) {
                return t = b.extendOwn({}, t),
                    function (e) {
                        return b.isMatch(e, t)
                    }
            }, b.times = function (t, e, n) {
                var i = Array(Math.max(0, t));
                e = x(e, n, 1);
                for (var r = 0; r < t; r++)i[r] = e(r);
                return i
            }, b.random = function (t, e) {
                return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
            }, b.now = Date.now || function () {
                    return (new Date).getTime()
                };
            var L = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, Y = b.invert(L), F = function (t) {
                var e = function (e) {
                    return t[e]
                }, n = "(?:" + b.keys(t).join("|") + ")", i = RegExp(n), r = RegExp(n, "g");
                return function (t) {
                    return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
                }
            };
            b.escape = F(L), b.unescape = F(Y), b.result = function (t, e, n) {
                var i = null == t ? void 0 : t[e];
                return void 0 === i && (i = n), b.isFunction(i) ? i.call(t) : i
            };
            var R = 0;
            b.uniqueId = function (t) {
                var e = ++R + "";
                return t ? t + e : e
            }, b.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var H = /(.)^/, W = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, q = /\\|'|\r|\n|\u2028|\u2029/g, I = function (t) {
                return "\\" + W[t]
            };
            b.template = function (t, e, n) {
                !e && n && (e = n), e = b.defaults({}, e, b.templateSettings);
                var i = RegExp([(e.escape || H).source, (e.interpolate || H).source, (e.evaluate || H).source].join("|") + "|$", "g"), r = 0, o = "__p+='";
                t.replace(i, function (e, n, i, s, a) {
                    return o += t.slice(r, a).replace(q, I), r = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
                }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    var s = new Function(e.variable || "obj", "_", o)
                } catch (t) {
                    throw t.source = o, t
                }
                var a = function (t) {
                    return s.call(this, t, b)
                }, l = e.variable || "obj";
                return a.source = "function(" + l + "){\n" + o + "}", a
            }, b.chain = function (t) {
                var e = b(t);
                return e._chain = !0, e
            };
            var B = function (t, e) {
                return t._chain ? b(e).chain() : e
            };
            b.mixin = function (t) {
                b.each(b.functions(t), function (e) {
                    var n = b[e] = t[e];
                    b.prototype[e] = function () {
                        var t = [this._wrapped];
                        return h.apply(t, arguments), B(this, n.apply(b, t))
                    }
                })
            }, b.mixin(b), b.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
                var e = l[t];
                b.prototype[t] = function () {
                    var n = this._wrapped;
                    return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], B(this, n)
                }
            }), b.each(["concat", "join", "slice"], function (t) {
                var e = l[t];
                b.prototype[t] = function () {
                    return B(this, e.apply(this._wrapped, arguments))
                }
            }), b.prototype.value = function () {
                return this._wrapped
            }, b.prototype.valueOf = b.prototype.toJSON = b.prototype.value, b.prototype.toString = function () {
                return "" + this._wrapped
            }, "function" == typeof define && define.amd && define("underscore", [], function () {
                return b
            })
        }).call(this)
    }, {}],
    4: [function (t, e, n) {
        function i(t, e, n) {
            var i = r.parse(t, !0);
            return i.query.utm_source = window.location.hostname, i.query.utm_medium = e, i.query.utm_campaign = n, delete i.search, r.format(i)
        }

        var r = t("url");
        e.exports = {setMediumCampaign: i}
    }, {url: 27}],
    5: [function (t, e, n) {
        e.exports = {id: 22, stamp: 1486937918326}
    }, {}],
    6: [function (t, e, n) {
        (function (n) {
            function i(t) {
                p.log("Create ChartWidget"), h.call(this, t), this.styles = !1, this.blockchain = {
                    supply: NaN,
                    blocks: NaN
                }, this.chart = {
                    canvas: {c: null, i: null},
                    w: NaN,
                    h: NaN,
                    max: 0,
                    min: 1 / 0,
                    tpad: 10,
                    fpad: 0,
                    scale: 1,
                    dx: 1
                }, this.anim = null, this.data = [], this.last = {
                    price: NaN,
                    time: NaN
                }, this.sl_handle = window.setTimeout(u.bind(this.stylesLoaded, this), 2500), d(g + "history?unix=1&pretty=0", 36e5, u.bind(this.processChart, this)), f.register("price", this.processSpot.bind(this)), d(m + "blockchain.json", 36e5, this.processBlockchain.bind(this))
            }

            function r(t, e, n) {
                t.moveTo((0 | e) + .5, (0 | n) + .5)
            }

            function o(t, e, n) {
                t.lineTo((0 | e) + .5, (0 | n) + .5)
            }

            function s(t, e, n, i) {
                t.arc((0 | e) + .5, (0 | n) + .5, i, 0, 2 * Math.PI)
            }

            function a(t) {
                var e = {x: 0, y: 0};
                if (t.offsetX)e.x = t.offsetX, e.y = t.offsetY; else if (t.pageX && t.target) {
                    var n = l(t.target).offset();
                    e.x = t.pageX - n.left, e.y = t.pageY - n.top
                }
                return e
            }

            var l = t("jQuery"), u = t("underscore"), c = t("moment"), h = t("./widget"), d = t("./feed-poller"), f = t("./stream"), p = t("./log"), m = n.env.BASE, g = n.env.BCX, y = t("./analytics"), v = t("./util");
            i.prototype = Object.create(h.prototype), i.prototype.constructor = i, i.prototype.stylesLoaded = function () {
                this.styles = !0, window.clearTimeout(this.sl_handle), this.build(), this.el.addClass(this.postBuildClasses.join(" ")), this.doResize(), this.updateStats()
            }, i.prototype.build = function () {
                this.el.html('    <div class="btcwdgt-header">      <h2 title="Bitcoin price"><span>$</span><span>&mdash;.&ndash;</span></h2>      <div class="stats">        <div>MktCap<span class="mkt-cap">&mdash;.&ndash;</span></div>        <div>High<span class="high">&mdash;.&ndash;</span></div>        <div>Low<span class="low">&mdash;.&ndash;</span></div>        <div>Supply<span class="supply">&mdash;.&ndash;</span></div>        <div>Blocks<span class="blocks">&mdash;</span></div>      </div>      <p class="changes">        <strong class="arrow"></strong><span class="pct">&mdash;.&ndash;%</span><span class="amt">$&mdash;.&ndash;</span>      </p>      <p class="date-wrap"><span class="date">&mdash;</span></p>    </div>    <div class="btcwdgt-body">      <canvas class="c"></canvas>      <canvas class="i"></canvas>    </div>   '), this.el.addClass("btcwdgt btcwdgt-headlines btcwdgt-chart"), this.campaign && l("a", this.el).each(function (t, e) {
                    var n = l(e).attr("href");
                    l(e).attr("href", y.setMediumCampaign(n, "widget", "Chart Widget"))
                }), this.chart.canvas.c = l("canvas.c", this.el)[0], this.chart.canvas.i = l("canvas.i", this.el)[0], l("canvas.i", this.el).on("mousemove", u.bind(this.onMouseMove, this)), this.el.on("mouseout", u.bind(this.clearInteract, this)), l(".btcwdgt-header p", this.el).on("mouseover", u.bind(this.clearInteract, this)), l(window).on("resize", u.bind(this.onResize, this))
            }, i.prototype.onResize = function () {
                window.requestAnimationFrame(u.bind(this.doResize, this))
            }, i.prototype.doResize = function () {
                if (this.styles) {
                    var t = l(this.el).innerWidth(), e = 16 / 9, n = t / e, i = "width: " + t + "px !important;       height:" + n + "px !important";
                    l(".btcwdgt-body", this.el).attr("style", i), l("canvas", this.el).attr("style", i).css("width", t).css("height", n), this.chart.canvas.c.width = t * w, this.chart.canvas.c.height = n * w, this.chart.canvas.i.width = t * w, this.chart.canvas.i.height = n * w, this.chart.canvas.c.getContext("2d").scale(w, w), this.chart.canvas.i.getContext("2d").scale(w, w), this.chart.w = t, this.chart.h = n, this.calculate(), this.redraw();
                    var r = NaN;
                    isNaN(this.last.unix) ? this.data.length > 0 && (r = this.data[0][0]) : r = this.last.unix, isNaN(r) || (l(".date", this.el).html(c.unix(r).format("lll")), l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(r).format("l")))
                }
            }, i.prototype.calculate = function () {
                this.chart.fpad = l(".btcwdgt-footer", this.el).height();
                var t = function (t) {
                    return t[1]
                };
                this.data.length > 0 && (this.chart.min = u.min(this.data, t)[1], this.chart.max = u.max(this.data, t)[1]), isNaN(this.last.price) || (this.chart.min = Math.min(this.chart.min, this.last.price), this.chart.max = Math.max(this.chart.max, this.last.price)), this.chart.scale = (this.chart.h - this.chart.fpad - this.chart.tpad) / (this.chart.max - this.chart.min), isNaN(this.last.price) ? this.chart.dx = this.chart.w / (this.data.length - 1) : this.chart.dx = this.chart.w / this.data.length
            }, i.prototype.redraw = function () {
                this.draw(this.chart.canvas.c.getContext("2d"))
            }, i.prototype.draw = function (t) {
                if (t.clearRect(0, 0, this.chart.w, this.chart.h), !(this.data.length <= 0)) {
                    for (var e = 12, n = 2, i = e + n + 1, s = 2, a = s * i, l = (this.chart.h - this.chart.fpad - this.chart.tpad) / a, u = (this.chart.max - this.chart.min) / l, h = Math.pow(10, Math.floor(Math.log10(u))), d = Math.floor(10 * u / h) / 10, f = [1, 1.25, 1.5, 2, 2.5, 5, 7.5, 10], p = h, m = 0; m < f.length; m++)if (f[m] >= d) {
                        p = f[m] * h;
                        break
                    }
                    for (var g, y, v = [], w = [], b = Math.floor(this.chart.min / p) * p, x = b; x < this.chart.max; x += p)y = this.priceToPxY(x), y < this.chart.h - this.chart.fpad && y > 0 && v.push(y), y + e + n < this.chart.h - this.chart.fpad - e && y + n > 0 && w.push([y + n, x]);
                    t.strokeStyle = this.colors.grid, t.beginPath();
                    for (var m = 0; m < v.length; m++)r(t, 0, v[m]), o(t, this.chart.w, v[m]);
                    t.stroke(), t.font = "300 " + e + 'px "museo-sans-rounded", Helvetica, Arial, sans-serif', t.textAlign = "right", t.textBaseline = "bottom", t.strokeStyle = this.colors.labelStroke, t.fillStyle = this.colors.label, v = [];
                    for (var _ = this.chart.h - this.chart.fpad, m = 0; m < this.data.length; m++) {
                        var k = c.unix(this.data[m][0]).utc();
                        if (1 == k.get("date")) {
                            var S = "";
                            S = 0 == k.get("month") ? k.get("year") : k.format("MMM");
                            var T = isNaN(this.last.price) ? m : m + 1;
                            g = this.barToPxX(T), v.push(g), t.strokeText(S, g - 4, _), t.fillText(S, g - 4, _)
                        }
                    }
                    t.strokeStyle = this.colors.grid, t.beginPath();
                    for (var m = 0; m < v.length; m++)r(t, v[m], 0), o(t, v[m], this.chart.h - this.chart.fpad);
                    t.stroke(), t.textAlign = "right", t.textBaseline = "top";
                    var C = t.measureText(this.chart.max.toFixed(2)).width + 3;
                    if (t.beginPath(), isNaN(this.last.price)) {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.data[0][1]));
                        for (var m = 1; m < this.data.length; m++)t.lineTo(this.barToPxX(m), this.priceToPxY(this.data[m][1]))
                    } else {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.last.price));
                        for (var m = 0; m < this.data.length; m++)t.lineTo(this.barToPxX(m + 1), this.priceToPxY(this.data[m][1]))
                    }
                    if (t.lineTo(0, this.chart.h), t.lineTo(this.chart.w, this.chart.h), isNaN(this.last.price) ? t.lineTo(this.barToPxX(0), this.priceToPxY(this.data[0][1])) : t.lineTo(this.barToPxX(0), this.priceToPxY(this.last.price)), t.fillStyle = this.colors.bg, t.fill(), t.beginPath(), isNaN(this.last.price)) {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.data[0][1]));
                        for (var m = 1; m < this.data.length; m++)t.lineTo(this.barToPxX(m), this.priceToPxY(this.data[m][1]))
                    } else {
                        t.moveTo(this.barToPxX(0), this.priceToPxY(this.last.price));
                        for (var m = 0; m < this.data.length; m++)t.lineTo(this.barToPxX(m + 1), this.priceToPxY(this.data[m][1]))
                    }
                    t.strokeStyle = this.colors.fg, t.stroke(), t.strokeStyle = this.colors.labelStroke, t.fillStyle = this.colors.label;
                    for (var m = 0; m < w.length; m++) {
                        var S = w[m][1].toFixed(2);
                        t.strokeText(S, C + e, w[m][0]), t.fillText(S, C + e, w[m][0])
                    }
                    var x = this.last.price;
                    isNaN(x) && (x = this.data[0][1]), y = this.priceToPxY(x), t.beginPath();
                    var D = e + 4, M = C + e + 2;
                    t.moveTo((e / 2 | 0) + .5, (y - D / 2 | 0) + .5), t.lineTo(M, (y - D / 2 | 0) + .5), t.lineTo((M + D / 2 | 0) + .5, y), t.lineTo(M, (y + D / 2 | 0) + .5), t.lineTo((e / 2 | 0) + .5, (y + D / 2 | 0) + .5), t.lineTo((e / 2 | 0) + .5, (y - D / 2 | 0) + .5), t.fillStyle = this.colors.chartbg, t.fill(), t.strokeStyle = this.colors.fg, t.stroke(), t.fillStyle = this.colors.label, t.textAlign = "right", t.textBaseline = "middle", t.fillText(x.toFixed(2), C + e, y)
                }
            }, i.prototype.onMouseMove = function (t) {
                var e = this;
                this.anim = window.requestAnimationFrame(function (t) {
                    return function () {
                        e.interact(t)
                    }
                }(t))
            }, i.prototype.clearInteract = function (t) {
                try {
                    window.cancelAnimationFrame(this.anim)
                } catch (t) {
                }
                var e = this.chart.canvas.i.getContext("2d");
                e.clearRect(0, 0, this.chart.w, this.chart.h);
                var n = NaN, i = NaN;
                this.data.length > 0 && (i = this.data[0][0], n = this.data[0][1]), isNaN(this.last.price) || (i = this.last.time, n = this.last.price), isNaN(n) || (l("h2 span:last-child", this.el).html(n.toFixed(2)), l(".date", this.el).html(c.unix(i).format("lll")), l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(i).format("l")))
            }, i.prototype.interact = function (t) {
                var e = a(t), n = this.chart.canvas.i.getContext("2d"), i = Math.round((this.chart.w - e.x) / this.chart.dx);
                if (n.clearRect(0, 0, this.chart.w, this.chart.h), !(i < 0 || i >= (isNaN(this.last.price) ? this.data.length : this.data.length + 1))) {
                    var u = 5, h = 6, d = NaN, f = NaN;
                    isNaN(this.last.price) ? (f = this.data[i][0], d = this.data[i][1]) : 0 == i ? (f = this.last.time, d = this.last.price) : (f = this.data[i - 1][0], d = this.data[i - 1][1]), n.fillStyle = this.colors.fg;
                    var p = this.barToPxX(i), m = this.priceToPxY(d);
                    n.beginPath(), p > u + h + 1 && (r(n, 0, m - u), o(n, u, m), o(n, 0, m + u), o(n, 0, m - u)), p < this.chart.w - (u + h + 1) && (r(n, this.chart.w, m - u), o(n, this.chart.w - u, m), o(n, this.chart.w, m + u), o(n, this.chart.w, m - u)), n.fill(), n.strokeStyle = this.colors.crosshair, n.lineWidth = 1, n.beginPath(), r(n, p, 0), o(n, p, m - h - 3), r(n, p, m + h + 3), o(n, p, this.chart.h), n.stroke(), n.strokeStyle = this.colors.label, n.lineWidth = 2, n.beginPath(), r(n, p + h, m), s(n, p, m, h), n.stroke(), l("h2 span:last-child", this.el).html(d.toFixed(2));
                    var g = l(".date", this.el);
                    g.html(c.unix(f).format("lll")), g.width() > l(".date-wrap", this.el).width() && g.html(c.unix(f).format("l"))
                }
            }, i.prototype.priceToPxY = function (t) {
                return this.chart.tpad + (this.chart.max - t) * this.chart.scale
            }, i.prototype.barToPxX = function (t) {
                return this.chart.w - this.chart.dx * t
            }, i.prototype.updateStats = function () {
                if (this.styles) {
                    var t = NaN, e = NaN;
                    if (this.data.length > 0 && (e = this.data[0][0], t = this.data[0][1]), isNaN(this.last.price) || (e = this.last.time, t = this.last.price), !isNaN(t) && !isNaN(e)) {
                        if (l("h2 span:last-child", this.el).html(t.toFixed(2)), l(".date", this.el).html(c.unix(e).format("lll")), l(".date", this.el).width() > l(".date-wrap", this.el).width() && l(".date", this.el).html(c.unix(e).format("l")), !isNaN(this.blockchain.supply)) {
                            var n = this.blockchain.supply * t;
                            l(".mkt-cap", this.el).html("$" + v.compactDisp(n))
                        }
                        var i = 100 * (t / this.data[0][1] - 1), r = t - this.data[0][1];
                        l(".changes .pct", this.el).html(Math.abs(i).toFixed(1) + "%"), l(".changes .amt", this.el).html("$" + Math.abs(r).toFixed(2)), l(".arrow", this.el).removeClass("up down"), l(".changes", this.el).removeClass("up down"), r > 0 ? (l(".arrow", this.el).addClass("up"), l(".changes", this.el).addClass("up")) : r < 0 && (l(".arrow", this.el).addClass("down"), l(".changes", this.el).addClass("down"));
                        for (var o = t, s = t, a = 0; a < this.data.length; a++) {
                            var u = this.data[a][1];
                            u > o && (o = u), u < s && (s = u)
                        }
                        l(".high", this.el).html("$" + o.toFixed(2)), l(".low", this.el).html("$" + s.toFixed(2))
                    }
                    isNaN(this.blockchain.supply) || l(".supply", this.el).html(v.compactDisp(this.blockchain.supply)), isNaN(this.blockchain.blocks) || l(".blocks", this.el).text(this.blockchain.blocks)
                }
            }, i.prototype.processBlockchain = function (t) {
                this.blockchain.supply = t.supply, this.blockchain.blocks = t.blocks, this.updateStats()
            }, i.prototype.processChart = function (t) {
                this.data = [];
                for (var e = 0; e < t.length; e++)this.data.push([t[e][0], t[e][1] / 100]);
                this.doResize(), this.updateStats()
            }, i.prototype.processSpot = function (t) {
                if (t.price) {
                    var e = {price: t.price / 100, stamp: t.stamp};
                    this.last.price = e.price, this.last.time = e.stamp, this.doResize(), this.updateStats()
                }
            };
            var w = 1;
            !function () {
                var t = document.createElement("canvas").getContext("2d"), e = window.devicePixelRatio || 1, n = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                w = e / n
            }(), function () {
                var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                window.requestAnimationFrame = "undefined" != typeof t ? t : function (t) {
                    t()
                }
            }(), e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 4,
        "./feed-poller": 9,
        "./log": 11,
        "./stream": 19,
        "./util": 20,
        "./widget": 21,
        _process: 22,
        jQuery: 1,
        moment: 2,
        underscore: 3
    }],
    7: [function (t, e, n) {
        e.exports = {
            default: {
                fg: "#f9b016",
                bg: "rgba(0, 0, 0, 0.15)",
                chartbg: "#3c3c3c",
                grid: "rgba(255,255,255,0.05)",
                label: "#ccc",
                labelStroke: "#191919",
                crosshair: "rgba(249, 176, 22, 0.25)"
            },
            light: {
                fg: "#f9b016",
                bg: "rgba(249, 176, 22, 0.15)",
                chartbg: "#fff",
                grid: "rgba(0, 0, 0, 0.05)",
                label: "#3c3c3c",
                labelStroke: "#fff",
                crosshair: "rgba(0,0,0,0.25)"
            }
        }
    }, {}],
    8: [function (t, e, n) {
        function i(t) {
            return r.indexOf(t.toLowerCase()) >= 0
        }

        var r = "btc,usd,eur,gbp,jpy,cad,aud,cny,chf,sek,nzd,krw,aed,afn,all,amd,ang,aoa,ars,awg,azn,bam,bbd,bdt,bgn,bhd,bif,bmd,bnd,bob,brl,bsd,btn,bwp,byr,bzd,cdf,clf,clp,cop,crc,cup,cve,czk,djf,dkk,dop,dzd,eek,egp,etb,fjd,fkp,gel,ghs,gip,gmd,gnf,gtq,gyd,hkd,hnl,hrk,htg,huf,idr,ils,inr,iqd,irr,isk,jep,jmd,jod,kes,kgs,khr,kmf,kpw,kwd,kyd,kzt,lak,lbp,lkr,lrd,lsl,ltl,lvl,lyd,mad,mdl,mga,mkd,mmk,mnt,mop,mro,mur,mvr,mwk,mxn,myr,mzn,nad,ngn,nio,nok,npr,omr,pab,pen,pgk,php,pkr,pln,pyg,qar,ron,rsd,rub,rwf,sar,sbd,scr,sdg,sgd,shp,sll,sos,srd,std,svc,syp,szl,thb,tjs,tmt,tnd,top,try,ttd,twd,tzs,uah,ugx,uyu,uzs,vef,vnd,vuv,wst,xaf,xag,xau,xcd,xof,xpf,yer,zar,zmw,zwl";
        e.exports = {CURS: r, available: i}
    }, {}],
    9: [function (t, e, n) {
        function i(t, e, n) {
            this.url = t, this.period = e, this.cb = [], this.addCallback(n), a.log('Setup FeedPoller. Grab "' + this.url + '" every ' + (this.period / 1e3).toFixed(1) + "s"), this.startPolling()
        }

        function r(t, e, n) {
            l[t] ? l[t].addCallback(n) : l[t] = new i(t, e, n)
        }

        var o = t("jQuery"), s = t("underscore"), a = t("./log"), l = {};
        i.prototype.addCallback = function (t) {
            "function" == typeof t && this.cb.push(t)
        }, i.prototype.startPolling = function () {
            this.poll(), setInterval(s.bind(this.poll, this), this.period)
        }, i.prototype.poll = function () {
            a.log('Load resource "' + this.url + '"');
            var t = Date.now();
            o.ajax({url: this.url, dataType: "json", context: this}).done(function (e, n, i) {
                a.log("Done. " + (Date.now() - t) + "ms"), s.each(this.cb, function (t) {
                    try {
                        t(e)
                    } catch (t) {
                    }
                })
            })
        }, e.exports = r
    }, {"./log": 11, jQuery: 1, underscore: 3}],
    10: [function (t, e, n) {
        (function (n) {
            function i(t) {
                s.call(this, t), l.log("Create ForumWidget"), this.build(), this.el.addClass(this.postBuildClasses.join(" ")), a(u + "forum.json", 6e5, o.bind(this.processFeed, this))
            }

            var r = t("jQuery"), o = t("underscore"), s = t("./widget"), a = t("./feed-poller"), l = t("./log"), u = n.env.BASE, c = t("./analytics");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function () {
                this.el.html('    <div class="btcwdgt-header">      <h4><a href="https://forum.bitcoin.com/">Active Bitcoin Forum Topics</a></h4>    </div>    <div class="btcwdgt-body">      <ul></ul>    </div>    '), this.el.addClass("btcwdgt btcwdgt-headlines"), this.campaign && r("a", this.el).each(function (t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", c.setMediumCampaign(n, "widget", "Forum Widget"))
                })
            }, i.prototype.processFeed = function (t) {
                for (var e = [], n = 0, i = 0; i < t.length && i != this.rows; i++) {
                    var o = t[i];
                    e[n++] = "<li>", e[n++] = '<a href="', e[n++] = this.campaign ? c.setMediumCampaign(o.url, "widget", "Forum Widget") : o.url, e[n++] = '" title="', e[n++] = o.title, e[n++] = '">', e[n++] = o.title, e[n++] = "</a>", e[n++] = "</li>"
                }
                r("ul", this.el).html(e.join(""))
            }, e.exports = i
        }).call(this, t("_process"))
    }, {"./analytics": 4, "./feed-poller": 9, "./log": 11, "./widget": 21, _process: 22, jQuery: 1, underscore: 3}],
    11: [function (t, e, n) {
        function i(t, e, n) {
            try {
                e(n ? JSON.stringify(t, null, 2) : "Bitcoin Widgets: " + t)
            } catch (t) {
            }
        }

        e.exports = {
            log: function (t, e) {
                i(t, console.log, e)
            }, data: function (t) {
                i(t, console.log, !0)
            }, warn: function (t, e) {
                i(t, console.warn, e)
            }, error: function (t, e) {
                i(t, console.error, e)
            }
        }
    }, {}],
    12: [function (t, e, n) {
        (function (e) {
            function n() {
                for (var t = 0; t < d.length; t++)try {
                    d[t].stylesLoaded()
                } catch (t) {
                }
            }

            function i(t) {
                r.log('Load style: "' + t + '"');
                var e = document.createElement("link");
                e.rel = "stylesheet", e.type = "text/css", e.href = t, e.media = "all", e.onload = n, document.getElementsByTagName("head")[0].appendChild(e)
            }

            var r = t("./log"), o = t("./forum-posts"), s = t("./news-stories"), a = t("./news-ticker"), l = t("./price"), u = t("./chart"), c = t("./pool"), h = e.env.BASE, d = [], f = {
                "btcwdgt-forum": o,
                "btcwdgt-news": s,
                "btcwdgt-news-ticker": a,
                "btcwdgt-price": l,
                "btcwdgt-chart": u,
                "btcwdgt-pool": c
            };
            !function () {
                e.env.BUILD.id && r.log("=== Build " + e.env.BUILD.id + " ==="), r.log("Initialize. Looking for target elements");
                var t = [];
                for (var n in f)if (f.hasOwnProperty(n)) {
                    var o = document.getElementsByClassName(n);
                    o.length > 0 && r.log('Found "' + n + '"');
                    for (var s = 0; s < o.length; s++)t.push({el: o[s], cn: f[n]})
                }
                if (0 == t.length)return void r.warn("No target elements found! Cannot create widgets.");
                var a = h + "widget.css";
                e.env.BUILD.id && (a += "?" + e.env.BUILD.id), i(a);
                for (var s = 0; s < t.length; s++) {
                    var l = t[s];
                    d.push(new l.cn(l.el))
                }
            }()
        }).call(this, t("_process"))
    }, {
        "./chart": 6,
        "./forum-posts": 10,
        "./log": 11,
        "./news-stories": 13,
        "./news-ticker": 14,
        "./pool": 15,
        "./price": 16,
        _process: 22
    }],
    13: [function (t, e, n) {
        (function (n) {
            function i(t) {
                if (l.log("Create NewsWidget"), s.call(this, t), this.rate = NaN, this.last = NaN, null != this.cur) {
                    this.key = "btcwdgt-price-" + this.cur.toLowerCase();
                    var e = d.getObj(this.key);
                    null != e && (e.rate ? this.last = e.rate : "number" == typeof e && (this.last = e));
                    var n = "price:" + this.cl;
                    u.register(n, this.processSpot.bind(this)), u.subscribe(n)
                }
                this.build(), this.el.addClass(this.postBuildClasses.join(" ")), a(c + "news.json", 6e5, o.bind(this.processFeed, this))
            }

            var r = t("jQuery"), o = t("underscore"), s = t("./widget"), a = t("./feed-poller"), l = t("./log"), u = t("./stream"), c = n.env.BASE, h = t("./analytics"), d = t("./storage");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function () {
                this.el.html('    <div class="btcwdgt-header">      <h4><a href="https://news.bitcoin.com/">Latest Bitcoin News Stories</a></h4>    </div>    <div class="btcwdgt-body">      <ul></ul>    </div>    '), this.el.addClass("btcwdgt btcwdgt-headlines"), this.campaign && r("a", this.el).each(function (t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", h.setMediumCampaign(n, "widget", "News Widget"))
                }), null != this.cur && r(".btcwdgt-body", this.el).prepend('      <div class="price">        <span>BTC/' + this.cur.toUpperCase() + '</span>        <div class="p-wrap">          <p></p>        </div>        <strong class="arrow"></strong>      </div>')
            }, i.prototype.processFeed = function (t) {
                for (var e = [], n = 0, i = 0; i < t.length && i != this.rows; i++) {
                    var o = t[i];
                    e[n++] = "<li>", e[n++] = '<a href="', e[n++] = this.campaign ? h.setMediumCampaign(o.url, "widget", "News Widget") : o.url, e[n++] = '" title="', e[n++] = o.title, e[n++] = '">', e[n++] = o.title, e[n++] = "</a>", e[n++] = "</li>"
                }
                r("ul", this.el).html(e.join(""))
            }, i.prototype.processSpot = function (t) {
                t.price && (this.rate = t.price / 100, this.updateRates())
            }, i.prototype.processRates = function (t) {
                t.rates && t.rates.usd && t.rates[this.cl] && (this.rates = t.rates, this.updateRates())
            }, i.prototype.updateRates = function () {
                isNaN(this.last) && (this.last = this.rate), this.updateDisplay(), this.last = this.rate, d.setObj(this.key, this.rate)
            }, i.prototype.updateDisplay = function () {
                var t = r("<p/>").text(this.rate.toFixed(2)), e = r(".p-wrap p:first-child", this.el).height();
                if (r(".arrow", this.el).removeClass("up down"), this.rate > this.last) {
                    r(".p-wrap", this.el).prepend(t), r(".p-wrap", this.el).attr("style", "transition: none !important; top: " + (-e + "px") + " !important"), window.setTimeout(o.bind(function () {
                        r(".p-wrap", this.el).attr("style", "top: 0 !important")
                    }, this), 50), window.setTimeout(o.bind(function () {
                        r(".p-wrap p:last-child", this.el).remove(), r(".p-wrap", this.el).attr("style", null)
                    }, this), 550);
                    var n = r(".p-wrap p:first-child", this.el), i = n.width() + r(".price span", this.el).width() + 18;
                    r(".arrow", this.el).addClass("up").attr("style", "left: " + i + "px !important;")
                }
                if (this.rate < this.last) {
                    r(".p-wrap", this.el).append(t), r(".p-wrap", this.el).attr("style", "top: " + (-e + "px !important")), window.setTimeout(o.bind(function () {
                        r(".p-wrap p:first-child", this.el).remove(), r(".p-wrap", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500), window.setTimeout(o.bind(function () {
                        r(".p-wrap", this.el).attr("style", null)
                    }, this), 1e3);
                    var n = r(".p-wrap p:last-child", this.el), i = n.width() + r(".price span", this.el).width() + 18;
                    r(".arrow", this.el).addClass("down").attr("style", "left: " + i + "px !important;")
                }
                (isNaN(this.last) || this.rate == this.last) && r(".p-wrap p", this.el).replaceWith(t)
            }, e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 4,
        "./feed-poller": 9,
        "./log": 11,
        "./storage": 18,
        "./stream": 19,
        "./widget": 21,
        _process: 22,
        jQuery: 1,
        underscore: 3
    }],
    14: [function (t, e, n) {
        (function (n) {
            function i(t) {
                l.log("Create NewsTicker"), s.call(this, t), this.stories = [], this.index = -1, this.build(), this.el.addClass(this.postBuildClasses.join(" ")), a(u + "news.json", 15e5, o.bind(this.processFeed, this)), window.setInterval(o.bind(this.showNext, this), 7500)
            }

            var r = t("jQuery"), o = t("underscore"), s = t("./widget"), a = t("./feed-poller"), l = t("./log"), u = n.env.BASE, c = t("./analytics");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function () {
                this.el.html('    <div class="btcwdgt-body">      <ul><li></li></ul>    </div>        '), this.el.addClass("btcwdgt btcwdgt-text-ticker"), this.campaign && r("a", this.el).each(function (t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", c.setMediumCampaign(n, "widget", "News Ticker Widget"))
                })
            }, i.prototype.showNext = function () {
                if (0 != this.stories.length) {
                    this.index++, this.index >= this.stories.length && (this.index = 0);
                    var t = [], e = 0, n = this.stories[this.index];
                    t[e++] = "<li>", t[e++] = '<a href="', t[e++] = n.url, t[e++] = '" title="', t[e++] = n.title, t[e++] = '">', t[e++] = n.title, t[e++] = "</a>", t[e++] = "</li>", r("ul", this.el).append(t.join(""));
                    var i = r("ul li:first-child", this.el).height();
                    r("ul", this.el).attr("style", "top: " + (-i + "px !important")), window.setTimeout(o.bind(function () {
                        r("ul li:first-child", this.el).remove(), r("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500), window.setTimeout(o.bind(function () {
                        r("ul", this.el).attr("style", null)
                    }, this), 1e3)
                }
            }, i.prototype.processFeed = function (t) {
                if (this.stories = t, this.campaign)for (var e = 0; e < this.stories.length; e++)this.stories[e].url = c.setMediumCampaign(this.stories[e].url, "widget", "News Ticker Widget");
                this.index = -1, this.showNext()
            }, e.exports = i
        }).call(this, t("_process"))
    }, {"./analytics": 4, "./feed-poller": 9, "./log": 11, "./widget": 21, _process: 22, jQuery: 1, underscore: 3}],
    15: [function (t, e, n) {
        (function (n) {
            function i(t) {
                l.log("Create PoolWidget"), s.call(this, t), this.last = {
                    terahash: NaN,
                    stamp: 0
                }, this.key = "btcwdgt-pool";
                var e = h.getObj(this.key);
                null != e && e.terahash && (this.last.terahash = e.terahash), this.build(), this.el.addClass(this.postBuildClasses.join(" ")), a(u + "pool.json", 6e5, o.bind(this.processData, this))
            }

            var r = t("jQuery"), o = t("underscore"), s = t("./widget"), a = t("./feed-poller"), l = t("./log"), u = n.env.BASE, c = t("./analytics"), h = t("./storage"), d = t("./util");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function () {
                this.el.html('    <div class="btcwdgt-body">      <ul><li>&mdash;</li></ul>      <strong class="arrow"></strong>      <span></span>    </div>        '), this.el.addClass("btcwdgt btcwdgt-s-pool btcwdgt-s-price btcwdgt-text-ticker"), this.campaign && r("a", this.el).each(function (t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", c.setMediumCampaign(n, "widget", "Pool Widget"))
                })
            }, i.prototype.processData = function (t) {
                if (t.stamp && t.terahash) {
                    var e = Math.pow(10, 3 * Math.floor(Math.log10(t.terahash) / 3)), n = t.terahash / e, i = r("<li/>").text(n.toFixed(3 - Math.ceil(Math.log10(n)))), s = r("ul li:first-child", this.el).height();
                    if (r(".arrow", this.el).removeClass("up down"), t.terahash > this.last.terahash) {
                        r("ul", this.el).prepend(i), r("ul", this.el).attr("style", "transition: none !important; top: " + (-s + "px") + " !important"), window.setTimeout(o.bind(function () {
                            r("ul", this.el).attr("style", "top: 0 !important")
                        }, this), 50), window.setTimeout(o.bind(function () {
                            r("ul li:last-child", this.el).remove(), r("ul", this.el).attr("style", null)
                        }, this), 550);
                        var a = r("li:first-child", this.el), l = a.width() + 16;
                        r(".arrow", this.el).addClass("up").attr("style", "left: " + l + "px !important;")
                    }
                    if (t.terahash < this.last.terahash) {
                        r("ul", this.el).append(i), r("ul", this.el).attr("style", "top: " + (-s + "px !important")), window.setTimeout(o.bind(function () {
                            r("ul li:first-child", this.el).remove(), r("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                        }, this), 500), window.setTimeout(o.bind(function () {
                            r("ul", this.el).attr("style", null)
                        }, this), 1e3);
                        var a = r("li:last-child", this.el), l = a.width() + 16;
                        r(".arrow", this.el).addClass("down").attr("style", "left: " + l + "px !important;")
                    }
                    (isNaN(this.last.terahash) || t.terahash == this.last.terahash) && r("li", this.el).replaceWith(i), r(".btcwdgt-body span", this.el).html(d.siPrefix(t.terahash, 12) + "Hash/s"), this.last = t, h.setObj(this.key, this.last)
                }
            }, e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 4,
        "./feed-poller": 9,
        "./log": 11,
        "./storage": 18,
        "./util": 20,
        "./widget": 21,
        _process: 22,
        jQuery: 1,
        underscore: 3
    }],
    16: [function (t, e, n) {
        (function (n) {
            function i(t) {
                a.log("Create PriceWidget"), s.call(this, t), this.rate = NaN, this.last = NaN, null == this.cur && (this.cur = "USD", this.cl = "usd"), this.key = "btcwdgt-price-" + this.cl;
                var e = c.getObj(this.key);
                null != e && (e.rate ? this.last = e.rate : "number" == typeof e && (this.last = e)), this.build(), this.el.addClass(this.postBuildClasses.join(" "));
                var n = "price:" + this.cl;
                l.register(n, this.processSpot.bind(this)), l.subscribe(n)
            }

            var r = t("jQuery"), o = t("underscore"), s = t("./widget"), a = t("./log"), l = t("./stream"), u = (n.env.BASE, t("./analytics")), c = t("./storage");
            i.prototype = Object.create(s.prototype), i.prototype.constructor = i, i.prototype.build = function () {
                this.el.html('    <div class="btcwdgt-body">      <ul><li>&mdash;</li></ul>      <strong class="arrow"></strong>      <span></span>    </div>       '), this.el.addClass("btcwdgt btcwdgt-s-price btcwdgt-text-ticker"), this.campaign && r("a", this.el).each(function (t, e) {
                    var n = r(e).attr("href");
                    r(e).attr("href", u.setMediumCampaign(n, "widget", "Price Widget"))
                }), r(".btcwdgt-body span", this.el).html("BTC/" + this.cur)
            }, i.prototype.processSpot = function (t) {
                t.price && (this.rate = t.price / 100, this.updateRates())
            }, i.prototype.updateRates = function () {
                isNaN(this.last) && (this.last = this.rate), this.updateDisplay(), this.last = this.rate, c.setObj(this.key, this.rate)
            }, i.prototype.updateDisplay = function () {
                var t = r("<li/>").text(this.rate.toFixed(2)), e = r("ul li:first-child", this.el).height();
                if (r(".arrow", this.el).removeClass("up down"), this.rate > this.last) {
                    r("ul", this.el).prepend(t), r("ul", this.el).attr("style", "transition: none !important; top: " + (-e + "px") + " !important"), window.setTimeout(o.bind(function () {
                        r("ul", this.el).attr("style", "top: 0 !important")
                    }, this), 50), window.setTimeout(o.bind(function () {
                        r("ul li:last-child", this.el).remove(), r("ul", this.el).attr("style", null)
                    }, this), 550);
                    var n = r("li:first-child", this.el), i = n.width() + 16;
                    r(".arrow", this.el).addClass("up").attr("style", "left: " + i + "px !important;")
                }
                if (this.rate < this.last) {
                    r("ul", this.el).append(t), r("ul", this.el).attr("style", "top: " + (-e + "px !important")), window.setTimeout(o.bind(function () {
                        r("ul li:first-child", this.el).remove(), r("ul", this.el).attr("style", "transition: none !important; top: 0 !important")
                    }, this), 500), window.setTimeout(o.bind(function () {
                        r("ul", this.el).attr("style", null)
                    }, this), 1e3);
                    var n = r("li:last-child", this.el), i = n.width() + 16;
                    r(".arrow", this.el).addClass("down").attr("style", "left: " + i + "px !important;")
                }
                (isNaN(this.last) || this.rate == this.last) && r("li", this.el).replaceWith(t)
            }, e.exports = i
        }).call(this, t("_process"))
    }, {
        "./analytics": 4,
        "./log": 11,
        "./storage": 18,
        "./stream": 19,
        "./widget": 21,
        _process: 22,
        jQuery: 1,
        underscore: 3
    }],
    17: [function (t, e, n) {
        (function (e) {
            e.env.BASE = "https://widgets.bitcoin.com/", e.env.BCX = "https://index.bitcoin.com/api/v0/", e.env.WS = "wss://index.bitcoin.com/ws", e.env.BUILD = t("./build"), t("./main")
        }).call(this, t("_process"))
    }, {"./build": 5, "./main": 12, _process: 22}],
    18: [function (t, e, n) {
        function i() {
            return !!(window.localStorage && "localStorage" in window)
        }

        function r(t, e) {
            var n = i() ? window.localStorage : l;
            n[t] = e
        }

        function o(t) {
            var e = i() ? window.localStorage : l;
            return e[t]
        }

        function s(t, e) {
            r(t, JSON.stringify(e))
        }

        function a(t) {
            var e = o(t);
            try {
                return JSON.parse(e)
            } catch (t) {
                return null
            }
        }

        var l = {};
        e.exports = {available: i, get: o, set: r, getObj: a, setObj: s}
    }, {}],
    19: [function (t, e, n) {
        (function (t) {
            function n() {
                this.callbacks = {}, this.last = {}, this.subscriptions = {}, this.socket = null
            }

            function i(t, e) {
                window[s].register(t, e), window[s].connect()
            }

            function r(t) {
                window[s].subscribe(t)
            }

            var o = t.env.WS;
            n.prototype.register = function (t, e) {
                if (this.callbacks.hasOwnProperty(t) || (this.callbacks[t] = []), "function" == typeof e && (this.callbacks[t].push(e), this.last[t]))try {
                    e(this.last[t])
                } catch (t) {
                }
            }, n.prototype.subscribe = function (t) {
                this.subscriptions[t] || (this.doSubscribe(t), this.subscriptions[t] = (new Date).getTime())
            }, n.prototype.doSubscribe = function (t) {
                try {
                    this.socket.send(this.subscribeMessage(t))
                } catch (t) {
                }
            }, n.prototype.subscribeMessage = function (t) {
                return JSON.stringify({op: "subscribe", channel: t})
            }, n.prototype.dispatch = function (t, e) {
                if (this.last[t] = e, this.callbacks.hasOwnProperty(t))for (var n = 0; n < this.callbacks[t].length; n++)try {
                    this.callbacks[t][n](e)
                } catch (t) {
                }
            }, n.prototype.connect = function () {
                if (null === this.socket)try {
                    this.socket = new WebSocket(o), this.socket.onopen = this.onOpen.bind(this), this.socket.onclose = this.onClose.bind(this), this.socket.onmessage = this.onMessage.bind(this)
                } catch (t) {
                }
            }, n.prototype.reconnect = function () {
                try {
                    this.socket.readyState != WebSocket.CLOSED && this.socket.close()
                } catch (t) {
                }
                this.socket = null, window.setTimeout(this.connect.bind(this), 1e3 * (15 + 15 * Math.random()))
            }, n.prototype.onOpen = function () {
                for (var t in this.subscriptions)this.subscriptions[t] && this.doSubscribe(t)
            }, n.prototype.onClose = function () {
                this.reconnect()
            }, n.prototype.onMessage = function (t) {
                try {
                    var e = JSON.parse(t.data);
                    e.hasOwnProperty("op") && e.hasOwnProperty("data") && this.dispatch(e.op, e.data)
                } catch (t) {
                }
            };
            var s = "BitcoinComStream";
            s in window && window.hasOwnProperty(s) || (window[s] = new n), e.exports = {register: i, subscribe: r}
        }).call(this, t("_process"))
    }, {_process: 22}],
    20: [function (t, e, n) {
        function i(t, e) {
            e = e || 0;
            var n = 3 * Math.floor(Math.log10(t) / 3) + e;
            switch (n) {
                case 24:
                    return "Y";
                case 21:
                    return "Z";
                case 18:
                    return "E";
                case 15:
                    return "P";
                case 12:
                    return "T";
                case 9:
                    return "G";
                case 6:
                    return "M";
                case 3:
                    return "k";
                case 0:
                    return "";
                default:
                    return "10<sup>" + n + "</sup>&thinsp;"
            }
        }

        function r(t) {
            var e = Math.pow(10, 3 * Math.floor(Math.log10(t) / 3)), n = t / e, i = 3 - Math.ceil(Math.log10(n));
            return n.toFixed(i) + o(t)
        }

        function o(t) {
            var e = 3 * Math.floor(Math.log10(t) / 3);
            switch (e) {
                case 15:
                    return "Q";
                case 12:
                    return "T";
                case 9:
                    return "B";
                case 6:
                    return "M";
                case 3:
                    return "k";
                case 0:
                    return "";
                default:
                    return "&times;10<sup>" + e + "</sup>"
            }
        }

        Math.log10 = Math.log10 || function (t) {
                return Math.log(t) / Math.log(10)
            }, e.exports = {compactDisp: r, scaleAbbr: o, siPrefix: i}
    }, {}],
    21: [function (t, e, n) {
        function i(t) {
            this.el = r(t), this.campaign = !("off" == this.el.attr("bw-campaign")), this.cur = null, this.cl = null;
            var e = this.el.attr("bw-cur");
            "string" == typeof e && o.available(e) && (a.log("Got currency: " + e.toUpperCase()), this.cur = e.toUpperCase(), this.cl = e.toLowerCase()), this.rows = 5;
            var n = parseInt(this.el.attr("bw-entries"), 10);
            switch (isNaN(n) || (this.rows = Math.max(1, Math.min(10, n))), this.postBuildClasses = [], "true" == this.el.attr("bw-noshadow") && this.postBuildClasses.push("btcwdgt-noshadow"), this.colors = s.default, this.el.attr("bw-theme")) {
                case"light":
                    this.postBuildClasses.push("btcwdgt-light"), this.colors = s.light
            }
            this.postBuildClasses.push("btcwdgt-clean")
        }

        var r = t("jQuery"), o = t("./currencies"), s = t("./colors"), a = t("./log");
        e.exports = i
    }, {"./colors": 7, "./currencies": 8, "./log": 11, jQuery: 1}],
    22: [function (t, e, n) {
        function i() {
            c = !1, a.length ? u = a.concat(u) : h = -1, u.length && r()
        }

        function r() {
            if (!c) {
                var t = setTimeout(i);
                c = !0;
                for (var e = u.length; e;) {
                    for (a = u, u = []; ++h < e;)a && a[h].run();
                    h = -1, e = u.length
                }
                a = null, c = !1, clearTimeout(t)
            }
        }

        function o(t, e) {
            this.fun = t, this.array = e
        }

        function s() {
        }

        var a, l = e.exports = {}, u = [], c = !1, h = -1;
        l.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
            u.push(new o(t, e)), 1 !== u.length || c || setTimeout(r, 0)
        }, o.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = s, l.addListener = s, l.once = s, l.off = s, l.removeListener = s, l.removeAllListeners = s, l.emit = s, l.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, l.cwd = function () {
            return "/"
        }, l.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, l.umask = function () {
            return 0
        }
    }, {}],
    23: [function (t, e, n) {
        (function (t) {
            !function (i) {
                function r(t) {
                    throw RangeError(A[t])
                }

                function o(t, e) {
                    for (var n = t.length, i = []; n--;)i[n] = e(t[n]);
                    return i
                }

                function s(t, e) {
                    var n = t.split("@"), i = "";
                    n.length > 1 && (i = n[0] + "@", t = n[1]), t = t.replace(O, ".");
                    var r = t.split("."), s = o(r, e).join(".");
                    return i + s
                }

                function a(t) {
                    for (var e, n, i = [], r = 0, o = t.length; r < o;)e = t.charCodeAt(r++), e >= 55296 && e <= 56319 && r < o ? (n = t.charCodeAt(r++), 56320 == (64512 & n) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536) : (i.push(e), r--)) : i.push(e);
                    return i
                }

                function l(t) {
                    return o(t, function (t) {
                        var e = "";
                        return t > 65535 && (t -= 65536, e += Y(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += Y(t)
                    }).join("")
                }

                function u(t) {
                    return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : _
                }

                function c(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                }

                function h(t, e, n) {
                    var i = 0;
                    for (t = n ? L(t / C) : t >> 1, t += L(t / e); t > P * S >> 1; i += _)t = L(t / P);
                    return L(i + (P + 1) * t / (t + T))
                }

                function d(t) {
                    var e, n, i, o, s, a, c, d, f, p, m = [], g = t.length, y = 0, v = M, w = D;
                    for (n = t.lastIndexOf(N), n < 0 && (n = 0), i = 0; i < n; ++i)t.charCodeAt(i) >= 128 && r("not-basic"), m.push(t.charCodeAt(i));
                    for (o = n > 0 ? n + 1 : 0; o < g;) {
                        for (s = y, a = 1, c = _; o >= g && r("invalid-input"), d = u(t.charCodeAt(o++)), (d >= _ || d > L((x - y) / a)) && r("overflow"), y += d * a, f = c <= w ? k : c >= w + S ? S : c - w, !(d < f); c += _)p = _ - f, a > L(x / p) && r("overflow"), a *= p;
                        e = m.length + 1, w = h(y - s, e, 0 == s), L(y / e) > x - v && r("overflow"), v += L(y / e), y %= e, m.splice(y++, 0, v)
                    }
                    return l(m)
                }

                function f(t) {
                    var e, n, i, o, s, l, u, d, f, p, m, g, y, v, w, b = [];
                    for (t = a(t), g = t.length, e = M, n = 0, s = D, l = 0; l < g; ++l)m = t[l], m < 128 && b.push(Y(m));
                    for (i = o = b.length, o && b.push(N); i < g;) {
                        for (u = x, l = 0; l < g; ++l)m = t[l], m >= e && m < u && (u = m);
                        for (y = i + 1, u - e > L((x - n) / y) && r("overflow"), n += (u - e) * y, e = u, l = 0; l < g; ++l)if (m = t[l], m < e && ++n > x && r("overflow"), m == e) {
                            for (d = n, f = _; p = f <= s ? k : f >= s + S ? S : f - s, !(d < p); f += _)w = d - p, v = _ - p, b.push(Y(c(p + w % v, 0))), d = L(w / v);
                            b.push(Y(c(d, 0))), s = h(n, y, i == o), n = 0, ++i
                        }
                        ++n, ++e
                    }
                    return b.join("")
                }

                function p(t) {
                    return s(t, function (t) {
                        return j.test(t) ? d(t.slice(4).toLowerCase()) : t
                    })
                }

                function m(t) {
                    return s(t, function (t) {
                        return E.test(t) ? "xn--" + f(t) : t
                    })
                }

                var g = "object" == typeof n && n && !n.nodeType && n, y = "object" == typeof e && e && !e.nodeType && e, v = "object" == typeof t && t;
                v.global !== v && v.window !== v && v.self !== v || (i = v);
                var w, b, x = 2147483647, _ = 36, k = 1, S = 26, T = 38, C = 700, D = 72, M = 128, N = "-", j = /^xn--/, E = /[^\x20-\x7E]/, O = /[\x2E\u3002\uFF0E\uFF61]/g, A = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, P = _ - k, L = Math.floor, Y = String.fromCharCode;
                if (w = {
                        version: "1.3.2",
                        ucs2: {decode: a, encode: l},
                        decode: d,
                        encode: f,
                        toASCII: m,
                        toUnicode: p
                    }, "function" == typeof define && "object" == typeof define.amd && define.amd)define("punycode", function () {
                    return w
                }); else if (g && y)if (e.exports == g)y.exports = w; else for (b in w)w.hasOwnProperty(b) && (g[b] = w[b]); else i.punycode = w
            }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    24: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        e.exports = function (t, e, n, o) {
            e = e || "&", n = n || "=";
            var s = {};
            if ("string" != typeof t || 0 === t.length)return s;
            var a = /\+/g;
            t = t.split(e);
            var l = 1e3;
            o && "number" == typeof o.maxKeys && (l = o.maxKeys);
            var u = t.length;
            l > 0 && u > l && (u = l);
            for (var c = 0; c < u; ++c) {
                var h, d, f, p, m = t[c].replace(a, "%20"), g = m.indexOf(n);
                g >= 0 ? (h = m.substr(0, g), d = m.substr(g + 1)) : (h = m, d = ""), f = decodeURIComponent(h), p = decodeURIComponent(d), i(s, f) ? r(s[f]) ? s[f].push(p) : s[f] = [s[f], p] : s[f] = p
            }
            return s
        };
        var r = Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
    }, {}],
    25: [function (t, e, n) {
        "use strict";
        function i(t, e) {
            if (t.map)return t.map(e);
            for (var n = [], i = 0; i < t.length; i++)n.push(e(t[i], i));
            return n
        }

        var r = function (t) {
            switch (typeof t) {
                case"string":
                    return t;
                case"boolean":
                    return t ? "true" : "false";
                case"number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
            }
        };
        e.exports = function (t, e, n, a) {
            return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? i(s(t), function (s) {
                var a = encodeURIComponent(r(s)) + n;
                return o(t[s]) ? i(t[s], function (t) {
                    return a + encodeURIComponent(r(t))
                }).join(e) : a + encodeURIComponent(r(t[s]))
            }).join(e) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(t)) : ""
        };
        var o = Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, s = Object.keys || function (t) {
                var e = [];
                for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e
            }
    }, {}],
    26: [function (t, e, n) {
        "use strict";
        n.decode = n.parse = t("./decode"), n.encode = n.stringify = t("./encode")
    }, {"./decode": 24, "./encode": 25}],
    27: [function (t, e, n) {
        function i() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function r(t, e, n) {
            if (t && u(t) && t instanceof i)return t;
            var r = new i;
            return r.parse(t, e, n), r
        }

        function o(t) {
            return l(t) && (t = r(t)), t instanceof i ? t.format() : i.prototype.format.call(t)
        }

        function s(t, e) {
            return r(t, !1, !0).resolve(e)
        }

        function a(t, e) {
            return t ? r(t, !1, !0).resolveObject(e) : e
        }

        function l(t) {
            return "string" == typeof t
        }

        function u(t) {
            return "object" == typeof t && null !== t
        }

        function c(t) {
            return null === t
        }

        function h(t) {
            return null == t
        }

        var d = t("punycode");
        n.parse = r, n.resolve = s, n.resolveObject = a, n.format = o, n.Url = i;
        var f = /^([a-z0-9.+-]+:)/i, p = /:[0-9]*$/, m = ["<", ">", '"', "`", " ", "\r", "\n", "\t"], g = ["{", "}", "|", "\\", "^", "`"].concat(m), y = ["'"].concat(g), v = ["%", "/", "?", ";", "#"].concat(y), w = ["/", "?", "#"], b = 255, x = /^[a-z0-9A-Z_-]{0,63}$/, _ = /^([a-z0-9A-Z_-]{0,63})(.*)$/, k = {
            javascript: !0,
            "javascript:": !0
        }, S = {javascript: !0, "javascript:": !0}, T = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        }, C = t("querystring");
        i.prototype.parse = function (t, e, n) {
            if (!l(t))throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
            var i = t;
            i = i.trim();
            var r = f.exec(i);
            if (r) {
                r = r[0];
                var o = r.toLowerCase();
                this.protocol = o, i = i.substr(r.length)
            }
            if (n || r || i.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var s = "//" === i.substr(0, 2);
                !s || r && S[r] || (i = i.substr(2), this.slashes = !0)
            }
            if (!S[r] && (s || r && !T[r])) {
                for (var a = -1, u = 0; u < w.length; u++) {
                    var c = i.indexOf(w[u]);
                    c !== -1 && (a === -1 || c < a) && (a = c)
                }
                var h, p;
                p = a === -1 ? i.lastIndexOf("@") : i.lastIndexOf("@", a), p !== -1 && (h = i.slice(0, p), i = i.slice(p + 1), this.auth = decodeURIComponent(h)), a = -1;
                for (var u = 0; u < v.length; u++) {
                    var c = i.indexOf(v[u]);
                    c !== -1 && (a === -1 || c < a) && (a = c)
                }
                a === -1 && (a = i.length), this.host = i.slice(0, a), i = i.slice(a), this.parseHost(), this.hostname = this.hostname || "";
                var m = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!m)for (var g = this.hostname.split(/\./), u = 0, D = g.length; u < D; u++) {
                    var M = g[u];
                    if (M && !M.match(x)) {
                        for (var N = "", j = 0, E = M.length; j < E; j++)N += M.charCodeAt(j) > 127 ? "x" : M[j];
                        if (!N.match(x)) {
                            var O = g.slice(0, u), A = g.slice(u + 1), P = M.match(_);
                            P && (O.push(P[1]), A.unshift(P[2])), A.length && (i = "/" + A.join(".") + i), this.hostname = O.join(".");
                            break
                        }
                    }
                }
                if (this.hostname.length > b ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !m) {
                    for (var L = this.hostname.split("."), Y = [], u = 0; u < L.length; ++u) {
                        var F = L[u];
                        Y.push(F.match(/[^A-Za-z0-9_-]/) ? "xn--" + d.encode(F) : F)
                    }
                    this.hostname = Y.join(".")
                }
                var R = this.port ? ":" + this.port : "", H = this.hostname || "";
                this.host = H + R, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i))
            }
            if (!k[o])for (var u = 0, D = y.length; u < D; u++) {
                var W = y[u], q = encodeURIComponent(W);
                q === W && (q = escape(W)), i = i.split(W).join(q)
            }
            var I = i.indexOf("#");
            I !== -1 && (this.hash = i.substr(I), i = i.slice(0, I));
            var B = i.indexOf("?");
            if (B !== -1 ? (this.search = i.substr(B), this.query = i.substr(B + 1), e && (this.query = C.parse(this.query)), i = i.slice(0, B)) : e && (this.search = "", this.query = {}), i && (this.pathname = i), T[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var R = this.pathname || "", F = this.search || "";
                this.path = R + F
            }
            return this.href = this.format(), this
        }, i.prototype.format = function () {
            var t = this.auth || "";
            t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
            var e = this.protocol || "", n = this.pathname || "", i = this.hash || "", r = !1, o = "";
            this.host ? r = t + this.host : this.hostname && (r = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && u(this.query) && Object.keys(this.query).length && (o = C.stringify(this.query));
            var s = this.search || o && "?" + o || "";
            return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || T[e]) && r !== !1 ? (r = "//" + (r || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), n = n.replace(/[?#]/g, function (t) {
                return encodeURIComponent(t)
            }), s = s.replace("#", "%23"), e + r + n + s + i
        }, i.prototype.resolve = function (t) {
            return this.resolveObject(r(t, !1, !0)).format()
        }, i.prototype.resolveObject = function (t) {
            if (l(t)) {
                var e = new i;
                e.parse(t, !1, !0), t = e
            }
            var n = new i;
            if (Object.keys(this).forEach(function (t) {
                    n[t] = this[t]
                }, this), n.hash = t.hash, "" === t.href)return n.href = n.format(), n;
            if (t.slashes && !t.protocol)return Object.keys(t).forEach(function (e) {
                "protocol" !== e && (n[e] = t[e])
            }), T[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
            if (t.protocol && t.protocol !== n.protocol) {
                if (!T[t.protocol])return Object.keys(t).forEach(function (e) {
                    n[e] = t[e]
                }), n.href = n.format(), n;
                if (n.protocol = t.protocol, t.host || S[t.protocol])n.pathname = t.pathname; else {
                    for (var r = (t.pathname || "").split("/"); r.length && !(t.host = r.shift()););
                    t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== r[0] && r.unshift(""), r.length < 2 && r.unshift(""), n.pathname = r.join("/")
                }
                if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                    var o = n.pathname || "", s = n.search || "";
                    n.path = o + s
                }
                return n.slashes = n.slashes || t.slashes, n.href = n.format(), n
            }
            var a = n.pathname && "/" === n.pathname.charAt(0), u = t.host || t.pathname && "/" === t.pathname.charAt(0), d = u || a || n.host && t.pathname, f = d, p = n.pathname && n.pathname.split("/") || [], r = t.pathname && t.pathname.split("/") || [], m = n.protocol && !T[n.protocol];
            if (m && (n.hostname = "", n.port = null, n.host && ("" === p[0] ? p[0] = n.host : p.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === r[0] ? r[0] = t.host : r.unshift(t.host)), t.host = null), d = d && ("" === r[0] || "" === p[0])), u)n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, p = r; else if (r.length)p || (p = []), p.pop(), p = p.concat(r), n.search = t.search, n.query = t.query; else if (!h(t.search)) {
                if (m) {
                    n.hostname = n.host = p.shift();
                    var g = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                    g && (n.auth = g.shift(), n.host = n.hostname = g.shift())
                }
                return n.search = t.search, n.query = t.query, c(n.pathname) && c(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
            }
            if (!p.length)return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
            for (var y = p.slice(-1)[0], v = (n.host || t.host) && ("." === y || ".." === y) || "" === y, w = 0, b = p.length; b >= 0; b--)y = p[b], "." == y ? p.splice(b, 1) : ".." === y ? (p.splice(b, 1), w++) : w && (p.splice(b, 1), w--);
            if (!d && !f)for (; w--; w)p.unshift("..");
            !d || "" === p[0] || p[0] && "/" === p[0].charAt(0) || p.unshift(""), v && "/" !== p.join("/").substr(-1) && p.push("");
            var x = "" === p[0] || p[0] && "/" === p[0].charAt(0);
            if (m) {
                n.hostname = n.host = x ? "" : p.length ? p.shift() : "";
                var g = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                g && (n.auth = g.shift(), n.host = n.hostname = g.shift())
            }
            return d = d || n.host && p.length, d && !x && p.unshift(""), p.length ? n.pathname = p.join("/") : (n.pathname = null, n.path = null), c(n.pathname) && c(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n
        }, i.prototype.parseHost = function () {
            var t = this.host, e = p.exec(t);
            e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
        }
    }, {punycode: 23, querystring: 26}]
}, {}, [17]);
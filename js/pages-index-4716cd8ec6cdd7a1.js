(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    91491: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(64141);
        },
      ]);
    },
    1762: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return d;
        },
      });
      var l = n(52322),
        o = n(72779),
        r = n.n(o),
        a = n(17636),
        i = (n(80960), n(96577)),
        s = n(74713),
        c = n.n(s),
        d = function (e) {
          var t = e.heroStartpage,
            n = t.headline,
            o = t.subheadline,
            s = t.hasAction,
            d = t.actions,
            u = t.media,
            m = null !== u && void 0 !== u ? u : {},
            f = m.url,
            x = m.alt,
            g = m.focalPoint,
            p = null !== g && void 0 !== g ? g : { x: 0.5, y: 0.5 },
            h = p.x,
            v = p.y;
          return (0, l.jsx)("div", {
            className: "w-full bg-spacegrey",
            children: (0, l.jsxs)("div", {
              className:
                "pb-64 lg:pb-120 pt-112 md:pt-160 lg:pt-180 xl:pt-200 roq-layout dark",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-1",
                  children: [
                    (0, l.jsx)("h1", {
                      className: r()(
                        c().headline,
                        "font-extrabold text-7/2xl md:text-7/2xl lg:text-heading xl:text-5xl text-center lg:text-left text-color font-display leading-none"
                      ),
                      dangerouslySetInnerHTML: { __html: n },
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "mt-24 md:mt-32 text-base text-center lg:text-left md:text-lg lg:text-xl text-color",
                      dangerouslySetInnerHTML: { __html: o },
                    }),
                    s
                      ? (0, l.jsx)("div", {
                          className:
                            "mt-24 md:mt-32 flex items-center justify-center lg:justify-start gap-12 md:gap-16 flex-wrap",
                          children: d.map(function (e) {
                            return (0, l.jsx)(a.vK, { record: e }, e.id);
                          }),
                        })
                      : null,
                  ],
                }),
                (0, l.jsx)("div", {
                  className:
                    "col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 lg:col-start-8 mt-24 lg:mt-0",
                  children: (0, l.jsx)("div", {
                    className: "image-container lg:h-full",
                    children: (0, l.jsx)(i.default, {
                      src: f,
                      alt: x,
                      layout: "fill",
                      objectFit: "cover",
                      className: "image-fill rounded-4",
                      priority: !0,
                      objectPosition: g
                        ? "".concat(100 * h, "% ").concat(100 * v, "%")
                        : void 0,
                      placeholder: "blur",
                      blurDataURL:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
                    }),
                  }),
                }),
              ],
            }),
          });
        };
    },
    64141: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return u;
          },
          default: function () {
            return m;
          },
        });
      var l = n(52322),
        o = n(33652),
        r = n(18135),
        a = n(69065),
        i = n(17636),
        s = n(1762);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            l.forEach(function (t) {
              c(e, t, n[t]);
            });
        }
        return e;
      }
      var u = !0;
      function m(e) {
        var t,
          n,
          c = e.datocms,
          u = (0, r.L)(c).data,
          m = u.start,
          f = m.content,
          x = m.heroStartpage,
          g = m.seoSettings,
          p = m.seoKeywords,
          h = m.seoRobotsEnabled,
          v = u.header,
          A = u.footer,
          b = {
            title:
              null !== (n = null === g || void 0 === g ? void 0 : g.title) &&
              void 0 !== n
                ? n
                : "Home",
            description: null === g || void 0 === g ? void 0 : g.description,
            keywords: p,
            image:
              null === g ||
              void 0 === g ||
              null === (t = g.image) ||
              void 0 === t
                ? void 0
                : t.url,
            robots: h ? "index, follow" : "noindex, nofollow",
          };
        return (0, l.jsxs)(o.G, {
          header: v,
          footer: A,
          headerTheme: "dark",
          footerTheme: "dark",
          children: [
            (0, l.jsx)(a.Z, d({}, b)),
            x && (0, l.jsx)(s.I, { heroStartpage: x[0] }),
            f &&
              (0, l.jsx)("div", {
                className: "mt-80 lg:mt-120 xl:mt-144",
                children: (0, l.jsx)(i.ZP, { content: f }),
              }),
          ],
        });
      }
    },
    74713: function (e) {
      e.exports = { headline: "mainHero_headline__iQ9dH" };
    },
  },
  function (e) {
    e.O(0, [774, 720, 589, 609, 751, 888, 179], function () {
      return (t = 91491), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
s;

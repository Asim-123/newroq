(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [97],
  {
    98999: function (e, l, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[sitemap]/[slug]",
        function () {
          return o(28463);
        },
      ]);
    },
    1762: function (e, l, o) {
      "use strict";
      o.d(l, {
        I: function () {
          return u;
        },
      });
      var t = o(52322),
        n = o(72779),
        i = o.n(n),
        d = o(17636),
        s = (o(80960), o(96577)),
        a = o(74713),
        r = o.n(a),
        u = function (e) {
          var l = e.heroStartpage,
            o = l.headline,
            n = l.subheadline,
            a = l.hasAction,
            u = l.actions,
            c = l.media,
            v = null !== c && void 0 !== c ? c : {},
            m = v.url,
            h = v.alt,
            x = v.focalPoint,
            g = null !== x && void 0 !== x ? x : { x: 0.5, y: 0.5 },
            p = g.x,
            f = g.y;
          return (0, t.jsx)("div", {
            className: "w-full bg-spacegrey",
            children: (0, t.jsxs)("div", {
              className:
                "pb-64 lg:pb-120 pt-112 md:pt-160 lg:pt-180 xl:pt-200 roq-layout dark",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-1",
                  children: [
                    (0, t.jsx)("h1", {
                      className: i()(
                        r().headline,
                        "font-extrabold text-7/2xl md:text-7/2xl lg:text-heading xl:text-5xl text-center lg:text-left text-color font-display leading-none"
                      ),
                      dangerouslySetInnerHTML: { __html: o },
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "mt-24 md:mt-32 text-base text-center lg:text-left md:text-lg lg:text-xl text-color",
                      dangerouslySetInnerHTML: { __html: n },
                    }),
                    a
                      ? (0, t.jsx)("div", {
                          className:
                            "mt-24 md:mt-32 flex items-center justify-center lg:justify-start gap-12 md:gap-16 flex-wrap",
                          children: u.map(function (e) {
                            return (0, t.jsx)(d.vK, { record: e }, e.id);
                          }),
                        })
                      : null,
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "col-span-12 md:col-span-10 md:col-start-2 lg:col-span-5 lg:col-start-8 mt-24 lg:mt-0",
                  children: (0, t.jsx)("div", {
                    className: "image-container lg:h-full",
                    children: (0, t.jsx)(s.default, {
                      src: m,
                      alt: h,
                      layout: "fill",
                      objectFit: "cover",
                      className: "image-fill rounded-4",
                      priority: !0,
                      objectPosition: x
                        ? "".concat(100 * p, "% ").concat(100 * f, "%")
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
    28463: function (e, l, o) {
      "use strict";
      o.r(l),
        o.d(l, {
          __N_SSG: function () {
            return T;
          },
          default: function () {
            return Z;
          },
        });
      var t = o(52322),
        n = o(18135),
        i = o(33652),
        d = o(69065),
        s = o(17636),
        a = o(72779),
        r = o.n(a),
        u = o(61519),
        c = o(96577),
        v = o(92490),
        m = o(80275),
        h = o(65875),
        x = o(76237);
      function g(e, l, o) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = o),
          e
        );
      }
      function p(e) {
        for (var l = 1; l < arguments.length; l++) {
          var o = null != arguments[l] ? arguments[l] : {},
            t = Object.keys(o);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            t.forEach(function (l) {
              g(e, l, o[l]);
            });
        }
        return e;
      }
      var f = {
          desktop: { width: 560, height: 528 },
          laptop: { width: 468, height: 456 },
          tablet: { width: 348, height: 296 },
          mobile: { width: 359, height: 220 },
        },
        A = function (e) {
          var l = e.media,
            o = e.className,
            n = (0, h.ac)("(min-width: 1440px)"),
            i = (0, h.ac)("(min-width: 1152px)"),
            d = (0, h.ac)("(min-width: 768px)"),
            s = null !== l && void 0 !== l ? l : {},
            a = s.url,
            u = s.alt,
            m = s.width,
            x = s.height,
            g = s.video,
            A = s.focalPoint,
            b = n ? f.desktop : i ? f.laptop : d ? f.tablet : f.mobile,
            j = b.height > x && b.width > m ? "contain" : "cover",
            y = null !== A && void 0 !== A ? A : { x: 0.5, y: 0.5 },
            w = y.x,
            C = y.y;
          return (0, t.jsx)("div", {
            className: r()(
              "col-span-12 md:col-span-6 relative h-220 rounded-4 md:mt-0 md:h-296 lg:h-456 xl:h-528",
              o
            ),
            children: g
              ? (0, t.jsx)(v.Z, p({ video: g }, f))
              : (0, t.jsx)(c.default, {
                  src: a,
                  alt: u,
                  layout: "fill",
                  objectFit: j,
                  priority: !0,
                  objectPosition: A
                    ? "".concat(100 * w, "% ").concat(100 * C, "%")
                    : void 0,
                  placeholder: "blur",
                  blurDataURL:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
                }),
          });
        },
        b = function (e) {
          var l = e.id,
            o = e.heroTags;
          return (0, t.jsx)(s.Cf, {
            showStartDash: !0,
            record: {
              id: "hero-tags-".concat(l),
              quotes: o.map(function (e) {
                return { id: "hero-tag-".concat(e), value: e };
              }),
              color: { hex: "#ACAAC0" },
            },
            className: "flex items-center text-base font-medium lg:text-lg",
          });
        },
        j = function (e) {
          var l = e.hero,
            o = e.theme,
            n = null !== l && void 0 !== l ? l : {},
            i = n.headline,
            d = n.id,
            s = n.subheadline,
            a = n.tags,
            v = n.logo,
            h = n.media,
            g = n.cta,
            p = n.headlineColor,
            f = null !== v && void 0 !== v ? v : {},
            j = f.url,
            y = f.alt,
            w = null !== a && void 0 !== a && a ? a.split(",") : [],
            C = g && g[0] ? g[0] : null,
            N = C && C.backgroundColor && "auto" !== C.backgroundColor,
            k = (0, x.ou)(C ? C.backgroundColor : null);
          return (0, t.jsx)("div", {
            className: r()({ "bg-spacegrey dark": "dark" === o }),
            children: (0, t.jsxs)("div", {
              className:
                "roq-layout pb-64 pt-112 md:pt-120 lg:pt-144 xl:pt-180",
              children: [
                (0, t.jsx)(A, { media: h, className: "md:hidden" }),
                (0, t.jsxs)("div", {
                  className: "col-span-12 md:col-span-6 px-8 md:px-0",
                  children: [
                    v &&
                      (0, t.jsx)("div", {
                        className: "relative w-72 h-44 lg:w-92 lg:h-58",
                        children: (0, t.jsx)(c.default, {
                          src: j,
                          alt: y,
                          layout: "fill",
                          objectFit: "contain",
                          placeholder: "blur",
                          blurDataURL:
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
                          priority: !0,
                        }),
                      }),
                    (0, t.jsx)("h1", {
                      className:
                        "mt-24 text-2lg md:text-3lg lg:text-4lg font-semibold text-color font-display md:mt-32 lg:mt-40",
                      style: { color: "auto" === p ? void 0 : p },
                      children: i,
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "mt-16 text-lg lg:text-xl text-color opacity-80 md:mt-20 lg:mt-24 xl:mt-32",
                      children: s,
                    }),
                    C &&
                      (0, t.jsx)(m.x, {
                        className:
                          "w-max mt-24 lg:mt-32 text-moonlight dark:text-spacegrey",
                        style: {
                          backgroundColor: N ? C.backgroundColor : void 0,
                          color: N ? k : void 0,
                        },
                        icon: u.XCv,
                        href: null === C || void 0 === C ? void 0 : C.link,
                        target: "_blank",
                        children: null === C || void 0 === C ? void 0 : C.label,
                      }),
                    (0, t.jsx)("div", {
                      className: "mt-32 md:mt-64",
                      children: (0, t.jsx)(b, { heroTags: w, id: d }),
                    }),
                  ],
                }),
                (0, t.jsx)(A, { media: h, className: "hidden md:block" }),
              ],
            }),
          });
        },
        y = o(35261),
        w = o(8720),
        C = o(95390),
        N = o(18330),
        k = o(69955),
        S = o(1762);
      function O(e, l, o) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = o),
          e
        );
      }
      function _(e) {
        for (var l = 1; l < arguments.length; l++) {
          var o = null != arguments[l] ? arguments[l] : {},
            t = Object.keys(o);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            t.forEach(function (l) {
              O(e, l, o[l]);
            });
        }
        return e;
      }
      var P = function (e) {
          var l = e.nextContents,
            o = void 0 === l ? [] : l,
            n = e.nextContentsHeadline,
            i = o[0],
            d = o[1];
          return o && o.length > 0
            ? (0, t.jsxs)("div", {
                className: "roq-layout mt-56 md:mt-64 xl:mt-80 h-auto",
                children: [
                  (0, t.jsx)("h3", {
                    className:
                      "col-span-12 text-xl font-medium leading-normal text-color md:text-2xl lg:text-2lg xl:text-3lg",
                    children: n,
                  }),
                  i &&
                    (0, t.jsx)(k.Z, {
                      content: i,
                      className:
                        "col-span-12 lg:col-span-8 h-auto md:h-284 lg:h-390 xl:h-480",
                      open: !0,
                    }),
                  d &&
                    (0, t.jsx)(k.Z, {
                      content: d,
                      className:
                        "col-span-12 lg:col-span-4 h-auto md:h-284 lg:h-390 xl:h-480",
                      showAsOpenCard: !0,
                    }),
                ],
              })
            : null;
        },
        E = function (e) {
          var l,
            o,
            n,
            a,
            r,
            u,
            c,
            v,
            m,
            h = e.blog,
            x = void 0 === h ? null : h,
            g = e.header,
            p = void 0 === g ? null : g,
            f = e.footer,
            A = void 0 === f ? null : f,
            b =
              null !== (r = null === x || void 0 === x ? void 0 : x.hero) &&
              void 0 !== r
                ? r
                : null,
            y =
              null !== (u = null === x || void 0 === x ? void 0 : x.content) &&
              void 0 !== u
                ? u
                : null,
            w =
              null !==
                (c = null === x || void 0 === x ? void 0 : x.nextContents) &&
              void 0 !== c
                ? c
                : [],
            C =
              null !==
                (v =
                  null === x || void 0 === x
                    ? void 0
                    : x.nextContentsHeadline) && void 0 !== v
                ? v
                : [],
            N =
              null !==
                (m = null === x || void 0 === x ? void 0 : x.showIndex) &&
              void 0 !== m &&
              m,
            k = {
              title:
                (null === x ||
                void 0 === x ||
                null === (l = x.seoSettings) ||
                void 0 === l
                  ? void 0
                  : l.title) ||
                (null === b || void 0 === b ? void 0 : b[0].headline),
              description:
                (null === x ||
                void 0 === x ||
                null === (o = x.seoSettings) ||
                void 0 === o
                  ? void 0
                  : o.description) ||
                (null === b || void 0 === b ? void 0 : b[0].subheadline),
              keywords: null === x || void 0 === x ? void 0 : x.seoKeywords,
              image:
                null === x ||
                void 0 === x ||
                null === (n = x.seoSettings) ||
                void 0 === n ||
                null === (a = n.image) ||
                void 0 === a
                  ? void 0
                  : a.url,
              robots: (null === x || void 0 === x ? void 0 : x.seoRobotsEnabled)
                ? "index, follow"
                : "noindex, nofollow",
            };
          return (0, t.jsxs)(i.G, {
            header: p,
            footer: A,
            isDarkMode: !1,
            children: [
              (0, t.jsx)(d.Z, _({}, k)),
              b && b.length > 0 && (0, t.jsx)(j, { hero: b[0] }),
              x &&
                y &&
                (0, t.jsx)("div", {
                  className: "my-80 lg:my-120 xl:my-144",
                  children: (0, t.jsx)(s.ZP, { content: y, showIndex: N }),
                }),
              (0, t.jsx)(P, { nextContents: w, nextContentsHeadline: C }),
            ],
          });
        },
        H = function (e) {
          var l,
            o,
            n,
            a,
            r,
            u = e.thankYouPage,
            c = void 0 === u ? {} : u,
            v = e.header,
            m = void 0 === v ? null : v,
            h = e.footer,
            x = void 0 === h ? null : h,
            g = (null !== c && void 0 !== c ? c : {}).productHero,
            p =
              null !== (r = null === c || void 0 === c ? void 0 : c.content) &&
              void 0 !== r
                ? r
                : null,
            f = {
              title:
                null === c ||
                void 0 === c ||
                null === (l = c.seoSettings) ||
                void 0 === l
                  ? void 0
                  : l.title,
              description:
                null === c ||
                void 0 === c ||
                null === (o = c.seoSettings) ||
                void 0 === o
                  ? void 0
                  : o.description,
              keywords: null === c || void 0 === c ? void 0 : c.seoKeywords,
              image:
                null === c ||
                void 0 === c ||
                null === (n = c.seoSettings) ||
                void 0 === n ||
                null === (a = n.image) ||
                void 0 === a
                  ? void 0
                  : a.url,
              robots: (null === c || void 0 === c ? void 0 : c.seoRobotsEnabled)
                ? "index, follow"
                : "noindex, nofollow",
            };
          return (0, t.jsxs)(i.G, {
            header: m,
            footer: x,
            headerTheme: "dark",
            footerTheme: "dark",
            children: [
              (0, t.jsx)(d.Z, _({}, f)),
              g && g.length > 0 ? (0, t.jsx)(N.i, { hero: g[0] }) : null,
              p &&
                (0, t.jsx)("div", {
                  className: "my-80 lg:my-120 xl:my-144",
                  children: (0, t.jsx)(s.ZP, { content: p }),
                }),
            ],
          });
        },
        R = function (e) {
          var l,
            o,
            n,
            a,
            r,
            u,
            c = e.customerStory,
            v = void 0 === c ? null : c,
            m = e.header,
            h = void 0 === m ? null : m,
            x = e.footer,
            g = void 0 === x ? null : x,
            p = "long" === (null === v || void 0 === v ? void 0 : v.typeOfPage),
            f = p
              ? null === v || void 0 === v
                ? void 0
                : v.longTextBodyContent
              : null === v || void 0 === v
              ? void 0
              : v.shortTextBodyContent,
            A =
              null !== (r = null === v || void 0 === v ? void 0 : v.hero) &&
              void 0 !== r
                ? r
                : null,
            b = p ? (null === v || void 0 === v ? void 0 : v.nextContents) : [],
            y = p
              ? null === v || void 0 === v
                ? void 0
                : v.nextContentsHeadline
              : null,
            w =
              null !==
                (u = null === v || void 0 === v ? void 0 : v.showIndex) &&
              void 0 !== u
                ? u
                : null,
            C = {
              title:
                (null === v ||
                void 0 === v ||
                null === (l = v.seoSettings) ||
                void 0 === l
                  ? void 0
                  : l.title) ||
                (null === A || void 0 === A ? void 0 : A[0].headline),
              description:
                (null === v ||
                void 0 === v ||
                null === (o = v.seoSettings) ||
                void 0 === o
                  ? void 0
                  : o.description) ||
                (null === A || void 0 === A ? void 0 : A[0].subheadline),
              keywords: null === v || void 0 === v ? void 0 : v.seoKeywords,
              image:
                null === v ||
                void 0 === v ||
                null === (n = v.seoSettings) ||
                void 0 === n ||
                null === (a = n.image) ||
                void 0 === a
                  ? void 0
                  : a.url,
              robots: (null === v || void 0 === v ? void 0 : v.seoRobotsEnabled)
                ? "index, follow"
                : "noindex, nofollow",
            },
            N = p ? "white" : "dark";
          return (0, t.jsxs)(i.G, {
            header: h,
            footer: g,
            headerTheme: N,
            footerTheme: N,
            children: [
              (0, t.jsx)(d.Z, _({}, C)),
              A && A.length > 0 && (0, t.jsx)(j, { hero: A[0], theme: N }),
              v &&
                (0, t.jsx)("div", {
                  className: "my-80 lg:my-104 xl:my-120",
                  children: (0, t.jsx)(s.ZP, {
                    content: null !== f && void 0 !== f ? f : {},
                    showIndex: p && w,
                  }),
                }),
              (0, t.jsx)(P, { nextContents: b, nextContentsHeadline: y }),
            ],
          });
        },
        I = function (e) {
          var l,
            o,
            n,
            a,
            r,
            u,
            c = e.contentPage,
            v = void 0 === c ? {} : c,
            m = e.header,
            h = void 0 === m ? null : m,
            x = e.footer,
            g = void 0 === x ? null : x,
            p = e.sitemap,
            f = "use-case" === p,
            A = "customers" === p,
            b = "product" === p,
            j = "company" === p,
            k = v.useCaseHero,
            O = v.customerStoryHero,
            P = v.productHero,
            E = v.companyHero,
            H =
              null !== (u = null === v || void 0 === v ? void 0 : v.content) &&
              void 0 !== u
                ? u
                : null,
            R = {
              title:
                null === v ||
                void 0 === v ||
                null === (l = v.seoSettings) ||
                void 0 === l
                  ? void 0
                  : l.title,
              description:
                null === v ||
                void 0 === v ||
                null === (o = v.seoSettings) ||
                void 0 === o
                  ? void 0
                  : o.description,
              keywords: null === v || void 0 === v ? void 0 : v.seoKeywords,
              image:
                null === v ||
                void 0 === v ||
                null === (n = v.seoSettings) ||
                void 0 === n ||
                null === (a = n.image) ||
                void 0 === a
                  ? void 0
                  : a.url,
              robots: (null === v || void 0 === v ? void 0 : v.seoRobotsEnabled)
                ? "index, follow"
                : "noindex, nofollow",
            },
            I = A ? "light" : "dark";
          return (0, t.jsxs)(i.G, {
            header: h,
            footer: g,
            headerTheme: I,
            footerTheme: I,
            children: [
              (0, t.jsx)(d.Z, _({}, R)),
              f && (null === k || void 0 === k ? void 0 : k.length)
                ? (0, t.jsx)(y.Z, { hero: k[0] })
                : null,
              A && (null === O || void 0 === O ? void 0 : O.length)
                ? (0, t.jsx)(w.Z, { hero: O[0] })
                : null,
              b && (null === P || void 0 === P ? void 0 : P.length)
                ? "HeroMainpageRecord" ===
                  (null === (r = P[0]) || void 0 === r ? void 0 : r.__typename)
                  ? (0, t.jsx)(S.I, { heroStartpage: P[0] })
                  : (0, t.jsx)(N.i, { hero: P[0] })
                : null,
              j && (null === E || void 0 === E ? void 0 : E.length)
                ? (0, t.jsx)(C.Z, { hero: E[0] })
                : null,
              H &&
                (0, t.jsx)("div", {
                  className: "my-80 lg:my-120 xl:my-144",
                  children: (0, t.jsx)(s.ZP, { content: H }),
                }),
            ],
          });
        },
        T = !0;
      function Z(e) {
        var l = e.subscription,
          o = e.sitemap,
          i = (0, n.L)(l).data;
        return "blog" === o
          ? (0, t.jsx)(E, _({}, i, { sitemap: o }))
          : "thank-you" === o
          ? (0, t.jsx)(H, _({}, i, { sitemap: o }))
          : "use-case" === o ||
            "customers" === o ||
            "product" === o ||
            "company" === o
          ? (0, t.jsx)(I, _({}, i, { sitemap: o }))
          : (0, t.jsx)(R, _({}, i, { sitemap: o }));
      }
    },
    74713: function (e) {
      e.exports = { headline: "mainHero_headline__iQ9dH" };
    },
  },
  function (e) {
    e.O(0, [774, 720, 589, 609, 751, 225, 888, 179], function () {
      return (l = 98999), e((e.s = l));
      var l;
    });
    var l = e.O();
    _N_E = l;
  },
]);

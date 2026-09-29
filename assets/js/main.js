/*
 * Renders the content in content.js into whichever page is loaded (any
 * element with a matching data-render attribute) and wires up the mobile menu.
 */
(function () {
  "use strict";

  var data = window.PORTFOLIO;
  if (!data) return;

  var STATUS = data.STATUS;

  /* ---------- helpers ---------- */

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function map(list, fn) {
    return (list || []).map(fn).join("");
  }

  function status(key) {
    if (!STATUS[key]) throw new Error("Unknown status: " + key);
    return (
      '<span class="status status--' + key + '">' +
      '<span class="status__dot" aria-hidden="true"></span>' + esc(STATUS[key]) +
      "</span>"
    );
  }

  function tags(list) {
    if (!list || !list.length) return "";
    return (
      '<ul class="tags">' +
      map(list, function (t) { return "<li>" + esc(t) + "</li>"; }) +
      "</ul>"
    );
  }

  var ICONS = {
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.82-.26.82-.57v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 5.5h18v13H3zM3.5 6l8.5 7 8.5-7"/></svg>',
  };

  function isExternal(href) {
    return /^https?:\/\//.test(href);
  }

  function externalAttrs(href) {
    return isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  function newTabHint(href) {
    return isExternal(href) ? '<span class="visually-hidden"> (opens in a new tab)</span>' : "";
  }

  /* ---------- section renderers ---------- */

  function renderLinks() {
    document.querySelectorAll('[data-links="inline"]').forEach(function (el) {
      el.innerHTML = map(data.links, function (l) {
        return (
          '<a class="button button--ghost" href="' + esc(l.href) + '"' + externalAttrs(l.href) + ">" +
          (ICONS[l.id] || "") + "<span>" + esc(l.label) + "</span>" + newTabHint(l.href) + "</a>"
        );
      });
    });

    document.querySelectorAll('[data-links="text"]').forEach(function (el) {
      el.innerHTML = data.links
        .map(function (l) {
          return '<a href="' + esc(l.href) + '"' + externalAttrs(l.href) + ">" + esc(l.label) + newTabHint(l.href) + "</a>";
        })
        .join('<span aria-hidden="true"> · </span>');
    });

    document.querySelectorAll('[data-links="cards"]').forEach(function (el) {
      el.innerHTML = map(data.links, function (l) {
        return (
          '<li><a class="contact-card" href="' + esc(l.href) + '"' + externalAttrs(l.href) + ">" +
          '<span class="contact-card__icon">' + (ICONS[l.id] || "") + "</span>" +
          '<span class="contact-card__text"><span class="contact-card__label">' + esc(l.label) + "</span>" +
          '<span class="contact-card__handle">' + esc(l.handle) + "</span></span>" +
          '<span class="contact-card__arrow" aria-hidden="true">↗</span>' + newTabHint(l.href) +
          "</a></li>"
        );
      });
    });
  }

  function renderFocus(el) {
    el.innerHTML = map(data.focus, function (f) {
      return (
        '<article class="focus focus--' + esc(f.id) + '" aria-labelledby="focus-' + esc(f.id) + '">' +
        '<p class="focus__label">' + esc(f.label) + "</p>" +
        '<h3 id="focus-' + esc(f.id) + '">' + esc(f.title) + "</h3>" +
        '<p class="focus__body">' + esc(f.body) + "</p>" +
        '<ul class="focus__points">' + map(f.points, function (p) { return "<li>" + esc(p) + "</li>"; }) + "</ul>" +
        '<a class="focus__link" href="' + esc(f.href) + '">' + esc(f.cta) + ' <span aria-hidden="true">→</span></a>' +
        "</article>"
      );
    });
  }

  function renderExplore(el) {
    el.innerHTML = map(data.explore, function (x) {
      return (
        '<li><a class="explore__card" href="' + esc(x.href) + '">' +
        '<span class="explore__title">' + esc(x.title) + ' <span aria-hidden="true">→</span></span>' +
        '<span class="explore__body">' + esc(x.body) + "</span>" +
        "</a></li>"
      );
    });
  }

  function renderImpact(el) {
    el.innerHTML = map(data.impact, function (item) {
      return (
        '<li class="impact">' +
        '<a class="impact__link" href="' + esc(item.href) + '">' +
        status(item.status) +
        '<h3 class="impact__title">' + esc(item.title) + "</h3>" +
        '<p class="impact__body">' + esc(item.body) + "</p>" +
        '<span class="impact__more" aria-hidden="true">Case study →</span>' +
        "</a></li>"
      );
    });
  }

  function flow(steps, modifier) {
    return (
      '<ol class="flow' + (modifier ? " flow--" + modifier : "") + '">' +
      map(steps, function (s, i) {
        return (
          '<li class="flow__step"><span class="flow__num" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<span class="flow__label">' + esc(s.label) + "</span>" +
          (s.note ? '<span class="flow__note">' + esc(s.note) + "</span>" : "") +
          "</li>"
        );
      }) +
      "</ol>"
    );
  }

  var VISUALS = {
    reconcile: function () {
      var segments = ["Segment A", "Segment B", "Segment C"];
      return (
        '<figure class="visual visual--reconcile">' +
        '<div class="recon">' +
        '<div class="recon__panel recon__panel--before">' +
        '<p class="recon__label">Before</p>' +
        '<p class="recon__source">One aggregate, reused</p>' +
        '<ul class="recon__rows">' +
        map(segments, function (m) {
          return '<li><span>' + m + '</span><span class="recon__val">aggregate</span></li>';
        }) +
        "</ul>" +
        '<p class="recon__result recon__result--bad"><span>≠ reference path</span></p>' +
        "</div>" +
        '<div class="recon__panel recon__panel--after">' +
        '<p class="recon__label">After</p>' +
        '<p class="recon__source">Calculated per segment</p>' +
        '<ul class="recon__rows">' +
        map(segments, function (m) {
          return '<li><span>' + m + '</span><span class="recon__val">own inputs</span></li>';
        }) +
        "</ul>" +
        '<p class="recon__result recon__result--good"><span>= reference path</span><span>Σ segments = total</span></p>' +
        "</div>" +
        "</div>" +
        "<figcaption>Granular rows used to inherit one aggregate result. Now each segment is calculated from its own inputs, and the segments reconcile back to the total.</figcaption>" +
        "</figure>"
      );
    },
    pipeline: function (cs) {
      return (
        '<figure class="visual">' + flow(cs.pipeline) +
        "<figcaption>How content flows from source repositories to the tools developers use.</figcaption>" +
        "</figure>"
      );
    },
    loop: function (cs) {
      return (
        '<figure class="visual">' + flow(cs.pipeline, "loop") +
        '<p class="flow__repeat"><span aria-hidden="true">↺</span> Repeat with the same scorecard for each assistant</p>' +
        "<figcaption>The evaluation loop I used to compare skill behavior across assistants.</figcaption>" +
        "</figure>"
      );
    },
  };

  function renderCases(el) {
    el.innerHTML = map(data.caseStudies, function (cs, i) {
      var titleId = cs.id + "-title";
      return (
        '<article class="case" id="' + esc(cs.id) + '" aria-labelledby="' + titleId + '">' +
        '<header class="case__head">' +
        '<p class="case__meta"><span class="case__index">Case ' + String(i + 1).padStart(2, "0") + "</span>" + status(cs.status) + "</p>" +
        '<h3 class="case__title" id="' + titleId + '">' + esc(cs.title) + "</h3>" +
        '<p class="case__kicker">' + esc(cs.kicker) + "</p>" +
        tags(cs.tags) +
        "</header>" +
        '<div class="case__body">' +
        '<dl class="case__summary">' +
        "<div><dt>The challenge</dt><dd>" + esc(cs.problem) + "</dd></div>" +
        "<div><dt>What I did</dt><dd>" + esc(cs.role) + "</dd></div>" +
        '<div class="case__learned"><dt>What I learned</dt><dd>' + esc(cs.learned) + "</dd></div>" +
        "</dl>" +
        (VISUALS[cs.visual] ? VISUALS[cs.visual](cs) : "") +
        "</div>" +
        '<details class="case__more">' +
        '<summary><span class="case__more-open">Show the details</span><span class="case__more-close">Hide details</span></summary>' +
        '<div class="case__detail">' +
        '<section class="case__did"><h4>Step by step</h4><ul>' +
        map(cs.did, function (d) { return "<li>" + esc(d) + "</li>"; }) +
        "</ul></section>" +
        '<div class="case__notes">' +
        "<section><h4>Technical approach</h4><p>" + esc(cs.approach) + "</p></section>" +
        "<section><h4>How I validated it</h4><p>" + esc(cs.validation) + "</p></section>" +
        "<section><h4>Result</h4><p>" + esc(cs.outcome) + "</p></section>" +
        "</div></div></details>" +
        "</article>"
      );
    });
  }

  function renderMoreWork(el) {
    var f = data.moreWork.feature;
    el.innerHTML =
      '<article class="feature" id="' + esc(f.id) + '" aria-labelledby="' + f.id + '-title">' +
      '<div class="feature__head">' + status(f.status) +
      '<h3 id="' + f.id + '-title">' + esc(f.title) + "</h3>" +
      '<p class="feature__summary">' + esc(f.summary) + "</p>" + tags(f.tags) + "</div>" +
      '<ol class="feature__steps">' +
      map(f.steps, function (s) {
        return '<li><span class="feature__step">' + esc(s.label) + "</span><p>" + esc(s.text) + "</p></li>";
      }) +
      "</ol></article>" +
      '<ul class="breadth">' +
      map(data.moreWork.cards, function (c) {
        return '<li class="breadth__card">' + status(c.status) + "<h3>" + esc(c.title) + "</h3><p>" + esc(c.body) + "</p></li>";
      }) +
      "</ul>";
  }

  function renderApproach(el) {
    el.innerHTML = map(data.approach, function (a, i) {
      return (
        '<li class="approach__step"><span class="approach__num" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h3>" + esc(a.step) + "</h3><p>" + esc(a.text) + "</p></li>"
      );
    });
  }

  function renderToolkit(el) {
    el.innerHTML = map(data.toolkit, function (g) {
      return (
        '<section class="tool-group" aria-label="' + esc(g.group) + '">' +
        "<h3>" + esc(g.group) + "</h3>" +
        tags(g.items) +
        '<p class="tool-group__evidence"><span>Used in</span> ' + esc(g.evidence) + "</p>" +
        "</section>"
      );
    });
  }

  function renderTimeline(el) {
    el.innerHTML = map(data.timeline, function (t) {
      return (
        '<li class="timeline__item' + (t.current ? " timeline__item--current" : "") + '"' +
        (t.current ? ' aria-current="step"' : "") + ">" +
        '<p class="timeline__phase">' + esc(t.phase) + "</p>" +
        "<h3>" + esc(t.title) + "</h3><p>" + esc(t.body) + "</p></li>"
      );
    });
  }

  function renderLearning(el) {
    var chips = function (list, cls, prefix) {
      return map(list, function (c) {
        return '<li class="' + cls + '"><span class="visually-hidden">' + prefix + ": </span>" + esc(c) + "</li>";
      });
    };
    el.innerHTML =
      '<p class="learning__legend" aria-hidden="true"><span class="chip chip--done">Completed</span><span class="chip chip--progress">In progress</span></p>' +
      '<ul class="learning__rows">' +
      map(data.learning, function (row) {
        return (
          '<li class="learn-row">' +
          '<ul class="learn-row__learned">' +
          chips(row.learned, "chip chip--done", "Completed") +
          chips(row.inProgress, "chip chip--progress", "In progress") +
          "</ul>" +
          '<span class="learn-row__arrow" aria-hidden="true">→</span>' +
          '<p class="learn-row__applied"><span class="visually-hidden">Applied to: </span>' + esc(row.applied) + "</p>" +
          "</li>"
        );
      }) +
      "</ul>";
  }

  function renderProjects(el) {
    el.innerHTML = map(data.earlierProjects, function (p) {
      var link = p.href
        ? '<a class="project__link" href="' + esc(p.href) + '"' + externalAttrs(p.href) + ">" + ICONS.github +
          "<span>View on GitHub</span>" + '<span class="visually-hidden"> — ' + esc(p.title) + "</span>" + newTabHint(p.href) + "</a>"
        : "";
      return (
        '<li class="project"><h3>' + esc(p.title) + "</h3><p>" + esc(p.body) + "</p>" +
        tags(p.tags) + link + "</li>"
      );
    });
  }

  var RENDERERS = {
    focus: renderFocus,
    explore: renderExplore,
    impact: renderImpact,
    cases: renderCases,
    "more-work": renderMoreWork,
    approach: renderApproach,
    toolkit: renderToolkit,
    timeline: renderTimeline,
    learning: renderLearning,
    projects: renderProjects,
  };

  function render() {
    document.querySelectorAll("[data-render]").forEach(function (el) {
      var fn = RENDERERS[el.getAttribute("data-render")];
      if (fn) fn(el);
    });
    renderLinks();
  }

  /* ---------- interaction ---------- */

  function setupNav() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close the menu if the viewport grows past the mobile breakpoint.
    window.matchMedia("(min-width: 56rem)").addEventListener("change", function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  // Content is rendered after the browser's initial jump to a #fragment,
  // so re-apply it once the targets exist.
  function restoreHash() {
    if (!location.hash) return;
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }

  // Expand collapsed case studies when printing.
  window.addEventListener("beforeprint", function () {
    document.querySelectorAll("details").forEach(function (d) { d.open = true; });
  });

  render();
  setupNav();
  restoreHash();
})();

const siteContent = {
  pinnedSources: [
    {
      title: "Whatcom County Onsite Sewage",
      summary: "Program landing page for Whatcom County OSS permitting, education, records, FAQs, and local regulatory context.",
      url: "https://www.whatcomcounty.us/891/On-Site-Sewage",
      tags: ["Whatcom", "Program"]
    },
    {
      title: "Chapter 246-272A WAC",
      summary: "Washington State on-site sewage system rules for OSS with residential design flows up to 3,500 gpd.",
      url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-272A",
      tags: ["WAC", "State rule"]
    },
    {
      title: "DOH Wastewater Forms and Publications",
      summary: "Department standards, guidance documents, product lists, homeowner materials, and technical references.",
      url: "https://doh.wa.gov/community-and-environment/wastewater-management/forms-publications",
      tags: ["DOH", "RS&G"]
    }
  ],
  codeSources: [
    {
      group: "Whatcom County",
      items: [
        {
          title: "WCC 24.05 - On-Site Sewage System Regulations",
          summary: "Local Whatcom County OSS code, including permit requirements, site plan content, design requirements, inspections, and licensing.",
          url: "https://ecode360.com/47954066",
          tags: ["WCC 24.05", "Local code"]
        },
        {
          title: "Whatcom County OSS Program",
          summary: "County OSS program page with FAQs, record search links, public education, and permit process context.",
          url: "https://www.whatcomcounty.us/891/On-Site-Sewage",
          tags: ["WCHCS", "OSS"]
        },
        {
          title: "Unified Fee Schedule",
          summary: "Official countywide fee schedule page. Use alongside local copies when fee PDFs are difficult to locate later.",
          url: "https://www.whatcomcounty.us/1933/Unified-Fee-Schedule",
          tags: ["Fees", "Official"]
        }
      ]
    },
    {
      group: "Washington State",
      items: [
        {
          title: "WAC 246-272A-0230 - Design Requirements, General",
          summary: "Design flow, sewage quality considerations, treatment levels, distribution method table, and designer requirements.",
          url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-272A-0230",
          tags: ["Design flow", "Table VI"]
        },
        {
          title: "WAC 246-272A-0232 - Septic Tank Sizing",
          summary: "Minimum liquid volumes for single-family, other residential sources, and nonresidential sources.",
          url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-272A-0232",
          tags: ["Tank sizing", "Volume"]
        },
        {
          title: "WAC 246-272A-0234 - Soil Dispersal Components",
          summary: "Hydraulic loading rates, absorption area basis, SSAS requirements, and reserve area sizing.",
          url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-272A-0234",
          tags: ["Drainfield", "Table VIII"]
        },
        {
          title: "DOH Rules and Regulations",
          summary: "DOH gateway for wastewater WACs, RCWs, rule revision information, and septic tank rules.",
          url: "https://doh.wa.gov/community-and-environment/wastewater-management/rules-and-regulations",
          tags: ["DOH", "Rules"]
        },
        {
          title: "OSS Rule Revision Watch",
          summary: "DOH page tracking chapter 246-272A rule revisions and implementation dates.",
          url: "https://doh.wa.gov/community-and-environment/wastewater-management/rules-and-regulations/site-rule-revision",
          tags: ["Updates", "Rulemaking"]
        },
        {
          title: "OSS Setbacks Rulemaking",
          summary: "State Board of Health page for 2026 rulemaking related to horizontal separation/setback clarifications.",
          url: "https://sboh.wa.gov/rulemaking/agency-rules-and-activity/site-sewage-systems-setbacks",
          tags: ["Setbacks", "Rulemaking"]
        }
      ]
    },
    {
      group: "Ecology",
      items: [
        {
          title: "Ecology On-site Sewage Projects",
          summary: "Funding programs for local OSS repair/replacement loan programs and statewide Craft3 Clean Water Loans.",
          url: "https://www.ecology.wa.gov/water-shorelines/water-quality/water-quality-grants-and-loans/on-site-sewage-projects",
          tags: ["Funding", "Loans"]
        },
        {
          title: "Water Quality Grants and Loans",
          summary: "Ecology funding cycle, combined funding program, and clean water loan resources.",
          url: "https://www.ecology.wa.gov/water-shorelines/water-quality/water-quality-grants-and-loans",
          tags: ["Funding", "Water quality"]
        }
      ]
    },
    {
      group: "Local Jurisdiction Requirements",
      items: [
        {
          title: "Local Health Jurisdiction Resources",
          summary: "DOH support page for local health jurisdictions, standards and guidance documents, and technical contacts.",
          url: "https://doh.wa.gov/community-and-environment/wastewater-management/site-sewage-systems-oss/local-health-support",
          tags: ["Local health", "Guidance"]
        },
        {
          title: "Whatcom PDS Forms, Guides, and Links",
          summary: "Planning and Development Services references that can matter around site plans, land disturbance, building permits, and SEPA.",
          url: "https://www.whatcomcounty.us/4514/Forms-Guides-Links",
          tags: ["PDS", "Permitting"]
        }
      ]
    }
  ],
  designTopics: [
    {
      title: "Septic Tank Sizing",
      summary: "Use WAC 246-272A-0232 for minimum liquid volumes. Single-family systems require 1,000 gallons through four bedrooms, plus 250 gallons for each additional bedroom.",
      checks: ["Confirm source type before sizing.", "Check two-compartment requirement.", "Coordinate registered tank model and access details."],
      links: [{ label: "Tank sizing WAC", url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-272A-0232" }],
      tags: ["Tank", "WAC 246-272A-0232"]
    },
    {
      title: "Drainfield Sizing",
      summary: "Base absorption area on design flow and a loading rate not exceeding WAC Table VIII or stricter local requirements.",
      checks: ["Use the finest textured soil within selected vertical separation.", "Document distribution method.", "Size reserve area at least 100 percent."],
      links: [{ label: "Soil dispersal WAC", url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-272A-0234" }],
      tags: ["Drainfield", "Absorption area"]
    },
    {
      title: "Soil / Site Evaluation",
      summary: "Keep soil logs, slope, drainage, water supply, vertical separation, horizontal separations, and encumbrances visible in the design record.",
      checks: ["Show soil log locations on the site plan.", "Call out slope and direction.", "Note benchmark and datum."],
      links: [{ label: "Whatcom code", url: "https://ecode360.com/47954066" }],
      tags: ["Soils", "Site plan"]
    },
    {
      title: "Pressure Distribution",
      summary: "Pressure distribution often follows from vertical separation, soil type, design flow, or technology requirements.",
      checks: ["Match Table VI treatment and distribution method.", "Keep dosing assumptions visible.", "Verify lateral length and orifice layout."],
      links: [{ label: "DOH publications", url: "https://doh.wa.gov/community-and-environment/wastewater-management/forms-publications" }],
      tags: ["Pressure", "Dosing"]
    },
    {
      title: "Gravity Systems",
      summary: "Gravity systems remain straightforward when site conditions, soil type, vertical separation, and local restrictions support them.",
      checks: ["Confirm Table VI allows gravity distribution.", "Check lateral length limits.", "Keep infiltrative surface depth within allowed limits."],
      links: [{ label: "Design requirements", url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-272A-0230" }],
      tags: ["Gravity", "Distribution"]
    },
    {
      title: "Sand Filters",
      summary: "Use DOH standards and guidance for intermittent sand filters, sand-lined trenches, and related treatment/dispersal assemblies.",
      checks: ["Record treatment level target.", "Coordinate media specification.", "Confirm downstream dispersal method."],
      links: [{ label: "DOH forms and publications", url: "https://doh.wa.gov/community-and-environment/wastewater-management/forms-publications" }],
      tags: ["Sand filter", "Treatment"]
    },
    {
      title: "Reserve Areas",
      summary: "Primary and reserve areas must each be sized at least 100 percent of approved loading rates under WAC 246-272A-0234.",
      checks: ["Protect from buildings, paving, traffic, and other encumbrances.", "Show dimensions and setbacks.", "Recheck older permits against current code."],
      links: [{ label: "Reserve area rule", url: "https://app.leg.wa.gov/wac/default.aspx?cite=246-272A-0234" }],
      tags: ["Reserve", "Replacement area"]
    }
  ],
  forms: [
    {
      title: "Whatcom Septic Forms and Applications",
      summary: "County page listing OSS permit applications, tank-only applications, soil logs, HROSS, O&M forms, flow tests, and inspection-related documents.",
      url: "https://www.whatcomcounty.us/900/Septic-Forms-Applications",
      tags: ["Forms", "Whatcom"]
    },
    {
      title: "Whatcom Applications",
      summary: "Broader PDS applications page for permit types that can intersect with OSS design work.",
      url: "https://www.whatcomcounty.us/920/Applications",
      tags: ["Applications", "PDS"]
    },
    {
      title: "Whatcom OSS Quick Links",
      summary: "Licensed designers, installers, O&M specialists, pumpers, record access, and related OSS references.",
      url: "https://www.whatcomcounty.us/QuickLinks.aspx?CID=166",
      tags: ["Professionals", "Records"]
    },
    {
      title: "DOH Wastewater Forms and Publications",
      summary: "State-level standards, guidance, product lists, and homeowner references.",
      url: "https://doh.wa.gov/community-and-environment/wastewater-management/forms-publications",
      tags: ["DOH", "Publications"]
    }
  ],
  feeDocuments: [
    {
      title: "WCHCS 2025 Fees for OSS",
      summary: "Local one-page fee schedule copied into this knowledge base for quick reference when the source document is hard to find online.",
      href: "assets/downloads/WCHCS-2025-Fees-for-OSS.pdf",
      preview: "assets/previews/wchcs-fees-preview.png",
      source: "Local PDF",
      year: "2025",
      tags: ["Current OSS permit fees", "Reinspection fees", "Tank-only permits"]
    },
    {
      title: "Official Whatcom Unified Fee Schedule",
      summary: "County fee schedule page for checking current adopted fee documents and changes.",
      href: "https://www.whatcomcounty.us/1933/Unified-Fee-Schedule",
      preview: "",
      source: "Official county page",
      year: "2025-2026",
      tags: ["Official", "Fees"]
    }
  ],
  notes: [
    {
      type: "Reviewer note",
      title: "Keep reviewer-specific preferences dated",
      body: "When a plan-check comment feels like local practice rather than plain code text, capture the reviewer name, date, project context, and the exact wording."
    },
    {
      type: "Plan-check comment",
      title: "Show reserve area like it will be built tomorrow",
      body: "Reserve areas are easier to defend when dimensions, setbacks, access, slope, and encumbrances are drawn with the same care as the primary drainfield."
    },
    {
      type: "Standard note",
      title: "Stormwater separation reminder",
      body: "Confirm that roof drains, footing drains, subsurface stormwater infiltration, and other nonsewage drainage are kept out of the OSS and reserve area."
    }
  ],
  details: [
    {
      title: "Typical Septic Tank Detail",
      summary: "Tank access, risers, inlet/outlet, baffles, filter, compartments, watertightness, and finished-grade references.",
      checks: ["Show access opening locations.", "Call out registered tank model.", "Coordinate riser and lid loading condition."],
      tags: ["Tank", "Detail"]
    },
    {
      title: "Distribution Boxes",
      summary: "Use when the design needs equal distribution, accessible inspection, and clear grading or outlet elevation control.",
      checks: ["Show box elevation.", "Provide access to finished grade.", "Call out outlet balancing method."],
      tags: ["D-box", "Gravity"]
    },
    {
      title: "Cleanouts",
      summary: "Keep cleanout locations visible on plan and record drawings, especially at direction changes and serviceable pipe runs.",
      checks: ["Dimension from durable references.", "Protect from vehicle loads.", "Coordinate cap elevation."],
      tags: ["Cleanouts", "Record drawing"]
    },
    {
      title: "Pump Chambers",
      summary: "Pump, floats, alarm, reserve storage, drawdown, anti-siphon features, and electrical notes belong together.",
      checks: ["Show float elevations.", "List pump model basis.", "Document dose volume and alarm storage."],
      tags: ["Pump", "Dose"]
    },
    {
      title: "Pressure Distribution Layouts",
      summary: "Keep network geometry, lateral lengths, orifice spacing, flushing, cleanouts, and squirt test expectations legible.",
      checks: ["Call out orifice size and spacing.", "Label zones or laterals.", "Show flushing locations."],
      tags: ["Pressure", "Layout"]
    }
  ],
  usefulLinks: [
    {
      title: "Septic and Drinking Water Records",
      summary: "Whatcom records search for existing OSS and drinking water documents.",
      url: "https://documents.whatcomcounty.us/WebLink/CustomSearch.aspx?SearchName=OSSSearch&cr=1&dbid=0&repo=WC",
      tags: ["Records", "Whatcom"]
    },
    {
      title: "DOH Types of Septic Systems",
      summary: "Plain-language explanations for gravity, pressure distribution, mound, sand filter, and other systems.",
      url: "https://doh.wa.gov/community-and-environment/wastewater-management/septic-system/types-systems",
      tags: ["System types", "DOH"]
    },
    {
      title: "Registered OSS Products",
      summary: "Find approved or registered treatment products, distribution products, additives, and sewage tanks through DOH publications.",
      url: "https://doh.wa.gov/community-and-environment/wastewater-management/forms-publications",
      tags: ["Products", "DOH"]
    },
    {
      title: "Ecology OSS Funding",
      summary: "Funding for OSS repair and replacement programs, including the statewide regional loan program.",
      url: "https://www.ecology.wa.gov/water-shorelines/water-quality/water-quality-grants-and-loans/on-site-sewage-projects",
      tags: ["Funding", "Ecology"]
    },
    {
      title: "EPA Septic Systems",
      summary: "Federal background materials for septic systems, homeowner care, and general onsite wastewater concepts.",
      url: "https://www.epa.gov/septic",
      tags: ["EPA", "Background"]
    }
  ]
};

const loadingRates = {
  "1": {
    label: "1 - Gravelly coarse sands / very gravelly soils",
    a: 1.0,
    b: 1.2
  },
  "2": {
    label: "2 - Coarse sands",
    a: 1.0,
    b: 1.2
  },
  "3": {
    label: "3 - Medium sands / loamy coarse or medium sands",
    a: 0.8,
    b: 1.0
  },
  "4": {
    label: "4 - Fine sands / sandy loams / loams",
    a: 0.6,
    b: 0.8
  },
  "5": {
    label: "5 - Very fine sands, structured silt loams and clay loams",
    a: 0.4,
    b: 0.56
  },
  "6": {
    label: "6 - Other silt loams and clay loams",
    a: 0.2,
    b: 0.2
  },
  "7": {
    label: "7 - Clay, strongly cemented, massive, platy, expanding clay",
    a: null,
    b: null
  }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function tagsHtml(tags = []) {
  return `<div class="tag-row">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`;
}

function linkListHtml(links = []) {
  if (!links.length) return "";
  return `<div class="link-row">${links
    .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
    .join("")}</div>`;
}

function createSourceCard(item) {
  const search = [item.title, item.summary, ...(item.tags || [])].join(" ");
  const isHashLink = String(item.url || "").startsWith("#");
  const linkAttrs = isHashLink ? "" : 'target="_blank" rel="noreferrer"';
  const linkLabel = item.linkLabel || "Open Source";
  return `
    <article class="source-card searchable" data-search="${escapeHtml(search)}">
      <p class="card-kicker">${escapeHtml((item.tags || [])[0] || "Reference")}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      ${tagsHtml(item.tags)}
      <div class="link-row">
        <a href="${escapeHtml(item.url)}" ${linkAttrs}>${escapeHtml(linkLabel)}</a>
      </div>
    </article>
  `;
}

function createTopicCard(topic) {
  const search = [topic.title, topic.summary, ...(topic.checks || []), ...(topic.tags || [])].join(" ");
  return `
    <article class="topic-card searchable" data-search="${escapeHtml(search)}">
      <p class="card-kicker">${escapeHtml((topic.tags || [])[0] || "Design")}</p>
      <h3>${escapeHtml(topic.title)}</h3>
      <p>${escapeHtml(topic.summary)}</p>
      <ul class="check-list">
        ${(topic.checks || []).map((check) => `<li>${escapeHtml(check)}</li>`).join("")}
      </ul>
      ${tagsHtml(topic.tags)}
      ${linkListHtml(topic.links)}
    </article>
  `;
}

function renderCards() {
  document.querySelector("#pinnedSources").innerHTML = siteContent.pinnedSources.map(createSourceCard).join("");

  document.querySelector("#codeSources").innerHTML = siteContent.codeSources
    .map(
      (group) => `
        <section class="source-group" aria-labelledby="group-${escapeHtml(group.group).replaceAll(" ", "-").toLowerCase()}">
          <h3 id="group-${escapeHtml(group.group).replaceAll(" ", "-").toLowerCase()}">${escapeHtml(group.group)}</h3>
          <div class="group-grid">${group.items.map(createSourceCard).join("")}</div>
        </section>
      `
    )
    .join("");

  document.querySelector("#designTopics").innerHTML = siteContent.designTopics.map(createTopicCard).join("");
  document.querySelector("#formLinks").innerHTML = siteContent.forms.map(createSourceCard).join("");
  document.querySelector("#detailExamples").innerHTML = siteContent.details.map(createTopicCard).join("");
  document.querySelector("#usefulLinks").innerHTML = siteContent.usefulLinks.map(createSourceCard).join("");

  document.querySelector("#feeDocuments").innerHTML = siteContent.feeDocuments
    .map((doc) => {
      const search = [doc.title, doc.summary, doc.source, doc.year, ...(doc.tags || [])].join(" ");
      const preview = doc.preview
        ? `<img src="${escapeHtml(doc.preview)}" alt="Preview of ${escapeHtml(doc.title)}">`
        : `<div class="empty-state">Official web reference</div>`;
      const target = doc.href.startsWith("http") ? `target="_blank" rel="noreferrer"` : `target="_blank"`;
      const previewClass = doc.preview ? "" : " no-preview";
      return `
        <article class="document-card searchable${previewClass}" data-search="${escapeHtml(search)}">
          <div class="document-preview">${preview}</div>
          <div class="document-body">
            <p class="doc-meta"><span>${escapeHtml(doc.source)}</span><span>${escapeHtml(doc.year)}</span></p>
            <h3>${escapeHtml(doc.title)}</h3>
            <p>${escapeHtml(doc.summary)}</p>
            ${tagsHtml(doc.tags)}
            <div class="link-row">
              <a href="${escapeHtml(doc.href)}" ${target}>Open Reference</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function numberValue(id) {
  return Number(document.querySelector(`#${id}`).value) || 0;
}

function format(value, digits = 0) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits
  }).format(value);
}

function calculateFlow() {
  const bedrooms = Math.max(1, Math.round(numberValue("flowBedrooms")));
  const additionalBedrooms = Math.max(0, Math.round(numberValue("flowAdditionalBedrooms")));
  const adjustment = Math.max(0, numberValue("flowAdjustment"));
  const firstDwelling = Math.max(240, bedrooms * 120);
  const additional = additionalBedrooms * 120;
  const total = firstDwelling + additional + adjustment;

  document.querySelector("#flowResult").innerHTML = `
    <strong>${format(total)} gpd</strong>
    First dwelling: ${format(firstDwelling)} gpd. Additional dwelling bedrooms: ${format(additional)} gpd.
    ${adjustment ? `Local adjustment: ${format(adjustment)} gpd.` : ""}
  `;
}

function calculateLoading() {
  const soil = loadingRates[document.querySelector("#soilType").value];
  const basis = document.querySelector("#effluentBasis").value;
  const rate = soil[basis];

  document.querySelector("#loadingResult").innerHTML =
    rate === null
      ? `<strong>Unsuitable</strong>WAC Table VIII marks this soil type as unsuitable for these loading-rate columns.`
      : `<strong>${format(rate, 2)} gpd/sf</strong>${escapeHtml(soil.label)}. Source basis: WAC 246-272A-0234 Table VIII.`;
}

function calculateTrench() {
  const flow = Math.max(0, numberValue("trenchFlow"));
  const rate = Math.max(0.01, numberValue("trenchRate"));
  const width = Math.max(0.1, numberValue("trenchWidth"));
  const sidewall = Math.max(0, numberValue("sidewallCredit"));
  const area = flow / rate;
  const length = area / (width + sidewall);

  document.querySelector("#trenchResult").innerHTML = `
    <strong>${format(length, 1)} linear ft</strong>
    Required absorption area: ${format(area, 1)} sf. Effective area per linear foot: ${format(width + sidewall, 2)} sf/lf.
  `;
}

function calculateTank() {
  const source = document.querySelector("#tankSource").value;
  const bedrooms = Math.max(1, Math.round(numberValue("tankBedrooms")));
  const flow = Math.max(0, numberValue("tankFlow"));
  let gallons = 1000;
  let basis = "";

  if (source === "single") {
    gallons = bedrooms <= 4 ? 1000 : 1000 + (bedrooms - 4) * 250;
    basis = "Single-family: 1,000 gallons through four bedrooms, then 250 gallons per additional bedroom.";
  } else if (source === "residential") {
    gallons = Math.max(1000, bedrooms * 250);
    basis = "Residential source other than one single-family residence: 250 gallons per bedroom, 1,000 gallon minimum.";
  } else {
    gallons = flow * 3;
    basis = "Nonresidential source: three times design flow.";
  }

  document.querySelector("#tankResult").innerHTML = `
    <strong>${format(gallons)} gallons minimum</strong>
    ${basis} Source basis: WAC 246-272A-0232.
  `;
}

function calculatePump() {
  const dose = Math.max(0, numberValue("pumpDose"));
  const gpm = Math.max(0.1, numberValue("pumpGpm"));
  const staticLift = Math.max(0, numberValue("staticLift"));
  const friction = Math.max(0, numberValue("frictionLoss"));
  const misc = Math.max(0, numberValue("miscHead"));
  const minutes = dose / gpm;
  const tdh = staticLift + friction + misc;

  document.querySelector("#pumpResult").innerHTML = `
    <strong>${format(minutes, 2)} minutes runtime</strong>
    Rough total dynamic head: ${format(tdh, 1)} ft. Runtime is dose volume divided by selected pump output.
  `;
}


const nitrogenCalculatorData = {
  withTreatment: {
    label: "With Nitrogen Treatment",
    tln: 113.64
  },
  withoutTreatment: {
    label: "Without Nitrogen Treatment",
    tln: 113.64 * 2
  },
  publicRates: [3.8, 6.3, 5.1, 4.3, 3.9, 3.6],
  nonpublicRates: [1.9, 1.9, 1.9, 1.9, 0.9, 0.9],
  minimumPublicSf: [21780, 13000, 16000, 19000, 21000, 23000],
  minimumNonpublicAcres: [1, 1, 1, 1, 2, 2],
  acreSf: 43560
};

function nitrogenInputNumber(id) {
  const value = Number(document.querySelector(`#${id}`)?.value);
  return Number.isFinite(value) ? value : 0;
}

function calculateNitrogen() {
  const treatment = document.querySelector("#nitrogenTreatment")?.value || "withTreatment";
  const water = document.querySelector("#nitrogenWater")?.value || "public";
  const soil = Math.min(6, Math.max(1, Math.round(nitrogenInputNumber("nitrogenSoil")))) - 1;
  const flow = Math.max(0, nitrogenInputNumber("nitrogenFlow"));
  const lotSize = Math.max(0, nitrogenInputNumber("nitrogenLotSize"));

  const tln = nitrogenCalculatorData[treatment].tln;
  const production = tln * flow;
  const rate = water === "public"
    ? nitrogenCalculatorData.publicRates[soil]
    : nitrogenCalculatorData.nonpublicRates[soil];

  const allowable = lotSize * rate;
  const minimumArea = water === "public"
    ? nitrogenCalculatorData.minimumPublicSf[soil]
    : nitrogenCalculatorData.minimumNonpublicAcres[soil] * nitrogenCalculatorData.acreSf;

  const minimumAreaLabel = water === "public"
    ? `${format(minimumArea)} sq ft`
    : `${format(nitrogenCalculatorData.minimumNonpublicAcres[soil], 0)} acre${nitrogenCalculatorData.minimumNonpublicAcres[soil] === 1 ? "" : "s"} (${format(minimumArea)} sq ft)`;

  const loading = lotSize > 0 ? production / lotSize : 0;
  const meetsMinimumArea = lotSize >= minimumArea;
  const meetsNitrogenLoading = lotSize > 0 && allowable >= production;
  const pass = meetsMinimumArea && meetsNitrogenLoading;

  const result = document.querySelector("#nitrogenResult");
  if (!result) return;

  result.className = `nitrogen-result ${pass ? "pass" : "fail"}`;
  result.innerHTML = `
    <div class="nitrogen-result-status">${pass ? "PASS" : "DOES NOT MEET"}</div>
    <div class="nitrogen-result-message">
      ${pass
        ? "The proposed lot size meets the selected WCHCS nitrogen criteria represented in this calculator."
        : "The proposed lot size does not meet the selected WCHCS nitrogen criteria. Increase the usable lot area or review the treatment/water-supply assumptions."}
    </div>
  `;

  document.querySelector("#nitrogenProduction").textContent =
    `${format(production, 1)} mgN/day`;

  document.querySelector("#nitrogenRate").textContent =
    `${format(rate, 2)} mgN/sf`;

  document.querySelector("#nitrogenAllowable").textContent =
    `${format(allowable, 1)} mgN/day`;

  document.querySelector("#nitrogenLoading").textContent =
    lotSize > 0 ? `${format(loading, 2)} mgN/sf` : "—";

  document.querySelector("#nitrogenMinimumArea").textContent = minimumAreaLabel;

  document.querySelector("#nitrogenFormula").innerHTML = `
    <div><strong>Nitrogen production:</strong> ${format(tln, 2)} mg/gal × ${format(flow, 0)} gal/day = ${format(production, 1)} mgN/day</div>
    <div><strong>Maximum allowable nitrogen:</strong> ${format(lotSize, 0)} sf × ${format(rate, 2)} mgN/sf = ${format(allowable, 1)} mgN/day</div>
    <div><strong>Actual loading:</strong> ${lotSize > 0 ? `${format(production, 1)} ÷ ${format(lotSize, 0)} = ${format(loading, 2)} mgN/sf` : "Enter a proposed lot size."}</div>
  `;
}

function setupNitrogenCalculator() {
  if (document.querySelector("#nitrogen-calculator")) return;

  const pumpForm = document.querySelector("#pumpCalc");
  const anchor = pumpForm?.closest("article, section, .calculator-card, .calc-card, .calculator-panel") || pumpForm?.parentElement;
  if (!anchor) return;

  const section = document.createElement("section");
  section.id = "nitrogen-calculator";
  section.className = "nitrogen-calculator-section";
  section.innerHTML = `
    <div class="nitrogen-calculator-shell">
      <div class="nitrogen-calculator-header">
        <p class="card-kicker">WCHCS • Interactive Tool</p>
        <h2>WCHCS Nitrogen Calculator</h2>
        <p>
          Browser-based implementation of the <strong>Nitrogen Calculator 8.21.2025.xlsx</strong>
          workbook. It follows the workbook's treatment, design-flow, water-supply, soil-type,
          loading-rate, and minimum-land-area logic.
        </p>
      </div>

      <div class="nitrogen-grid">
        <div class="nitrogen-panel">
          <h3>Inputs</h3>

          <label for="nitrogenTreatment">Nitrogen treatment</label>
          <select id="nitrogenTreatment">
            <option value="withTreatment">With Nitrogen Treatment</option>
            <option value="withoutTreatment">Without Nitrogen Treatment</option>
          </select>

          <label for="nitrogenFlow">Daily design flow (gallons/day)</label>
          <input id="nitrogenFlow" type="number" min="0" step="1" value="360">

          <label for="nitrogenWater">Water supply</label>
          <select id="nitrogenWater">
            <option value="public">Public Water</option>
            <option value="nonpublic">Nonpublic Water</option>
          </select>

          <label for="nitrogenSoil">Soil Type</label>
          <select id="nitrogenSoil">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4" selected>4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <label for="nitrogenLotSize">Proposed lot size / usable land area (sq ft)</label>
          <input id="nitrogenLotSize" type="number" min="0" step="1" value="14810">

          <p class="nitrogen-note">
            For Nonpublic Water, the workbook's minimum-land-area requirement is expressed in acres;
            this calculator converts the requirement to square feet using 1 acre = 43,560 sq ft.
          </p>
        </div>

        <div class="nitrogen-panel nitrogen-results-panel">
          <h3>Results</h3>

          <div id="nitrogenResult" class="nitrogen-result"></div>

          <div class="nitrogen-result-grid">
            <div><span>Nitrogen production</span><strong id="nitrogenProduction">—</strong></div>
            <div><span>Allowable loading rate</span><strong id="nitrogenRate">—</strong></div>
            <div><span>Maximum allowable nitrogen</span><strong id="nitrogenAllowable">—</strong></div>
            <div><span>Actual nitrogen loading</span><strong id="nitrogenLoading">—</strong></div>
            <div><span>Minimum land area</span><strong id="nitrogenMinimumArea">—</strong></div>
          </div>

          <details class="nitrogen-details">
            <summary>Show calculation details</summary>
            <div id="nitrogenFormula"></div>
          </details>
        </div>
      </div>

      <div class="nitrogen-footer">
        <strong>Source:</strong> Whatcom County Health and Community Services,
        <a
          href="assets/downloads/Nitrogen%20Calculator%208.21.2025.xlsx"
          download="Nitrogen Calculator 8.21.2025.xlsx"
          target="_blank"
          rel="noreferrer"
        ><em>Nitrogen Calculator 8.21.2025.xlsx</em></a>.
        This is an interactive web implementation for convenience and is not a replacement for
        County review or the original workbook.
      </div>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = `
    .nitrogen-calculator-section {
      margin: 3rem 0;
      scroll-margin-top: 6rem;
    }
    .nitrogen-calculator-shell {
      border: 1px solid rgba(30, 50, 70, .14);
      border-radius: 18px;
      padding: clamp(1.25rem, 3vw, 2rem);
      background: #fff;
      box-shadow: 0 12px 35px rgba(25, 45, 65, .08);
    }
    .nitrogen-calculator-header {
      max-width: 850px;
      margin-bottom: 1.5rem;
    }
    .nitrogen-calculator-header h2 {
      margin: .2rem 0 .6rem;
    }
    .nitrogen-grid {
      display: grid;
      grid-template-columns: minmax(280px, .9fr) minmax(320px, 1.1fr);
      gap: 1.25rem;
    }
    .nitrogen-panel {
      border: 1px solid rgba(30, 50, 70, .12);
      border-radius: 14px;
      padding: 1.15rem;
      background: #fafcfd;
    }
    .nitrogen-panel h3 {
      margin-top: 0;
    }
    .nitrogen-panel label {
      display: block;
      font-weight: 650;
      margin: 1rem 0 .35rem;
    }
    .nitrogen-panel input,
    .nitrogen-panel select {
      width: 100%;
      box-sizing: border-box;
      min-height: 42px;
      padding: .65rem .7rem;
      border: 1px solid rgba(30, 50, 70, .22);
      border-radius: 8px;
      background: #fff;
      font: inherit;
    }
    .nitrogen-note {
      font-size: .88rem;
      opacity: .78;
      margin-top: 1rem;
    }
    .nitrogen-result {
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    .nitrogen-result.pass {
      border: 1px solid rgba(30, 120, 70, .28);
      background: rgba(30, 120, 70, .08);
    }
    .nitrogen-result.fail {
      border: 1px solid rgba(170, 70, 45, .3);
      background: rgba(170, 70, 45, .08);
    }
    .nitrogen-result-status {
      font-size: 1.15rem;
      font-weight: 800;
      letter-spacing: .03em;
    }
    .nitrogen-result-message {
      margin-top: .35rem;
      font-size: .92rem;
    }
    .nitrogen-result-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: .7rem;
    }
    .nitrogen-result-grid > div {
      padding: .8rem;
      border-radius: 10px;
      background: #fff;
      border: 1px solid rgba(30, 50, 70, .1);
    }
    .nitrogen-result-grid span {
      display: block;
      font-size: .8rem;
      opacity: .72;
      margin-bottom: .25rem;
    }
    .nitrogen-result-grid strong {
      display: block;
      font-size: 1rem;
    }
    .nitrogen-details {
      margin-top: 1rem;
      padding-top: .8rem;
      border-top: 1px solid rgba(30, 50, 70, .1);
    }
    .nitrogen-details summary {
      cursor: pointer;
      font-weight: 650;
    }
    .nitrogen-details #nitrogenFormula {
      display: grid;
      gap: .45rem;
      margin-top: .75rem;
      font-size: .9rem;
      line-height: 1.5;
    }
    .nitrogen-footer {
      margin-top: 1.15rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(30, 50, 70, .1);
      font-size: .82rem;
      opacity: .78;
    }
    .nitrogen-footer a {
      text-decoration: underline;
      text-underline-offset: 2px;
      font-weight: 650;
    }
    @media (max-width: 760px) {
      .nitrogen-grid {
        grid-template-columns: 1fr;
      }
      .nitrogen-result-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);

  // Insert the calculator immediately after the Useful Links container.
  anchor.parentElement?.insertBefore(section, anchor.nextSibling);

  const inputs = [
    "nitrogenTreatment",
    "nitrogenFlow",
    "nitrogenWater",
    "nitrogenSoil",
    "nitrogenLotSize"
  ];

  inputs.forEach((id) => {
    document.querySelector(`#${id}`)?.addEventListener("input", calculateNitrogen);
    document.querySelector(`#${id}`)?.addEventListener("change", calculateNitrogen);
  });

  calculateNitrogen();
}

function setupCalculators() {
  const soilSelect = document.querySelector("#soilType");
  soilSelect.innerHTML = Object.entries(loadingRates)
    .map(([value, soil]) => `<option value="${value}">${escapeHtml(soil.label)}</option>`)
    .join("");
  soilSelect.value = "4";

  ["flowCalc", "loadingCalc", "trenchCalc", "tankCalc", "pumpCalc"].forEach((formId) => {
    document.querySelector(`#${formId}`).addEventListener("input", () => {
      calculateFlow();
      calculateLoading();
      calculateTrench();
      calculateTank();
      calculatePump();
    });
  });

  calculateFlow();
  calculateLoading();
  calculateTrench();
  calculateTank();
  calculatePump();
}

function getStoredNotes() {
  try {
    return JSON.parse(localStorage.getItem("ossReferenceNotes") || "[]");
  } catch {
    return [];
  }
}

function saveStoredNotes(notes) {
  localStorage.setItem("ossReferenceNotes", JSON.stringify(notes));
}

function renderNotes() {
  const localNotes = getStoredNotes();
  const allNotes = [...localNotes, ...siteContent.notes];
  const notesList = document.querySelector("#notesList");

  notesList.innerHTML = allNotes
    .map((note, index) => {
      const search = [note.type, note.title, note.body].join(" ");
      const removable = index < localNotes.length;
      return `
        <article class="note-card searchable" data-search="${escapeHtml(search)}">
          <p class="card-kicker">${escapeHtml(note.type)}</p>
          <h3>${escapeHtml(note.title)}</h3>
          <p>${escapeHtml(note.body)}</p>
          ${removable ? `<div class="link-row"><button class="primary-button" type="button" data-remove-note="${index}">Remove</button></div>` : ""}
        </article>
      `;
    })
    .join("");

  notesList.querySelectorAll("[data-remove-note]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = getStoredNotes();
      next.splice(Number(button.dataset.removeNote), 1);
      saveStoredNotes(next);
      renderNotes();
      applySearch();
    });
  });
}

function setupNotes() {
  document.querySelector("#noteForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#noteTitle").value.trim();
    const type = document.querySelector("#noteType").value;
    const body = document.querySelector("#noteBody").value.trim();
    if (!title || !body) return;

    const notes = getStoredNotes();
    notes.unshift({ type, title, body });
    saveStoredNotes(notes);
    event.target.reset();
    renderNotes();
    applySearch();
  });

  renderNotes();
}

function applySearch() {
  const query = document.querySelector("#siteSearch").value.trim().toLowerCase();
  const cards = [...document.querySelectorAll(".searchable")];

  cards.forEach((card) => {
    const haystack = (card.dataset.search || card.textContent).toLowerCase();
    card.classList.toggle("hidden", Boolean(query) && !haystack.includes(query));
  });

  document.querySelectorAll(".source-group").forEach((group) => {
    const visibleCards = group.querySelectorAll(".searchable:not(.hidden)");
    group.classList.toggle("hidden", Boolean(query) && visibleCards.length === 0);
  });
}

function setupSearch() {
  document.querySelector("#siteSearch").addEventListener("input", applySearch);
}

function setupActiveNav() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-18% 0px -68% 0px", threshold: [0.01, 0.2, 0.5] }
  );

  sections.forEach((section) => observer.observe(section));
}

renderCards();
setupNitrogenCalculator();
setupCalculators();
setupNotes();
setupSearch();
setupActiveNav();

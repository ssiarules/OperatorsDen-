# Barker Building Plant Tracker: Project Brief

Reference file for Jhonson and Claude. Purpose: one place to check progress and to hand Claude the full picture when building through GitHub PRs.

## Reason

Buildings are full of plants and nobody keeps a record of them. Plants get watered, trimmed, fertilized, or ignored, and the knowledge lives in someone's head. When a plant declines, nobody can say what changed, what was tried, or what it needs next. Building teams manage plants by memory and guesswork.

## Problem

- No per plant record. No photos over time, no condition history, no visit log.
- No watering proof. An irrigation controller may run, but nobody connects a zone run to what happened to the plants in that zone.
- Decisions get lost. Curtain or move, replace or rescue, buy fertilizer: these need a building manager's call, and today they live in texts and memory.
- Hand watered plants are invisible to every system. Interior plants on Floor 8 are not on any controller, so no portal covers them at all.
- The irrigation portal knows water, not plants. Hydrawise controls zones. It does not know a money tree from a kentia palm, or that one plant has one frond left.

## Goal

One live record per plant and per irrigation zone, shared by Jhonson and the building manager:

- Every plant: photos, current condition, history, trend (better, same, worse), visits, treatments.
- Every irrigation zone: running now or idle, next run, run length, and which planters it waters.
- Watering joined to outcomes: a zone run shows up next to what happened to those plants afterward.
- Decisions in one place: approve or decline, with a record of the call.
- One page Jacob can open and trust, instead of two apps and a guess.

## First client: Barker Building

Manager: Jacob Van Horn. Pilot: Floor 8, Office 1, 14 plants, live at barkers-plant-tracker.netlify.app. Rooftop: bougainvillea planters on irrigation, plan draft in progress.

What "proved" means at Barker, with real data:

1. Floor 8 visits logged with before and after photos, soil checks, and trends.
2. Jacob's three decisions closed (P-12 curtain, P-02 replace or rescue, P-01 fertilizer).
3. Rooftop irrigation zones live in the tracker: real zone names, real run status, real next runs.
4. At least one full cycle where watering data and plant outcomes sit side by side.
5. Rooftop plan rebuilt from the actual floor plans (Jhonson brings these Oct 29), with real planter and window counts.

## After Barker: what we offer next

Once Barker is proved with real data, offer the tracker to other building owners, operators, and businesses that have plants throughout their space and do not know how to track and monitor plant life.

The pitch is not a dashboard. It is proof: plants stopped dying, and here is the record. Barker's collected data becomes the case study and the sales evidence. Pricing is not set yet. Pricing comes after proof.

## Infrastructure: how it is built

Keep building on the current site. No rebuild, no separate server to rent.

- Current site: static page on Netlify (the tracker link Jacob already has).
- Server piece: a Netlify Function on the same site. It holds the Hydrawise API key privately and talks to Hydrawise, then hands the page only safe data (zone names, status, next run). The key never sits in page code, and the browser calls our own function, so there is no cross site block.
- Cost at this scale: $0 extra. Netlify's free tier covers far more function runs and bandwidth than a handful of people opening the page a few times a day. No large storage is needed. Zone data is plain text, a few kilobytes per check.
- Irrigation API: Hunter Hydrawise REST API v1.6. Key generated free inside the Hydrawise account by Jacob (Menu, Account Details, Account Settings, Generate API Key). No password sharing. No fee listed for the REST key. A commercial GraphQL and OAuth 2.0 API also exists for formal commercial use; pricing is not published, details via support@hydrawise.com.
- Read only first. Zone visibility (status, next run) ships before any control.
- Control later, only with Jacob's sign off. Start, stop, and suspend for rooftop zones only, through the same function, with a confirm step. No run all stations button for everyone with the link.
- Still needed from Jacob and the building team: the API key, which zones water which planters (zone map), the controller model, and whether a building management system (BMS) already exists.
- BMS note: a BMS is one central dashboard that runs a building's heating, cooling, lights, elevators, security, and sometimes water. If Barker already has one, Hydrawise does not speak its common language (BACnet) natively, so feeding the tracker into it needs a middle piece. If Barker has none, the tracker plus Hydrawise effectively becomes a small BMS for the plants and the roof.

## QR and barcode tags: planned step

Status: planned, not built. Jhonson may do the physical tags tomorrow (Oct 29) alongside the floor plans.

How it works physically:

- One tag per plant, on water resistant stock, attached to the pot front (rim or stake for barrels and urns, on the basket for basket plants).
- The plant's walk number prints large under the code, so the tag works even if a scan fails.
- Each tag is scan tested: scanning it must open that exact plant, not a list.

What happens on a scan:

- The plant's page opens with its photo, condition, and history.
- A guided check-in starts: 3 photos before watering (full plant, soil, leaf close-up), soil check 2 inches down, water and drain, same 3 photos after, notes with the plant number.
- The visit is submitted. Later, a confirmer confirms it and the dashboard updates.
- An uninvited scan (someone not on the team) sees the plant and the guide only. It cannot change data.

Open questions for the tag step: tag size and stock, attachment method per pot type, and whether tags print from the tracker page itself.

## Login and security: planned step

Status: designed in outline, not built. This matters before live control and before selling to other buildings.

Why it is needed:

- Today anyone with the tracker link can read and change the shared state (the shared store has no login and is not guaranteed permanent).
- An irrigation API key must never live in page code. Anyone with the link could read it and control the system.
- Client data (a building's plants, visits, decisions) needs privacy once this becomes a paid product.

What the plan includes:

- Accounts and roles: Jhonson as admin, Jacob as confirmer (can submit and confirm his own visit on the spot), staff as submitters (results stay preliminary until confirmed), viewers read only.
- API key protection: key stored as a private variable on the server side only, used only by the server function, never sent to the browser.
- Private store: move shared state off the public store to a store with access control, before live control ships.
- Encryption: HTTPS in transit, provider encryption at rest, and control actions gated and logged (who ran which zone, when).
- Privacy rule: one building's data never appears in another building's view.

## Differentiation: why this is not a Hydrawise clone

Hydrawise controls water by zone. The tracker records plants, health history, treatments, and decisions, and joins watering to plant outcomes. It also covers hand watered plants Hydrawise never touches. The overlapping part (zone status, run and stop buttons) is real, but it is not the product. The product is the plant record, and the irrigation link makes that record stronger.

## Status

Done:

- Floor 8 tracker live, link sent to Jacob, Jacob replied positively.
- Hydrawise identified as the irrigation system, REST API researched, integration steps defined.
- Rooftop plan draft built through v8 (paused: fence geometry unresolved, awaiting actual floor plans).

In progress:

- Rooftop plan, paused until actual floor plans arrive Oct 29.
- Hydrawise integration, awaiting Jacob's API key, zone map, and BMS answer.

Next:

- Rebuild rooftop plan from actual floor plans and real counts.
- QR and barcode tags: physical plan, print, attach, scan test.
- Infrastructure spec for Claude: Netlify Function, zone dashboard, private store, login and roles.
- Login and security design, before live control and before selling to other buildings.
- Pricing, after Barker proof.

## Open items

- Jacob: API key, zone to planter map, controller model, BMS answer, three decisions.
- Jhonson: actual rooftop floor plans and real planter and window counts (Oct 29), QR tag attachment (possibly Oct 29).
- Team: which GitHub repo holds this brief and the build specs for Claude's PR channel.

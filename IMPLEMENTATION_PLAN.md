# Implementation Plan

## Milestone: Explorer

### Goal
Deliver the first working SIVA Explorer as a Next.js single-page experience with Three.js and React Three Fiber.

### Phase 1: Foundations
- Initialize a Next.js + TypeScript app.
- Add project docs: AGENTS.md, PROJECT_BRIEF.md, and IMPLEMENTATION_PLAN.md.
- Add a basic test harness and package scripts.
- Prepare styling and app shell for a contemplative UI.

### Phase 2: Procedural 3D scene
- Build a procedural sacred geometry scene using React Three Fiber.
- Include central forms inspired by devotional motifs: lotus, trident, crescent, lingam, third-eye, and other symbolic markers.
- Add camera orbiting, zoom, and click-to-select interaction.
- Keep all shapes procedural for this milestone.

### Phase 3: Explanations and controls
- Add English/Tamil descriptive panels for each selected symbol.
- Add a "Just Siva" mode that hides markers and explanatory text.
- Add mobile controls, reduced motion support, and a graphics quality switch.
- Implement accessible labels and contrast-safe UI for keyboard and screen-reader use.

### Phase 4: Honest framing and documentation
- Add clear disclaimers that all sacred symbolism is artistic interpretation.
- Explicitly state the distinction between Pati and Pasu.
- Avoid any scriptural citations unless they are verified and intentionally sourced.
- Document the future Blender replacement plan and asset workflow.

### Phase 5: Validation
- Run the project test script.
- Run the production build.
- Fix any errors and document remaining limitations.

### Future asset pipeline
When this milestone is stable, replace procedural shapes with professional Blender models. Suggested path:
1. Create a low-poly master scene in Blender.
2. Export glTF/GLB assets.
3. Load them with React Three Fiber or Drei.
4. Preserve the same spiritual framing, controls, and accessibility behavior.

## Known limitations for this milestone
- Procedural geometry is intentionally simple and may not match handcrafted studio models.
- Symbol interpretation remains artistic and devotional, not scriptural authority.
- The app is a single Explorer module and is deliberately limited until the first milestone is validated.

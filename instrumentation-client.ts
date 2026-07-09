// Runs in the browser after the HTML loads but before React hydrates.
// Open the browser console to see this fire on every load and navigation.
console.log("[instrumentation-client.ts] client instrumentation loaded");

export function onRouterTransitionStart(
  url: string,
  navigationType: "push" | "replace" | "traverse"
) {
  console.log(`[instrumentation-client.ts] navigation (${navigationType}) → ${url}`);
}

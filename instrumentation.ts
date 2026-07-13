// Runs once when the server starts, before it accepts requests.
// Watch the terminal running `next dev` to see this fire.
export function register() {
  console.log(
    `[instrumentation.ts] server instance registered (runtime: ${process.env.NEXT_RUNTIME})`
  );
}

export async function onRequestError(
  err: unknown,
  request: { path: string; method: string },
  context: { routerKind: string; routeType: string }
) {
  const message = err instanceof Error ? err.message : String(err);
  console.error(
    `[instrumentation.ts] onRequestError: ${message} — ${context.routeType} ${request.method} ${request.path}`
  );
}

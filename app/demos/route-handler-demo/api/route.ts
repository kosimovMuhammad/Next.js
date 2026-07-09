export async function GET() {
  return Response.json({
    message: "Hello from route.js",
    time: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ method: "POST", echoed: body });
}

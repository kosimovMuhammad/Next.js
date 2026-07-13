import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "RouteHandlerDemo",
  });

  return Response.json({
    message: t("apiMessage"),
    time: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ method: "POST", echoed: body });
}

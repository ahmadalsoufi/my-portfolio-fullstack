import { NextRequest } from "next/server";

// DB function
import { getBlog } from "@/app/(content)/blogs/blogs";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    return Response.json(await getBlog({ slug }));
  } catch (err) {
    if (err instanceof Error)
      return Response.json({ error: err.message }, { status: 500 });
    return Response.json({ error: "Failed to load blog" }, { status: 500 });
  }
}

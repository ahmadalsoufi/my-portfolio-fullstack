import { NextRequest } from "next/server";

// DB function
import { getBlogs } from "@/app/(content)/blogs/blogs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const latest = searchParams.get("latest");
  const searchQuery = searchParams.get("search");
  const page = searchParams.get("page");
  const order = searchParams.get("order");

  try {
    return Response.json(await getBlogs({ latest, searchQuery, page, order }));
  } catch (err) {
    if (err instanceof Error)
      return Response.json({ error: err.message }, { status: 500 });
    return Response.json({ error: "Failed to load blogs" }, { status: 500 });
  }
}

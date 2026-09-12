// Types
import { CategoriesNames } from "@/generated/prisma/enums";
import type { NextRequest } from "next/server";

// DB function
import { getProjects } from "@/app/(content)/projects/projects";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const featured = searchParams.get("featured");
  const category = searchParams.get("category") as CategoriesNames;
  const searchQuery = searchParams.get("search");
  const page = searchParams.get("page");

  try {
    return Response.json(
      await getProjects({ featured, category, searchQuery, page }),
    );
  } catch (err) {
    if (err instanceof Error)
      Response.json({ error: err.message }, { status: 500 });

    return Response.json({ error: "Failed to load project" }, { status: 500 });
  }
}

import { getCategories } from "@/app/(content)/projects/projects";

export async function GET() {
  try {
    return Response.json(await getCategories());
  } catch (err) {
    if (err instanceof Error)
      return Response.json({ error: err.message }, { status: 500 });
    return Response.json(
      {
        error: "Failed to load projects categories!",
      },
      { status: 500 },
    );
  }
}

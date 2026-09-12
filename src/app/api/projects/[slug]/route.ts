// DB function
import { getProject } from "@/app/(content)/projects/projects";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    return Response.json(await getProject({ slug }));
  } catch (err) {
    if (err instanceof Error)
      return Response.json({ error: err.message }, { status: 500 });
    return Response.json({ error: "Failed to load project" }, { status: 500 });
  }
}

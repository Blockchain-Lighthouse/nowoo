import supabase from "@/app/_lib/utils/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const res = await supabase
    .from("monsters")
    .select("id, maple_mob_id, name_kor")
    .ilike("name_kor", `%${query}%`)
    .limit(5);

  return new Response(JSON.stringify(res));
}

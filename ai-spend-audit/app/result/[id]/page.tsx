async function getAudit(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/result?id=${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Result({
  params,
}: {
  params: { id: string };
}) {
  const data = await getAudit(params.id);

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold">
        You Can Save ${data.savings}/mo
      </h1>

      <p className="mt-6 text-xl">
        {data.summary}
      </p>
    </main>
  );
}
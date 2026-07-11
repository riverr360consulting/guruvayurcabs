import PageHeader from "@/components/PageHeader";

const posts = [
  {
    title: "5 Places to Visit Near Guruvayur Temple",
    excerpt:
      "Planning a trip beyond the temple? Here are five nearby spots worth the detour.",
  },
  {
    title: "Guruvayur to Kochi Airport: What to Expect",
    excerpt:
      "Travel time, route options and tips for a smooth airport transfer.",
  },
  {
    title: "Planning a Kerala Pilgrimage Tour",
    excerpt:
      "A simple guide to combining Guruvayur with other major temple towns.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Travel tips and guides for your Guruvayur trip"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card"
            >
              <h2 className="text-base font-bold text-brand-900">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-brand-950/60">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-brand-950">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

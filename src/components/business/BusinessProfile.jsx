import business from "../../data/business.js";

export default function BusinessProfile() {
  return (
    <section aria-labelledby="business-name" className="py-10 text-center">
      <div
        className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full bg-slate-200 text-2xl font-bold text-slate-600"
        aria-hidden="true"
      >
        PP
      </div>
      <h1
        id="business-name"
        className="text-3xl font-bold tracking-tight text-slate-950"
      >
        {business.name}
      </h1>
      <p className="mt-2 text-slate-600">{business.location}</p>
      <p className="mt-4 text-sm text-slate-500">
        Business profile and contact information
      </p>
    </section>
  );
}

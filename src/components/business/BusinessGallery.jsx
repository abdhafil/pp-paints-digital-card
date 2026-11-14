import { ArrowUpRight } from 'lucide-react'
import business from '../../data/business.js'

export default function BusinessGallery() {
  return <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{business.categories.map((category) => <article key={category.name} className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_35px_rgba(23,40,63,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,40,63,0.13)]"><div className="relative h-52 overflow-hidden"><img src={category.image} alt="" loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#17283F]"><ArrowUpRight size={17} /></span></div><div className="p-5"><h3 className="font-bold text-[#17283F]">{category.name}</h3><p className="mt-2 text-sm leading-6 text-[#66717E]">{category.description}</p></div></article>)}</div>
}

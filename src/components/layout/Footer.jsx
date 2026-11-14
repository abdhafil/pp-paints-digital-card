import business from "../../data/business.js";
import logo from "../../assets/images/logo.jpg";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#101D30] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div>
          <a
            href="#home"
            aria-label={`${business.name} home`}
            className="inline-flex rounded-xl bg-white p-1"
          >
            <img
              src={logo}
              alt={business.name}
              className="h-14 w-14 rounded-lg object-contain"
            />
          </a>
          <p className="mt-3 text-sm text-slate-300">
            Kalladikode, Palakkad, Kerala.
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {business.phones.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="text-sm text-slate-300 transition hover:text-orange-300"
              >
                {/* {phone.number} */}
              </a>
            ))}
          </div>
        </div>
        {/* <nav
          aria-label="Footer social links"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300"
        >
          {Object.entries(business.social).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 capitalize transition hover:text-orange-300"
            >
              {name}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </nav> */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} {business.name}
        </p>
      </div>
    </footer>
  );
}

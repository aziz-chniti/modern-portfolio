import { Heart } from "lucide-react";

function Footer() {
  const navName = [
    "Services",
    "Works",
    "Resume",
    "Skills",
    "Testimonials",
    "Contact",
  ];

  return (
    <div className="bg-black">
      <div id="contact" className="py-16 xl:w-8/12 mx-auto">
        <div className="flex flex-col items-center">
          <a className="cursor-pointer mb-6 text-primary-dark text-3xl font-bold bg-gradient-to-l from-slate-100 to-slate-400 w-11 h-11 rounded-sm flex justify-center items-center"
          href="/"
          >
            A
          </a>
          <nav className="flex gap-4">
            {navName.map((name, index) => (
              <a
                className="relative pb-1 group font-bold text-sm"
                key={index}
                href={`#${name.toLowerCase()}`}
              >
                {name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-primary-l group-hover:w-[80%] duration-300"></span>
              </a>
            ))}
          </nav>
          <p className="mt-3 text-primary-dark">
            &copy; {new Date().getFullYear()}  All Rights Reserved by <a className="text-primary"  href="https://youtube.com/@Barmajli" target="_blank">Barmajli</a> 
            <span className="inline-block relative top-1 ml-2 text-red-600 animate-heartbeat"><Heart fill="red" size={18}/></span>
          </p>
          <a href="https://www.upwork.com/freelancers/~014afdcf19c4e3bb74" target="_blank" className="text-primary underline">get in touch</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

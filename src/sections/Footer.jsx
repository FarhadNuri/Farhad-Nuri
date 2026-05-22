const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="py-8 px-[5%] bg-(--bg2) border-t border-(--border)">
        <div className="max-w-275 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="font-[Syne] font-bold text-lg grad">
            {"<Farhad.Nuri />"}
          </span>

          {/* copyrights */}
          <p className="text-sm text-(--text2) text-center">
            © {year} Farhad Nuri 

          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { name: "GitHub", url: "https://github.com/FarhadNuri" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/farhad-nuri-ba99a62a5/" },
              { name: "Facebook", url: "https://www.facebook.com/farhad.hosen.7" }
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-(--text2) hover:text-(--accent) transition"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

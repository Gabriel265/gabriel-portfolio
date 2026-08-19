export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hud-bar border-t-4 border-b-0 mt-16 px-4 py-8 text-center">
      <p className="font-pixel text-[0.55rem] sm:text-[0.65rem] text-fg/70">
        © {year} GABRIEL KADIWA — GAME OVER? NOT QUITE.
      </p>
    </footer>
  );
}

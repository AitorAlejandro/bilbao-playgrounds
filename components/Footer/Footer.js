export function Footer() {
  const now = new Date();
  return (
    <footer>
      <p>Copyright {now.getFullYear()} Bilbao Playgrounds :)</p>
    </footer>
  );
}

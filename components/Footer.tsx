export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Víctor Trisac
        </p>
        <div className="flex gap-6 font-mono text-xs">
          <a
            href="https://www.linkedin.com/in/victortrisac/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-cream transition-colors"
          >
            linkedin ↗
          </a>
          <a
            href="https://github.com/VTrisac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-cream transition-colors"
          >
            github ↗
          </a>
          <a
            href="mailto:Victorperez694@gmail.com"
            className="text-muted hover:text-cream transition-colors"
          >
            email ↗
          </a>
        </div>
      </div>
    </footer>
  )
}

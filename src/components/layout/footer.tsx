export function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} saurabh.photos. All rights reserved.</p>
          <p>Built with React 19 + TypeScript + Vite</p>
        </div>
      </div>
    </footer>
  );
}

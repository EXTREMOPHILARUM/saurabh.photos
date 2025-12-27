export function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-center items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} saurabh.photos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

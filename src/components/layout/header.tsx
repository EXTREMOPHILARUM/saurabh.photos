import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <Compass className="h-6 w-6" />
          <span>saurabh.photos</span>
        </Link>
      </div>
    </header>
  );
}

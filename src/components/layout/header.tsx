import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CameraIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <CameraIcon className="h-6 w-6" />
          <span>saurabh.photos</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/">
            <Button variant="ghost">Blog</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

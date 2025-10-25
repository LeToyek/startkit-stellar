import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ServerCrash } from 'lucide-react';

export default function Error500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-destructive/10 mb-6">
          <ServerCrash className="w-12 h-12 text-destructive" />
        </div>
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl font-semibold mb-4">Internal Server Error</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! Something went wrong on our end. We're working on fixing it. Please try again later.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </div>
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';

const clients = [
  'Microsoft',
  'Adobe',
  'Google',
  'Apple',
  'Amazon',
  'Meta',
  'Netflix',
  'Spotify'
];

export function ClientLogos() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-[scroll_20s_linear_infinite]">
        {[...clients, ...clients].map((client, index) => (
          <span
            key={index}
            className={cn(
              "flex-shrink-0 text-muted-foreground/50 px-8",
              "transition-opacity hover:text-foreground/80"
            )}
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
}
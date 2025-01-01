import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { ClientLogos } from '@/components/ClientLogos';
import { ProjectSlider } from '@/components/ProjectSlider';

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 p-12 flex flex-col">
        <Logo />
        
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Building Brands & Digital Experiences that connect clients with their customers.
          </h1>
          
          <p className="text-base text-muted-foreground mb-8">
            Over 10 years of experience delivering work that creates value for clients, 
            their stakeholders, and customers.
          </p>
          
          <div className="mb-8">
            <p className="text-lg font-semibold mb-2">Projects start at $20,000.</p>
            <p className="text-sm text-muted-foreground mb-4">
              We define an upfront budget & timeline for each project.
            </p>
            <Button size="lg" className="rounded-full px-8">
              Book a Call
            </Button>
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-4">
            Our work spans ambitious pre-seed startups to global icons.
          </p>
          <ClientLogos />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-screen">
        <ProjectSlider />
      </div>
    </div>
  );
}
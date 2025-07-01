// app/layout.tsx
import './globals.css';



import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PW Institute of Innovation",
  description: "Official website of Physics Wallah Institute of Innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
          <TooltipProvider>
            <Navbar />
            {children}
            <Footer />
            
          </TooltipProvider>
       
      </body>
    </html>
  );
}

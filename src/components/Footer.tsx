import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-purple-500" />
              <span className="text-white font-bold text-xl">Syndicate Digital</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building exceptional digital experiences through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#services">Web Development</FooterLink>
              <FooterLink href="#services">Mobile Apps</FooterLink>
              <FooterLink href="#services">UI/UX Design</FooterLink>
              <FooterLink href="#services">Digital Strategy</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#work">Our Work</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Syndicate Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-purple-500 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="h-6 w-6" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-purple-500 transition-colors">
      {children}
    </a>
  </li>
);
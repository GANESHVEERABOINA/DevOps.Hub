import { Button } from "./button";

interface FooterProps {
  logo: React.ReactNode
  brandName: React.ReactNode
  description?: React.ReactNode // నీ కోట్ (Quote) కోసం ఈ స్లాట్ యాడ్ చేశాను
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  description,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    // లాగ్ అవ్వకుండా 'no-flicker' యాడ్ చేశాను
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 bg-transparent border-t border-white/10 mt-auto no-flicker">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between">
          
          {/* బ్రాండ్ & కోట్ సెక్షన్ */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-x-2" aria-label="DEVOPS.HUB">
              {logo}
              <span className="font-bold text-xl tracking-wider text-white">{brandName}</span>
            </a>
            {description && <div className="max-w-md">{description}</div>}
          </div>

          {/* సోషల్ లింక్స్ */}
          <ul className="flex list-none mt-8 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white gpu-layer"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 md:mt-8 lg:grid lg:grid-cols-10">
          
          {/* మెయిన్ లింక్స్ */}
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 underline-offset-4 hover:underline hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* లీగల్ లింక్స్ */}
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* కాపీరైట్ */}
          <div className="mt-6 text-sm leading-6 text-gray-500 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  )
}
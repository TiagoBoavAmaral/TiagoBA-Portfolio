import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { setTheme, theme } = useTheme();
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Sobre mim", path: "/" },
    { name: "Experiências", path: "/experiencias" },
    { name: "Projetos", path: "/projetos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-glow border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent group-hover:shadow-glow transition-all duration-300">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"></span>
          </Link>

          {isMobile ? null : ( // Render nothing here, as Sheet will be moved
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors story-link ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-3/4">
                  <div className="flex flex-col gap-4 pt-10">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link
                          to={link.path}
                          className={`text-lg font-medium transition-colors ${
                            location.pathname === link.path
                              ? "text-primary"
                              : "text-foreground/80 hover:text-primary"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:bg-muted"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link to="/contato">
              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 hover:scale-105">
                Contato
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

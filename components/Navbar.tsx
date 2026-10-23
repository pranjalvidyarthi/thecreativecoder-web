"use client"
import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

import { ModeToggle } from './ui/theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Add a new tutorial series here and it shows up in both the desktop
// dropdown and the mobile menu. `href` is the page for that series.
const TUTORIALS = [
    { label: "HTML Tutorials", href: "/tutorials/html" },
    { label: "CSS Tutorials", href: "/tutorials/css" },
    { label: "JavaScript Tutorials", href: "/tutorials/javascript" },
    { label: "Python Tutorials", href: "/tutorials/python" },
    { label: "React Tutorials", href: "/tutorials/react" },
    { label: "Cybersecurity Tutorials", href: "/tutorials/cybersecurity" },
];

const linkClass = "hover:scale-105 hover:font-semibold transition-transform duration-300";

const Navbar = () => {

    const [progress, setProgress] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
      setProgress(20)

      setTimeout(() => {
        setProgress(40)
      }, 100);

      setTimeout(() => {
        setProgress(100)
      }, 400);
     
    }, [pathname])



    useEffect(() => {
      setTimeout(() => {
       setProgress(0)
      }, 50);
    }, [])
    
    
    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <LoadingBar
        color='#933ce6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}><div className="text-lg font-bold">
                    TheCreativeCoder
                </div></Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className={linkClass}> Home
                    </Link>
                    <Link href="/about" className={linkClass}>
                        About
                    </Link>
                    <Link href="/blog" className={linkClass}>
                        Blog
                    </Link>

                    {/* Tutorials dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={`${linkClass} flex items-center gap-1 outline-none data-[state=open]:font-semibold`}
                        >
                            Tutorials
                            <ChevronDown className="size-4" aria-hidden />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                            {TUTORIALS.map((t) => (
                                <DropdownMenuItem key={t.href} asChild>
                                    <Link href={t.href}>{t.label}</Link>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/tutorials" className="font-medium">
                                    View all tutorials
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/contact" className={linkClass}>
                        Contact
                    </Link>
                </div>

                <div className="md:hidden">
                        <span className="mx-2"> 
                            <ModeToggle />
                        </span>
                    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">The Creative Coder</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/" onClick={() => setMenuOpen(false)}> Home
                                        </Link>
                                        <Link href="/about" onClick={() => setMenuOpen(false)}>
                                            About
                                        </Link>
                                        <Link href="/blog" onClick={() => setMenuOpen(false)}>
                                            Blog
                                        </Link>

                                        {/* Tutorials group */}
                                        <div className="flex flex-col gap-3">
                                            <Link
                                                href="/tutorials"
                                                className="font-semibold"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Tutorials
                                            </Link>
                                            <div className="ml-3 flex flex-col gap-3 border-l pl-4">
                                                {TUTORIALS.map((t) => (
                                                    <Link
                                                        key={t.href}
                                                        href={t.href}
                                                        className="text-sm"
                                                        onClick={() => setMenuOpen(false)}
                                                    >
                                                        {t.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        <Link href="/contact" onClick={() => setMenuOpen(false)}>
                                            Contact
                                        </Link>

                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>


            </div>



        </nav>
    );
};

export default Navbar
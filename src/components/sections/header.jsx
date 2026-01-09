import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#0a0a0a]/70">
            <div className="max-w-[1100px] mx-auto px-8">
                <nav className="h-[70px] flex justify-between items-center">
                    <Link href="/public" className="logo text-xl font-extrabold tracking-tighter">
                        Felipe<span className="text-blue-500">.dev</span>
                    </Link>

                    <ul className="nav-links hidden md:flex gap-8">
                        <li>
                            <Link href="#about" className="text-sm font-medium text-[#a1a1a1] hover:text-[#ededed] transition-colors">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="text-sm font-medium text-[#a1a1a1] hover:text-[#ededed] transition-colors">
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <a href="mailto:fgiacominicocco@gmail.com" className="text-sm font-medium text-[#a1a1a1] hover:text-[#ededed] transition-colors">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
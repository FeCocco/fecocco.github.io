import SpotlightCard from '../../ui/SpotlightCard';
import TechBadge from '../../ui/TechBadge';
import CodeProfile from '../about/CodeProfile';

export default function AboutSection() {
    // Arrays simples de strings para facilitar a edição
    const frontendTechs = ['React', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind', 'Next.js'];
    const backendTechs = ['Java', 'PHP', 'Node.js', 'Python', 'API REST'];
    const infraTechs = ['SQL (MySQL/PostgreSQL)', 'Git/GitHub', 'Linux (Red Hat)', 'Docker', 'AWS'];

    return (
        <section id="about" className="py-32 bg-[#0a0a0a]">
            <div className="mx-auto max-w-275 px-8">

                {/* Cabeçalho da Seção */}
                <div className="mb-12 flex items-center gap-4">
                    <h2 className="text-3xl font-extrabold text-[#ededed]">Sobre & Tech</h2>
                    <div className="h-px flex-1 bg-linear-to-r from-neutral-800 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Card 1: Perfil (Ocupa 2 colunas em telas médias/grandes) */}
                    <SpotlightCard className="md:col-span-2">
                        <CodeProfile />
                    </SpotlightCard>

                    {/* Card 2: Frontend */}
                    <SpotlightCard className="flex flex-col justify-between">
                        <div>
                            <h4 className="mb-4 text-xl font-bold text-[#ededed]">Frontend</h4>
                            <div className="flex flex-wrap gap-2">
                                {frontendTechs.map((tech) => (
                                    <TechBadge key={tech} name={tech} />
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Card 3: Backend */}
                    <SpotlightCard className="flex flex-col justify-between">
                        <div>
                            <h4 className="mb-4 text-xl font-bold text-[#ededed]">Backend</h4>
                            <div className="flex flex-wrap gap-2">
                                {backendTechs.map((tech) => (
                                    <TechBadge key={tech} name={tech} />
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Card 4: Ferramentas e Dados (Ocupa 2 colunas para fechar o grid bonito) */}
                    <SpotlightCard className="md:col-span-2">
                        <div className="flex flex-col h-full justify-center">
                            <h4 className="mb-4 text-xl font-bold text-[#ededed]">Ferramentas & Dados</h4>
                            <div className="flex flex-wrap gap-2">
                                {infraTechs.map((tech) => (
                                    <TechBadge key={tech} name={tech} />
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>

                </div>
            </div>
        </section>
    );
}
import ProjetoCard from "@/components/projetoCard";
import {TruckElectric, CalendarCheck, Terminal, LayoutTemplate} from "lucide-react";

export default function Projects() {

    const projectCategories = [
        {
            id: "backend",
            title: "Backend & APIs",
            description: "Sistemas de alta performance, modelagem de dados e regras de negócio complexas.",
            projects: [
                {
                    icon: TruckElectric,
                    title: "e-Move",
                    description: "Plataforma inteligente de recarga e otimizador de trajeto para veículos elétricos. Foco em sustentabilidade e eficiência.",
                    techs: ["Spring Boot", "Java", "Maven", "Spring Data JPA", "Hibernate", "MariaDB/MySQL", "Spring Security", "JWT", "Password Encoding", "Lombok", "Bean Validation"],
                    data: "2025",
                    githubUrl: "https://github.com/FeCocco/e-move-frontend.git",
                    status: "Em Atualização"
                },
                {
                    icon: CalendarCheck,
                    title: "Clinicare",
                    description: "API RESTful para gestão de pacientes e consultas clínicas. Arquitetura em camadas e segurança integrada.",
                    techs: ["Java", "Spring Boot", "Spring Web", "Spring Data JPA", "MariaDB", "Swagger", "Lombok", "JWT"],
                    data: "2025",
                    githubUrl: "https://github.com/FeCocco/sistema-agendamentos",
                    deployUrl: null,
                    status: "Em Desenvolvimento"
                }
            ]
        },
        {
            id: "frontend",
            title: "Frontend",
            description: "Aplicações com foco em experiência do usuário.",
            projects: [
                {
                    icon: TruckElectric,
                    title: "e-Move",
                    description: "Plataforma inteligente de recarga e otimizador de trajeto para veículos elétricos. Foco em sustentabilidade e eficiência.",
                    techs: ["Next.js", "JavaScript", "Zod", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Chart.js", "Recharts"],
                    data: "2025",
                    githubUrl: "https://github.com/FeCocco/e-move-frontend.git",
                    status: "Concluído"
                },
                {
                    icon: LayoutTemplate,
                    title: "Clinicare Website",
                    description: "Uma landing page completa com informações sobre serviços e especialistas, bem como um sistema de autenticação de usuário dinâmico e abrangente para os funcionários.",
                    techs: ["React", "Vite", "JavaScript", "CSS3"],
                    data: "2025",
                    githubUrl: "https://github.com/FeCocco/portfolio-v2",
                    deployUrl: "https://fecocco.github.io/clinicare-frontend/",
                    status: "Em Desenvolvimento"
                }
            ]
        },

        {
            id: "scripts",
            title: "Scripts & Automação",
            description: "Ferramentas CLI e automações de infraestrutura para otimizar fluxos de trabalho.",
            projects: [
                {
                    icon: Terminal,
                    title: "Port Scanner",
                    description: "Um scanner de porta TCP simples para quando você precisa saber quais portas do seu servidor estão abertas.",
                    techs: ["Python"],
                    data: "2025",
                    githubUrl: "https://github.com/FeCocco/port-scanner.git",
                    status: "Concluído"
                }
            ]
        }
    ];

    return (
        <section id="projects" className="py-20 w-full max-w-275 mx-auto px-8">

            <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl font-extrabold text-[#ededed]">Meus Projetos</h2>
                    <div className="h-px flex-1 bg-linear-to-r from-neutral-800 to-transparent"></div>
                </div>
                <p className="text-[#a1a1a1] max-w-150">
                    Uma seleção dos trabalhos que desenvolvi, divididos por área de atuação.
                </p>
            </div>

            <div className="flex flex-col gap-24">
                {projectCategories.map((category) => (
                    <div key={category.id} className="flex flex-col">

                        <div className="mb-8 border-l-2 border-blue-500 pl-4">
                            <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                            <p className="text-sm text-[#a1a1a1]">{category.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {category.projects.map((project, index) => (
                                <ProjetoCard
                                    key={index}
                                    icon={project.icon}
                                    title={project.title}
                                    description={project.description}
                                    techs={project.techs}
                                    data={project.data}
                                    githubUrl={project.githubUrl}
                                    deployUrl={project.deployUrl}
                                    status={project.status}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
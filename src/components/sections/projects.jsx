import ProjetoCard from "@/components/Projetos/projetoCard";

import { TruckElectric, CalendarCheck } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20 w-full max-w-[1100px] mx-auto px-6">
            <div className="text-2xl font-extrabold mb-12 flex items-center gap-4 text-[#ededed]">
                Projetos Recentes
                <div className="h-px flex-1 bg-gradient-to-r from-[#262626] to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
                {/* Projeto 1 */}
                    <ProjetoCard
                        icon={TruckElectric}
                        title="e-Move"
                        description="Plataforma inteligente de recarga e otimizador de trajeto para veículos elétricos. Foco em sustentabilidade e eficiência."
                        techs={["Java", "React", "API Google Maps"]}
                        data={ "2025"}
                    />
                {/* Projeto 2 */}
                    <ProjetoCard
                        icon={CalendarCheck}
                        title="Sistema de Agendamentos"
                        description="API RESTful para gestão de pacientes e consultas clínicas. Arquitetura robusta e escalável."
                        techs={["Java", "MySQL", "REST API"]}
                        data="2026"
                    />

                </div>
        </section>
    );
}
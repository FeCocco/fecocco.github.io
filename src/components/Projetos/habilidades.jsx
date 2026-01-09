export default function Habilidades({ techs = [] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {techs.map((tech, index) => (
                <span
                    key={index}
                    className="px-2.5 py-1 text-[11px] font-mono bg-[#0a0a0a] border border-[#262626] rounded text-[#a1a1a1] hover:border-blue-500 transition-colors"
                >
                    {tech}
                </span>
            ))}
        </div>
    )
}
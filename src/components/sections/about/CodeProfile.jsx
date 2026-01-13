export default function CodeProfile() {
    return (
        <div className="font-mono text-sm leading-relaxed">
            <div className="mb-4 flex items-center text-lg font-bold text-[#ededed]">
                {/* Ícone de terminal (FontAwesome) */}
                <i className="fa-solid fa-terminal mr-3 text-blue-500"></i>
                developer_profile.json
            </div>

            <div className="rounded-lg border border-[#333] bg-black p-6 text-blue-200">
        <pre className="whitespace-pre-wrap wrap-break-word">
          {`{
  `}
            <span className="text-red-400">"nome"</span>: <span className="text-blue-300">"Felipe Giacomini Cocco"</span>,
            {`
  `}
            <span className="text-red-400">"formacao"</span>: <span className="text-blue-300">"Sistemas de Informação - FHO"</span>,
            {`
  `}
            <span className="text-red-400">"foco"</span>: <span className="text-blue-300">"Full Stack Development"</span>,
            {`
  `}
            <span className="text-red-400">"local"</span>: <span className="text-blue-300">"Brasil"</span>,
            {`
  `}
            <span className="text-red-400">"bio"</span>: <span className="text-blue-300">"Unindo a base acadêmica com experiência prática."</span>
            {`
}`}
        </pre>
            </div>
        </div>
    );
}
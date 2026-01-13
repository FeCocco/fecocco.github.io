export default function TechBadge({ name }) {
    return (
        <span className="rounded-md border border-transparent bg-white/5 px-3 py-1.5 font-mono text-xs text-neutral-400 transition-all duration-300 hover:border-blue-500 hover:text-blue-500">
      {name}
    </span>
    );
}
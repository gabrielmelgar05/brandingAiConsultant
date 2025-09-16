type Props = { count?: number };

export default function AvatarStack({ count = 5 }: Props) {
  const items = Array.from({ length: count });
  return (
    <div className="flex items-center">
      <div className="flex -space-x-3">
        {items.map((_, i) => <div key={i} className="avatar ring-0" />)}
      </div>
      <span className="ml-3 text-xs opacity-80">+3.000 membros ativos</span>
    </div>
  );
}

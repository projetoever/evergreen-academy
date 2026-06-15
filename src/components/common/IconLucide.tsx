import { icons, HelpCircle, type LucideProps } from "lucide-react";

export function IconLucide({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (icons as Record<string, React.ComponentType<LucideProps>>)[name] ?? HelpCircle;
  return <Cmp {...props} />;
}

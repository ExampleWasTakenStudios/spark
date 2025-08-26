import { ReactNode } from 'react';

interface LeadTextProps {
  children: ReactNode;
  className?: string;
}

export const LeadText = ({ className, children }: LeadTextProps) => {
  const css = 'text-muted-foreground text-xl ' + className;
  return <p className={css}>{children}</p>;
};

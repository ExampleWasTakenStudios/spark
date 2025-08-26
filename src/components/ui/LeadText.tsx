import { ReactNode } from 'react';

interface LeadTextProps {
  children: ReactNode;
}

export const LeadText = ({ children }: LeadTextProps) => {
  return <p className="text-muted-foreground text-xl">{children}</p>;
};

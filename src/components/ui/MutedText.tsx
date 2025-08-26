import { ReactNode } from 'react';

interface MutedTextProps {
  children: ReactNode;
}

export const MutedText = ({ children }: MutedTextProps) => {
  return <p className="text-muted-foreground text-sm">{children}</p>;
};

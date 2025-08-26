import { ReactNode } from 'react';

interface MutedTextProps {
  className?: string;
  children: ReactNode;
}

export const MutedText = ({ className, children }: MutedTextProps) => {
  const css = 'text-muted-foreground text-sm ' + className;
  return <p className={css}>{children}</p>;
};

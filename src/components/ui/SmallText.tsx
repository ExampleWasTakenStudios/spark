import { ReactNode } from 'react';

interface SmallTextProps {
  children: ReactNode;
  className?: string;
}

export const SmallText = ({ className, children }: SmallTextProps) => {
  const css = 'text-sm leading-none font-medium ' + className;
  return <small className={css}>{children}</small>;
};

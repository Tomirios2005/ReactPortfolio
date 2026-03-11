import type { ReactNode } from 'react';
export interface Proyecto {
  titulo: string;
  desc: string;
  tech: string[];
  linkGithub: string;
  linkDeployment?: string;
  icono: ReactNode;
}
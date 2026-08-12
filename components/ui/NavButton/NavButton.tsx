import Link from "next/link";
import { ReactNode } from "react";
import styles from "./NavButton.module.css";

interface NavButtonProps {
  href: string;
  isActive: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export function NavButton({ href, isActive, children, onClick }: NavButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${styles.button} ${isActive ? styles.active : styles.inactive}`}
    >
      {children}
      {isActive && (
        <span className={styles.indicator} />
      )}
    </Link>
  );
}

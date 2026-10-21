"use client";

import { useEffect, useRef } from "react";

const navigation = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#equipo", label: "Equipo" },
];

export function SiteHeader() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const toggleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#inicio" aria-label="Ramdi Labs, ir al inicio" onClick={closeMenu}>
          Ramdi Labs
        </a>
        <details ref={menuRef} className="navigation-menu">
          <summary ref={toggleRef} className="menu-toggle" aria-label="Abrir o cerrar menú">
            <span aria-hidden="true" /><span aria-hidden="true" />
          </summary>
          <nav id="primary-navigation" aria-label="Navegación principal">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}

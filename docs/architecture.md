# Arquitetura

## Estrutura

src/

assets/

components/

features/

hooks/

animations/

lib/

services/

styles/

types/

utils/

---

## Componentes

Cada componente deve possuir apenas uma responsabilidade.

Nunca criar componentes acima de aproximadamente 250 linhas.

Sempre reutilizar componentes.

---

## Features

Cada funcionalidade deve possuir sua própria pasta.

Exemplo

features/

home/

services/

portfolio/

about/

contact/

---

## Hooks

Toda lógica reutilizável deve virar um hook.

Nunca duplicar lógica.

---

## Animações

Toda animação deve ficar separada do componente.

Utilizar hooks específicos.

Exemplo

useHeroAnimation()

useServicesAnimation()

usePortfolioAnimation()

---

## Organização

Separar:

Layout

Lógica

Animações

Utilidades

Tipos

Serviços

Nunca misturar responsabilidades.

---

## Escalabilidade

O projeto deve ser preparado para:

Blog

CMS

Dashboard

Área do Cliente

Internacionalização

Dark Mode

Novas páginas

# Repositórios

Camada de acesso a dados. Hoje retorna mocks; quando o backend Supabase
estiver pronto, trocar a implementação interna sem alterar as telas.

Contrato:

- Todas as funções são `async` e devolvem Promises.
- Não acessar `mock/` diretamente fora desta pasta.
- Tipos vêm de `src/data/types.ts`.

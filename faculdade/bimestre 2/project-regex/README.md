# [Projeto Regex](https://paulobessa7.github.io/CodeWebDev/faculdade/bimestre%202/project-regex/index.html)

Este projeto tem como objetivo demonstrar o uso do método de formatação Regex em JavaScript. Como exemplo, foi criado um formulário para validar o nome, email e telefone de uma pessoa. No entanto, ainda existem casos não tratados. Para facilitar, seguem os formatos desejados de formatação esperados do usuário:

- **Campo nome**: não pode conter números ou mais que 100 letras.
- **Campo email**: qualquer email que não contenha '@gmail' não será válido.
- **Campo telefone**: os padrões permitidos são '(xx) xxxx-xxxx', 'xxxxxxxxxxx' e '(xx)xxxxxxxxx'.

---

## Expressões regulares utilizadas

- Nome: /^[A-Za-z\s]{1,100}$/;
  
Esta expressão garante que o campo não contenha nenhum dígito numérico ou mais que 100 caracteres;
- Email: /^[^\s@]+@gmail\.com$/;
  
Esta expressão valida o formato de um email apenas com @gmail.com.
- Telefone: /^\(?[0-9]{2}\)? ?[0-9]{4,5}-[0-9]{4}$/;
  
Esta expressão valida o formato do número de telefone no padrão brasileiro de DDD + número.


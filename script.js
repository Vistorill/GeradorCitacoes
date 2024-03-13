const quotes = [
    {
      quote: "A persistência é o caminho do êxito.",
      author: "Charles Chaplin",
    },
    {
      quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
      author: "Steve Jobs",
    },
    {
      quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
    },
    {
      quote:
        "O fracasso é a oportunidade de começar de novo, com mais experiência.",
      author: "Henry Ford",
    },
    {
      quote: "Não espere por oportunidades, crie você mesmo as suas.",
      author: "Autor desconhecido",
    },
    {
      quote:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      author: "Zig Ziglar",
    },
    {
      quote:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
      author: "Winston Churchill",
    },
    {
      quote:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
      author: "Winston Churchill",
    },
    {
      quote: "Acredite em si próprio e todo o resto virá naturalmente.",
      author: "Elon Musk",
    },
    {
      quote:
        "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
      author: "Autor desconhecido",
    },
    {
        quote:
          "Vencer é o que importa. O resto é a consequência.",
        author: "Ayrton Senna",
      },
      {
        quote:
          "Vocês nunca conseguirão saber como um piloto se sente quando vence uma prova. O capacete oculta sentimentos incompreensíveis.",
        author: "Ayrton Senna",
      },
      {
        quote:
          "Somos insignificantes. Por mais que você programe sua vida, a qualquer momento tudo pode mudar.",
        author: "Ayrton Senna",
      },
      {
        quote:
          "Seja você quem for, seja qual for a posição social que você tenha na vida, a mais alta ou a mais baixa, tenha sempre como meta muita força, muita determinação e sempre faça tudo com muito amor e com muita fé em Deus, que um dia você chega lá. De alguma maneira você chega lá.",
        author: "Ayrton Senna",
      },
    {
      quote:
          "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.",
        author: "- Alan Turing",
    },
    {
      quote:
          "It's fun to sit at a terminal and let the code flow. It sounds strange, but it just comes out my brain; once I'm started, I don't have to think about it.",
        author: "- Gary Kildall",
    },
    
  ];

  const quoteBtn = document.querySelector("#quoteBtn");
  const quoteText = document.querySelector(".text");
  const quoteAuthor = document.querySelector(".author");

  function getQuote(){
     const index = Math.floor(Math.random() * quotes.length);

     quoteText.textContent = quotes[index].quote;
     quoteAuthor.textContent = quotes[index].author;
  }

quoteBtn.addEventListener("click", getQuote);

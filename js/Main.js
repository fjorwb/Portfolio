const context = {
  projects: [
    {
      image: "img/img01.jpg",
      project: "Portfolio",
      tools: "HTML, CSS, JS",
      show: true,
    },
  ],
};

const templateElement = document.getElementById("templatePF");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

compiledHtml = template(context);
document.getElementById("work").innerHTML = compiledHtml;

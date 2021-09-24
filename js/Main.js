const context1 = {
  projects: [
    {
      image: "img/img01.jpg",
      project: "Portfolio",
      tools: "HTML, CSS, JS",
      show: true,
    },
  ],
};

const templateElement1 = document.getElementById("templateWK");
const templateSource1 = templateElement1.innerHTML;
const template1 = Handlebars.compile(templateSource1);

compiledHtml1 = template1(context1);
document.getElementById("work").innerHTML = compiledHtml1;

const context2 = {
  skills: [
    {
      tools: "fab fa-html5",
      show: true,
    },
    {
      tools: "fab fa-css3-alt",
      show: true,
    },
    {
      tools: "fab fa-js",
      show: true,
    },
    {
      tools: "fab fa-sass",
      show: true,
    },
    {
      tools: "fab fa-bootstrap",
      show: true,
    },
    {
      tools: "fab fa-node-js",
      show: true,
    },
    {
      tools: "fab fa-react",
      show: true,
    },
    {
      tools: "fab fa-github",
      show: true,
    },
    {
      tools: "fab fa-git",
      show: true,
    },
    {
      tools: "fab fa-python",
      show: true,
    },
    {
      tools: "fab fa-firefox",
      show: true,
    },
    {
      tools: "fab fa-file-excel",
      show: false,
    },
    {
      tools: "fab fa-wordpress",
      show: true,
    },
  ],
};

const templateElement2 = document.getElementById("templateSK");
const templateSource2 = templateElement2.innerHTML;
const template2 = Handlebars.compile(templateSource2);

compiledHtml = template2(context2);
document.getElementById("skill").innerHTML = compiledHtml;

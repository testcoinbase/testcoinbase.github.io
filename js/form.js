Survey.StylesManager.applyTheme("defaultV2");
var json = {
  title: "Coinbase 2.0 Survey",
  completedHtml: "<h3>Thanks for participating</h3><div style=\"margin: 32px 0;\"><img src=\"img/qr.svg\"></div>",
  
  pages: [
    {
      "title": "How long have you been using Coinbase?",
      "elements": [
        {
          "type": "checkbox",
          "name": "nameid",
          "title": "Choose one",
          "hasOther": true,
          "isRequired": true,
          "choices": ["New user", "1 month", "2-5 months", "6-12 months", "1 year and more"]
        }
      ]
    },  {
      "title": "Please enter your name and e-mail",
      "elements": [
        {
          "type": "text",
          "name": "name",
          "title": "Name:",
          "isRequired": true
        }, {
          "type": "text",
          "name": "email",
          "title": "Your e-mail",
          "isRequired": true
        }
      ]
    }
  ]
};
window.survey = new Survey.Model(json);
survey.showProgressBar = 'bottom';
$("#surveyElement").Survey({model: survey});
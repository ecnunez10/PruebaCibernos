import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import ResultPage from "../../pages/ResultPage";
import ResultWiki from "../../pages/ResultWiki";


  
  
  Given("Usuario ingresa a google", () => {
    cy.visit("/");

  });
  const homePage = new HomePage();
  When("busca la palabra automatización",() => {
    homePage.writeText();
  });

  const resultPage = new ResultPage();
  When("da clic en el resultado",() => {
    resultPage.clickOnResult();
  });
    
  const resultWiki = new ResultWiki();
  Then("comprueba en que año se hizo el primer proceso automático",() => {
    resultWiki.validateDateTheFirstAutomation();
  });

  Then("toma captura de pantalla con el resultado",() => {
    resultWiki.screenshotPage();
  });
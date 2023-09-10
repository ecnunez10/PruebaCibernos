Feature: wikipedia

    Yo como analista QA
    Quiero ingresar a la página de Wikipedia
    Para comprobar en qué año se hizo el primer proceso automático


    Background:
        Given Usuario ingresa a google
        When busca la palabra automatización
        And da clic en el resultado

    Scenario: Validar Año del Primer Proceso Automatico
        Then comprueba en que año se hizo el primer proceso automático

    Scenario: Realizar captura de pantalla con el resultado
        Then toma captura de pantalla con el resultado

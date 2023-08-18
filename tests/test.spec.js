const { Builder, By } = require("selenium-webdriver");

//Prueba automatizada
describe("CRUD", () => 
{
    it("Crud para registro de documentos", async () => 
    {
        //Para utilizar el navegador de Chrome
        let driver = new Builder().forBrowser("chrome").build();
        try {
            //prueba numero 1: navegar a la url
            await driver.get("http://localhost:3000/");
            await driver.sleep(1000);

            //prueba numero 2: boton de maximizar
            await driver.manage().window().maximize();
            await driver.sleep(3000);

            //Prueba numero 3: boton de crear
            await driver.findElement(By.className("btn btn-success")).click();
            await driver.sleep(2000);

            //Prueba 4: caja de texto del nombre
            await driver.findElement(By.name("nombre")).sendKeys("Luiggi Rafael Reyes Santos");
            await driver.sleep(2000);

            //prueba numero 5: caja de texto del curso
            await driver.findElement(By.name("curso")).sendKeys("4to");
            await driver.sleep(2000);

            //prueba numero 6: caja de texto de la seccion
            await driver.findElement(By.name("seccion")).sendKeys("A");
            await driver.sleep(2000);

            //prueba numero 7: caja de texto del documento
            await driver.findElement(By.name("documento")).sendKeys("acta de nacimiento");
            await driver.sleep(2000);

            //prueba numero 8: boton de insertar
            await driver.findElement(By.id("boton-insertar")).click();
            await driver.sleep(2000);

            //prueba numero 9: prueba del boton de cancelar en la inserccion del registro
            await driver.findElement(By.className("btn btn-success")).click();
            await driver.sleep(2000);
            await driver.findElement(By.className("btn btn-danger btn btn-secondary")).click();
            await driver.sleep(2000);

            //En este apartado se pondra aprueba el boton de editar y las cajas de textos que estan en esta ventana

            //prueba numero 10: boton de editar
            await driver.findElement(By.className("btn btn-primary")).click();
            await driver.sleep(2000);

            //Prueba 11: caja de texto del nombre
            await driver.findElement(By.name("nombre")).clear();
            await driver.sleep(2000);
            await driver.findElement(By.name("nombre")).sendKeys("Luis Reyes");
            await driver.sleep(2000);

            //prueba numero 12: caja de texto del curso
            await driver.findElement(By.name("curso")).clear();
            await driver.sleep(2000);
            await driver.findElement(By.name("curso")).sendKeys("3ro");
            await driver.sleep(2000);
            

            //prueba numero 13: caja de texto de la seccion
            await driver.findElement(By.name("seccion")).clear();
            await driver.sleep(2000);
            await driver.findElement(By.name("seccion")).sendKeys("B");
            await driver.sleep(2000);

            //prueba numero 14: caja de texto del documento
            await driver.findElement(By.name("documento")).clear();
            await driver.sleep(2000);
            await driver.findElement(By.name("documento")).sendKeys("cedula");
            await driver.sleep(2000);

            //prueba numero 15: boton de confirmar en la ventana de registro
            await driver.findElement(By.id("boton-especifico")).click();
            await driver.sleep(2000);

            //prueba numero 16: boton de cancelar en la ventana de editar registro.
            await driver.findElement(By.className("btn btn-primary")).click();
            await driver.sleep(2000);
            await driver.findElement(By.id("boton-cancelar")).click();
            await driver.sleep(5000);
            

            //prueba numero 17: boton de imprimir
            await driver.findElement(By.id("boton-imprimir")).click();
            await driver.sleep(6000);


            //prueba numero 18: insertar varios registros
            await driver.findElement(By.className("btn btn-success")).click();
            await driver.sleep(2000);
            await driver.findElement(By.name("nombre")).sendKeys("Genesis Santos");
            await driver.sleep(2000);
            await driver.findElement(By.name("curso")).sendKeys("2do");
            await driver.sleep(2000);
            await driver.findElement(By.name("seccion")).sendKeys("C");
            await driver.sleep(2000);
            await driver.findElement(By.name("documento")).sendKeys("Record de nota");
            await driver.sleep(2000);
            await driver.findElement(By.id("boton-insertar")).click();
            await driver.sleep(2000);
            await driver.findElement(By.className("btn btn-success")).click();
            await driver.sleep(2000);
            await driver.findElement(By.name("nombre")).sendKeys("Yenesis Reyes");
            await driver.sleep(2000);
            await driver.findElement(By.name("curso")).sendKeys("1ro");
            await driver.sleep(2000);
            await driver.findElement(By.name("seccion")).sendKeys("D");
            await driver.sleep(2000);
            await driver.findElement(By.name("documento")).sendKeys("Foto 2x2");
            await driver.sleep(2000);
            await driver.findElement(By.id("boton-insertar")).click();
            await driver.sleep(2000);
            await driver.findElement(By.className("btn btn-success")).click();
            await driver.sleep(2000);
            await driver.findElement(By.name("nombre")).sendKeys("Angel Valdez Ramirez");
            await driver.sleep(2000);
            await driver.findElement(By.name("curso")).sendKeys("8vo");
            await driver.sleep(2000);
            await driver.findElement(By.name("seccion")).sendKeys("E");
            await driver.sleep(2000);
            await driver.findElement(By.name("documento")).sendKeys("Certificado medico");
            await driver.sleep(2000);
            await driver.findElement(By.id("boton-insertar")).click();
            await driver.sleep(2000);


            //prueba numero 19: imprimir varios registros
            await driver.findElement(By.id("boton-imprimir")).click();
            await driver.sleep(4000);


            //prueba numero 20: boton de eliminar
            await driver.findElement(By.className("btn btn-danger")).click();
            await driver.sleep(2000);
            await driver.findElement(By.className("btn btn-danger")).click();
            await driver.sleep(2000);
            await driver.findElement(By.className("btn btn-danger")).click();
            await driver.sleep(2000);
            await driver.findElement(By.className("btn btn-danger")).click();
            await driver.sleep(4000);


             }finally {
                // Cerrar el navegador después de la prueba
                await driver.quit();
             }



            
    });
});



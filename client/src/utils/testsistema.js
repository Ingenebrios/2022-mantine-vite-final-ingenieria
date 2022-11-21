const { act } = require('react-dom/test-utils');
const {Builder,By,Actions} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver')
const assert = require('assert');
const { isTypedArray } = require('util/types');


describe("Add todo test",function(){

    //It blcok
    it("Succesful add to aplication",async function(){
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000/')

        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input[1]')).sendKeys('pablogonzalez2716@gmail.com')
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input[2]')).sendKeys('1234')
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).click()
        let textvalue = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).getText().then(function(value){
            return value
        })
        assert.strictEqual(textvalue,'INICIAR')


        //Close browser
        setInterval( function (){
            driver.quit()
            driver.close()
        },4000)   

    })
    it("Succesful add to aplication new account",async function(){
        let driver = await new Builder().forBrowser('chrome').build();

        
        await driver.get('http://localhost:3000/')

        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/p/a')).click()

        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input[1]')).sendKeys('pablogonzalez2716@gmail.com')
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input[2]')).sendKeys('1234')
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).click()

        let textvalue = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).getText().then(function(value){
            return value
        })
        assert.strictEqual(textvalue,'CREAR')

        setInterval( function (){
            driver.quit()
            driver.close()
        },4000)

    })


})

async function testSeleccion(){

    //Launcg the browser
    let driver = await new Builder().forBrowser('chrome').build();
    

    //Navigate app
    await driver.get('http://localhost:3000/')


    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input[1]')).sendKeys('pablogonzalez2716@gmail.com')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input[2]')).sendKeys('1234')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).click()

    await driver.get('http://localhost:3000/')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[2]/div[1]/img')).click()

    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[3]/div/div/div[1]/img')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[7]/div[1]/div[2]/div[2]/span')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[7]/div[1]/div[2]/div[2]/span')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[4]/div/div[3]/div/div[2]')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[5]/button/div/span')).click()


    setInterval( function (){
        driver.quit()
        driver.close()
    },4000)

}
async function realizarCompra(){

    //Launcg the browser
    let driver = await new Builder().forBrowser('chrome').build();
    

    //Navigate app
    await driver.get('http://localhost:3000/')


    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input[1]')).sendKeys('pablogonzalez2716@gmail.com')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input[2]')).sendKeys('1234')
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).click()
    await driver.findElement(By.className('superImg').click())
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[3]/div/div/div[1]/img')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[7]/div[1]/div[2]/div[2]/span')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[7]/div[1]/div[2]/div[2]/span')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[4]/div/div[3]/div/div[2]')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[5]/button/div/span')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[1]/div/button[4]/div/div')).click()
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/main/div/div/div[2]/div/div[3]/button/div/span[2]')).click()


    setInterval( function (){
        driver.quit()
        driver.close()
    },4000)
}
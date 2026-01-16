
const { chromium } = require("playwright");// 📌 Aqui você está dizendo:
                                          // “Node, me dá o navegador Chromium (tipo Chrome)”   


async function roboTeste() { //   Automação usa await (espera carregamento de página)
                            //   Tudo que tem await precisa estar dentro de async
  //   // 1️⃣ Abre o navegador
  const browser = await chromium.launch({   // headless: false → você vê o navegador
                                            // se fosse true, rodaria escondido (modo robô total)
    headless: false,
  });
 
  // 2️⃣ Abre uma aba
  const page = await browser.newPage();  // Isso é como: abrir uma nova aba no Chrome


  // 3️⃣ Entra no site
  await page.goto("https://the-internet.herokuapp.com"); // Aqui você troca pelo site que vocês usam:
// Shopee
// Mercado Livre
// painel interno
// qualquer sistema web
  

// 4️⃣ Clica em "Form Authentication"          // O robô procura um elemento na página  
await page.click("text=Form Authentication"); // Esse elemento tem o texto exatamente
                                              // Authentication Quando encontra, ele clica
// é como se o robô estivesse lendo a página e falando
// “ah, achei esse texto aqui, vou clicar”                                       
                  


                                          // #username → significa id="username"
  // 5️⃣ Preenche login                     O robô
  await page.fill("#username", "tomsmith");    // clica no campo
                                              //  apaga qualquer coisa
                                              // digita tomsmith


  // Preencher senha
  await page.fill("#password", "SuperSecretPassword!");  // #password → campo senha
  //                                                    // o robô digita a senha
                                                        
 
  // 6️⃣ Clica em login                       // Aqui muda o seletor:
  await page.click('button[type="submit"]');  // não é texto
                                              // é atributo HTML


                                                   
  // 7️⃣ Espera mensagem de sucesso            ISSO É MUITO IMPORTANTE ⚠️
  await page.waitForSelector(".flash.success");   // O robô:                        
                                                  //  não “adivinha”        
                                                  //  não corre na frente

 
                                                  //  Serve para:
console.log("✅ Login realizado com sucesso");   // você saber que deu certo


  // 8️⃣ Logout                         Mesma ideia do primeiro clique:     
  await page.click("text=Logout");     //  busca o texto Logout  
                                         
                                        
                                              
  // 9️⃣ Espera voltar para tela de login      espera o campo de usuário reaparecer  
  await page.waitForSelector("#username");     // confirma que voltou pro começo
                                                // 📌 Isso é uma validação.
 
                                            
                                    //  Ajuda a entender:                  
console.log("🚪 Logout realizado");  //  o robô não travou
                                   // o fluxo terminou corretamente


  // 🔚 Fecha navegador
  await browser.close();
// Aqui:
// encerra o Chrome invisível
// libera memória
// evita travar o PC
// 📌 Em produção isso é obrigatório.

}

// chama a funcao
roboTeste(); 

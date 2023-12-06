const frases = [
    "\"O amor de Deus é a luz que guia nossos passos na escuridão.\"",
    "\"Em cada batida do coração, sentimos o pulsar do amor divino.\"",
    "\"O amor de Deus é eterno, incondicional e imensurável.\"",
    "\"Nas tempestades da vida, o amor de Deus é nosso abrigo seguro.\"",
    "\"Deus não nos ama pelo que fazemos, mas pelo o que somos em Seus olhos.\"",
    "\"O amor de Deus é a força que nos sustenta nos momentos mais difíceis.\"",
    "\"O amor de Deus transforma vidas e renova esperanças.\"",
    "\"Somos amados por Deus com uma intensidade que transcende nossa compreensão.\"",
    "\"No amor de Deus encontramos perdão, graça e renovação.\"",
    "\"A paz de Deus transcende todo entendimento humano.\"",
    "\"No meio do caos, a paz de Deus é a calma que acalma a nossa alma.\"",
    "\"Quando confiamos em Deus, encontramos a verdadeira paz que o mundo não pode oferecer.\"",
    "\"A paz de Deus é o bálsamo que cura as feridas da alma.\"",
    "\"Ter a paz de Deus é viver acima das circunstâncias adversas.\"",
    "\"A paz de Deus é a tranquilidade que vem da confiança no Seu plano perfeito.\"",
    "\"Em Deus, encontramos a paz que nos permite descansar mesmo no meio da tempestade.\"",
    "\"A paz de Deus guarda nos em todos os momentos da vida.\"",
    "\"Na calma da oração, encontramos a paz que excede qualquer ansiedade.\"",
    "\"A paz de Deus capacita nos a enfrentar desafios com serenidade.\"",
    "\"A esperança em Deus é a âncora que mantém a nossa alma firme.\"",
    "\"A cada manhã, renovamos a nossa esperança na misericórdia de Deus.\"",
    "\"A esperança é a chama que ilumina o caminho mesmo nas noites mais escuras.\"",
    "\"Em Deus, encontramos uma esperança que transcende as limitações humanas.\"",
    "\"A esperança em Deus é a certeza de um futuro cheio de propósito.\"",
    "\"A esperança lembra-nos que nenhum desafio é maior que o poder do nosso Deus.\"",
    "\"A esperança é o combustível que nos impulsiona a superar obstáculos.\"",
    "\"Na fé, encontramos a esperança que não decepciona.\"",
    "\"A esperança em Deus sustenta nos quando todas as outras coisas falham.\"",
    "\"A paciência é a virtude que nos ensina a confiar no tempo de Deus.\"",
    "\"No meio das esperas, a paciência molda nos e fortalece nos.\"",
    "\"A paciência lembra nos que o tempo de Deus é perfeito, mesmo quando o nosso não parece ser.\"",
    "\"Com paciência, enfrentamos os desafios com serenidade e perseverança.\"",
    "\"A paciência é a sabedoria de esperar com confiança.\"",
    "\"Em cada desafio, a paciência nos ensina a manter a calma e a fé.\"",
    "\"A paciência é a arte de confiar que Deus está trabalhando nos bastidores.\"",
    "\"Com paciência, permitimos que o plano divino se desdobre naturalmente.\"",
    "\"A paciência leva nos a compreender que cada passo faz parte de um propósito maior.\"",
    "\"A paciência é a chave que abre as portas do tempo de Deus em nossa vida.\"",
];

window.onload =function generateString() {
    let result = ' ';
    const charactersLength = frases.length;
    result = frases[Math.floor(Math.random() * charactersLength)];
    document.getElementById("frase").innerHTML = result;
}

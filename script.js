function gerarRelatorio(){

    let mensagens=[
    
    "🚁 Drone identificou áreas com monitoramento eficiente.",
    
    "💧 Sensores indicaram uso equilibrado da água.",
    
    "☀️ Sistema energético operando com energia renovável.",
    
    "🌧️ Captação de chuva funcionando corretamente.",
    
    "🌱 Produção sustentável em desenvolvimento."
    
    ];
    
    let sorteio=
    
    Math.floor(
    
    Math.random()
    
    *
    
    mensagens.length
    
    );
    
    document
    
    .getElementById(
    
    "resultado"
    
    )
    
    .innerHTML=
    
    mensagens[sorteio]
    
    +
    
    "<br><br>"
    
    +
    
    "Mapa atualizado com sucesso.";
    }
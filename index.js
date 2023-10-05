async function crearMostar (url ,selector ,template ){

    try {
        const respuesta = await fetch(url);
        if(!respuesta.ok){
            throw new Error(`No se pudieron recuperar los datos ${url} `);
        }
        const datos = await respuesta.json();
        const etiqueta = document.querySelector(selector);
        if (etiqueta){
            etiqueta.innerHTML = template(datos);
        }

    }
    catch(error){
        console.log (error);
    }

};
//PERFIL//
function perfil(datos){
    return `
    <div class="container_img-perfil">
                <img src="${datos.avatar}" alt="" class="foto_perfil">
            </div>
            <article class="container_section_perfil">
                <div>
                    <h1 class="titulo titulo_perfil"> ${datos.nombre}</h1>
                    <h2 class="texto texto_perfil">${datos.profesion}</h2>
                    <h2 class="info_contacto"><img src="${datos.imgmail}" alt="" class="icono_contacto">
                        ${datos.mail}</h2>
                    <h2 class="info_contacto"><img src="${datos.imgtel}" alt="" class="icono_contacto">${datos.tel}</h2>
                </div>
                <p class="texto">${datos.descripcion}</p>
            </article>`


}

crearMostar(`https://my-json-server.typicode.com/MateoLeonardoMartin/Api-digitalers/Perfil`,`.header_container_section`,perfil);

//EXPERIENCIA//
function experiencia(datos){
    let expCard = `
    <h1 class="titulo_experiencia">Experiencia</h1>
    <div class="container_experiencia_article">
    `;
    for (let i = 0; i < 1; i++){
        expCard += `
        <article class="article_experiencia">
                <div class="div_experiencia">
                <img src="${datos[i].img}" alt="">
                    <span class="div_experiencia_txt">
                        <h2 class="texto3 subtitulo_experiencia">${datos[i].fecha}</h2>
                        <h1 class="titutlo_experiencia">${datos[i].titulo}</h1>
                    </span>
                </div>
                <p class="texto_experiencia">${datos[i].descripcion}</p>
            </article>
        `
    }
    for (let i = 1; i < 3; i++){
        expCard += `
        <article class="article_experiencia2">
                <div class="div_experiencia">
                    <img src="${datos[i].img}" alt="">
                    <span class="div_experiencia_txt">
                    <h2 class="${datos[i].fecha}"></h2>
                    <h1 class="${datos[i].titulo}"></h1>
                    </span>
                </div>
                <p class="texto_experiencia">${datos[i].descripcion}.</p>
            </article>
        `
}
expCard += `
</div>
`
return expCard
};
crearMostar(`https://my-json-server.typicode.com/MateoLeonardoMartin/Api-digitalers/experiencia`,`.main_container_experiencia`,experiencia);


//CERTIFICADO//

function certificado(datos){
    let cerCard = `
    <h1 class="titulo_certificates">Certificados</h1>
    <section class="section_footer">
    `;
    for (let i = 0; i < 1; i++){
        cerCard += `
        <div class="card_1">
                <div class="div_frame_footer">
                    <img src="${datos[i].img}" alt="" class="img_certificado">
                </div>
                <span>
                    <h2 class="texto_certificado1">${datos[i].titulo}</h2>
                    <h2 class="texto3 texto_certificado2">${datos[i].fecha}</h2>
                </span>
            </div>
        `
    }
    for (let i = 1; i < 3; i++){
        cerCard += `
        <div class="card_2">
                <div class="div_frame_footer">
                    <img src="${datos[i].img}" alt="" class="img_certificado">
                </div>
                <span>
                    <h2 class="texto_certificado1">${datos[i].titulo}</h2>
                    <h2 class="texto3 texto_certificado2">${datos[i].fecha}</h2>
                </span>
            </div>
        `
}
cerCard += `
</div>
`
return cerCard
};
crearMostar(`https://my-json-server.typicode.com/MateoLeonardoMartin/Api-digitalers/certificado`,`.footer_container`,certificado);


//PROYECTO//

//Llamado para que figura Resposive al inicio//
const colorboton = document.getElementById("Responsivo")
colorboton.classList.add("mostrarboton")



function proyecto(datos){
    let template = "";

    if (datos.responsive && datos.responsive.length > 0 ){

        const proyectoPosicion = document.querySelector(".titulo_proyecto")
        proyectoPosicion.innerHTML = `
        Proyecto(${datos.responsive.length})
        `


        datos.responsive.forEach(info => {
            template += `
        <section class="main_container_portfolio">
                <img src="${info.img}" alt="" class="img_portfolio">
                <article class="article_portfolio">
                    <div class="div_portfolio">
                    <h2 class="hastags_portfolio">${info.etiqueta}</h2>
                        <h1 class="titulo titulo_portfolio">${info.titulo}</h1>
                    </div>
                    <p class="texto texto_portfolio">${info.descripcion}
                    </p>
                    <button class="button_portfolio_demo">Demo</button>
                    <button class="button_portfolio_code">Code</button>
                </article>
            </section>
        `
            
        });
    }
    return template 
}

crearMostar(`https://my-json-server.typicode.com/MateoLeonardoMartin/Api-digitalers/proyecto`,`.div_scroll`,proyecto);

//FUNCIONALIDAD BOTNONES//

const botones = document.querySelector(".container_button_proyects")
botones.addEventListener("click" ,(e) =>{
    const botonresponsive = document.getElementById("Responsivo");
    const botonjavaScript = document.getElementById("JavaScript");
    const botonReact = document.getElementById("React");

    if(e.target === botonresponsive){
        function proyecto(datos){
            let template = "";
        
            if (datos.responsive && datos.responsive.length > 0 ){

                const proyectoPosicion = document.querySelector(".titulo_proyecto")
                proyectoPosicion.innerHTML = `
                Proyecto(${datos.responsive.length})
                `
                botonresponsive.classList.add("mostrarboton")
                botonReact.classList.remove("mostrarboton")
                botonjavaScript.classList.remove("mostrarboton")

                datos.responsive.forEach(info => {
                    template += `
                <section class="main_container_portfolio">
                        <img src="${info.img}" alt="" class="img_portfolio">
                        <article class="article_portfolio">
                            <div class="div_portfolio">
                            <h2 class="hastags_portfolio">${info.etiqueta}</h2>
                                <h1 class="titulo titulo_portfolio">${info.titulo}</h1>
                            </div>
                            <p class="texto texto_portfolio">${info.descripcion}
                            </p>
                            <button class="button_portfolio_demo">Demo</button>
                            <button class="button_portfolio_code">Code</button>
                        </article>
                    </section>
                `
                    
                });
            }
            return template 
        }
        crearMostar(`https://my-json-server.typicode.com/MateoLeonardoMartin/Api-digitalers/proyecto`,`.div_scroll`,proyecto);

    }else if (e.target === botonjavaScript){
        function proyecto(datos){
            let template = "";
        
            
        
            if (datos.javaScript && datos.javaScript.length > 0 ){
                const proyectoPosicion = document.querySelector(".titulo_proyecto")
                proyectoPosicion.innerHTML = `
                Proyecto(${datos.javaScript.length})
                `
                botonresponsive.classList.remove("mostrarboton")
                botonReact.classList.remove("mostrarboton")
                botonjavaScript.classList.add("mostrarboton")


                datos.javaScript.forEach(info => {
                    template += `
                <section class="main_container_portfolio">
                        <img src="${info.img}" alt="" class="img_portfolio">
                        <article class="article_portfolio">
                            <div class="div_portfolio">
                            <h2 class="hastags_portfolio">${info.etiqueta}</h2>
                                <h1 class="titulo titulo_portfolio">${info.titulo}</h1>
                            </div>
                            <p class="texto texto_portfolio">${info.descripcion}
                            </p>
                            <button class="button_portfolio_demo">Demo</button>
                            <button class="button_portfolio_code">Code</button>
                        </article>
                    </section>
                `
                    
                });
            }
            return template
        }
        crearMostar(`https://my-json-server.typicode.com/MateoLeonardoMartin/Api-digitalers/proyecto`,`.div_scroll`,proyecto)
   


    }else if (e.target === botonReact){
        function proyecto(datos){
            const proyectoPosicion = document.querySelector(".titulo_proyecto")
                proyectoPosicion.innerHTML = `
                Proyecto(${datos.React.length})
                `
            botonresponsive.classList.remove("mostrarboton")
            botonReact.classList.add("mostrarboton")
            botonjavaScript.classList.remove("mostrarboton")

            let template = "";
        
            if (datos.React && datos.React.length > 0 ){
                datos.React.forEach(info => {
                    template += `
                <section class="main_container_portfolio">
                        <img src="${info.img}" alt="" class="img_portfolio">
                        <article class="article_portfolio">
                            <div class="div_portfolio">
                                <h2 class="hastags_portfolio">${info.etiqueta}</h2>
                                <h1 class="titulo titulo_portfolio">${info.titulo}</h1>
                            </div>
                            <p class="texto texto_portfolio">${info.descripcion}
                            </p>
                            <button class="button_portfolio_demo">Demo</button>
                            <button class="button_portfolio_code">Code</button>
                        </article>
                    </section>
                `
                    
                });
            }
            return template
        }
        crearMostar(`https://my-json-server.typicode.com/MateoLeonardoMartin/Api-digitalers/proyecto`,`.div_scroll`,proyecto)
    }


})




//Comprobacion Recepcion de datos//
/* fetch("https://my-json-server.typicode.com/MateoLeonardoMartin/Api-digitalers/experiencia")
.then(function(respuesta){return respuesta.json()}).then(function(data){console.log(data)}) */




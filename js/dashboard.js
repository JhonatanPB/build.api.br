<script>
function atualizarRelogio(){

    const agora = new Date();

    document.getElementById("data").innerHTML =
        agora.toLocaleDateString("pt-BR");

    document.getElementById("hora").innerHTML =
        agora.toLocaleTimeString("pt-BR");
}

setInterval(atualizarRelogio,1000);

atualizarRelogio();
</script>
const showTime = () => {
    let time = document.getElementById("time");
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    //adiciona zero extra em um digito
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //Exibição de tempo
    time.innerHTML = `${h}:${m}:${s}`;
};

setInterval(showTime, 1000);
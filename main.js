window.onscroll = function() {scrollFunction()};

scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "#003844"
        document.getElementById("navbar").style.paddingTop = "0px"

    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.paddingTop = "10px"
    }
}


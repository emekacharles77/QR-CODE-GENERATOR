const codearea=document.querySelector(".code-area")
const qrimage=document.querySelector("#qrimage")
const qrtext=document.querySelector("#qrtext")
const button=document.querySelector("button")


button.addEventListener("click", ()=>{
    function generateCode(){
        if(qrtext.value){
            qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
            codearea.classList.add("show-code")
        }
        else{
            qrtext.classList.add("empty")
            setTimeout(()=>{
                qrtext.classList.remove("empty")  
            }, 1000)
        }
    }
    generateCode();
    qrtext.value=""
})
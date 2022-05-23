window.onload=function(){
    document.getElementById("download")
    .addEventListener("click",()=>{
        const invoice=this.document.getElementById("invoice");
        console.log(invoice);
        html2pdf().from(invoice).save()
    })
}
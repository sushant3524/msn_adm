function main() {
    var view = document.getElementById('view');
    var exportPDF = document.getElementById('export-pdf');
//     var opt = {
//     margin:       [10, 0, 10, 0],
//     filename:     `document.pdf`,
//     image:        { type: 'jpeg', quality: 0.98 },
//     html2canvas:  { scale: 2, useCORS: true },
//     jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' }
// };
    // exportPDF.onclick = (e) => html2pdf(view);
    // exportPDF.onclick = (e) => html2pdf().from(view).set(opt);
    html2canvas(view,{ 
        allowTaint: true,
        logging:true,
        onrendered: function (canvas) {
        var imgw=309;
        var pagewidth=295;
        var imgH=canvas.height*imgw/canvas.width;
        var heightLeft=imgH;

        const contentDataURL=canvas.toDataURL('image/png')
        let pdf=new jsPDF('p','mm','a4');
        var position=0;
        pdf.addImage(contentDataURL,'PNG',0,position,imgw,imgH)
        pdf.save('try.pdf');
    }
    });
}

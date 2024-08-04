import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


export default function generatePDF(isChangeMode) {
	if (!isChangeMode) {
		const element = document.querySelector('main'),
			elementWidth = element.offsetWidth,
			elementHeight = element.offsetHeight;

		html2canvas(element).then(canvas => {
			const imageData = canvas.toDataURL('image/png');

			const pdf = new jsPDF({
				orientation: 'p',
				unit: 'px',
				format: [elementWidth, elementHeight]
			});

			pdf.addImage(imageData, 'PNG', 0, 0, elementWidth, elementHeight);
			pdf.save('Kirill Savin - Summary.pdf');
		});
	}
}
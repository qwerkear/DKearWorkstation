import logo from './logo.svg';
import './App.css';
import resume from './DKearResume.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
const PDFViewer = () => {

  return(
    <div>
      <Document file={resume}
      onLoadError={console.error} > 
      <Page pageIndex={0} renderTextLayer={false}/>
      </Document>
    </div>
  )
}
function App() {
  return (
      <div className="App">
        <header className="App-header">
          David Kear:
          <PDFViewer/>
          <a href ={resume} target = "_blank"> Download PDF </a>

        </header>
      </div>
  );
}

export default App;

import BarChartExample from "../Components/BarChartExample";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import OrderFormPDF from "../Components/OrderFormPDF";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({});

const Dashboard = () => {
	return (
		<div>
			<h2>Dashboard</h2>
			<BarChartExample />
			<PDFDownloadLink document={<OrderFormPDF />} fileName="TEST_FORM">
				{({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
			</PDFDownloadLink>
			<PDFViewer className="w-3/4 h-[1200px] mx-auto mt-5">
				<OrderFormPDF />
			</PDFViewer>
		</div>
	);
};

export default Dashboard;

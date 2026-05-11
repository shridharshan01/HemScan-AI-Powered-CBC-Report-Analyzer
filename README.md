# HemScan: AI-Powered CBC Report Analyzer 🩸

HemScan is a modern, privacy-focused web application designed to simplify the interpretation of Complete Blood Count (CBC) reports. By leveraging Optical Character Recognition (OCR), HemScan extracts key medical parameters from report images and provides instant, easy-to-understand health insights and trends.

![HemScan Preview](https://shridharshan01.github.io/HemScan/preview.png) *(Note: Replace with actual preview image if available)*

## 🚀 Key Features

- **Instant OCR Analysis**: Scan your CBC report images (JPG, PNG) and extract data in seconds using `Tesseract.js`.
- **Intelligent Interpretation**: Automatically analyzes 15+ blood parameters, including Hemoglobin, WBC, RBC, Platelets, and differential counts.
- **Visual Health Dashboard**: Results are displayed with clear, color-coded indicators (Normal, High, Low) based on standard medical reference ranges.
- **Personalized Recommendations**: Receive tailored dietary and lifestyle suggestions based on your specific report results.
- **Trend Visualization**: Track your health over time with interactive line charts (powered by `Recharts`) in your personal history.
- **Privacy First**: All processing happens client-side. Your medical data stays in your browser and is stored locally using `localStorage`.
- **Responsive Design**: A sleek, premium interface that works beautifully across desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **OCR Engine**: [Tesseract.js](https://tesseract.projectnaptha.com/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

To run HemScan locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shridharshan01/HemScan.git
   cd HemScan
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📋 How It Works

1. **Upload**: Take a clear photo of your CBC report and upload it to the dashboard.
2. **Scan**: The built-in OCR engine identifies parameters like Hb, WBC, and Platelets.
3. **Analyze**: HemScan compares your values against standard reference ranges.
4. **Insights**: View your status, read recommendations, and track trends in your history.

## 🛡️ Privacy & Disclaimer

- **Data Privacy**: HemScan does not upload your medical reports to any server. All analysis and storage occur locally on your device.
- **Medical Disclaimer**: This tool is for **informational purposes only** and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider regarding medical results.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ for a healthier future.

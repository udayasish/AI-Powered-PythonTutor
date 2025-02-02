# **AI-Powered Python Tutor for Children**

Welcome to the AI-Powered Python Tutor! This application is designed to help children learn basic Python programming in a fun and engaging way. It features a child-friendly interface, an AI tutor powered by the Gemini API, and interactive MCQs with rewards.

---

## **How to Run the Application**

Follow these steps to set up and run the application on your local machine.

### **Prerequisites**
1. **Node.js**: Ensure you have Node.js installed. Download it from [here](https://nodejs.org/).
2. **Gemini API Key**: Obtain an API key from the [Gemini website](https://gemini.google.com/).
3. **Git**: Install Git to clone the repository. Download it from [here](https://git-scm.com/).

---

### **Step 1: Clone the Repository**
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/udayasish/AI-Powered-PythonTutor.git
cd AI-Powered-PythonTutor
```

---

### **Step 2: Install Dependencies**
Install the required dependencies by running:
```bash
npm install
```

---

### **Step 3: Set Up Environment Variables**
1. Copy the `.env.sample` file to `.env`:
   ```bash
   cp .env.sample .env
   ```
2. Open the `.env` file and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

---

### **Step 4: Run the Application**
Start the development server by running:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

---

### **Step 5: Configure API Key in the App**
This is the API key that should be pasted in the .env file
GEMINI_API_KEY=AIzaSyBzrvsjfndjtdMy2x-M6C_bjG7NCCobWB0

---

## **Features**
- **Child-Friendly Interface**: Bright, intuitive design with large buttons and animations.
- **AI-Powered Tutoring**: Real-time explanations, answers, and coding challenges powered by the Gemini API.
- **Interactive Homework Assignments**: Complete small coding tasks at the end of each lesson.

---

## **Hosted Application**
The application is hosted on [Vercel]. You can access it at: (https://skc-udayasishbora-ai-powered-python-tutor-pykids.vercel.app/)


Thank you for using the AI-Powered Python Tutor! Happy coding! 🚀

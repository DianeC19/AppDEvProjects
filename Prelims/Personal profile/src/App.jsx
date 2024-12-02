import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './index.css'; // Importing styles

const App = () => {
  const userProfile = {
    name: "Ceolo Diane",
    bio: "A hardworking Computer Science student.",
    interests: ["Coding", "Design", "Music", "Traveling"],
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <section id="about">
          <Body userProfile={userProfile} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
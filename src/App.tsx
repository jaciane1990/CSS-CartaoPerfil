// src/App.tsx
import "./App.css";

export default function App() {
  return (
    <div className="card">
      <img
        src="/desenvolvedora.png"
        alt="Foto de perfil"
        className="profile-img"
        width="150px"
      />
      <h2>Jaciane Izidro</h2>
      <p>Desenvolvedora Front-end apaixonada por React e CSS.</p>
      <button className="btn">Seguir</button>
    </div>
  );
}
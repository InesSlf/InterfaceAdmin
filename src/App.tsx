import { useState } from 'react';
import './App.css';

function App() {
  const [student, setStudent] = useState({
    nom: '',
    prénom: '',
    annéeBac: '',
    matricule: '',
    spécialité: '',
    section: '',
    groupe: ''
  });

  const handleChanges = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
  };

  return (
    <div className='container'>
      <h1>Ajouter étudiant</h1>
      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" placeholder="Nom" value={student.nom} onChange={handleChanges} required />
        </div>

        <div className="input-group">
          <label htmlFor="prénom">Prénom :</label>
          <input type="text" id="prénom" name="prénom" value={student.prénom} placeholder="Prénom" onChange={handleChanges} required />
        </div>

        <div className="input-group">
          <label htmlFor="annéeBac">Année du Bac :</label>
          <input type="text" id="annéeBac" name="annéeBac" placeholder="Année Bac" value={student.annéeBac} onChange={handleChanges} required />
        </div>

        <div className="input-group">
          <label htmlFor="matricule">Matricule :</label>
          <input type="text" id="matricule" name="matricule" placeholder="Matricule" value={student.matricule} onChange={handleChanges} required />
        </div>

        <div className="input-group">
          <label htmlFor="spécialité">Spécialité :</label>
          <input type="text" id="spécialité" name="spécialité" placeholder="Spécialité" value={student.spécialité} onChange={handleChanges} required />
        </div>

        <div className="input-group">
          <label htmlFor="section">Section :</label>
          <input type="text" id="section" name="section" placeholder="Section" value={student.section} onChange={handleChanges} required />
        </div>

        <div className="input-group">
          <label htmlFor="groupe">Groupe :</label>
          <input type="text" id="groupe" name="groupe" placeholder="Groupe" value={student.groupe} onChange={handleChanges} required />
        </div>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default App;

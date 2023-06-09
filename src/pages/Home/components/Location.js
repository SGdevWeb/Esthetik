import React, { useState } from "react";
import styles from "./Location.module.scss";

function Location() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const secteur = ["saint-saulve", "valenciennes", "marly"];

  function handleChange(e) {
    console.log("change");
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setError("Merci de remplir ce champs");
    } else {
      setError("");
    }
  }

  function compareCity(e) {
    e.preventDefault();
    console.log(e.target.elements.ville.value.toLowerCase());
    const city = e.target.elements.ville.value.trim().toLowerCase();

    if (city === "") {
      setError("Merci de remplir ce champs");
    }
    if (secteur.includes(city)) {
      setMessage("Virginie peut se déplacer chez vous");
    } else {
      setMessage("Votre domicile ne fait pas parti du secteur de Virginie");
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Je me déplace chez vous</h2>
      <div className={styles.content}>
        <article>
          <section>
            <p>
              Afin de vérifier si votre domicile fait parti du secteur où je
              peux me déplacer, veuillez remplir le champs en renseignant la
              ville de votre domicile
            </p>
          </section>
          <section>
            <form className={styles.form} onSubmit={compareCity}>
              <input
                onChange={handleChange}
                className={styles.input}
                type="text"
                id="ville"
                placeholder="Entrez la ville de votre domicile"
                name="ville"
                value={inputValue}
              />
              {error && <small className={styles.error}>{error}</small>}
              <button type="submit">VALIDER</button>
            </form>
            <p className={styles.message}>{message}</p>
          </section>
        </article>
        <article>
          <p>
            Si vous habitez dans la zone de déplacement, vous pouvez prendre
            rendez-vous par <b>téléphone</b> ou par <b>e-mail</b>.
          </p>
          <p>
            Je serais ravis de vous aider à planifier votre rendez-vous, en
            fonction de vos disponibilités. J'apporterais tout le matériel
            nécessaire pour vous offrir une expérience de beauté relaxante et
            agréable chez vous.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Location;

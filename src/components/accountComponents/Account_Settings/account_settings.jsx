import { useState } from "react";

export default function () {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [fontSize, setFontSize] = useState(16);
  const [themeColor, setThemeColor] = useState("#000000");
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(false);

  const handleNotificationsEnabledChange = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  const handleDarkModeEnabledChange = (event) => {
    setDarkModeEnabled(event.target.checked);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleThemeColorChange = (event) => {
    setThemeColor(event.target.value);
  };

  const handleAutoSaveEnabledChange = (event) => {
    setAutoSaveEnabled(event.target.checked);
  };

  return (
    <div className="content container-fluid" >
      <header>
        <h1 className="display-6">Configurações do Aplicativo</h1>
      </header>
      <div className="boxAppSettings info-area ">
          <form className="form-group form-settings">
            <label className="form-control label">
            <span className="h6">Notificações:</span>
              <input
                type="checkbox"
                className="form-check-input"
                checked={notificationsEnabled}
                onChange={handleNotificationsEnabledChange}
              />

            </label>

            <label className="form-control label">
            <span className="h6">Modo Escuro:</span>
              <input
                type="checkbox"
                className="form-check-input"
                checked={darkModeEnabled}
                onChange={handleDarkModeEnabledChange}
              />

            </label>

            <label className="form-control label">
              <span className="h6">Idioma: </span>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="form-control"
              >
                <option value="pt-BR">
                  Português (Brasil)
                </option>
                <option value="en">Inglês (Internacional)</option>
                <option value="es-ES">Espanhol (Espanha)</option>
                <option value="fr-FR">Francês (França)</option>
              </select>
            </label>

            <label className="form-control label">
              <span className="h6">Tamanho da Fonte:</span>
              <input
                className="form-control"
                type="number"
                value={fontSize}
                onChange={handleFontSizeChange}
              />
            </label>

            <label className="form-control label">
              <span className="h6">Cor da Fonte:</span>
              <input
                className="form-control"
                type="color"
                value={themeColor}
                onChange={handleThemeColorChange}
              />
            </label>

            <label className="form-control label">
              <span className="h6">Salvamento Automático:</span>
              <input
                type="checkbox"
                className="form-check-input"
                checked={autoSaveEnabled}
                onChange={handleAutoSaveEnabledChange}
              />
            </label>
          </form>
        </div>
    </div>
  );
}

// export default function(){
//     return(
//         <div className="container">
//             <p>hello</p>
//         </div>
//     )
// }

import calendarIcon from './img/calendarIcon.svg'
export default function () {
  return (
    <aside className="aside">
      <a
        className="btn btn-primary btn-rose"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <img src={calendarIcon} alt="calendarIcon" className='icon'/>
      </a>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Calendário de Menstruação
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <h1>Espere...</h1>
            <h6>Esta parte ainda não está pronta para ser visualizada!</h6>
            <p>Volte aqui outro dia para conferir a verão final do <b>Lily Pink WebApp</b>!</p>
            
          </div>
          </div>
        </div>
    </aside>
  );
}

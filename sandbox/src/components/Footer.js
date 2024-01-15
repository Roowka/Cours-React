function Footer(){
    const date = new Date();
    return(
        <div className="fixed-bottom mb-3">
            <p>Créé par Lucas GOÏ le {date.toLocaleDateString()}</p>
        </div>
    )
}

export default Footer;
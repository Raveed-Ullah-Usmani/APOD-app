const Footer = (props) => {
    const { toggleModel, data } = props;
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD project</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={toggleModel}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer
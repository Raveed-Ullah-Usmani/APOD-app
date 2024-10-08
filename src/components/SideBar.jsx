const SideBar = (props) => {
    const { toggleModel, data } = props;
    return (
        <div className="sideBar">
            <div className="bgOverlay"></div>
            <div className="sideBarContents">
                <h2>
                    {data?.title}
                </h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">
                        {data?.date}
                    </p>
                    <p>
                        {data?.explanation}
                    </p>
                </div>
                <button onClick={toggleModel}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default SideBar
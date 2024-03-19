
function LinkToSubpageButton ({href, text}) {
    return(
        <a href={href}><button className="selectPage">{text}</button></a>
    );
}

export default LinkToSubpageButton;
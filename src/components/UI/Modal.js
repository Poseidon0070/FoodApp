import  ReactDOM  from "react-dom";
let MODAL_STYLE = {
    position: "fixed",
    top: "50%", 
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "25px",
    zIndex: "1000",
    width: "45vw",
    fontFamily: 'Varela Round',
    boxShadow: "0px 3px 4px 5px rgb(36, 34, 34)",
    borderRadius: "10px",
    overflowY: "auto",
    maxHeight: "80vh", 
}

let OVERLAY_STYLE = {
    position: "fixed",
    top:0,
    left:0,
    bottom:0,
    right:0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: "900"
}

let Modal = ({open,children,onClose}) => {
    if(!open) return null;
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLE} onClick={onClose}/>
            <div style={MODAL_STYLE}>
                <div className="d-flex">
                    <button className="btn btn-close ms-auto" onClick={onClose}></button>
                </div> 
                {children}
            </div>
        </>,
        document.getElementById("portal")
    )
}

export default Modal;
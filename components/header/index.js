import styles from '../../styles/Home.module.css'
import { Connect } from '../walletConnectButton'

export default function Header() {
    const showContent = () => {

        let show = document.getElementById("show");

        if (show.style.display === "block") {
            show.style.display = "none";
        } else {
            show.style.display = "block";
        }
    }
    const showContent2 = () => {

        let shows = document.getElementById("shows");
        if (shows.style.display === "block") {
            shows.style.display = "none";
        } else {
            shows.style.display = "block";
        }

    }
    return (
        <div className={styles.con}>
            <div className="row">
                <div className='col-lg-2 col-sm-6 col-6' >
                    <img src="logo.png" />
                </div>
                <div className='col-lg-3 col-sm-6 col-6'>
                    <button className={styles.btn1}>
                        Apply for Subscription
                    </button>
                </div>
                <div className='col-lg-2 col-sm-12 col-12'>

                    <div className={styles.div2}>
                        <input type="text" className={styles.input11} placeholder=" Search" />
                    </div>
                </div>

                <div className='col-lg-5 col-sm-12 col-12' style={{ textAlign: "center" }} >
                    <div className={styles.network1}>
                        <Connect btnText={"btnNavBar"}></Connect>
                    </div>

                </div>
                <div className={styles.baricon} >
                    <i className="fa-solid fa-bars"
                        onClick={showContent}
                        style={{ color: "white", marginLeft: "10px", cursor: "pointer", marginTop: "10px" }}></i>
                    <i className="fa-solid fa-bars"
                        onClick={showContent2}
                        style={{ color: "white", marginRight: "10px", cursor: "pointer", marginTop: "10px", float: "right" }}></i>
                </div>
            </div>
        </div>
    )
}
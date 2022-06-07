import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { Connect } from '../walletConnectButton'

export default function Header() {
    const showContent = () => {
        document.getElementById("left-sidebar").classList.toggle("left_sidebar_show")

    }
    const showContent2 = () => {
        document.getElementById("right-sidebar").classList.toggle("right_sidebar_show")


    }
    useEffect(() => {
        function handleOutsideClick(e) {
            const leftSideBar = document.getElementById("left-sidebar")
            const showRightSideBar = document.getElementById("show-right-sidebar")
            const showLeftSideBar = document.getElementById("show-left-sidebar")
            const rightSideBar = document.getElementById("right-sidebar")
            if (!leftSideBar.contains(e.target) && !showLeftSideBar.contains(e.target) && !showLeftSideBar.contains(e.target)) {
                leftSideBar.classList.remove("left_sidebar_show")

            }
            if (!rightSideBar.contains(e.target) && !showRightSideBar.contains(e.target)) {
                rightSideBar.classList.remove("right_sidebar_show")
            }

        }
        document.addEventListener("click", handleOutsideClick)
        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [])
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
                        id="show-left-sidebar"
                        style={{ color: "white", marginLeft: "10px", cursor: "pointer", marginTop: "10px" }}></i>
                    <i className="fa-solid fa-bars"
                        id="show-right-sidebar"

                        onClick={showContent2}
                        style={{ color: "white", marginRight: "10px", cursor: "pointer", marginTop: "10px", float: "right" }}></i>
                </div>
            </div>
        </div>
    )
}
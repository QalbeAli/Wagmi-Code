import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function LeftSideBar() {
    return (
        <div
            id="left-sidebar"
            className={styles.navColumn} style={{ backgroundImage: "linear-gradient(#331939, #191729)", }}>
            <div className={styles.column33} >
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-70 ">
                    <ul
                        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                        id="menu"
                    >
                        <li className="nav-item">
                            <Link href="/" ><a className="nav-link align-middle px-0"><span className={styles.navLinkHome}  >Home</span></a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks} >Marketplace</span></a></Link>

                        </li>
                        <li>
                            <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >Defi Union</span></a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinkPlay}  >Play 2 Earn</span></a></Link>

                        </li>
                        <li>
                            <Link
                                href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}   >Streamer Hub</span></a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >GEMS Academy </span></a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >Talent Agency</span></a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >Guild DAO</span></a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="nav-link px-0 align-middle"><span className={styles.navLinks}  >Play with gems</span></a></Link>
                        </li>
                    </ul>
                    <hr />
                    <div className={styles.addMar}>
                        <Link href="#"><a><img src="v2.png" className={styles.imgss}></img></a></Link>
                        <Link href="#"><a><img src="v3.png" className={styles.imgs}></img></a></Link>
                        <Link href="#"><a><img src="v4.png" className={styles.imgs}></img></a></Link>
                        <br></br>
                        <br></br>
                        <Link href="#"><a style={{ color: "#878787", textDecoration: "none", fontSize: "12px", fontWeight: "500px" }} >Contact</a></Link><br></br>
                        <Link href="#"><a style={{ color: "#878787", textDecoration: "none", fontSize: "12px", fontWeight: "500px" }}>Privacy policy</a></Link><br></br>
                        <Link href="#"><a style={{ color: "#878787", textDecoration: "none", fontSize: "12px", fontWeight: "500px" }}  >Terms & Conditions</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
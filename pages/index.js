import Head from "next/head";
import styles from "../styles/Home.module.css";
import FAQ from "../components/faq";
import Table from "../components/table";

import CardContainer from "../components/cardContainer";
import Header from "../components/header";
import useTokenBalance from "../hooks/useTokenBalance";
import useDashboardData from "../hooks/useDashboardData";
import { Nav, Tab } from "react-bootstrap";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
export default function Staking({}) {
  const { totalAmount, pendingRewards } = useDashboardData();

  const balance = useTokenBalance();

  return (
    <>
      <Head>
        <title>Gems Staking</title>
      </Head>
      <Header />
      <div>
        <div className="d-flex position-relative">
          <LeftSideBar />

          <div
            className={styles.cardColumn}
            style={{ backgroundImage: "linear-gradient(#31396E,#121216)" }}
          >
            <div className="container">
              <div className={styles.centerCol}>
                <h1 className={styles.heading}>$GEMS Staking</h1>
                <p className={styles.heading1}>
                  Stake your $GEMS in GEMS ecosystem
                </p>
                <br></br>
                <br></br>
                <h5 className={styles.heads}>Dashboard</h5>
                <div className="container" style={{ marginTop: "20px" }}>
                  <div
                    className="row"
                    style={{
                      backgroundColor: "#1d1d37",
                      padding: "20px",
                      borderRadius: "10px",
                      border: "1px solid #3C3F57",
                    }}
                  >
                    <div className="col-sm-4 col-4 col-lg-4">
                      <p className={styles.para}>Total Value Locked:</p>
                      <h6 className={styles.head1}>
                        {totalAmount
                          ? Number(totalAmount).toLocaleString()
                          : "-"}{" "}
                        $GEMS
                      </h6>
                    </div>

                    <div className="col-sm-4 col-4 col-lg-4">
                      <p className={styles.para}>Available Balance:</p>
                      <h6 className={styles.head1}>
                        {balance ? balance.formatted + "  $GEMS" : "-"}
                      </h6>
                    </div>
                    <div className="col-sm-4 col-4 col-lg-4">
                      <p className={styles.para}>Total Earnings:</p>
                      <h6 className={styles.head1}>
                        {pendingRewards
                          ? Number(pendingRewards).toLocaleString()
                          : "-"}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className={styles.detail}>
                  <div className="container">
                    <br></br>
                    <h4 className={styles.pool}>Staking Pools</h4>
                    <br></br>
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="allpools"
                    >
                      <Nav className="nav_border">
                        <Nav.Link className={"tab"} eventKey="allpools">
                          All Pools
                        </Nav.Link>
                        <Nav.Link className={"tab"} eventKey="stakehistory">
                          Staking History
                        </Nav.Link>
                      </Nav>
                      <br></br>
                      <Tab.Content>
                        <Tab.Pane eventKey="allpools">
                          <CardContainer />
                        </Tab.Pane>
                        <Tab.Pane eventKey="stakehistory">
                          <Table></Table>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>

                    <br></br>
                    <br></br>
                    <FAQ></FAQ>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <RightSideBar />
        </div>
      </div>
    </>
  );
}

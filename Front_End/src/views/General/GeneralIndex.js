/*!

@Author: Emilio Padilla Miranda
@Date: Sunday, October 11, 2020

*/
import React from "react";
//IMPORTING ICONS FROM thenounproject.com
import donantes1 from '../../images/donantes1.png';
import beneficiarias from '../../images/beneficiarias.png';
import employees from '../../images/employees.png';
import finanzas from '../../images/finanzas.png';
import reportes from '../../images/reportes.png';
import cuentas from '../../images/cuentas.png'
import xGamesLogo from '../../assets/img/Logo_sin_fondo.png';
import { FRONT_BASE_URL } from 'index';

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
} from "reactstrap";


class GeneralIndex extends React.Component {
  render() {
    const login = localStorage.getItem("isLoggedIn");
    const idRol = localStorage.getItem("idRol");
    //Redirect in case of wrong role or no login
        if (!login ) {
        this.props.history.push('/login');
    }else if(idRol==2){
      this.props.history.push('/general/NurseIndex');
    }else if (idRol==1){
      this.props.history.push('/admin/Nomina/Nomina');
    }
    return (
      <>
      <br/><br/><br/>
    <Col>
      <Row className="justify-content-md-center">
          {/* <h1 style={{'font-size': '70px'}}>XGAMES</h1> */}
          <img src="" 
                      width="400in" 
                      height="500in"
                      className="img-fluid" 
                      alt="xGames" 
                      id="imagenIngreso" 
                      src={xGamesLogo}></img>
      </Row>
      <Row className="justify-content-md-center">
      <h1 style={{'font-size': '40px', 'font-family' : 'Julius Sans One'}}>
        TRADING MADE FUN</h1>
      </Row>
      <br/>
      <div className="container">
      <Row style={{display: 'flex', justifyContent: 'center'}}>
        <Col lg="5">
          <Card className="card-chart text-center">
            {/* <CardHeader>
              <CardTitle tag="h1">
                Beneficiarias
              </CardTitle>
            </CardHeader> */}
            <CardBody>
              <h1>CATÁLOGO</h1>
              <div className="chart-area" style={{'font-size': '190px', 'color': '#97bbe6'}} onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push("/admin/Beneficiarias/GeneralViewAdmin");
                        }}>
                          <i class="fas fa-list"></i>
                {/* <img src={beneficiarias} alt="BENEFICIARIAS" width="260px" style={{'margin-bottom': '45px'}}></img> */}
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="5">
          <Card className="card-chart text-center">
            {/* <CardHeader>
              <CardTitle tag="h1">
                Beneficiarias
              </CardTitle>
            </CardHeader> */}
            <CardBody>
              <h1>MIS VIDEOJUEGOS</h1>
              <div className="chart-area" style={{'font-size': '190px', 'color': '#97bbe6'}} onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push("/admin/search-employee");
                        }}>
                          <i class="fas fa-gamepad"></i>
                <img src={employees} alt="EMPLEADOS" height="200px" style={{'margin-bottom': '20px'}}></img>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* <Col lg="4">
          <Card className="card-chart text-center"> */}
            {/* <CardHeader>
              <CardTitle tag="h1">
                Beneficiarias
              </CardTitle>
            </CardHeader> */}
            {/* <CardBody>
              <h1>MIS INTERCAMBIOS</h1> */}
              {/* <div className="chart-area" style={{'font-size': '170px'}} onClick={(e) => {  e.preventDefault(); this.props.history.push("/admin/ViewDonors"); }}> */}
                {/* <img src={donantes1} alt="DONANTES" width="220px" style={{'margin-bottom': '40px'}}></img> */}
              {/* </div>
            </CardBody>
          </Card>
        </Col> */}
      </Row>
      <Row style={{display: 'flex', justifyContent: 'center'}}>
        <Col lg="5" className="float-center">
          <Card className="card-chart text-center">
            {/* <CardHeader>
              <CardTitle tag="h1">
                Beneficiarias
              </CardTitle>
            </CardHeader> */}
            <CardBody>
              <h1>MIS INTERCAMBIOS</h1>
              <div className="chart-area" style={{'font-size': '190px', 'color': '#97bbe6'}} onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push("/admin/Finanzas/MonthlyView");
                        }}>
                          <div>
                          <i size='9x' class="fas fa-exchange-alt"></i>
                          </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* <Col lg="4">
          <Card className="card-chart text-center"> */}
            {/* <CardHeader>
              <CardTitle tag="h1">
                Beneficiarias
              </CardTitle>
            </CardHeader> */}
            {/* <CardBody>
              <h1>REPORTES</h1>
              <div className="chart-area" style={{'font-size': '170px'}}> */}
              {/* <img src={reportes} alt="REPORTES" width="180px" style={{'margin-bottom': '55px'}}></img>
              </div>
            </CardBody>
          </Card>
        </Col> */}
        {/* <Col lg="4">
          <Card className="card-chart text-center">
            {/* <CardHeader>
              <CardTitle tag="h1">
                Beneficiarias
              </CardTitle>
            </CardHeader> */}
            {/* <CardBody> */}
              {/* <h1>CUENTAS</h1>
              <div className="chart-area" style={{'font-size': '170px'}} onClick={(e) => {
                          e.preventDefault();
                          this.props.history.push("/admin/Cuentas/principal");
                        }}> */}
                {/* <img src={cuentas} alt="CUENTAS" width="350px" style={{'margin-bottom': '45px'}}></img> */}
              {/* </div>
            </CardBody>
          </Card>
        </Col> */}
      </Row>
      </div>
    </Col>
<br/><br/>

    <Col>
      <Row>
        <Col>
        <Nav>
          <NavItem>
            Desarrollado por InTouch {new Date().getFullYear()} {" "} <i className="tim-icons icon-heart-2" />
          </NavItem>
        </Nav>
        </Col>
      </Row>
    </Col>

      </>
    );
  }
}
export default GeneralIndex;

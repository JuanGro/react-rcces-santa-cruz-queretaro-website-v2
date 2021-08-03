/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.

*/
import { React } from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
// core components
import SimpleHeader from '../../../../components/headers/simple';

function Tables() {
  return (
    <>
      <SimpleHeader name="Tables" parentName="Tables" />
      <Container className="mt--6" fluid>
        <Card>
          <CardHeader className="border-0">
            <Row>
              <Col xs="6">
                <h3 className="mb-0">Checkbox + Toggles</h3>
              </Col>
              <Col className="text-right" xs="6">
                <Button
                  className="btn-round btn-icon"
                  color="danger"
                  href="#pablo"
                  id="tooltip28070728"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fas fa-trash" />
                  </span>
                  <span className="btn-inner--text">Delete</span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip28070728">
                  Edit product
                </UncontrolledTooltip>
              </Col>
            </Row>
          </CardHeader>

          <Table className="align-items-center table-flush" hover responsive>
            <thead className="thead-light">
              <tr>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <th>Author</th>
                <th>Created at</th>
                <th>Product</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>John Michael</b>
                </td>
                <td>
                  <span className="text-muted">
                    10/09/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Dashboard PRO
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input defaultChecked type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>Alex Smith</b>
                </td>
                <td>
                  <span className="text-muted">
                    08/09/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Design System
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>Samantha Ivy</b>
                </td>
                <td>
                  <span className="text-muted">
                    30/08/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Black Dashboard
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>John Michael</b>
                </td>
                <td>
                  <span className="text-muted">
                    10/09/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Dashboard PRO
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input defaultChecked type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>John Michael</b>
                </td>
                <td>
                  <span className="text-muted">
                    10/09/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Dashboard PRO
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input defaultChecked type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardHeader className="border-0">
            <Row>
              <Col xs="6">
                <h3 className="mb-0">Checkbox + Labels</h3>
              </Col>
              <Col className="text-right" xs="6">
                <Button
                  className="btn-round btn-icon"
                  color="danger"
                  href="#pablo"
                  id="tooltip163216539"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fas fa-trash" />
                  </span>
                  <span className="btn-inner--text">Delete</span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip163216539">
                  Edit product
                </UncontrolledTooltip>
              </Col>
            </Row>
          </CardHeader>

          <Table className="align-items-center table-flush" hover responsive>
            <thead className="thead-light">
              <tr>
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <th>Author</th>
                <th>Created at</th>
                <th>Product</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>John Michael</b>
                </td>
                <td>
                  <span className="text-muted">
                    10/09/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Dashboard PRO
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input defaultChecked type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
              <tr className="table-">
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>Alex Smith</b>
                </td>
                <td>
                  <span className="text-muted">
                    08/09/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Design System
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
              <tr className="table-warning">
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>Samantha Ivy</b>
                </td>
                <td>
                  <span className="text-muted">
                    30/08/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Black Dashboard
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
              <tr className="table-">
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>John Michael</b>
                </td>
                <td>
                  <span className="text-muted">
                    10/09/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Dashboard PRO
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input defaultChecked type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
              <tr className="table-">
                <th>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="table-check-all"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="table-check-all"
                    />
                  </div>
                </th>
                <td className="table-user">
                  <b>John Michael</b>
                </td>
                <td>
                  <span className="text-muted">
                    10/09/
                    {new Date().getFullYear()}
                  </span>
                </td>
                <td>
                  <a
                    className="font-weight-bold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Argon Dashboard PRO
                  </a>
                </td>
                <td>
                  <label className="custom-toggle">
                    <input defaultChecked type="checkbox" />
                    <span
                      className="custom-toggle-slider rounded-circle"
                      data-label-off="No"
                      data-label-on="Yes"
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>

      </Container>
    </>
  );
}

export default Tables;

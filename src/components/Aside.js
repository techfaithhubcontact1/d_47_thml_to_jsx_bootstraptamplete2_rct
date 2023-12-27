import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/niceadmindashboard">
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-menu-button-wide" />
            <span>Components</span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="components-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/alerts">
                <i className="bi bi-circle" />
                <span>Alerts</span>
              </Link>
            </li>
            <li>
              <Link to="/accordion">
                <i className="bi bi-circle" />
                <span>Accordion</span>
              </Link>
            </li>
            <li>
              <Link to="/badges">
                <i className="bi bi-circle" />
                <span>Badges</span>
              </Link>
            </li>
            <li>
              <Link to="/buttons">
                <i className="bi bi-circle" />
                <span>Buttons</span>
              </Link>
            </li>
            <li>
              <Link to="/cards">
                <i className="bi bi-circle" />
                <span>Cards</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Components Nav */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-journal-text" />
            <span>Forms</span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="forms-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="formelements">
                <i className="bi bi-circle" />
                <span>Form Elements</span>
              </Link>
            </li>
            <li>
              <Link to="/formlayouts">
                <i className="bi bi-circle" />
                <span>Form Layouts</span>
              </Link>
            </li>
            <li>
              <Link to="formeditors">
                <i className="bi bi-circle" />
                <span>Form Editors</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Forms Nav */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-layout-text-window-reverse" />
            <span>Tables</span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="tables-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/generaltables">
                <i className="bi bi-circle" />
                <span>General Tables</span>
              </Link>
            </li>
            <li>
              <Link to="/datatables">
                <i className="bi bi-circle" />
                <span>Data Tables</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Tables Nav */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-bar-chart" />
            <span>Charts</span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="charts-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/charts">
                <i className="bi bi-circle" />
                <span>Chart.js</span>
              </Link>
            </li>
            <li>
              <Link to="/echarts">
                <i className="bi bi-circle" />
                <span>ECharts</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Charts Nav */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
            to="/"
          >
            <i className="bi bi-gem" />
            <span>Icons</span>
            <i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul
            id="icons-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/bootstrapicons">
                <i className="bi bi-circle" />
                <span>Bootstrap Icons</span>
              </Link>
            </li>
            <li>
              <Link to="/remixicons">
                <i className="bi bi-circle" />
                <span>Remix Icons</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Icons Nav */}
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/profile">
            <i className="bi bi-person" />
            <span>Profile</span>
          </Link>
        </li>
        {/* End Profile Page Nav */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/fqa">
            <i className="bi bi-question-circle" />
            <span>F.A.Q</span>
          </Link>
        </li>
        {/* End F.A.Q Page Nav */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/contact">
            <i className="bi bi-envelope" />
            <span>Contact</span>
          </Link>
        </li>
        {/* End Contact Page Nav */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/register">
            <i className="bi bi-card-list" />
            <span>Register</span>
          </Link>
        </li>
        {/* End Register Page Nav */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/login">
            <i className="bi bi-box-arrow-in-right" />
            <span>Login</span>
          </Link>
        </li>
        {/* End Login Page Nav */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/error_404">
            <i className="bi bi-dash-circle" />
            <span>Error 404</span>
          </Link>
        </li>
        {/* End Error 404 Page Nav */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/blank">
            <i className="bi bi-file-earmark" />
            <span>Blank</span>
          </Link>
        </li>
        {/* End Blank Page Nav */}
      </ul>
    </aside>
  );
}

import React, { useEffect, useState } from "react";
import { Dropdown, Nav, Sidenav } from "rsuite";
import { Dashboard, Calendar, Storage, Search } from "@rsuite/icons";
import styles from "./Header.module.scss";
import { NavLink, useHistory } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const {
    location: { pathname },
  } = useHistory();

  const tabsKeys = {
    "/calendar": "2",
  };

  useEffect(() => {
    console.log(pathname);

    setActiveKey(tabsKeys[pathname]);
  }, [pathname]);
  return (
    <div
      className={`${styles.header} ${styles.header}`}
      style={{ width: expanded ? 240 : 55 }}
    >
      {/* <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      /> */}
      {/* <hr /> */}
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["3", "4"]}
        activeKey={activeKey}
        onSelect={setActiveKey}
      >
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              active={false}
              // eventKey="0"
              icon={<Search />}
              onClick={toggleMenu}
            >
              Згорнути
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              active={pathname === "/calendar"}
              to={"/calendar"}
              eventKey="2"
              icon={<Calendar />}
            >
              Заплановані
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              active={pathname === "/statistic"}
              to={"/statistic"}
              eventKey="3"
              icon={<Dashboard />}
            >
              Статистика
            </Nav.Item>
            <Dropdown
              placement="rightStart"
              eventKey="4"
              title="Пріоритети"
              icon={<Storage />}
            >
              <Dropdown.Item eventKey="4-1">Всі</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Важливі і термінові </Dropdown.Item>
              <Dropdown.Item eventKey="4-3">
                Важливі, але не термінові
              </Dropdown.Item>
              <Dropdown.Item eventKey="4-4">
                Термінові але не важливі
              </Dropdown.Item>
              <Dropdown.Item eventKey="4-5">
                Не важливі і нетермінові
              </Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Header;

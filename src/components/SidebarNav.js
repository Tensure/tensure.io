import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const SidebarNav = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className='text-left text-uppercase mb-0'>
          Navigation
        </CardTitle>
        <Navbar>
          <Nav vertical>
            <NavItem>
              <NavLink href='/videos'>Videos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Apprentices</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/tags'>Tags</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <CardText className='text-center mb-2'></CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className='text-center text-uppercase mb-3'>
          ADVERTISEMENT
        </CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className='text-center text-uppercase'>
          TENSURE MERCHANDISE
        </CardTitle>
      </CardBody>
    </Card>
  </div>
);

export default SidebarNav;

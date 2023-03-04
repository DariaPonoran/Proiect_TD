import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
// bara de sus
export const Nav = styled.nav`
  background: #f0dec0; //culoare
  height: 100px; //dimensiune
  display: flex; //mod de afisare si compartimentare
  justify-content: space-evenly; //distanta dintre blocuri
  padding: 0.2rem calc((50vw - 100px)); //root size-font
  z-index: 12; // positioned element and its descendants or flex items.
`
//ferestre
export const NavLink = styled(Link)`
  color: #bc8f8f; //culoare ferestre
  display: flex;
  align-items: center; // cum sa fie aliniate casutele
  text-decoration: none;
  padding: 0 8rem; // distanta dintre casute
  height: 100 %;
  white-space: nowrap; // face ca sign up sa fie scris pe un singur rand
  cursor: pointer;
  &.active {
    color: #ff974d; //culoare fereastra activa
  }
`
//suprapunerea peste trecere
export const Bars = styled(FaBars)`
  display: none;
  color: #ffebcd; // culoare ferestre
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%); //suprapunerea a unui plan 2D peste altul
    font-size: 1.8rem;
    cursor: pointer;
  }
`
//bara de meniu?
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`

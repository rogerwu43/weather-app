/**
 * Styled components for all globally used components.
 * 
 * @file This file defines all globally used styled-components.
 * @author Roger.
 * @since 1.0.3
 */

import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8em;
  margin: 5px 0;
  text-align: center;

  @media (orientation: landscape) and (max-height: 640px) {
    font-size: 0.6em;
  }
`;

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: ${props => props.active ? "block" : "none"};
  left: 0;
  position: fixed;
  height: 100%;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const ModalLoading = styled.div`
  background: rgba(200, 200, 200, 0.6)
    url("https://i.stack.imgur.com/FhHRx.gif")
    50% 50%
    no-repeat;
  display: ${props => props.active ? "block" : "none"};
  left: 0;
  position: fixed;
  height: 100%;
  top: 0;
  url("https://i.stack.imgur.com/FhHRx.gif") 50% 50%;
  width: 100%;
  z-index: 12;
`;

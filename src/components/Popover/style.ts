import styled, { css } from 'styled-components'
import type { CSSProperties } from 'react'

interface ContainerProps {
  readonly open: boolean
  readonly sx?: CSSProperties
}

export const Container = styled.div<ContainerProps>`
  display: none;
  visibility: hidden;
  ${(props) =>
    props.open &&
    css`
      display: flex;
      visibility: visible;
      flex-direction: column;
      padding: ${(props) => props.theme.spacing.padding};
      z-index: 10;
      position: absolute;
      bottom: ${(props) => `${props.sx?.bottom}px`};
      right: ${(props) => (props.sx?.right ? `${props.sx?.right}px` : 'auto')};
      left: ${(props) => (props.sx?.left ? `${props.sx?.left}px` : 'auto')};
      background-color: ${(props) =>
        props.theme.palette[props.theme.theme].surfaceContainer};
      color: ${(props) => props.theme.palette[props.theme.theme].color};
      border-radius: ${(props) => props.theme.shape.borderRadius};
      box-shadow: ${(props) => props.theme.shadows[props.theme.theme][4]};
      -webkit-animation: scale-in-center 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`

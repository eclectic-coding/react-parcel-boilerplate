import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { typeScale } from '../../utils'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  primaryButtonWarning: () => `
    background-color: ${props => props.theme.status.warningColor};
    color: ${props => props.theme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    background: none;
    border: 2px solid ${props => props.theme.status.errorColor};
    color: ${props => props.theme.status.warningColor};
  `,
  tertiaryButtonWarning: () => `
    background: none;
    color: ${props => props.theme.status.warningColor};
  `,
  warning: () => `
    background-color: ${props => props.theme.status.errorColor};
    color: ${props => props.theme.textColorInverted};
    
    &:hover, &:focus {
      background-color: ${props => props.theme.status.warningColorHover};
      outline: 3px solid ${props => props.theme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${props => props.theme.status.warningColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${props => props.theme.status.errorColor};
    color: ${props => props.theme.textColorInverted};
  `,
  secondaryButtonError: () => `
    background: none;
    border: 2px solid ${props => props.theme.status.errorColor};
    color: ${props => props.theme.status.errorColor};
  `,
  tertiaryButtonError: () => `
    background: none;
    color: ${props => props.theme.status.errorColor};
  `,
  error: () => `
  background-color: ${props => props.theme.status.errorColor};
  color: ${props => props.theme.textColorInverted};

  &:hover {
    background-color: ${props => props.theme.status.errorColorHover};
  }

  &:active {
    background-color: ${props => props.theme.status.errorColorActive};
  }
  `,
  primaryButtonSuccess: () => `
  background-color: ${props => props.theme.status.successColor};
  color: ${props => props.theme.textColorInverted};
`,
  secondaryButtonSuccess: () => `
  background: none;
  border: 2px solid ${props => props.theme.status.successColor};
  color: ${props => props.theme.status.successColor};
`,
  tertiaryButtonSuccess: () => `
  background: none;
  color: ${props => props.theme.status.successColor};
`,
  success: () => `
  background-color: ${props => props.theme.status.successColor};
  color: ${props => props.theme.textColorInverted};

  &:hover {
    background-color: ${props => props.theme.status.successColorHover};
  }

  &:active {
    background-color: ${props => props.theme.status.successColorActive};
  }
  `
}

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${props => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  border: none;

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background-color: ${props => props.theme.disabled};
    border: none;
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background-color: ${props => props.theme.disabled};
    border: none;
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

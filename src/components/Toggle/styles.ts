import styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ToggleLabel = styled.label`
    color: var(--white);

`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        offColor: theme.color.warning,
        onColor: theme.color.info
    }))<ReactSwitchProps>`
    
`

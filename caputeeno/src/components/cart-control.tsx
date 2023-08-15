import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    padding: 0px 5px;
    font-size: 10px;
    
    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    margin-left: -10px;
}
`

const Container = styled.div`
    position: relative;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) and (max-width: 946px) {
        position: absolute;
        margin-left: 450px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) and (max-width: 797px) {
        position: fixed;
        margin-left: 430px;
    }
`

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [])

    return (
        <Container>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}
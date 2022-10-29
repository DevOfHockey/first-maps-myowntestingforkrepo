// import { Navbar } from '../../Navbar/Navbar'
import styled from 'styled-components'
import ItemBox from '../ItemBox/ItemBox'
import Header from '../Header/Header'

const StyledContainer = styled.div`
  min-height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;
  @media (min-width: 768px) {
    height: 100vh;
  }
`

export default function ExploreArtists({
    // ...props
    // onClick=()=>{},
}) {
    return (
            <StyledContainer>
            <Header
                    label='Western Albenaki (Algonquin)'
                    text='↽ Back to Explore'
                    dir="column-reverse"
                    ali="flex-start"
                    padl="0"
                />
                
            </StyledContainer>
    )
}
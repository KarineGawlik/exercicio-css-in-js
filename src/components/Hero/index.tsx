import { Form, FormOverlay, Container, HeroTitle, MobileStyles } from './styles'

const Hero = () => (
  <Form>
    <FormOverlay />
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, desing e artes visuais.
      </HeroTitle>
    </Container>
  </Form>
)

export default Hero

export const GlobalStyles = MobileStyles

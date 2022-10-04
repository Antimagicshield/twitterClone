import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthLayout from '../components/auth/Container'
import Button from '../components/auth/Button'
import Seperator from '../components/auth/Seperator'
import Input from '../components/auth/Input'
import FormBox from '../components/auth/FormBox'
import BottomBox from '../components/auth/BottomBox'
import routes from './routes'
import styled from 'styled-components'
import { FatLink } from '../components/shared'
import PageTitle from '../components/auth/PageTitle'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubTitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`

function SignUp() {
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <SubTitle>
            Sign up to see photos and videos from your friends.
          </SubTitle>
        </HeaderContainer>
        <form>
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign up" />
        </form>
      </FormBox>
      <BottomBox cta="have account?" link={routes.home} linkText="Log in" />
    </AuthLayout>
  )
}
export default SignUp

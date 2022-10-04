import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import AuthLayout from '../components/auth/Container'
import Button from '../components/auth/Button'
import Seperator from '../components/auth/Seperator'
import Input from '../components/auth/Input'
import FormBox from '../components/auth/FormBox'
import BottomBox from '../components/auth/BottomBox'
import routes from './routes'
import PageTitle from '../components/auth/PageTitle'
import { useForm } from 'react-hook-form'
import FormError from '../components/auth/FormError'

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`

function Login() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' })
  const onSubmitValid = data => {
    // console.log(data)
  }

  return (
    <AuthLayout>
      <PageTitle title="Log in" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register('username', {
              required: {
                value: true,
                message: 'Username is Required',
              },
              minLength: {
                value: 5,
                message: 'Username should be longer than 5 chars!',
              },
            })}
            name="username"
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.username?.message)}
          />
          <FormError message={errors?.username?.message} />
          <Input
            {...register('password', {
              required: {
                value: true,
                message: 'Password is Required',
              },
            })}
            name="password"
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message} />
          <Button type="submit" value="Log in" disabled={!isValid} />
        </form>
        <Seperator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="Don't have account?"
        link={routes.signUp}
        linkText="Sign Up"
      />
    </AuthLayout>
  )
}
export default Login

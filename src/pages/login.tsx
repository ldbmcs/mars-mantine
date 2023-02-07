import { Button, Container, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core'
import { FC } from 'react'
import { useForm } from '@mantine/form'
import router from 'next/router'
import { useSetRecoilState } from 'recoil'
import appContext from '../service'
import { Home } from 'config/constants/routerPath'
import { stateCurrentUser } from 'states/users'
import { graphqlErrorCatch } from '../utils'
import { User, useSignInMutation } from 'types/domain'

const Login: FC = () => {
  const setCurrentUser = useSetRecoilState(stateCurrentUser)
  const [signInMutation] = useSignInMutation()
  const form = useForm({
    initialValues: {
      principal: '',
      credential: '',
    },

    validate: {
      // principal: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  const handleSubmit = async () => {
    const { principal, credential } = form.values
    try {
      const { data } = await signInMutation({
        variables: {
          input: {
            principal,
            credential,
          },
        },
      })
      if (data?.signInUser) {
        const { token, user } = data.signInUser
        setCurrentUser(user! as User)
        appContext.setAuthToken(token!)
        appContext.setUserId(user!.id)
        await router.replace(Home)
      }
    } catch (err: any) {
      const { graphQLErrors } = err
      graphqlErrorCatch(graphQLErrors)
    }
  }
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Mars
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Technology is changing our lives
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput label="UserName" placeholder="you@mantine.dev" required {...form.getInputProps('principal')} />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps('credential')}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Login

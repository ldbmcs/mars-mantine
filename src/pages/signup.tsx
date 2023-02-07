import { Button, Container, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core'
import { FC } from 'react'
import { useForm } from '@mantine/form'
import router from 'next/router'
import { Login } from 'config/constants/routerPath'
import { graphqlErrorCatch } from '../utils'
import { useSignupMutation } from 'types/domain'

const SignUp: FC = () => {
  const [signUpMutation] = useSignupMutation()
  const form = useForm({
    initialValues: {
      mobile: '',
      name: '',
      password: '',
    },

    validate: {
      // principal: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  const handleSubmit = async () => {
    const { mobile, name, password } = form.values
    try {
      const { data } = await signUpMutation({
        variables: {
          input: {
            mobile,
            name,
            password,
          },
        },
      })
      if (data?.signUpUser) {
        await router.replace(Login)
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
          <TextInput label="UserName" placeholder="you@mantine.dev" required {...form.getInputProps('name')} />
          <TextInput label="Mobile" placeholder="your name" mt="md" required {...form.getInputProps('mobile')} />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <Button fullWidth mt="xl" type="submit">
            注册
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default SignUp

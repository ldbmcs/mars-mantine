import { LoadingOverlay } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { useSetRecoilState } from 'recoil'
import appContext from 'service'
import { stateCurrentUser } from 'states/users'
import { CurrentUserQuery, useCurrentUserQuery, User } from 'types/domain'

type Props = {
  onCompleted?: (data: CurrentUserQuery) => void
  skip?: boolean
}

const WithUserInfoLayout = ({ children, onCompleted, skip }: PropsWithChildren<Props>) => {
  const setCurrentUser = useSetRecoilState(stateCurrentUser)

  const { loading } = useCurrentUserQuery({
    skip,
    onCompleted(data) {
      const user = data?.me! as User
      setCurrentUser(user)
      appContext.setUserId(user.id)
      onCompleted?.(data)
    },
  })
  if (loading) {
    return <LoadingOverlay visible />
  }
  return <>{children}</>
}

export default WithUserInfoLayout

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  signInUser: SignInUserPayload;
  signUpUser: SignUpUserPayload;
};


export type MutationSignInUserArgs = {
  input: SignInUserInput;
};


export type MutationSignUpUserArgs = {
  input: SignUpUserInput;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};

export type SignInUserInput = {
  credential: Scalars['String'];
  principal: Scalars['String'];
};

export type SignInUserPayload = {
  __typename?: 'SignInUserPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type SignUpUserInput = {
  mobile: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpUserPayload = {
  __typename?: 'SignUpUserPayload';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mobile: Scalars['String'];
  name: Scalars['String'];
};

export type UserFragment = { __typename?: 'User', id: string, name: string, mobile: string, email?: string | null, createdAt?: string | null };

export type SignInMutationVariables = Exact<{
  input: SignInUserInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'SignInUserPayload', token?: string | null, user?: { __typename?: 'User', id: string, name: string, mobile: string, email?: string | null, createdAt?: string | null } | null } };

export type SignupMutationVariables = Exact<{
  input: SignUpUserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'SignUpUserPayload', user?: { __typename?: 'User', id: string, name: string, mobile: string, email?: string | null, createdAt?: string | null } | null } };

export const UserFragmentDoc = gql`
    fragment user on User {
  id
  name
  mobile
  email
  createdAt
}
    `;
export const SignInDocument = gql`
    mutation SignIn($input: SignInUserInput!) {
  signInUser(input: $input) {
    user {
      ...user
    }
    token
  }
}
    ${UserFragmentDoc}`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignupDocument = gql`
    mutation signup($input: SignUpUserInput!) {
  signUpUser(input: $input) {
    user {
      ...user
    }
  }
}
    ${UserFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
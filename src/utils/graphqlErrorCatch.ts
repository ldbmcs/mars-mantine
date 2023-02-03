import { GraphQLError } from 'graphql';
import { GraphQLErrors } from '@apollo/client/errors';
import { message } from '../components/ui';

interface HandleErrorOptions {
  graphQLErrors?: GraphQLError[] | GraphQLErrors
  mapping?: Map<string, string>
  defaultMessage?: string
}

function showDefaultMessage(errorMessage?: string): void {
  if (errorMessage) {
    message.error(errorMessage);
  }
}

function graphqlErrorCatch(options: HandleErrorOptions): void {
  if (!options.graphQLErrors || !options.mapping) {
    showDefaultMessage(options.defaultMessage);
    return;
  }
  let matching: boolean = false;
  options.graphQLErrors.forEach(({ extensions }) => {
    const configMessage = options.mapping?.get(extensions?.code as string);
    if (configMessage) {
      showDefaultMessage(configMessage);
      matching = true;
    }
  });
  if (!matching) {
    showDefaultMessage(options.defaultMessage);
  }
}

export default graphqlErrorCatch;

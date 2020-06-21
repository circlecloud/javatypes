declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Thrown when the broker refuses access due to an authentication failure.
             */
            // @ts-ignore
            class AuthenticationFailureException extends com.rabbitmq.client.PossibleAuthenticationFailureException {
                // @ts-ignore
                constructor(reason: java.lang.String | string)
            }
        }
    }
}

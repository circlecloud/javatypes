declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Our own view of a SASL authentication mechanism, introduced to remove a
             * dependency on javax.security.sasl.
             */
            // @ts-ignore
            interface SaslMechanism {
                /**
                 * The name of this mechanism (e.g. PLAIN)
                 * @return the name
                 */
                // @ts-ignore
                getName(): string
                /**
                 * Handle one round of challenge-response
                 * @param challenge the challenge this round, or null on first round.
                 * @param username name of user
                 * @param password for username
                 * @return response
                 */
                // @ts-ignore
                handleChallenge(challenge: com.rabbitmq.client.LongString, username: java.lang.String | string, password: java.lang.String | string): com.rabbitmq.client.LongString
            }
        }
    }
}

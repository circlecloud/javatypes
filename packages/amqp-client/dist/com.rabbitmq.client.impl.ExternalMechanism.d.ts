declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * The EXTERNAL auth mechanism
                 */
                // @ts-ignore
                class ExternalMechanism extends java.lang.Object implements com.rabbitmq.client.SaslMechanism {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public handleChallenge(challenge: com.rabbitmq.client.LongString, username: java.lang.String | string, password: java.lang.String | string): com.rabbitmq.client.LongString
                }
            }
        }
    }
}

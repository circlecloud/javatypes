declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * The PLAIN auth mechanism
                 */
                // @ts-ignore
                class PlainMechanism extends java.lang.Object implements com.rabbitmq.client.SaslMechanism {
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

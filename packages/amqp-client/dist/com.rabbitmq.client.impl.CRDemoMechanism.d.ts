declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Provides equivalent security to PLAIN but demos use of Connection.Secure(Ok)
                 * START-OK: Username
                 * SECURE: "Please tell me your password"
                 * SECURE-OK: Password
                 */
                // @ts-ignore
                class CRDemoMechanism extends java.lang.Object implements com.rabbitmq.client.SaslMechanism {
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

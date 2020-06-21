declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * This interface represents a hook to allow you to control how exactly
             * a sasl client is selected during authentication.
             * @see com.rabbitmq.client.ConnectionFactory
             */
            // @ts-ignore
            interface SaslConfig {
                // @ts-ignore
                getSaslMechanism(mechanisms: java.lang.String[] | string[]): com.rabbitmq.client.SaslMechanism
            }
        }
    }
}

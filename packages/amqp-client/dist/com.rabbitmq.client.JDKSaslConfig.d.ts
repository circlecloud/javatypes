declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Implementation of SaslConfig that uses the JDK SASL implementation. This is
             * not the default since it does not work on Java 1.4, Android or IBM's JDK.
             * @see com.rabbitmq.client.ConnectionFactory
             */
            // @ts-ignore
            class JDKSaslConfig extends java.lang.Object implements com.rabbitmq.client.SaslConfig {
                /**
                 * Create a JDKSaslConfig which only wants to use PLAIN.
                 * @param factory - the ConnectionFactory to use to obtain username, password and host
                 */
                // @ts-ignore
                constructor(factory: com.rabbitmq.client.ConnectionFactory)
                /**
                 * Create a JDKSaslConfig with a list of mechanisms to use.
                 * @param factory - the ConnectionFactory to use to obtain username, password and host
                 * @param mechanisms - a list of SASL mechanisms to use (in descending order of preference)
                 */
                // @ts-ignore
                constructor(factory: com.rabbitmq.client.ConnectionFactory, mechanisms: java.lang.String[] | string[])
                // @ts-ignore
                public getSaslMechanism(serverMechanisms: java.lang.String[] | string[]): com.rabbitmq.client.SaslMechanism
            }
        }
    }
}

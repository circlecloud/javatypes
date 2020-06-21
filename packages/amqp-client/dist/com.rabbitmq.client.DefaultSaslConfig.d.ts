declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Default SASL configuration. Uses one of our built-in mechanisms.
             */
            // @ts-ignore
            class DefaultSaslConfig extends java.lang.Object implements com.rabbitmq.client.SaslConfig {
                // @ts-ignore
                public static readonly PLAIN: com.rabbitmq.client.DefaultSaslConfig
                // @ts-ignore
                public static readonly EXTERNAL: com.rabbitmq.client.DefaultSaslConfig
                // @ts-ignore
                public getSaslMechanism(serverMechanisms: java.lang.String[] | string[]): com.rabbitmq.client.SaslMechanism
            }
        }
    }
}

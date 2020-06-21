declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Helper class to load {@link ConnectionFactory} settings from a property file.
             * The authorised keys are the constants values in this class (e.g. USERNAME).
             * The property file/properties instance/map instance keys can have
             * a prefix, the default being <code>rabbitmq.</code>.
             * Property files can be loaded from the file system (the default),
             * but also from the classpath, by using the <code>classpath:</code> prefix
             * in the location.
             * Client properties can be set by using
             * the <code>client.properties.</code> prefix, e.g. <code>client.properties.app.name</code>.
             * Default client properties and custom client properties are merged. To remove
             * a default client property, set its key to an empty value.
             * @since 4.4.0
             * @see ConnectionFactory#load(String, String)
             */
            // @ts-ignore
            class ConnectionFactoryConfigurator extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly DEFAULT_PREFIX: java.lang.String | string
                // @ts-ignore
                public static readonly USERNAME: java.lang.String | string
                // @ts-ignore
                public static readonly PASSWORD: java.lang.String | string
                // @ts-ignore
                public static readonly VIRTUAL_HOST: java.lang.String | string
                // @ts-ignore
                public static readonly HOST: java.lang.String | string
                // @ts-ignore
                public static readonly PORT: java.lang.String | string
                // @ts-ignore
                public static readonly CONNECTION_CHANNEL_MAX: java.lang.String | string
                // @ts-ignore
                public static readonly CONNECTION_FRAME_MAX: java.lang.String | string
                // @ts-ignore
                public static readonly CONNECTION_HEARTBEAT: java.lang.String | string
                // @ts-ignore
                public static readonly CONNECTION_TIMEOUT: java.lang.String | string
                // @ts-ignore
                public static readonly HANDSHAKE_TIMEOUT: java.lang.String | string
                // @ts-ignore
                public static readonly SHUTDOWN_TIMEOUT: java.lang.String | string
                // @ts-ignore
                public static readonly CLIENT_PROPERTIES_PREFIX: java.lang.String | string
                // @ts-ignore
                public static readonly CONNECTION_RECOVERY_ENABLED: java.lang.String | string
                // @ts-ignore
                public static readonly TOPOLOGY_RECOVERY_ENABLED: java.lang.String | string
                // @ts-ignore
                public static readonly CONNECTION_RECOVERY_INTERVAL: java.lang.String | string
                // @ts-ignore
                public static readonly CHANNEL_RPC_TIMEOUT: java.lang.String | string
                // @ts-ignore
                public static readonly CHANNEL_SHOULD_CHECK_RPC_RESPONSE_TYPE: java.lang.String | string
                // @ts-ignore
                public static readonly USE_NIO: java.lang.String | string
                // @ts-ignore
                public static readonly NIO_READ_BYTE_BUFFER_SIZE: java.lang.String | string
                // @ts-ignore
                public static readonly NIO_WRITE_BYTE_BUFFER_SIZE: java.lang.String | string
                // @ts-ignore
                public static readonly NIO_NB_IO_THREADS: java.lang.String | string
                // @ts-ignore
                public static readonly NIO_WRITE_ENQUEUING_TIMEOUT_IN_MS: java.lang.String | string
                // @ts-ignore
                public static readonly NIO_WRITE_QUEUE_CAPACITY: java.lang.String | string
                // @ts-ignore
                public static load(cf: com.rabbitmq.client.ConnectionFactory, propertyFileLocation: java.lang.String | string, prefix: java.lang.String | string): void
                // @ts-ignore
                public static load(cf: com.rabbitmq.client.ConnectionFactory, properties: java.util.Map<java.lang.String | string, java.lang.String | string>, prefix: java.lang.String | string): void
                // @ts-ignore
                public static load(connectionFactory: com.rabbitmq.client.ConnectionFactory, propertyFileLocation: java.lang.String | string): void
                // @ts-ignore
                public static load(connectionFactory: com.rabbitmq.client.ConnectionFactory, properties: java.util.Properties): void
                // @ts-ignore
                public static load(connectionFactory: com.rabbitmq.client.ConnectionFactory, properties: java.util.Properties, prefix: java.lang.String | string): void
                // @ts-ignore
                public static load(connectionFactory: com.rabbitmq.client.ConnectionFactory, properties: java.util.Map<java.lang.String | string, java.lang.String | string>): void
            }
        }
    }
}

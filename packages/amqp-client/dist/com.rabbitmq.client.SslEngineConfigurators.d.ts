declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Ready-to-use instances and builder for {@link SslEngineConfigurator}s.
             * <p>
             * Note {@link SslEngineConfigurator}s can be combined with
             * {@link SslEngineConfigurator#andThen(SslEngineConfigurator)}.
             * @since 5.4.0
             */
            // @ts-ignore
            abstract class SslEngineConfigurators extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Default {@link SslEngineConfigurator}, does nothing.
                 */
                // @ts-ignore
                public static readonly DEFAULT: com.rabbitmq.client.SslEngineConfigurator
                /**
                 * {@link SslEngineConfigurator} that enables server hostname verification.
                 */
                // @ts-ignore
                public static readonly ENABLE_HOSTNAME_VERIFICATION: com.rabbitmq.client.SslEngineConfigurator
                /**
                 * Default {@link SslEngineConfigurator}, does nothing.
                 * @return 
                 */
                // @ts-ignore
                public static defaultConfigurator(): com.rabbitmq.client.SslEngineConfigurator
                /**
                 * {@link SslEngineConfigurator} that enables server hostname verification.
                 * @return 
                 */
                // @ts-ignore
                public static enableHostnameVerification(): com.rabbitmq.client.SslEngineConfigurator
                /**
                 * Builder to configure and creates a {@link SslEngineConfigurator} instance.
                 * @return 
                 */
                // @ts-ignore
                public static builder(): com.rabbitmq.client.SslEngineConfigurators.Builder
            }
        }
    }
}

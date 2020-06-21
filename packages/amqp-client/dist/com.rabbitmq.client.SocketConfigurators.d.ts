declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Ready-to-use instances and builder for {@link SocketConfigurator}.
             * <p>
             * Note {@link SocketConfigurator}s can be combined with
             * {@link SocketConfigurator#andThen(SocketConfigurator)}.
             * @since 5.4.0
             */
            // @ts-ignore
            abstract class SocketConfigurators extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Disable Nagle's algorithm.
                 */
                // @ts-ignore
                public static readonly DISABLE_NAGLE_ALGORITHM: com.rabbitmq.client.SocketConfigurator
                /**
                 * Default {@link SocketConfigurator} that disables Nagle's algorithm.
                 */
                // @ts-ignore
                public static readonly DEFAULT: com.rabbitmq.client.SocketConfigurator
                /**
                 * Enable server hostname validation for TLS connections.
                 */
                // @ts-ignore
                public static readonly ENABLE_HOSTNAME_VERIFICATION: com.rabbitmq.client.SocketConfigurator
                /**
                 * The default {@link SocketConfigurator} that disables Nagle's algorithm.
                 * @return 
                 */
                // @ts-ignore
                public static defaultConfigurator(): com.rabbitmq.client.SocketConfigurator
                /**
                 * {@link SocketConfigurator} that disables Nagle's algorithm.
                 * @return 
                 */
                // @ts-ignore
                public static disableNagleAlgorithm(): com.rabbitmq.client.SocketConfigurator
                /**
                 * {@link SocketConfigurator} that enable server hostname verification for TLS connections.
                 * @return 
                 */
                // @ts-ignore
                public static enableHostnameVerification(): com.rabbitmq.client.SocketConfigurator
                /**
                 * Builder to configure and creates a {@link SocketConfigurator} instance.
                 * @return 
                 */
                // @ts-ignore
                public static builder(): com.rabbitmq.client.SocketConfigurators.Builder
            }
        }
    }
}

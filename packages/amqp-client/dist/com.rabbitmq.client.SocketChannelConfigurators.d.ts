declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Ready-to-use instances and builder for {@link SocketChannelConfigurator}.
             * <p>
             * Note {@link SocketChannelConfigurator}s can be combined with
             * {@link SocketChannelConfigurator#andThen(SocketChannelConfigurator)}.
             * @since 5.4.0
             */
            // @ts-ignore
            abstract class SocketChannelConfigurators extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Disable Nagle's algorithm.
                 */
                // @ts-ignore
                public static readonly DISABLE_NAGLE_ALGORITHM: com.rabbitmq.client.SocketChannelConfigurator
                /**
                 * Default {@link SocketChannelConfigurator} that disables Nagle's algorithm.
                 */
                // @ts-ignore
                public static readonly DEFAULT: com.rabbitmq.client.SocketChannelConfigurator
                /**
                 * The default {@link SocketChannelConfigurator} that disables Nagle's algorithm.
                 * @return 
                 */
                // @ts-ignore
                public static defaultConfigurator(): com.rabbitmq.client.SocketChannelConfigurator
                /**
                 * {@link SocketChannelConfigurator} that disables Nagle's algorithm.
                 * @return 
                 */
                // @ts-ignore
                public static disableNagleAlgorithm(): com.rabbitmq.client.SocketChannelConfigurator
                /**
                 * Builder to configure and creates a {@link SocketChannelConfigurator} instance.
                 * @return 
                 */
                // @ts-ignore
                public static builder(): com.rabbitmq.client.SocketChannelConfigurators.Builder
            }
        }
    }
}

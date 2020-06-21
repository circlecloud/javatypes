declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace SocketChannelConfigurators {
                // @ts-ignore
                class Builder extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set default configuration.
                     * @return 
                     */
                    // @ts-ignore
                    public defaultConfigurator(): com.rabbitmq.client.SocketChannelConfigurators.Builder
                    /**
                     * Disable Nagle's Algorithm.
                     * @return 
                     */
                    // @ts-ignore
                    public disableNagleAlgorithm(): com.rabbitmq.client.SocketChannelConfigurators.Builder
                    /**
                     * Add an extra configuration step.
                     * @param extraConfiguration
                     * @return 
                     */
                    // @ts-ignore
                    public add(extraConfiguration: com.rabbitmq.client.SocketChannelConfigurator): com.rabbitmq.client.SocketChannelConfigurators.Builder
                    /**
                     * Return the configured {@link SocketConfigurator}.
                     * @return 
                     */
                    // @ts-ignore
                    public build(): com.rabbitmq.client.SocketChannelConfigurator
                }
            }
        }
    }
}

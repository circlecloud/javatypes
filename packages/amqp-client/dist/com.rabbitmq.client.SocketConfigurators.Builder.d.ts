declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace SocketConfigurators {
                // @ts-ignore
                class Builder extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set default configuration.
                     * @return 
                     */
                    // @ts-ignore
                    public defaultConfigurator(): com.rabbitmq.client.SocketConfigurators.Builder
                    /**
                     * Disable Nagle's Algorithm.
                     * @return 
                     */
                    // @ts-ignore
                    public disableNagleAlgorithm(): com.rabbitmq.client.SocketConfigurators.Builder
                    /**
                     * Enable server hostname verification for TLS connections.
                     * @return 
                     */
                    // @ts-ignore
                    public enableHostnameVerification(): com.rabbitmq.client.SocketConfigurators.Builder
                    /**
                     * Add an extra configuration step.
                     * @param extraConfiguration
                     * @return 
                     */
                    // @ts-ignore
                    public add(extraConfiguration: com.rabbitmq.client.SocketConfigurator): com.rabbitmq.client.SocketConfigurators.Builder
                    /**
                     * Return the configured {@link SocketConfigurator}.
                     * @return 
                     */
                    // @ts-ignore
                    public build(): com.rabbitmq.client.SocketConfigurator
                }
            }
        }
    }
}

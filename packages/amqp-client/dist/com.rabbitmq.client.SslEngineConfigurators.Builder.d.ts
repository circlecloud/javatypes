declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace SslEngineConfigurators {
                // @ts-ignore
                class Builder extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set default configuration (no op).
                     * @return 
                     */
                    // @ts-ignore
                    public defaultConfigurator(): com.rabbitmq.client.SslEngineConfigurators.Builder
                    /**
                     * Enables server hostname verification.
                     * @return 
                     */
                    // @ts-ignore
                    public enableHostnameVerification(): com.rabbitmq.client.SslEngineConfigurators.Builder
                    /**
                     * Add extra configuration step.
                     * @param extraConfiguration
                     * @return 
                     */
                    // @ts-ignore
                    public add(extraConfiguration: com.rabbitmq.client.SslEngineConfigurator): com.rabbitmq.client.SslEngineConfigurators.Builder
                    /**
                     * Return the configured {@link SslEngineConfigurator}.
                     * @return 
                     */
                    // @ts-ignore
                    public build(): com.rabbitmq.client.SslEngineConfigurator
                }
            }
        }
    }
}

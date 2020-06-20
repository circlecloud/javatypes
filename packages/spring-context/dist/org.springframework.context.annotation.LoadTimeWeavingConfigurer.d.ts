declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Interface to be implemented by
                 * {@link org.springframework.context.annotation.Configuration @Configuration}
                 * classes annotated with {@link EnableLoadTimeWeaving @EnableLoadTimeWeaving} that wish to
                 * customize the {@link LoadTimeWeaver} instance to be used.
                 * <p>See {@link org.springframework.scheduling.annotation.EnableAsync @EnableAsync}
                 * for usage examples and information on how a default {@code LoadTimeWeaver}
                 * is selected when this interface is not used.
                 * @author Chris Beams
                 * @since 3.1
                 * @see LoadTimeWeavingConfiguration
                 * @see EnableLoadTimeWeaving
                 */
                // @ts-ignore
                interface LoadTimeWeavingConfigurer {
                    /**
                     * Create, configure and return the {@code LoadTimeWeaver} instance to be used. Note
                     * that it is unnecessary to annotate this method with {@code @Bean}, because the
                     * object returned will automatically be registered as a bean by
                     * {@link LoadTimeWeavingConfiguration#loadTimeWeaver()}
                     */
                    // @ts-ignore
                    getLoadTimeWeaver(): org.springframework.instrument.classloading.LoadTimeWeaver
                }
            }
        }
    }
}

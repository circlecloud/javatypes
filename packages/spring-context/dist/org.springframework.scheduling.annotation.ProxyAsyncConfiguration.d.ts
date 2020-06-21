declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * {@code @Configuration} class that registers the Spring infrastructure beans necessary
                 * to enable proxy-based asynchronous method execution.
                 * @author Chris Beams
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see EnableAsync
                 * @see AsyncConfigurationSelector
                 */
                // @ts-ignore
                class ProxyAsyncConfiguration extends org.springframework.scheduling.annotation.AbstractAsyncConfiguration {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public asyncAdvisor(): org.springframework.scheduling.annotation.AsyncAnnotationBeanPostProcessor
                }
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Interface to be implemented by any object that wishes to be notified
             * of the ApplicationEventPublisher (typically the ApplicationContext)
             * that it runs in.
             * @author Juergen Hoeller
             * @author Chris Beams
             * @since 1.1.1
             * @see ApplicationContextAware
             */
            // @ts-ignore
            interface ApplicationEventPublisherAware {
                /**
                 * Set the ApplicationEventPublisher that this object runs in.
                 * <p>Invoked after population of normal bean properties but before an init
                 * callback like InitializingBean's afterPropertiesSet or a custom init-method.
                 * Invoked before ApplicationContextAware's setApplicationContext.
                 * @param applicationEventPublisher event publisher to be used by this object
                 */
                // @ts-ignore
                setApplicationEventPublisher(applicationEventPublisher: org.springframework.context.ApplicationEventPublisher): void
            }
        }
    }
}

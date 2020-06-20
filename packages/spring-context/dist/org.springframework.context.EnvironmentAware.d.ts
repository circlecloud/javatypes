declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Interface to be implemented by any bean that wishes to be notified
             * of the {@link Environment} that it runs in.
             * @author Chris Beams
             * @since 3.1
             * @see org.springframework.core.env.EnvironmentCapable
             */
            // @ts-ignore
            interface EnvironmentAware {
                /**
                 * Set the {@code Environment} that this component runs in.
                 */
                // @ts-ignore
                setEnvironment(environment: Environment): void
            }
        }
    }
}

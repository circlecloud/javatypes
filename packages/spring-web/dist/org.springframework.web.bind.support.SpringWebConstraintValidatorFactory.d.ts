declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * JSR-303 {@link ConstraintValidatorFactory} implementation that delegates to
                     * the current Spring {@link WebApplicationContext} for creating autowired
                     * {@link ConstraintValidator} instances.
                     * <p>In contrast to
                     * {@link org.springframework.validation.beanvalidation.SpringConstraintValidatorFactory},
                     * this variant is meant for declarative use in a standard {@code validation.xml} file,
                     * e.g. in combination with JAX-RS or JAX-WS.
                     * @author Juergen Hoeller
                     * @since 4.2.1
                     * @see ContextLoader#getCurrentWebApplicationContext()
                     * @see org.springframework.validation.beanvalidation.SpringConstraintValidatorFactory
                     */
                    // @ts-ignore
                    class SpringWebConstraintValidatorFactory extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getInstance<T extends java.lang.Object>(key: java.lang.Class<T>): T
                        // @ts-ignore
                        public releaseInstance(instance: object): void
                        /**
                         * Retrieve the Spring {@link WebApplicationContext} to use.
                         * The default implementation returns the current {@link WebApplicationContext}
                         * as registered for the thread context class loader.
                         * @return the current WebApplicationContext (never {#code null})
                         * @see ContextLoader#getCurrentWebApplicationContext()
                         */
                        // @ts-ignore
                        getWebApplicationContext(): org.springframework.web.context.WebApplicationContext
                    }
                }
            }
        }
    }
}

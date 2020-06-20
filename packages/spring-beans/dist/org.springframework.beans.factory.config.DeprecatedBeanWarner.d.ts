declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Bean factory post processor that logs a warning for {@link Deprecated @Deprecated} beans.
                     * @author Arjen Poutsma
                     * @since 3.0.3
                     */
                    // @ts-ignore
                    class DeprecatedBeanWarner extends java.lang.Object implements org.springframework.beans.factory.config.BeanFactoryPostProcessor {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        logger: Log
                        /**
                         * Set the name of the logger to use.
                         * The name will be passed to the underlying logger implementation through Commons Logging,
                         * getting interpreted as log category according to the logger's configuration.
                         * <p>This can be specified to not log into the category of this warner class but rather
                         * into a specific named category.
                         * @see org.apache.commons.logging.LogFactory#getLog(String)
                         * @see java.util.logging.Logger#getLogger(String)
                         */
                        // @ts-ignore
                        setLoggerName(loggerName: string): void
                        // @ts-ignore
                        postProcessBeanFactory(beanFactory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory): void
                        /**
                         * Logs a warning for a bean annotated with {@link Deprecated @Deprecated}.
                         * @param beanName the name of the deprecated bean
                         * @param beanType the user-specified type of the deprecated bean
                         * @param beanDefinition the definition of the deprecated bean
                         */
                        // @ts-ignore
                        logDeprecatedBean(beanName: string, beanType: java.lang.Class<any>, beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        /**
                         * Actually write to the underlying log.
                         * <p>The default implementations logs the message at "warn" level.
                         * @param message the message to write
                         */
                        // @ts-ignore
                        writeToLog(message: string): void
                        /**
                         * Determine whether the {@link #logger} field is enabled.
                         * <p>Default is {@code true} when the "warn" level is enabled.
                         * Subclasses can override this to change the level under which logging occurs.
                         */
                        // @ts-ignore
                        isLogEnabled(): boolean
                    }
                }
            }
        }
    }
}

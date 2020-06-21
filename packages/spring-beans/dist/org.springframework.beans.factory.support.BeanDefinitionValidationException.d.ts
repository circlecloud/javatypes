declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Exception thrown when the validation of a bean definition failed.
                     * @author Juergen Hoeller
                     * @since 21.11.2003
                     * @see AbstractBeanDefinition#validate()
                     */
                    // @ts-ignore
                    class BeanDefinitionValidationException extends org.springframework.beans.FatalBeanException {
                        /**
                         * Create a new BeanDefinitionValidationException with the specified message.
                         * @param msg the detail message
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string)
                        /**
                         * Create a new BeanDefinitionValidationException with the specified message
                         * and root cause.
                         * @param msg the detail message
                         * @param cause the root cause
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}

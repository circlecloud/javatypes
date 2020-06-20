declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Exception thrown when a bean definition reader encounters an error
                     * during the parsing process.
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 2.0
                     */
                    // @ts-ignore
                    class BeanDefinitionParsingException extends org.springframework.beans.factory.BeanDefinitionStoreException {
                        /**
                         * Create a new BeanDefinitionParsingException.
                         * @param problem the configuration problem that was detected during the parsing process
                         */
                        // @ts-ignore
                        constructor(problem: org.springframework.beans.factory.parsing.Problem)
                    }
                }
            }
        }
    }
}

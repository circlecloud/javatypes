declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Simple subclass of {@code AbstractReflectiveMBeanInfoAssembler}
                     * that always votes yes for method and property inclusion, effectively exposing
                     * all public methods and properties as operations and attributes.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 1.2
                     */
                    // @ts-ignore
                    class SimpleReflectiveMBeanInfoAssembler extends org.springframework.jmx.export.assembler.AbstractConfigurableMBeanInfoAssembler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Always returns {@code true}.
                         */
                        // @ts-ignore
                        includeReadAttribute(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        /**
                         * Always returns {@code true}.
                         */
                        // @ts-ignore
                        includeWriteAttribute(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        /**
                         * Always returns {@code true}.
                         */
                        // @ts-ignore
                        includeOperation(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Extension of MethodOverride that represents an arbitrary
                     * override of a method by the IoC container.
                     * <p>Any non-final method can be overridden, irrespective of its
                     * parameters and return types.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 1.1
                     */
                    // @ts-ignore
                    class ReplaceOverride extends org.springframework.beans.factory.support.MethodOverride {
                        /**
                         * Construct a new ReplaceOverride.
                         * @param methodName the name of the method to override
                         * @param methodReplacerBeanName the bean name of the MethodReplacer
                         */
                        // @ts-ignore
                        constructor(methodName: string, methodReplacerBeanName: string)
                        /**
                         * Return the name of the bean implementing MethodReplacer.
                         */
                        // @ts-ignore
                        getMethodReplacerBeanName(): java.lang.String
                        /**
                         * Add a fragment of a class string, like "Exception"
                         * or "java.lang.Exc", to identify a parameter type.
                         * @param identifier a substring of the fully qualified class name
                         */
                        // @ts-ignore
                        addTypeIdentifier(identifier: string): void
                        // @ts-ignore
                        matches(method: java.lang.reflect.Method): boolean
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}

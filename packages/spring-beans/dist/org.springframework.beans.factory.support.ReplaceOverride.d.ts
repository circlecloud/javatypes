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
                        constructor(methodName: java.lang.String | string, methodReplacerBeanName: java.lang.String | string)
                        /**
                         * Return the name of the bean implementing MethodReplacer.
                         */
                        // @ts-ignore
                        public getMethodReplacerBeanName(): string
                        /**
                         * Add a fragment of a class string, like "Exception"
                         * or "java.lang.Exc", to identify a parameter type.
                         * @param identifier a substring of the fully qualified class name
                         */
                        // @ts-ignore
                        public addTypeIdentifier(identifier: java.lang.String | string): void
                        // @ts-ignore
                        public matches(method: java.lang.reflect.Method): boolean
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}

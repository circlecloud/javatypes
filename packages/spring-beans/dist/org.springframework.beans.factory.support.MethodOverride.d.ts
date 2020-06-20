declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Object representing the override of a method on a managed object by the IoC
                     * container.
                     * <p>Note that the override mechanism is <em>not</em> intended as a generic
                     * means of inserting crosscutting code: use AOP for that.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 1.1
                     */
                    // @ts-ignore
                    class MethodOverride extends java.lang.Object implements org.springframework.beans.BeanMetadataElement {
                        /**
                         * Construct a new override for the given method.
                         * @param methodName the name of the method to override
                         */
                        // @ts-ignore
                        constructor(methodName: string)
                        /**
                         * Return the name of the method to be overridden.
                         */
                        // @ts-ignore
                        getMethodName(): java.lang.String
                        /**
                         * Set whether the overridden method is <em>overloaded</em> (i.e., whether argument
                         * type matching needs to occur to disambiguate methods of the same name).
                         * <p>Default is {@code true}; can be switched to {@code false} to optimize
                         * runtime performance.
                         */
                        // @ts-ignore
                        setOverloaded(overloaded: boolean): void
                        /**
                         * Return whether the overridden method is <em>overloaded</em> (i.e., whether argument
                         * type matching needs to occur to disambiguate methods of the same name).
                         */
                        // @ts-ignore
                        isOverloaded(): boolean
                        /**
                         * Set the configuration source {@code Object} for this metadata element.
                         * <p>The exact type of the object will depend on the configuration mechanism used.
                         */
                        // @ts-ignore
                        setSource(source: any): void
                        // @ts-ignore
                        getSource(): java.lang.Object
                        /**
                         * Subclasses must override this to indicate whether they <em>match</em> the
                         * given method. This allows for argument list checking as well as method
                         * name checking.
                         * @param method the method to check
                         * @return whether this override matches the given method
                         */
                        // @ts-ignore
                        abstract matches(method: java.lang.reflect.Method): boolean
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                    }
                }
            }
        }
    }
}

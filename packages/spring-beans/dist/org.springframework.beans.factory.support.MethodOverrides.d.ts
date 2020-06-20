declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Set of method overrides, determining which, if any, methods on a
                     * managed object the Spring IoC container will override at runtime.
                     * <p>The currently supported {@link MethodOverride} variants are
                     * {@link LookupOverride} and {@link ReplaceOverride}.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 1.1
                     * @see MethodOverride
                     */
                    // @ts-ignore
                    class MethodOverrides extends java.lang.Object {
                        /**
                         * Create new MethodOverrides.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Deep copy constructor.
                         */
                        // @ts-ignore
                        constructor(other: org.springframework.beans.factory.support.MethodOverrides)
                        /**
                         * Copy all given method overrides into this object.
                         */
                        // @ts-ignore
                        addOverrides(other: org.springframework.beans.factory.support.MethodOverrides): void
                        /**
                         * Add the given method override.
                         */
                        // @ts-ignore
                        addOverride(override: org.springframework.beans.factory.support.MethodOverride): void
                        /**
                         * Return all method overrides contained by this object.
                         * @return a Set of MethodOverride objects
                         * @see MethodOverride
                         */
                        // @ts-ignore
                        getOverrides(): java.util.Set<org.springframework.beans.factory.support.MethodOverride>
                        /**
                         * Return whether the set of method overrides is empty.
                         */
                        // @ts-ignore
                        isEmpty(): boolean
                        /**
                         * Return the override for the given method, if any.
                         * @param method method to check for overrides for
                         * @return the method override, or {#code null} if none
                         */
                        // @ts-ignore
                        getOverride(method: java.lang.reflect.Method): org.springframework.beans.factory.support.MethodOverride
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

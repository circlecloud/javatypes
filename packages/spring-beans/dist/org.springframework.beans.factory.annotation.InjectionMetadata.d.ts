declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Internal class for managing injection metadata.
                     * Not intended for direct use in applications.
                     * <p>Used by {@link AutowiredAnnotationBeanPostProcessor},
                     * {@link org.springframework.context.annotation.CommonAnnotationBeanPostProcessor} and
                     * {@link org.springframework.orm.jpa.support.PersistenceAnnotationBeanPostProcessor}.
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class InjectionMetadata extends java.lang.Object {
                        /**
                         * Create a new {@code InjectionMetadata instance}.
                         * <p>Preferably use {@link #forElements} for reusing the {@link #EMPTY}
                         * instance in case of no elements.
                         * @param targetClass the target class
                         * @param elements the associated elements to inject
                         * @see #forElements
                         */
                        // @ts-ignore
                        constructor(targetClass: java.lang.Class<any>, elements: java.util.Collection<org.springframework.beans.factory.annotation.InjectionMetadata.InjectedElement> | Array<org.springframework.beans.factory.annotation.InjectionMetadata.InjectedElement>)
                        /**
                         * An empty {@code InjectionMetadata} instance with no-op callbacks.
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static readonly EMPTY: org.springframework.beans.factory.annotation.InjectionMetadata
                        /**
                         * Determine whether this metadata instance needs to be refreshed.
                         * @param clazz the current target class
                         * @return {#code true} indicating a refresh, {@code false} otherwise
                         * @since 5.2.4
                         */
                        // @ts-ignore
                        needsRefresh(clazz: java.lang.Class<any>): boolean
                        // @ts-ignore
                        public checkConfigMembers(beanDefinition: org.springframework.beans.factory.support.RootBeanDefinition): void
                        // @ts-ignore
                        public inject(target: java.lang.Object | any, beanName: java.lang.String | string, pvs: org.springframework.beans.PropertyValues): void
                        /**
                         * Clear property skipping for the contained elements.
                         * @since 3.2.13
                         */
                        // @ts-ignore
                        public clear(pvs: org.springframework.beans.PropertyValues): void
                        /**
                         * Return an {@code InjectionMetadata} instance, possibly for empty elements.
                         * @param elements the elements to inject (possibly empty)
                         * @param clazz the target class
                         * @return a new {#link #InjectionMetadata(Class, Collection)} instance,
                         *  or {@link #EMPTY} in case of no elements
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static forElements(elements: java.util.Collection<org.springframework.beans.factory.annotation.InjectionMetadata.InjectedElement> | Array<org.springframework.beans.factory.annotation.InjectionMetadata.InjectedElement>, clazz: java.lang.Class<any>): org.springframework.beans.factory.annotation.InjectionMetadata
                        /**
                         * Check whether the given injection metadata needs to be refreshed.
                         * @param metadata the existing metadata instance
                         * @param clazz the current target class
                         * @return {#code true} indicating a refresh, {@code false} otherwise
                         * @see #needsRefresh(Class)
                         */
                        // @ts-ignore
                        public static needsRefresh(metadata: org.springframework.beans.factory.annotation.InjectionMetadata, clazz: java.lang.Class<any>): boolean
                    }
                }
            }
        }
    }
}

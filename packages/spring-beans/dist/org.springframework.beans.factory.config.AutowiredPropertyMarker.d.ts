declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Simple marker class for an individually autowired property value, to be added
                     * to {@link BeanDefinition#getPropertyValues()} for a specific bean property.
                     * <p>At runtime, this will be replaced with a {@link DependencyDescriptor}
                     * for the corresponding bean property's write method, eventually to be resolved
                     * through a {@link AutowireCapableBeanFactory#resolveDependency} step.
                     * @author Juergen Hoeller
                     * @since 5.2
                     * @see AutowireCapableBeanFactory#resolveDependency
                     * @see BeanDefinition#getPropertyValues()
                     * @see org.springframework.beans.factory.support.BeanDefinitionBuilder#addAutowiredProperty
                     */
                    // @ts-ignore
                    class AutowiredPropertyMarker extends java.lang.Object implements java.io.Serializable {
                        /**
                         * The canonical instance for the autowired marker value.
                         */
                        // @ts-ignore
                        public static readonly INSTANCE: java.lang.Object | any
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
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

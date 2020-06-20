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
                        readonly INSTANCE: any
                        // @ts-ignore
                        equals(obj: any): boolean
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

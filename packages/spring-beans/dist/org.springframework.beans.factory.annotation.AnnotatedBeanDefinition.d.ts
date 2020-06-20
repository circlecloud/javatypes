declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Extended {@link org.springframework.beans.factory.config.BeanDefinition}
                     * interface that exposes {@link org.springframework.core.type.AnnotationMetadata}
                     * about its bean class - without requiring the class to be loaded yet.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see AnnotatedGenericBeanDefinition
                     * @see org.springframework.core.type.AnnotationMetadata
                     */
                    // @ts-ignore
                    interface AnnotatedBeanDefinition extends org.springframework.beans.factory.config.BeanDefinition {
                        /**
                         * Obtain the annotation metadata (as well as basic class metadata)
                         * for this bean definition's bean class.
                         * @return the annotation metadata object (never {#code null})
                         */
                        // @ts-ignore
                        getMetadata(): AnnotationMetadata
                        /**
                         * Obtain metadata for this bean definition's factory method, if any.
                         * @return the factory method metadata, or {#code null} if none
                         * @since 4.1.1
                         */
                        // @ts-ignore
                        getFactoryMethodMetadata(): MethodMetadata
                    }
                }
            }
        }
    }
}

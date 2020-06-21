declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Extension of the {@link org.springframework.beans.factory.support.GenericBeanDefinition}
                     * class, adding support for annotation metadata exposed through the
                     * {@link AnnotatedBeanDefinition} interface.
                     * <p>This GenericBeanDefinition variant is mainly useful for testing code that expects
                     * to operate on an AnnotatedBeanDefinition, for example strategy implementations
                     * in Spring's component scanning support (where the default definition class is
                     * {@link org.springframework.context.annotation.ScannedGenericBeanDefinition},
                     * which also implements the AnnotatedBeanDefinition interface).
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @since 2.5
                     * @see AnnotatedBeanDefinition#getMetadata()
                     * @see org.springframework.core.type.StandardAnnotationMetadata
                     */
                    // @ts-ignore
                    class AnnotatedGenericBeanDefinition extends org.springframework.beans.factory.support.GenericBeanDefinition implements org.springframework.beans.factory.annotation.AnnotatedBeanDefinition {
                        /**
                         * Create a new AnnotatedGenericBeanDefinition for the given bean class.
                         * @param beanClass the loaded bean class
                         */
                        // @ts-ignore
                        constructor(beanClass: java.lang.Class<any>)
                        /**
                         * Create a new AnnotatedGenericBeanDefinition for the given annotation metadata,
                         * allowing for ASM-based processing and avoidance of early loading of the bean class.
                         * Note that this constructor is functionally equivalent to
                         * {@link org.springframework.context.annotation.ScannedGenericBeanDefinition
                         * ScannedGenericBeanDefinition}, however the semantics of the latter indicate that a
                         * bean was discovered specifically via component-scanning as opposed to other means.
                         * @param metadata the annotation metadata for the bean class in question
                         * @since 3.1.1
                         */
                        // @ts-ignore
                        constructor(metadata: AnnotationMetadata)
                        /**
                         * Create a new AnnotatedGenericBeanDefinition for the given annotation metadata,
                         * based on an annotated class and a factory method on that class.
                         * @param metadata the annotation metadata for the bean class in question
                         * @param factoryMethodMetadata metadata for the selected factory method
                         * @since 4.1.1
                         */
                        // @ts-ignore
                        constructor(metadata: AnnotationMetadata, factoryMethodMetadata: MethodMetadata)
                        // @ts-ignore
                        public getMetadata(): AnnotationMetadata
                        // @ts-ignore
                        public getFactoryMethodMetadata(): MethodMetadata
                    }
                }
            }
        }
    }
}

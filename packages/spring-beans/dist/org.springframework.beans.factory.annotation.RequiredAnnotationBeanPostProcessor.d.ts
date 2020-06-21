declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * {@link org.springframework.beans.factory.config.BeanPostProcessor} implementation
                     * that enforces required JavaBean properties to have been configured.
                     * Required bean properties are detected through a Java 5 annotation:
                     * by default, Spring's {@link Required} annotation.
                     * <p>The motivation for the existence of this BeanPostProcessor is to allow
                     * developers to annotate the setter properties of their own classes with an
                     * arbitrary JDK 1.5 annotation to indicate that the container must check
                     * for the configuration of a dependency injected value. This neatly pushes
                     * responsibility for such checking onto the container (where it arguably belongs),
                     * and obviates the need (<b>in part</b>) for a developer to code a method that
                     * simply checks that all required properties have actually been set.
                     * <p>Please note that an 'init' method may still need to be implemented (and may
                     * still be desirable), because all that this class does is enforcing that a
                     * 'required' property has actually been configured with a value. It does
                     * <b>not</b> check anything else... In particular, it does not check that a
                     * configured value is not {@code null}.
                     * <p>Note: A default RequiredAnnotationBeanPostProcessor will be registered
                     * by the "context:annotation-config" and "context:component-scan" XML tags.
                     * Remove or turn off the default annotation configuration there if you intend
                     * to specify a custom RequiredAnnotationBeanPostProcessor bean definition.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see #setRequiredAnnotationType
                     * @see Required
                     * @deprecated as of 5.1, in favor of using constructor injection for required settings
                     *  (or a custom {#link org.springframework.beans.factory.InitializingBean} implementation)
                     */
                    // @ts-ignore
                    class RequiredAnnotationBeanPostProcessor extends org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessorAdapter implements org.springframework.beans.factory.support.MergedBeanDefinitionPostProcessor, org.springframework.beans.factory.BeanFactoryAware {
                        // @ts-ignore
                        constructor()
                        /**
                         * Bean definition attribute that may indicate whether a given bean is supposed
                         * to be skipped when performing this post-processor's required property check.
                         * @see #shouldSkip
                         */
                        // @ts-ignore
                        public static readonly SKIP_REQUIRED_CHECK_ATTRIBUTE: java.lang.String | string
                        /**
                         * Set the 'required' annotation type, to be used on bean property
                         * setter methods.
                         * <p>The default required annotation type is the Spring-provided
                         * {@link Required} annotation.
                         * <p>This setter property exists so that developers can provide their own
                         * (non-Spring-specific) annotation type to indicate that a property value
                         * is required.
                         */
                        // @ts-ignore
                        public setRequiredAnnotationType(requiredAnnotationType: java.lang.Class<any>): void
                        /**
                         * Return the 'required' annotation type.
                         */
                        // @ts-ignore
                        getRequiredAnnotationType(): java.lang.Class<any>
                        // @ts-ignore
                        public setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        // @ts-ignore
                        public setOrder(order: number /*int*/): void
                        // @ts-ignore
                        public getOrder(): number /*int*/
                        // @ts-ignore
                        public postProcessMergedBeanDefinition(beanDefinition: org.springframework.beans.factory.support.RootBeanDefinition, beanType: java.lang.Class<any>, beanName: java.lang.String | string): void
                        // @ts-ignore
                        public postProcessPropertyValues(pvs: org.springframework.beans.PropertyValues, pds: java.beans.PropertyDescriptor[], bean: java.lang.Object | any, beanName: java.lang.String | string): org.springframework.beans.PropertyValues
                        /**
                         * Check whether the given bean definition is not subject to the annotation-based
                         * required property check as performed by this post-processor.
                         * <p>The default implementations check for the presence of the
                         * {@link #SKIP_REQUIRED_CHECK_ATTRIBUTE} attribute in the bean definition, if any.
                         * It also suggests skipping in case of a bean definition with a "factory-bean"
                         * reference set, assuming that instance-based factories pre-populate the bean.
                         * @param beanFactory the BeanFactory to check against
                         * @param beanName the name of the bean to check against
                         * @return {#code true} to skip the bean; {@code false} to process it
                         */
                        // @ts-ignore
                        shouldSkip(beanFactory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory, beanName: java.lang.String | string): boolean
                        /**
                         * Is the supplied property required to have a value (that is, to be dependency-injected)?
                         * <p>This implementation looks for the existence of a
                         * {@link #setRequiredAnnotationType "required" annotation}
                         * on the supplied {@link PropertyDescriptor property}.
                         * @param propertyDescriptor the target PropertyDescriptor (never {#code null})
                         * @return {#code true} if the supplied property has been marked as being required;
                         *  {@code false} if not, or if the supplied property does not have a setter method
                         */
                        // @ts-ignore
                        isRequiredProperty(propertyDescriptor: java.beans.PropertyDescriptor): boolean
                    }
                }
            }
        }
    }
}

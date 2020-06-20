declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Implementation of the {@link MBeanInfoAssembler} interface that reads
                     * the management interface information from source level metadata.
                     * <p>Uses the {@link JmxAttributeSource} strategy interface, so that
                     * metadata can be read using any supported implementation. Out of the box,
                     * Spring provides an implementation based on annotations:
                     * {@code AnnotationJmxAttributeSource}.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Jennifer Hickey
                     * @since 1.2
                     * @see #setAttributeSource
                     * @see org.springframework.jmx.export.annotation.AnnotationJmxAttributeSource
                     */
                    // @ts-ignore
                    class MetadataMBeanInfoAssembler extends org.springframework.jmx.export.assembler.AbstractReflectiveMBeanInfoAssembler implements org.springframework.jmx.export.assembler.AutodetectCapableMBeanInfoAssembler {
                        /**
                         * Create a new {@code MetadataMBeanInfoAssembler} which needs to be
                         * configured through the {@link #setAttributeSource} method.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@code MetadataMBeanInfoAssembler} for the given
                         * {@code JmxAttributeSource}.
                         * @param attributeSource the JmxAttributeSource to use
                         */
                        // @ts-ignore
                        constructor(attributeSource: org.springframework.jmx.export.metadata.JmxAttributeSource)
                        /**
                         * Set the {@code JmxAttributeSource} implementation to use for
                         * reading the metadata from the bean class.
                         * @see org.springframework.jmx.export.annotation.AnnotationJmxAttributeSource
                         */
                        // @ts-ignore
                        setAttributeSource(attributeSource: org.springframework.jmx.export.metadata.JmxAttributeSource): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Throws an IllegalArgumentException if it encounters a JDK dynamic proxy.
                         * Metadata can only be read from target classes and CGLIB proxies!
                         */
                        // @ts-ignore
                        checkManagedBean(managedBean: any): void
                        /**
                         * Used for autodetection of beans. Checks to see if the bean's class has a
                         * {@code ManagedResource} attribute. If so it will add it list of included beans.
                         * @param beanClass the class of the bean
                         * @param beanName the name of the bean in the bean factory
                         */
                        // @ts-ignore
                        includeBean(beanClass: java.lang.Class<any>, beanName: string): boolean
                        /**
                         * Vote on the inclusion of an attribute accessor.
                         * @param method the accessor method
                         * @param beanKey the key associated with the MBean in the beans map
                         * @return whether the method has the appropriate metadata
                         */
                        // @ts-ignore
                        includeReadAttribute(method: java.lang.reflect.Method, beanKey: string): boolean
                        /**
                         * Votes on the inclusion of an attribute mutator.
                         * @param method the mutator method
                         * @param beanKey the key associated with the MBean in the beans map
                         * @return whether the method has the appropriate metadata
                         */
                        // @ts-ignore
                        includeWriteAttribute(method: java.lang.reflect.Method, beanKey: string): boolean
                        /**
                         * Votes on the inclusion of an operation.
                         * @param method the operation method
                         * @param beanKey the key associated with the MBean in the beans map
                         * @return whether the method has the appropriate metadata
                         */
                        // @ts-ignore
                        includeOperation(method: java.lang.reflect.Method, beanKey: string): boolean
                        /**
                         * Reads managed resource description from the source level metadata.
                         * Returns an empty {@code String} if no description can be found.
                         */
                        // @ts-ignore
                        getDescription(managedBean: any, beanKey: string): java.lang.String
                        /**
                         * Creates a description for the attribute corresponding to this property
                         * descriptor. Attempts to create the description using metadata from either
                         * the getter or setter attributes, otherwise uses the property name.
                         */
                        // @ts-ignore
                        getAttributeDescription(propertyDescriptor: java.beans.PropertyDescriptor, beanKey: string): java.lang.String
                        /**
                         * Retrieves the description for the supplied {@code Method} from the
                         * metadata. Uses the method name is no description is present in the metadata.
                         */
                        // @ts-ignore
                        getOperationDescription(method: java.lang.reflect.Method, beanKey: string): java.lang.String
                        /**
                         * Reads {@code MBeanParameterInfo} from the {@code ManagedOperationParameter}
                         * attributes attached to a method. Returns an empty array of {@code MBeanParameterInfo}
                         * if no attributes are found.
                         */
                        // @ts-ignore
                        getOperationParameters(method: java.lang.reflect.Method, beanKey: string): javax.management.MBeanParameterInfo[]
                        /**
                         * Reads the {@link ManagedNotification} metadata from the {@code Class} of the managed resource
                         * and generates and returns the corresponding {@link ModelMBeanNotificationInfo} metadata.
                         */
                        // @ts-ignore
                        getNotificationInfo(managedBean: any, beanKey: string): javax.management.modelmbean.ModelMBeanNotificationInfo[]
                        /**
                         * Adds descriptor fields from the {@code ManagedResource} attribute
                         * to the MBean descriptor. Specifically, adds the {@code currencyTimeLimit},
                         * {@code persistPolicy}, {@code persistPeriod}, {@code persistLocation}
                         * and {@code persistName} descriptor fields if they are present in the metadata.
                         */
                        // @ts-ignore
                        populateMBeanDescriptor(desc: javax.management.Descriptor, managedBean: any, beanKey: string): void
                        /**
                         * Adds descriptor fields from the {@code ManagedAttribute} attribute or the {@code ManagedMetric} attribute
                         * to the attribute descriptor.
                         */
                        // @ts-ignore
                        populateAttributeDescriptor(desc: javax.management.Descriptor, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method, beanKey: string): void
                        /**
                         * Adds descriptor fields from the {@code ManagedAttribute} attribute
                         * to the attribute descriptor. Specifically, adds the {@code currencyTimeLimit}
                         * descriptor field if it is present in the metadata.
                         */
                        // @ts-ignore
                        populateOperationDescriptor(desc: javax.management.Descriptor, method: java.lang.reflect.Method, beanKey: string): void
                    }
                }
            }
        }
    }
}

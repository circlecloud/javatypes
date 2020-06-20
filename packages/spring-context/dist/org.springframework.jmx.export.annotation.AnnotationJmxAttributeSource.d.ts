declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace annotation {
                    /**
                     * Implementation of the {@code JmxAttributeSource} interface that
                     * reads annotations and exposes the corresponding attributes.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Jennifer Hickey
                     * @author Stephane Nicoll
                     * @since 1.2
                     * @see ManagedResource
                     * @see ManagedAttribute
                     * @see ManagedOperation
                     */
                    // @ts-ignore
                    class AnnotationJmxAttributeSource extends java.lang.Object implements org.springframework.jmx.export.metadata.JmxAttributeSource {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        setBeanFactory(beanFactory: BeanFactory): void
                        // @ts-ignore
                        getManagedResource(beanClass: java.lang.Class<any>): org.springframework.jmx.export.metadata.ManagedResource
                        // @ts-ignore
                        getManagedAttribute(method: java.lang.reflect.Method): org.springframework.jmx.export.metadata.ManagedAttribute
                        // @ts-ignore
                        getManagedMetric(method: java.lang.reflect.Method): org.springframework.jmx.export.metadata.ManagedMetric
                        // @ts-ignore
                        getManagedOperation(method: java.lang.reflect.Method): org.springframework.jmx.export.metadata.ManagedOperation
                        // @ts-ignore
                        getManagedOperationParameters(method: java.lang.reflect.Method): org.springframework.jmx.export.metadata.ManagedOperationParameter[]
                        // @ts-ignore
                        getManagedNotifications(clazz: java.lang.Class<any>): org.springframework.jmx.export.metadata.ManagedNotification[]
                    }
                }
            }
        }
    }
}

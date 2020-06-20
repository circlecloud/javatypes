declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Abstract implementation of the {@code MBeanInfoAssembler} interface
                     * that encapsulates the creation of a {@code ModelMBeanInfo} instance
                     * but delegates the creation of metadata to subclasses.
                     * <p>This class offers two flavors of Class extraction from a managed bean
                     * instance: {@link #getTargetClass}, extracting the target class behind
                     * any kind of AOP proxy, and {@link #getClassToExpose}, returning the
                     * class or interface that will be searched for annotations and exposed
                     * to the JMX runtime.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 1.2
                     */
                    // @ts-ignore
                    class AbstractMBeanInfoAssembler extends java.lang.Object implements org.springframework.jmx.export.assembler.MBeanInfoAssembler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create an instance of the {@code ModelMBeanInfoSupport} class supplied with all
                         * JMX implementations and populates the metadata through calls to the subclass.
                         * @param managedBean the bean that will be exposed (might be an AOP proxy)
                         * @param beanKey the key associated with the managed bean
                         * @return the populated ModelMBeanInfo instance
                         * @throws JMException in case of errors
                         * @see #getDescription(Object, String)
                         * @see #getAttributeInfo(Object, String)
                         * @see #getConstructorInfo(Object, String)
                         * @see #getOperationInfo(Object, String)
                         * @see #getNotificationInfo(Object, String)
                         * @see #populateMBeanDescriptor(javax.management.Descriptor, Object, String)
                         */
                        // @ts-ignore
                        getMBeanInfo(managedBean: any, beanKey: string): javax.management.modelmbean.ModelMBeanInfo
                        /**
                         * Check the given bean instance, throwing an IllegalArgumentException
                         * if it is not eligible for exposure with this assembler.
                         * <p>Default implementation is empty, accepting every bean instance.
                         * @param managedBean the bean that will be exposed (might be an AOP proxy)
                         * @throws IllegalArgumentException the bean is not valid for exposure
                         */
                        // @ts-ignore
                        checkManagedBean(managedBean: any): void
                        /**
                         * Return the actual bean class of the given bean instance.
                         * This is the class exposed to description-style JMX properties.
                         * <p>Default implementation returns the target class for an AOP proxy,
                         * and the plain bean class else.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @return the bean class to expose
                         * @see org.springframework.aop.support.AopUtils#getTargetClass(Object)
                         */
                        // @ts-ignore
                        getTargetClass(managedBean: any): java.lang.Class<?>
                        /**
                         * Return the class or interface to expose for the given bean.
                         * This is the class that will be searched for attributes and operations
                         * (for example, checked for annotations).
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @return the bean class to expose
                         * @see JmxUtils#getClassToExpose(Object)
                         */
                        // @ts-ignore
                        getClassToExpose(managedBean: any): java.lang.Class<?>
                        /**
                         * Return the class or interface to expose for the given bean class.
                         * This is the class that will be searched for attributes and operations
                         * @param beanClass the bean class (might be an AOP proxy class)
                         * @return the bean class to expose
                         * @see JmxUtils#getClassToExpose(Class)
                         */
                        // @ts-ignore
                        getClassToExpose(beanClass: java.lang.Class<any>): java.lang.Class<?>
                        /**
                         * Get the class name of the MBean resource.
                         * <p>Default implementation returns a simple description for the MBean
                         * based on the class name.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the MBean description
                         * @throws JMException in case of errors
                         */
                        // @ts-ignore
                        getClassName(managedBean: any, beanKey: string): java.lang.String
                        /**
                         * Get the description of the MBean resource.
                         * <p>Default implementation returns a simple description for the MBean
                         * based on the class name.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @throws JMException in case of errors
                         */
                        // @ts-ignore
                        getDescription(managedBean: any, beanKey: string): java.lang.String
                        /**
                         * Called after the {@code ModelMBeanInfo} instance has been constructed but
                         * before it is passed to the {@code MBeanExporter}.
                         * <p>Subclasses can implement this method to add additional descriptors to the
                         * MBean metadata. Default implementation is empty.
                         * @param descriptor the {#code Descriptor} for the MBean resource.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @throws JMException in case of errors
                         */
                        // @ts-ignore
                        populateMBeanDescriptor(descriptor: javax.management.Descriptor, managedBean: any, beanKey: string): void
                        /**
                         * Get the constructor metadata for the MBean resource. Subclasses should implement
                         * this method to return the appropriate metadata for all constructors that should
                         * be exposed in the management interface for the managed resource.
                         * <p>Default implementation returns an empty array of {@code ModelMBeanConstructorInfo}.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the constructor metadata
                         * @throws JMException in case of errors
                         */
                        // @ts-ignore
                        getConstructorInfo(managedBean: any, beanKey: string): javax.management.modelmbean.ModelMBeanConstructorInfo[]
                        /**
                         * Get the notification metadata for the MBean resource. Subclasses should implement
                         * this method to return the appropriate metadata for all notifications that should
                         * be exposed in the management interface for the managed resource.
                         * <p>Default implementation returns an empty array of {@code ModelMBeanNotificationInfo}.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the notification metadata
                         * @throws JMException in case of errors
                         */
                        // @ts-ignore
                        getNotificationInfo(managedBean: any, beanKey: string): javax.management.modelmbean.ModelMBeanNotificationInfo[]
                        /**
                         * Get the attribute metadata for the MBean resource. Subclasses should implement
                         * this method to return the appropriate metadata for all the attributes that should
                         * be exposed in the management interface for the managed resource.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the attribute metadata
                         * @throws JMException in case of errors
                         */
                        // @ts-ignore
                        abstract getAttributeInfo(managedBean: any, beanKey: string): javax.management.modelmbean.ModelMBeanAttributeInfo[]
                        /**
                         * Get the operation metadata for the MBean resource. Subclasses should implement
                         * this method to return the appropriate metadata for all operations that should
                         * be exposed in the management interface for the managed resource.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the operation metadata
                         * @throws JMException in case of errors
                         */
                        // @ts-ignore
                        abstract getOperationInfo(managedBean: any, beanKey: string): javax.management.modelmbean.ModelMBeanOperationInfo[]
                    }
                }
            }
        }
    }
}

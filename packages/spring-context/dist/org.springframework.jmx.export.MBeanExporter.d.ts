declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                /**
                 * JMX exporter that allows for exposing any <i>Spring-managed bean</i> to a
                 * JMX {@link javax.management.MBeanServer}, without the need to define any
                 * JMX-specific information in the bean classes.
                 * <p>If a bean implements one of the JMX management interfaces, MBeanExporter can
                 * simply register the MBean with the server through its autodetection process.
                 * <p>If a bean does not implement one of the JMX management interfaces, MBeanExporter
                 * will create the management information using the supplied {@link MBeanInfoAssembler}.
                 * <p>A list of {@link MBeanExporterListener MBeanExporterListeners} can be registered
                 * via the {@link #setListeners(MBeanExporterListener[]) listeners} property, allowing
                 * application code to be notified of MBean registration and unregistration events.
                 * <p>This exporter is compatible with MBeans as well as MXBeans.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Rick Evans
                 * @author Mark Fisher
                 * @author Stephane Nicoll
                 * @since 1.2
                 * @see #setBeans
                 * @see #setAutodetect
                 * @see #setAssembler
                 * @see #setListeners
                 * @see org.springframework.jmx.export.assembler.MBeanInfoAssembler
                 * @see MBeanExporterListener
                 */
                // @ts-ignore
                class MBeanExporter extends org.springframework.jmx.support.MBeanRegistrationSupport implements org.springframework.jmx.export.MBeanExportOperations {
                    // @ts-ignore
                    constructor()
                    /**
                     * Autodetection mode indicating that no autodetection should be used.
                     */
                    // @ts-ignore
                    readonly AUTODETECT_NONE: number /*int*/
                    /**
                     * Autodetection mode indicating that only valid MBeans should be autodetected.
                     */
                    // @ts-ignore
                    readonly AUTODETECT_MBEAN: number /*int*/
                    /**
                     * Autodetection mode indicating that only the {@link MBeanInfoAssembler} should be able
                     * to autodetect beans.
                     */
                    // @ts-ignore
                    readonly AUTODETECT_ASSEMBLER: number /*int*/
                    /**
                     * Autodetection mode indicating that all autodetection mechanisms should be used.
                     */
                    // @ts-ignore
                    readonly AUTODETECT_ALL: number /*int*/
                    /**
                     * Supply a {@code Map} of beans to be registered with the JMX
                     * {@code MBeanServer}.
                     * <p>The String keys are the basis for the creation of JMX object names.
                     * By default, a JMX {@code ObjectName} will be created straight
                     * from the given key. This can be customized through specifying a
                     * custom {@code NamingStrategy}.
                     * <p>Both bean instances and bean names are allowed as values.
                     * Bean instances are typically linked in through bean references.
                     * Bean names will be resolved as beans in the current factory, respecting
                     * lazy-init markers (that is, not triggering initialization of such beans).
                     * @param beans a Map with JMX names as keys and bean instances or bean names
                     *  as values
                     * @see #setNamingStrategy
                     * @see org.springframework.jmx.export.naming.KeyNamingStrategy
                     * @see javax.management.ObjectName#ObjectName(String)
                     */
                    // @ts-ignore
                    setBeans(beans: java.util.Map<java.lang.String, java.lang.Object>): void
                    /**
                     * Set whether to autodetect MBeans in the bean factory that this exporter
                     * runs in. Will also ask an {@code AutodetectCapableMBeanInfoAssembler}
                     * if available.
                     * <p>This feature is turned off by default. Explicitly specify
                     * {@code true} here to enable autodetection.
                     * @see #setAssembler
                     * @see AutodetectCapableMBeanInfoAssembler
                     * @see #isMBean
                     */
                    // @ts-ignore
                    setAutodetect(autodetect: boolean): void
                    /**
                     * Set the autodetection mode to use.
                     * @throws IllegalArgumentException if the supplied value is not
                     *  one of the {#code AUTODETECT_} constants
                     * @see #setAutodetectModeName(String)
                     * @see #AUTODETECT_ALL
                     * @see #AUTODETECT_ASSEMBLER
                     * @see #AUTODETECT_MBEAN
                     * @see #AUTODETECT_NONE
                     */
                    // @ts-ignore
                    setAutodetectMode(autodetectMode: number /*int*/): void
                    /**
                     * Set the autodetection mode to use by name.
                     * @throws IllegalArgumentException if the supplied value is not resolvable
                     *  to one of the {#code AUTODETECT_} constants or is {@code null}
                     * @see #setAutodetectMode(int)
                     * @see #AUTODETECT_ALL
                     * @see #AUTODETECT_ASSEMBLER
                     * @see #AUTODETECT_MBEAN
                     * @see #AUTODETECT_NONE
                     */
                    // @ts-ignore
                    setAutodetectModeName(constantName: string): void
                    /**
                     * Specify whether to allow eager initialization of candidate beans
                     * when autodetecting MBeans in the Spring application context.
                     * <p>Default is "false", respecting lazy-init flags on bean definitions.
                     * Switch this to "true" in order to search lazy-init beans as well,
                     * including FactoryBean-produced objects that haven't been initialized yet.
                     */
                    // @ts-ignore
                    setAllowEagerInit(allowEagerInit: boolean): void
                    /**
                     * Set the implementation of the {@code MBeanInfoAssembler} interface to use
                     * for this exporter. Default is a {@code SimpleReflectiveMBeanInfoAssembler}.
                     * <p>The passed-in assembler can optionally implement the
                     * {@code AutodetectCapableMBeanInfoAssembler} interface, which enables it
                     * to participate in the exporter's MBean autodetection process.
                     * @see org.springframework.jmx.export.assembler.SimpleReflectiveMBeanInfoAssembler
                     * @see org.springframework.jmx.export.assembler.AutodetectCapableMBeanInfoAssembler
                     * @see org.springframework.jmx.export.assembler.MetadataMBeanInfoAssembler
                     * @see #setAutodetect
                     */
                    // @ts-ignore
                    setAssembler(assembler: org.springframework.jmx.export.assembler.MBeanInfoAssembler): void
                    /**
                     * Set the implementation of the {@code ObjectNamingStrategy} interface
                     * to use for this exporter. Default is a {@code KeyNamingStrategy}.
                     * @see org.springframework.jmx.export.naming.KeyNamingStrategy
                     * @see org.springframework.jmx.export.naming.MetadataNamingStrategy
                     */
                    // @ts-ignore
                    setNamingStrategy(namingStrategy: org.springframework.jmx.export.naming.ObjectNamingStrategy): void
                    /**
                     * Indicates whether Spring should ensure that {@link ObjectName ObjectNames}
                     * generated by the configured {@link ObjectNamingStrategy} for
                     * runtime-registered MBeans ({@link #registerManagedResource}) should get
                     * modified: to ensure uniqueness for every instance of a managed {@code Class}.
                     * <p>The default value is {@code true}.
                     * @see #registerManagedResource
                     * @see JmxUtils#appendIdentityToObjectName(javax.management.ObjectName, Object)
                     */
                    // @ts-ignore
                    setEnsureUniqueRuntimeObjectNames(ensureUniqueRuntimeObjectNames: boolean): void
                    /**
                     * Indicates whether or not the managed resource should be exposed on the
                     * {@link Thread#getContextClassLoader() thread context ClassLoader} before
                     * allowing any invocations on the MBean to occur.
                     * <p>The default value is {@code true}, exposing a {@link SpringModelMBean}
                     * which performs thread context ClassLoader management. Switch this flag off to
                     * expose a standard JMX {@link javax.management.modelmbean.RequiredModelMBean}.
                     */
                    // @ts-ignore
                    setExposeManagedResourceClassLoader(exposeManagedResourceClassLoader: boolean): void
                    /**
                     * Set the list of names for beans that should be excluded from autodetection.
                     */
                    // @ts-ignore
                    setExcludedBeans(...excludedBeans: string[]): void
                    /**
                     * Add the name of bean that should be excluded from autodetection.
                     */
                    // @ts-ignore
                    addExcludedBean(excludedBean: string): void
                    /**
                     * Set the {@code MBeanExporterListener}s that should be notified
                     * of MBean registration and unregistration events.
                     * @see MBeanExporterListener
                     */
                    // @ts-ignore
                    setListeners(...listeners: org.springframework.jmx.export.MBeanExporterListener[]): void
                    /**
                     * Set the {@link NotificationListenerBean NotificationListenerBeans}
                     * containing the
                     * {@link javax.management.NotificationListener NotificationListeners}
                     * that will be registered with the {@link MBeanServer}.
                     * @see #setNotificationListenerMappings(java.util.Map)
                     * @see NotificationListenerBean
                     */
                    // @ts-ignore
                    setNotificationListeners(...notificationListeners: org.springframework.jmx.export.NotificationListenerBean[]): void
                    /**
                     * Set the {@link NotificationListener NotificationListeners} to register
                     * with the {@link javax.management.MBeanServer}.
                     * <P>The key of each entry in the {@code Map} is a {@link String}
                     * representation of the {@link javax.management.ObjectName} or the bean
                     * name of the MBean the listener should be registered for. Specifying an
                     * asterisk ({@code *}) for a key will cause the listener to be
                     * associated with all MBeans registered by this class at startup time.
                     * <p>The value of each entry is the
                     * {@link javax.management.NotificationListener} to register. For more
                     * advanced options such as registering
                     * {@link javax.management.NotificationFilter NotificationFilters} and
                     * handback objects see {@link #setNotificationListeners(NotificationListenerBean[])}.
                     */
                    // @ts-ignore
                    setNotificationListenerMappings(listeners: java.util.Map<any, javax.management.NotificationListener>): void
                    // @ts-ignore
                    setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * This callback is only required for resolution of bean names in the
                     * {@link #setBeans(java.util.Map) "beans"} {@link Map} and for
                     * autodetection of MBeans (in the latter case, a
                     * {@code ListableBeanFactory} is required).
                     * @see #setBeans
                     * @see #setAutodetect
                     */
                    // @ts-ignore
                    setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Kick off bean registration automatically after the regular singleton instantiation phase.
                     * @see #registerBeans()
                     */
                    // @ts-ignore
                    afterSingletonsInstantiated(): void
                    /**
                     * Unregisters all beans that this exported has exposed via JMX
                     * when the enclosing {@code ApplicationContext} is destroyed.
                     */
                    // @ts-ignore
                    destroy(): void
                    // @ts-ignore
                    registerManagedResource(managedResource: any): javax.management.ObjectName
                    // @ts-ignore
                    registerManagedResource(managedResource: any, objectName: javax.management.ObjectName): void
                    // @ts-ignore
                    unregisterManagedResource(objectName: javax.management.ObjectName): void
                    /**
                     * Register the defined beans with the {@link MBeanServer}.
                     * <p>Each bean is exposed to the {@code MBeanServer} via a
                     * {@code ModelMBean}. The actual implementation of the
                     * {@code ModelMBean} interface used depends on the implementation of
                     * the {@code ModelMBeanProvider} interface that is configured. By
                     * default the {@code RequiredModelMBean} class that is supplied with
                     * all JMX implementations is used.
                     * <p>The management interface produced for each bean is dependent on the
                     * {@code MBeanInfoAssembler} implementation being used. The
                     * {@code ObjectName} given to each bean is dependent on the
                     * implementation of the {@code ObjectNamingStrategy} interface being used.
                     */
                    // @ts-ignore
                    registerBeans(): void
                    /**
                     * Return whether the specified bean definition should be considered as lazy-init.
                     * @param beanFactory the bean factory that is supposed to contain the bean definition
                     * @param beanName the name of the bean to check
                     * @see org.springframework.beans.factory.config.ConfigurableListableBeanFactory#getBeanDefinition
                     * @see org.springframework.beans.factory.config.BeanDefinition#isLazyInit
                     */
                    // @ts-ignore
                    isBeanDefinitionLazyInit(beanFactory: ListableBeanFactory, beanName: string): boolean
                    /**
                     * Register an individual bean with the {@link #setServer MBeanServer}.
                     * <p>This method is responsible for deciding <strong>how</strong> a bean
                     * should be exposed to the {@code MBeanServer}. Specifically, if the
                     * supplied {@code mapValue} is the name of a bean that is configured
                     * for lazy initialization, then a proxy to the resource is registered with
                     * the {@code MBeanServer} so that the lazy load behavior is
                     * honored. If the bean is already an MBean then it will be registered
                     * directly with the {@code MBeanServer} without any intervention. For
                     * all other beans or bean names, the resource itself is registered with
                     * the {@code MBeanServer} directly.
                     * @param mapValue the value configured for this bean in the beans map;
                     *  may be either the {#code String} name of a bean, or the bean itself
                     * @param beanKey the key associated with this bean in the beans map
                     * @return the {#code ObjectName} under which the resource was registered
                     * @throws MBeanExportException if the export failed
                     * @see #setBeans
                     * @see #registerBeanInstance
                     * @see #registerLazyInit
                     */
                    // @ts-ignore
                    registerBeanNameOrInstance(mapValue: any, beanKey: string): javax.management.ObjectName
                    /**
                     * Retrieve the {@code ObjectName} for a bean.
                     * <p>If the bean implements the {@code SelfNaming} interface, then the
                     * {@code ObjectName} will be retrieved using {@code SelfNaming.getObjectName()}.
                     * Otherwise, the configured {@code ObjectNamingStrategy} is used.
                     * @param bean the name of the bean in the {#code BeanFactory}
                     * @param beanKey the key associated with the bean in the beans map
                     * @return the {#code ObjectName} for the supplied bean
                     * @throws javax.management.MalformedObjectNameException
                     *  if the retrieved {#code ObjectName} is malformed
                     */
                    // @ts-ignore
                    getObjectName(bean: any, beanKey: string): javax.management.ObjectName
                    /**
                     * Determine whether the given bean class qualifies as an MBean as-is.
                     * <p>The default implementation delegates to {@link JmxUtils#isMBean},
                     * which checks for {@link javax.management.DynamicMBean} classes as well
                     * as classes with corresponding "*MBean" interface (Standard MBeans)
                     * or corresponding "*MXBean" interface (Java 6 MXBeans).
                     * @param beanClass the bean class to analyze
                     * @return whether the class qualifies as an MBean
                     * @see org.springframework.jmx.support.JmxUtils#isMBean(Class)
                     */
                    // @ts-ignore
                    isMBean(beanClass: java.lang.Class<any>): boolean
                    /**
                     * Build an adapted MBean for the given bean instance, if possible.
                     * <p>The default implementation builds a JMX 1.2 StandardMBean
                     * for the target's MBean/MXBean interface in case of an AOP proxy,
                     * delegating the interface's management operations to the proxy.
                     * @param bean the original bean instance
                     * @return the adapted MBean, or {#code null} if not possible
                     */
                    // @ts-ignore
                    adaptMBeanIfPossible(bean: any): javax.management.DynamicMBean
                    /**
                     * Creates an MBean that is configured with the appropriate management
                     * interface for the supplied managed resource.
                     * @param managedResource the resource that is to be exported as an MBean
                     * @param beanKey the key associated with the managed bean
                     * @see #createModelMBean()
                     * @see #getMBeanInfo(Object, String)
                     */
                    // @ts-ignore
                    createAndConfigureMBean(managedResource: any, beanKey: string): javax.management.modelmbean.ModelMBean
                    /**
                     * Create an instance of a class that implements {@code ModelMBean}.
                     * <p>This method is called to obtain a {@code ModelMBean} instance to
                     * use when registering a bean. This method is called once per bean during the
                     * registration phase and must return a new instance of {@code ModelMBean}
                     * @return a new instance of a class that implements {#code ModelMBean}
                     * @throws javax.management.MBeanException if creation of the ModelMBean failed
                     */
                    // @ts-ignore
                    createModelMBean(): javax.management.modelmbean.ModelMBean
                    /**
                     * Called when an MBean is registered. Notifies all registered
                     * {@link MBeanExporterListener MBeanExporterListeners} of the registration event.
                     * <p>Please note that if an {@link MBeanExporterListener} throws a (runtime)
                     * exception when notified, this will essentially interrupt the notification process
                     * and any remaining listeners that have yet to be notified will not (obviously)
                     * receive the {@link MBeanExporterListener#mbeanRegistered(javax.management.ObjectName)}
                     * callback.
                     * @param objectName the {#code ObjectName} of the registered MBean
                     */
                    // @ts-ignore
                    onRegister(objectName: javax.management.ObjectName): void
                    /**
                     * Called when an MBean is unregistered. Notifies all registered
                     * {@link MBeanExporterListener MBeanExporterListeners} of the unregistration event.
                     * <p>Please note that if an {@link MBeanExporterListener} throws a (runtime)
                     * exception when notified, this will essentially interrupt the notification process
                     * and any remaining listeners that have yet to be notified will not (obviously)
                     * receive the {@link MBeanExporterListener#mbeanUnregistered(javax.management.ObjectName)}
                     * callback.
                     * @param objectName the {#code ObjectName} of the unregistered MBean
                     */
                    // @ts-ignore
                    onUnregister(objectName: javax.management.ObjectName): void
                }
            }
        }
    }
}

declare namespace javax {
    namespace management {
        /**
         * <p>An MBean whose management interface is determined by reflection
         * on a Java interface.</p>
         * <p>This class brings more flexibility to the notion of Management
         * Interface in the use of Standard MBeans.  Straightforward use of
         * the patterns for Standard MBeans described in the JMX Specification
         * means that there is a fixed relationship between the implementation
         * class of an MBean and its management interface (i.e., if the
         * implementation class is Thing, the management interface must be
         * ThingMBean).  This class makes it possible to keep the convenience
         * of specifying the management interface with a Java interface,
         * without requiring that there be any naming relationship between the
         * implementation and interface classes.</p>
         * <p>By making a DynamicMBean out of an MBean, this class makes
         * it possible to select any interface implemented by the MBean as its
         * management interface, provided that it complies with JMX patterns
         * (i.e., attributes defined by getter/setter etc...).</p>
         * <p> This class also provides hooks that make it possible to supply
         * custom descriptions and names for the {@link MBeanInfo} returned by
         * the DynamicMBean interface.</p>
         * <p>Using this class, an MBean can be created with any
         * implementation class name <i>Impl</i> and with a management
         * interface defined (as for current Standard MBeans) by any interface
         * <i>Intf</i>, in one of two general ways:</p>
         * <ul>
         * <li>Using the public constructor
         * {@link #StandardMBean(java.lang.Object, java.lang.Class, boolean)
         * StandardMBean(impl,interface)}:
         * <pre>
         * MBeanServer mbs;
         * ...
         * Impl impl = new Impl(...);
         * StandardMBean mbean = new StandardMBean(impl, Intf.class, false);
         * mbs.registerMBean(mbean, objectName);
         * </pre></li>
         * <li>Subclassing StandardMBean:
         * <pre>
         * public class Impl extends StandardMBean implements Intf {
         * public Impl() {
         * super(Intf.class, false);
         * }
         * // implement methods of Intf
         * }
         * [...]
         * MBeanServer mbs;
         * ....
         * Impl impl = new Impl();
         * mbs.registerMBean(impl, objectName);
         * </pre></li>
         * </ul>
         * <p>In either case, the class <i>Impl</i> must implement the
         * interface <i>Intf</i>.</p>
         * <p>Standard MBeans based on the naming relationship between
         * implementation and interface classes are of course still
         * available.</p>
         * <p>This class may also be used to construct MXBeans.  The usage
         * is exactly the same as for Standard MBeans except that in the
         * examples above, the {@code false} parameter to the constructor or
         * {@code super(...)} invocation is instead {@code true}.</p>
         * @since 1.5
         */
        // @ts-ignore
        class StandardMBean extends java.lang.Object implements javax.management.DynamicMBean, javax.management.MBeanRegistration {
            /**
             * <p>Make a DynamicMBean out of the object
             * <var>implementation</var>, using the specified
             * <var>mbeanInterface</var> class.</p>
             * @param implementation The implementation of this MBean.
             * @param mbeanInterface The Management Interface exported by this
             *         MBean's implementation. If <code>null</code>, then this
             *         object will use standard JMX design pattern to determine
             *         the management interface associated with the given
             *         implementation.
             * @param <T> Allows the compiler to check
             *  that {#code implementation} does indeed implement the class
             *  described by {@code mbeanInterface}.  The compiler can only
             *  check this if {@code mbeanInterface} is a class literal such
             *  as {@code MyMBean.class}.
             * @exception IllegalArgumentException if the given
             *     <var>implementation</var> is null.
             * @exception NotCompliantMBeanException if the <var>mbeanInterface</var>
             *     does not follow JMX design patterns for Management Interfaces, or
             *     if the given <var>implementation</var> does not implement the
             *     specified interface.
             */
            // @ts-ignore
            constructor(implementation: T, mbeanInterface: java.lang.Class<T>)
            /**
             * <p>Make a DynamicMBean out of <var>this</var>, using the specified
             * <var>mbeanInterface</var> class.</p>
             * <p>Calls {@link #StandardMBean(java.lang.Object, java.lang.Class)
             * this(this,mbeanInterface)}.
             * This constructor is reserved to subclasses.</p>
             * @param mbeanInterface The Management Interface exported by this
             *         MBean.
             * @exception NotCompliantMBeanException if the <var>mbeanInterface</var>
             *     does not follow JMX design patterns for Management Interfaces, or
             *     if <var>this</var> does not implement the specified interface.
             */
            // @ts-ignore
            constructor(mbeanInterface: java.lang.Class<any>)
            /**
             * <p>Make a DynamicMBean out of the object
             * <var>implementation</var>, using the specified
             * <var>mbeanInterface</var> class, and choosing whether the
             * resultant MBean is an MXBean.  This constructor can be used
             * to make either Standard MBeans or MXBeans.  Unlike the
             * constructor {@link #StandardMBean(Object, Class)}, it
             * does not throw NotCompliantMBeanException.</p>
             * @param implementation The implementation of this MBean.
             * @param mbeanInterface The Management Interface exported by this
             *         MBean's implementation. If <code>null</code>, then this
             *         object will use standard JMX design pattern to determine
             *         the management interface associated with the given
             *         implementation.
             * @param isMXBean If true, the {#code mbeanInterface} parameter
             *  names an MXBean interface and the resultant MBean is an MXBean.
             * @param <T> Allows the compiler to check
             *  that {#code implementation} does indeed implement the class
             *  described by {@code mbeanInterface}.  The compiler can only
             *  check this if {@code mbeanInterface} is a class literal such
             *  as {@code MyMBean.class}.
             * @exception IllegalArgumentException if the given
             *     <var>implementation</var> is null, or if the <var>mbeanInterface</var>
             *     does not follow JMX design patterns for Management Interfaces, or
             *     if the given <var>implementation</var> does not implement the
             *     specified interface.
             * @since 1.6
             */
            // @ts-ignore
            constructor(implementation: T, mbeanInterface: java.lang.Class<T>, isMXBean: boolean)
            /**
             * <p>Make a DynamicMBean out of <var>this</var>, using the specified
             * <var>mbeanInterface</var> class, and choosing whether the resulting
             * MBean is an MXBean.  This constructor can be used
             * to make either Standard MBeans or MXBeans.  Unlike the
             * constructor {@link #StandardMBean(Object, Class)}, it
             * does not throw NotCompliantMBeanException.</p>
             * <p>Calls {@link #StandardMBean(java.lang.Object, java.lang.Class, boolean)
             * this(this, mbeanInterface, isMXBean)}.
             * This constructor is reserved to subclasses.</p>
             * @param mbeanInterface The Management Interface exported by this
             *         MBean.
             * @param isMXBean If true, the {#code mbeanInterface} parameter
             *  names an MXBean interface and the resultant MBean is an MXBean.
             * @exception IllegalArgumentException if the <var>mbeanInterface</var>
             *     does not follow JMX design patterns for Management Interfaces, or
             *     if <var>this</var> does not implement the specified interface.
             * @since 1.6
             */
            // @ts-ignore
            constructor(mbeanInterface: java.lang.Class<any>, isMXBean: boolean)
            /**
             * <p>Replace the implementation object wrapped in this object.</p>
             * @param implementation The new implementation of this Standard MBean
             *  (or MXBean). The <code>implementation</code> object must implement
             *  the Standard MBean (or MXBean) interface that was supplied when this
             *  <code>StandardMBean</code> was constructed.
             * @exception IllegalArgumentException if the given
             *  <var>implementation</var> is null.
             * @exception NotCompliantMBeanException if the given
             *  <var>implementation</var> does not implement the
             *  Standard MBean (or MXBean) interface that was
             *  supplied at construction.
             * @see #getImplementation
             */
            // @ts-ignore
            public setImplementation(implementation: java.lang.Object | any): void
            /**
             * Get the implementation of this Standard MBean (or MXBean).
             * @return The implementation of this Standard MBean (or MXBean).
             * @see #setImplementation
             */
            // @ts-ignore
            public getImplementation(): any
            /**
             * Get the Management Interface of this Standard MBean (or MXBean).
             * @return The management interface of this Standard MBean (or MXBean).
             */
            // @ts-ignore
            public getMBeanInterface(): java.lang.Class<any>
            /**
             * Get the class of the implementation of this Standard MBean (or MXBean).
             * @return The class of the implementation of this Standard MBean (or MXBean).
             */
            // @ts-ignore
            public getImplementationClass(): java.lang.Class<any>
            // @ts-ignore
            public getAttribute(attribute: java.lang.String | string): any
            // @ts-ignore
            public setAttribute(attribute: javax.management.Attribute): void
            // @ts-ignore
            public getAttributes(attributes: java.lang.String[] | string[]): javax.management.AttributeList
            // @ts-ignore
            public setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList
            // @ts-ignore
            public invoke(actionName: java.lang.String | string, params: java.lang.Object[] | any[], signature: java.lang.String[] | string[]): any
            /**
             * Get the {@link MBeanInfo} for this MBean.
             * <p>
             * This method implements
             * {@link javax.management.DynamicMBean#getMBeanInfo()
             * DynamicMBean.getMBeanInfo()}.
             * <p>
             * This method first calls {@link #getCachedMBeanInfo()} in order to
             * retrieve the cached MBeanInfo for this MBean, if any. If the
             * MBeanInfo returned by {@link #getCachedMBeanInfo()} is not null,
             * then it is returned.<br>
             * Otherwise, this method builds a default MBeanInfo for this MBean,
             * using the Management Interface specified for this MBean.
             * <p>
             * While building the MBeanInfo, this method calls the customization
             * hooks that make it possible for subclasses to supply their custom
             * descriptions, parameter names, etc...<br>
             * Finally, it calls {@link #cacheMBeanInfo(javax.management.MBeanInfo)
             * cacheMBeanInfo()} in order to cache the new MBeanInfo.
             * @return The cached MBeanInfo for that MBean, if not null, or a
             *          newly built MBeanInfo if none was cached.
             */
            // @ts-ignore
            public getMBeanInfo(): javax.management.MBeanInfo
            /**
             * Customization hook:
             * Get the className that will be used in the MBeanInfo returned by
             * this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom class name.  The default implementation returns
             * {@link MBeanInfo#getClassName() info.getClassName()}.
             * @param info The default MBeanInfo derived by reflection.
             * @return the class name for the new MBeanInfo.
             */
            // @ts-ignore
            getClassName(info: javax.management.MBeanInfo): string
            /**
             * Customization hook:
             * Get the description that will be used in the MBeanInfo returned by
             * this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom MBean description.  The default implementation returns
             * {@link MBeanInfo#getDescription() info.getDescription()}.
             * @param info The default MBeanInfo derived by reflection.
             * @return the description for the new MBeanInfo.
             */
            // @ts-ignore
            getDescription(info: javax.management.MBeanInfo): string
            /**
             * <p>Customization hook:
             * Get the description that will be used in the MBeanFeatureInfo
             * returned by this MBean.</p>
             * <p>Subclasses may redefine this method in order to supply
             * their custom description.  The default implementation returns
             * {@link MBeanFeatureInfo#getDescription()
             * info.getDescription()}.</p>
             * <p>This method is called by
             * {@link #getDescription(MBeanAttributeInfo)},
             * {@link #getDescription(MBeanOperationInfo)},
             * {@link #getDescription(MBeanConstructorInfo)}.</p>
             * @param info The default MBeanFeatureInfo derived by reflection.
             * @return the description for the given MBeanFeatureInfo.
             */
            // @ts-ignore
            getDescription(info: javax.management.MBeanFeatureInfo): string
            /**
             * Customization hook:
             * Get the description that will be used in the MBeanAttributeInfo
             * returned by this MBean.
             * <p>Subclasses may redefine this method in order to supply their
             * custom description.  The default implementation returns {@link
             * #getDescription(MBeanFeatureInfo)
             * getDescription((MBeanFeatureInfo) info)}.
             * @param info The default MBeanAttributeInfo derived by reflection.
             * @return the description for the given MBeanAttributeInfo.
             */
            // @ts-ignore
            getDescription(info: javax.management.MBeanAttributeInfo): string
            /**
             * Customization hook:
             * Get the description that will be used in the MBeanConstructorInfo
             * returned by this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom description.
             * The default implementation returns {@link
             * #getDescription(MBeanFeatureInfo)
             * getDescription((MBeanFeatureInfo) info)}.
             * @param info The default MBeanConstructorInfo derived by reflection.
             * @return the description for the given MBeanConstructorInfo.
             */
            // @ts-ignore
            getDescription(info: javax.management.MBeanConstructorInfo): string
            /**
             * Customization hook:
             * Get the description that will be used for the  <var>sequence</var>
             * MBeanParameterInfo of the MBeanConstructorInfo returned by this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom description.  The default implementation returns
             * {@link MBeanParameterInfo#getDescription() param.getDescription()}.
             * @param ctor  The default MBeanConstructorInfo derived by reflection.
             * @param param The default MBeanParameterInfo derived by reflection.
             * @param sequence The sequence number of the parameter considered
             *         ("0" for the first parameter, "1" for the second parameter,
             *         etc...).
             * @return the description for the given MBeanParameterInfo.
             */
            // @ts-ignore
            getDescription(ctor: javax.management.MBeanConstructorInfo, param: javax.management.MBeanParameterInfo, sequence: number /*int*/): string
            /**
             * Customization hook:
             * Get the name that will be used for the <var>sequence</var>
             * MBeanParameterInfo of the MBeanConstructorInfo returned by this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom parameter name.  The default implementation returns
             * {@link MBeanParameterInfo#getName() param.getName()}.
             * @param ctor  The default MBeanConstructorInfo derived by reflection.
             * @param param The default MBeanParameterInfo derived by reflection.
             * @param sequence The sequence number of the parameter considered
             *         ("0" for the first parameter, "1" for the second parameter,
             *         etc...).
             * @return the name for the given MBeanParameterInfo.
             */
            // @ts-ignore
            getParameterName(ctor: javax.management.MBeanConstructorInfo, param: javax.management.MBeanParameterInfo, sequence: number /*int*/): string
            /**
             * Customization hook:
             * Get the description that will be used in the MBeanOperationInfo
             * returned by this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom description.  The default implementation returns
             * {@link #getDescription(MBeanFeatureInfo)
             * getDescription((MBeanFeatureInfo) info)}.
             * @param info The default MBeanOperationInfo derived by reflection.
             * @return the description for the given MBeanOperationInfo.
             */
            // @ts-ignore
            getDescription(info: javax.management.MBeanOperationInfo): string
            /**
             * Customization hook:
             * Get the <var>impact</var> flag of the operation that will be used in
             * the MBeanOperationInfo returned by this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom impact flag.  The default implementation returns
             * {@link MBeanOperationInfo#getImpact() info.getImpact()}.
             * @param info The default MBeanOperationInfo derived by reflection.
             * @return the impact flag for the given MBeanOperationInfo.
             */
            // @ts-ignore
            getImpact(info: javax.management.MBeanOperationInfo): number /*int*/
            /**
             * Customization hook:
             * Get the name that will be used for the <var>sequence</var>
             * MBeanParameterInfo of the MBeanOperationInfo returned by this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom parameter name.  The default implementation returns
             * {@link MBeanParameterInfo#getName() param.getName()}.
             * @param op    The default MBeanOperationInfo derived by reflection.
             * @param param The default MBeanParameterInfo derived by reflection.
             * @param sequence The sequence number of the parameter considered
             *         ("0" for the first parameter, "1" for the second parameter,
             *         etc...).
             * @return the name to use for the given MBeanParameterInfo.
             */
            // @ts-ignore
            getParameterName(op: javax.management.MBeanOperationInfo, param: javax.management.MBeanParameterInfo, sequence: number /*int*/): string
            /**
             * Customization hook:
             * Get the description that will be used for the  <var>sequence</var>
             * MBeanParameterInfo of the MBeanOperationInfo returned by this MBean.
             * <br>
             * Subclasses may redefine this method in order to supply their
             * custom description.  The default implementation returns
             * {@link MBeanParameterInfo#getDescription() param.getDescription()}.
             * @param op    The default MBeanOperationInfo derived by reflection.
             * @param param The default MBeanParameterInfo derived by reflection.
             * @param sequence The sequence number of the parameter considered
             *         ("0" for the first parameter, "1" for the second parameter,
             *         etc...).
             * @return the description for the given MBeanParameterInfo.
             */
            // @ts-ignore
            getDescription(op: javax.management.MBeanOperationInfo, param: javax.management.MBeanParameterInfo, sequence: number /*int*/): string
            /**
             * Customization hook:
             * Get the MBeanConstructorInfo[] that will be used in the MBeanInfo
             * returned by this MBean.
             * <br>
             * By default, this method returns <code>null</code> if the wrapped
             * implementation is not <var>this</var>. Indeed, if the wrapped
             * implementation is not this object itself, it will not be possible
             * to recreate a wrapped implementation by calling the implementation
             * constructors through <code>MBeanServer.createMBean(...)</code>.<br>
             * Otherwise, if the wrapped implementation is <var>this</var>,
             * <var>ctors</var> is returned.
             * <br>
             * Subclasses may redefine this method in order to modify this
             * behavior, if needed.
             * @param ctors The default MBeanConstructorInfo[] derived by reflection.
             * @param impl  The wrapped implementation. If <code>null</code> is
             *         passed, the wrapped implementation is ignored and
             *         <var>ctors</var> is returned.
             * @return the MBeanConstructorInfo[] for the new MBeanInfo.
             */
            // @ts-ignore
            getConstructors(ctors: javax.management.MBeanConstructorInfo[], impl: java.lang.Object | any): javax.management.MBeanConstructorInfo[]
            /**
             * Customization hook:
             * Return the MBeanInfo cached for this object.
             * <p>Subclasses may redefine this method in order to implement their
             * own caching policy.  The default implementation stores one
             * {@link MBeanInfo} object per instance.
             * @return The cached MBeanInfo, or null if no MBeanInfo is cached.
             * @see #cacheMBeanInfo(MBeanInfo)
             */
            // @ts-ignore
            getCachedMBeanInfo(): javax.management.MBeanInfo
            /**
             * Customization hook:
             * cache the MBeanInfo built for this object.
             * <p>Subclasses may redefine this method in order to implement
             * their own caching policy.  The default implementation stores
             * <code>info</code> in this instance.  A subclass can define
             * other policies, such as not saving <code>info</code> (so it is
             * reconstructed every time {@link #getMBeanInfo()} is called) or
             * sharing a unique {@link MBeanInfo} object when several
             * <code>StandardMBean</code> instances have equal {@link
             * MBeanInfo} values.
             * @param info the new <code>MBeanInfo</code> to cache.  Any
             *  previously cached value is discarded.  This parameter may be
             *  null, in which case there is no new cached value.
             */
            // @ts-ignore
            cacheMBeanInfo(info: javax.management.MBeanInfo): void
            /**
             * <p>Allows the MBean to perform any operations it needs before
             * being registered in the MBean server.  If the name of the MBean
             * is not specified, the MBean can provide a name for its
             * registration.  If any exception is raised, the MBean will not be
             * registered in the MBean server.</p>
             * <p>The default implementation of this method returns the {@code name}
             * parameter.  It does nothing else for
             * Standard MBeans.  For MXBeans, it records the {@code MBeanServer}
             * and {@code ObjectName} parameters so they can be used to translate
             * inter-MXBean references.</p>
             * <p>It is good practice for a subclass that overrides this method
             * to call the overridden method via {@code super.preRegister(...)}.
             * This is necessary if this object is an MXBean that is referenced
             * by attributes or operations in other MXBeans.</p>
             * @param server The MBean server in which the MBean will be registered.
             * @param name The object name of the MBean.  This name is null if
             *  the name parameter to one of the <code>createMBean</code> or
             *  <code>registerMBean</code> methods in the {#link MBeanServer}
             *  interface is null.  In that case, this method must return a
             *  non-null ObjectName for the new MBean.
             * @return The name under which the MBean is to be registered.
             *  This value must not be null.  If the <code>name</code>
             *  parameter is not null, it will usually but not necessarily be
             *  the returned value.
             * @throws IllegalArgumentException if this is an MXBean and
             *  {#code name} is null.
             * @throws InstanceAlreadyExistsException if this is an MXBean and
             *  it has already been registered under another name (in this
             *  MBean Server or another).
             * @throws Exception no other checked exceptions are thrown by
             *  this method but {#code Exception} is declared so that subclasses
             *  can override the method and throw their own exceptions.
             * @since 1.6
             */
            // @ts-ignore
            public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
            /**
             * <p>Allows the MBean to perform any operations needed after having been
             * registered in the MBean server or after the registration has failed.</p>
             * <p>The default implementation of this method does nothing for
             * Standard MBeans.  For MXBeans, it undoes any work done by
             * {@link #preRegister preRegister} if registration fails.</p>
             * <p>It is good practice for a subclass that overrides this method
             * to call the overridden method via {@code super.postRegister(...)}.
             * This is necessary if this object is an MXBean that is referenced
             * by attributes or operations in other MXBeans.</p>
             * @param registrationDone Indicates whether or not the MBean has
             *  been successfully registered in the MBean server. The value
             *  false means that the registration phase has failed.
             * @since 1.6
             */
            // @ts-ignore
            public postRegister(registrationDone: java.lang.Boolean): void
            /**
             * <p>Allows the MBean to perform any operations it needs before
             * being unregistered by the MBean server.</p>
             * <p>The default implementation of this method does nothing.</p>
             * <p>It is good practice for a subclass that overrides this method
             * to call the overridden method via {@code super.preDeregister(...)}.</p>
             * @throws Exception no checked exceptions are throw by this method
             *  but {#code Exception} is declared so that subclasses can override
             *  this method and throw their own exceptions.
             * @since 1.6
             */
            // @ts-ignore
            public preDeregister(): void
            /**
             * <p>Allows the MBean to perform any operations needed after having been
             * unregistered in the MBean server.</p>
             * <p>The default implementation of this method does nothing for
             * Standard MBeans.  For MXBeans, it removes any information that
             * was recorded by the {@link #preRegister preRegister} method.</p>
             * <p>It is good practice for a subclass that overrides this method
             * to call the overridden method via {@code super.postRegister(...)}.
             * This is necessary if this object is an MXBean that is referenced
             * by attributes or operations in other MXBeans.</p>
             * @since 1.6
             */
            // @ts-ignore
            public postDeregister(): void
        }
    }
}

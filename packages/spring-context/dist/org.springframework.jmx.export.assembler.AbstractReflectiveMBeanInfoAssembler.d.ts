declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace assembler {
                    /**
                     * Builds on the {@link AbstractMBeanInfoAssembler} superclass to
                     * add a basic algorithm for building metadata based on the
                     * reflective metadata of the MBean class.
                     * <p>The logic for creating MBean metadata from the reflective metadata
                     * is contained in this class, but this class makes no decisions as to
                     * which methods and properties are to be exposed. Instead it gives
                     * subclasses a chance to 'vote' on each property or method through
                     * the {@code includeXXX} methods.
                     * <p>Subclasses are also given the opportunity to populate attribute
                     * and operation metadata with additional descriptors once the metadata
                     * is assembled through the {@code populateXXXDescriptor} methods.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author David Boden
                     * @since 1.2
                     * @see #includeOperation
                     * @see #includeReadAttribute
                     * @see #includeWriteAttribute
                     * @see #populateAttributeDescriptor
                     * @see #populateOperationDescriptor
                     */
                    // @ts-ignore
                    abstract class AbstractReflectiveMBeanInfoAssembler extends org.springframework.jmx.export.assembler.AbstractMBeanInfoAssembler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Identifies a getter method in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_GET_METHOD: java.lang.String | string
                        /**
                         * Identifies a setter method in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_SET_METHOD: java.lang.String | string
                        /**
                         * Constant identifier for the role field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_ROLE: java.lang.String | string
                        /**
                         * Constant identifier for the getter role field value in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly ROLE_GETTER: java.lang.String | string
                        /**
                         * Constant identifier for the setter role field value in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly ROLE_SETTER: java.lang.String | string
                        /**
                         * Identifies an operation (method) in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly ROLE_OPERATION: java.lang.String | string
                        /**
                         * Constant identifier for the visibility field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_VISIBILITY: java.lang.String | string
                        /**
                         * Lowest visibility, used for operations that correspond to
                         * accessors or mutators for attributes.
                         * @see #FIELD_VISIBILITY
                         */
                        // @ts-ignore
                        static readonly ATTRIBUTE_OPERATION_VISIBILITY: number /*int*/
                        /**
                         * Constant identifier for the class field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_CLASS: java.lang.String | string
                        /**
                         * Constant identifier for the log field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_LOG: java.lang.String | string
                        /**
                         * Constant identifier for the logfile field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_LOG_FILE: java.lang.String | string
                        /**
                         * Constant identifier for the currency time limit field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_CURRENCY_TIME_LIMIT: java.lang.String | string
                        /**
                         * Constant identifier for the default field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_DEFAULT: java.lang.String | string
                        /**
                         * Constant identifier for the persistPolicy field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_PERSIST_POLICY: java.lang.String | string
                        /**
                         * Constant identifier for the persistPeriod field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_PERSIST_PERIOD: java.lang.String | string
                        /**
                         * Constant identifier for the persistLocation field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_PERSIST_LOCATION: java.lang.String | string
                        /**
                         * Constant identifier for the persistName field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_PERSIST_NAME: java.lang.String | string
                        /**
                         * Constant identifier for the displayName field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_DISPLAY_NAME: java.lang.String | string
                        /**
                         * Constant identifier for the units field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_UNITS: java.lang.String | string
                        /**
                         * Constant identifier for the metricType field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_METRIC_TYPE: java.lang.String | string
                        /**
                         * Constant identifier for the custom metricCategory field in a JMX {@link Descriptor}.
                         */
                        // @ts-ignore
                        static readonly FIELD_METRIC_CATEGORY: java.lang.String | string
                        /**
                         * Set the default for the JMX field "currencyTimeLimit".
                         * The default will usually indicate to never cache attribute values.
                         * <p>Default is none, not explicitly setting that field, as recommended by the
                         * JMX 1.2 specification. This should result in "never cache" behavior, always
                         * reading attribute values freshly (which corresponds to a "currencyTimeLimit"
                         * of {@code -1} in JMX 1.2).
                         * <p>However, some JMX implementations (that do not follow the JMX 1.2 spec
                         * in that respect) might require an explicit value to be set here to get
                         * "never cache" behavior: for example, JBoss 3.2.x.
                         * <p>Note that the "currencyTimeLimit" value can also be specified on a
                         * managed attribute or operation. The default value will apply if not
                         * overridden with a "currencyTimeLimit" value {@code >= 0} there:
                         * a metadata "currencyTimeLimit" value of {@code -1} indicates
                         * to use the default; a value of {@code 0} indicates to "always cache"
                         * and will be translated to {@code Integer.MAX_VALUE}; a positive
                         * value indicates the number of cache seconds.
                         * @see org.springframework.jmx.export.metadata.AbstractJmxAttribute#setCurrencyTimeLimit
                         * @see #applyCurrencyTimeLimit(javax.management.Descriptor, int)
                         */
                        // @ts-ignore
                        public setDefaultCurrencyTimeLimit(defaultCurrencyTimeLimit: java.lang.Integer | number): void
                        /**
                         * Return default value for the JMX field "currencyTimeLimit", if any.
                         */
                        // @ts-ignore
                        getDefaultCurrencyTimeLimit(): number
                        /**
                         * Set whether to use strict casing for attributes. Enabled by default.
                         * <p>When using strict casing, a JavaBean property with a getter such as
                         * {@code getFoo()} translates to an attribute called {@code Foo}.
                         * With strict casing disabled, {@code getFoo()} would translate to just
                         * {@code foo}.
                         */
                        // @ts-ignore
                        public setUseStrictCasing(useStrictCasing: boolean): void
                        /**
                         * Return whether strict casing for attributes is enabled.
                         */
                        // @ts-ignore
                        isUseStrictCasing(): boolean
                        /**
                         * Set whether to expose the JMX descriptor field "class" for managed operations.
                         * Default is "false", letting the JMX implementation determine the actual class
                         * through reflection.
                         * <p>Set this property to {@code true} for JMX implementations that
                         * require the "class" field to be specified, for example WebLogic's.
                         * In that case, Spring will expose the target class name there, in case of
                         * a plain bean instance or a CGLIB proxy. When encountering a JDK dynamic
                         * proxy, the <b>first</b> interface implemented by the proxy will be specified.
                         * <p><b>WARNING:</b> Review your proxy definitions when exposing a JDK dynamic
                         * proxy through JMX, in particular with this property turned to {@code true}:
                         * the specified interface list should start with your management interface in
                         * this case, with all other interfaces following. In general, consider exposing
                         * your target bean directly or a CGLIB proxy for it instead.
                         * @see #getClassForDescriptor(Object)
                         */
                        // @ts-ignore
                        public setExposeClassDescriptor(exposeClassDescriptor: boolean): void
                        /**
                         * Return whether to expose the JMX descriptor field "class" for managed operations.
                         */
                        // @ts-ignore
                        isExposeClassDescriptor(): boolean
                        /**
                         * Set the ParameterNameDiscoverer to use for resolving method parameter
                         * names if needed (e.g. for parameter names of MBean operation methods).
                         * <p>Default is a {@link DefaultParameterNameDiscoverer}.
                         */
                        // @ts-ignore
                        public setParameterNameDiscoverer(parameterNameDiscoverer: ParameterNameDiscoverer): void
                        /**
                         * Return the ParameterNameDiscoverer to use for resolving method parameter
                         * names if needed (may be {@code null} in order to skip parameter detection).
                         */
                        // @ts-ignore
                        getParameterNameDiscoverer(): ParameterNameDiscoverer
                        /**
                         * Iterate through all properties on the MBean class and gives subclasses
                         * the chance to vote on the inclusion of both the accessor and mutator.
                         * If a particular accessor or mutator is voted for inclusion, the appropriate
                         * metadata is assembled and passed to the subclass for descriptor population.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the attribute metadata
                         * @throws JMException in case of errors
                         * @see #populateAttributeDescriptor
                         */
                        // @ts-ignore
                        getAttributeInfo(managedBean: java.lang.Object | any, beanKey: java.lang.String | string): javax.management.modelmbean.ModelMBeanAttributeInfo[]
                        /**
                         * Iterate through all methods on the MBean class and gives subclasses the chance
                         * to vote on their inclusion. If a particular method corresponds to the accessor
                         * or mutator of an attribute that is included in the management interface, then
                         * the corresponding operation is exposed with the &quot;role&quot; descriptor
                         * field set to the appropriate value.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the operation metadata
                         * @see #populateOperationDescriptor
                         */
                        // @ts-ignore
                        getOperationInfo(managedBean: java.lang.Object | any, beanKey: java.lang.String | string): javax.management.modelmbean.ModelMBeanOperationInfo[]
                        /**
                         * Creates an instance of {@code ModelMBeanOperationInfo} for the
                         * given method. Populates the parameter info for the operation.
                         * @param method the {#code Method} to create a {@code ModelMBeanOperationInfo} for
                         * @param name the logical name for the operation (method name or property name);
                         *  not used by the default implementation but possibly by subclasses
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the {#code ModelMBeanOperationInfo}
                         */
                        // @ts-ignore
                        createModelMBeanOperationInfo(method: java.lang.reflect.Method, name: java.lang.String | string, beanKey: java.lang.String | string): javax.management.modelmbean.ModelMBeanOperationInfo
                        /**
                         * Return the class to be used for the JMX descriptor field "class".
                         * Only applied when the "exposeClassDescriptor" property is "true".
                         * <p>The default implementation returns the first implemented interface
                         * for a JDK proxy, and the target class else.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @return the class to expose in the descriptor field "class"
                         * @see #setExposeClassDescriptor
                         * @see #getClassToExpose(Class)
                         * @see org.springframework.aop.framework.AopProxyUtils#proxiedUserInterfaces(Object)
                         */
                        // @ts-ignore
                        getClassForDescriptor(managedBean: java.lang.Object | any): java.lang.Class<any>
                        /**
                         * Allows subclasses to vote on the inclusion of a particular attribute accessor.
                         * @param method the accessor {#code Method}
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return {#code true} if the accessor should be included in the management interface,
                         *  otherwise {@code false}
                         */
                        // @ts-ignore
                        abstract includeReadAttribute(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        /**
                         * Allows subclasses to vote on the inclusion of a particular attribute mutator.
                         * @param method the mutator {#code Method}.
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return {#code true} if the mutator should be included in the management interface,
                         *  otherwise {@code false}
                         */
                        // @ts-ignore
                        abstract includeWriteAttribute(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        /**
                         * Allows subclasses to vote on the inclusion of a particular operation.
                         * @param method the operation method
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return whether the operation should be included in the management interface
                         */
                        // @ts-ignore
                        abstract includeOperation(method: java.lang.reflect.Method, beanKey: java.lang.String | string): boolean
                        /**
                         * Get the description for a particular attribute.
                         * <p>The default implementation returns a description for the operation
                         * that is the name of corresponding {@code Method}.
                         * @param propertyDescriptor the PropertyDescriptor for the attribute
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the description for the attribute
                         */
                        // @ts-ignore
                        getAttributeDescription(propertyDescriptor: java.beans.PropertyDescriptor, beanKey: java.lang.String | string): string
                        /**
                         * Get the description for a particular operation.
                         * <p>The default implementation returns a description for the operation
                         * that is the name of corresponding {@code Method}.
                         * @param method the operation method
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the description for the operation
                         */
                        // @ts-ignore
                        getOperationDescription(method: java.lang.reflect.Method, beanKey: java.lang.String | string): string
                        /**
                         * Create parameter info for the given method.
                         * <p>The default implementation returns an empty array of {@code MBeanParameterInfo}.
                         * @param method the {#code Method} to get the parameter information for
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @return the {#code MBeanParameterInfo} array
                         */
                        // @ts-ignore
                        getOperationParameters(method: java.lang.reflect.Method, beanKey: java.lang.String | string): javax.management.MBeanParameterInfo[]
                        /**
                         * Allows subclasses to add extra fields to the {@code Descriptor} for an MBean.
                         * <p>The default implementation sets the {@code currencyTimeLimit} field to
                         * the specified "defaultCurrencyTimeLimit", if any (by default none).
                         * @param descriptor the {#code Descriptor} for the MBean resource.
                         * @param managedBean the bean instance (might be an AOP proxy)
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @see #setDefaultCurrencyTimeLimit(Integer)
                         * @see #applyDefaultCurrencyTimeLimit(javax.management.Descriptor)
                         */
                        // @ts-ignore
                        populateMBeanDescriptor(descriptor: javax.management.Descriptor, managedBean: java.lang.Object | any, beanKey: java.lang.String | string): void
                        /**
                         * Allows subclasses to add extra fields to the {@code Descriptor} for a
                         * particular attribute.
                         * <p>The default implementation sets the {@code currencyTimeLimit} field to
                         * the specified "defaultCurrencyTimeLimit", if any (by default none).
                         * @param desc the attribute descriptor
                         * @param getter the accessor method for the attribute
                         * @param setter the mutator method for the attribute
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @see #setDefaultCurrencyTimeLimit(Integer)
                         * @see #applyDefaultCurrencyTimeLimit(javax.management.Descriptor)
                         */
                        // @ts-ignore
                        populateAttributeDescriptor(desc: javax.management.Descriptor, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method, beanKey: java.lang.String | string): void
                        /**
                         * Allows subclasses to add extra fields to the {@code Descriptor} for a
                         * particular operation.
                         * <p>The default implementation sets the {@code currencyTimeLimit} field to
                         * the specified "defaultCurrencyTimeLimit", if any (by default none).
                         * @param desc the operation descriptor
                         * @param method the method corresponding to the operation
                         * @param beanKey the key associated with the MBean in the beans map
                         *  of the {#code MBeanExporter}
                         * @see #setDefaultCurrencyTimeLimit(Integer)
                         * @see #applyDefaultCurrencyTimeLimit(javax.management.Descriptor)
                         */
                        // @ts-ignore
                        populateOperationDescriptor(desc: javax.management.Descriptor, method: java.lang.reflect.Method, beanKey: java.lang.String | string): void
                        /**
                         * Set the {@code currencyTimeLimit} field to the specified
                         * "defaultCurrencyTimeLimit", if any (by default none).
                         * @param desc the JMX attribute or operation descriptor
                         * @see #setDefaultCurrencyTimeLimit(Integer)
                         */
                        // @ts-ignore
                        applyDefaultCurrencyTimeLimit(desc: javax.management.Descriptor): void
                        /**
                         * Apply the given JMX "currencyTimeLimit" value to the given descriptor.
                         * <p>The default implementation sets a value {@code >0} as-is (as number of cache seconds),
                         * turns a value of {@code 0} into {@code Integer.MAX_VALUE} ("always cache")
                         * and sets the "defaultCurrencyTimeLimit" (if any, indicating "never cache") in case of
                         * a value {@code <0}. This follows the recommendation in the JMX 1.2 specification.
                         * @param desc the JMX attribute or operation descriptor
                         * @param currencyTimeLimit the "currencyTimeLimit" value to apply
                         * @see #setDefaultCurrencyTimeLimit(Integer)
                         * @see #applyDefaultCurrencyTimeLimit(javax.management.Descriptor)
                         */
                        // @ts-ignore
                        applyCurrencyTimeLimit(desc: javax.management.Descriptor, currencyTimeLimit: number /*int*/): void
                    }
                }
            }
        }
    }
}

declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * This class is the implementation of a ModelMBean. An appropriate
             * implementation of a ModelMBean must be shipped with every JMX Agent
             * and the class must be named RequiredModelMBean.
             * <P>
             * Java resources wishing to be manageable instantiate the
             * RequiredModelMBean using the MBeanServer's createMBean method.
             * The resource then sets the MBeanInfo and Descriptors for the
             * RequiredModelMBean instance. The attributes and operations exposed
             * via the ModelMBeanInfo for the ModelMBean are accessible
             * from MBeans, connectors/adaptors like other MBeans. Through the
             * Descriptors, values and methods in the managed application can be
             * defined and mapped to attributes and operations of the ModelMBean.
             * This mapping can be defined in an XML formatted file or dynamically and
             * programmatically at runtime.
             * <P>
             * Every RequiredModelMBean which is instantiated in the MBeanServer
             * becomes manageable:<br>
             * its attributes and operations become remotely accessible through the
             * connectors/adaptors connected to that MBeanServer.
             * <P>
             * A Java object cannot be registered in the MBeanServer unless it is a
             * JMX compliant MBean. By instantiating a RequiredModelMBean, resources
             * are guaranteed that the MBean is valid.
             * MBeanException and RuntimeOperationsException must be thrown on every
             * public method.  This allows for wrapping exceptions from distributed
             * communications (RMI, EJB, etc.)
             * @since 1.5
             */
            // @ts-ignore
            class RequiredModelMBean extends java.lang.Object implements javax.management.modelmbean.ModelMBean, javax.management.MBeanRegistration, javax.management.NotificationEmitter {
                /**
                 * Constructs an <CODE>RequiredModelMBean</CODE> with an empty
                 * ModelMBeanInfo.
                 * <P>
                 * The RequiredModelMBean's MBeanInfo and Descriptors
                 * can be customized using the {@link #setModelMBeanInfo} method.
                 * After the RequiredModelMBean's MBeanInfo and Descriptors are
                 * customized, the RequiredModelMBean can be registered with
                 * the MBeanServer.
                 * @exception MBeanException Wraps a distributed communication Exception.
                 * @exception RuntimeOperationsException Wraps a {#link
                 *  RuntimeException} during the construction of the object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a RequiredModelMBean object using ModelMBeanInfo passed in.
                 * As long as the RequiredModelMBean is not registered
                 * with the MBeanServer yet, the RequiredModelMBean's MBeanInfo and
                 * Descriptors can be customized using the {@link #setModelMBeanInfo}
                 * method.
                 * After the RequiredModelMBean's MBeanInfo and Descriptors are
                 * customized, the RequiredModelMBean can be registered with the
                 * MBeanServer.
                 * @param mbi The ModelMBeanInfo object to be used by the
                 *             RequiredModelMBean. The given ModelMBeanInfo is cloned
                 *             and modified as specified by {#link #setModelMBeanInfo}
                 * @exception MBeanException Wraps a distributed communication Exception.
                 * @exception RuntimeOperationsException Wraps an
                 *     {link java.lang.IllegalArgumentException}:
                 *           The MBeanInfo passed in parameter is null.
                 */
                // @ts-ignore
                constructor(mbi: javax.management.modelmbean.ModelMBeanInfo)
                /**
                 * Initializes a ModelMBean object using ModelMBeanInfo passed in.
                 * This method makes it possible to set a customized ModelMBeanInfo on
                 * the ModelMBean as long as it is not registered with the MBeanServer.
                 * <br>
                 * Once the ModelMBean's ModelMBeanInfo (with Descriptors) are
                 * customized and set on the ModelMBean, the  ModelMBean be
                 * registered with the MBeanServer.
                 * <P>
                 * If the ModelMBean is currently registered, this method throws
                 * a {@link javax.management.RuntimeOperationsException} wrapping an
                 * {@link IllegalStateException}
                 * <P>
                 * If the given <var>inModelMBeanInfo</var> does not contain any
                 * {@link ModelMBeanNotificationInfo} for the <code>GENERIC</code>
                 * or <code>ATTRIBUTE_CHANGE</code> notifications, then the
                 * RequiredModelMBean will supply its own default
                 * {@link ModelMBeanNotificationInfo ModelMBeanNotificationInfo}s for
                 * those missing notifications.
                 * @param mbi The ModelMBeanInfo object to be used
                 *         by the ModelMBean.
                 * @exception MBeanException Wraps a distributed communication
                 *         Exception.
                 * @exception RuntimeOperationsException
                 *  <ul><li>Wraps an {#link IllegalArgumentException} if
                 *          the MBeanInfo passed in parameter is null.</li>
                 *      <li>Wraps an {@link IllegalStateException} if the ModelMBean
                 *          is currently registered in the MBeanServer.</li>
                 *  </ul>
                 */
                // @ts-ignore
                public setModelMBeanInfo(mbi: javax.management.modelmbean.ModelMBeanInfo): void
                /**
                 * Sets the instance handle of the object against which to
                 * execute all methods in this ModelMBean management interface
                 * (MBeanInfo and Descriptors).
                 * @param mr Object that is the managed resource
                 * @param mr_type The type of reference for the managed resource.
                 *      <br>Can be: "ObjectReference", "Handle", "IOR", "EJBHandle",
                 *          or "RMIReference".
                 *      <br>In this implementation only "ObjectReference" is supported.
                 * @exception MBeanException The initializer of the object has
                 *             thrown an exception.
                 * @exception InstanceNotFoundException The managed resource
                 *             object could not be found
                 * @exception InvalidTargetObjectTypeException The managed
                 *             resource type should be "ObjectReference".
                 * @exception RuntimeOperationsException Wraps a {#link
                 *             RuntimeException} when setting the resource.
                 */
                // @ts-ignore
                public setManagedResource(mr: java.lang.Object | any, mr_type: java.lang.String | string): void
                /**
                 * <p>Instantiates this MBean instance with the data found for
                 * the MBean in the persistent store.  The data loaded could include
                 * attribute and operation values.</p>
                 * <p>This method should be called during construction or
                 * initialization of this instance, and before the MBean is
                 * registered with the MBeanServer.</p>
                 * <p>If the implementation of this class does not support
                 * persistence, an {@link MBeanException} wrapping a {@link
                 * ServiceNotFoundException} is thrown.</p>
                 * @exception MBeanException Wraps another exception, or
                 *  persistence is not supported
                 * @exception RuntimeOperationsException Wraps exceptions from the
                 *  persistence mechanism
                 * @exception InstanceNotFoundException Could not find or load
                 *  this MBean from persistent storage
                 */
                // @ts-ignore
                public load(): void
                /**
                 * <p>Captures the current state of this MBean instance and writes
                 * it out to the persistent store.  The state stored could include
                 * attribute and operation values.</p>
                 * <p>If the implementation of this class does not support
                 * persistence, an {@link MBeanException} wrapping a {@link
                 * ServiceNotFoundException} is thrown.</p>
                 * <p>Persistence policy from the MBean and attribute descriptor
                 * is used to guide execution of this method. The MBean should be
                 * stored if 'persistPolicy' field is:</p>
                 * <PRE>{@literal  != "never"
                 * = "always"
                 * = "onTimer" and now > 'lastPersistTime' + 'persistPeriod'
                 * = "NoMoreOftenThan" and now > 'lastPersistTime' + 'persistPeriod'
                 * = "onUnregister"
                 * }</PRE>
                 * <p>Do not store the MBean if 'persistPolicy' field is:</p>
                 * <PRE>{@literal
                 * = "never"
                 * = "onUpdate"
                 * = "onTimer" && now < 'lastPersistTime' + 'persistPeriod'
                 * }</PRE>
                 * @exception MBeanException Wraps another exception, or
                 *  persistence is not supported
                 * @exception RuntimeOperationsException Wraps exceptions from the
                 *  persistence mechanism
                 * @exception InstanceNotFoundException Could not find/access the
                 *  persistent store
                 */
                // @ts-ignore
                public store(): void
                /**
                 * Returns the attributes, operations, constructors and notifications
                 * that this RequiredModelMBean exposes for management.
                 * @return An instance of ModelMBeanInfo allowing retrieval all
                 *           attributes, operations, and Notifications of this MBean.
                 */
                // @ts-ignore
                public getMBeanInfo(): javax.management.MBeanInfo
                /**
                 * Invokes a method on or through a RequiredModelMBean and returns
                 * the result of the method execution.
                 * <P>
                 * If the given method to be invoked, together with the provided
                 * signature, matches one of RequiredModelMbean
                 * accessible methods, this one will be call. Otherwise the call to
                 * the given method will be tried on the managed resource.
                 * <P>
                 * The last value returned by an operation may be cached in
                 * the operation's descriptor which
                 * is in the ModelMBeanOperationInfo's descriptor.
                 * The valid value will be in the 'value' field if there is one.
                 * If the 'currencyTimeLimit' field in the descriptor is:
                 * <UL>
                 * <LI><b>&lt;0</b> Then the value is not cached and is never valid.
                 * The operation method is invoked.
                 * The 'value' and 'lastUpdatedTimeStamp' fields are cleared.</LI>
                 * <LI><b>=0</b> Then the value is always cached and always valid.
                 * The 'value' field is returned. If there is no 'value' field
                 * then the operation method is invoked for the attribute.
                 * The 'lastUpdatedTimeStamp' field and `value' fields are set to
                 * the operation's return value and the current time stamp.</LI>
                 * <LI><b>&gt;0</b> Represents the number of seconds that the 'value'
                 * field is valid.
                 * The 'value' field is no longer valid when
                 * 'lastUpdatedTimeStamp' + 'currencyTimeLimit' &gt; Now.
                 * <UL>
                 * <LI>When 'value' is valid, 'value' is returned.</LI>
                 * <LI>When 'value' is no longer valid then the operation
                 * method is invoked. The 'lastUpdatedTimeStamp' field
                 * and `value' fields are updated.</lI>
                 * </UL>
                 * </LI>
                 * </UL>
                 * <p><b>Note:</b> because of inconsistencies in previous versions of
                 * this specification, it is recommended not to use negative or zero
                 * values for <code>currencyTimeLimit</code>.  To indicate that a
                 * cached value is never valid, omit the
                 * <code>currencyTimeLimit</code> field.  To indicate that it is
                 * always valid, use a very large number for this field.</p>
                 * @param opName The name of the method to be invoked. The
                 *      name can be the fully qualified method name including the
                 *      classname, or just the method name if the classname is
                 *      defined in the 'class' field of the operation descriptor.
                 * @param opArgs An array containing the parameters to be set
                 *      when the operation is invoked
                 * @param sig An array containing the signature of the
                 *      operation. The class objects will be loaded using the same
                 *      class loader as the one used for loading the MBean on which
                 *      the operation was invoked.
                 * @return The object returned by the method, which represents the
                 *      result of invoking the method on the specified managed resource.
                 * @exception MBeanException  Wraps one of the following Exceptions:
                 *  <UL>
                 *  <LI> An Exception thrown by the managed object's invoked method.</LI>
                 *  <LI> {#link ServiceNotFoundException}: No ModelMBeanOperationInfo or
                 *       no descriptor defined for the specified operation or the managed
                 *       resource is null.</LI>
                 *  <LI> {@link InvalidTargetObjectTypeException}: The 'targetType'
                 *       field value is not 'objectReference'.</LI>
                 *  </UL>
                 * @exception ReflectionException  Wraps an {#link java.lang.Exception}
                 *       thrown while trying to invoke the method.
                 * @exception RuntimeOperationsException Wraps an
                 *       {#link IllegalArgumentException} Method name is null.
                 */
                // @ts-ignore
                public invoke(opName: java.lang.String | string, opArgs: java.lang.Object[] | any[], sig: java.lang.String[] | string[]): any
                /**
                 * Returns the value of a specific attribute defined for this
                 * ModelMBean.
                 * The last value returned by an attribute may be cached in the
                 * attribute's descriptor.
                 * The valid value will be in the 'value' field if there is one.
                 * If the 'currencyTimeLimit' field in the descriptor is:
                 * <UL>
                 * <LI>  <b>&lt;0</b> Then the value is not cached and is never valid.
                 * The getter method is invoked for the attribute.
                 * The 'value' and 'lastUpdatedTimeStamp' fields are cleared.</LI>
                 * <LI>  <b>=0</b> Then the value is always cached and always valid.
                 * The 'value' field is returned. If there is no'value' field
                 * then the getter method is invoked for the attribute.
                 * The 'lastUpdatedTimeStamp' field and `value' fields are set
                 * to the attribute's value and the current time stamp.</LI>
                 * <LI>  <b>&gt;0</b> Represents the number of seconds that the 'value'
                 * field is valid.
                 * The 'value' field is no longer valid when
                 * 'lastUpdatedTimeStamp' + 'currencyTimeLimit' &gt; Now.
                 * <UL>
                 * <LI>When 'value' is valid, 'value' is returned.</LI>
                 * <LI>When 'value' is no longer valid then the getter
                 * method is invoked for the attribute.
                 * The 'lastUpdatedTimeStamp' field and `value' fields
                 * are updated.</LI>
                 * </UL></LI>
                 * </UL>
                 * <p><b>Note:</b> because of inconsistencies in previous versions of
                 * this specification, it is recommended not to use negative or zero
                 * values for <code>currencyTimeLimit</code>.  To indicate that a
                 * cached value is never valid, omit the
                 * <code>currencyTimeLimit</code> field.  To indicate that it is
                 * always valid, use a very large number for this field.</p>
                 * <p>If the 'getMethod' field contains the name of a valid
                 * operation descriptor, then the method described by the
                 * operation descriptor is executed.  The response from the
                 * method is returned as the value of the attribute.  If the
                 * operation fails or the returned value is not compatible with
                 * the declared type of the attribute, an exception will be thrown.</p>
                 * <p>If no 'getMethod' field is defined then the default value of the
                 * attribute is returned. If the returned value is not compatible with
                 * the declared type of the attribute, an exception will be thrown.</p>
                 * <p>The declared type of the attribute is the String returned by
                 * {@link ModelMBeanAttributeInfo#getType()}.  A value is compatible
                 * with this type if one of the following is true:
                 * <ul>
                 * <li>the value is null;</li>
                 * <li>the declared name is a primitive type name (such as "int")
                 * and the value is an instance of the corresponding wrapper
                 * type (such as java.lang.Integer);</li>
                 * <li>the name of the value's class is identical to the declared name;</li>
                 * <li>the declared name can be loaded by the value's class loader and
                 * produces a class to which the value can be assigned.</li>
                 * </ul>
                 * <p>In this implementation, in every case where the getMethod needs to
                 * be called, because the method is invoked through the standard "invoke"
                 * method and thus needs operationInfo, an operation must be specified
                 * for that getMethod so that the invocation works correctly.</p>
                 * @param attrName A String specifying the name of the
                 *  attribute to be retrieved. It must match the name of a
                 *  ModelMBeanAttributeInfo.
                 * @return The value of the retrieved attribute from the
                 *  descriptor 'value' field or from the invocation of the
                 *  operation in the 'getMethod' field of the descriptor.
                 * @exception AttributeNotFoundException The specified attribute is
                 *     not accessible in the MBean.
                 *     The following cases may result in an AttributeNotFoundException:
                 *     <UL>
                 *       <LI> No ModelMBeanInfo was found for the Model MBean.</LI>
                 *       <LI> No ModelMBeanAttributeInfo was found for the specified
                 *            attribute name.</LI>
                 *       <LI> The ModelMBeanAttributeInfo isReadable method returns
                 *            'false'.</LI>
                 *     </UL>
                 * @exception MBeanException  Wraps one of the following Exceptions:
                 *     <UL>
                 *       <LI> {#link InvalidAttributeValueException}: A wrong value type
                 *            was received from the attribute's getter method or
                 *            no 'getMethod' field defined in the descriptor for
                 *            the attribute and no default value exists.</LI>
                 *       <LI> {@link ServiceNotFoundException}: No
                 *            ModelMBeanOperationInfo defined for the attribute's
                 *            getter method or no descriptor associated with the
                 *            ModelMBeanOperationInfo or the managed resource is
                 *            null.</LI>
                 *       <LI> {@link InvalidTargetObjectTypeException} The 'targetType'
                 *            field value is not 'objectReference'.</LI>
                 *       <LI> An Exception thrown by the managed object's getter.</LI>
                 *     </UL>
                 * @exception ReflectionException  Wraps an {#link java.lang.Exception}
                 *     thrown while trying to invoke the getter.
                 * @exception RuntimeOperationsException Wraps an
                 *     {#link IllegalArgumentException}: The attribute name in
                 *     parameter is null.
                 * @see #setAttribute(javax.management.Attribute)
                 */
                // @ts-ignore
                public getAttribute(attrName: java.lang.String | string): any
                /**
                 * Returns the values of several attributes in the ModelMBean.
                 * Executes a getAttribute for each attribute name in the
                 * attrNames array passed in.
                 * @param attrNames A String array of names of the attributes
                 *  to be retrieved.
                 * @return The array of the retrieved attributes.
                 * @exception RuntimeOperationsException Wraps an
                 *  {#link IllegalArgumentException}: The object name in parameter is
                 *  null or attributes in parameter is null.
                 * @see #setAttributes(javax.management.AttributeList)
                 */
                // @ts-ignore
                public getAttributes(attrNames: java.lang.String[] | string[]): javax.management.AttributeList
                /**
                 * Sets the value of a specific attribute of a named ModelMBean.
                 * If the 'setMethod' field of the attribute's descriptor
                 * contains the name of a valid operation descriptor, then the
                 * method described by the operation descriptor is executed.
                 * In this implementation, the operation descriptor must be specified
                 * correctly and assigned to the modelMBeanInfo so that the 'setMethod'
                 * works correctly.
                 * The response from the method is set as the value of the attribute
                 * in the descriptor.
                 * <p>If currencyTimeLimit is &gt; 0, then the new value for the
                 * attribute is cached in the attribute descriptor's
                 * 'value' field and the 'lastUpdatedTimeStamp' field is set to
                 * the current time stamp.
                 * <p>If the persist field of the attribute's descriptor is not null
                 * then Persistence policy from the attribute descriptor is used to
                 * guide storing the attribute in a persistent store.
                 * <br>Store the MBean if 'persistPolicy' field is:
                 * <UL>
                 * <Li> != "never"</Li>
                 * <Li> = "always"</Li>
                 * <Li> = "onUpdate"</Li>
                 * <Li> {@literal = "onTimer" and now > 'lastPersistTime' + 'persistPeriod'}</Li>
                 * <Li> {@literal = "NoMoreOftenThan" and now > 'lastPersistTime' +
                 * 'persistPeriod'}</Li>
                 * </UL>
                 * Do not store the MBean if 'persistPolicy' field is:
                 * <UL>
                 * <Li> = "never"</Li>
                 * <Li> = {@literal = "onTimer" && now < 'lastPersistTime' + 'persistPeriod'}</Li>
                 * <Li> = "onUnregister"</Li>
                 * <Li> = {@literal = "NoMoreOftenThan" and now < 'lastPersistTime' +
                 * 'persistPeriod'}</Li>
                 * </UL>
                 * <p>The ModelMBeanInfo of the Model MBean is stored in a file.
                 * @param attribute The Attribute instance containing the name of
                 *         the attribute to be set and the value it is to be set to.
                 * @exception AttributeNotFoundException The specified attribute is
                 *    not accessible in the MBean.
                 *    <br>The following cases may result in an AttributeNotFoundException:
                 *    <UL>
                 *      <LI> No ModelMBeanAttributeInfo is found for the specified
                 *           attribute.</LI>
                 *      <LI> The ModelMBeanAttributeInfo's isWritable method returns
                 *           'false'.</LI>
                 *    </UL>
                 * @exception InvalidAttributeValueException No descriptor is defined
                 *    for the specified attribute.
                 * @exception MBeanException Wraps one of the following Exceptions:
                 *    <UL>
                 *      <LI> An Exception thrown by the managed object's setter.</LI>
                 *      <LI> A {#link ServiceNotFoundException} if a setMethod field is
                 *           defined in the descriptor for the attribute and the managed
                 *           resource is null; or if no setMethod field is defined and
                 *           caching is not enabled for the attribute.
                 *           Note that if there is no getMethod field either, then caching
                 *           is automatically enabled.</LI>
                 *      <LI> {@link InvalidTargetObjectTypeException} The 'targetType'
                 *           field value is not 'objectReference'.</LI>
                 *      <LI> An Exception thrown by the managed object's getter.</LI>
                 *    </UL>
                 * @exception ReflectionException  Wraps an {#link java.lang.Exception}
                 *    thrown while trying to invoke the setter.
                 * @exception RuntimeOperationsException Wraps an
                 *    {#link IllegalArgumentException}: The attribute in parameter is
                 *    null.
                 * @see #getAttribute(java.lang.String)
                 */
                // @ts-ignore
                public setAttribute(attribute: javax.management.Attribute): void
                /**
                 * Sets the values of an array of attributes of this ModelMBean.
                 * Executes the setAttribute() method for each attribute in the list.
                 * @param attributes A list of attributes: The identification of the
                 *  attributes to be set and  the values they are to be set to.
                 * @return The array of attributes that were set, with their new
                 *     values in Attribute instances.
                 * @exception RuntimeOperationsException Wraps an
                 *    {#link IllegalArgumentException}: The object name in parameter
                 *    is null or attributes in parameter is null.
                 * @see #getAttributes
                 */
                // @ts-ignore
                public setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList
                /**
                 * Registers an object which implements the NotificationListener
                 * interface as a listener.  This
                 * object's 'handleNotification()' method will be invoked when any
                 * notification is issued through or by the ModelMBean.  This does
                 * not include attributeChangeNotifications.  They must be registered
                 * for independently.
                 * @param listener The listener object which will handles
                 *         notifications emitted by the registered MBean.
                 * @param filter The filter object. If null, no filtering will be
                 *         performed before handling notifications.
                 * @param handback The context to be sent to the listener with
                 *         the notification when a notification is emitted.
                 * @exception IllegalArgumentException The listener cannot be null.
                 * @see #removeNotificationListener
                 */
                // @ts-ignore
                public addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: java.lang.Object | any): void
                /**
                 * Removes a listener for Notifications from the RequiredModelMBean.
                 * @param listener The listener name which was handling notifications
                 *     emitted by the registered MBean.
                 *     This method will remove all information related to this listener.
                 * @exception ListenerNotFoundException The listener is not registered
                 *     in the MBean or is null.
                 * @see #addNotificationListener
                 */
                // @ts-ignore
                public removeNotificationListener(listener: javax.management.NotificationListener): void
                // @ts-ignore
                public removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: java.lang.Object | any): void
                // @ts-ignore
                public sendNotification(ntfyObj: javax.management.Notification): void
                // @ts-ignore
                public sendNotification(ntfyText: java.lang.String | string): void
                /**
                 * Returns the array of Notifications always generated by the
                 * RequiredModelMBean.
                 * <P>
                 * RequiredModelMBean may always send also two additional notifications:
                 * <UL>
                 * <LI> One with descriptor <code>"name=GENERIC,descriptorType=notification,log=T,severity=6,displayName=jmx.modelmbean.generic"</code></LI>
                 * <LI> Second is a standard attribute change notification
                 * with descriptor <code>"name=ATTRIBUTE_CHANGE,descriptorType=notification,log=T,severity=6,displayName=jmx.attribute.change"</code></LI>
                 * </UL>
                 * Thus these two notifications are always added to those specified
                 * by the application.
                 * @return MBeanNotificationInfo[]
                 */
                // @ts-ignore
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                // @ts-ignore
                public addAttributeChangeNotificationListener(inlistener: javax.management.NotificationListener, inAttributeName: java.lang.String | string, inhandback: java.lang.Object | any): void
                // @ts-ignore
                public removeAttributeChangeNotificationListener(inlistener: javax.management.NotificationListener, inAttributeName: java.lang.String | string): void
                // @ts-ignore
                public sendAttributeChangeNotification(ntfyObj: javax.management.AttributeChangeNotification): void
                // @ts-ignore
                public sendAttributeChangeNotification(inOldVal: javax.management.Attribute, inNewVal: javax.management.Attribute): void
                /**
                 * Return the Class Loader Repository used to perform class loading.
                 * Subclasses may wish to redefine this method in order to return
                 * the appropriate {@link javax.management.loading.ClassLoaderRepository}
                 * that should be used in this object.
                 * @return the Class Loader Repository.
                 */
                // @ts-ignore
                getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
                /**
                 * Allows the MBean to perform any operations it needs before
                 * being registered in the MBean server.  If the name of the MBean
                 * is not specified, the MBean can provide a name for its
                 * registration.  If any exception is raised, the MBean will not be
                 * registered in the MBean server.
                 * <P>
                 * In order to ensure proper run-time semantics of RequireModelMBean,
                 * Any subclass of RequiredModelMBean overloading or overriding this
                 * method should call <code>super.preRegister(server, name)</code>
                 * in its own <code>preRegister</code> implementation.
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
                 * @exception java.lang.Exception This exception will be caught by
                 *  the MBean server and re-thrown as an
                 *  {#link javax.management.MBeanRegistrationException
                 *  MBeanRegistrationException}.
                 */
                // @ts-ignore
                public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
                /**
                 * Allows the MBean to perform any operations needed after having been
                 * registered in the MBean server or after the registration has failed.
                 * <P>
                 * In order to ensure proper run-time semantics of RequireModelMBean,
                 * Any subclass of RequiredModelMBean overloading or overriding this
                 * method should call <code>super.postRegister(registrationDone)</code>
                 * in its own <code>postRegister</code> implementation.
                 * @param registrationDone Indicates whether or not the MBean has
                 *  been successfully registered in the MBean server. The value
                 *  false means that the registration phase has failed.
                 */
                // @ts-ignore
                public postRegister(registrationDone: java.lang.Boolean): void
                /**
                 * Allows the MBean to perform any operations it needs before
                 * being unregistered by the MBean server.
                 * <P>
                 * In order to ensure proper run-time semantics of RequireModelMBean,
                 * Any subclass of RequiredModelMBean overloading or overriding this
                 * method should call <code>super.preDeregister()</code> in its own
                 * <code>preDeregister</code> implementation.
                 * @exception java.lang.Exception This exception will be caught by
                 *  the MBean server and re-thrown as an
                 *  {#link javax.management.MBeanRegistrationException
                 *  MBeanRegistrationException}.
                 */
                // @ts-ignore
                public preDeregister(): void
                /**
                 * Allows the MBean to perform any operations needed after having been
                 * unregistered in the MBean server.
                 * <P>
                 * In order to ensure proper run-time semantics of RequireModelMBean,
                 * Any subclass of RequiredModelMBean overloading or overriding this
                 * method should call <code>super.postDeregister()</code> in its own
                 * <code>postDeregister</code> implementation.
                 */
                // @ts-ignore
                public postDeregister(): void
            }
        }
    }
}

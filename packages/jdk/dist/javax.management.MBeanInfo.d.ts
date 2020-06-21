declare namespace javax {
    namespace management {
        /**
         * <p>Describes the management interface exposed by an MBean; that is,
         * the set of attributes and operations which are available for
         * management operations.  Instances of this class are immutable.
         * Subclasses may be mutable but this is not recommended.</p>
         * <p id="info-changed">Usually the {@code MBeanInfo} for any given MBean does
         * not change over the lifetime of that MBean.  Dynamic MBeans can change their
         * {@code MBeanInfo} and in that case it is recommended that they emit a {@link
         * Notification} with a {@linkplain Notification#getType() type} of {@code
         * "jmx.mbean.info.changed"} and a {@linkplain Notification#getUserData()
         * userData} that is the new {@code MBeanInfo}.  This is not required, but
         * provides a conventional way for clients of the MBean to discover the change.
         * See also the <a href="Descriptor.html#immutableInfo">immutableInfo</a> and
         * <a href="Descriptor.html#infoTimeout">infoTimeout</a> fields in the {@code
         * MBeanInfo} {@link Descriptor}.</p>
         * <p>The contents of the <code>MBeanInfo</code> for a Dynamic MBean
         * are determined by its {@link DynamicMBean#getMBeanInfo
         * getMBeanInfo()} method.  This includes Open MBeans and Model
         * MBeans, which are kinds of Dynamic MBeans.</p>
         * <p>The contents of the <code>MBeanInfo</code> for a Standard MBean
         * are determined by the MBean server as follows:</p>
         * <ul>
         * <li>{@link #getClassName()} returns the Java class name of the MBean
         * object;
         * <li>{@link #getConstructors()} returns the list of all public
         * constructors in that object;
         * <li>{@link #getAttributes()} returns the list of all attributes
         * whose existence is deduced from the presence in the MBean interface
         * of a <code>get<i>Name</i></code>, <code>is<i>Name</i></code>, or
         * <code>set<i>Name</i></code> method that conforms to the conventions
         * for Standard MBeans;
         * <li>{@link #getOperations()} returns the list of all methods in
         * the MBean interface that do not represent attributes;
         * <li>{@link #getNotifications()} returns an empty array if the MBean
         * does not implement the {@link NotificationBroadcaster} interface,
         * otherwise the result of calling {@link
         * NotificationBroadcaster#getNotificationInfo()} on it;
         * <li>{@link #getDescriptor()} returns a descriptor containing the contents
         * of any descriptor annotations in the MBean interface (see
         * {@link DescriptorKey &#64;DescriptorKey}).
         * </ul>
         * <p>The description returned by {@link #getDescription()} and the
         * descriptions of the contained attributes and operations are not specified.</p>
         * <p>The remaining details of the <code>MBeanInfo</code> for a
         * Standard MBean are not specified.  This includes the description of
         * any contained constructors, and notifications; the names
         * of parameters to constructors and operations; and the descriptions of
         * constructor parameters.</p>
         * @since 1.5
         */
        // @ts-ignore
        class MBeanInfo extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable, javax.management.DescriptorRead {
            /**
             * Constructs an <CODE>MBeanInfo</CODE>.
             * @param className The name of the Java class of the MBean described
             *  by this <CODE>MBeanInfo</CODE>.  This value may be any
             *  syntactically legal Java class name.  It does not have to be a
             *  Java class known to the MBean server or to the MBean's
             *  ClassLoader.  If it is a Java class known to the MBean's
             *  ClassLoader, it is recommended but not required that the
             *  class's public methods include those that would appear in a
             *  Standard MBean implementing the attributes and operations in
             *  this MBeanInfo.
             * @param description A human readable description of the MBean (optional).
             * @param attributes The list of exposed attributes of the MBean.
             *  This may be null with the same effect as a zero-length array.
             * @param constructors The list of public constructors of the
             *  MBean.  This may be null with the same effect as a zero-length
             *  array.
             * @param operations The list of operations of the MBean.  This
             *  may be null with the same effect as a zero-length array.
             * @param notifications The list of notifications emitted.  This
             *  may be null with the same effect as a zero-length array.
             */
            // @ts-ignore
            constructor(className: java.lang.String | string, description: java.lang.String | string, attributes: javax.management.MBeanAttributeInfo[], constructors: javax.management.MBeanConstructorInfo[], operations: javax.management.MBeanOperationInfo[], notifications: javax.management.MBeanNotificationInfo[])
            /**
             * Constructs an <CODE>MBeanInfo</CODE>.
             * @param className The name of the Java class of the MBean described
             *  by this <CODE>MBeanInfo</CODE>.  This value may be any
             *  syntactically legal Java class name.  It does not have to be a
             *  Java class known to the MBean server or to the MBean's
             *  ClassLoader.  If it is a Java class known to the MBean's
             *  ClassLoader, it is recommended but not required that the
             *  class's public methods include those that would appear in a
             *  Standard MBean implementing the attributes and operations in
             *  this MBeanInfo.
             * @param description A human readable description of the MBean (optional).
             * @param attributes The list of exposed attributes of the MBean.
             *  This may be null with the same effect as a zero-length array.
             * @param constructors The list of public constructors of the
             *  MBean.  This may be null with the same effect as a zero-length
             *  array.
             * @param operations The list of operations of the MBean.  This
             *  may be null with the same effect as a zero-length array.
             * @param notifications The list of notifications emitted.  This
             *  may be null with the same effect as a zero-length array.
             * @param descriptor The descriptor for the MBean.  This may be null
             *  which is equivalent to an empty descriptor.
             * @since 1.6
             */
            // @ts-ignore
            constructor(className: java.lang.String | string, description: java.lang.String | string, attributes: javax.management.MBeanAttributeInfo[], constructors: javax.management.MBeanConstructorInfo[], operations: javax.management.MBeanOperationInfo[], notifications: javax.management.MBeanNotificationInfo[], descriptor: javax.management.Descriptor)
            /**
             * <p>Returns a shallow clone of this instance.
             * The clone is obtained by simply calling <tt>super.clone()</tt>,
             * thus calling the default native shallow cloning mechanism
             * implemented by <tt>Object.clone()</tt>.
             * No deeper cloning of any internal field is made.</p>
             * <p>Since this class is immutable, the clone method is chiefly of
             * interest to subclasses.</p>
             */
            // @ts-ignore
            public clone(): any
            /**
             * Returns the name of the Java class of the MBean described by
             * this <CODE>MBeanInfo</CODE>.
             * @return the class name.
             */
            // @ts-ignore
            public getClassName(): string
            /**
             * Returns a human readable description of the MBean.
             * @return the description.
             */
            // @ts-ignore
            public getDescription(): string
            /**
             * Returns the list of attributes exposed for management.
             * Each attribute is described by an <CODE>MBeanAttributeInfo</CODE> object.
             * The returned array is a shallow copy of the internal array,
             * which means that it is a copy of the internal array of
             * references to the <CODE>MBeanAttributeInfo</CODE> objects
             * but that each referenced <CODE>MBeanAttributeInfo</CODE> object is not copied.
             * @return An array of <CODE>MBeanAttributeInfo</CODE> objects.
             */
            // @ts-ignore
            public getAttributes(): javax.management.MBeanAttributeInfo[]
            /**
             * Returns the list of operations  of the MBean.
             * Each operation is described by an <CODE>MBeanOperationInfo</CODE> object.
             * The returned array is a shallow copy of the internal array,
             * which means that it is a copy of the internal array of
             * references to the <CODE>MBeanOperationInfo</CODE> objects
             * but that each referenced <CODE>MBeanOperationInfo</CODE> object is not copied.
             * @return An array of <CODE>MBeanOperationInfo</CODE> objects.
             */
            // @ts-ignore
            public getOperations(): javax.management.MBeanOperationInfo[]
            /**
             * <p>Returns the list of the public constructors of the MBean.
             * Each constructor is described by an
             * <CODE>MBeanConstructorInfo</CODE> object.</p>
             * <p>The returned array is a shallow copy of the internal array,
             * which means that it is a copy of the internal array of
             * references to the <CODE>MBeanConstructorInfo</CODE> objects but
             * that each referenced <CODE>MBeanConstructorInfo</CODE> object
             * is not copied.</p>
             * <p>The returned list is not necessarily exhaustive.  That is,
             * the MBean may have a public constructor that is not in the
             * list.  In this case, the MBean server can construct another
             * instance of this MBean's class using that constructor, even
             * though it is not listed here.</p>
             * @return An array of <CODE>MBeanConstructorInfo</CODE> objects.
             */
            // @ts-ignore
            public getConstructors(): javax.management.MBeanConstructorInfo[]
            /**
             * Returns the list of the notifications emitted by the MBean.
             * Each notification is described by an <CODE>MBeanNotificationInfo</CODE> object.
             * The returned array is a shallow copy of the internal array,
             * which means that it is a copy of the internal array of
             * references to the <CODE>MBeanNotificationInfo</CODE> objects
             * but that each referenced <CODE>MBeanNotificationInfo</CODE> object is not copied.
             * @return An array of <CODE>MBeanNotificationInfo</CODE> objects.
             */
            // @ts-ignore
            public getNotifications(): javax.management.MBeanNotificationInfo[]
            /**
             * Get the descriptor of this MBeanInfo.  Changing the returned value
             * will have no affect on the original descriptor.
             * @return a descriptor that is either immutable or a copy of the original.
             * @since 1.6
             */
            // @ts-ignore
            public getDescriptor(): javax.management.Descriptor
            // @ts-ignore
            public toString(): string
            /**
             * <p>Compare this MBeanInfo to another.  Two MBeanInfo objects
             * are equal if and only if they return equal values for {@link
             * #getClassName()}, for {@link #getDescription()}, and for
             * {@link #getDescriptor()}, and the
             * arrays returned by the two objects for {@link
             * #getAttributes()}, {@link #getOperations()}, {@link
             * #getConstructors()}, and {@link #getNotifications()} are
             * pairwise equal.  Here "equal" means {@link
             * Object#equals(Object)}, not identity.</p>
             * <p>If two MBeanInfo objects return the same values in one of
             * their arrays but in a different order then they are not equal.</p>
             * @param o the object to compare to.
             * @return true if and only if <code>o</code> is an MBeanInfo that is equal
             *  to this one according to the rules above.
             */
            // @ts-ignore
            public equals(o: java.lang.Object | any): boolean
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}

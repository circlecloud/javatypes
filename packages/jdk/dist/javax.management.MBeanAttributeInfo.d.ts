declare namespace javax {
    namespace management {
        /**
         * Describes an MBean attribute exposed for management.  Instances of
         * this class are immutable.  Subclasses may be mutable but this is
         * not recommended.
         * @since 1.5
         */
        // @ts-ignore
        class MBeanAttributeInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            /**
             * Constructs an <CODE>MBeanAttributeInfo</CODE> object.
             * @param name The name of the attribute.
             * @param type The type or class name of the attribute.
             * @param description A human readable description of the attribute.
             * @param isReadable True if the attribute has a getter method, false otherwise.
             * @param isWritable True if the attribute has a setter method, false otherwise.
             * @param isIs True if this attribute has an "is" getter, false otherwise.
             * @throws IllegalArgumentException if {#code isIs} is true but
             *  {@code isReadable} is not, or if {@code isIs} is true and
             *  {@code type} is not {@code boolean} or {@code java.lang.Boolean}.
             *  (New code should always use {@code boolean} rather than
             *  {@code java.lang.Boolean}.)
             */
            // @ts-ignore
            constructor(name: string, type: string, description: string, isReadable: boolean, isWritable: boolean, isIs: boolean)
            /**
             * Constructs an <CODE>MBeanAttributeInfo</CODE> object.
             * @param name The name of the attribute.
             * @param type The type or class name of the attribute.
             * @param description A human readable description of the attribute.
             * @param isReadable True if the attribute has a getter method, false otherwise.
             * @param isWritable True if the attribute has a setter method, false otherwise.
             * @param isIs True if this attribute has an "is" getter, false otherwise.
             * @param descriptor The descriptor for the attribute.  This may be null
             *  which is equivalent to an empty descriptor.
             * @throws IllegalArgumentException if {#code isIs} is true but
             *  {@code isReadable} is not, or if {@code isIs} is true and
             *  {@code type} is not {@code boolean} or {@code java.lang.Boolean}.
             *  (New code should always use {@code boolean} rather than
             *  {@code java.lang.Boolean}.)
             * @since 1.6
             */
            // @ts-ignore
            constructor(name: string, type: string, description: string, isReadable: boolean, isWritable: boolean, isIs: boolean, descriptor: javax.management.Descriptor)
            /**
             * <p>This constructor takes the name of a simple attribute, and Method
             * objects for reading and writing the attribute.  The {@link Descriptor}
             * of the constructed object will include fields contributed by any
             * annotations on the {@code Method} objects that contain the
             * {@link DescriptorKey} meta-annotation.
             * @param name The programmatic name of the attribute.
             * @param description A human readable description of the attribute.
             * @param getter The method used for reading the attribute value.
             *           May be null if the property is write-only.
             * @param setter The method used for writing the attribute value.
             *           May be null if the attribute is read-only.
             * @exception IntrospectionException There is a consistency
             *  problem in the definition of this attribute.
             */
            // @ts-ignore
            constructor(name: string, description: string, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method)
            /**
             * <p>Returns a shallow clone of this instance.
             * The clone is obtained by simply calling <tt>super.clone()</tt>,
             * thus calling the default native shallow cloning mechanism
             * implemented by <tt>Object.clone()</tt>.
             * No deeper cloning of any internal field is made.</p>
             * <p>Since this class is immutable, cloning is chiefly of
             * interest to subclasses.</p>
             */
            // @ts-ignore
            clone(): java.lang.Object
            /**
             * Returns the class name of the attribute.
             * @return the class name.
             */
            // @ts-ignore
            getType(): java.lang.String
            /**
             * Whether the value of the attribute can be read.
             * @return True if the attribute can be read, false otherwise.
             */
            // @ts-ignore
            isReadable(): boolean
            /**
             * Whether new values can be written to the attribute.
             * @return True if the attribute can be written to, false otherwise.
             */
            // @ts-ignore
            isWritable(): boolean
            /**
             * Indicates if this attribute has an "is" getter.
             * @return true if this attribute has an "is" getter.
             */
            // @ts-ignore
            isIs(): boolean
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Compare this MBeanAttributeInfo to another.
             * @param o the object to compare to.
             * @return true if and only if <code>o</code> is an MBeanAttributeInfo such
             *  that its {#link #getName()}, {@link #getType()}, {@link
             *  #getDescription()}, {@link #isReadable()}, {@link
             *  #isWritable()}, and {@link #isIs()} values are equal (not
             *  necessarily identical) to those of this MBeanAttributeInfo.
             */
            // @ts-ignore
            equals(o: any): boolean
            // @ts-ignore
            hashCode(): int
        }
    }
}

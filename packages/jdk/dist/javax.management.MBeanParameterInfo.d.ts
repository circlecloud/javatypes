declare namespace javax {
    namespace management {
        /**
         * Describes an argument of an operation exposed by an MBean.
         * Instances of this class are immutable.  Subclasses may be mutable
         * but this is not recommended.
         * @since 1.5
         */
        // @ts-ignore
        class MBeanParameterInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            /**
             * Constructs an <CODE>MBeanParameterInfo</CODE> object.
             * @param name The name of the data
             * @param type The type or class name of the data
             * @param description A human readable description of the data. Optional.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, type: java.lang.String | string, description: java.lang.String | string)
            /**
             * Constructs an <CODE>MBeanParameterInfo</CODE> object.
             * @param name The name of the data
             * @param type The type or class name of the data
             * @param description A human readable description of the data. Optional.
             * @param descriptor The descriptor for the operation.  This may be null
             *  which is equivalent to an empty descriptor.
             * @since 1.6
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, type: java.lang.String | string, description: java.lang.String | string, descriptor: javax.management.Descriptor)
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
            public clone(): any
            /**
             * Returns the type or class name of the data.
             * @return the type string.
             */
            // @ts-ignore
            public getType(): string
            // @ts-ignore
            public toString(): string
            /**
             * Compare this MBeanParameterInfo to another.
             * @param o the object to compare to.
             * @return true if and only if <code>o</code> is an MBeanParameterInfo such
             *  that its {#link #getName()}, {@link #getType()},
             *  {@link #getDescriptor()}, and {@link
             *  #getDescription()} values are equal (not necessarily identical)
             *  to those of this MBeanParameterInfo.
             */
            // @ts-ignore
            public equals(o: java.lang.Object | any): boolean
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}

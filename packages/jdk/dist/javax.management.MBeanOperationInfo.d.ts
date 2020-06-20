declare namespace javax {
    namespace management {
        /**
         * Describes a management operation exposed by an MBean.  Instances of
         * this class are immutable.  Subclasses may be mutable but this is
         * not recommended.
         * @since 1.5
         */
        // @ts-ignore
        class MBeanOperationInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
            /**
             * Constructs an <CODE>MBeanOperationInfo</CODE> object.  The
             * {@link Descriptor} of the constructed object will include
             * fields contributed by any annotations on the {@code Method}
             * object that contain the {@link DescriptorKey} meta-annotation.
             * @param method The <CODE>java.lang.reflect.Method</CODE> object
             *  describing the MBean operation.
             * @param description A human readable description of the operation.
             */
            // @ts-ignore
            constructor(description: string, method: java.lang.reflect.Method)
            /**
             * Constructs an <CODE>MBeanOperationInfo</CODE> object.
             * @param name The name of the method.
             * @param description A human readable description of the operation.
             * @param signature <CODE>MBeanParameterInfo</CODE> objects
             *  describing the parameters(arguments) of the method.  This may be
             *  null with the same effect as a zero-length array.
             * @param type The type of the method's return value.
             * @param impact The impact of the method, one of
             *  {#link #INFO}, {@link #ACTION}, {@link #ACTION_INFO},
             *  {@link #UNKNOWN}.
             */
            // @ts-ignore
            constructor(name: string, description: string, signature: javax.management.MBeanParameterInfo[], type: string, impact: number /*int*/)
            /**
             * Constructs an <CODE>MBeanOperationInfo</CODE> object.
             * @param name The name of the method.
             * @param description A human readable description of the operation.
             * @param signature <CODE>MBeanParameterInfo</CODE> objects
             *  describing the parameters(arguments) of the method.  This may be
             *  null with the same effect as a zero-length array.
             * @param type The type of the method's return value.
             * @param impact The impact of the method, one of
             *  {#link #INFO}, {@link #ACTION}, {@link #ACTION_INFO},
             *  {@link #UNKNOWN}.
             * @param descriptor The descriptor for the operation.  This may be null
             *  which is equivalent to an empty descriptor.
             * @since 1.6
             */
            // @ts-ignore
            constructor(name: string, description: string, signature: javax.management.MBeanParameterInfo[], type: string, impact: number /*int*/, descriptor: javax.management.Descriptor)
            /**
             * Indicates that the operation is read-like:
             * it returns information but does not change any state.
             */
            // @ts-ignore
            readonly INFO: number /*int*/
            /**
             * Indicates that the operation is write-like: it has an effect but does
             * not return any information from the MBean.
             */
            // @ts-ignore
            readonly ACTION: number /*int*/
            /**
             * Indicates that the operation is both read-like and write-like:
             * it has an effect, and it also returns information from the MBean.
             */
            // @ts-ignore
            readonly ACTION_INFO: number /*int*/
            /**
             * Indicates that the impact of the operation is unknown or cannot be
             * expressed using one of the other values.
             */
            // @ts-ignore
            readonly UNKNOWN: number /*int*/
            /**
             * <p>Returns a shallow clone of this instance.
             * The clone is obtained by simply calling <tt>super.clone()</tt>,
             * thus calling the default native shallow cloning mechanism
             * implemented by <tt>Object.clone()</tt>.
             * No deeper cloning of any internal field is made.</p>
             * <p>Since this class is immutable, cloning is chiefly of interest
             * to subclasses.</p>
             */
            // @ts-ignore
            clone(): java.lang.Object
            /**
             * Returns the type of the method's return value.
             * @return the return type.
             */
            // @ts-ignore
            getReturnType(): java.lang.String
            /**
             * <p>Returns the list of parameters for this operation.  Each
             * parameter is described by an <CODE>MBeanParameterInfo</CODE>
             * object.</p>
             * <p>The returned array is a shallow copy of the internal array,
             * which means that it is a copy of the internal array of
             * references to the <CODE>MBeanParameterInfo</CODE> objects but
             * that each referenced <CODE>MBeanParameterInfo</CODE> object is
             * not copied.</p>
             * @return An array of <CODE>MBeanParameterInfo</CODE> objects.
             */
            // @ts-ignore
            getSignature(): javax.management.MBeanParameterInfo[]
            /**
             * Returns the impact of the method, one of
             * <CODE>INFO</CODE>, <CODE>ACTION</CODE>, <CODE>ACTION_INFO</CODE>, <CODE>UNKNOWN</CODE>.
             * @return the impact code.
             */
            // @ts-ignore
            getImpact(): int
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Compare this MBeanOperationInfo to another.
             * @param o the object to compare to.
             * @return true if and only if <code>o</code> is an MBeanOperationInfo such
             *  that its {#link #getName()}, {@link #getReturnType()}, {@link
             *  #getDescription()}, {@link #getImpact()}, {@link #getDescriptor()}
             *  and {@link #getSignature()} values are equal (not necessarily identical)
             *  to those of this MBeanConstructorInfo.  Two signature arrays
             *  are equal if their elements are pairwise equal.
             */
            // @ts-ignore
            equals(o: any): boolean
            // @ts-ignore
            hashCode(): int
        }
    }
}

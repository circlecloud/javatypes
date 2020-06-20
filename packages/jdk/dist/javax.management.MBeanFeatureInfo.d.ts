declare namespace javax {
    namespace management {
        /**
         * <p>Provides general information for an MBean descriptor object.
         * The feature described can be an attribute, an operation, a
         * parameter, or a notification.  Instances of this class are
         * immutable.  Subclasses may be mutable but this is not
         * recommended.</p>
         * @since 1.5
         */
        // @ts-ignore
        class MBeanFeatureInfo extends java.lang.Object implements java.io.Serializable, javax.management.DescriptorRead {
            /**
             * Constructs an <CODE>MBeanFeatureInfo</CODE> object.  This
             * constructor is equivalent to {@code MBeanFeatureInfo(name,
             * description, (Descriptor) null}.
             * @param name The name of the feature.
             * @param description A human readable description of the feature.
             */
            // @ts-ignore
            constructor(name: string, description: string)
            /**
             * Constructs an <CODE>MBeanFeatureInfo</CODE> object.
             * @param name The name of the feature.
             * @param description A human readable description of the feature.
             * @param descriptor The descriptor for the feature.  This may be null
             *  which is equivalent to an empty descriptor.
             * @since 1.6
             */
            // @ts-ignore
            constructor(name: string, description: string, descriptor: javax.management.Descriptor)
            /**
             * The name of the feature.  It is recommended that subclasses call
             * {@link #getName} rather than reading this field, and that they
             * not change it.
             * @serial The name of the feature.
             */
            // @ts-ignore
            name: string
            /**
             * The human-readable description of the feature.  It is
             * recommended that subclasses call {@link #getDescription} rather
             * than reading this field, and that they not change it.
             * @serial The human-readable description of the feature.
             */
            // @ts-ignore
            description: string
            /**
             * Returns the name of the feature.
             * @return the name of the feature.
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Returns the human-readable description of the feature.
             * @return the human-readable description of the feature.
             */
            // @ts-ignore
            getDescription(): java.lang.String
            /**
             * Returns the descriptor for the feature.  Changing the returned value
             * will have no affect on the original descriptor.
             * @return a descriptor that is either immutable or a copy of the original.
             * @since 1.6
             */
            // @ts-ignore
            getDescriptor(): javax.management.Descriptor
            /**
             * Compare this MBeanFeatureInfo to another.
             * @param o the object to compare to.
             * @return true if and only if <code>o</code> is an MBeanFeatureInfo such
             *  that its {#link #getName()}, {@link #getDescription()}, and
             *  {@link #getDescriptor()}
             *  values are equal (not necessarily identical) to those of this
             *  MBeanFeatureInfo.
             */
            // @ts-ignore
            equals(o: any): boolean
            // @ts-ignore
            hashCode(): int
        }
    }
}

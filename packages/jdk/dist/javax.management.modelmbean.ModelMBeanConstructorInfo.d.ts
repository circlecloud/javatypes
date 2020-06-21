declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * <p>The ModelMBeanConstructorInfo object describes a constructor of the ModelMBean.
             * It is a subclass of MBeanConstructorInfo with the addition of an associated Descriptor
             * and an implementation of the DescriptorAccess interface.</p>
             * <P id="descriptor">
             * The fields in the descriptor are defined, but not limited to, the following.
             * Note that when the Type in this table is Number, a String that is the decimal
             * representation of a Long can also be used.</P>
             * <table border="1" cellpadding="5" summary="ModelMBeanConstructorInfo Fields">
             * <tr><th>Name</th><th>Type</th><th>Meaning</th></tr>
             * <tr><td>name</td><td>String</td>
             * <td>Constructor name.</td></tr>
             * <tr><td>descriptorType</td><td>String</td>
             * <td>Must be "operation".</td></tr>
             * <tr><td>role</td><td>String</td>
             * <td>Must be "constructor".</td></tr>
             * <tr><td>displayName</td><td>String</td>
             * <td>Human readable name of constructor.</td></tr>
             * <tr><td>visibility</td><td>Number</td>
             * <td>1-4 where 1: always visible 4: rarely visible.</td></tr>
             * <tr><td>presentationString</td><td>String</td>
             * <td>XML formatted string to describe how to present operation</td></tr>
             * </table>
             * <p>The {@code persistPolicy} and {@code currencyTimeLimit} fields
             * are meaningless for constructors, but are not considered invalid.</p>
             * <p>The default descriptor will have the {@code name}, {@code
             * descriptorType}, {@code displayName} and {@code role} fields.
             * <p>The <b>serialVersionUID</b> of this class is <code>3862947819818064362L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class ModelMBeanConstructorInfo extends javax.management.MBeanConstructorInfo implements javax.management.DescriptorAccess {
                /**
                 * Constructs a ModelMBeanConstructorInfo object with a default
                 * descriptor.  The {@link Descriptor} of the constructed
                 * object will include fields contributed by any annotations on
                 * the {@code Constructor} object that contain the {@link
                 * DescriptorKey} meta-annotation.
                 * @param description A human readable description of the constructor.
                 * @param constructorMethod The java.lang.reflect.Constructor object
                 *  describing the MBean constructor.
                 */
                // @ts-ignore
                constructor(description: java.lang.String | string, constructorMethod: java.lang.reflect.Constructor<any>)
                /**
                 * Constructs a ModelMBeanConstructorInfo object.  The {@link
                 * Descriptor} of the constructed object will include fields
                 * contributed by any annotations on the {@code Constructor}
                 * object that contain the {@link DescriptorKey}
                 * meta-annotation.
                 * @param description A human readable description of the constructor.
                 * @param constructorMethod The java.lang.reflect.Constructor object
                 *  describing the ModelMBean constructor.
                 * @param descriptor An instance of Descriptor containing the
                 *  appropriate metadata for this instance of the
                 *  ModelMBeanConstructorInfo.  If it is null, then a default
                 *  descriptor will be created. If the descriptor does not
                 *  contain the field "displayName" this field is added in the
                 *  descriptor with its default value.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException. The descriptor is invalid, or
                 *  descriptor field "name" is not equal to name
                 *  parameter, or descriptor field "descriptorType" is
                 *  not equal to "operation" or descriptor field "role" is
                 *  present but not equal to "constructor".
                 */
                // @ts-ignore
                constructor(description: java.lang.String | string, constructorMethod: java.lang.reflect.Constructor<any>, descriptor: javax.management.Descriptor)
                /**
                 * Constructs a ModelMBeanConstructorInfo object with a default descriptor.
                 * @param name The name of the constructor.
                 * @param description A human readable description of the constructor.
                 * @param signature MBeanParameterInfo object array describing the parameters(arguments) of the constructor.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, signature: javax.management.MBeanParameterInfo[])
                /**
                 * Constructs a ModelMBeanConstructorInfo object.
                 * @param name The name of the constructor.
                 * @param description A human readable description of the constructor.
                 * @param signature MBeanParameterInfo objects describing the parameters(arguments) of the constructor.
                 * @param descriptor An instance of Descriptor containing the appropriate metadata
                 *                    for this instance of the MBeanConstructorInfo. If it is null then a default descriptor will be created.
                 *  If the descriptor does not contain the field "displayName" this field
                 *  is added in the descriptor with its default value.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException. The descriptor is invalid, or
                 *  descriptor field "name" is not equal to name
                 *  parameter, or descriptor field "descriptorType" is
                 *  not equal to "operation" or descriptor field "role" is
                 *  present but not equal to "constructor".
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, signature: javax.management.MBeanParameterInfo[], descriptor: javax.management.Descriptor)
                /**
                 * Creates and returns a new ModelMBeanConstructorInfo which is a duplicate of this ModelMBeanConstructorInfo.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Returns a copy of the associated Descriptor.
                 * @return Descriptor associated with the
                 *  ModelMBeanConstructorInfo object.
                 * @see #setDescriptor
                 */
                // @ts-ignore
                public getDescriptor(): javax.management.Descriptor
                /**
                 * Sets associated Descriptor (full replace) of
                 * ModelMBeanConstructorInfo.  If the new Descriptor is null,
                 * then the associated Descriptor reverts to a default
                 * descriptor.  The Descriptor is validated before it is
                 * assigned.  If the new Descriptor is invalid, then a
                 * RuntimeOperationsException wrapping an
                 * IllegalArgumentException is thrown.
                 * @param inDescriptor replaces the Descriptor associated with
                 *  the ModelMBeanConstructor. If the descriptor does not
                 *  contain all the following fields, the missing ones are added with
                 *  their default values: displayName, name, role, descriptorType.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException.  The descriptor is invalid, or
                 *  descriptor field "name" is present but not equal to name
                 *  parameter, or descriptor field "descriptorType" is present
                 *  but not equal to "operation" or descriptor field "role" is
                 *  present but not equal to "constructor".
                 * @see #getDescriptor
                 */
                // @ts-ignore
                public setDescriptor(inDescriptor: javax.management.Descriptor): void
                /**
                 * Returns a string containing the entire contents of the ModelMBeanConstructorInfo in human readable form.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * <p>The ModelMBeanOperationInfo object describes a management operation of
             * the ModelMBean.  It is a subclass of MBeanOperationInfo with the addition
             * of an associated Descriptor and an implementation of the DescriptorAccess
             * interface.</p>
             * <P id="descriptor">
             * The fields in the descriptor are defined, but not limited to, the following.
             * Note that when the Type in this table is Number, a String that is the decimal
             * representation of a Long can also be used.</P>
             * <table border="1" cellpadding="5" summary="ModelMBeanOperationInfo Fields">
             * <tr><th>Name</th><th>Type</th><th>Meaning</th></tr>
             * <tr><td>name</td><td>String</td>
             * <td>Operation name.</td></tr>
             * <tr><td>descriptorType</td><td>String</td>
             * <td>Must be "operation".</td></tr>
             * <tr><td>class</td><td>String</td>
             * <td>Class where method is defined (fully qualified).</td></tr>
             * <tr><td>role</td><td>String</td>
             * <td>Must be "operation", "getter", or "setter".</td></tr>
             * <tr><td>targetObject</td><td>Object</td>
             * <td>Object on which to execute this method.</td></tr>
             * <tr><td>targetType</td><td>String</td>
             * <td>type of object reference for targetObject. Can be:
             * ObjectReference | Handle | EJBHandle | IOR | RMIReference.</td></tr>
             * <tr><td>value</td><td>Object</td>
             * <td>Cached value for operation.</td></tr>
             * <tr><td>displayName</td><td>String</td>
             * <td>Human readable display name of the operation.</td>
             * <tr><td>currencyTimeLimit</td><td>Number</td>
             * <td>How long cached value is valid.</td></tr>
             * <tr><td>lastUpdatedTimeStamp</td><td>Number</td>
             * <td>When cached value was set.</td></tr>
             * <tr><td>visibility</td><td>Number</td>
             * <td>1-4 where 1: always visible 4: rarely visible.</td></tr>
             * <tr><td>presentationString</td><td>String</td>
             * <td>XML formatted string to describe how to present operation</td></tr>
             * </table>
             * <p>The default descriptor will have name, descriptorType, displayName and
             * role fields set.  The default value of the name and displayName fields is
             * the operation name.</p>
             * <p><b>Note:</b> because of inconsistencies in previous versions of
             * this specification, it is recommended not to use negative or zero
             * values for <code>currencyTimeLimit</code>.  To indicate that a
             * cached value is never valid, omit the
             * <code>currencyTimeLimit</code> field.  To indicate that it is
             * always valid, use a very large number for this field.</p>
             * <p>The <b>serialVersionUID</b> of this class is <code>6532732096650090465L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class ModelMBeanOperationInfo extends javax.management.MBeanOperationInfo implements javax.management.DescriptorAccess {
                /**
                 * Constructs a ModelMBeanOperationInfo object with a default
                 * descriptor. The {@link Descriptor} of the constructed
                 * object will include fields contributed by any annotations
                 * on the {@code Method} object that contain the {@link
                 * DescriptorKey} meta-annotation.
                 * @param operationMethod The java.lang.reflect.Method object
                 *  describing the MBean operation.
                 * @param description A human readable description of the operation.
                 */
                // @ts-ignore
                constructor(description: java.lang.String | string, operationMethod: java.lang.reflect.Method)
                /**
                 * Constructs a ModelMBeanOperationInfo object. The {@link
                 * Descriptor} of the constructed object will include fields
                 * contributed by any annotations on the {@code Method} object
                 * that contain the {@link DescriptorKey} meta-annotation.
                 * @param operationMethod The java.lang.reflect.Method object
                 *  describing the MBean operation.
                 * @param description A human readable description of the
                 *  operation.
                 * @param descriptor An instance of Descriptor containing the
                 *  appropriate metadata for this instance of the
                 *  ModelMBeanOperationInfo.  If it is null a default
                 *  descriptor will be created. If the descriptor does not
                 *  contain the fields
                 *  "displayName" or "role", the missing ones are added with
                 *  their default values.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException. The descriptor is invalid; or
                 *  descriptor field "name" is not equal to
                 *  operation name; or descriptor field "DescriptorType" is
                 *  not equal to "operation"; or descriptor
                 *  optional field "role" is present but not equal to "operation",
                 *  "getter", or "setter".
                 */
                // @ts-ignore
                constructor(description: java.lang.String | string, operationMethod: java.lang.reflect.Method, descriptor: javax.management.Descriptor)
                /**
                 * Constructs a ModelMBeanOperationInfo object with a default descriptor.
                 * @param name The name of the method.
                 * @param description A human readable description of the operation.
                 * @param signature MBeanParameterInfo objects describing the
                 *  parameters(arguments) of the method.
                 * @param type The type of the method's return value.
                 * @param impact The impact of the method, one of INFO, ACTION,
                 *  ACTION_INFO, UNKNOWN.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, signature: javax.management.MBeanParameterInfo[], type: java.lang.String | string, impact: number /*int*/)
                /**
                 * Constructs a ModelMBeanOperationInfo object.
                 * @param name The name of the method.
                 * @param description A human readable description of the operation.
                 * @param signature MBeanParameterInfo objects describing the
                 *  parameters(arguments) of the method.
                 * @param type The type of the method's return value.
                 * @param impact The impact of the method, one of INFO, ACTION,
                 *  ACTION_INFO, UNKNOWN.
                 * @param descriptor An instance of Descriptor containing the
                 *  appropriate metadata for this instance of the
                 *  MBeanOperationInfo. If it is null then a default descriptor
                 *  will be created.  If the descriptor does not contain
                 *  fields "displayName" or "role",
                 *  the missing ones are added with their default values.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException. The descriptor is invalid; or
                 *  descriptor field "name" is not equal to
                 *  operation name; or descriptor field "DescriptorType" is
                 *  not equal to "operation"; or descriptor optional
                 *  field "role" is present but not equal to "operation", "getter", or
                 *  "setter".
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, signature: javax.management.MBeanParameterInfo[], type: java.lang.String | string, impact: number /*int*/, descriptor: javax.management.Descriptor)
                /**
                 * Constructs a new ModelMBeanOperationInfo object from this
                 * ModelMBeanOperation Object.
                 * @param inInfo the ModelMBeanOperationInfo to be duplicated
                 */
                // @ts-ignore
                constructor(inInfo: javax.management.modelmbean.ModelMBeanOperationInfo)
                /**
                 * Creates and returns a new ModelMBeanOperationInfo which is a
                 * duplicate of this ModelMBeanOperationInfo.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Returns a copy of the associated Descriptor of the
                 * ModelMBeanOperationInfo.
                 * @return Descriptor associated with the
                 *  ModelMBeanOperationInfo object.
                 * @see #setDescriptor
                 */
                // @ts-ignore
                public getDescriptor(): javax.management.Descriptor
                /**
                 * Sets associated Descriptor (full replace) for the
                 * ModelMBeanOperationInfo If the new Descriptor is null, then
                 * the associated Descriptor reverts to a default descriptor.
                 * The Descriptor is validated before it is assigned.  If the
                 * new Descriptor is invalid, then a
                 * RuntimeOperationsException wrapping an
                 * IllegalArgumentException is thrown.
                 * @param inDescriptor replaces the Descriptor associated with the
                 *  ModelMBeanOperation.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException for invalid Descriptor.
                 * @see #getDescriptor
                 */
                // @ts-ignore
                public setDescriptor(inDescriptor: javax.management.Descriptor): void
                /**
                 * Returns a string containing the entire contents of the
                 * ModelMBeanOperationInfo in human readable form.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

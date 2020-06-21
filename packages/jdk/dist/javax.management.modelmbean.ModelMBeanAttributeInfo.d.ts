declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * <p>The ModelMBeanAttributeInfo object describes an attribute of the ModelMBean.
             * It is a subclass of MBeanAttributeInfo with the addition of an associated Descriptor
             * and an implementation of the DescriptorAccess interface.</p>
             * <P id="descriptor">
             * The fields in the descriptor are defined, but not limited to, the following.
             * Note that when the Type in this table is Number, a String that is the decimal
             * representation of a Long can also be used.</P>
             * <table border="1" cellpadding="5" summary="ModelMBeanAttributeInfo Fields">
             * <tr><th>Name</th><th>Type</th><th>Meaning</th></tr>
             * <tr><td>name</td><td>String</td>
             * <td>Attribute name.</td></tr>
             * <tr><td>descriptorType</td><td>String</td>
             * <td>Must be "attribute".</td></tr>
             * <tr id="value-field"><td>value</td><td>Object</td>
             * <td>Current (cached) value for attribute.</td></tr>
             * <tr><td>default</td><td>Object</td>
             * <td>Default value for attribute.</td></tr>
             * <tr><td>displayName</td><td>String</td>
             * <td>Name of attribute to be used in displays.</td></tr>
             * <tr><td>getMethod</td><td>String</td>
             * <td>Name of operation descriptor for get method.</td></tr>
             * <tr><td>setMethod</td><td>String</td>
             * <td>Name of operation descriptor for set method.</td></tr>
             * <tr><td>protocolMap</td><td>Descriptor</td>
             * <td>See the section "Protocol Map Support" in the JMX specification
             * document.  Mappings must be appropriate for the attribute and entries
             * can be updated or augmented at runtime.</td></tr>
             * <tr><td>persistPolicy</td><td>String</td>
             * <td>One of: OnUpdate|OnTimer|NoMoreOftenThan|OnUnregister|Always|Never.
             * See the section "MBean Descriptor Fields" in the JMX specification
             * document.</td></tr>
             * <tr><td>persistPeriod</td><td>Number</td>
             * <td>Frequency of persist cycle in seconds. Used when persistPolicy is
             * "OnTimer" or "NoMoreOftenThan".</td></tr>
             * <tr><td>currencyTimeLimit</td><td>Number</td>
             * <td>How long <a href="#value=field">value</a> is valid: &lt;0 never,
             * =0 always, &gt;0 seconds.</td></tr>
             * <tr><td>lastUpdatedTimeStamp</td><td>Number</td>
             * <td>When <a href="#value-field">value</a> was set.</td></tr>
             * <tr><td>visibility</td><td>Number</td>
             * <td>1-4 where 1: always visible, 4: rarely visible.</td></tr>
             * <tr><td>presentationString</td><td>String</td>
             * <td>XML formatted string to allow presentation of data.</td></tr>
             * </table>
             * <p>The default descriptor contains the name, descriptorType and displayName
             * fields.  The default value of the name and displayName fields is the name of
             * the attribute.</p>
             * <p><b>Note:</b> because of inconsistencies in previous versions of
             * this specification, it is recommended not to use negative or zero
             * values for <code>currencyTimeLimit</code>.  To indicate that a
             * cached value is never valid, omit the
             * <code>currencyTimeLimit</code> field.  To indicate that it is
             * always valid, use a very large number for this field.</p>
             * <p>The <b>serialVersionUID</b> of this class is <code>6181543027787327345L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class ModelMBeanAttributeInfo extends javax.management.MBeanAttributeInfo implements javax.management.DescriptorAccess {
                /**
                 * Constructs a ModelMBeanAttributeInfo object with a default
                 * descriptor. The {@link Descriptor} of the constructed
                 * object will include fields contributed by any annotations
                 * on the {@code Method} objects that contain the {@link
                 * DescriptorKey} meta-annotation.
                 * @param name The name of the attribute.
                 * @param description A human readable description of the attribute. Optional.
                 * @param getter The method used for reading the attribute value.
                 *           May be null if the property is write-only.
                 * @param setter The method used for writing the attribute value.
                 *           May be null if the attribute is read-only.
                 * @exception javax.management.IntrospectionException There is a consistency
                 *  problem in the definition of this attribute.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method)
                /**
                 * Constructs a ModelMBeanAttributeInfo object.  The {@link
                 * Descriptor} of the constructed object will include fields
                 * contributed by any annotations on the {@code Method}
                 * objects that contain the {@link DescriptorKey}
                 * meta-annotation.
                 * @param name The name of the attribute.
                 * @param description A human readable description of the attribute. Optional.
                 * @param getter The method used for reading the attribute value.
                 *           May be null if the property is write-only.
                 * @param setter The method used for writing the attribute value.
                 *           May be null if the attribute is read-only.
                 * @param descriptor An instance of Descriptor containing the
                 *  appropriate metadata for this instance of the Attribute. If
                 *  it is null, then a default descriptor will be created.  If
                 *  the descriptor does not contain the field "displayName" this field is added
                 *  in the descriptor with its default value.
                 * @exception javax.management.IntrospectionException There is a consistency
                 *  problem in the definition of this attribute.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException. The descriptor is invalid, or descriptor
                 *  field "name" is not equal to name parameter, or descriptor field
                 *  "descriptorType" is not equal to "attribute".
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method, descriptor: javax.management.Descriptor)
                /**
                 * Constructs a ModelMBeanAttributeInfo object with a default descriptor.
                 * @param name The name of the attribute
                 * @param type The type or class name of the attribute
                 * @param description A human readable description of the attribute.
                 * @param isReadable True if the attribute has a getter method, false otherwise.
                 * @param isWritable True if the attribute has a setter method, false otherwise.
                 * @param isIs True if the attribute has an "is" getter, false otherwise.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, type: java.lang.String | string, description: java.lang.String | string, isReadable: boolean, isWritable: boolean, isIs: boolean)
                /**
                 * Constructs a ModelMBeanAttributeInfo object.
                 * @param name The name of the attribute
                 * @param type The type or class name of the attribute
                 * @param description A human readable description of the attribute.
                 * @param isReadable True if the attribute has a getter method, false otherwise.
                 * @param isWritable True if the attribute has a setter method, false otherwise.
                 * @param isIs True if the attribute has an "is" getter, false otherwise.
                 * @param descriptor An instance of Descriptor containing the
                 *  appropriate metadata for this instance of the Attribute. If
                 *  it is null then a default descriptor will be created.  If
                 *  the descriptor does not contain the field "displayName" this field
                 *  is added in the descriptor with its default value.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException. The descriptor is invalid, or descriptor
                 *  field "name" is not equal to name parameter, or descriptor field
                 *  "descriptorType" is not equal to "attribute".
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, type: java.lang.String | string, description: java.lang.String | string, isReadable: boolean, isWritable: boolean, isIs: boolean, descriptor: javax.management.Descriptor)
                /**
                 * Constructs a new ModelMBeanAttributeInfo object from this
                 * ModelMBeanAttributeInfo Object.  A default descriptor will
                 * be created.
                 * @param inInfo the ModelMBeanAttributeInfo to be duplicated
                 */
                // @ts-ignore
                constructor(inInfo: javax.management.modelmbean.ModelMBeanAttributeInfo)
                /**
                 * Gets a copy of the associated Descriptor for the
                 * ModelMBeanAttributeInfo.
                 * @return Descriptor associated with the
                 *  ModelMBeanAttributeInfo object.
                 * @see #setDescriptor
                 */
                // @ts-ignore
                public getDescriptor(): javax.management.Descriptor
                /**
                 * Sets associated Descriptor (full replace) for the
                 * ModelMBeanAttributeDescriptor.  If the new Descriptor is
                 * null, then the associated Descriptor reverts to a default
                 * descriptor.  The Descriptor is validated before it is
                 * assigned.  If the new Descriptor is invalid, then a
                 * RuntimeOperationsException wrapping an
                 * IllegalArgumentException is thrown.
                 * @param inDescriptor replaces the Descriptor associated with the
                 *  ModelMBeanAttributeInfo
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException for an invalid Descriptor
                 * @see #getDescriptor
                 */
                // @ts-ignore
                public setDescriptor(inDescriptor: javax.management.Descriptor): void
                /**
                 * Creates and returns a new ModelMBeanAttributeInfo which is a duplicate of this ModelMBeanAttributeInfo.
                 * @exception RuntimeOperationsException for illegal value for
                 *  field Names or field Values.  If the descriptor construction
                 *  fails for any reason, this exception will be thrown.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Returns a human-readable version of the
                 * ModelMBeanAttributeInfo instance.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

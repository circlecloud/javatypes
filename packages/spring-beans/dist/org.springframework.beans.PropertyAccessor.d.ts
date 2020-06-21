declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Common interface for classes that can access named properties
             * (such as bean properties of an object or fields in an object)
             * Serves as base interface for {@link BeanWrapper}.
             * @author Juergen Hoeller
             * @since 1.1
             * @see BeanWrapper
             * @see PropertyAccessorFactory#forBeanPropertyAccess
             * @see PropertyAccessorFactory#forDirectFieldAccess
             */
            // @ts-ignore
            interface PropertyAccessor {
                /**
                 * Path separator for nested properties.
                 * Follows normal Java conventions: getFoo().getBar() would be "foo.bar".
                 */
                // @ts-ignore
                readonly NESTED_PROPERTY_SEPARATOR: java.lang.String | string
                /**
                 * Path separator for nested properties.
                 * Follows normal Java conventions: getFoo().getBar() would be "foo.bar".
                 */
                // @ts-ignore
                readonly NESTED_PROPERTY_SEPARATOR_CHAR: string
                /**
                 * Marker that indicates the start of a property key for an
                 * indexed or mapped property like "person.addresses[0]".
                 */
                // @ts-ignore
                readonly PROPERTY_KEY_PREFIX: java.lang.String | string
                /**
                 * Marker that indicates the start of a property key for an
                 * indexed or mapped property like "person.addresses[0]".
                 */
                // @ts-ignore
                readonly PROPERTY_KEY_PREFIX_CHAR: string
                /**
                 * Marker that indicates the end of a property key for an
                 * indexed or mapped property like "person.addresses[0]".
                 */
                // @ts-ignore
                readonly PROPERTY_KEY_SUFFIX: java.lang.String | string
                /**
                 * Marker that indicates the end of a property key for an
                 * indexed or mapped property like "person.addresses[0]".
                 */
                // @ts-ignore
                readonly PROPERTY_KEY_SUFFIX_CHAR: string
                /**
                 * Determine whether the specified property is readable.
                 * <p>Returns {@code false} if the property doesn't exist.
                 * @param propertyName the property to check
                 *  (may be a nested path and/or an indexed/mapped property)
                 * @return whether the property is readable
                 */
                // @ts-ignore
                isReadableProperty(propertyName: java.lang.String | string): boolean
                /**
                 * Determine whether the specified property is writable.
                 * <p>Returns {@code false} if the property doesn't exist.
                 * @param propertyName the property to check
                 *  (may be a nested path and/or an indexed/mapped property)
                 * @return whether the property is writable
                 */
                // @ts-ignore
                isWritableProperty(propertyName: java.lang.String | string): boolean
                /**
                 * Determine the property type for the specified property,
                 * either checking the property descriptor or checking the value
                 * in case of an indexed or mapped element.
                 * @param propertyName the property to check
                 *  (may be a nested path and/or an indexed/mapped property)
                 * @return the property type for the particular property,
                 *  or {#code null} if not determinable
                 * @throws PropertyAccessException if the property was valid but the
                 *  accessor method failed
                 */
                // @ts-ignore
                getPropertyType(propertyName: java.lang.String | string): java.lang.Class<any>
                /**
                 * Return a type descriptor for the specified property:
                 * preferably from the read method, falling back to the write method.
                 * @param propertyName the property to check
                 *  (may be a nested path and/or an indexed/mapped property)
                 * @return the property type for the particular property,
                 *  or {#code null} if not determinable
                 * @throws PropertyAccessException if the property was valid but the
                 *  accessor method failed
                 */
                // @ts-ignore
                getPropertyTypeDescriptor(propertyName: java.lang.String | string): TypeDescriptor
                /**
                 * Get the current value of the specified property.
                 * @param propertyName the name of the property to get the value of
                 *  (may be a nested path and/or an indexed/mapped property)
                 * @return the value of the property
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't readable
                 * @throws PropertyAccessException if the property was valid but the
                 *  accessor method failed
                 */
                // @ts-ignore
                getPropertyValue(propertyName: java.lang.String | string): any
                /**
                 * Set the specified value as current property value.
                 * @param propertyName the name of the property to set the value of
                 *  (may be a nested path and/or an indexed/mapped property)
                 * @param value the new value
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't writable
                 * @throws PropertyAccessException if the property was valid but the
                 *  accessor method failed or a type mismatch occurred
                 */
                // @ts-ignore
                setPropertyValue(propertyName: java.lang.String | string, value: java.lang.Object | any): void
                /**
                 * Set the specified value as current property value.
                 * @param pv an object containing the new property value
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't writable
                 * @throws PropertyAccessException if the property was valid but the
                 *  accessor method failed or a type mismatch occurred
                 */
                // @ts-ignore
                setPropertyValue(pv: org.springframework.beans.PropertyValue): void
                /**
                 * Perform a batch update from a Map.
                 * <p>Bulk updates from PropertyValues are more powerful: This method is
                 * provided for convenience. Behavior will be identical to that of
                 * the {@link #setPropertyValues(PropertyValues)} method.
                 * @param map a Map to take properties from. Contains property value objects,
                 *  keyed by property name
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't writable
                 * @throws PropertyBatchUpdateException if one or more PropertyAccessExceptions
                 *  occurred for specific properties during the batch update. This exception bundles
                 *  all individual PropertyAccessExceptions. All other properties will have been
                 *  successfully updated.
                 */
                // @ts-ignore
                setPropertyValues(map: java.util.Map<any, any>): void
                /**
                 * The preferred way to perform a batch update.
                 * <p>Note that performing a batch update differs from performing a single update,
                 * in that an implementation of this class will continue to update properties
                 * if a <b>recoverable</b> error (such as a type mismatch, but <b>not</b> an
                 * invalid field name or the like) is encountered, throwing a
                 * {@link PropertyBatchUpdateException} containing all the individual errors.
                 * This exception can be examined later to see all binding errors.
                 * Properties that were successfully updated remain changed.
                 * <p>Does not allow unknown fields or invalid fields.
                 * @param pvs a PropertyValues to set on the target object
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't writable
                 * @throws PropertyBatchUpdateException if one or more PropertyAccessExceptions
                 *  occurred for specific properties during the batch update. This exception bundles
                 *  all individual PropertyAccessExceptions. All other properties will have been
                 *  successfully updated.
                 * @see #setPropertyValues(PropertyValues, boolean, boolean)
                 */
                // @ts-ignore
                setPropertyValues(pvs: org.springframework.beans.PropertyValues): void
                /**
                 * Perform a batch update with more control over behavior.
                 * <p>Note that performing a batch update differs from performing a single update,
                 * in that an implementation of this class will continue to update properties
                 * if a <b>recoverable</b> error (such as a type mismatch, but <b>not</b> an
                 * invalid field name or the like) is encountered, throwing a
                 * {@link PropertyBatchUpdateException} containing all the individual errors.
                 * This exception can be examined later to see all binding errors.
                 * Properties that were successfully updated remain changed.
                 * @param pvs a PropertyValues to set on the target object
                 * @param ignoreUnknown should we ignore unknown properties (not found in the bean)
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't writable
                 * @throws PropertyBatchUpdateException if one or more PropertyAccessExceptions
                 *  occurred for specific properties during the batch update. This exception bundles
                 *  all individual PropertyAccessExceptions. All other properties will have been
                 *  successfully updated.
                 * @see #setPropertyValues(PropertyValues, boolean, boolean)
                 */
                // @ts-ignore
                setPropertyValues(pvs: org.springframework.beans.PropertyValues, ignoreUnknown: boolean): void
                /**
                 * Perform a batch update with full control over behavior.
                 * <p>Note that performing a batch update differs from performing a single update,
                 * in that an implementation of this class will continue to update properties
                 * if a <b>recoverable</b> error (such as a type mismatch, but <b>not</b> an
                 * invalid field name or the like) is encountered, throwing a
                 * {@link PropertyBatchUpdateException} containing all the individual errors.
                 * This exception can be examined later to see all binding errors.
                 * Properties that were successfully updated remain changed.
                 * @param pvs a PropertyValues to set on the target object
                 * @param ignoreUnknown should we ignore unknown properties (not found in the bean)
                 * @param ignoreInvalid should we ignore invalid properties (found but not accessible)
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't writable
                 * @throws PropertyBatchUpdateException if one or more PropertyAccessExceptions
                 *  occurred for specific properties during the batch update. This exception bundles
                 *  all individual PropertyAccessExceptions. All other properties will have been
                 *  successfully updated.
                 */
                // @ts-ignore
                setPropertyValues(pvs: org.springframework.beans.PropertyValues, ignoreUnknown: boolean, ignoreInvalid: boolean): void
            }
        }
    }
}

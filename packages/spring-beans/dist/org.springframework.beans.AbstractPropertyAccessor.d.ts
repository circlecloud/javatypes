declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Abstract implementation of the {@link PropertyAccessor} interface.
             * Provides base implementations of all convenience methods, with the
             * implementation of actual property access left to subclasses.
             * @author Juergen Hoeller
             * @author Stephane Nicoll
             * @since 2.0
             * @see #getPropertyValue
             * @see #setPropertyValue
             */
            // @ts-ignore
            class AbstractPropertyAccessor extends org.springframework.beans.TypeConverterSupport implements org.springframework.beans.ConfigurablePropertyAccessor {
                // @ts-ignore
                constructor()
                // @ts-ignore
                setExtractOldValueForEditor(extractOldValueForEditor: boolean): void
                // @ts-ignore
                isExtractOldValueForEditor(): boolean
                // @ts-ignore
                setAutoGrowNestedPaths(autoGrowNestedPaths: boolean): void
                // @ts-ignore
                isAutoGrowNestedPaths(): boolean
                // @ts-ignore
                setPropertyValue(pv: org.springframework.beans.PropertyValue): void
                // @ts-ignore
                setPropertyValues(map: java.util.Map<any, ?>): void
                // @ts-ignore
                setPropertyValues(pvs: org.springframework.beans.PropertyValues): void
                // @ts-ignore
                setPropertyValues(pvs: org.springframework.beans.PropertyValues, ignoreUnknown: boolean): void
                // @ts-ignore
                setPropertyValues(pvs: org.springframework.beans.PropertyValues, ignoreUnknown: boolean, ignoreInvalid: boolean): void
                // @ts-ignore
                getPropertyType(propertyPath: string): java.lang.Class<?>
                /**
                 * Actually get the value of a property.
                 * @param propertyName name of the property to get the value of
                 * @return the value of the property
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't readable
                 * @throws PropertyAccessException if the property was valid but the
                 *  accessor method failed
                 */
                // @ts-ignore
                abstract getPropertyValue(propertyName: string): java.lang.Object
                /**
                 * Actually set a property value.
                 * @param propertyName name of the property to set value of
                 * @param value the new value
                 * @throws InvalidPropertyException if there is no such property or
                 *  if the property isn't writable
                 * @throws PropertyAccessException if the property was valid but the
                 *  accessor method failed or a type mismatch occurred
                 */
                // @ts-ignore
                abstract setPropertyValue(propertyName: string, value: any): void
            }
        }
    }
}

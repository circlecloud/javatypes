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
            abstract class AbstractPropertyAccessor extends org.springframework.beans.TypeConverterSupport implements org.springframework.beans.ConfigurablePropertyAccessor {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public setExtractOldValueForEditor(extractOldValueForEditor: boolean): void
                // @ts-ignore
                public isExtractOldValueForEditor(): boolean
                // @ts-ignore
                public setAutoGrowNestedPaths(autoGrowNestedPaths: boolean): void
                // @ts-ignore
                public isAutoGrowNestedPaths(): boolean
                // @ts-ignore
                public setPropertyValue(pv: org.springframework.beans.PropertyValue): void
                // @ts-ignore
                public setPropertyValues(map: java.util.Map<any, any>): void
                // @ts-ignore
                public setPropertyValues(pvs: org.springframework.beans.PropertyValues): void
                // @ts-ignore
                public setPropertyValues(pvs: org.springframework.beans.PropertyValues, ignoreUnknown: boolean): void
                // @ts-ignore
                public setPropertyValues(pvs: org.springframework.beans.PropertyValues, ignoreUnknown: boolean, ignoreInvalid: boolean): void
                // @ts-ignore
                public getPropertyType(propertyPath: java.lang.String | string): java.lang.Class<any>
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
                public abstract getPropertyValue(propertyName: java.lang.String | string): any
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
                public abstract setPropertyValue(propertyName: java.lang.String | string, value: java.lang.Object | any): void
            }
        }
    }
}

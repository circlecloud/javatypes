declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * The default implementation of the {@link PropertyValues} interface.
             * Allows simple manipulation of properties, and provides constructors
             * to support deep copy and construction from a Map.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @since 13 May 2001
             */
            // @ts-ignore
            class MutablePropertyValues extends java.lang.Object implements org.springframework.beans.PropertyValues, java.io.Serializable {
                /**
                 * Creates a new empty MutablePropertyValues object.
                 * <p>Property values can be added with the {@code add} method.
                 * @see #add(String, Object)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Deep copy constructor. Guarantees PropertyValue references
                 * are independent, although it can't deep copy objects currently
                 * referenced by individual PropertyValue objects.
                 * @param original the PropertyValues to copy
                 * @see #addPropertyValues(PropertyValues)
                 */
                // @ts-ignore
                constructor(original: org.springframework.beans.PropertyValues)
                /**
                 * Construct a new MutablePropertyValues object from a Map.
                 * @param original a Map with property values keyed by property name Strings
                 * @see #addPropertyValues(Map)
                 */
                // @ts-ignore
                constructor(original: java.util.Map<any, any>)
                /**
                 * Construct a new MutablePropertyValues object using the given List of
                 * PropertyValue objects as-is.
                 * <p>This is a constructor for advanced usage scenarios.
                 * It is not intended for typical programmatic use.
                 * @param propertyValueList a List of PropertyValue objects
                 */
                // @ts-ignore
                constructor(propertyValueList: java.util.List<org.springframework.beans.PropertyValue> | Array<org.springframework.beans.PropertyValue>)
                /**
                 * Return the underlying List of PropertyValue objects in its raw form.
                 * The returned List can be modified directly, although this is not recommended.
                 * <p>This is an accessor for optimized access to all PropertyValue objects.
                 * It is not intended for typical programmatic use.
                 */
                // @ts-ignore
                public getPropertyValueList(): Array<org.springframework.beans.PropertyValue>
                /**
                 * Return the number of PropertyValue entries in the list.
                 */
                // @ts-ignore
                public size(): number /*int*/
                /**
                 * Copy all given PropertyValues into this object. Guarantees PropertyValue
                 * references are independent, although it can't deep copy objects currently
                 * referenced by individual PropertyValue objects.
                 * @param other the PropertyValues to copy
                 * @return this in order to allow for adding multiple property values in a chain
                 */
                // @ts-ignore
                public addPropertyValues(other: org.springframework.beans.PropertyValues): org.springframework.beans.MutablePropertyValues
                /**
                 * Add all property values from the given Map.
                 * @param other a Map with property values keyed by property name,
                 *  which must be a String
                 * @return this in order to allow for adding multiple property values in a chain
                 */
                // @ts-ignore
                public addPropertyValues(other: java.util.Map<any, any>): org.springframework.beans.MutablePropertyValues
                /**
                 * Add a PropertyValue object, replacing any existing one for the
                 * corresponding property or getting merged with it (if applicable).
                 * @param pv the PropertyValue object to add
                 * @return this in order to allow for adding multiple property values in a chain
                 */
                // @ts-ignore
                public addPropertyValue(pv: org.springframework.beans.PropertyValue): org.springframework.beans.MutablePropertyValues
                /**
                 * Overloaded version of {@code addPropertyValue} that takes
                 * a property name and a property value.
                 * <p>Note: As of Spring 3.0, we recommend using the more concise
                 * and chaining-capable variant {@link #add}.
                 * @param propertyName name of the property
                 * @param propertyValue value of the property
                 * @see #addPropertyValue(PropertyValue)
                 */
                // @ts-ignore
                public addPropertyValue(propertyName: java.lang.String | string, propertyValue: java.lang.Object | any): void
                /**
                 * Add a PropertyValue object, replacing any existing one for the
                 * corresponding property or getting merged with it (if applicable).
                 * @param propertyName name of the property
                 * @param propertyValue value of the property
                 * @return this in order to allow for adding multiple property values in a chain
                 */
                // @ts-ignore
                public add(propertyName: java.lang.String | string, propertyValue: java.lang.Object | any): org.springframework.beans.MutablePropertyValues
                /**
                 * Modify a PropertyValue object held in this object.
                 * Indexed from 0.
                 */
                // @ts-ignore
                public setPropertyValueAt(pv: org.springframework.beans.PropertyValue, i: number /*int*/): void
                /**
                 * Remove the given PropertyValue, if contained.
                 * @param pv the PropertyValue to remove
                 */
                // @ts-ignore
                public removePropertyValue(pv: org.springframework.beans.PropertyValue): void
                /**
                 * Overloaded version of {@code removePropertyValue} that takes a property name.
                 * @param propertyName name of the property
                 * @see #removePropertyValue(PropertyValue)
                 */
                // @ts-ignore
                public removePropertyValue(propertyName: java.lang.String | string): void
                // @ts-ignore
                public iterator(): java.util.Iterator<org.springframework.beans.PropertyValue>
                // @ts-ignore
                public spliterator(): java.util.Spliterator<org.springframework.beans.PropertyValue>
                // @ts-ignore
                public stream(): java.util.stream.Stream<org.springframework.beans.PropertyValue>
                // @ts-ignore
                public getPropertyValues(): org.springframework.beans.PropertyValue[]
                // @ts-ignore
                public getPropertyValue(propertyName: java.lang.String | string): org.springframework.beans.PropertyValue
                /**
                 * Get the raw property value, if any.
                 * @param propertyName the name to search for
                 * @return the raw property value, or {#code null} if none found
                 * @since 4.0
                 * @see #getPropertyValue(String)
                 * @see PropertyValue#getValue()
                 */
                // @ts-ignore
                public get(propertyName: java.lang.String | string): any
                // @ts-ignore
                public changesSince(old: org.springframework.beans.PropertyValues): org.springframework.beans.PropertyValues
                // @ts-ignore
                public contains(propertyName: java.lang.String | string): boolean
                // @ts-ignore
                public isEmpty(): boolean
                /**
                 * Register the specified property as "processed" in the sense
                 * of some processor calling the corresponding setter method
                 * outside of the PropertyValue(s) mechanism.
                 * <p>This will lead to {@code true} being returned from
                 * a {@link #contains} call for the specified property.
                 * @param propertyName the name of the property.
                 */
                // @ts-ignore
                public registerProcessedProperty(propertyName: java.lang.String | string): void
                /**
                 * Clear the "processed" registration of the given property, if any.
                 * @since 3.2.13
                 */
                // @ts-ignore
                public clearProcessedProperty(propertyName: java.lang.String | string): void
                /**
                 * Mark this holder as containing converted values only
                 * (i.e. no runtime resolution needed anymore).
                 */
                // @ts-ignore
                public setConverted(): void
                /**
                 * Return whether this holder contains converted values only ({@code true}),
                 * or whether the values still need to be converted ({@code false}).
                 */
                // @ts-ignore
                public isConverted(): boolean
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

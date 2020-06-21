declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Holder containing one or more {@link PropertyValue} objects,
             * typically comprising one update for a specific target bean.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 13 May 2001
             * @see PropertyValue
             */
            // @ts-ignore
            interface PropertyValues extends java.lang.Iterable<org.springframework.beans.PropertyValue> {
                /**
                 * Return an {@link Iterator} over the property values.
                 * @since 5.1
                 */
                // @ts-ignore
                iterator(): java.util.Iterator<org.springframework.beans.PropertyValue>
                /**
                 * Return a {@link Spliterator} over the property values.
                 * @since 5.1
                 */
                // @ts-ignore
                spliterator(): java.util.Spliterator<org.springframework.beans.PropertyValue>
                /**
                 * Return a sequential {@link Stream} containing the property values.
                 * @since 5.1
                 */
                // @ts-ignore
                stream(): java.util.stream.Stream<org.springframework.beans.PropertyValue>
                /**
                 * Return an array of the PropertyValue objects held in this object.
                 */
                // @ts-ignore
                getPropertyValues(): org.springframework.beans.PropertyValue[]
                /**
                 * Return the property value with the given name, if any.
                 * @param propertyName the name to search for
                 * @return the property value, or {#code null} if none
                 */
                // @ts-ignore
                getPropertyValue(propertyName: java.lang.String | string): org.springframework.beans.PropertyValue
                /**
                 * Return the changes since the previous PropertyValues.
                 * Subclasses should also override {@code equals}.
                 * @param old the old property values
                 * @return the updated or new properties.
                 *  Return empty PropertyValues if there are no changes.
                 * @see Object#equals
                 */
                // @ts-ignore
                changesSince(old: org.springframework.beans.PropertyValues): org.springframework.beans.PropertyValues
                /**
                 * Is there a property value (or other processing entry) for this property?
                 * @param propertyName the name of the property we're interested in
                 * @return whether there is a property value for this property
                 */
                // @ts-ignore
                contains(propertyName: java.lang.String | string): boolean
                /**
                 * Does this holder not contain any PropertyValue objects at all?
                 */
                // @ts-ignore
                isEmpty(): boolean
            }
        }
    }
}

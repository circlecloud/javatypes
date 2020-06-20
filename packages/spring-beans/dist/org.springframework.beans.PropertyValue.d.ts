declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Object to hold information and value for an individual bean property.
             * Using an object here, rather than just storing all properties in
             * a map keyed by property name, allows for more flexibility, and the
             * ability to handle indexed properties etc in an optimized way.
             * <p>Note that the value doesn't need to be the final required type:
             * A {@link BeanWrapper} implementation should handle any necessary conversion,
             * as this object doesn't know anything about the objects it will be applied to.
             * @author Rod Johnson
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @since 13 May 2001
             * @see PropertyValues
             * @see BeanWrapper
             */
            // @ts-ignore
            class PropertyValue extends org.springframework.beans.BeanMetadataAttributeAccessor implements java.io.Serializable {
                /**
                 * Create a new PropertyValue instance.
                 * @param name the name of the property (never {#code null})
                 * @param value the value of the property (possibly before type conversion)
                 */
                // @ts-ignore
                constructor(name: string, value: any)
                /**
                 * Copy constructor.
                 * @param original the PropertyValue to copy (never {#code null})
                 */
                // @ts-ignore
                constructor(original: org.springframework.beans.PropertyValue)
                /**
                 * Constructor that exposes a new value for an original value holder.
                 * The original holder will be exposed as source of the new holder.
                 * @param original the PropertyValue to link to (never {#code null})
                 * @param newValue the new value to apply
                 */
                // @ts-ignore
                constructor(original: org.springframework.beans.PropertyValue, newValue: any)
                /**
                 * Return the name of the property.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Return the value of the property.
                 * <p>Note that type conversion will <i>not</i> have occurred here.
                 * It is the responsibility of the BeanWrapper implementation to
                 * perform type conversion.
                 */
                // @ts-ignore
                getValue(): java.lang.Object
                /**
                 * Return the original PropertyValue instance for this value holder.
                 * @return the original PropertyValue (either a source of this
                 *  value holder or this value holder itself).
                 */
                // @ts-ignore
                getOriginalPropertyValue(): org.springframework.beans.PropertyValue
                /**
                 * Set whether this is an optional value, that is, to be ignored
                 * when no corresponding property exists on the target class.
                 * @since 3.0
                 */
                // @ts-ignore
                setOptional(optional: boolean): void
                /**
                 * Return whether this is an optional value, that is, to be ignored
                 * when no corresponding property exists on the target class.
                 * @since 3.0
                 */
                // @ts-ignore
                isOptional(): boolean
                /**
                 * Return whether this holder contains a converted value already ({@code true}),
                 * or whether the value still needs to be converted ({@code false}).
                 */
                // @ts-ignore
                isConverted(): boolean
                /**
                 * Set the converted value of this property value,
                 * after processed type conversion.
                 */
                // @ts-ignore
                setConvertedValue(value: any): void
                /**
                 * Return the converted value of this property value,
                 * after processed type conversion.
                 */
                // @ts-ignore
                getConvertedValue(): java.lang.Object
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}

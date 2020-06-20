declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Holder for a key-value style attribute that is part of a bean definition.
             * Keeps track of the definition source in addition to the key-value pair.
             * @author Juergen Hoeller
             * @since 2.5
             */
            // @ts-ignore
            class BeanMetadataAttribute extends java.lang.Object implements org.springframework.beans.BeanMetadataElement {
                /**
                 * Create a new AttributeValue instance.
                 * @param name the name of the attribute (never {#code null})
                 * @param value the value of the attribute (possibly before type conversion)
                 */
                // @ts-ignore
                constructor(name: string, value: any)
                /**
                 * Return the name of the attribute.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Return the value of the attribute.
                 */
                // @ts-ignore
                getValue(): java.lang.Object
                /**
                 * Set the configuration source {@code Object} for this metadata element.
                 * <p>The exact type of the object will depend on the configuration mechanism used.
                 */
                // @ts-ignore
                setSource(source: any): void
                // @ts-ignore
                getSource(): java.lang.Object
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

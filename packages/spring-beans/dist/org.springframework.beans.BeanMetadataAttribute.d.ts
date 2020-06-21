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
                constructor(name: java.lang.String | string, value: java.lang.Object | any)
                /**
                 * Return the name of the attribute.
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Return the value of the attribute.
                 */
                // @ts-ignore
                public getValue(): any
                /**
                 * Set the configuration source {@code Object} for this metadata element.
                 * <p>The exact type of the object will depend on the configuration mechanism used.
                 */
                // @ts-ignore
                public setSource(source: java.lang.Object | any): void
                // @ts-ignore
                public getSource(): any
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

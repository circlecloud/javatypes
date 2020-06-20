declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Extension of {@link org.springframework.core.AttributeAccessorSupport},
             * holding attributes as {@link BeanMetadataAttribute} objects in order
             * to keep track of the definition source.
             * @author Juergen Hoeller
             * @since 2.5
             */
            // @ts-ignore
            class BeanMetadataAttributeAccessor extends AttributeAccessorSupport implements org.springframework.beans.BeanMetadataElement {
                // @ts-ignore
                constructor()
                /**
                 * Set the configuration source {@code Object} for this metadata element.
                 * <p>The exact type of the object will depend on the configuration mechanism used.
                 */
                // @ts-ignore
                setSource(source: any): void
                // @ts-ignore
                getSource(): java.lang.Object
                /**
                 * Add the given BeanMetadataAttribute to this accessor's set of attributes.
                 * @param attribute the BeanMetadataAttribute object to register
                 */
                // @ts-ignore
                addMetadataAttribute(attribute: org.springframework.beans.BeanMetadataAttribute): void
                /**
                 * Look up the given BeanMetadataAttribute in this accessor's set of attributes.
                 * @param name the name of the attribute
                 * @return the corresponding BeanMetadataAttribute object,
                 *  or {#code null} if no such attribute defined
                 */
                // @ts-ignore
                getMetadataAttribute(name: string): org.springframework.beans.BeanMetadataAttribute
                // @ts-ignore
                setAttribute(name: string, value: any): void
                // @ts-ignore
                getAttribute(name: string): java.lang.Object
                // @ts-ignore
                removeAttribute(name: string): java.lang.Object
            }
        }
    }
}

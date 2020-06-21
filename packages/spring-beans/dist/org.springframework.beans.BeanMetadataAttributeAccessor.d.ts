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
                public setSource(source: java.lang.Object | any): void
                // @ts-ignore
                public getSource(): any
                /**
                 * Add the given BeanMetadataAttribute to this accessor's set of attributes.
                 * @param attribute the BeanMetadataAttribute object to register
                 */
                // @ts-ignore
                public addMetadataAttribute(attribute: org.springframework.beans.BeanMetadataAttribute): void
                /**
                 * Look up the given BeanMetadataAttribute in this accessor's set of attributes.
                 * @param name the name of the attribute
                 * @return the corresponding BeanMetadataAttribute object,
                 *  or {#code null} if no such attribute defined
                 */
                // @ts-ignore
                public getMetadataAttribute(name: java.lang.String | string): org.springframework.beans.BeanMetadataAttribute
                // @ts-ignore
                public setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                // @ts-ignore
                public getAttribute(name: java.lang.String | string): any
                // @ts-ignore
                public removeAttribute(name: java.lang.String | string): any
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Support class for {@link AttributeAccessor AttributeAccessors}, providing
             * a base implementation of all methods. To be extended by subclasses.
             * <p>{@link Serializable} if subclasses and all attribute values are {@link Serializable}.
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            abstract class AttributeAccessorSupport extends java.lang.Object implements org.springframework.core.AttributeAccessor, java.io.Serializable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                // @ts-ignore
                public getAttribute(name: java.lang.String | string): any
                // @ts-ignore
                public removeAttribute(name: java.lang.String | string): any
                // @ts-ignore
                public hasAttribute(name: java.lang.String | string): boolean
                // @ts-ignore
                public attributeNames(): string[]
                /**
                 * Copy the attributes from the supplied AttributeAccessor to this accessor.
                 * @param source the AttributeAccessor to copy from
                 */
                // @ts-ignore
                copyAttributesFrom(source: org.springframework.core.AttributeAccessor): void
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}

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
            class AttributeAccessorSupport extends java.lang.Object implements org.springframework.core.AttributeAccessor, java.io.Serializable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                setAttribute(name: string, value: any): void
                // @ts-ignore
                getAttribute(name: string): java.lang.Object
                // @ts-ignore
                removeAttribute(name: string): java.lang.Object
                // @ts-ignore
                hasAttribute(name: string): boolean
                // @ts-ignore
                attributeNames(): java.lang.String[]
                /**
                 * Copy the attributes from the supplied AttributeAccessor to this accessor.
                 * @param source the AttributeAccessor to copy from
                 */
                // @ts-ignore
                copyAttributesFrom(source: org.springframework.core.AttributeAccessor): void
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}

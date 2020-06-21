declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Interface defining a generic contract for attaching and accessing metadata
             * to/from arbitrary objects.
             * @author Rob Harrop
             * @since 2.0
             */
            // @ts-ignore
            interface AttributeAccessor {
                /**
                 * Set the attribute defined by {@code name} to the supplied {@code value}.
                 * If {@code value} is {@code null}, the attribute is {@link #removeAttribute removed}.
                 * <p>In general, users should take care to prevent overlaps with other
                 * metadata attributes by using fully-qualified names, perhaps using
                 * class or package names as prefix.
                 * @param name the unique attribute key
                 * @param value the attribute value to be attached
                 */
                // @ts-ignore
                setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                /**
                 * Get the value of the attribute identified by {@code name}.
                 * Return {@code null} if the attribute doesn't exist.
                 * @param name the unique attribute key
                 * @return the current value of the attribute, if any
                 */
                // @ts-ignore
                getAttribute(name: java.lang.String | string): any
                /**
                 * Remove the attribute identified by {@code name} and return its value.
                 * Return {@code null} if no attribute under {@code name} is found.
                 * @param name the unique attribute key
                 * @return the last value of the attribute, if any
                 */
                // @ts-ignore
                removeAttribute(name: java.lang.String | string): any
                /**
                 * Return {@code true} if the attribute identified by {@code name} exists.
                 * Otherwise return {@code false}.
                 * @param name the unique attribute key
                 */
                // @ts-ignore
                hasAttribute(name: java.lang.String | string): boolean
                /**
                 * Return the names of all attributes.
                 */
                // @ts-ignore
                attributeNames(): string[]
            }
        }
    }
}

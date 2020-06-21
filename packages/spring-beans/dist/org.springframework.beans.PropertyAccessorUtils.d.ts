declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Utility methods for classes that perform bean property access
             * according to the {@link PropertyAccessor} interface.
             * @author Juergen Hoeller
             * @since 1.2.6
             */
            // @ts-ignore
            abstract class PropertyAccessorUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Return the actual property name for the given property path.
                 * @param propertyPath the property path to determine the property name
                 *  for (can include property keys, for example for specifying a map entry)
                 * @return the actual property name, without any key elements
                 */
                // @ts-ignore
                public static getPropertyName(propertyPath: java.lang.String | string): string
                /**
                 * Check whether the given property path indicates an indexed or nested property.
                 * @param propertyPath the property path to check
                 * @return whether the path indicates an indexed or nested property
                 */
                // @ts-ignore
                public static isNestedOrIndexedProperty(propertyPath: java.lang.String | string): boolean
                /**
                 * Determine the first nested property separator in the
                 * given property path, ignoring dots in keys (like "map[my.key]").
                 * @param propertyPath the property path to check
                 * @return the index of the nested property separator, or -1 if none
                 */
                // @ts-ignore
                public static getFirstNestedPropertySeparatorIndex(propertyPath: java.lang.String | string): number /*int*/
                /**
                 * Determine the first nested property separator in the
                 * given property path, ignoring dots in keys (like "map[my.key]").
                 * @param propertyPath the property path to check
                 * @return the index of the nested property separator, or -1 if none
                 */
                // @ts-ignore
                public static getLastNestedPropertySeparatorIndex(propertyPath: java.lang.String | string): number /*int*/
                /**
                 * Determine whether the given registered path matches the given property path,
                 * either indicating the property itself or an indexed element of the property.
                 * @param propertyPath the property path (typically without index)
                 * @param registeredPath the registered path (potentially with index)
                 * @return whether the paths match
                 */
                // @ts-ignore
                public static matchesProperty(registeredPath: java.lang.String | string, propertyPath: java.lang.String | string): boolean
                /**
                 * Determine the canonical name for the given property path.
                 * Removes surrounding quotes from map keys:<br>
                 * {@code map['key']} -> {@code map[key]}<br>
                 * {@code map["key"]} -> {@code map[key]}
                 * @param propertyName the bean property path
                 * @return the canonical representation of the property path
                 */
                // @ts-ignore
                public static canonicalPropertyName(propertyName: java.lang.String | string): string
                /**
                 * Determine the canonical names for the given property paths.
                 * @param propertyNames the bean property paths (as array)
                 * @return the canonical representation of the property paths
                 *  (as array of the same size)
                 * @see #canonicalPropertyName(String)
                 */
                // @ts-ignore
                public static canonicalPropertyNames(propertyNames: java.lang.String[] | string[]): string[]
            }
        }
    }
}

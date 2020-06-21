declare namespace java {
    namespace util {
        namespace jar {
            /**
             * The Attributes class maps Manifest attribute names to associated string
             * values. Valid attribute names are case-insensitive, are restricted to
             * the ASCII characters in the set [0-9a-zA-Z_-], and cannot exceed 70
             * characters in length. Attribute values can contain any characters and
             * will be UTF8-encoded when written to the output stream.  See the
             * <a href="../../../../technotes/guides/jar/jar.html">JAR File Specification</a>
             * for more information about valid attribute names and values.
             * @author David Connelly
             * @see Manifest
             * @since 1.2
             */
            // @ts-ignore
            class Attributes extends java.lang.Object implements java.util.Map<java.lang.Object | any, java.lang.Object | any>, java.lang.Cloneable {
                /**
                 * Constructs a new, empty Attributes object with default size.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new, empty Attributes object with the specified
                 * initial size.
                 * @param size the initial number of attributes
                 */
                // @ts-ignore
                constructor(size: number /*int*/)
                /**
                 * Constructs a new Attributes object with the same attribute name-value
                 * mappings as in the specified Attributes.
                 * @param attr the specified Attributes
                 */
                // @ts-ignore
                constructor(attr: java.util.jar.Attributes)
                /**
                 * The attribute name-value mappings.
                 */
                // @ts-ignore
                map: java.util.Map<java.lang.Object | any, java.lang.Object | any>
                /**
                 * Returns the value of the specified attribute name, or null if the
                 * attribute name was not found.
                 * @param name the attribute name
                 * @return the value of the specified attribute name, or null if
                 *          not found.
                 */
                // @ts-ignore
                public get(name: java.lang.Object | any): any
                /**
                 * Returns the value of the specified attribute name, specified as
                 * a string, or null if the attribute was not found. The attribute
                 * name is case-insensitive.
                 * <p>
                 * This method is defined as:
                 * <pre>
                 * return (String)get(new Attributes.Name((String)name));
                 * </pre>
                 * @param name the attribute name as a string
                 * @return the String value of the specified attribute name, or null if
                 *          not found.
                 * @throws IllegalArgumentException if the attribute name is invalid
                 */
                // @ts-ignore
                public getValue(name: java.lang.String | string): string
                /**
                 * Returns the value of the specified Attributes.Name, or null if the
                 * attribute was not found.
                 * <p>
                 * This method is defined as:
                 * <pre>
                 * return (String)get(name);
                 * </pre>
                 * @param name the Attributes.Name object
                 * @return the String value of the specified Attribute.Name, or null if
                 *          not found.
                 */
                // @ts-ignore
                public getValue(name: java.util.jar.Attributes.Name): string
                /**
                 * Associates the specified value with the specified attribute name
                 * (key) in this Map. If the Map previously contained a mapping for
                 * the attribute name, the old value is replaced.
                 * @param name the attribute name
                 * @param value the attribute value
                 * @return the previous value of the attribute, or null if none
                 * @exception ClassCastException if the name is not a Attributes.Name
                 *             or the value is not a String
                 */
                // @ts-ignore
                public put(name: java.lang.Object | any, value: java.lang.Object | any): any
                /**
                 * Associates the specified value with the specified attribute name,
                 * specified as a String. The attributes name is case-insensitive.
                 * If the Map previously contained a mapping for the attribute name,
                 * the old value is replaced.
                 * <p>
                 * This method is defined as:
                 * <pre>
                 * return (String)put(new Attributes.Name(name), value);
                 * </pre>
                 * @param name the attribute name as a string
                 * @param value the attribute value
                 * @return the previous value of the attribute, or null if none
                 * @exception IllegalArgumentException if the attribute name is invalid
                 */
                // @ts-ignore
                public putValue(name: java.lang.String | string, value: java.lang.String | string): string
                /**
                 * Removes the attribute with the specified name (key) from this Map.
                 * Returns the previous attribute value, or null if none.
                 * @param name attribute name
                 * @return the previous value of the attribute, or null if none
                 */
                // @ts-ignore
                public remove(name: java.lang.Object | any): any
                /**
                 * Returns true if this Map maps one or more attribute names (keys)
                 * to the specified value.
                 * @param value the attribute value
                 * @return true if this Map maps one or more attribute names to
                 *          the specified value
                 */
                // @ts-ignore
                public containsValue(value: java.lang.Object | any): boolean
                /**
                 * Returns true if this Map contains the specified attribute name (key).
                 * @param name the attribute name
                 * @return true if this Map contains the specified attribute name
                 */
                // @ts-ignore
                public containsKey(name: java.lang.Object | any): boolean
                /**
                 * Copies all of the attribute name-value mappings from the specified
                 * Attributes to this Map. Duplicate mappings will be replaced.
                 * @param attr the Attributes to be stored in this map
                 * @exception ClassCastException if attr is not an Attributes
                 */
                // @ts-ignore
                public putAll(attr: java.util.Map<any, any>): void
                /**
                 * Removes all attributes from this Map.
                 */
                // @ts-ignore
                public clear(): void
                /**
                 * Returns the number of attributes in this Map.
                 */
                // @ts-ignore
                public size(): number /*int*/
                /**
                 * Returns true if this Map contains no attributes.
                 */
                // @ts-ignore
                public isEmpty(): boolean
                /**
                 * Returns a Set view of the attribute names (keys) contained in this Map.
                 */
                // @ts-ignore
                public keySet(): Array<java.lang.Object | any>
                /**
                 * Returns a Collection view of the attribute values contained in this Map.
                 */
                // @ts-ignore
                public values(): Array<java.lang.Object | any>
                /**
                 * Returns a Collection view of the attribute name-value mappings
                 * contained in this Map.
                 */
                // @ts-ignore
                public entrySet(): Array<java.util.Map.Entry<java.lang.Object | any, java.lang.Object | any>>
                /**
                 * Compares the specified Attributes object with this Map for equality.
                 * Returns true if the given object is also an instance of Attributes
                 * and the two Attributes objects represent the same mappings.
                 * @param o the Object to be compared
                 * @return true if the specified Object is equal to this Map
                 */
                // @ts-ignore
                public equals(o: java.lang.Object | any): boolean
                /**
                 * Returns the hash code value for this Map.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a copy of the Attributes, implemented as follows:
                 * <pre>
                 * public Object clone() { return new Attributes(this); }
                 * </pre>
                 * Since the attribute names and values are themselves immutable,
                 * the Attributes returned can be safely modified without affecting
                 * the original.
                 */
                // @ts-ignore
                public clone(): any
            }
        }
    }
}

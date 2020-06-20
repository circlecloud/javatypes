declare namespace java {
    namespace util {
        namespace AbstractMap {
            /**
             * An Entry maintaining an immutable key and value.  This class
             * does not support method <tt>setValue</tt>.  This class may be
             * convenient in methods that return thread-safe snapshots of
             * key-value mappings.
             * @since 1.6
             */
            // @ts-ignore
            class SimpleImmutableEntry<K, V> extends java.lang.Object implements java.util.Map.Entry<K, V>, java.io.Serializable {
                /**
                 * Creates an entry representing a mapping from the specified
                 * key to the specified value.
                 * @param key the key represented by this entry
                 * @param value the value represented by this entry
                 */
                // @ts-ignore
                constructor(key: K, value: V)
                /**
                 * Creates an entry representing the same mapping as the
                 * specified entry.
                 * @param entry the entry to copy
                 */
                // @ts-ignore
                constructor(entry: java.util.Map.Entry<K, V>)
                /**
                 * Returns the key corresponding to this entry.
                 * @return the key corresponding to this entry
                 */
                // @ts-ignore
                getKey(): K
                /**
                 * Returns the value corresponding to this entry.
                 * @return the value corresponding to this entry
                 */
                // @ts-ignore
                getValue(): V
                /**
                 * Replaces the value corresponding to this entry with the specified
                 * value (optional operation).  This implementation simply throws
                 * <tt>UnsupportedOperationException</tt>, as this class implements
                 * an <i>immutable</i> map entry.
                 * @param value new value to be stored in this entry
                 * @return (Does not return)
                 * @throws UnsupportedOperationException always
                 */
                // @ts-ignore
                setValue(value: V): V
                /**
                 * Compares the specified object with this entry for equality.
                 * Returns {@code true} if the given object is also a map entry and
                 * the two entries represent the same mapping.  More formally, two
                 * entries {@code e1} and {@code e2} represent the same mapping
                 * if<pre>
                 * (e1.getKey()==null ?
                 * e2.getKey()==null :
                 * e1.getKey().equals(e2.getKey()))
                 * &amp;&amp;
                 * (e1.getValue()==null ?
                 * e2.getValue()==null :
                 * e1.getValue().equals(e2.getValue()))</pre>
                 * This ensures that the {@code equals} method works properly across
                 * different implementations of the {@code Map.Entry} interface.
                 * @param o object to be compared for equality with this map entry
                 * @return {#code true} if the specified object is equal to this map
                 *          entry
                 * @see #hashCode
                 */
                // @ts-ignore
                equals(o: any): boolean
                /**
                 * Returns the hash code value for this map entry.  The hash code
                 * of a map entry {@code e} is defined to be: <pre>
                 * (e.getKey()==null   ? 0 : e.getKey().hashCode()) ^
                 * (e.getValue()==null ? 0 : e.getValue().hashCode())</pre>
                 * This ensures that {@code e1.equals(e2)} implies that
                 * {@code e1.hashCode()==e2.hashCode()} for any two Entries
                 * {@code e1} and {@code e2}, as required by the general
                 * contract of {@link Object#hashCode}.
                 * @return the hash code value for this map entry
                 * @see #equals
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a String representation of this map entry.  This
                 * implementation returns the string representation of this
                 * entry's key followed by the equals character ("<tt>=</tt>")
                 * followed by the string representation of this entry's value.
                 * @return a String representation of this map entry
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}

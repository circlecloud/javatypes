declare namespace java {
    namespace util {
        namespace jar {
            /**
             * The Manifest class is used to maintain Manifest entry names and their
             * associated Attributes. There are main Manifest Attributes as well as
             * per-entry Attributes. For information on the Manifest format, please
             * see the
             * <a href="../../../../technotes/guides/jar/jar.html">
             * Manifest format specification</a>.
             * @author David Connelly
             * @see Attributes
             * @since 1.2
             */
            // @ts-ignore
            class Manifest extends java.lang.Object implements java.lang.Cloneable {
                /**
                 * Constructs a new, empty Manifest.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new Manifest from the specified input stream.
                 * @param is the input stream containing manifest data
                 * @throws IOException if an I/O error has occurred
                 */
                // @ts-ignore
                constructor(jis: java.io.InputStream)
                /**
                 * Constructs a new Manifest that is a copy of the specified Manifest.
                 * @param man the Manifest to copy
                 */
                // @ts-ignore
                constructor(man: java.util.jar.Manifest)
                /**
                 * Returns the main Attributes for the Manifest.
                 * @return the main Attributes for the Manifest
                 */
                // @ts-ignore
                getMainAttributes(): java.util.jar.Attributes
                /**
                 * Returns a Map of the entries contained in this Manifest. Each entry
                 * is represented by a String name (key) and associated Attributes (value).
                 * The Map permits the {@code null} key, but no entry with a null key is
                 * created by {@link #read}, nor is such an entry written by using {@link
                 * #write}.
                 * @return a Map of the entries contained in this Manifest
                 */
                // @ts-ignore
                getEntries(): java.util.Map<java.lang.String, java.util.jar.Attributes>
                /**
                 * Returns the Attributes for the specified entry name.
                 * This method is defined as:
                 * <pre>
                 * return (Attributes)getEntries().get(name)
                 * </pre>
                 * Though {@code null} is a valid {@code name}, when
                 * {@code getAttributes(null)} is invoked on a {@code Manifest}
                 * obtained from a jar file, {@code null} will be returned.  While jar
                 * files themselves do not allow {@code null}-named attributes, it is
                 * possible to invoke {@link #getEntries} on a {@code Manifest}, and
                 * on that result, invoke {@code put} with a null key and an
                 * arbitrary value.  Subsequent invocations of
                 * {@code getAttributes(null)} will return the just-{@code put}
                 * value.
                 * <p>
                 * Note that this method does not return the manifest's main attributes;
                 * see {@link #getMainAttributes}.
                 * @param name entry name
                 * @return the Attributes for the specified entry name
                 */
                // @ts-ignore
                getAttributes(name: string): java.util.jar.Attributes
                /**
                 * Clears the main Attributes as well as the entries in this Manifest.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Writes the Manifest to the specified OutputStream.
                 * Attributes.Name.MANIFEST_VERSION must be set in
                 * MainAttributes prior to invoking this method.
                 * @param out the output stream
                 * @exception IOException if an I/O error has occurred
                 * @see #getMainAttributes
                 */
                // @ts-ignore
                write(out: java.io.OutputStream): void
                /**
                 * Reads the Manifest from the specified InputStream. The entry
                 * names and attributes read will be merged in with the current
                 * manifest entries.
                 * @param is the input stream
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                read(jis: java.io.InputStream): void
                /**
                 * Returns true if the specified Object is also a Manifest and has
                 * the same main Attributes and entries.
                 * @param o the object to be compared
                 * @return true if the specified Object is also a Manifest and has
                 *  the same main Attributes and entries
                 */
                // @ts-ignore
                equals(o: any): boolean
                /**
                 * Returns the hash code for this Manifest.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a shallow copy of this Manifest.  The shallow copy is
                 * implemented as follows:
                 * <pre>
                 * public Object clone() { return new Manifest(this); }
                 * </pre>
                 * @return a shallow copy of this Manifest
                 */
                // @ts-ignore
                clone(): java.lang.Object
            }
        }
    }
}

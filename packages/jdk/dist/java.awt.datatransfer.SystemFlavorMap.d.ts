declare namespace java {
    namespace awt {
        namespace datatransfer {
            /**
             * The SystemFlavorMap is a configurable map between "natives" (Strings), which
             * correspond to platform-specific data formats, and "flavors" (DataFlavors),
             * which correspond to platform-independent MIME types. This mapping is used
             * by the data transfer subsystem to transfer data between Java and native
             * applications, and between Java applications in separate VMs.
             * <p>
             * @since 1.2
             */
            // @ts-ignore
            class SystemFlavorMap extends java.lang.Object implements java.awt.datatransfer.FlavorMap, java.awt.datatransfer.FlavorTable {
                /**
                 * Returns the default FlavorMap for this thread's ClassLoader.
                 */
                // @ts-ignore
                getDefaultFlavorMap(): java.awt.datatransfer.FlavorMap
                /**
                 * Returns a <code>List</code> of <code>String</code> natives to which the
                 * specified <code>DataFlavor</code> can be translated by the data transfer
                 * subsystem. The <code>List</code> will be sorted from best native to
                 * worst. That is, the first native will best reflect data in the specified
                 * flavor to the underlying native platform.
                 * <p>
                 * If the specified <code>DataFlavor</code> is previously unknown to the
                 * data transfer subsystem and the data transfer subsystem is unable to
                 * translate this <code>DataFlavor</code> to any existing native, then
                 * invoking this method will establish a
                 * mapping in both directions between the specified <code>DataFlavor</code>
                 * and an encoded version of its MIME type as its native.
                 * @param flav the <code>DataFlavor</code> whose corresponding natives
                 *         should be returned. If <code>null</code> is specified, all
                 *         natives currently known to the data transfer subsystem are
                 *         returned in a non-deterministic order.
                 * @return a <code>java.util.List</code> of <code>java.lang.String</code>
                 *          objects which are platform-specific representations of platform-
                 *          specific data formats
                 * @see #encodeDataFlavor
                 * @since 1.4
                 */
                // @ts-ignore
                getNativesForFlavor(flav: java.awt.datatransfer.DataFlavor): java.util.List<java.lang.String>
                /**
                 * Returns a <code>List</code> of <code>DataFlavor</code>s to which the
                 * specified <code>String</code> native can be translated by the data
                 * transfer subsystem. The <code>List</code> will be sorted from best
                 * <code>DataFlavor</code> to worst. That is, the first
                 * <code>DataFlavor</code> will best reflect data in the specified
                 * native to a Java application.
                 * <p>
                 * If the specified native is previously unknown to the data transfer
                 * subsystem, and that native has been properly encoded, then invoking this
                 * method will establish a mapping in both directions between the specified
                 * native and a <code>DataFlavor</code> whose MIME type is a decoded
                 * version of the native.
                 * <p>
                 * If the specified native is not a properly encoded native and the
                 * mappings for this native have not been altered with
                 * <code>setFlavorsForNative</code>, then the contents of the
                 * <code>List</code> is platform dependent, but <code>null</code>
                 * cannot be returned.
                 * @param nat the native whose corresponding <code>DataFlavor</code>s
                 *         should be returned. If <code>null</code> is specified, all
                 *         <code>DataFlavor</code>s currently known to the data transfer
                 *         subsystem are returned in a non-deterministic order.
                 * @return a <code>java.util.List</code> of <code>DataFlavor</code>
                 *          objects into which platform-specific data in the specified,
                 *          platform-specific native can be translated
                 * @see #encodeJavaMIMEType
                 * @since 1.4
                 */
                // @ts-ignore
                getFlavorsForNative(nat: string): java.util.List<java.awt.datatransfer.DataFlavor>
                /**
                 * Returns a <code>Map</code> of the specified <code>DataFlavor</code>s to
                 * their most preferred <code>String</code> native. Each native value will
                 * be the same as the first native in the List returned by
                 * <code>getNativesForFlavor</code> for the specified flavor.
                 * <p>
                 * If a specified <code>DataFlavor</code> is previously unknown to the
                 * data transfer subsystem, then invoking this method will establish a
                 * mapping in both directions between the specified <code>DataFlavor</code>
                 * and an encoded version of its MIME type as its native.
                 * @param flavors an array of <code>DataFlavor</code>s which will be the
                 *         key set of the returned <code>Map</code>. If <code>null</code> is
                 *         specified, a mapping of all <code>DataFlavor</code>s known to the
                 *         data transfer subsystem to their most preferred
                 *         <code>String</code> natives will be returned.
                 * @return a <code>java.util.Map</code> of <code>DataFlavor</code>s to
                 *          <code>String</code> natives
                 * @see #getNativesForFlavor
                 * @see #encodeDataFlavor
                 */
                // @ts-ignore
                getNativesForFlavors(flavors: java.awt.datatransfer.DataFlavor[]): java.util.Map<java.awt.datatransfer.DataFlavor, java.lang.String>
                /**
                 * Returns a <code>Map</code> of the specified <code>String</code> natives
                 * to their most preferred <code>DataFlavor</code>. Each
                 * <code>DataFlavor</code> value will be the same as the first
                 * <code>DataFlavor</code> in the List returned by
                 * <code>getFlavorsForNative</code> for the specified native.
                 * <p>
                 * If a specified native is previously unknown to the data transfer
                 * subsystem, and that native has been properly encoded, then invoking this
                 * method will establish a mapping in both directions between the specified
                 * native and a <code>DataFlavor</code> whose MIME type is a decoded
                 * version of the native.
                 * @param natives an array of <code>String</code>s which will be the
                 *         key set of the returned <code>Map</code>. If <code>null</code> is
                 *         specified, a mapping of all supported <code>String</code> natives
                 *         to their most preferred <code>DataFlavor</code>s will be
                 *         returned.
                 * @return a <code>java.util.Map</code> of <code>String</code> natives to
                 *          <code>DataFlavor</code>s
                 * @see #getFlavorsForNative
                 * @see #encodeJavaMIMEType
                 */
                // @ts-ignore
                getFlavorsForNatives(natives: string[]): java.util.Map<java.lang.String, java.awt.datatransfer.DataFlavor>
                /**
                 * Adds a mapping from the specified <code>DataFlavor</code> (and all
                 * <code>DataFlavor</code>s equal to the specified <code>DataFlavor</code>)
                 * to the specified <code>String</code> native.
                 * Unlike <code>getNativesForFlavor</code>, the mapping will only be
                 * established in one direction, and the native will not be encoded. To
                 * establish a two-way mapping, call
                 * <code>addFlavorForUnencodedNative</code> as well. The new mapping will
                 * be of lower priority than any existing mapping.
                 * This method has no effect if a mapping from the specified or equal
                 * <code>DataFlavor</code> to the specified <code>String</code> native
                 * already exists.
                 * @param flav the <code>DataFlavor</code> key for the mapping
                 * @param nat the <code>String</code> native value for the mapping
                 * @throws NullPointerException if flav or nat is <code>null</code>
                 * @see #addFlavorForUnencodedNative
                 * @since 1.4
                 */
                // @ts-ignore
                addUnencodedNativeForFlavor(flav: java.awt.datatransfer.DataFlavor, nat: string): void
                /**
                 * Discards the current mappings for the specified <code>DataFlavor</code>
                 * and all <code>DataFlavor</code>s equal to the specified
                 * <code>DataFlavor</code>, and creates new mappings to the
                 * specified <code>String</code> natives.
                 * Unlike <code>getNativesForFlavor</code>, the mappings will only be
                 * established in one direction, and the natives will not be encoded. To
                 * establish two-way mappings, call <code>setFlavorsForNative</code>
                 * as well. The first native in the array will represent the highest
                 * priority mapping. Subsequent natives will represent mappings of
                 * decreasing priority.
                 * <p>
                 * If the array contains several elements that reference equal
                 * <code>String</code> natives, this method will establish new mappings
                 * for the first of those elements and ignore the rest of them.
                 * <p>
                 * It is recommended that client code not reset mappings established by the
                 * data transfer subsystem. This method should only be used for
                 * application-level mappings.
                 * @param flav the <code>DataFlavor</code> key for the mappings
                 * @param natives the <code>String</code> native values for the mappings
                 * @throws NullPointerException if flav or natives is <code>null</code>
                 *          or if natives contains <code>null</code> elements
                 * @see #setFlavorsForNative
                 * @since 1.4
                 */
                // @ts-ignore
                setNativesForFlavor(flav: java.awt.datatransfer.DataFlavor, natives: string[]): void
                /**
                 * Adds a mapping from a single <code>String</code> native to a single
                 * <code>DataFlavor</code>. Unlike <code>getFlavorsForNative</code>, the
                 * mapping will only be established in one direction, and the native will
                 * not be encoded. To establish a two-way mapping, call
                 * <code>addUnencodedNativeForFlavor</code> as well. The new mapping will
                 * be of lower priority than any existing mapping.
                 * This method has no effect if a mapping from the specified
                 * <code>String</code> native to the specified or equal
                 * <code>DataFlavor</code> already exists.
                 * @param nat the <code>String</code> native key for the mapping
                 * @param flav the <code>DataFlavor</code> value for the mapping
                 * @throws NullPointerException if nat or flav is <code>null</code>
                 * @see #addUnencodedNativeForFlavor
                 * @since 1.4
                 */
                // @ts-ignore
                addFlavorForUnencodedNative(nat: string, flav: java.awt.datatransfer.DataFlavor): void
                /**
                 * Discards the current mappings for the specified <code>String</code>
                 * native, and creates new mappings to the specified
                 * <code>DataFlavor</code>s. Unlike <code>getFlavorsForNative</code>, the
                 * mappings will only be established in one direction, and the natives need
                 * not be encoded. To establish two-way mappings, call
                 * <code>setNativesForFlavor</code> as well. The first
                 * <code>DataFlavor</code> in the array will represent the highest priority
                 * mapping. Subsequent <code>DataFlavor</code>s will represent mappings of
                 * decreasing priority.
                 * <p>
                 * If the array contains several elements that reference equal
                 * <code>DataFlavor</code>s, this method will establish new mappings
                 * for the first of those elements and ignore the rest of them.
                 * <p>
                 * It is recommended that client code not reset mappings established by the
                 * data transfer subsystem. This method should only be used for
                 * application-level mappings.
                 * @param nat the <code>String</code> native key for the mappings
                 * @param flavors the <code>DataFlavor</code> values for the mappings
                 * @throws NullPointerException if nat or flavors is <code>null</code>
                 *          or if flavors contains <code>null</code> elements
                 * @see #setNativesForFlavor
                 * @since 1.4
                 */
                // @ts-ignore
                setFlavorsForNative(nat: string, flavors: java.awt.datatransfer.DataFlavor[]): void
                /**
                 * Encodes a MIME type for use as a <code>String</code> native. The format
                 * of an encoded representation of a MIME type is implementation-dependent.
                 * The only restrictions are:
                 * <ul>
                 * <li>The encoded representation is <code>null</code> if and only if the
                 * MIME type <code>String</code> is <code>null</code>.</li>
                 * <li>The encoded representations for two non-<code>null</code> MIME type
                 * <code>String</code>s are equal if and only if these <code>String</code>s
                 * are equal according to <code>String.equals(Object)</code>.</li>
                 * </ul>
                 * <p>
                 * The reference implementation of this method returns the specified MIME
                 * type <code>String</code> prefixed with <code>JAVA_DATAFLAVOR:</code>.
                 * @param mimeType the MIME type to encode
                 * @return the encoded <code>String</code>, or <code>null</code> if
                 *          mimeType is <code>null</code>
                 */
                // @ts-ignore
                encodeJavaMIMEType(mimeType: string): java.lang.String
                /**
                 * Encodes a <code>DataFlavor</code> for use as a <code>String</code>
                 * native. The format of an encoded <code>DataFlavor</code> is
                 * implementation-dependent. The only restrictions are:
                 * <ul>
                 * <li>The encoded representation is <code>null</code> if and only if the
                 * specified <code>DataFlavor</code> is <code>null</code> or its MIME type
                 * <code>String</code> is <code>null</code>.</li>
                 * <li>The encoded representations for two non-<code>null</code>
                 * <code>DataFlavor</code>s with non-<code>null</code> MIME type
                 * <code>String</code>s are equal if and only if the MIME type
                 * <code>String</code>s of these <code>DataFlavor</code>s are equal
                 * according to <code>String.equals(Object)</code>.</li>
                 * </ul>
                 * <p>
                 * The reference implementation of this method returns the MIME type
                 * <code>String</code> of the specified <code>DataFlavor</code> prefixed
                 * with <code>JAVA_DATAFLAVOR:</code>.
                 * @param flav the <code>DataFlavor</code> to encode
                 * @return the encoded <code>String</code>, or <code>null</code> if
                 *          flav is <code>null</code> or has a <code>null</code> MIME type
                 */
                // @ts-ignore
                encodeDataFlavor(flav: java.awt.datatransfer.DataFlavor): java.lang.String
                /**
                 * Returns whether the specified <code>String</code> is an encoded Java
                 * MIME type.
                 * @param str the <code>String</code> to test
                 * @return <code>true</code> if the <code>String</code> is encoded;
                 *          <code>false</code> otherwise
                 */
                // @ts-ignore
                isJavaMIMEType(str: string): boolean
                /**
                 * Decodes a <code>String</code> native for use as a Java MIME type.
                 * @param nat the <code>String</code> to decode
                 * @return the decoded Java MIME type, or <code>null</code> if nat is not
                 *          an encoded <code>String</code> native
                 */
                // @ts-ignore
                decodeJavaMIMEType(nat: string): java.lang.String
                /**
                 * Decodes a <code>String</code> native for use as a
                 * <code>DataFlavor</code>.
                 * @param nat the <code>String</code> to decode
                 * @return the decoded <code>DataFlavor</code>, or <code>null</code> if
                 *          nat is not an encoded <code>String</code> native
                 */
                // @ts-ignore
                decodeDataFlavor(nat: string): java.awt.datatransfer.DataFlavor
            }
        }
    }
}

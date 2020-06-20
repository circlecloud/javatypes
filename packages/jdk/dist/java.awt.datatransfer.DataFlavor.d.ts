declare namespace java {
    namespace awt {
        namespace datatransfer {
            /**
             * A {@code DataFlavor} provides meta information about data. {@code DataFlavor}
             * is typically used to access data on the clipboard, or during
             * a drag and drop operation.
             * <p>
             * An instance of {@code DataFlavor} encapsulates a content type as
             * defined in <a href="http://www.ietf.org/rfc/rfc2045.txt">RFC 2045</a>
             * and <a href="http://www.ietf.org/rfc/rfc2046.txt">RFC 2046</a>.
             * A content type is typically referred to as a MIME type.
             * <p>
             * A content type consists of a media type (referred
             * to as the primary type), a subtype, and optional parameters. See
             * <a href="http://www.ietf.org/rfc/rfc2045.txt">RFC 2045</a>
             * for details on the syntax of a MIME type.
             * <p>
             * The JRE data transfer implementation interprets the parameter &quot;class&quot;
             * of a MIME type as <B>a representation class</b>.
             * The representation class reflects the class of the object being
             * transferred. In other words, the representation class is the type of
             * object returned by {@link Transferable#getTransferData}.
             * For example, the MIME type of {@link #imageFlavor} is
             * {@code "image/x-java-image;class=java.awt.Image"},
             * the primary type is {@code image}, the subtype is
             * {@code x-java-image}, and the representation class is
             * {@code java.awt.Image}. When {@code getTransferData} is invoked
             * with a {@code DataFlavor} of {@code imageFlavor}, an instance of
             * {@code java.awt.Image} is returned.
             * It's important to note that {@code DataFlavor} does no error checking
             * against the representation class. It is up to consumers of
             * {@code DataFlavor}, such as {@code Transferable}, to honor the representation
             * class.
             * <br>
             * Note, if you do not specify a representation class when
             * creating a {@code DataFlavor}, the default
             * representation class is used. See appropriate documentation for
             * {@code DataFlavor}'s constructors.
             * <p>
             * Also, {@code DataFlavor} instances with the &quot;text&quot; primary
             * MIME type may have a &quot;charset&quot; parameter. Refer to
             * <a href="http://www.ietf.org/rfc/rfc2046.txt">RFC 2046</a> and
             * {@link #selectBestTextFlavor} for details on &quot;text&quot; MIME types
             * and the &quot;charset&quot; parameter.
             * <p>
             * Equality of {@code DataFlavors} is determined by the primary type,
             * subtype, and representation class. Refer to {@link #equals(DataFlavor)} for
             * details. When determining equality, any optional parameters are ignored.
             * For example, the following produces two {@code DataFlavors} that
             * are considered identical:
             * <pre>
             * DataFlavor flavor1 = new DataFlavor(Object.class, &quot;X-test/test; class=&lt;java.lang.Object&gt;; foo=bar&quot;);
             * DataFlavor flavor2 = new DataFlavor(Object.class, &quot;X-test/test; class=&lt;java.lang.Object&gt;; x=y&quot;);
             * // The following returns true.
             * flavor1.equals(flavor2);
             * </pre>
             * As mentioned, {@code flavor1} and {@code flavor2} are considered identical.
             * As such, asking a {@code Transferable} for either {@code DataFlavor} returns
             * the same results.
             * <p>
             * For more information on the using data transfer with Swing see
             * the <a href="https://docs.oracle.com/javase/tutorial/uiswing/dnd/index.html">
             * How to Use Drag and Drop and Data Transfer</a>,
             * section in <em>Java Tutorial</em>.
             * @author Blake Sullivan
             * @author Laurence P. G. Cable
             * @author Jeff Dunn
             */
            // @ts-ignore
            class DataFlavor extends java.lang.Object implements java.io.Externalizable, java.lang.Cloneable {
                /**
                 * Constructs a new <code>DataFlavor</code>.  This constructor is
                 * provided only for the purpose of supporting the
                 * <code>Externalizable</code> interface.  It is not
                 * intended for public (client) use.
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>DataFlavor</code> that represents a Java class.
                 * <p>
                 * The returned <code>DataFlavor</code> will have the following
                 * characteristics:
                 * <pre>
                 * representationClass = representationClass
                 * mimeType            = application/x-java-serialized-object
                 * </pre>
                 * @param representationClass the class used to transfer data in this flavor
                 * @param humanPresentableName the human-readable string used to identify
                 *                  this flavor; if this parameter is <code>null</code>
                 *                  then the value of the the MIME Content Type is used
                 * @exception NullPointerException if <code>representationClass</code> is null
                 */
                // @ts-ignore
                constructor(representationClass: java.lang.Class<any>, humanPresentableName: string)
                /**
                 * Constructs a <code>DataFlavor</code> that represents a
                 * <code>MimeType</code>.
                 * <p>
                 * The returned <code>DataFlavor</code> will have the following
                 * characteristics:
                 * <p>
                 * If the <code>mimeType</code> is
                 * "application/x-java-serialized-object; class=&lt;representation class&gt;",
                 * the result is the same as calling
                 * <code>new DataFlavor(Class:forName(&lt;representation class&gt;)</code>.
                 * <p>
                 * Otherwise:
                 * <pre>
                 * representationClass = InputStream
                 * mimeType            = mimeType
                 * </pre>
                 * @param mimeType the string used to identify the MIME type for this flavor;
                 *                  if the the <code>mimeType</code> does not specify a
                 *                  "class=" parameter, or if the class is not successfully
                 *                  loaded, then an <code>IllegalArgumentException</code>
                 *                  is thrown
                 * @param humanPresentableName the human-readable string used to identify
                 *                  this flavor; if this parameter is <code>null</code>
                 *                  then the value of the the MIME Content Type is used
                 * @exception IllegalArgumentException if <code>mimeType</code> is
                 *                  invalid or if the class is not successfully loaded
                 * @exception NullPointerException if <code>mimeType</code> is null
                 */
                // @ts-ignore
                constructor(mimeType: string, humanPresentableName: string)
                /**
                 * Constructs a <code>DataFlavor</code> that represents a
                 * <code>MimeType</code>.
                 * <p>
                 * The returned <code>DataFlavor</code> will have the following
                 * characteristics:
                 * <p>
                 * If the mimeType is
                 * "application/x-java-serialized-object; class=&lt;representation class&gt;",
                 * the result is the same as calling
                 * <code>new DataFlavor(Class:forName(&lt;representation class&gt;)</code>.
                 * <p>
                 * Otherwise:
                 * <pre>
                 * representationClass = InputStream
                 * mimeType            = mimeType
                 * </pre>
                 * @param mimeType the string used to identify the MIME type for this flavor
                 * @param humanPresentableName the human-readable string used to
                 *           identify this flavor
                 * @param classLoader the class loader to use
                 * @exception ClassNotFoundException if the class is not loaded
                 * @exception IllegalArgumentException if <code>mimeType</code> is
                 *                  invalid
                 * @exception NullPointerException if <code>mimeType</code> is null
                 */
                // @ts-ignore
                constructor(mimeType: string, humanPresentableName: string, classLoader: java.lang.ClassLoader)
                /**
                 * Constructs a <code>DataFlavor</code> from a <code>mimeType</code> string.
                 * The string can specify a "class=&lt;fully specified Java class name&gt;"
                 * parameter to create a <code>DataFlavor</code> with the desired
                 * representation class. If the string does not contain "class=" parameter,
                 * <code>java.io.InputStream</code> is used as default.
                 * @param mimeType the string used to identify the MIME type for this flavor;
                 *                  if the class specified by "class=" parameter is not
                 *                  successfully loaded, then an
                 *                  <code>ClassNotFoundException</code> is thrown
                 * @exception ClassNotFoundException if the class is not loaded
                 * @exception IllegalArgumentException if <code>mimeType</code> is
                 *                  invalid
                 * @exception NullPointerException if <code>mimeType</code> is null
                 */
                // @ts-ignore
                constructor(mimeType: string)
                /**
                 * The <code>DataFlavor</code> representing a Java Unicode String class,
                 * where:
                 * <pre>
                 * representationClass = java.lang.String
                 * mimeType           = "application/x-java-serialized-object"
                 * </pre>
                 */
                // @ts-ignore
                readonly stringFlavor: java.awt.datatransfer.DataFlavor
                /**
                 * The <code>DataFlavor</code> representing a Java Image class,
                 * where:
                 * <pre>
                 * representationClass = java.awt.Image
                 * mimeType            = "image/x-java-image"
                 * </pre>
                 */
                // @ts-ignore
                readonly imageFlavor: java.awt.datatransfer.DataFlavor
                /**
                 * The <code>DataFlavor</code> representing plain text with Unicode
                 * encoding, where:
                 * <pre>
                 * representationClass = InputStream
                 * mimeType            = "text/plain; charset=unicode"
                 * </pre>
                 * This <code>DataFlavor</code> has been <b>deprecated</b> because
                 * (1) Its representation is an InputStream, an 8-bit based representation,
                 * while Unicode is a 16-bit character set; and (2) The charset "unicode"
                 * is not well-defined. "unicode" implies a particular platform's
                 * implementation of Unicode, not a cross-platform implementation.
                 * @deprecated as of 1.3. Use <code>DataFlavor.getReaderForText(Transferable)</code>
                 *              instead of <code>Transferable.getTransferData(DataFlavor.plainTextFlavor)</code>.
                 */
                // @ts-ignore
                readonly plainTextFlavor: java.awt.datatransfer.DataFlavor
                /**
                 * A MIME Content-Type of application/x-java-serialized-object represents
                 * a graph of Java object(s) that have been made persistent.
                 * The representation class associated with this <code>DataFlavor</code>
                 * identifies the Java type of an object returned as a reference
                 * from an invocation <code>java.awt.datatransfer.getTransferData</code>.
                 */
                // @ts-ignore
                readonly javaSerializedObjectMimeType: string
                /**
                 * To transfer a list of files to/from Java (and the underlying
                 * platform) a <code>DataFlavor</code> of this type/subtype and
                 * representation class of <code>java.util.List</code> is used.
                 * Each element of the list is required/guaranteed to be of type
                 * <code>java.io.File</code>.
                 */
                // @ts-ignore
                readonly javaFileListFlavor: java.awt.datatransfer.DataFlavor
                /**
                 * To transfer a reference to an arbitrary Java object reference that
                 * has no associated MIME Content-type, across a <code>Transferable</code>
                 * interface WITHIN THE SAME JVM, a <code>DataFlavor</code>
                 * with this type/subtype is used, with a <code>representationClass</code>
                 * equal to the type of the class/interface being passed across the
                 * <code>Transferable</code>.
                 * <p>
                 * The object reference returned from
                 * <code>Transferable.getTransferData</code> for a <code>DataFlavor</code>
                 * with this MIME Content-Type is required to be
                 * an instance of the representation Class of the <code>DataFlavor</code>.
                 */
                // @ts-ignore
                readonly javaJVMLocalObjectMimeType: string
                /**
                 * In order to pass a live link to a Remote object via a Drag and Drop
                 * <code>ACTION_LINK</code> operation a Mime Content Type of
                 * application/x-java-remote-object should be used,
                 * where the representation class of the <code>DataFlavor</code>
                 * represents the type of the <code>Remote</code> interface to be
                 * transferred.
                 */
                // @ts-ignore
                readonly javaRemoteObjectMimeType: string
                /**
                 * Represents a piece of an HTML markup. The markup consists of the part
                 * selected on the source side. Therefore some tags in the markup may be
                 * unpaired. If the flavor is used to represent the data in
                 * a {@link Transferable} instance, no additional changes will be made.
                 * This DataFlavor instance represents the same HTML markup as DataFlavor
                 * instances which content MIME type does not contain document parameter
                 * and representation class is the String class.
                 * <pre>
                 * representationClass = String
                 * mimeType           = "text/html"
                 * </pre>
                 */
                // @ts-ignore
                selectionHtmlFlavor: java.awt.datatransfer.DataFlavor
                /**
                 * Represents a piece of an HTML markup. If possible, the markup received
                 * from a native system is supplemented with pair tags to be
                 * a well-formed HTML markup. If the flavor is used to represent the data in
                 * a {@link Transferable} instance, no additional changes will be made.
                 * <pre>
                 * representationClass = String
                 * mimeType           = "text/html"
                 * </pre>
                 */
                // @ts-ignore
                fragmentHtmlFlavor: java.awt.datatransfer.DataFlavor
                /**
                 * Represents a piece of an HTML markup. If possible, the markup
                 * received from a native system is supplemented with additional
                 * tags to make up a well-formed HTML document. If the flavor is used to
                 * represent the data in a {@link Transferable} instance,
                 * no additional changes will be made.
                 * <pre>
                 * representationClass = String
                 * mimeType           = "text/html"
                 * </pre>
                 */
                // @ts-ignore
                allHtmlFlavor: java.awt.datatransfer.DataFlavor
                /**
                 * Tries to load a class from: the bootstrap loader, the system loader,
                 * the context loader (if one is present) and finally the loader specified.
                 * @param className the name of the class to be loaded
                 * @param fallback the fallback loader
                 * @return the class loaded
                 * @exception ClassNotFoundException if class is not found
                 */
                // @ts-ignore
                tryToLoadClass(className: string, fallback: java.lang.ClassLoader): java.lang.Class<?>
                /**
                 * String representation of this <code>DataFlavor</code> and its
                 * parameters. The resulting <code>String</code> contains the name of
                 * the <code>DataFlavor</code> class, this flavor's MIME type, and its
                 * representation class. If this flavor has a primary MIME type of "text",
                 * supports the charset parameter, and has an encoded representation, the
                 * flavor's charset is also included. See <code>selectBestTextFlavor</code>
                 * for a list of text flavors which support the charset parameter.
                 * @return string representation of this <code>DataFlavor</code>
                 * @see #selectBestTextFlavor
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Returns a <code>DataFlavor</code> representing plain text with Unicode
                 * encoding, where:
                 * <pre>
                 * representationClass = java.io.InputStream
                 * mimeType            = "text/plain;
                 * charset=&lt;platform default Unicode encoding&gt;"
                 * </pre>
                 * Sun's implementation for Microsoft Windows uses the encoding <code>utf-16le</code>.
                 * Sun's implementation for Solaris and Linux uses the encoding
                 * <code>iso-10646-ucs-2</code>.
                 * @return a <code>DataFlavor</code> representing plain text
                 *     with Unicode encoding
                 * @since 1.3
                 */
                // @ts-ignore
                getTextPlainUnicodeFlavor(): java.awt.datatransfer.DataFlavor
                /**
                 * Selects the best text <code>DataFlavor</code> from an array of <code>
                 * DataFlavor</code>s. Only <code>DataFlavor.stringFlavor</code>, and
                 * equivalent flavors, and flavors that have a primary MIME type of "text",
                 * are considered for selection.
                 * <p>
                 * Flavors are first sorted by their MIME types in the following order:
                 * <ul>
                 * <li>"text/sgml"
                 * <li>"text/xml"
                 * <li>"text/html"
                 * <li>"text/rtf"
                 * <li>"text/enriched"
                 * <li>"text/richtext"
                 * <li>"text/uri-list"
                 * <li>"text/tab-separated-values"
                 * <li>"text/t140"
                 * <li>"text/rfc822-headers"
                 * <li>"text/parityfec"
                 * <li>"text/directory"
                 * <li>"text/css"
                 * <li>"text/calendar"
                 * <li>"application/x-java-serialized-object"
                 * <li>"text/plain"
                 * <li>"text/&lt;other&gt;"
                 * </ul>
                 * <p>For example, "text/sgml" will be selected over
                 * "text/html", and <code>DataFlavor.stringFlavor</code> will be chosen
                 * over <code>DataFlavor.plainTextFlavor</code>.
                 * <p>
                 * If two or more flavors share the best MIME type in the array, then that
                 * MIME type will be checked to see if it supports the charset parameter.
                 * <p>
                 * The following MIME types support, or are treated as though they support,
                 * the charset parameter:
                 * <ul>
                 * <li>"text/sgml"
                 * <li>"text/xml"
                 * <li>"text/html"
                 * <li>"text/enriched"
                 * <li>"text/richtext"
                 * <li>"text/uri-list"
                 * <li>"text/directory"
                 * <li>"text/css"
                 * <li>"text/calendar"
                 * <li>"application/x-java-serialized-object"
                 * <li>"text/plain"
                 * </ul>
                 * The following MIME types do not support, or are treated as though they
                 * do not support, the charset parameter:
                 * <ul>
                 * <li>"text/rtf"
                 * <li>"text/tab-separated-values"
                 * <li>"text/t140"
                 * <li>"text/rfc822-headers"
                 * <li>"text/parityfec"
                 * </ul>
                 * For "text/&lt;other&gt;" MIME types, the first time the JRE needs to
                 * determine whether the MIME type supports the charset parameter, it will
                 * check whether the parameter is explicitly listed in an arbitrarily
                 * chosen <code>DataFlavor</code> which uses that MIME type. If so, the JRE
                 * will assume from that point on that the MIME type supports the charset
                 * parameter and will not check again. If the parameter is not explicitly
                 * listed, the JRE will assume from that point on that the MIME type does
                 * not support the charset parameter and will not check again. Because
                 * this check is performed on an arbitrarily chosen
                 * <code>DataFlavor</code>, developers must ensure that all
                 * <code>DataFlavor</code>s with a "text/&lt;other&gt;" MIME type specify
                 * the charset parameter if it is supported by that MIME type. Developers
                 * should never rely on the JRE to substitute the platform's default
                 * charset for a "text/&lt;other&gt;" DataFlavor. Failure to adhere to this
                 * restriction will lead to undefined behavior.
                 * <p>
                 * If the best MIME type in the array does not support the charset
                 * parameter, the flavors which share that MIME type will then be sorted by
                 * their representation classes in the following order:
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>,
                 * <code>[B</code>, &lt;all others&gt;.
                 * <p>
                 * If two or more flavors share the best representation class, or if no
                 * flavor has one of the three specified representations, then one of those
                 * flavors will be chosen non-deterministically.
                 * <p>
                 * If the best MIME type in the array does support the charset parameter,
                 * the flavors which share that MIME type will then be sorted by their
                 * representation classes in the following order:
                 * <code>java.io.Reader</code>, <code>java.lang.String</code>,
                 * <code>java.nio.CharBuffer</code>, <code>[C</code>, &lt;all others&gt;.
                 * <p>
                 * If two or more flavors share the best representation class, and that
                 * representation is one of the four explicitly listed, then one of those
                 * flavors will be chosen non-deterministically. If, however, no flavor has
                 * one of the four specified representations, the flavors will then be
                 * sorted by their charsets. Unicode charsets, such as "UTF-16", "UTF-8",
                 * "UTF-16BE", "UTF-16LE", and their aliases, are considered best. After
                 * them, the platform default charset and its aliases are selected.
                 * "US-ASCII" and its aliases are worst. All other charsets are chosen in
                 * alphabetical order, but only charsets supported by this implementation
                 * of the Java platform will be considered.
                 * <p>
                 * If two or more flavors share the best charset, the flavors will then
                 * again be sorted by their representation classes in the following order:
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>,
                 * <code>[B</code>, &lt;all others&gt;.
                 * <p>
                 * If two or more flavors share the best representation class, or if no
                 * flavor has one of the three specified representations, then one of those
                 * flavors will be chosen non-deterministically.
                 * @param availableFlavors an array of available <code>DataFlavor</code>s
                 * @return the best (highest fidelity) flavor according to the rules
                 *          specified above, or <code>null</code>,
                 *          if <code>availableFlavors</code> is <code>null</code>,
                 *          has zero length, or contains no text flavors
                 * @since 1.3
                 */
                // @ts-ignore
                selectBestTextFlavor(availableFlavors: java.awt.datatransfer.DataFlavor[]): java.awt.datatransfer.DataFlavor
                /**
                 * Gets a Reader for a text flavor, decoded, if necessary, for the expected
                 * charset (encoding). The supported representation classes are
                 * <code>java.io.Reader</code>, <code>java.lang.String</code>,
                 * <code>java.nio.CharBuffer</code>, <code>[C</code>,
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>,
                 * and <code>[B</code>.
                 * <p>
                 * Because text flavors which do not support the charset parameter are
                 * encoded in a non-standard format, this method should not be called for
                 * such flavors. However, in order to maintain backward-compatibility,
                 * if this method is called for such a flavor, this method will treat the
                 * flavor as though it supports the charset parameter and attempt to
                 * decode it accordingly. See <code>selectBestTextFlavor</code> for a list
                 * of text flavors which do not support the charset parameter.
                 * @param transferable the <code>Transferable</code> whose data will be
                 *         requested in this flavor
                 * @return a <code>Reader</code> to read the <code>Transferable</code>'s
                 *          data
                 * @exception IllegalArgumentException if the representation class
                 *             is not one of the seven listed above
                 * @exception IllegalArgumentException if the <code>Transferable</code>
                 *             has <code>null</code> data
                 * @exception NullPointerException if the <code>Transferable</code> is
                 *             <code>null</code>
                 * @exception UnsupportedEncodingException if this flavor's representation
                 *             is <code>java.io.InputStream</code>,
                 *             <code>java.nio.ByteBuffer</code>, or <code>[B</code> and
                 *             this flavor's encoding is not supported by this
                 *             implementation of the Java platform
                 * @exception UnsupportedFlavorException if the <code>Transferable</code>
                 *             does not support this flavor
                 * @exception IOException if the data cannot be read because of an
                 *             I/O error
                 * @see #selectBestTextFlavor
                 * @since 1.3
                 */
                // @ts-ignore
                getReaderForText(transferable: java.awt.datatransfer.Transferable): java.io.Reader
                /**
                 * Returns the MIME type string for this <code>DataFlavor</code>.
                 * @return the MIME type string for this flavor
                 */
                // @ts-ignore
                getMimeType(): java.lang.String
                /**
                 * Returns the <code>Class</code> which objects supporting this
                 * <code>DataFlavor</code> will return when this <code>DataFlavor</code>
                 * is requested.
                 * @return the <code>Class</code> which objects supporting this
                 *  <code>DataFlavor</code> will return when this <code>DataFlavor</code>
                 *  is requested
                 */
                // @ts-ignore
                getRepresentationClass(): java.lang.Class<?>
                /**
                 * Returns the human presentable name for the data format that this
                 * <code>DataFlavor</code> represents.  This name would be localized
                 * for different countries.
                 * @return the human presentable name for the data format that this
                 *     <code>DataFlavor</code> represents
                 */
                // @ts-ignore
                getHumanPresentableName(): java.lang.String
                /**
                 * Returns the primary MIME type for this <code>DataFlavor</code>.
                 * @return the primary MIME type of this <code>DataFlavor</code>
                 */
                // @ts-ignore
                getPrimaryType(): java.lang.String
                /**
                 * Returns the sub MIME type of this <code>DataFlavor</code>.
                 * @return the Sub MIME type of this <code>DataFlavor</code>
                 */
                // @ts-ignore
                getSubType(): java.lang.String
                /**
                 * Returns the human presentable name for this <code>DataFlavor</code>
                 * if <code>paramName</code> equals "humanPresentableName".  Otherwise
                 * returns the MIME type value associated with <code>paramName</code>.
                 * @param paramName the parameter name requested
                 * @return the value of the name parameter, or <code>null</code>
                 *   if there is no associated value
                 */
                // @ts-ignore
                getParameter(paramName: string): java.lang.String
                /**
                 * Sets the human presentable name for the data format that this
                 * <code>DataFlavor</code> represents. This name would be localized
                 * for different countries.
                 * @param humanPresentableName the new human presentable name
                 */
                // @ts-ignore
                setHumanPresentableName(humanPresentableName: string): void
                /**
                 * {@inheritDoc}
                 * <p>
                 * The equals comparison for the {@code DataFlavor} class is implemented
                 * as follows: Two <code>DataFlavor</code>s are considered equal if and
                 * only if their MIME primary type and subtype and representation class are
                 * equal. Additionally, if the primary type is "text", the subtype denotes
                 * a text flavor which supports the charset parameter, and the
                 * representation class is not <code>java.io.Reader</code>,
                 * <code>java.lang.String</code>, <code>java.nio.CharBuffer</code>, or
                 * <code>[C</code>, the <code>charset</code> parameter must also be equal.
                 * If a charset is not explicitly specified for one or both
                 * <code>DataFlavor</code>s, the platform default encoding is assumed. See
                 * <code>selectBestTextFlavor</code> for a list of text flavors which
                 * support the charset parameter.
                 * @param o the <code>Object</code> to compare with <code>this</code>
                 * @return <code>true</code> if <code>that</code> is equivalent to this
                 *          <code>DataFlavor</code>; <code>false</code> otherwise
                 * @see #selectBestTextFlavor
                 */
                // @ts-ignore
                equals(o: any): boolean
                /**
                 * This method has the same behavior as {@link #equals(Object)}.
                 * The only difference being that it takes a {@code DataFlavor} instance
                 * as a parameter.
                 * @param that the <code>DataFlavor</code> to compare with
                 *         <code>this</code>
                 * @return <code>true</code> if <code>that</code> is equivalent to this
                 *          <code>DataFlavor</code>; <code>false</code> otherwise
                 * @see #selectBestTextFlavor
                 */
                // @ts-ignore
                equals(that: java.awt.datatransfer.DataFlavor): boolean
                /**
                 * Compares only the <code>mimeType</code> against the passed in
                 * <code>String</code> and <code>representationClass</code> is
                 * not considered in the comparison.
                 * If <code>representationClass</code> needs to be compared, then
                 * <code>equals(new DataFlavor(s))</code> may be used.
                 * @deprecated As inconsistent with <code>hashCode()</code> contract,
                 *              use <code>isMimeTypeEqual(String)</code> instead.
                 * @param s the {#code mimeType} to compare.
                 * @return true if the String (MimeType) is equal; false otherwise or if
                 *          {#code s} is {@code null}
                 */
                // @ts-ignore
                equals(s: string): boolean
                /**
                 * Returns hash code for this <code>DataFlavor</code>.
                 * For two equal <code>DataFlavor</code>s, hash codes are equal.
                 * For the <code>String</code>
                 * that matches <code>DataFlavor.equals(String)</code>, it is not
                 * guaranteed that <code>DataFlavor</code>'s hash code is equal
                 * to the hash code of the <code>String</code>.
                 * @return a hash code for this <code>DataFlavor</code>
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Identical to {@link #equals(DataFlavor)}.
                 * @param that the <code>DataFlavor</code> to compare with
                 *         <code>this</code>
                 * @return <code>true</code> if <code>that</code> is equivalent to this
                 *          <code>DataFlavor</code>; <code>false</code> otherwise
                 * @see #selectBestTextFlavor
                 * @since 1.3
                 */
                // @ts-ignore
                match(that: java.awt.datatransfer.DataFlavor): boolean
                /**
                 * Returns whether the string representation of the MIME type passed in
                 * is equivalent to the MIME type of this <code>DataFlavor</code>.
                 * Parameters are not included in the comparison.
                 * @param mimeType the string representation of the MIME type
                 * @return true if the string representation of the MIME type passed in is
                 *          equivalent to the MIME type of this <code>DataFlavor</code>;
                 *          false otherwise
                 * @throws NullPointerException if mimeType is <code>null</code>
                 */
                // @ts-ignore
                isMimeTypeEqual(mimeType: string): boolean
                /**
                 * Compares the <code>mimeType</code> of two <code>DataFlavor</code>
                 * objects. No parameters are considered.
                 * @param dataFlavor the <code>DataFlavor</code> to be compared
                 * @return true if the <code>MimeType</code>s are equal,
                 *   otherwise false
                 */
                // @ts-ignore
                isMimeTypeEqual(dataFlavor: java.awt.datatransfer.DataFlavor): boolean
                /**
                 * Does the <code>DataFlavor</code> represent a serialized object?
                 */
                // @ts-ignore
                isMimeTypeSerializedObject(): boolean
                // @ts-ignore
                getDefaultRepresentationClass(): java.lang.Class<?>
                // @ts-ignore
                getDefaultRepresentationClassAsString(): java.lang.String
                /**
                 * Does the <code>DataFlavor</code> represent a
                 * <code>java.io.InputStream</code>?
                 */
                // @ts-ignore
                isRepresentationClassInputStream(): boolean
                /**
                 * Returns whether the representation class for this
                 * <code>DataFlavor</code> is <code>java.io.Reader</code> or a subclass
                 * thereof.
                 * @since 1.4
                 */
                // @ts-ignore
                isRepresentationClassReader(): boolean
                /**
                 * Returns whether the representation class for this
                 * <code>DataFlavor</code> is <code>java.nio.CharBuffer</code> or a
                 * subclass thereof.
                 * @since 1.4
                 */
                // @ts-ignore
                isRepresentationClassCharBuffer(): boolean
                /**
                 * Returns whether the representation class for this
                 * <code>DataFlavor</code> is <code>java.nio.ByteBuffer</code> or a
                 * subclass thereof.
                 * @since 1.4
                 */
                // @ts-ignore
                isRepresentationClassByteBuffer(): boolean
                /**
                 * Returns true if the representation class can be serialized.
                 * @return true if the representation class can be serialized
                 */
                // @ts-ignore
                isRepresentationClassSerializable(): boolean
                /**
                 * Returns true if the representation class is <code>Remote</code>.
                 * @return true if the representation class is <code>Remote</code>
                 */
                // @ts-ignore
                isRepresentationClassRemote(): boolean
                /**
                 * Returns true if the <code>DataFlavor</code> specified represents
                 * a serialized object.
                 * @return true if the <code>DataFlavor</code> specified represents
                 *    a Serialized Object
                 */
                // @ts-ignore
                isFlavorSerializedObjectType(): boolean
                /**
                 * Returns true if the <code>DataFlavor</code> specified represents
                 * a remote object.
                 * @return true if the <code>DataFlavor</code> specified represents
                 *   a Remote Object
                 */
                // @ts-ignore
                isFlavorRemoteObjectType(): boolean
                /**
                 * Returns true if the <code>DataFlavor</code> specified represents
                 * a list of file objects.
                 * @return true if the <code>DataFlavor</code> specified represents
                 *    a List of File objects
                 */
                // @ts-ignore
                isFlavorJavaFileListType(): boolean
                /**
                 * Returns whether this <code>DataFlavor</code> is a valid text flavor for
                 * this implementation of the Java platform. Only flavors equivalent to
                 * <code>DataFlavor.stringFlavor</code> and <code>DataFlavor</code>s with
                 * a primary MIME type of "text" can be valid text flavors.
                 * <p>
                 * If this flavor supports the charset parameter, it must be equivalent to
                 * <code>DataFlavor.stringFlavor</code>, or its representation must be
                 * <code>java.io.Reader</code>, <code>java.lang.String</code>,
                 * <code>java.nio.CharBuffer</code>, <code>[C</code>,
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>, or
                 * <code>[B</code>. If the representation is
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>, or
                 * <code>[B</code>, then this flavor's <code>charset</code> parameter must
                 * be supported by this implementation of the Java platform. If a charset
                 * is not specified, then the platform default charset, which is always
                 * supported, is assumed.
                 * <p>
                 * If this flavor does not support the charset parameter, its
                 * representation must be <code>java.io.InputStream</code>,
                 * <code>java.nio.ByteBuffer</code>, or <code>[B</code>.
                 * <p>
                 * See <code>selectBestTextFlavor</code> for a list of text flavors which
                 * support the charset parameter.
                 * @return <code>true</code> if this <code>DataFlavor</code> is a valid
                 *          text flavor as described above; <code>false</code> otherwise
                 * @see #selectBestTextFlavor
                 * @since 1.4
                 */
                // @ts-ignore
                isFlavorTextType(): boolean
                /**
                 * Serializes this <code>DataFlavor</code>.
                 */
                // @ts-ignore
                writeExternal(os: java.io.ObjectOutput): void
                /**
                 * Restores this <code>DataFlavor</code> from a Serialized state.
                 */
                // @ts-ignore
                readExternal(jis: java.io.ObjectInput): void
                /**
                 * Returns a clone of this <code>DataFlavor</code>.
                 * @return a clone of this <code>DataFlavor</code>
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Called on <code>DataFlavor</code> for every MIME Type parameter
                 * to allow <code>DataFlavor</code> subclasses to handle special
                 * parameters like the text/plain <code>charset</code>
                 * parameters, whose values are case insensitive.  (MIME type parameter
                 * values are supposed to be case sensitive.
                 * <p>
                 * This method is called for each parameter name/value pair and should
                 * return the normalized representation of the <code>parameterValue</code>.
                 * This method is never invoked by this implementation from 1.1 onwards.
                 * @deprecated 
                 */
                // @ts-ignore
                normalizeMimeTypeParameter(parameterName: string, parameterValue: string): java.lang.String
                /**
                 * Called for each MIME type string to give <code>DataFlavor</code> subtypes
                 * the opportunity to change how the normalization of MIME types is
                 * accomplished.  One possible use would be to add default
                 * parameter/value pairs in cases where none are present in the MIME
                 * type string passed in.
                 * This method is never invoked by this implementation from 1.1 onwards.
                 * @deprecated 
                 */
                // @ts-ignore
                normalizeMimeType(mimeType: string): java.lang.String
            }
        }
    }
}

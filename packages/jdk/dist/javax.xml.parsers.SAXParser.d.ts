declare namespace javax {
    namespace xml {
        namespace parsers {
            /**
             * Defines the API that wraps an {@link org.xml.sax.XMLReader}
             * implementation class. In JAXP 1.0, this class wrapped the
             * {@link org.xml.sax.Parser} interface, however this interface was
             * replaced by the {@link org.xml.sax.XMLReader}. For ease
             * of transition, this class continues to support the same name
             * and interface as well as supporting new methods.
             * An instance of this class can be obtained from the
             * {@link javax.xml.parsers.SAXParserFactory#newSAXParser()} method.
             * Once an instance of this class is obtained, XML can be parsed from
             * a variety of input sources. These input sources are InputStreams,
             * Files, URLs, and SAX InputSources.<p>
             * This static method creates a new factory instance based
             * on a system property setting or uses the platform default
             * if no property has been defined.<p>
             * The system property that controls which Factory implementation
             * to create is named <code>&quot;javax.xml.parsers.SAXParserFactory&quot;</code>.
             * This property names a class that is a concrete subclass of this
             * abstract class. If no property is defined, a platform default
             * will be used.</p>
             * As the content is parsed by the underlying parser, methods of the
             * given {@link org.xml.sax.HandlerBase} or the
             * {@link org.xml.sax.helpers.DefaultHandler} are called.<p>
             * Implementors of this class which wrap an underlaying implementation
             * can consider using the {@link org.xml.sax.helpers.ParserAdapter}
             * class to initially adapt their SAX1 implementation to work under
             * this revised class.
             * @author <a href="mailto:Jeff.Suttor#Sun.com">Jeff Suttor</a>
             */
            // @ts-ignore
            class SAXParser extends java.lang.Object {
                /**
                 * <p>Protected constructor to prevent instaniation.
                 * Use {@link javax.xml.parsers.SAXParserFactory#newSAXParser()}.</p>
                 */
                // @ts-ignore
                constructor()
                /**
                 * <p>Reset this <code>SAXParser</code> to its original configuration.</p>
                 * <p><code>SAXParser</code> is reset to the same state as when it was created with
                 * {@link SAXParserFactory#newSAXParser()}.
                 * <code>reset()</code> is designed to allow the reuse of existing <code>SAXParser</code>s
                 * thus saving resources associated with the creation of new <code>SAXParser</code>s.</p>
                 * <p>The reset <code>SAXParser</code> is not guaranteed to have the same {@link Schema}
                 * <code>Object</code>, e.g. {@link Object#equals(Object obj)}.  It is guaranteed to have a functionally equal
                 * <code>Schema</code>.</p>
                 * @throws UnsupportedOperationException When Implementations do not
                 *    override this method
                 * @since 1.5
                 */
                // @ts-ignore
                reset(): void
                /**
                 * <p>Parse the content of the given {@link java.io.InputStream}
                 * instance as XML using the specified {@link org.xml.sax.HandlerBase}.
                 * <i> Use of the DefaultHandler version of this method is recommended as
                 * the HandlerBase class has been deprecated in SAX 2.0</i>.</p>
                 * @param is InputStream containing the content to be parsed.
                 * @param hb The SAX HandlerBase to use.
                 * @throws IllegalArgumentException If the given InputStream is null.
                 * @throws SAXException If parse produces a SAX error.
                 * @throws IOException If an IO error occurs interacting with the
                 *    <code>InputStream</code>.
                 * @see org.xml.sax.DocumentHandler
                 */
                // @ts-ignore
                parse(jis: java.io.InputStream, hb: org.xml.sax.HandlerBase): void
                /**
                 * <p>Parse the content of the given {@link java.io.InputStream}
                 * instance as XML using the specified {@link org.xml.sax.HandlerBase}.
                 * <i> Use of the DefaultHandler version of this method is recommended as
                 * the HandlerBase class has been deprecated in SAX 2.0</i>.</p>
                 * @param is InputStream containing the content to be parsed.
                 * @param hb The SAX HandlerBase to use.
                 * @param systemId The systemId which is needed for resolving relative URIs.
                 * @throws IllegalArgumentException If the given <code>InputStream</code> is
                 *    <code>null</code>.
                 * @throws IOException If any IO error occurs interacting with the
                 *    <code>InputStream</code>.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler version of this method instead.
                 */
                // @ts-ignore
                parse(jis: java.io.InputStream, hb: org.xml.sax.HandlerBase, systemId: string): void
                /**
                 * Parse the content of the given {@link java.io.InputStream}
                 * instance as XML using the specified
                 * {@link org.xml.sax.helpers.DefaultHandler}.
                 * @param is InputStream containing the content to be parsed.
                 * @param dh The SAX DefaultHandler to use.
                 * @throws IllegalArgumentException If the given InputStream is null.
                 * @throws IOException If any IO errors occur.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler
                 */
                // @ts-ignore
                parse(jis: java.io.InputStream, dh: org.xml.sax.helpers.DefaultHandler): void
                /**
                 * Parse the content of the given {@link java.io.InputStream}
                 * instance as XML using the specified
                 * {@link org.xml.sax.helpers.DefaultHandler}.
                 * @param is InputStream containing the content to be parsed.
                 * @param dh The SAX DefaultHandler to use.
                 * @param systemId The systemId which is needed for resolving relative URIs.
                 * @throws IllegalArgumentException If the given InputStream is null.
                 * @throws IOException If any IO errors occur.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler version of this method instead.
                 */
                // @ts-ignore
                parse(jis: java.io.InputStream, dh: org.xml.sax.helpers.DefaultHandler, systemId: string): void
                /**
                 * Parse the content described by the giving Uniform Resource
                 * Identifier (URI) as XML using the specified
                 * {@link org.xml.sax.HandlerBase}.
                 * <i> Use of the DefaultHandler version of this method is recommended as
                 * the <code>HandlerBase</code> class has been deprecated in SAX 2.0</i>
                 * @param uri The location of the content to be parsed.
                 * @param hb The SAX HandlerBase to use.
                 * @throws IllegalArgumentException If the uri is null.
                 * @throws IOException If any IO errors occur.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler
                 */
                // @ts-ignore
                parse(uri: string, hb: org.xml.sax.HandlerBase): void
                /**
                 * Parse the content described by the giving Uniform Resource
                 * Identifier (URI) as XML using the specified
                 * {@link org.xml.sax.helpers.DefaultHandler}.
                 * @param uri The location of the content to be parsed.
                 * @param dh The SAX DefaultHandler to use.
                 * @throws IllegalArgumentException If the uri is null.
                 * @throws IOException If any IO errors occur.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler
                 */
                // @ts-ignore
                parse(uri: string, dh: org.xml.sax.helpers.DefaultHandler): void
                /**
                 * Parse the content of the file specified as XML using the
                 * specified {@link org.xml.sax.HandlerBase}.
                 * <i> Use of the DefaultHandler version of this method is recommended as
                 * the HandlerBase class has been deprecated in SAX 2.0</i>
                 * @param f The file containing the XML to parse
                 * @param hb The SAX HandlerBase to use.
                 * @throws IllegalArgumentException If the File object is null.
                 * @throws IOException If any IO errors occur.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler
                 */
                // @ts-ignore
                parse(f: java.io.File, hb: org.xml.sax.HandlerBase): void
                /**
                 * Parse the content of the file specified as XML using the
                 * specified {@link org.xml.sax.helpers.DefaultHandler}.
                 * @param f The file containing the XML to parse
                 * @param dh The SAX DefaultHandler to use.
                 * @throws IllegalArgumentException If the File object is null.
                 * @throws IOException If any IO errors occur.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler
                 */
                // @ts-ignore
                parse(f: java.io.File, dh: org.xml.sax.helpers.DefaultHandler): void
                /**
                 * Parse the content given {@link org.xml.sax.InputSource}
                 * as XML using the specified
                 * {@link org.xml.sax.HandlerBase}.
                 * <i> Use of the DefaultHandler version of this method is recommended as
                 * the HandlerBase class has been deprecated in SAX 2.0</i>
                 * @param is The InputSource containing the content to be parsed.
                 * @param hb The SAX HandlerBase to use.
                 * @throws IllegalArgumentException If the <code>InputSource</code> object
                 *    is <code>null</code>.
                 * @throws IOException If any IO errors occur.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler
                 */
                // @ts-ignore
                parse(jis: org.xml.sax.InputSource, hb: org.xml.sax.HandlerBase): void
                /**
                 * Parse the content given {@link org.xml.sax.InputSource}
                 * as XML using the specified
                 * {@link org.xml.sax.helpers.DefaultHandler}.
                 * @param is The InputSource containing the content to be parsed.
                 * @param dh The SAX DefaultHandler to use.
                 * @throws IllegalArgumentException If the <code>InputSource</code> object
                 *    is <code>null</code>.
                 * @throws IOException If any IO errors occur.
                 * @throws SAXException If any SAX errors occur during processing.
                 * @see org.xml.sax.DocumentHandler
                 */
                // @ts-ignore
                parse(jis: org.xml.sax.InputSource, dh: org.xml.sax.helpers.DefaultHandler): void
                /**
                 * Returns the SAX parser that is encapsultated by the
                 * implementation of this class.
                 * @return The SAX parser that is encapsultated by the
                 *          implementation of this class.
                 * @throws SAXException If any SAX errors occur during processing.
                 */
                // @ts-ignore
                abstract getParser(): org.xml.sax.Parser
                /**
                 * Returns the {@link org.xml.sax.XMLReader} that is encapsulated by the
                 * implementation of this class.
                 * @return The XMLReader that is encapsulated by the
                 *          implementation of this class.
                 * @throws SAXException If any SAX errors occur during processing.
                 */
                // @ts-ignore
                abstract getXMLReader(): org.xml.sax.XMLReader
                /**
                 * Indicates whether or not this parser is configured to
                 * understand namespaces.
                 * @return true if this parser is configured to
                 *          understand namespaces; false otherwise.
                 */
                // @ts-ignore
                abstract isNamespaceAware(): boolean
                /**
                 * Indicates whether or not this parser is configured to
                 * validate XML documents.
                 * @return true if this parser is configured to
                 *          validate XML documents; false otherwise.
                 */
                // @ts-ignore
                abstract isValidating(): boolean
                /**
                 * <p>Sets the particular property in the underlying implementation of
                 * {@link org.xml.sax.XMLReader}.
                 * A list of the core features and properties can be found at
                 * <a href="http://sax.sourceforge.net/?selected=get-set">
                 * http://sax.sourceforge.net/?selected=get-set</a>.</p>
                 * <p>
                 * All implementations that implement JAXP 1.5 or newer are required to
                 * support the {@link javax.xml.XMLConstants#ACCESS_EXTERNAL_DTD} and
                 * {@link javax.xml.XMLConstants#ACCESS_EXTERNAL_SCHEMA} properties.
                 * </p>
                 * <ul>
                 * <li>
                 * <p>
                 * Setting the {@link javax.xml.XMLConstants#ACCESS_EXTERNAL_DTD} property
                 * restricts the access to external DTDs, external Entity References to
                 * the protocols specified by the property.  If access is denied during parsing
                 * due to the restriction of this property, {@link org.xml.sax.SAXException}
                 * will be thrown by the parse methods defined by {@link javax.xml.parsers.SAXParser}.
                 * </p>
                 * <p>
                 * Setting the {@link javax.xml.XMLConstants#ACCESS_EXTERNAL_SCHEMA} property
                 * restricts the access to external Schema set by the schemaLocation attribute to
                 * the protocols specified by the property.  If access is denied during parsing
                 * due to the restriction of this property, {@link org.xml.sax.SAXException}
                 * will be thrown by the parse methods defined by the {@link javax.xml.parsers.SAXParser}.
                 * </p>
                 * </li>
                 * </ul>
                 * @param name The name of the property to be set.
                 * @param value The value of the property to be set.
                 * @throws SAXNotRecognizedException When the underlying XMLReader does
                 *    not recognize the property name.
                 * @throws SAXNotSupportedException When the underlying XMLReader
                 *   recognizes the property name but doesn't support the property.
                 * @see org.xml.sax.XMLReader#setProperty
                 */
                // @ts-ignore
                abstract setProperty(name: string, value: any): void
                /**
                 * <p>Returns the particular property requested for in the underlying
                 * implementation of {@link org.xml.sax.XMLReader}.</p>
                 * @param name The name of the property to be retrieved.
                 * @return Value of the requested property.
                 * @throws SAXNotRecognizedException When the underlying XMLReader does
                 *     not recognize the property name.
                 * @throws SAXNotSupportedException When the underlying XMLReader
                 *   recognizes the property name but doesn't support the property.
                 * @see org.xml.sax.XMLReader#getProperty
                 */
                // @ts-ignore
                abstract getProperty(name: string): java.lang.Object
                /**
                 * <p>Get a reference to the the {@link Schema} being used by
                 * the XML processor.</p>
                 * <p>If no schema is being used, <code>null</code> is returned.</p>
                 * @return {#link Schema} being used or <code>null</code>
                 *   if none in use
                 * @throws UnsupportedOperationException When implementation does not
                 *    override this method
                 * @since 1.5
                 */
                // @ts-ignore
                getSchema(): javax.xml.validation.Schema
                /**
                 * <p>Get the XInclude processing mode for this parser.</p>
                 * @return the return value of
                 *       the {#link SAXParserFactory#isXIncludeAware()}
                 *       when this parser was created from factory.
                 * @throws UnsupportedOperationException When implementation does not
                 *    override this method
                 * @since 1.5
                 * @see SAXParserFactory#setXIncludeAware(boolean)
                 */
                // @ts-ignore
                isXIncludeAware(): boolean
            }
        }
    }
}

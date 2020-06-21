declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * Class that defines convenience methods for common, simple use of JAXB.
             * <p>
             * Methods defined in this class are convenience methods that combine several basic operations
             * in the {@link JAXBContext}, {@link Unmarshaller}, and {@link Marshaller}.
             * They are designed
             * to be the prefered methods for developers new to JAXB. They have
             * the following characterstics:
             * <ol>
             * <li>Generally speaking, the performance is not necessarily optimal.
             * It is expected that people who need to write performance
             * critical code will use the rest of the JAXB API directly.
             * <li>Errors that happen during the processing is wrapped into
             * {@link DataBindingException} (which will have {@link JAXBException}
             * as its {@link Throwable#getCause() cause}. It is expected that
             * people who prefer the checked exception would use
             * the rest of the JAXB API directly.
             * </ol>
             * <p>
             * In addition, the <tt>unmarshal</tt> methods have the following characteristic:
             * <ol>
             * <li>Schema validation is not performed on the input XML.
             * The processing will try to continue even if there
             * are errors in the XML, as much as possible. Only as
             * the last resort, this method fails with {@link DataBindingException}.
             * </ol>
             * <p>
             * Similarly, the <tt>marshal</tt> methods have the following characteristic:
             * <ol>
             * <li>The processing will try to continue even if the Java object tree
             * does not meet the validity requirement. Only as
             * the last resort, this method fails with {@link DataBindingException}.
             * </ol>
             * <p>
             * All the methods on this class require non-null arguments to all parameters.
             * The <tt>unmarshal</tt> methods either fail with an exception or return
             * a non-null value.
             * @author Kohsuke Kawaguchi
             * @since 2.1
             */
            // @ts-ignore
            class JAXB extends java.lang.Object {
                /**
                 * Reads in a Java object tree from the given XML input.
                 * @param xml
                 *       Reads the entire file as XML.
                 */
                // @ts-ignore
                public static unmarshal<T>(xml: java.io.File, type: java.lang.Class<T>): T
                /**
                 * Reads in a Java object tree from the given XML input.
                 * @param xml
                 *       The resource pointed by the URL is read in its entirety.
                 */
                // @ts-ignore
                public static unmarshal<T>(xml: java.net.URL, type: java.lang.Class<T>): T
                /**
                 * Reads in a Java object tree from the given XML input.
                 * @param xml
                 *       The URI is {#link URI#toURL() turned into URL} and then
                 *       follows the handling of <tt>URL</tt>.
                 */
                // @ts-ignore
                public static unmarshal<T>(xml: java.net.URI, type: java.lang.Class<T>): T
                /**
                 * Reads in a Java object tree from the given XML input.
                 * @param xml
                 *       The string is first interpreted as an absolute <tt>URI</tt>.
                 *       If it's not {#link URI#isAbsolute() a valid absolute URI},
                 *       then it's interpreted as a <tt>File</tt>
                 */
                // @ts-ignore
                public static unmarshal<T>(xml: java.lang.String | string, type: java.lang.Class<T>): T
                /**
                 * Reads in a Java object tree from the given XML input.
                 * @param xml
                 *       The entire stream is read as an XML infoset.
                 *       Upon a successful completion, the stream will be closed by this method.
                 */
                // @ts-ignore
                public static unmarshal<T>(xml: java.io.InputStream, type: java.lang.Class<T>): T
                /**
                 * Reads in a Java object tree from the given XML input.
                 * @param xml
                 *       The character stream is read as an XML infoset.
                 *       The encoding declaration in the XML will be ignored.
                 *       Upon a successful completion, the stream will be closed by this method.
                 */
                // @ts-ignore
                public static unmarshal<T>(xml: java.io.Reader, type: java.lang.Class<T>): T
                /**
                 * Reads in a Java object tree from the given XML input.
                 * @param xml
                 *       The XML infoset that the {#link Source} represents is read.
                 */
                // @ts-ignore
                public static unmarshal<T>(xml: javax.xml.transform.Source, type: java.lang.Class<T>): T
                /**
                 * Writes a Java object tree to XML and store it to the specified location.
                 * @param jaxbObject
                 *       The Java object to be marshalled into XML. If this object is
                 *       a {#link JAXBElement}, it will provide the root tag name and
                 *       the body. If this object has {@link XmlRootElement}
                 *       on its class definition, that will be used as the root tag name
                 *       and the given object will provide the body. Otherwise,
                 *       the root tag name is {@link Introspector#decapitalize(String) infered} from
                 *       {@link Class#getSimpleName() the short class name}.
                 *       This parameter must not be null.
                 * @param xml
                 *       XML will be written to this file. If it already exists,
                 *       it will be overwritten.
                 * @throws DataBindingException
                 *       If the operation fails, such as due to I/O error, unbindable classes.
                 */
                // @ts-ignore
                public static marshal(jaxbObject: java.lang.Object | any, xml: java.io.File): void
                /**
                 * Writes a Java object tree to XML and store it to the specified location.
                 * @param jaxbObject
                 *       The Java object to be marshalled into XML. If this object is
                 *       a {#link JAXBElement}, it will provide the root tag name and
                 *       the body. If this object has {@link XmlRootElement}
                 *       on its class definition, that will be used as the root tag name
                 *       and the given object will provide the body. Otherwise,
                 *       the root tag name is {@link Introspector#decapitalize(String) infered} from
                 *       {@link Class#getSimpleName() the short class name}.
                 *       This parameter must not be null.
                 * @param xml
                 *       The XML will be {#link URLConnection#getOutputStream() sent} to the
                 *       resource pointed by this URL. Note that not all <tt>URL</tt>s support
                 *       such operation, and exact semantics depends on the <tt>URL</tt>
                 *       implementations. In case of {@link HttpURLConnection HTTP URLs},
                 *       this will perform HTTP POST.
                 * @throws DataBindingException
                 *       If the operation fails, such as due to I/O error, unbindable classes.
                 */
                // @ts-ignore
                public static marshal(jaxbObject: java.lang.Object | any, xml: java.net.URL): void
                /**
                 * Writes a Java object tree to XML and store it to the specified location.
                 * @param jaxbObject
                 *       The Java object to be marshalled into XML. If this object is
                 *       a {#link JAXBElement}, it will provide the root tag name and
                 *       the body. If this object has {@link XmlRootElement}
                 *       on its class definition, that will be used as the root tag name
                 *       and the given object will provide the body. Otherwise,
                 *       the root tag name is {@link Introspector#decapitalize(String) infered} from
                 *       {@link Class#getSimpleName() the short class name}.
                 *       This parameter must not be null.
                 * @param xml
                 *       The URI is {#link URI#toURL() turned into URL} and then
                 *       follows the handling of <tt>URL</tt>. See above.
                 * @throws DataBindingException
                 *       If the operation fails, such as due to I/O error, unbindable classes.
                 */
                // @ts-ignore
                public static marshal(jaxbObject: java.lang.Object | any, xml: java.net.URI): void
                /**
                 * Writes a Java object tree to XML and store it to the specified location.
                 * @param jaxbObject
                 *       The Java object to be marshalled into XML. If this object is
                 *       a {#link JAXBElement}, it will provide the root tag name and
                 *       the body. If this object has {@link XmlRootElement}
                 *       on its class definition, that will be used as the root tag name
                 *       and the given object will provide the body. Otherwise,
                 *       the root tag name is {@link Introspector#decapitalize(String) infered} from
                 *       {@link Class#getSimpleName() the short class name}.
                 *       This parameter must not be null.
                 * @param xml
                 *       The string is first interpreted as an absolute <tt>URI</tt>.
                 *       If it's not {#link URI#isAbsolute() a valid absolute URI},
                 *       then it's interpreted as a <tt>File</tt>
                 * @throws DataBindingException
                 *       If the operation fails, such as due to I/O error, unbindable classes.
                 */
                // @ts-ignore
                public static marshal(jaxbObject: java.lang.Object | any, xml: java.lang.String | string): void
                /**
                 * Writes a Java object tree to XML and store it to the specified location.
                 * @param jaxbObject
                 *       The Java object to be marshalled into XML. If this object is
                 *       a {#link JAXBElement}, it will provide the root tag name and
                 *       the body. If this object has {@link XmlRootElement}
                 *       on its class definition, that will be used as the root tag name
                 *       and the given object will provide the body. Otherwise,
                 *       the root tag name is {@link Introspector#decapitalize(String) infered} from
                 *       {@link Class#getSimpleName() the short class name}.
                 *       This parameter must not be null.
                 * @param xml
                 *       The XML will be sent to the given {#link OutputStream}.
                 *       Upon a successful completion, the stream will be closed by this method.
                 * @throws DataBindingException
                 *       If the operation fails, such as due to I/O error, unbindable classes.
                 */
                // @ts-ignore
                public static marshal(jaxbObject: java.lang.Object | any, xml: java.io.OutputStream): void
                /**
                 * Writes a Java object tree to XML and store it to the specified location.
                 * @param jaxbObject
                 *       The Java object to be marshalled into XML. If this object is
                 *       a {#link JAXBElement}, it will provide the root tag name and
                 *       the body. If this object has {@link XmlRootElement}
                 *       on its class definition, that will be used as the root tag name
                 *       and the given object will provide the body. Otherwise,
                 *       the root tag name is {@link Introspector#decapitalize(String) infered} from
                 *       {@link Class#getSimpleName() the short class name}.
                 *       This parameter must not be null.
                 * @param xml
                 *       The XML will be sent as a character stream to the given {#link Writer}.
                 *       Upon a successful completion, the stream will be closed by this method.
                 * @throws DataBindingException
                 *       If the operation fails, such as due to I/O error, unbindable classes.
                 */
                // @ts-ignore
                public static marshal(jaxbObject: java.lang.Object | any, xml: java.io.Writer): void
                /**
                 * Writes a Java object tree to XML and store it to the specified location.
                 * @param jaxbObject
                 *       The Java object to be marshalled into XML. If this object is
                 *       a {#link JAXBElement}, it will provide the root tag name and
                 *       the body. If this object has {@link XmlRootElement}
                 *       on its class definition, that will be used as the root tag name
                 *       and the given object will provide the body. Otherwise,
                 *       the root tag name is {@link Introspector#decapitalize(String) infered} from
                 *       {@link Class#getSimpleName() the short class name}.
                 *       This parameter must not be null.
                 * @param xml
                 *       The XML will be sent to the {#link Result} object.
                 * @throws DataBindingException
                 *       If the operation fails, such as due to I/O error, unbindable classes.
                 */
                // @ts-ignore
                public static marshal(jaxbObject: java.lang.Object | any, xml: javax.xml.transform.Result): void
            }
        }
    }
}

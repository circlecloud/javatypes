declare namespace javax {
    namespace xml {
        namespace validation {
            /**
             * Streaming validator that works on SAX stream.
             * <p>
             * A {@link ValidatorHandler} object is not thread-safe and not reentrant.
             * In other words, it is the application's responsibility to make
             * sure that one {@link ValidatorHandler} object is not used from
             * more than one thread at any given time.
             * <p>
             * {@link ValidatorHandler} checks if the SAX events follow
             * the set of constraints described in the associated {@link Schema},
             * and additionally it may modify the SAX events (for example
             * by adding default values, etc.)
             * <p>
             * {@link ValidatorHandler} extends from {@link ContentHandler},
             * but it refines the underlying {@link ContentHandler} in
             * the following way:
             * <ol>
             * <li>startElement/endElement events must receive non-null String
             * for <code>uri</code>, <code>localName</code>, and <code>qname</code>,
             * even though SAX allows some of them to be null.
             * Similarly, the user-specified {@link ContentHandler} will receive non-null
             * Strings for all three parameters.
             * <li>Applications must ensure that {@link ValidatorHandler}'s
             * {@link ContentHandler#startPrefixMapping(String,String)} and
             * {@link ContentHandler#endPrefixMapping(String)} are invoked
             * properly. Similarly, the user-specified {@link ContentHandler}
             * will receive startPrefixMapping/endPrefixMapping events.
             * If the {@link ValidatorHandler} introduces additional namespace
             * bindings, the user-specified {@link ContentHandler} will receive
             * additional startPrefixMapping/endPrefixMapping events.
             * <li>{@link org.xml.sax.Attributes} for the
             * {@link ContentHandler#startElement(String,String,String,Attributes)} method
             * may or may not include xmlns* attributes.
             * </ol>
             * <p>
             * A {@link ValidatorHandler} is automatically reset every time
             * the startDocument method is invoked.
             * <h2>Recognized Properties and Features</h2>
             * <p>
             * This spec defines the following feature that must be recognized
             * by all {@link ValidatorHandler} implementations.
             * <h3><code>http://xml.org/sax/features/namespace-prefixes</code></h3>
             * <p>
             * This feature controls how a {@link ValidatorHandler} introduces
             * namespace bindings that were not present in the original SAX event
             * stream.
             * When this feature is set to true, it must make
             * sure that the user's {@link ContentHandler} will see
             * the corresponding <code>xmlns*</code> attribute in
             * the {@link org.xml.sax.Attributes} object of the
             * {@link ContentHandler#startElement(String,String,String,Attributes)}
             * callback. Otherwise, <code>xmlns*</code> attributes must not be
             * added to {@link org.xml.sax.Attributes} that's passed to the
             * user-specified {@link ContentHandler}.
             * <p>
             * (Note that regardless of this switch, namespace bindings are
             * always notified to applications through
             * {@link ContentHandler#startPrefixMapping(String,String)} and
             * {@link ContentHandler#endPrefixMapping(String)} methods of the
             * {@link ContentHandler} specified by the user.)
             * <p>
             * Note that this feature does <em>NOT</em> affect the way
             * a {@link ValidatorHandler} receives SAX events. It merely
             * changes the way it augments SAX events.
             * <p>This feature is set to <code>false</code> by default.</p>
             * @author <a href="mailto:Kohsuke.Kawaguchi#Sun.com">Kohsuke Kawaguchi</a>
             * @since 1.5
             */
            // @ts-ignore
            abstract class ValidatorHandler extends java.lang.Object implements org.xml.sax.ContentHandler {
                /**
                 * <p>Constructor for derived classes.</p>
                 * <p>The constructor does nothing.</p>
                 * <p>Derived classes must create {@link ValidatorHandler} objects that have
                 * <code>null</code> {@link ErrorHandler} and
                 * <code>null</code> {@link LSResourceResolver}.</p>
                 */
                // @ts-ignore
                constructor()
                /**
                 * Sets the {@link ContentHandler} which receives
                 * the augmented validation result.
                 * <p>
                 * When a {@link ContentHandler} is specified, a
                 * {@link ValidatorHandler} will work as a filter
                 * and basically copy the incoming events to the
                 * specified {@link ContentHandler}.
                 * <p>
                 * In doing so, a {@link ValidatorHandler} may modify
                 * the events, for example by adding defaulted attributes.
                 * <p>
                 * A {@link ValidatorHandler} may buffer events to certain
                 * extent, but to allow {@link ValidatorHandler} to be used
                 * by a parser, the following requirement has to be met.
                 * <ol>
                 * <li>When
                 * {@link ContentHandler#startElement(String, String, String, Attributes)},
                 * {@link ContentHandler#endElement(String, String, String)},
                 * {@link ContentHandler#startDocument()}, or
                 * {@link ContentHandler#endDocument()}
                 * are invoked on a {@link ValidatorHandler},
                 * the same method on the user-specified {@link ContentHandler}
                 * must be invoked for the same event before the callback
                 * returns.
                 * <li>{@link ValidatorHandler} may not introduce new elements that
                 * were not present in the input.
                 * <li>{@link ValidatorHandler} may not remove attributes that were
                 * present in the input.
                 * </ol>
                 * <p>
                 * When a callback method on the specified {@link ContentHandler}
                 * throws an exception, the same exception object must be thrown
                 * from the {@link ValidatorHandler}. The {@link ErrorHandler}
                 * should not be notified of such an exception.
                 * <p>
                 * This method can be called even during a middle of a validation.
                 * @param receiver
                 *       A {#link ContentHandler} or a null value.
                 */
                // @ts-ignore
                public abstract setContentHandler(receiver: org.xml.sax.ContentHandler): void
                /**
                 * Gets the {@link ContentHandler} which receives the
                 * augmented validation result.
                 * @return This method returns the object that was last set through
                 *       the {#link #getContentHandler()} method, or null
                 *       if that method has never been called since this {@link ValidatorHandler}
                 *       has created.
                 * @see #setContentHandler(ContentHandler)
                 */
                // @ts-ignore
                public abstract getContentHandler(): org.xml.sax.ContentHandler
                /**
                 * Sets the {@link ErrorHandler} to receive errors encountered
                 * during the validation.
                 * <p>
                 * Error handler can be used to customize the error handling process
                 * during a validation. When an {@link ErrorHandler} is set,
                 * errors found during the validation will be first sent
                 * to the {@link ErrorHandler}.
                 * <p>
                 * The error handler can abort further validation immediately
                 * by throwing {@link org.xml.sax.SAXException} from the handler. Or for example
                 * it can print an error to the screen and try to continue the
                 * validation by returning normally from the {@link ErrorHandler}
                 * <p>
                 * If any {@link Throwable} is thrown from an {@link ErrorHandler},
                 * the same {@link Throwable} object will be thrown toward the
                 * root of the call stack.
                 * <p>
                 * {@link ValidatorHandler} is not allowed to
                 * throw {@link org.xml.sax.SAXException} without first reporting it to
                 * {@link ErrorHandler}.
                 * <p>
                 * When the {@link ErrorHandler} is null, the implementation will
                 * behave as if the following {@link ErrorHandler} is set:
                 * <pre>
                 * class DraconianErrorHandler implements {@link ErrorHandler} {
                 * public void fatalError( {@link org.xml.sax.SAXParseException} e ) throws {@link org.xml.sax.SAXException} {
                 * throw e;
                 * }
                 * public void error( {@link org.xml.sax.SAXParseException} e ) throws {@link org.xml.sax.SAXException} {
                 * throw e;
                 * }
                 * public void warning( {@link org.xml.sax.SAXParseException} e ) throws {@link org.xml.sax.SAXException} {
                 * // noop
                 * }
                 * }
                 * </pre>
                 * <p>
                 * When a new {@link ValidatorHandler} object is created, initially
                 * this field is set to null.
                 * @param errorHandler
                 *       A new error handler to be set. This parameter can be null.
                 */
                // @ts-ignore
                public abstract setErrorHandler(errorHandler: org.xml.sax.ErrorHandler): void
                /**
                 * Gets the current {@link ErrorHandler} set to this {@link ValidatorHandler}.
                 * @return This method returns the object that was last set through
                 *       the {#link #setErrorHandler(ErrorHandler)} method, or null
                 *       if that method has never been called since this {@link ValidatorHandler}
                 *       has created.
                 * @see #setErrorHandler(ErrorHandler)
                 */
                // @ts-ignore
                public abstract getErrorHandler(): org.xml.sax.ErrorHandler
                /**
                 * Sets the {@link LSResourceResolver} to customize
                 * resource resolution while in a validation episode.
                 * <p>
                 * {@link ValidatorHandler} uses a {@link LSResourceResolver}
                 * when it needs to locate external resources while a validation,
                 * although exactly what constitutes "locating external resources" is
                 * up to each schema language.
                 * <p>
                 * When the {@link LSResourceResolver} is null, the implementation will
                 * behave as if the following {@link LSResourceResolver} is set:
                 * <pre>
                 * class DumbLSResourceResolver implements {@link LSResourceResolver} {
                 * public {@link org.w3c.dom.ls.LSInput} resolveResource(
                 * String publicId, String systemId, String baseURI) {
                 * return null; // always return null
                 * }
                 * }
                 * </pre>
                 * <p>
                 * If a {@link LSResourceResolver} throws a {@link RuntimeException}
                 * (or instances of its derived classes),
                 * then the {@link ValidatorHandler} will abort the parsing and
                 * the caller of the <code>validate</code> method will receive
                 * the same {@link RuntimeException}.
                 * <p>
                 * When a new {@link ValidatorHandler} object is created, initially
                 * this field is set to null.
                 * @param resourceResolver
                 *       A new resource resolver to be set. This parameter can be null.
                 */
                // @ts-ignore
                public abstract setResourceResolver(resourceResolver: org.w3c.dom.ls.LSResourceResolver): void
                /**
                 * Gets the current {@link LSResourceResolver} set to this {@link ValidatorHandler}.
                 * @return This method returns the object that was last set through
                 *       the {#link #setResourceResolver(LSResourceResolver)} method, or null
                 *       if that method has never been called since this {@link ValidatorHandler}
                 *       has created.
                 * @see #setErrorHandler(ErrorHandler)
                 */
                // @ts-ignore
                public abstract getResourceResolver(): org.w3c.dom.ls.LSResourceResolver
                /**
                 * Obtains the {@link TypeInfoProvider} implementation of this
                 * {@link ValidatorHandler}.
                 * <p>
                 * The obtained {@link TypeInfoProvider} can be queried during a parse
                 * to access the type information determined by the validator.
                 * <p>
                 * Some schema languages do not define the notion of type,
                 * for those languages, this method may not be supported.
                 * However, to be compliant with this specification, implementations
                 * for W3C XML Schema 1.0 must support this operation.
                 * @return null if the validator / schema language does not support
                 *       the notion of {#link org.w3c.dom.TypeInfo}.
                 *       Otherwise a non-null valid {@link TypeInfoProvider}.
                 */
                // @ts-ignore
                public abstract getTypeInfoProvider(): javax.xml.validation.TypeInfoProvider
                /**
                 * Look up the value of a feature flag.
                 * <p>The feature name is any fully-qualified URI.  It is
                 * possible for a {@link ValidatorHandler} to recognize a feature name but
                 * temporarily be unable to return its value.
                 * Some feature values may be available only in specific
                 * contexts, such as before, during, or after a validation.
                 * <p>Implementors are free (and encouraged) to invent their own features,
                 * using names built on their own URIs.</p>
                 * @param name The feature name, which is a non-null fully-qualified URI.
                 * @return The current value of the feature (true or false).
                 * @throws SAXNotRecognizedException If the feature
                 *    value can't be assigned or retrieved.
                 * @throws SAXNotSupportedException When the
                 *    {#link ValidatorHandler} recognizes the feature name but
                 *    cannot determine its value at this time.
                 * @throws NullPointerException When <code>name</code> is <code>null</code>.
                 * @see #setFeature(String, boolean)
                 */
                // @ts-ignore
                public getFeature(name: java.lang.String | string): boolean
                /**
                 * <p>Set a feature for this <code>ValidatorHandler</code>.</p>
                 * <p>Feature can be used to control the way a
                 * {@link ValidatorHandler} parses schemas. The feature name is
                 * any fully-qualified URI. It is possible for a
                 * {@link SchemaFactory} to
                 * expose a feature value but to be unable to change the current
                 * value. Some feature values may be immutable or mutable only in
                 * specific contexts, such as before, during, or after a
                 * validation.</p>
                 * <p>All implementations are required to support the {@link javax.xml.XMLConstants#FEATURE_SECURE_PROCESSING} feature.
                 * When the feature is:</p>
                 * <ul>
                 * <li>
                 * <code>true</code>: the implementation will limit XML processing to conform to implementation limits.
                 * Examples include enity expansion limits and XML Schema constructs that would consume large amounts of resources.
                 * If XML processing is limited for security reasons, it will be reported via a call to the registered
                 * {@link ErrorHandler#fatalError(SAXParseException exception)}.
                 * See {@link #setErrorHandler(ErrorHandler errorHandler)}.
                 * </li>
                 * <li>
                 * <code>false</code>: the implementation will processing XML according to the XML specifications without
                 * regard to possible implementation limits.
                 * </li>
                 * </ul>
                 * @param name The feature name, which is a non-null fully-qualified URI.
                 * @param value The requested value of the feature (true or false).
                 * @throws SAXNotRecognizedException If the feature
                 *    value can't be assigned or retrieved.
                 * @throws SAXNotSupportedException When the
                 *    {#link ValidatorHandler} recognizes the feature name but
                 *    cannot set the requested value.
                 * @throws NullPointerException When <code>name</code> is <code>null</code>.
                 * @see #getFeature(String)
                 */
                // @ts-ignore
                public setFeature(name: java.lang.String | string, value: boolean): void
                /**
                 * Set the value of a property.
                 * <p>The property name is any fully-qualified URI.  It is
                 * possible for a {@link ValidatorHandler} to recognize a property name but
                 * to be unable to change the current value.
                 * Some property values may be immutable or mutable only
                 * in specific contexts, such as before, during, or after
                 * a validation.</p>
                 * <p>{@link ValidatorHandler}s are not required to recognize setting
                 * any specific property names.</p>
                 * @param name The property name, which is a non-null fully-qualified URI.
                 * @param object The requested value for the property.
                 * @throws SAXNotRecognizedException If the property
                 *    value can't be assigned or retrieved.
                 * @throws SAXNotSupportedException When the
                 *    {#link ValidatorHandler} recognizes the property name but
                 *    cannot set the requested value.
                 * @throws NullPointerException When <code>name</code> is <code>null</code>.
                 */
                // @ts-ignore
                public setProperty(name: java.lang.String | string, object: java.lang.Object | any): void
                /**
                 * Look up the value of a property.
                 * <p>The property name is any fully-qualified URI.  It is
                 * possible for a {@link ValidatorHandler} to recognize a property name but
                 * temporarily be unable to return its value.
                 * Some property values may be available only in specific
                 * contexts, such as before, during, or after a validation.</p>
                 * <p>{@link ValidatorHandler}s are not required to recognize any specific
                 * property names.</p>
                 * <p>Implementors are free (and encouraged) to invent their own properties,
                 * using names built on their own URIs.</p>
                 * @param name The property name, which is a non-null fully-qualified URI.
                 * @return The current value of the property.
                 * @throws SAXNotRecognizedException If the property
                 *    value can't be assigned or retrieved.
                 * @throws SAXNotSupportedException When the
                 *    XMLReader recognizes the property name but
                 *    cannot determine its value at this time.
                 * @throws NullPointerException When <code>name</code> is <code>null</code>.
                 * @see #setProperty(String, Object)
                 */
                // @ts-ignore
                public getProperty(name: java.lang.String | string): any
            }
        }
    }
}

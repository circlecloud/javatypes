declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace digester {
                    /**
                     * <p>A <strong>Digester</strong> processes an XML input stream by matching a
                     * series of element nesting patterns to execute Rules that have been added
                     * prior to the start of parsing.  This package was inspired by the
                     * <code>XmlMapper</code> class that was part of Tomcat 3.0 and 3.1,
                     * but is organized somewhat differently.</p>
                     * <p>See the <a href="package-summary.html#package_description">Digester
                     * Developer Guide</a> for more information.</p>
                     * <p><strong>IMPLEMENTATION NOTE</strong> - A single Digester instance may
                     * only be used within the context of a single thread at a time, and a call
                     * to <code>parse()</code> must be completed before another can be initiated
                     * even from the same thread.</p>
                     * <p><strong>IMPLEMENTATION NOTE</strong> - A bug in Xerces 2.0.2 prevents
                     * the support of XML schema. You need Xerces 2.1/2.3 and up to make
                     * this class working with XML schema</p>
                     */
                    // @ts-ignore
                    class Digester extends org.xml.sax.ext.DefaultHandler2 {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static propertySource: org.apache.tomcat.util.IntrospectionUtils.PropertySource
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        // @ts-ignore
                        source: org.apache.tomcat.util.IntrospectionUtils.PropertySource[]
                        /**
                         * The body text of the current element.
                         */
                        // @ts-ignore
                        bodyText: java.lang.StringBuilder
                        /**
                         * The stack of body text string buffers for surrounding elements.
                         */
                        // @ts-ignore
                        bodyTexts: org.apache.tomcat.util.digester.ArrayStack<java.lang.StringBuilder>
                        /**
                         * Stack whose elements are List objects, each containing a list of
                         * Rule objects as returned from Rules.getMatch(). As each xml element
                         * in the input is entered, the matching rules are pushed onto this
                         * stack. After the end tag is reached, the matches are popped again.
                         * The depth of is stack is therefore exactly the same as the current
                         * "nesting" level of the input xml.
                         * @since 1.6
                         */
                        // @ts-ignore
                        matches: org.apache.tomcat.util.digester.ArrayStack<java.util.List<org.apache.tomcat.util.digester.Rule> | Array<org.apache.tomcat.util.digester.Rule>>
                        /**
                         * The class loader to use for instantiating application objects.
                         * If not specified, the context class loader, or the class loader
                         * used to load Digester itself, is used, based on the value of the
                         * <code>useContextClassLoader</code> variable.
                         */
                        // @ts-ignore
                        classLoader: java.lang.ClassLoader
                        /**
                         * Has this Digester been configured yet.
                         */
                        // @ts-ignore
                        configured: boolean
                        /**
                         * The EntityResolver used by the SAX parser. By default it use this class
                         */
                        // @ts-ignore
                        entityResolver: org.xml.sax.EntityResolver
                        /**
                         * The URLs of entityValidator that have been registered, keyed by the public
                         * identifier that corresponds.
                         */
                        // @ts-ignore
                        entityValidator: java.util.HashMap<java.lang.String | string, java.lang.String | string>
                        /**
                         * The application-supplied error handler that is notified when parsing
                         * warnings, errors, or fatal errors occur.
                         */
                        // @ts-ignore
                        errorHandler: org.xml.sax.ErrorHandler
                        /**
                         * The SAXParserFactory that is created the first time we need it.
                         */
                        // @ts-ignore
                        factory: javax.xml.parsers.SAXParserFactory
                        /**
                         * The Locator associated with our parser.
                         */
                        // @ts-ignore
                        locator: org.xml.sax.Locator
                        /**
                         * The current match pattern for nested element processing.
                         */
                        // @ts-ignore
                        match: java.lang.String | string
                        /**
                         * Do we want a "namespace aware" parser.
                         */
                        // @ts-ignore
                        namespaceAware: boolean
                        /**
                         * Registered namespaces we are currently processing.  The key is the
                         * namespace prefix that was declared in the document.  The value is an
                         * ArrayStack of the namespace URIs this prefix has been mapped to --
                         * the top Stack element is the most current one.  (This architecture
                         * is required because documents can declare nested uses of the same
                         * prefix for different Namespace URIs).
                         */
                        // @ts-ignore
                        namespaces: java.util.HashMap<java.lang.String | string, org.apache.tomcat.util.digester.ArrayStack<java.lang.String | string>>
                        /**
                         * The parameters stack being utilized by CallMethodRule and
                         * CallParamRule rules.
                         */
                        // @ts-ignore
                        params: org.apache.tomcat.util.digester.ArrayStack<java.lang.Object | any>
                        /**
                         * The SAXParser we will use to parse the input stream.
                         */
                        // @ts-ignore
                        parser: javax.xml.parsers.SAXParser
                        /**
                         * The public identifier of the DTD we are currently parsing under
                         * (if any).
                         */
                        // @ts-ignore
                        publicId: java.lang.String | string
                        /**
                         * The XMLReader used to parse digester rules.
                         */
                        // @ts-ignore
                        reader: org.xml.sax.XMLReader
                        /**
                         * The "root" element of the stack (in other words, the last object
                         * that was popped.
                         */
                        // @ts-ignore
                        root: java.lang.Object | any
                        /**
                         * The <code>Rules</code> implementation containing our collection of
                         * <code>Rule</code> instances and associated matching policy.  If not
                         * established before the first rule is added, a default implementation
                         * will be provided.
                         */
                        // @ts-ignore
                        rules: org.apache.tomcat.util.digester.Rules
                        /**
                         * The object stack being constructed.
                         */
                        // @ts-ignore
                        stack: org.apache.tomcat.util.digester.ArrayStack<java.lang.Object | any>
                        /**
                         * Do we want to use the Context ClassLoader when loading classes
                         * for instantiating new objects.  Default is <code>false</code>.
                         */
                        // @ts-ignore
                        useContextClassLoader: boolean
                        /**
                         * Do we want to use a validating parser.
                         */
                        // @ts-ignore
                        validating: boolean
                        /**
                         * Warn on missing attributes and elements.
                         */
                        // @ts-ignore
                        rulesValidation: boolean
                        /**
                         * Fake attributes map (attributes are often used for object creation).
                         */
                        // @ts-ignore
                        fakeAttributes: java.util.Map<java.lang.Class<any>, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                        /**
                         * The Log to which most logging calls will be made.
                         */
                        // @ts-ignore
                        log: org.apache.juli.logging.Log
                        /**
                         * The Log to which all SAX event related logging calls will be made.
                         */
                        // @ts-ignore
                        saxLog: org.apache.juli.logging.Log
                        // @ts-ignore
                        public static setPropertySource(propertySource: org.apache.tomcat.util.IntrospectionUtils.PropertySource): void
                        // @ts-ignore
                        public static replaceSystemProperties(): void
                        /**
                         * Return the currently mapped namespace URI for the specified prefix,
                         * if any; otherwise return <code>null</code>.  These mappings come and
                         * go dynamically as the document is parsed.
                         * @param prefix Prefix to look up
                         * @return the namespace URI
                         */
                        // @ts-ignore
                        public findNamespaceURI(prefix: java.lang.String | string): string
                        /**
                         * Return the class loader to be used for instantiating application objects
                         * when required.  This is determined based upon the following rules:
                         * <ul>
                         * <li>The class loader set by <code>setClassLoader()</code>, if any</li>
                         * <li>The thread context class loader, if it exists and the
                         * <code>useContextClassLoader</code> property is set to true</li>
                         * <li>The class loader used to load the Digester class itself.
                         * </ul>
                         * @return the classloader
                         */
                        // @ts-ignore
                        public getClassLoader(): java.lang.ClassLoader
                        /**
                         * Set the class loader to be used for instantiating application objects
                         * when required.
                         * @param classLoader The new class loader to use, or <code>null</code>
                         *   to revert to the standard rules
                         */
                        // @ts-ignore
                        public setClassLoader(classLoader: java.lang.ClassLoader): void
                        /**
                         * @return the current depth of the element stack.
                         */
                        // @ts-ignore
                        public getCount(): number /*int*/
                        /**
                         * @return the name of the XML element that is currently being processed.
                         */
                        // @ts-ignore
                        public getCurrentElementName(): string
                        /**
                         * @return the error handler for this Digester.
                         */
                        // @ts-ignore
                        public getErrorHandler(): org.xml.sax.ErrorHandler
                        /**
                         * Set the error handler for this Digester.
                         * @param errorHandler The new error handler
                         */
                        // @ts-ignore
                        public setErrorHandler(errorHandler: org.xml.sax.ErrorHandler): void
                        /**
                         * SAX parser factory method.
                         * @return the SAXParserFactory we will use, creating one if necessary.
                         * @throws ParserConfigurationException Error creating parser
                         * @throws SAXNotSupportedException Error creating parser
                         * @throws SAXNotRecognizedException Error creating parser
                         */
                        // @ts-ignore
                        public getFactory(): javax.xml.parsers.SAXParserFactory
                        /**
                         * Sets a flag indicating whether the requested feature is supported
                         * by the underlying implementation of <code>org.xml.sax.XMLReader</code>.
                         * See <a href="http://www.saxproject.org/apidoc/xml/sax/package-summary.html#package-description">
                         * http://www.saxproject.org/apidoc/xml/sax/package-summary.html#package-description</a>
                         * for information about the standard SAX2 feature flags.  In order to be
                         * effective, this method must be called <strong>before</strong> the
                         * <code>getParser()</code> method is called for the first time, either
                         * directly or indirectly.
                         * @param feature Name of the feature to set the status for
                         * @param value The new value for this feature
                         * @exception ParserConfigurationException if a parser configuration error
                         *   occurs
                         * @exception SAXNotRecognizedException if the property name is
                         *   not recognized
                         * @exception SAXNotSupportedException if the property name is
                         *   recognized but not supported
                         */
                        // @ts-ignore
                        public setFeature(feature: java.lang.String | string, value: boolean): void
                        /**
                         * @return the current Logger associated with this instance of the Digester
                         */
                        // @ts-ignore
                        public getLogger(): org.apache.juli.logging.Log
                        /**
                         * Set the current logger for this Digester.
                         * @param log The logger that will be used
                         */
                        // @ts-ignore
                        public setLogger(log: org.apache.juli.logging.Log): void
                        /**
                         * Gets the logger used for logging SAX-related information.
                         * <strong>Note</strong> the output is finely grained.
                         * @since 1.6
                         * @return the SAX logger
                         */
                        // @ts-ignore
                        public getSAXLogger(): org.apache.juli.logging.Log
                        /**
                         * Sets the logger used for logging SAX-related information.
                         * <strong>Note</strong> the output is finely grained.
                         * @param saxLog Log, not null
                         * @since 1.6
                         */
                        // @ts-ignore
                        public setSAXLogger(saxLog: org.apache.juli.logging.Log): void
                        /**
                         * @return the current rule match path
                         */
                        // @ts-ignore
                        public getMatch(): string
                        /**
                         * @return the "namespace aware" flag for parsers we create.
                         */
                        // @ts-ignore
                        public getNamespaceAware(): boolean
                        /**
                         * Set the "namespace aware" flag for parsers we create.
                         * @param namespaceAware The new "namespace aware" flag
                         */
                        // @ts-ignore
                        public setNamespaceAware(namespaceAware: boolean): void
                        /**
                         * Set the public id of the current file being parse.
                         * @param publicId the DTD/Schema public's id.
                         */
                        // @ts-ignore
                        public setPublicId(publicId: java.lang.String | string): void
                        /**
                         * @return the public identifier of the DTD we are currently
                         *  parsing under, if any.
                         */
                        // @ts-ignore
                        public getPublicId(): string
                        /**
                         * @return the SAXParser we will use to parse the input stream.  If there
                         *  is a problem creating the parser, return <code>null</code>.
                         */
                        // @ts-ignore
                        public getParser(): javax.xml.parsers.SAXParser
                        /**
                         * Return the current value of the specified property for the underlying
                         * <code>XMLReader</code> implementation.
                         * See <a href="http://www.saxproject.org/apidoc/xml/sax/package-summary.html#package-description">
                         * http://www.saxproject.org/apidoc/xml/sax/package-summary.html#package-description</a>
                         * for information about the standard SAX2 properties.
                         * @param property Property name to be retrieved
                         * @return the property value
                         * @exception SAXNotRecognizedException if the property name is
                         *   not recognized
                         * @exception SAXNotSupportedException if the property name is
                         *   recognized but not supported
                         */
                        // @ts-ignore
                        public getProperty(property: java.lang.String | string): any
                        /**
                         * Return the <code>Rules</code> implementation object containing our
                         * rules collection and associated matching policy.  If none has been
                         * established, a default implementation will be created and returned.
                         * @return the rules
                         */
                        // @ts-ignore
                        public getRules(): org.apache.tomcat.util.digester.Rules
                        /**
                         * Set the <code>Rules</code> implementation object containing our
                         * rules collection and associated matching policy.
                         * @param rules New Rules implementation
                         */
                        // @ts-ignore
                        public setRules(rules: org.apache.tomcat.util.digester.Rules): void
                        /**
                         * @return the boolean as to whether the context classloader should be used.
                         */
                        // @ts-ignore
                        public getUseContextClassLoader(): boolean
                        /**
                         * Determine whether to use the Context ClassLoader (the one found by
                         * calling <code>Thread.currentThread().getContextClassLoader()</code>)
                         * to resolve/load classes that are defined in various rules.  If not
                         * using Context ClassLoader, then the class-loading defaults to
                         * using the calling-class' ClassLoader.
                         * @param use determines whether to use Context ClassLoader.
                         */
                        // @ts-ignore
                        public setUseContextClassLoader(use: boolean): void
                        /**
                         * @return the validating parser flag.
                         */
                        // @ts-ignore
                        public getValidating(): boolean
                        /**
                         * Set the validating parser flag.  This must be called before
                         * <code>parse()</code> is called the first time.
                         * @param validating The new validating parser flag.
                         */
                        // @ts-ignore
                        public setValidating(validating: boolean): void
                        /**
                         * @return the rules validation flag.
                         */
                        // @ts-ignore
                        public getRulesValidation(): boolean
                        /**
                         * Set the rules validation flag.  This must be called before
                         * <code>parse()</code> is called the first time.
                         * @param rulesValidation The new rules validation flag.
                         */
                        // @ts-ignore
                        public setRulesValidation(rulesValidation: boolean): void
                        /**
                         * @return the fake attributes list.
                         */
                        // @ts-ignore
                        public getFakeAttributes(): java.util.Map<java.lang.Class<any>, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                        /**
                         * Determine if an attribute is a fake attribute.
                         * @param object The object
                         * @param name The attribute name
                         * @return <code>true</code> if this is a fake attribute
                         */
                        // @ts-ignore
                        public isFakeAttribute(object: java.lang.Object | any, name: java.lang.String | string): boolean
                        /**
                         * Set the fake attributes.
                         * @param fakeAttributes The new fake attributes.
                         */
                        // @ts-ignore
                        public setFakeAttributes(fakeAttributes: java.util.Map<java.lang.Class<any>, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>): void
                        /**
                         * Return the XMLReader to be used for parsing the input document.
                         * FIX ME: there is a bug in JAXP/XERCES that prevent the use of a
                         * parser that contains a schema with a DTD.
                         * @return the XML reader
                         * @exception SAXException if no XMLReader can be instantiated
                         */
                        // @ts-ignore
                        public getXMLReader(): org.xml.sax.XMLReader
                        /**
                         * Process notification of character data received from the body of
                         * an XML element.
                         * @param buffer The characters from the XML document
                         * @param start Starting offset into the buffer
                         * @param length Number of characters from the buffer
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public characters(buffer: string[], start: number /*int*/, length: number /*int*/): void
                        /**
                         * Process notification of the end of the document being reached.
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public endDocument(): void
                        /**
                         * Process notification of the end of an XML element being reached.
                         * @param namespaceURI - The Namespace URI, or the empty string if the
                         *    element has no Namespace URI or if Namespace processing is not
                         *    being performed.
                         * @param localName - The local name (without prefix), or the empty
                         *    string if Namespace processing is not being performed.
                         * @param qName - The qualified XML 1.0 name (with prefix), or the
                         *    empty string if qualified names are not available.
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public endElement(namespaceURI: java.lang.String | string, localName: java.lang.String | string, qName: java.lang.String | string): void
                        /**
                         * Process notification that a namespace prefix is going out of scope.
                         * @param prefix Prefix that is going out of scope
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public endPrefixMapping(prefix: java.lang.String | string): void
                        /**
                         * Process notification of ignorable whitespace received from the body of
                         * an XML element.
                         * @param buffer The characters from the XML document
                         * @param start Starting offset into the buffer
                         * @param len Number of characters from the buffer
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public ignorableWhitespace(buffer: string[], start: number /*int*/, len: number /*int*/): void
                        /**
                         * Process notification of a processing instruction that was encountered.
                         * @param target The processing instruction target
                         * @param data The processing instruction data (if any)
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public processingInstruction(target: java.lang.String | string, data: java.lang.String | string): void
                        /**
                         * Gets the document locator associated with our parser.
                         * @return the Locator supplied by the document parser
                         */
                        // @ts-ignore
                        public getDocumentLocator(): org.xml.sax.Locator
                        /**
                         * Sets the document locator associated with our parser.
                         * @param locator The new locator
                         */
                        // @ts-ignore
                        public setDocumentLocator(locator: org.xml.sax.Locator): void
                        /**
                         * Process notification of a skipped entity.
                         * @param name Name of the skipped entity
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public skippedEntity(name: java.lang.String | string): void
                        /**
                         * Process notification of the beginning of the document being reached.
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public startDocument(): void
                        /**
                         * Process notification of the start of an XML element being reached.
                         * @param namespaceURI The Namespace URI, or the empty string if the element
                         *    has no Namespace URI or if Namespace processing is not being performed.
                         * @param localName The local name (without prefix), or the empty
                         *    string if Namespace processing is not being performed.
                         * @param qName The qualified name (with prefix), or the empty
                         *    string if qualified names are not available.\
                         * @param list The attributes attached to the element. If there are
                         *    no attributes, it shall be an empty Attributes object.
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public startElement(namespaceURI: java.lang.String | string, localName: java.lang.String | string, qName: java.lang.String | string, list: org.xml.sax.Attributes): void
                        /**
                         * Process notification that a namespace prefix is coming in to scope.
                         * @param prefix Prefix that is being declared
                         * @param namespaceURI Corresponding namespace URI being mapped to
                         * @exception SAXException if a parsing error is to be reported
                         */
                        // @ts-ignore
                        public startPrefixMapping(prefix: java.lang.String | string, namespaceURI: java.lang.String | string): void
                        /**
                         * Receive notification of a notation declaration event.
                         * @param name The notation name
                         * @param publicId The public identifier (if any)
                         * @param systemId The system identifier (if any)
                         */
                        // @ts-ignore
                        public notationDecl(name: java.lang.String | string, publicId: java.lang.String | string, systemId: java.lang.String | string): void
                        /**
                         * Receive notification of an unparsed entity declaration event.
                         * @param name The unparsed entity name
                         * @param publicId The public identifier (if any)
                         * @param systemId The system identifier (if any)
                         * @param notation The name of the associated notation
                         */
                        // @ts-ignore
                        public unparsedEntityDecl(name: java.lang.String | string, publicId: java.lang.String | string, systemId: java.lang.String | string, notation: java.lang.String | string): void
                        /**
                         * Set the <code>EntityResolver</code> used by SAX when resolving
                         * public id and system id.
                         * This must be called before the first call to <code>parse()</code>.
                         * @param entityResolver a class that implement the <code>EntityResolver</code> interface.
                         */
                        // @ts-ignore
                        public setEntityResolver(entityResolver: org.xml.sax.EntityResolver): void
                        /**
                         * Return the Entity Resolver used by the SAX parser.
                         * @return Return the Entity Resolver used by the SAX parser.
                         */
                        // @ts-ignore
                        public getEntityResolver(): org.xml.sax.EntityResolver
                        // @ts-ignore
                        public resolveEntity(name: java.lang.String | string, publicId: java.lang.String | string, baseURI: java.lang.String | string, systemId: java.lang.String | string): org.xml.sax.InputSource
                        // @ts-ignore
                        public startDTD(name: java.lang.String | string, publicId: java.lang.String | string, systemId: java.lang.String | string): void
                        /**
                         * Forward notification of a parsing error to the application supplied
                         * error handler (if any).
                         * @param exception The error information
                         * @exception SAXException if a parsing exception occurs
                         */
                        // @ts-ignore
                        public error(exception: org.xml.sax.SAXParseException): void
                        /**
                         * Forward notification of a fatal parsing error to the application
                         * supplied error handler (if any).
                         * @param exception The fatal error information
                         * @exception SAXException if a parsing exception occurs
                         */
                        // @ts-ignore
                        public fatalError(exception: org.xml.sax.SAXParseException): void
                        /**
                         * Forward notification of a parse warning to the application supplied
                         * error handler (if any).
                         * @param exception The warning information
                         * @exception SAXException if a parsing exception occurs
                         */
                        // @ts-ignore
                        public warning(exception: org.xml.sax.SAXParseException): void
                        /**
                         * Parse the content of the specified file using this Digester.  Returns
                         * the root element from the object stack (if any).
                         * @param file File containing the XML data to be parsed
                         * @return the root object
                         * @exception IOException if an input/output error occurs
                         * @exception SAXException if a parsing exception occurs
                         */
                        // @ts-ignore
                        public parse(file: java.io.File): any
                        /**
                         * Parse the content of the specified input source using this Digester.
                         * Returns the root element from the object stack (if any).
                         * @param input Input source containing the XML data to be parsed
                         * @return the root object
                         * @exception IOException if an input/output error occurs
                         * @exception SAXException if a parsing exception occurs
                         */
                        // @ts-ignore
                        public parse(input: org.xml.sax.InputSource): any
                        /**
                         * Parse the content of the specified input stream using this Digester.
                         * Returns the root element from the object stack (if any).
                         * @param input Input stream containing the XML data to be parsed
                         * @return the root object
                         * @exception IOException if an input/output error occurs
                         * @exception SAXException if a parsing exception occurs
                         */
                        // @ts-ignore
                        public parse(input: java.io.InputStream): any
                        /**
                         * <p>Register the specified DTD URL for the specified public identifier.
                         * This must be called before the first call to <code>parse()</code>.
                         * </p><p>
                         * <code>Digester</code> contains an internal <code>EntityResolver</code>
                         * implementation. This maps <code>PUBLICID</code>'s to URLs
                         * (from which the resource will be loaded). A common use case for this
                         * method is to register local URLs (possibly computed at runtime by a
                         * classloader) for DTDs. This allows the performance advantage of using
                         * a local version without having to ensure every <code>SYSTEM</code>
                         * URI on every processed xml document is local. This implementation provides
                         * only basic functionality. If more sophisticated features are required,
                         * using {@link #setEntityResolver} to set a custom resolver is recommended.
                         * </p><p>
                         * <strong>Note:</strong> This method will have no effect when a custom
                         * <code>EntityResolver</code> has been set. (Setting a custom
                         * <code>EntityResolver</code> overrides the internal implementation.)
                         * </p>
                         * @param publicId Public identifier of the DTD to be resolved
                         * @param entityURL The URL to use for reading this DTD
                         */
                        // @ts-ignore
                        public register(publicId: java.lang.String | string, entityURL: java.lang.String | string): void
                        /**
                         * <p>Register a new Rule matching the specified pattern.
                         * This method sets the <code>Digester</code> property on the rule.</p>
                         * @param pattern Element matching pattern
                         * @param rule Rule to be registered
                         */
                        // @ts-ignore
                        public addRule(pattern: java.lang.String | string, rule: org.apache.tomcat.util.digester.Rule): void
                        /**
                         * Register a set of Rule instances defined in a RuleSet.
                         * @param ruleSet The RuleSet instance to configure from
                         */
                        // @ts-ignore
                        public addRuleSet(ruleSet: org.apache.tomcat.util.digester.RuleSet): void
                        /**
                         * Add an "call method" rule for a method which accepts no arguments.
                         * @param pattern Element matching pattern
                         * @param methodName Method name to be called
                         * @see CallMethodRule
                         */
                        // @ts-ignore
                        public addCallMethod(pattern: java.lang.String | string, methodName: java.lang.String | string): void
                        /**
                         * Add an "call method" rule for the specified parameters.
                         * @param pattern Element matching pattern
                         * @param methodName Method name to be called
                         * @param paramCount Number of expected parameters (or zero
                         *   for a single parameter from the body of this element)
                         * @see CallMethodRule
                         */
                        // @ts-ignore
                        public addCallMethod(pattern: java.lang.String | string, methodName: java.lang.String | string, paramCount: number /*int*/): void
                        /**
                         * Add a "call parameter" rule for the specified parameters.
                         * @param pattern Element matching pattern
                         * @param paramIndex Zero-relative parameter index to set
                         *   (from the body of this element)
                         * @see CallParamRule
                         */
                        // @ts-ignore
                        public addCallParam(pattern: java.lang.String | string, paramIndex: number /*int*/): void
                        /**
                         * Add a "factory create" rule for the specified parameters.
                         * @param pattern Element matching pattern
                         * @param creationFactory Previously instantiated ObjectCreationFactory
                         *   to be utilized
                         * @param ignoreCreateExceptions when <code>true</code> any exceptions thrown during
                         *  object creation will be ignored.
                         * @see FactoryCreateRule
                         */
                        // @ts-ignore
                        public addFactoryCreate(pattern: java.lang.String | string, creationFactory: org.apache.tomcat.util.digester.ObjectCreationFactory, ignoreCreateExceptions: boolean): void
                        /**
                         * Add an "object create" rule for the specified parameters.
                         * @param pattern Element matching pattern
                         * @param className Java class name to be created
                         * @see ObjectCreateRule
                         */
                        // @ts-ignore
                        public addObjectCreate(pattern: java.lang.String | string, className: java.lang.String | string): void
                        /**
                         * Add an "object create" rule for the specified parameters.
                         * @param pattern Element matching pattern
                         * @param className Default Java class name to be created
                         * @param attributeName Attribute name that optionally overrides
                         *   the default Java class name to be created
                         * @see ObjectCreateRule
                         */
                        // @ts-ignore
                        public addObjectCreate(pattern: java.lang.String | string, className: java.lang.String | string, attributeName: java.lang.String | string): void
                        /**
                         * Add a "set next" rule for the specified parameters.
                         * @param pattern Element matching pattern
                         * @param methodName Method name to call on the parent element
                         * @param paramType Java class name of the expected parameter type
                         *   (if you wish to use a primitive type, specify the corresponding
                         *   Java wrapper class instead, such as <code>java.lang.Boolean</code>
                         *   for a <code>boolean</code> parameter)
                         * @see SetNextRule
                         */
                        // @ts-ignore
                        public addSetNext(pattern: java.lang.String | string, methodName: java.lang.String | string, paramType: java.lang.String | string): void
                        /**
                         * Add a "set properties" rule for the specified parameters.
                         * @param pattern Element matching pattern
                         * @see SetPropertiesRule
                         */
                        // @ts-ignore
                        public addSetProperties(pattern: java.lang.String | string): void
                        /**
                         * Clear the current contents of the object stack.
                         * <p>
                         * Calling this method <i>might</i> allow another document of the same type
                         * to be correctly parsed. However this method was not intended for this
                         * purpose. In general, a separate Digester object should be created for
                         * each document to be parsed.
                         */
                        // @ts-ignore
                        public clear(): void
                        // @ts-ignore
                        public reset(): void
                        /**
                         * Return the top object on the stack without removing it.  If there are
                         * no objects on the stack, return <code>null</code>.
                         * @return the top object
                         */
                        // @ts-ignore
                        public peek(): any
                        /**
                         * Return the n'th object down the stack, where 0 is the top element
                         * and [getCount()-1] is the bottom element.  If the specified index
                         * is out of range, return <code>null</code>.
                         * @param n Index of the desired element, where 0 is the top of the stack,
                         *   1 is the next element down, and so on.
                         * @return the specified object
                         */
                        // @ts-ignore
                        public peek(n: number /*int*/): any
                        /**
                         * Pop the top object off of the stack, and return it.  If there are
                         * no objects on the stack, return <code>null</code>.
                         * @return the top object
                         */
                        // @ts-ignore
                        public pop(): any
                        /**
                         * Push a new object onto the top of the object stack.
                         * @param object The new object
                         */
                        // @ts-ignore
                        public push(object: java.lang.Object | any): void
                        /**
                         * When the Digester is being used as a SAXContentHandler,
                         * this method allows you to access the root object that has been
                         * created after parsing.
                         * @return the root object that has been created after parsing
                         *   or null if the digester has not parsed any XML yet.
                         */
                        // @ts-ignore
                        public getRoot(): any
                        /**
                         * <p>
                         * Provide a hook for lazy configuration of this <code>Digester</code>
                         * instance.  The default implementation does nothing, but subclasses
                         * can override as needed.
                         * </p>
                         * <p>
                         * <strong>Note</strong> This method may be called more than once.
                         * </p>
                         */
                        // @ts-ignore
                        configure(): void
                        /**
                         * <p>Return the top object on the parameters stack without removing it.  If there are
                         * no objects on the stack, return <code>null</code>.</p>
                         * <p>The parameters stack is used to store <code>CallMethodRule</code> parameters.
                         * See {@link #params}.</p>
                         * @return the top object on the parameters stack
                         */
                        // @ts-ignore
                        public peekParams(): any
                        /**
                         * <p>Pop the top object off of the parameters stack, and return it.  If there are
                         * no objects on the stack, return <code>null</code>.</p>
                         * <p>The parameters stack is used to store <code>CallMethodRule</code> parameters.
                         * See {@link #params}.</p>
                         * @return the top object on the parameters stack
                         */
                        // @ts-ignore
                        public popParams(): any
                        /**
                         * <p>Push a new object onto the top of the parameters stack.</p>
                         * <p>The parameters stack is used to store <code>CallMethodRule</code> parameters.
                         * See {@link #params}.</p>
                         * @param object The new object
                         */
                        // @ts-ignore
                        public pushParams(object: java.lang.Object | any): void
                        /**
                         * Create a SAX exception which also understands about the location in
                         * the digester file where the exception occurs
                         * @param message The error message
                         * @param e The root cause
                         * @return the new exception
                         */
                        // @ts-ignore
                        public createSAXException(message: java.lang.String | string, e: java.lang.Exception): org.xml.sax.SAXException
                        /**
                         * Create a SAX exception which also understands about the location in
                         * the digester file where the exception occurs
                         * @param e The root cause
                         * @return the new exception
                         */
                        // @ts-ignore
                        public createSAXException(e: java.lang.Exception): org.xml.sax.SAXException
                        /**
                         * Create a SAX exception which also understands about the location in
                         * the digester file where the exception occurs
                         * @param message The error message
                         * @return the new exception
                         */
                        // @ts-ignore
                        public createSAXException(message: java.lang.String | string): org.xml.sax.SAXException
                    }
                }
            }
        }
    }
}

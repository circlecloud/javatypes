declare namespace javax {
    namespace xml {
        namespace stream {
            /**
             * This interface defines a utility class for creating instances of
             * XMLEvents
             * @version 1.2
             * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
             * @see javax.xml.stream.events.StartElement
             * @see javax.xml.stream.events.EndElement
             * @see javax.xml.stream.events.ProcessingInstruction
             * @see javax.xml.stream.events.Comment
             * @see javax.xml.stream.events.Characters
             * @see javax.xml.stream.events.StartDocument
             * @see javax.xml.stream.events.EndDocument
             * @see javax.xml.stream.events.DTD
             * @since 1.6
             */
            // @ts-ignore
            abstract class XMLEventFactory extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Creates a new instance of the factory in exactly the same manner as the
                 * {@link #newFactory()} method.
                 * @throws FactoryConfigurationError if an instance of this factory cannot be loaded
                 */
                // @ts-ignore
                public static newInstance(): javax.xml.stream.XMLEventFactory
                /**
                 * Create a new instance of the factory.
                 * <p>
                 * This static method creates a new factory instance.
                 * This method uses the following ordered lookup procedure to determine
                 * the XMLEventFactory implementation class to load:
                 * </p>
                 * <ul>
                 * <li>
                 * Use the javax.xml.stream.XMLEventFactory system property.
                 * </li>
                 * <li>
                 * Use the properties file "lib/stax.properties" in the JRE directory.
                 * This configuration file is in standard java.util.Properties format
                 * and contains the fully qualified name of the implementation class
                 * with the key being the system property defined above.
                 * </li>
                 * <li>
                 * Use the service-provider loading facilities, defined by the
                 * {@link java.util.ServiceLoader} class, to attempt to locate and load an
                 * implementation of the service using the {@linkplain
                 * java.util.ServiceLoader#load(java.lang.Class) default loading mechanism}:
                 * the service-provider loading facility will use the {@linkplain
                 * java.lang.Thread#getContextClassLoader() current thread's context class loader}
                 * to attempt to load the service. If the context class
                 * loader is null, the {@linkplain
                 * ClassLoader#getSystemClassLoader() system class loader} will be used.
                 * </li>
                 * <li>
                 * Otherwise, the system-default implementation is returned.
                 * </li>
                 * </ul>
                 * <p>
                 * Once an application has obtained a reference to a XMLEventFactory it
                 * can use the factory to configure and obtain stream instances.
                 * </p>
                 * <p>
                 * Note that this is a new method that replaces the deprecated newInstance() method.
                 * No changes in behavior are defined by this replacement method relative to
                 * the deprecated method.
                 * </p>
                 * @throws FactoryConfigurationError in case of {#linkplain
                 *    java.util.ServiceConfigurationError service configuration error} or if
                 *    the implementation is not available or cannot be instantiated.
                 */
                // @ts-ignore
                public static newFactory(): javax.xml.stream.XMLEventFactory
                /**
                 * Create a new instance of the factory
                 * @param factoryId             Name of the factory to find, same as
                 *                               a property name
                 * @param classLoader           classLoader to use
                 * @return the factory implementation
                 * @throws FactoryConfigurationError if an instance of this factory cannot be loaded
                 * @deprecated This method has been deprecated to maintain API consistency.
                 *               All newInstance methods have been replaced with corresponding
                 *               newFactory methods. The replacement {#link
                 *               #newFactory(java.lang.String, java.lang.ClassLoader)}
                 *               method defines no changes in behavior.
                 */
                // @ts-ignore
                public static newInstance(factoryId: java.lang.String | string, classLoader: java.lang.ClassLoader): javax.xml.stream.XMLEventFactory
                /**
                 * Create a new instance of the factory.
                 * If the classLoader argument is null, then the ContextClassLoader is used.
                 * <p>
                 * This method uses the following ordered lookup procedure to determine
                 * the XMLEventFactory implementation class to load:
                 * </p>
                 * <ul>
                 * <li>
                 * Use the value of the system property identified by {@code factoryId}.
                 * </li>
                 * <li>
                 * Use the properties file "lib/stax.properties" in the JRE directory.
                 * This configuration file is in standard java.util.Properties format
                 * and contains the fully qualified name of the implementation class
                 * with the key being the given {@code factoryId}.
                 * </li>
                 * <li>
                 * If {@code factoryId} is "javax.xml.stream.XMLEventFactory",
                 * use the service-provider loading facilities, defined by the
                 * {@link java.util.ServiceLoader} class, to attempt to {@linkplain
                 * java.util.ServiceLoader#load(java.lang.Class, java.lang.ClassLoader) locate and load}
                 * an implementation of the service using the specified {@code ClassLoader}.
                 * If {@code classLoader} is null, the {@linkplain
                 * java.util.ServiceLoader#load(java.lang.Class) default loading mechanism} will apply:
                 * That is, the service-provider loading facility will use the {@linkplain
                 * java.lang.Thread#getContextClassLoader() current thread's context class loader}
                 * to attempt to load the service. If the context class
                 * loader is null, the {@linkplain
                 * ClassLoader#getSystemClassLoader() system class loader} will be used.
                 * </li>
                 * <li>
                 * Otherwise, throws a {@link FactoryConfigurationError}.
                 * </li>
                 * </ul>
                 * <p>
                 * Note that this is a new method that replaces the deprecated
                 * {@link #newInstance(java.lang.String, java.lang.ClassLoader)
                 * newInstance(String factoryId, ClassLoader classLoader)} method.
                 * No changes in behavior are defined by this replacement method relative
                 * to the deprecated method.
                 * </p>
                 * @apiNote The parameter factoryId defined here is inconsistent with that
                 *  of other JAXP factories where the first parameter is fully qualified
                 *  factory class name that provides implementation of the factory.
                 * @param factoryId             Name of the factory to find, same as
                 *                               a property name
                 * @param classLoader           classLoader to use
                 * @return the factory implementation
                 * @throws FactoryConfigurationError in case of {#linkplain
                 *    java.util.ServiceConfigurationError service configuration error} or if
                 *    the implementation is not available or cannot be instantiated.
                 */
                // @ts-ignore
                public static newFactory(factoryId: java.lang.String | string, classLoader: java.lang.ClassLoader): javax.xml.stream.XMLEventFactory
                /**
                 * This method allows setting of the Location on each event that
                 * is created by this factory.  The values are copied by value into
                 * the events created by this factory.  To reset the location
                 * information set the location to null.
                 * @param location the location to set on each event created
                 */
                // @ts-ignore
                public abstract setLocation(location: javax.xml.stream.Location): void
                /**
                 * Create a new Attribute
                 * @param prefix the prefix of this attribute, may not be null
                 * @param namespaceURI the attribute value is set to this value, may not be null
                 * @param localName the local name of the XML name of the attribute, localName cannot be null
                 * @param value the attribute value to set, may not be null
                 * @return the Attribute with specified values
                 */
                // @ts-ignore
                public abstract createAttribute(prefix: java.lang.String | string, namespaceURI: java.lang.String | string, localName: java.lang.String | string, value: java.lang.String | string): javax.xml.stream.events.Attribute
                /**
                 * Create a new Attribute
                 * @param localName the local name of the XML name of the attribute, localName cannot be null
                 * @param value the attribute value to set, may not be null
                 * @return the Attribute with specified values
                 */
                // @ts-ignore
                public abstract createAttribute(localName: java.lang.String | string, value: java.lang.String | string): javax.xml.stream.events.Attribute
                /**
                 * Create a new Attribute
                 * @param name the qualified name of the attribute, may not be null
                 * @param value the attribute value to set, may not be null
                 * @return the Attribute with specified values
                 */
                // @ts-ignore
                public abstract createAttribute(name: javax.xml.namespace.QName, value: java.lang.String | string): javax.xml.stream.events.Attribute
                /**
                 * Create a new default Namespace
                 * @param namespaceURI the default namespace uri
                 * @return the Namespace with the specified value
                 */
                // @ts-ignore
                public abstract createNamespace(namespaceURI: java.lang.String | string): javax.xml.stream.events.Namespace
                /**
                 * Create a new Namespace
                 * @param prefix the prefix of this namespace, may not be null
                 * @param namespaceUri the attribute value is set to this value, may not be null
                 * @return the Namespace with the specified values
                 */
                // @ts-ignore
                public abstract createNamespace(prefix: java.lang.String | string, namespaceUri: java.lang.String | string): javax.xml.stream.events.Namespace
                /**
                 * Create a new StartElement.  Namespaces can be added to this StartElement
                 * by passing in an Iterator that walks over a set of Namespace interfaces.
                 * Attributes can be added to this StartElement by passing an iterator
                 * that walks over a set of Attribute interfaces.
                 * @param name the qualified name of the attribute, may not be null
                 * @param attributes an optional unordered set of objects that
                 *  implement Attribute to add to the new StartElement, may be null
                 * @param namespaces an optional unordered set of objects that
                 *  implement Namespace to add to the new StartElement, may be null
                 * @return an instance of the requested StartElement
                 */
                // @ts-ignore
                public abstract createStartElement(name: javax.xml.namespace.QName, attributes: java.util.Iterator<any>, namespaces: java.util.Iterator<any>): javax.xml.stream.events.StartElement
                /**
                 * Create a new StartElement.  This defaults the NamespaceContext to
                 * an empty NamespaceContext.  Querying this event for its namespaces or
                 * attributes will result in an empty iterator being returned.
                 * @param namespaceUri the uri of the QName of the new StartElement
                 * @param localName the local name of the QName of the new StartElement
                 * @param prefix the prefix of the QName of the new StartElement
                 * @return an instance of the requested StartElement
                 */
                // @ts-ignore
                public abstract createStartElement(prefix: java.lang.String | string, namespaceUri: java.lang.String | string, localName: java.lang.String | string): javax.xml.stream.events.StartElement
                /**
                 * Create a new StartElement.  Namespaces can be added to this StartElement
                 * by passing in an Iterator that walks over a set of Namespace interfaces.
                 * Attributes can be added to this StartElement by passing an iterator
                 * that walks over a set of Attribute interfaces.
                 * @param namespaceUri the uri of the QName of the new StartElement
                 * @param localName the local name of the QName of the new StartElement
                 * @param prefix the prefix of the QName of the new StartElement
                 * @param attributes an unordered set of objects that implement
                 *  Attribute to add to the new StartElement
                 * @param namespaces an unordered set of objects that implement
                 *  Namespace to add to the new StartElement
                 * @return an instance of the requested StartElement
                 */
                // @ts-ignore
                public abstract createStartElement(prefix: java.lang.String | string, namespaceUri: java.lang.String | string, localName: java.lang.String | string, attributes: java.util.Iterator<any>, namespaces: java.util.Iterator<any>): javax.xml.stream.events.StartElement
                /**
                 * Create a new StartElement.  Namespaces can be added to this StartElement
                 * by passing in an Iterator that walks over a set of Namespace interfaces.
                 * Attributes can be added to this StartElement by passing an iterator
                 * that walks over a set of Attribute interfaces.
                 * @param namespaceUri the uri of the QName of the new StartElement
                 * @param localName the local name of the QName of the new StartElement
                 * @param prefix the prefix of the QName of the new StartElement
                 * @param attributes an unordered set of objects that implement
                 *  Attribute to add to the new StartElement, may be null
                 * @param namespaces an unordered set of objects that implement
                 *  Namespace to add to the new StartElement, may be null
                 * @param context the namespace context of this element
                 * @return an instance of the requested StartElement
                 */
                // @ts-ignore
                public abstract createStartElement(prefix: java.lang.String | string, namespaceUri: java.lang.String | string, localName: java.lang.String | string, attributes: java.util.Iterator<any>, namespaces: java.util.Iterator<any>, context: javax.xml.namespace.NamespaceContext): javax.xml.stream.events.StartElement
                /**
                 * Create a new EndElement
                 * @param name the qualified name of the EndElement
                 * @param namespaces an optional unordered set of objects that
                 *  implement Namespace that have gone out of scope, may be null
                 * @return an instance of the requested EndElement
                 */
                // @ts-ignore
                public abstract createEndElement(name: javax.xml.namespace.QName, namespaces: java.util.Iterator<any>): javax.xml.stream.events.EndElement
                /**
                 * Create a new EndElement
                 * @param namespaceUri the uri of the QName of the new StartElement
                 * @param localName the local name of the QName of the new StartElement
                 * @param prefix the prefix of the QName of the new StartElement
                 * @return an instance of the requested EndElement
                 */
                // @ts-ignore
                public abstract createEndElement(prefix: java.lang.String | string, namespaceUri: java.lang.String | string, localName: java.lang.String | string): javax.xml.stream.events.EndElement
                /**
                 * Create a new EndElement
                 * @param namespaceUri the uri of the QName of the new StartElement
                 * @param localName the local name of the QName of the new StartElement
                 * @param prefix the prefix of the QName of the new StartElement
                 * @param namespaces an unordered set of objects that implement
                 *  Namespace that have gone out of scope, may be null
                 * @return an instance of the requested EndElement
                 */
                // @ts-ignore
                public abstract createEndElement(prefix: java.lang.String | string, namespaceUri: java.lang.String | string, localName: java.lang.String | string, namespaces: java.util.Iterator<any>): javax.xml.stream.events.EndElement
                /**
                 * Create a Characters event, this method does not check if the content
                 * is all whitespace.  To create a space event use #createSpace(String)
                 * @param content the string to create
                 * @return a Characters event
                 */
                // @ts-ignore
                public abstract createCharacters(content: java.lang.String | string): javax.xml.stream.events.Characters
                /**
                 * Create a Characters event with the CData flag set to true
                 * @param content the string to create
                 * @return a Characters event
                 */
                // @ts-ignore
                public abstract createCData(content: java.lang.String | string): javax.xml.stream.events.Characters
                /**
                 * Create a Characters event with the isSpace flag set to true
                 * @param content the content of the space to create
                 * @return a Characters event
                 */
                // @ts-ignore
                public abstract createSpace(content: java.lang.String | string): javax.xml.stream.events.Characters
                /**
                 * Create an ignorable space
                 * @param content the space to create
                 * @return a Characters event
                 */
                // @ts-ignore
                public abstract createIgnorableSpace(content: java.lang.String | string): javax.xml.stream.events.Characters
                /**
                 * Creates a new instance of a StartDocument event
                 * @return a StartDocument event
                 */
                // @ts-ignore
                public abstract createStartDocument(): javax.xml.stream.events.StartDocument
                /**
                 * Creates a new instance of a StartDocument event
                 * @param encoding the encoding style
                 * @param version the XML version
                 * @param standalone the status of standalone may be set to "true" or "false"
                 * @return a StartDocument event
                 */
                // @ts-ignore
                public abstract createStartDocument(encoding: java.lang.String | string, version: java.lang.String | string, standalone: boolean): javax.xml.stream.events.StartDocument
                /**
                 * Creates a new instance of a StartDocument event
                 * @param encoding the encoding style
                 * @param version the XML version
                 * @return a StartDocument event
                 */
                // @ts-ignore
                public abstract createStartDocument(encoding: java.lang.String | string, version: java.lang.String | string): javax.xml.stream.events.StartDocument
                /**
                 * Creates a new instance of a StartDocument event
                 * @param encoding the encoding style
                 * @return a StartDocument event
                 */
                // @ts-ignore
                public abstract createStartDocument(encoding: java.lang.String | string): javax.xml.stream.events.StartDocument
                /**
                 * Creates a new instance of an EndDocument event
                 * @return an EndDocument event
                 */
                // @ts-ignore
                public abstract createEndDocument(): javax.xml.stream.events.EndDocument
                /**
                 * Creates a new instance of a EntityReference event
                 * @param name The name of the reference
                 * @param declaration the declaration for the event
                 * @return an EntityReference event
                 */
                // @ts-ignore
                public abstract createEntityReference(name: java.lang.String | string, declaration: javax.xml.stream.events.EntityDeclaration): javax.xml.stream.events.EntityReference
                /**
                 * Create a comment
                 * @param text The text of the comment
                 *  a Comment event
                 */
                // @ts-ignore
                public abstract createComment(text: java.lang.String | string): javax.xml.stream.events.Comment
                /**
                 * Create a processing instruction
                 * @param target The target of the processing instruction
                 * @param data The text of the processing instruction
                 * @return a ProcessingInstruction event
                 */
                // @ts-ignore
                public abstract createProcessingInstruction(target: java.lang.String | string, data: java.lang.String | string): javax.xml.stream.events.ProcessingInstruction
                /**
                 * Create a document type definition event
                 * This string contains the entire document type declaration that matches
                 * the doctypedecl in the XML 1.0 specification
                 * @param dtd the text of the document type definition
                 * @return a DTD event
                 */
                // @ts-ignore
                public abstract createDTD(dtd: java.lang.String | string): javax.xml.stream.events.DTD
            }
        }
    }
}

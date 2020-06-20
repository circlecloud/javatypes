declare namespace javax {
    namespace xml {
        namespace stream {
            /**
             * Defines an abstract implementation of a factory for getting streams.
             * The following table defines the standard properties of this specification.
             * Each property varies in the level of support required by each implementation.
             * The level of support required is described in the 'Required' column.
             * <table border="2" rules="all" cellpadding="4">
             * <thead>
             * <tr>
             * <th align="center" colspan="5">
             * Configuration parameters
             * </th>
             * </tr>
             * </thead>
             * <tbody>
             * <tr>
             * <th>Property Name</th>
             * <th>Behavior</th>
             * <th>Return type</th>
             * <th>Default Value</th>
             * <th>Required</th>
             * </tr>
             * <tr><td>javax.xml.stream.isValidating</td><td>Turns on/off implementation specific DTD validation</td><td>Boolean</td><td>False</td><td>No</td></tr>
             * <tr><td>javax.xml.stream.isNamespaceAware</td><td>Turns on/off namespace processing for XML 1.0 support</td><td>Boolean</td><td>True</td><td>True (required) / False (optional)</td></tr>
             * <tr><td>javax.xml.stream.isCoalescing</td><td>Requires the processor to coalesce adjacent character data</td><td>Boolean</td><td>False</td><td>Yes</td></tr>
             * <tr><td>javax.xml.stream.isReplacingEntityReferences</td><td>replace internal entity references with their replacement text and report them as characters</td><td>Boolean</td><td>True</td><td>Yes</td></tr>
             * <tr><td>javax.xml.stream.isSupportingExternalEntities</td><td>Resolve external parsed entities</td><td>Boolean</td><td>Unspecified</td><td>Yes</td></tr>
             * <tr><td>javax.xml.stream.supportDTD</td><td>Use this property to request processors that do not support DTDs</td><td>Boolean</td><td>True</td><td>Yes</td></tr>
             * <tr><td>javax.xml.stream.reporter</td><td>sets/gets the impl of the XMLReporter </td><td>javax.xml.stream.XMLReporter</td><td>Null</td><td>Yes</td></tr>
             * <tr><td>javax.xml.stream.resolver</td><td>sets/gets the impl of the XMLResolver interface</td><td>javax.xml.stream.XMLResolver</td><td>Null</td><td>Yes</td></tr>
             * <tr><td>javax.xml.stream.allocator</td><td>sets/gets the impl of the XMLEventAllocator interface</td><td>javax.xml.stream.util.XMLEventAllocator</td><td>Null</td><td>Yes</td></tr>
             * </tbody>
             * </table>
             * @version 1.2
             * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
             * @see XMLOutputFactory
             * @see XMLEventReader
             * @see XMLStreamReader
             * @see EventFilter
             * @see XMLReporter
             * @see XMLResolver
             * @see javax.xml.stream.util.XMLEventAllocator
             * @since 1.6
             */
            // @ts-ignore
            class XMLInputFactory extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * The property used to turn on/off namespace support,
                 * this is to support XML 1.0 documents,
                 * only the true setting must be supported
                 */
                // @ts-ignore
                readonly IS_NAMESPACE_AWARE: string
                /**
                 * The property used to turn on/off implementation specific validation
                 */
                // @ts-ignore
                readonly IS_VALIDATING: string
                /**
                 * The property that requires the parser to coalesce adjacent character data sections
                 */
                // @ts-ignore
                readonly IS_COALESCING: string
                /**
                 * Requires the parser to replace internal
                 * entity references with their replacement
                 * text and report them as characters
                 */
                // @ts-ignore
                readonly IS_REPLACING_ENTITY_REFERENCES: string
                /**
                 * The property that requires the parser to resolve external parsed entities
                 */
                // @ts-ignore
                readonly IS_SUPPORTING_EXTERNAL_ENTITIES: string
                /**
                 * The property that requires the parser to support DTDs
                 */
                // @ts-ignore
                readonly SUPPORT_DTD: string
                /**
                 * The property used to
                 * set/get the implementation of the XMLReporter interface
                 */
                // @ts-ignore
                readonly REPORTER: string
                /**
                 * The property used to set/get the implementation of the XMLResolver
                 */
                // @ts-ignore
                readonly RESOLVER: string
                /**
                 * The property used to set/get the implementation of the allocator
                 */
                // @ts-ignore
                readonly ALLOCATOR: string
                /**
                 * Creates a new instance of the factory in exactly the same manner as the
                 * {@link #newFactory()} method.
                 * @throws FactoryConfigurationError if an instance of this factory cannot be loaded
                 */
                // @ts-ignore
                newInstance(): javax.xml.stream.XMLInputFactory
                /**
                 * Create a new instance of the factory.
                 * <p>
                 * This static method creates a new factory instance.
                 * This method uses the following ordered lookup procedure to determine
                 * the XMLInputFactory implementation class to load:
                 * </p>
                 * <ul>
                 * <li>
                 * Use the javax.xml.stream.XMLInputFactory system property.
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
                 * Once an application has obtained a reference to a XMLInputFactory it
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
                newFactory(): javax.xml.stream.XMLInputFactory
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
                 *               #newFactory(java.lang.String, java.lang.ClassLoader)} method
                 *               defines no changes in behavior.
                 */
                // @ts-ignore
                newInstance(factoryId: string, classLoader: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
                /**
                 * Create a new instance of the factory.
                 * If the classLoader argument is null, then the ContextClassLoader is used.
                 * <p>
                 * This method uses the following ordered lookup procedure to determine
                 * the XMLInputFactory implementation class to load:
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
                 * If {@code factoryId} is "javax.xml.stream.XMLInputFactory",
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
                 * @throws FactoryConfigurationError if an instance of this factory cannot be loaded
                 */
                // @ts-ignore
                newFactory(factoryId: string, classLoader: java.lang.ClassLoader): javax.xml.stream.XMLInputFactory
                /**
                 * Create a new XMLStreamReader from a reader
                 * @param reader the XML data to read from
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLStreamReader(reader: java.io.Reader): javax.xml.stream.XMLStreamReader
                /**
                 * Create a new XMLStreamReader from a JAXP source.  This method is optional.
                 * @param source the source to read from
                 * @throws UnsupportedOperationException if this method is not
                 *  supported by this XMLInputFactory
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLStreamReader(source: javax.xml.transform.Source): javax.xml.stream.XMLStreamReader
                /**
                 * Create a new XMLStreamReader from a java.io.InputStream
                 * @param stream the InputStream to read from
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLStreamReader(stream: java.io.InputStream): javax.xml.stream.XMLStreamReader
                /**
                 * Create a new XMLStreamReader from a java.io.InputStream
                 * @param stream the InputStream to read from
                 * @param encoding the character encoding of the stream
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLStreamReader(stream: java.io.InputStream, encoding: string): javax.xml.stream.XMLStreamReader
                /**
                 * Create a new XMLStreamReader from a java.io.InputStream
                 * @param systemId the system ID of the stream
                 * @param stream the InputStream to read from
                 */
                // @ts-ignore
                abstract createXMLStreamReader(systemId: string, stream: java.io.InputStream): javax.xml.stream.XMLStreamReader
                /**
                 * Create a new XMLStreamReader from a java.io.InputStream
                 * @param systemId the system ID of the stream
                 * @param reader the InputStream to read from
                 */
                // @ts-ignore
                abstract createXMLStreamReader(systemId: string, reader: java.io.Reader): javax.xml.stream.XMLStreamReader
                /**
                 * Create a new XMLEventReader from a reader
                 * @param reader the XML data to read from
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLEventReader(reader: java.io.Reader): javax.xml.stream.XMLEventReader
                /**
                 * Create a new XMLEventReader from a reader
                 * @param systemId the system ID of the input
                 * @param reader the XML data to read from
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLEventReader(systemId: string, reader: java.io.Reader): javax.xml.stream.XMLEventReader
                /**
                 * Create a new XMLEventReader from an XMLStreamReader.  After being used
                 * to construct the XMLEventReader instance returned from this method
                 * the XMLStreamReader must not be used.
                 * @param reader the XMLStreamReader to read from (may not be modified)
                 * @return a new XMLEventReader
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLEventReader(reader: javax.xml.stream.XMLStreamReader): javax.xml.stream.XMLEventReader
                /**
                 * Create a new XMLEventReader from a JAXP source.
                 * Support of this method is optional.
                 * @param source the source to read from
                 * @throws UnsupportedOperationException if this method is not
                 *  supported by this XMLInputFactory
                 */
                // @ts-ignore
                abstract createXMLEventReader(source: javax.xml.transform.Source): javax.xml.stream.XMLEventReader
                /**
                 * Create a new XMLEventReader from a java.io.InputStream
                 * @param stream the InputStream to read from
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLEventReader(stream: java.io.InputStream): javax.xml.stream.XMLEventReader
                /**
                 * Create a new XMLEventReader from a java.io.InputStream
                 * @param stream the InputStream to read from
                 * @param encoding the character encoding of the stream
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLEventReader(stream: java.io.InputStream, encoding: string): javax.xml.stream.XMLEventReader
                /**
                 * Create a new XMLEventReader from a java.io.InputStream
                 * @param systemId the system ID of the stream
                 * @param stream the InputStream to read from
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createXMLEventReader(systemId: string, stream: java.io.InputStream): javax.xml.stream.XMLEventReader
                /**
                 * Create a filtered reader that wraps the filter around the reader
                 * @param reader the reader to filter
                 * @param filter the filter to apply to the reader
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createFilteredReader(reader: javax.xml.stream.XMLStreamReader, filter: javax.xml.stream.StreamFilter): javax.xml.stream.XMLStreamReader
                /**
                 * Create a filtered event reader that wraps the filter around the event reader
                 * @param reader the event reader to wrap
                 * @param filter the filter to apply to the event reader
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                abstract createFilteredReader(reader: javax.xml.stream.XMLEventReader, filter: javax.xml.stream.EventFilter): javax.xml.stream.XMLEventReader
                /**
                 * The resolver that will be set on any XMLStreamReader or XMLEventReader created
                 * by this factory instance.
                 */
                // @ts-ignore
                abstract getXMLResolver(): javax.xml.stream.XMLResolver
                /**
                 * The resolver that will be set on any XMLStreamReader or XMLEventReader created
                 * by this factory instance.
                 * @param resolver the resolver to use to resolve references
                 */
                // @ts-ignore
                abstract setXMLResolver(resolver: javax.xml.stream.XMLResolver): void
                /**
                 * The reporter that will be set on any XMLStreamReader or XMLEventReader created
                 * by this factory instance.
                 */
                // @ts-ignore
                abstract getXMLReporter(): javax.xml.stream.XMLReporter
                /**
                 * The reporter that will be set on any XMLStreamReader or XMLEventReader created
                 * by this factory instance.
                 * @param reporter the resolver to use to report non fatal errors
                 */
                // @ts-ignore
                abstract setXMLReporter(reporter: javax.xml.stream.XMLReporter): void
                /**
                 * Allows the user to set specific feature/property on the underlying
                 * implementation. The underlying implementation is not required to support
                 * every setting of every property in the specification and may use
                 * IllegalArgumentException to signal that an unsupported property may not be
                 * set with the specified value.
                 * <p>
                 * All implementations that implement JAXP 1.5 or newer are required to
                 * support the {@link javax.xml.XMLConstants#ACCESS_EXTERNAL_DTD} property.
                 * </p>
                 * <ul>
                 * <li>
                 * <p>
                 * Access to external DTDs, external Entity References is restricted to the
                 * protocols specified by the property. If access is denied during parsing
                 * due to the restriction of this property, {@link javax.xml.stream.XMLStreamException}
                 * will be thrown by the {@link javax.xml.stream.XMLStreamReader#next()} or
                 * {@link javax.xml.stream.XMLEventReader#nextEvent()} method.
                 * </p>
                 * </li>
                 * </ul>
                 * @param name The name of the property (may not be null)
                 * @param value The value of the property
                 * @throws java.lang.IllegalArgumentException if the property is not supported
                 */
                // @ts-ignore
                abstract setProperty(name: string, value: any): void
                /**
                 * Get the value of a feature/property from the underlying implementation
                 * @param name The name of the property (may not be null)
                 * @return The value of the property
                 * @throws IllegalArgumentException if the property is not supported
                 */
                // @ts-ignore
                abstract getProperty(name: string): java.lang.Object
                /**
                 * Query the set of properties that this factory supports.
                 * @param name The name of the property (may not be null)
                 * @return true if the property is supported and false otherwise
                 */
                // @ts-ignore
                abstract isPropertySupported(name: string): boolean
                /**
                 * Set a user defined event allocator for events
                 * @param allocator the user defined allocator
                 */
                // @ts-ignore
                abstract setEventAllocator(allocator: javax.xml.stream.util.XMLEventAllocator): void
                /**
                 * Gets the allocator used by streams created with this factory
                 */
                // @ts-ignore
                abstract getEventAllocator(): javax.xml.stream.util.XMLEventAllocator
            }
        }
    }
}

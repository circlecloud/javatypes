declare namespace javax {
    namespace xml {
        namespace stream {
            /**
             * The XMLStreamWriter interface specifies how to write XML.  The XMLStreamWriter  does
             * not perform well formedness checking on its input.  However
             * the writeCharacters method is required to escape &amp; , &lt; and &gt;
             * For attribute values the writeAttribute method will escape the
             * above characters plus &quot; to ensure that all character content
             * and attribute values are well formed.
             * Each NAMESPACE
             * and ATTRIBUTE must be individually written.
             * <table border="1" cellpadding="2" cellspacing="0">
             * <thead>
             * <tr>
             * <th colspan="5">XML Namespaces, <code>javax.xml.stream.isRepairingNamespaces</code> and write method behaviour</th>
             * </tr>
             * <tr>
             * <th>Method</th> <!-- method -->
             * <th colspan="2"><code>isRepairingNamespaces</code> == true</th>
             * <th colspan="2"><code>isRepairingNamespaces</code> == false</th>
             * </tr>
             * <tr>
             * <th></th> <!-- method -->
             * <th>namespaceURI bound</th>
             * <th>namespaceURI unbound</th>
             * <th>namespaceURI bound</th>
             * <th>namespaceURI unbound</th>
             * </tr>
             * </thead>
             * <tbody>
             * <tr>
             * <th><code>writeAttribute(namespaceURI, localName, value)</code></th>
             * <!-- isRepairingNamespaces == true -->
             * <td>
             * <!-- namespaceURI bound -->
             * prefix:localName="value"&nbsp;<sup>[1]</sup>
             * </td>
             * <td>
             * <!-- namespaceURI unbound -->
             * xmlns:{generated}="namespaceURI" {generated}:localName="value"
             * </td>
             * <!-- isRepairingNamespaces == false -->
             * <td>
             * <!-- namespaceURI bound -->
             * prefix:localName="value"&nbsp;<sup>[1]</sup>
             * </td>
             * <td>
             * <!-- namespaceURI unbound -->
             * <code>XMLStreamException</code>
             * </td>
             * </tr>
             * <tr>
             * <th><code>writeAttribute(prefix, namespaceURI, localName, value)</code></th>
             * <!-- isRepairingNamespaces == true -->
             * <td>
             * <!-- namespaceURI bound -->
             * bound to same prefix:<br />
             * prefix:localName="value"&nbsp;<sup>[1]</sup><br />
             * <br />
             * bound to different prefix:<br />
             * xmlns:{generated}="namespaceURI" {generated}:localName="value"
             * </td>
             * <td>
             * <!-- namespaceURI unbound -->
             * xmlns:prefix="namespaceURI" prefix:localName="value"&nbsp;<sup>[3]</sup>
             * </td>
             * <!-- isRepairingNamespaces == false -->
             * <td>
             * <!-- namespaceURI bound -->
             * bound to same prefix:<br />
             * prefix:localName="value"&nbsp;<sup>[1][2]</sup><br />
             * <br />
             * bound to different prefix:<br />
             * <code>XMLStreamException</code><sup>[2]</sup>
             * </td>
             * <td>
             * <!-- namespaceURI unbound -->
             * xmlns:prefix="namespaceURI" prefix:localName="value"&nbsp;<sup>[2][5]</sup>
             * </td>
             * </tr>
             * <tr>
             * <th><code>writeStartElement(namespaceURI, localName)</code><br />
             * <br />
             * <code>writeEmptyElement(namespaceURI, localName)</code></th>
             * <!-- isRepairingNamespaces == true -->
             * <td >
             * <!-- namespaceURI bound -->
             * &lt;prefix:localName&gt;&nbsp;<sup>[1]</sup>
             * </td>
             * <td>
             * <!-- namespaceURI unbound -->
             * &lt;{generated}:localName xmlns:{generated}="namespaceURI"&gt;
             * </td>
             * <!-- isRepairingNamespaces == false -->
             * <td>
             * <!-- namespaceURI bound -->
             * &lt;prefix:localName&gt;&nbsp;<sup>[1]</sup>
             * </td>
             * <td>
             * <!-- namespaceURI unbound -->
             * <code>XMLStreamException</code>
             * </td>
             * </tr>
             * <tr>
             * <th><code>writeStartElement(prefix, localName, namespaceURI)</code><br />
             * <br />
             * <code>writeEmptyElement(prefix, localName, namespaceURI)</code></th>
             * <!-- isRepairingNamespaces == true -->
             * <td>
             * <!-- namespaceURI bound -->
             * bound to same prefix:<br />
             * &lt;prefix:localName&gt;&nbsp;<sup>[1]</sup><br />
             * <br />
             * bound to different prefix:<br />
             * &lt;{generated}:localName xmlns:{generated}="namespaceURI"&gt;
             * </td>
             * <td>
             * <!-- namespaceURI unbound -->
             * &lt;prefix:localName xmlns:prefix="namespaceURI"&gt;&nbsp;<sup>[4]</sup>
             * </td>
             * <!-- isRepairingNamespaces == false -->
             * <td>
             * <!-- namespaceURI bound -->
             * bound to same prefix:<br />
             * &lt;prefix:localName&gt;&nbsp;<sup>[1]</sup><br />
             * <br />
             * bound to different prefix:<br />
             * <code>XMLStreamException</code>
             * </td>
             * <td>
             * <!-- namespaceURI unbound -->
             * &lt;prefix:localName&gt;&nbsp;
             * </td>
             * </tr>
             * </tbody>
             * <tfoot>
             * <tr>
             * <td colspan="5">
             * Notes:
             * <ul>
             * <li>[1] if namespaceURI == default Namespace URI, then no prefix is written</li>
             * <li>[2] if prefix == "" || null && namespaceURI == "", then no prefix or Namespace declaration is generated or written</li>
             * <li>[3] if prefix == "" || null, then a prefix is randomly generated</li>
             * <li>[4] if prefix == "" || null, then it is treated as the default Namespace and no prefix is generated or written, an xmlns declaration is generated and written if the namespaceURI is unbound</li>
             * <li>[5] if prefix == "" || null, then it is treated as an invalid attempt to define the default Namespace and an XMLStreamException is thrown</li>
             * </ul>
             * </td>
             * </tr>
             * </tfoot>
             * </table>
             * @version 1.0
             * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
             * @see XMLOutputFactory
             * @see XMLStreamReader
             * @since 1.6
             */
            // @ts-ignore
            interface XMLStreamWriter {
                /**
                 * Writes a start tag to the output.  All writeStartElement methods
                 * open a new scope in the internal namespace context.  Writing the
                 * corresponding EndElement causes the scope to be closed.
                 * @param localName local name of the tag, may not be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeStartElement(localName: java.lang.String | string): void
                /**
                 * Writes a start tag to the output
                 * @param namespaceURI the namespaceURI of the prefix to use, may not be null
                 * @param localName local name of the tag, may not be null
                 * @throws XMLStreamException if the namespace URI has not been bound to a prefix and
                 *  javax.xml.stream.isRepairingNamespaces has not been set to true
                 */
                // @ts-ignore
                writeStartElement(namespaceURI: java.lang.String | string, localName: java.lang.String | string): void
                /**
                 * Writes a start tag to the output
                 * @param localName local name of the tag, may not be null
                 * @param prefix the prefix of the tag, may not be null
                 * @param namespaceURI the uri to bind the prefix to, may not be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeStartElement(prefix: java.lang.String | string, localName: java.lang.String | string, namespaceURI: java.lang.String | string): void
                /**
                 * Writes an empty element tag to the output
                 * @param namespaceURI the uri to bind the tag to, may not be null
                 * @param localName local name of the tag, may not be null
                 * @throws XMLStreamException if the namespace URI has not been bound to a prefix and
                 *  javax.xml.stream.isRepairingNamespaces has not been set to true
                 */
                // @ts-ignore
                writeEmptyElement(namespaceURI: java.lang.String | string, localName: java.lang.String | string): void
                /**
                 * Writes an empty element tag to the output
                 * @param prefix the prefix of the tag, may not be null
                 * @param localName local name of the tag, may not be null
                 * @param namespaceURI the uri to bind the tag to, may not be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeEmptyElement(prefix: java.lang.String | string, localName: java.lang.String | string, namespaceURI: java.lang.String | string): void
                /**
                 * Writes an empty element tag to the output
                 * @param localName local name of the tag, may not be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeEmptyElement(localName: java.lang.String | string): void
                /**
                 * Writes an end tag to the output relying on the internal
                 * state of the writer to determine the prefix and local name
                 * of the event.
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeEndElement(): void
                /**
                 * Closes any start tags and writes corresponding end tags.
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeEndDocument(): void
                /**
                 * Close this writer and free any resources associated with the
                 * writer.  This must not close the underlying output stream.
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                close(): void
                /**
                 * Write any cached data to the underlying output mechanism.
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                flush(): void
                /**
                 * Writes an attribute to the output stream without
                 * a prefix.
                 * @param localName the local name of the attribute
                 * @param value the value of the attribute
                 * @throws IllegalStateException if the current state does not allow Attribute writing
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeAttribute(localName: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Writes an attribute to the output stream
                 * @param prefix the prefix for this attribute
                 * @param namespaceURI the uri of the prefix for this attribute
                 * @param localName the local name of the attribute
                 * @param value the value of the attribute
                 * @throws IllegalStateException if the current state does not allow Attribute writing
                 * @throws XMLStreamException if the namespace URI has not been bound to a prefix and
                 *  javax.xml.stream.isRepairingNamespaces has not been set to true
                 */
                // @ts-ignore
                writeAttribute(prefix: java.lang.String | string, namespaceURI: java.lang.String | string, localName: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Writes an attribute to the output stream
                 * @param namespaceURI the uri of the prefix for this attribute
                 * @param localName the local name of the attribute
                 * @param value the value of the attribute
                 * @throws IllegalStateException if the current state does not allow Attribute writing
                 * @throws XMLStreamException if the namespace URI has not been bound to a prefix and
                 *  javax.xml.stream.isRepairingNamespaces has not been set to true
                 */
                // @ts-ignore
                writeAttribute(namespaceURI: java.lang.String | string, localName: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Writes a namespace to the output stream
                 * If the prefix argument to this method is the empty string,
                 * "xmlns", or null this method will delegate to writeDefaultNamespace
                 * @param prefix the prefix to bind this namespace to
                 * @param namespaceURI the uri to bind the prefix to
                 * @throws IllegalStateException if the current state does not allow Namespace writing
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeNamespace(prefix: java.lang.String | string, namespaceURI: java.lang.String | string): void
                /**
                 * Writes the default namespace to the stream
                 * @param namespaceURI the uri to bind the default namespace to
                 * @throws IllegalStateException if the current state does not allow Namespace writing
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeDefaultNamespace(namespaceURI: java.lang.String | string): void
                /**
                 * Writes an xml comment with the data enclosed
                 * @param data the data contained in the comment, may be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeComment(data: java.lang.String | string): void
                /**
                 * Writes a processing instruction
                 * @param target the target of the processing instruction, may not be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeProcessingInstruction(target: java.lang.String | string): void
                /**
                 * Writes a processing instruction
                 * @param target the target of the processing instruction, may not be null
                 * @param data the data contained in the processing instruction, may not be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeProcessingInstruction(target: java.lang.String | string, data: java.lang.String | string): void
                /**
                 * Writes a CData section
                 * @param data the data contained in the CData Section, may not be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeCData(data: java.lang.String | string): void
                /**
                 * Write a DTD section.  This string represents the entire doctypedecl production
                 * from the XML 1.0 specification.
                 * @param dtd the DTD to be written
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeDTD(dtd: java.lang.String | string): void
                /**
                 * Writes an entity reference
                 * @param name the name of the entity
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeEntityRef(name: java.lang.String | string): void
                /**
                 * Write the XML Declaration. Defaults the XML version to 1.0, and the encoding to utf-8
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeStartDocument(): void
                /**
                 * Write the XML Declaration. Defaults the XML version to 1.0
                 * @param version version of the xml document
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeStartDocument(version: java.lang.String | string): void
                /**
                 * Write the XML Declaration.  Note that the encoding parameter does
                 * not set the actual encoding of the underlying output.  That must
                 * be set when the instance of the XMLStreamWriter is created using the
                 * XMLOutputFactory
                 * @param encoding encoding of the xml declaration
                 * @param version version of the xml document
                 * @throws XMLStreamException If given encoding does not match encoding
                 *  of the underlying stream
                 */
                // @ts-ignore
                writeStartDocument(encoding: java.lang.String | string, version: java.lang.String | string): void
                /**
                 * Write text to the output
                 * @param text the value to write
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeCharacters(text: java.lang.String | string): void
                /**
                 * Write text to the output
                 * @param text the value to write
                 * @param start the starting position in the array
                 * @param len the number of characters to write
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                writeCharacters(text: string[], start: number /*int*/, len: number /*int*/): void
                /**
                 * Gets the prefix the uri is bound to
                 * @return the prefix or null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                getPrefix(uri: java.lang.String | string): string
                /**
                 * Sets the prefix the uri is bound to.  This prefix is bound
                 * in the scope of the current START_ELEMENT / END_ELEMENT pair.
                 * If this method is called before a START_ELEMENT has been written
                 * the prefix is bound in the root scope.
                 * @param prefix the prefix to bind to the uri, may not be null
                 * @param uri the uri to bind to the prefix, may be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                setPrefix(prefix: java.lang.String | string, uri: java.lang.String | string): void
                /**
                 * Binds a URI to the default namespace
                 * This URI is bound
                 * in the scope of the current START_ELEMENT / END_ELEMENT pair.
                 * If this method is called before a START_ELEMENT has been written
                 * the uri is bound in the root scope.
                 * @param uri the uri to bind to the default namespace, may be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                setDefaultNamespace(uri: java.lang.String | string): void
                /**
                 * Sets the current namespace context for prefix and uri bindings.
                 * This context becomes the root namespace context for writing and
                 * will replace the current root namespace context.  Subsequent calls
                 * to setPrefix and setDefaultNamespace will bind namespaces using
                 * the context passed to the method as the root context for resolving
                 * namespaces.  This method may only be called once at the start of
                 * the document.  It does not cause the namespaces to be declared.
                 * If a namespace URI to prefix mapping is found in the namespace
                 * context it is treated as declared and the prefix may be used
                 * by the StreamWriter.
                 * @param context the namespace context to use for this writer, may not be null
                 * @throws XMLStreamException
                 */
                // @ts-ignore
                setNamespaceContext(context: javax.xml.namespace.NamespaceContext): void
                /**
                 * Returns the current namespace context.
                 * @return the current NamespaceContext
                 */
                // @ts-ignore
                getNamespaceContext(): javax.xml.namespace.NamespaceContext
                /**
                 * Get the value of a feature/property from the underlying implementation
                 * @param name The name of the property, may not be null
                 * @return The value of the property
                 * @throws IllegalArgumentException if the property is not supported
                 * @throws NullPointerException if the name is null
                 */
                // @ts-ignore
                getProperty(name: java.lang.String | string): any
            }
        }
    }
}

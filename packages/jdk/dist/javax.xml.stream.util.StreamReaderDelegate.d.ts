declare namespace javax {
    namespace xml {
        namespace stream {
            namespace util {
                /**
                 * This is the base class for deriving an XMLStreamReader filter
                 * This class is designed to sit between an XMLStreamReader and an
                 * application's XMLStreamReader.   By default each method
                 * does nothing but call the corresponding method on the
                 * parent interface.
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @see javax.xml.stream.XMLStreamReader
                 * @see EventReaderDelegate
                 * @since 1.6
                 */
                // @ts-ignore
                class StreamReaderDelegate extends java.lang.Object implements javax.xml.stream.XMLStreamReader {
                    /**
                     * Construct an empty filter with no parent.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct an filter with the specified parent.
                     * @param reader the parent
                     */
                    // @ts-ignore
                    constructor(reader: javax.xml.stream.XMLStreamReader)
                    /**
                     * Set the parent of this instance.
                     * @param reader the new parent
                     */
                    // @ts-ignore
                    setParent(reader: javax.xml.stream.XMLStreamReader): void
                    /**
                     * Get the parent of this instance.
                     * @return the parent or null if none is set
                     */
                    // @ts-ignore
                    getParent(): javax.xml.stream.XMLStreamReader
                    // @ts-ignore
                    next(): int
                    // @ts-ignore
                    nextTag(): int
                    // @ts-ignore
                    getElementText(): java.lang.String
                    // @ts-ignore
                    require(type: number /*int*/, namespaceURI: string, localName: string): void
                    // @ts-ignore
                    hasNext(): boolean
                    // @ts-ignore
                    close(): void
                    // @ts-ignore
                    getNamespaceURI(prefix: string): java.lang.String
                    // @ts-ignore
                    getNamespaceContext(): javax.xml.namespace.NamespaceContext
                    // @ts-ignore
                    isStartElement(): boolean
                    // @ts-ignore
                    isEndElement(): boolean
                    // @ts-ignore
                    isCharacters(): boolean
                    // @ts-ignore
                    isWhiteSpace(): boolean
                    // @ts-ignore
                    getAttributeValue(namespaceUri: string, localName: string): java.lang.String
                    // @ts-ignore
                    getAttributeCount(): int
                    // @ts-ignore
                    getAttributeName(index: number /*int*/): javax.xml.namespace.QName
                    // @ts-ignore
                    getAttributePrefix(index: number /*int*/): java.lang.String
                    // @ts-ignore
                    getAttributeNamespace(index: number /*int*/): java.lang.String
                    // @ts-ignore
                    getAttributeLocalName(index: number /*int*/): java.lang.String
                    // @ts-ignore
                    getAttributeType(index: number /*int*/): java.lang.String
                    // @ts-ignore
                    getAttributeValue(index: number /*int*/): java.lang.String
                    // @ts-ignore
                    isAttributeSpecified(index: number /*int*/): boolean
                    // @ts-ignore
                    getNamespaceCount(): int
                    // @ts-ignore
                    getNamespacePrefix(index: number /*int*/): java.lang.String
                    // @ts-ignore
                    getNamespaceURI(index: number /*int*/): java.lang.String
                    // @ts-ignore
                    getEventType(): int
                    // @ts-ignore
                    getText(): java.lang.String
                    // @ts-ignore
                    getTextCharacters(sourceStart: number /*int*/, target: string[], targetStart: number /*int*/, length: number /*int*/): int
                    // @ts-ignore
                    getTextCharacters(): char[]
                    // @ts-ignore
                    getTextStart(): int
                    // @ts-ignore
                    getTextLength(): int
                    // @ts-ignore
                    getEncoding(): java.lang.String
                    // @ts-ignore
                    hasText(): boolean
                    // @ts-ignore
                    getLocation(): javax.xml.stream.Location
                    // @ts-ignore
                    getName(): javax.xml.namespace.QName
                    // @ts-ignore
                    getLocalName(): java.lang.String
                    // @ts-ignore
                    hasName(): boolean
                    // @ts-ignore
                    getNamespaceURI(): java.lang.String
                    // @ts-ignore
                    getPrefix(): java.lang.String
                    // @ts-ignore
                    getVersion(): java.lang.String
                    // @ts-ignore
                    isStandalone(): boolean
                    // @ts-ignore
                    standaloneSet(): boolean
                    // @ts-ignore
                    getCharacterEncodingScheme(): java.lang.String
                    // @ts-ignore
                    getPITarget(): java.lang.String
                    // @ts-ignore
                    getPIData(): java.lang.String
                    // @ts-ignore
                    getProperty(name: string): java.lang.Object
                }
            }
        }
    }
}

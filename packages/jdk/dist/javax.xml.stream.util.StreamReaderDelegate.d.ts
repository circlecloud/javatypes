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
                    public setParent(reader: javax.xml.stream.XMLStreamReader): void
                    /**
                     * Get the parent of this instance.
                     * @return the parent or null if none is set
                     */
                    // @ts-ignore
                    public getParent(): javax.xml.stream.XMLStreamReader
                    // @ts-ignore
                    public next(): number /*int*/
                    // @ts-ignore
                    public nextTag(): number /*int*/
                    // @ts-ignore
                    public getElementText(): string
                    // @ts-ignore
                    public require(type: number /*int*/, namespaceURI: java.lang.String | string, localName: java.lang.String | string): void
                    // @ts-ignore
                    public hasNext(): boolean
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public getNamespaceURI(prefix: java.lang.String | string): string
                    // @ts-ignore
                    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                    // @ts-ignore
                    public isStartElement(): boolean
                    // @ts-ignore
                    public isEndElement(): boolean
                    // @ts-ignore
                    public isCharacters(): boolean
                    // @ts-ignore
                    public isWhiteSpace(): boolean
                    // @ts-ignore
                    public getAttributeValue(namespaceUri: java.lang.String | string, localName: java.lang.String | string): string
                    // @ts-ignore
                    public getAttributeCount(): number /*int*/
                    // @ts-ignore
                    public getAttributeName(index: number /*int*/): javax.xml.namespace.QName
                    // @ts-ignore
                    public getAttributePrefix(index: number /*int*/): string
                    // @ts-ignore
                    public getAttributeNamespace(index: number /*int*/): string
                    // @ts-ignore
                    public getAttributeLocalName(index: number /*int*/): string
                    // @ts-ignore
                    public getAttributeType(index: number /*int*/): string
                    // @ts-ignore
                    public getAttributeValue(index: number /*int*/): string
                    // @ts-ignore
                    public isAttributeSpecified(index: number /*int*/): boolean
                    // @ts-ignore
                    public getNamespaceCount(): number /*int*/
                    // @ts-ignore
                    public getNamespacePrefix(index: number /*int*/): string
                    // @ts-ignore
                    public getNamespaceURI(index: number /*int*/): string
                    // @ts-ignore
                    public getEventType(): number /*int*/
                    // @ts-ignore
                    public getText(): string
                    // @ts-ignore
                    public getTextCharacters(sourceStart: number /*int*/, target: string[], targetStart: number /*int*/, length: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getTextCharacters(): string[]
                    // @ts-ignore
                    public getTextStart(): number /*int*/
                    // @ts-ignore
                    public getTextLength(): number /*int*/
                    // @ts-ignore
                    public getEncoding(): string
                    // @ts-ignore
                    public hasText(): boolean
                    // @ts-ignore
                    public getLocation(): javax.xml.stream.Location
                    // @ts-ignore
                    public getName(): javax.xml.namespace.QName
                    // @ts-ignore
                    public getLocalName(): string
                    // @ts-ignore
                    public hasName(): boolean
                    // @ts-ignore
                    public getNamespaceURI(): string
                    // @ts-ignore
                    public getPrefix(): string
                    // @ts-ignore
                    public getVersion(): string
                    // @ts-ignore
                    public isStandalone(): boolean
                    // @ts-ignore
                    public standaloneSet(): boolean
                    // @ts-ignore
                    public getCharacterEncodingScheme(): string
                    // @ts-ignore
                    public getPITarget(): string
                    // @ts-ignore
                    public getPIData(): string
                    // @ts-ignore
                    public getProperty(name: java.lang.String | string): any
                }
            }
        }
    }
}

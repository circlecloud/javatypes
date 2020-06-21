declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * XMLWriter helper class.
                 */
                // @ts-ignore
                class XMLWriter extends java.lang.Object {
                    /**
                     * New XML writer utility that will store its data in an internal buffer.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * New XML writer utility that will store its data in an internal buffer
                     * and can write it to the specified writer.
                     * <p>
                     * See {@link #sendData()}
                     * @param writer The writer to use
                     */
                    // @ts-ignore
                    constructor(writer: java.io.Writer)
                    /**
                     * Opening tag.
                     */
                    // @ts-ignore
                    public static readonly OPENING: number /*int*/
                    /**
                     * Closing tag.
                     */
                    // @ts-ignore
                    public static readonly CLOSING: number /*int*/
                    /**
                     * Element with no content.
                     */
                    // @ts-ignore
                    public static readonly NO_CONTENT: number /*int*/
                    /**
                     * Buffer.
                     */
                    // @ts-ignore
                    buffer: java.lang.StringBuilder
                    /**
                     * Writer.
                     */
                    // @ts-ignore
                    readonly writer: java.io.Writer
                    /**
                     * Retrieve generated XML.
                     * @return String containing the generated XML
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Write property to the XML.
                     * @param namespace Namespace
                     * @param name Property name
                     * @param value Property value
                     */
                    // @ts-ignore
                    public writeProperty(namespace: java.lang.String | string, name: java.lang.String | string, value: java.lang.String | string): void
                    /**
                     * Write an element.
                     * @param name Element name
                     * @param namespace Namespace abbreviation
                     * @param type Element type
                     */
                    // @ts-ignore
                    public writeElement(namespace: java.lang.String | string, name: java.lang.String | string, type: number /*int*/): void
                    /**
                     * Write an element.
                     * @param namespace Namespace abbreviation
                     * @param namespaceInfo Namespace info
                     * @param name Element name
                     * @param type Element type
                     */
                    // @ts-ignore
                    public writeElement(namespace: java.lang.String | string, namespaceInfo: java.lang.String | string, name: java.lang.String | string, type: number /*int*/): void
                    /**
                     * Write text.
                     * @param text Text to append
                     */
                    // @ts-ignore
                    public writeText(text: java.lang.String | string): void
                    /**
                     * Write data.
                     * @param data Data to append
                     */
                    // @ts-ignore
                    public writeData(data: java.lang.String | string): void
                    /**
                     * Write XML Header.
                     */
                    // @ts-ignore
                    public writeXMLHeader(): void
                    /**
                     * Send data and reinitializes buffer, if a writer has been specified.
                     * @throws IOException Error writing XML data
                     */
                    // @ts-ignore
                    public sendData(): void
                }
            }
        }
    }
}

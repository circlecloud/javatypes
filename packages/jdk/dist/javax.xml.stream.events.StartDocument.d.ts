declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * An interface for the start document event
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @since 1.6
                 */
                // @ts-ignore
                interface StartDocument extends javax.xml.stream.events.XMLEvent {
                    /**
                     * Returns the system ID of the XML data
                     * @return the system ID, defaults to ""
                     */
                    // @ts-ignore
                    getSystemId(): string
                    /**
                     * Returns the encoding style of the XML data
                     * @return the character encoding, defaults to "UTF-8"
                     */
                    // @ts-ignore
                    getCharacterEncodingScheme(): string
                    /**
                     * Returns true if CharacterEncodingScheme was set in
                     * the encoding declaration of the document
                     */
                    // @ts-ignore
                    encodingSet(): boolean
                    /**
                     * Returns if this XML is standalone
                     * @return the standalone state of XML, defaults to "no"
                     */
                    // @ts-ignore
                    isStandalone(): boolean
                    /**
                     * Returns true if the standalone attribute was set in
                     * the encoding declaration of the document.
                     */
                    // @ts-ignore
                    standaloneSet(): boolean
                    /**
                     * Returns the version of XML of this XML stream
                     * @return the version of XML, defaults to "1.0"
                     */
                    // @ts-ignore
                    getVersion(): string
                }
            }
        }
    }
}

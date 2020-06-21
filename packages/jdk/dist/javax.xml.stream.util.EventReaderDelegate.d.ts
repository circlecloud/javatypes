declare namespace javax {
    namespace xml {
        namespace stream {
            namespace util {
                /**
                 * This is the base class for deriving an XMLEventReader
                 * filter.
                 * This class is designed to sit between an XMLEventReader and an
                 * application's XMLEventReader.  By default each method
                 * does nothing but call the corresponding method on the
                 * parent interface.
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @see javax.xml.stream.XMLEventReader
                 * @see StreamReaderDelegate
                 * @since 1.6
                 */
                // @ts-ignore
                class EventReaderDelegate extends java.lang.Object implements javax.xml.stream.XMLEventReader {
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
                    constructor(reader: javax.xml.stream.XMLEventReader)
                    /**
                     * Set the parent of this instance.
                     * @param reader the new parent
                     */
                    // @ts-ignore
                    public setParent(reader: javax.xml.stream.XMLEventReader): void
                    /**
                     * Get the parent of this instance.
                     * @return the parent or null if none is set
                     */
                    // @ts-ignore
                    public getParent(): javax.xml.stream.XMLEventReader
                    // @ts-ignore
                    public nextEvent(): javax.xml.stream.events.XMLEvent
                    // @ts-ignore
                    public next(): any
                    // @ts-ignore
                    public hasNext(): boolean
                    // @ts-ignore
                    public peek(): javax.xml.stream.events.XMLEvent
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public getElementText(): string
                    // @ts-ignore
                    public nextTag(): javax.xml.stream.events.XMLEvent
                    // @ts-ignore
                    public getProperty(name: java.lang.String | string): any
                    // @ts-ignore
                    public remove(): void
                }
            }
        }
    }
}

declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * This describes the interface to Characters events.
                 * All text events get reported as Characters events.
                 * Content, CData and whitespace are all reported as
                 * Characters events.  IgnorableWhitespace, in most cases,
                 * will be set to false unless an element declaration of element
                 * content is present for the current element.
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @since 1.6
                 */
                // @ts-ignore
                interface Characters extends javax.xml.stream.events.XMLEvent {
                    /**
                     * Get the character data of this event
                     */
                    // @ts-ignore
                    getData(): string
                    /**
                     * Returns true if this set of Characters
                     * is all whitespace.  Whitespace inside a document
                     * is reported as CHARACTERS.  This method allows
                     * checking of CHARACTERS events to see if they
                     * are composed of only whitespace characters
                     */
                    // @ts-ignore
                    isWhiteSpace(): boolean
                    /**
                     * Returns true if this is a CData section.  If this
                     * event is CData its event type will be CDATA
                     * If javax.xml.stream.isCoalescing is set to true CDATA Sections
                     * that are surrounded by non CDATA characters will be reported
                     * as a single Characters event. This method will return false
                     * in this case.
                     */
                    // @ts-ignore
                    isCData(): boolean
                    /**
                     * Return true if this is ignorableWhiteSpace.  If
                     * this event is ignorableWhiteSpace its event type will
                     * be SPACE.
                     */
                    // @ts-ignore
                    isIgnorableWhiteSpace(): boolean
                }
            }
        }
    }
}

declare namespace javax {
    namespace xml {
        namespace stream {
            /**
             * This interface declares the constants used in this API.
             * Numbers in the range 0 to 256 are reserved for the specification,
             * user defined events must use event codes outside that range.
             * @since 1.6
             */
            // @ts-ignore
            interface XMLStreamConstants {
                /**
                 * Indicates an event is a start element
                 * @see javax.xml.stream.events.StartElement
                 */
                // @ts-ignore
                readonly START_ELEMENT: number /*int*/
                /**
                 * Indicates an event is an end element
                 * @see javax.xml.stream.events.EndElement
                 */
                // @ts-ignore
                readonly END_ELEMENT: number /*int*/
                /**
                 * Indicates an event is a processing instruction
                 * @see javax.xml.stream.events.ProcessingInstruction
                 */
                // @ts-ignore
                readonly PROCESSING_INSTRUCTION: number /*int*/
                /**
                 * Indicates an event is characters
                 * @see javax.xml.stream.events.Characters
                 */
                // @ts-ignore
                readonly CHARACTERS: number /*int*/
                /**
                 * Indicates an event is a comment
                 * @see javax.xml.stream.events.Comment
                 */
                // @ts-ignore
                readonly COMMENT: number /*int*/
                /**
                 * The characters are white space
                 * (see [XML], 2.10 "White Space Handling").
                 * Events are only reported as SPACE if they are ignorable white
                 * space.  Otherwise they are reported as CHARACTERS.
                 * @see javax.xml.stream.events.Characters
                 */
                // @ts-ignore
                readonly SPACE: number /*int*/
                /**
                 * Indicates an event is a start document
                 * @see javax.xml.stream.events.StartDocument
                 */
                // @ts-ignore
                readonly START_DOCUMENT: number /*int*/
                /**
                 * Indicates an event is an end document
                 * @see javax.xml.stream.events.EndDocument
                 */
                // @ts-ignore
                readonly END_DOCUMENT: number /*int*/
                /**
                 * Indicates an event is an entity reference
                 * @see javax.xml.stream.events.EntityReference
                 */
                // @ts-ignore
                readonly ENTITY_REFERENCE: number /*int*/
                /**
                 * Indicates an event is an attribute
                 * @see javax.xml.stream.events.Attribute
                 */
                // @ts-ignore
                readonly ATTRIBUTE: number /*int*/
                /**
                 * Indicates an event is a DTD
                 * @see javax.xml.stream.events.DTD
                 */
                // @ts-ignore
                readonly DTD: number /*int*/
                /**
                 * Indicates an event is a CDATA section
                 * @see javax.xml.stream.events.Characters
                 */
                // @ts-ignore
                readonly CDATA: number /*int*/
                /**
                 * Indicates the event is a namespace declaration
                 * @see javax.xml.stream.events.Namespace
                 */
                // @ts-ignore
                readonly NAMESPACE: number /*int*/
                /**
                 * Indicates a Notation
                 * @see javax.xml.stream.events.NotationDeclaration
                 */
                // @ts-ignore
                readonly NOTATION_DECLARATION: number /*int*/
                /**
                 * Indicates a Entity Declaration
                 * @see javax.xml.stream.events.NotationDeclaration
                 */
                // @ts-ignore
                readonly ENTITY_DECLARATION: number /*int*/
            }
        }
    }
}

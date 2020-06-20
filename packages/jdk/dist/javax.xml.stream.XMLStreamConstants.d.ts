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
                
                /**
                 * Indicates an event is an end element
                 * @see javax.xml.stream.events.EndElement
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is a processing instruction
                 * @see javax.xml.stream.events.ProcessingInstruction
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is characters
                 * @see javax.xml.stream.events.Characters
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is a comment
                 * @see javax.xml.stream.events.Comment
                 */
                // @ts-ignore
                
                /**
                 * The characters are white space
                 * (see [XML], 2.10 "White Space Handling").
                 * Events are only reported as SPACE if they are ignorable white
                 * space.  Otherwise they are reported as CHARACTERS.
                 * @see javax.xml.stream.events.Characters
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is a start document
                 * @see javax.xml.stream.events.StartDocument
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is an end document
                 * @see javax.xml.stream.events.EndDocument
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is an entity reference
                 * @see javax.xml.stream.events.EntityReference
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is an attribute
                 * @see javax.xml.stream.events.Attribute
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is a DTD
                 * @see javax.xml.stream.events.DTD
                 */
                // @ts-ignore
                
                /**
                 * Indicates an event is a CDATA section
                 * @see javax.xml.stream.events.Characters
                 */
                // @ts-ignore
                
                /**
                 * Indicates the event is a namespace declaration
                 * @see javax.xml.stream.events.Namespace
                 */
                // @ts-ignore
                
                /**
                 * Indicates a Notation
                 * @see javax.xml.stream.events.NotationDeclaration
                 */
                // @ts-ignore
                
                /**
                 * Indicates a Entity Declaration
                 * @see javax.xml.stream.events.NotationDeclaration
                 */
                // @ts-ignore
                
            }
        }
    }
}

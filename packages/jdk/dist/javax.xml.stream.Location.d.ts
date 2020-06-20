declare namespace javax {
    namespace xml {
        namespace stream {
            /**
             * Provides information on the location of an event.
             * All the information provided by a Location is optional.  For example
             * an application may only report line numbers.
             * @version 1.0
             * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
             * @since 1.6
             */
            // @ts-ignore
            interface Location {
                /**
                 * Return the line number where the current event ends,
                 * returns -1 if none is available.
                 * @return the current line number
                 */
                // @ts-ignore
                getLineNumber(): int
                /**
                 * Return the column number where the current event ends,
                 * returns -1 if none is available.
                 * @return the current column number
                 */
                // @ts-ignore
                getColumnNumber(): int
                /**
                 * Return the byte or character offset into the input source this location
                 * is pointing to. If the input source is a file or a byte stream then
                 * this is the byte offset into that stream, but if the input source is
                 * a character media then the offset is the character offset.
                 * Returns -1 if there is no offset available.
                 * @return the current offset
                 */
                // @ts-ignore
                getCharacterOffset(): int
                /**
                 * Returns the public ID of the XML
                 * @return the public ID, or null if not available
                 */
                // @ts-ignore
                getPublicId(): java.lang.String
                /**
                 * Returns the system ID of the XML
                 * @return the system ID, or null if not available
                 */
                // @ts-ignore
                getSystemId(): java.lang.String
            }
        }
    }
}

declare namespace javax {
    namespace xml {
        namespace stream {
            namespace events {
                /**
                 * An interface for comment events
                 * @version 1.0
                 * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
                 * @since 1.6
                 */
                // @ts-ignore
                interface Comment extends javax.xml.stream.events.XMLEvent {
                    /**
                     * Return the string data of the comment, returns empty string if it
                     * does not exist
                     */
                    // @ts-ignore
                    getText(): java.lang.String
                }
            }
        }
    }
}

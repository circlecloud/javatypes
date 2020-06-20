declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * A representation of a node whose value is text.  A <code>Text</code> object
             * may represent text that is content or text that is a comment.
             */
            // @ts-ignore
            interface Text extends javax.xml.soap.Node, org.w3c.dom.Text {
                /**
                 * Retrieves whether this <code>Text</code> object represents a comment.
                 * @return <code>true</code> if this <code>Text</code> object is a
                 *          comment; <code>false</code> otherwise
                 */
                // @ts-ignore
                isComment(): boolean
            }
        }
    }
}

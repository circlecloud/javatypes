declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * An object that stores a MIME header name and its value. One or more
             * <code>MimeHeader</code> objects may be contained in a <code>MimeHeaders</code>
             * object.
             * @see MimeHeaders
             */
            // @ts-ignore
            class MimeHeader extends java.lang.Object {
                /**
                 * Constructs a <code>MimeHeader</code> object initialized with the given
                 * name and value.
                 * @param name a <code>String</code> giving the name of the header
                 * @param value a <code>String</code> giving the value of the header
                 */
                // @ts-ignore
                constructor(name: string, value: string)
                /**
                 * Returns the name of this <code>MimeHeader</code> object.
                 * @return the name of the header as a <code>String</code>
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns the value of this <code>MimeHeader</code> object.
                 * @return the value of the header as a <code>String</code>
                 */
                // @ts-ignore
                getValue(): java.lang.String
            }
        }
    }
}

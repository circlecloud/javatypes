declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * This exception is thrown when an XML formatted string is being parsed into ModelMBean objects
             * or when XML formatted strings are being created from ModelMBean objects.
             * It is also used to wrapper exceptions from XML parsers that may be used.
             * <p>The <b>serialVersionUID</b> of this class is <code>3176664577895105181L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class XMLParseException extends java.lang.Exception {
                /**
                 * Default constructor .
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructor taking a string.
                 * @param s the detail message.
                 */
                // @ts-ignore
                constructor(s: string)
                /**
                 * Constructor taking a string and an exception.
                 * @param e the nested exception.
                 * @param s the detail message.
                 */
                // @ts-ignore
                constructor(e: java.lang.Exception, s: string)
            }
        }
    }
}

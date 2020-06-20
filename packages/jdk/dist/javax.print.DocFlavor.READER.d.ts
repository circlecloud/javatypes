declare namespace javax {
    namespace print {
        namespace DocFlavor {
            /**
             * Class DocFlavor.READER provides predefined static constant DocFlavor
             * objects for example doc flavors using a character stream ({@link
             * java.io.Reader java.io.Reader}) as the print data
             * representation class. As such, the character set is Unicode.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            class READER extends javax.print.DocFlavor {
                /**
                 * Constructs a new doc flavor with the given MIME type and a print
                 * data representation class name of\
                 * <CODE>"java.io.Reader"</CODE> (character stream).
                 * @param mimeType  MIME media type string. If it is a text media
                 *                       type, it is assumed to contain a
                 *                       <CODE>"charset=utf-16"</CODE> parameter.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>mimeType</CODE> is null.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if <CODE>mimeType</CODE> does not
                 *      obey the syntax for a MIME media type string.
                 */
                // @ts-ignore
                constructor(mimeType: string)
                /**
                 * Doc flavor with MIME type = <CODE>"text/plain;
                 * charset=utf-16"</CODE>, print data representation class name =
                 * <CODE>"java.io.Reader"</CODE> (character stream).
                 */
                // @ts-ignore
                readonly TEXT_PLAIN: javax.print.DocFlavor.READER
                /**
                 * Doc flavor with MIME type = <CODE>"text/html;
                 * charset=utf-16"</CODE>, print data representation class name =
                 * <CODE>"java.io.Reader"</CODE> (character stream).
                 */
                // @ts-ignore
                readonly TEXT_HTML: javax.print.DocFlavor.READER
            }
        }
    }
}

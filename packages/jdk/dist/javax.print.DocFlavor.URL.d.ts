declare namespace javax {
    namespace print {
        namespace DocFlavor {
            /**
             * Class DocFlavor.URL provides predefined static constant DocFlavor
             * objects.
             * For example doc flavors using a Uniform Resource Locator ({@link
             * java.net.URL java.net.URL}) as the print data
             * representation  class.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            class URL extends javax.print.DocFlavor {
                /**
                 * Constructs a new doc flavor with the given MIME type and a print
                 * data representation class name of <CODE>"java.net.URL"</CODE>.
                 * @param mimeType   MIME media type string.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>mimeType</CODE> is null.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if <CODE>mimeType</CODE> does not
                 *      obey the syntax for a MIME media type string.
                 */
                // @ts-ignore
                constructor(mimeType: java.lang.String | string)
                /**
                 * Doc flavor with MIME type = <CODE>"text/plain"</CODE>,
                 * encoded in the host platform encoding.
                 * See {@link DocFlavor#hostEncoding hostEncoding}
                 * Print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_PLAIN_HOST: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/plain; charset=utf-8"</CODE>,
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_PLAIN_UTF_8: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/plain; charset=utf-16"</CODE>,
                 * print data representation class name =
                 * <CODE>java.net.URL""</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_PLAIN_UTF_16: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/plain; charset=utf-16be"</CODE>
                 * (big-endian byte ordering),
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_PLAIN_UTF_16BE: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/plain; charset=utf-16le"</CODE>
                 * (little-endian byte ordering),
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_PLAIN_UTF_16LE: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/plain; charset=us-ascii"</CODE>,
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_PLAIN_US_ASCII: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type = <CODE>"text/html"</CODE>,
                 * encoded in the host platform encoding.
                 * See {@link DocFlavor#hostEncoding hostEncoding}
                 * Print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_HTML_HOST: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/html; charset=utf-8"</CODE>,
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_HTML_UTF_8: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/html; charset=utf-16"</CODE>,
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_HTML_UTF_16: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/html; charset=utf-16be"</CODE>
                 * (big-endian byte ordering),
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_HTML_UTF_16BE: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/html; charset=utf-16le"</CODE>
                 * (little-endian byte ordering),
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_HTML_UTF_16LE: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"text/html; charset=us-ascii"</CODE>,
                 * print data representation class name =
                 * <CODE>"java.net.URL"</CODE> (byte stream).
                 */
                // @ts-ignore
                public static readonly TEXT_HTML_US_ASCII: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type = <CODE>"application/pdf"</CODE>, print
                 * data representation class name = <CODE>"java.net.URL"</CODE>.
                 */
                // @ts-ignore
                public static readonly PDF: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type = <CODE>"application/postscript"</CODE>,
                 * print data representation class name = <CODE>"java.net.URL"</CODE>.
                 */
                // @ts-ignore
                public static readonly POSTSCRIPT: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type = <CODE>"application/vnd.hp-PCL"</CODE>,
                 * print data representation class name = <CODE>"java.net.URL"</CODE>.
                 */
                // @ts-ignore
                public static readonly PCL: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type = <CODE>"image/gif"</CODE>, print data
                 * representation class name = <CODE>"java.net.URL"</CODE>.
                 */
                // @ts-ignore
                public static readonly GIF: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type = <CODE>"image/jpeg"</CODE>, print data
                 * representation class name = <CODE>"java.net.URL"</CODE>.
                 */
                // @ts-ignore
                public static readonly JPEG: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type = <CODE>"image/png"</CODE>, print data
                 * representation class name = <CODE>"java.net.URL"</CODE>.
                 */
                // @ts-ignore
                public static readonly PNG: javax.print.DocFlavor.URL
                /**
                 * Doc flavor with MIME type =
                 * <CODE>"application/octet-stream"</CODE>,
                 * print data representation class name = <CODE>"java.net.URL"</CODE>.
                 * The client must determine that data described
                 * using this DocFlavor is valid for the printer.
                 */
                // @ts-ignore
                public static readonly AUTOSENSE: javax.print.DocFlavor.URL
            }
        }
    }
}

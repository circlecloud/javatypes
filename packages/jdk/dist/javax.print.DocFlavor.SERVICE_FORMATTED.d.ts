declare namespace javax {
    namespace print {
        namespace DocFlavor {
            /**
             * Class DocFlavor.SERVICE_FORMATTED provides predefined static constant
             * DocFlavor objects for example doc flavors for service formatted print
             * data.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            class SERVICE_FORMATTED extends javax.print.DocFlavor {
                /**
                 * Constructs a new doc flavor with a MIME type of
                 * <CODE>"application/x-java-jvm-local-objectref"</CODE> indicating
                 * service formatted print data and the given print data
                 * representation class name.
                 * @param className  Fully-qualified representation class name.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>className</CODE> is
                 *      null.
                 */
                // @ts-ignore
                constructor(className: string)
                /**
                 * Service formatted print data doc flavor with print data
                 * representation class name =
                 * <CODE>"java.awt.image.renderable.RenderableImage"</CODE>
                 * (renderable image object).
                 */
                // @ts-ignore
                readonly RENDERABLE_IMAGE: javax.print.DocFlavor.SERVICE_FORMATTED
                /**
                 * Service formatted print data doc flavor with print data
                 * representation class name = <CODE>"java.awt.print.Printable"</CODE>
                 * (printable object).
                 */
                // @ts-ignore
                readonly PRINTABLE: javax.print.DocFlavor.SERVICE_FORMATTED
                /**
                 * Service formatted print data doc flavor with print data
                 * representation class name = <CODE>"java.awt.print.Pageable"</CODE>
                 * (pageable object).
                 */
                // @ts-ignore
                readonly PAGEABLE: javax.print.DocFlavor.SERVICE_FORMATTED
            }
        }
    }
}

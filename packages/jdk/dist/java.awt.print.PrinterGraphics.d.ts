declare namespace java {
    namespace awt {
        namespace print {
            /**
             * The <code>PrinterGraphics</code> interface is implemented by
             * {@link java.awt.Graphics} objects that are passed to
             * {@link Printable} objects to render a page. It allows an
             * application to find the {@link PrinterJob} object that is
             * controlling the printing.
             */
            // @ts-ignore
            interface PrinterGraphics {
                /**
                 * Returns the <code>PrinterJob</code> that is controlling the
                 * current rendering request.
                 * @return the <code>PrinterJob</code> controlling the current
                 *  rendering request.
                 * @see java.awt.print.Printable
                 */
                // @ts-ignore
                getPrinterJob(): java.awt.print.PrinterJob
            }
        }
    }
}

declare namespace java {
    namespace awt {
        namespace print {
            /**
             * The <code>Book</code> class provides a representation of a document in
             * which pages may have different page formats and page painters. This
             * class uses the {@link Pageable} interface to interact with a
             * {@link PrinterJob}.
             * @see Pageable
             * @see PrinterJob
             */
            // @ts-ignore
            class Book extends java.lang.Object implements java.awt.print.Pageable {
                /**
                 * Creates a new, empty <code>Book</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the number of pages in this <code>Book</code>.
                 * @return the number of pages this <code>Book</code> contains.
                 */
                // @ts-ignore
                public getNumberOfPages(): number /*int*/
                /**
                 * Returns the {@link PageFormat} of the page specified by
                 * <code>pageIndex</code>.
                 * @param pageIndex the zero based index of the page whose
                 *             <code>PageFormat</code> is being requested
                 * @return the <code>PageFormat</code> describing the size and
                 *           orientation of the page.
                 * @throws IndexOutOfBoundsException if the <code>Pageable</code>
                 *           does not contain the requested page
                 */
                // @ts-ignore
                public getPageFormat(pageIndex: number /*int*/): java.awt.print.PageFormat
                /**
                 * Returns the {@link Printable} instance responsible for rendering
                 * the page specified by <code>pageIndex</code>.
                 * @param pageIndex the zero based index of the page whose
                 *                   <code>Printable</code> is being requested
                 * @return the <code>Printable</code> that renders the page.
                 * @throws IndexOutOfBoundsException if the <code>Pageable</code>
                 *             does not contain the requested page
                 */
                // @ts-ignore
                public getPrintable(pageIndex: number /*int*/): java.awt.print.Printable
                /**
                 * Sets the <code>PageFormat</code> and the <code>Painter</code> for a
                 * specified page number.
                 * @param pageIndex the zero based index of the page whose
                 *                   painter and format is altered
                 * @param painter   the <code>Printable</code> instance that
                 *                   renders the page
                 * @param page      the size and orientation of the page
                 * @throws IndexOutOfBoundsException if the specified
                 *           page is not already in this <code>Book</code>
                 * @throws NullPointerException if the <code>painter</code> or
                 *           <code>page</code> argument is <code>null</code>
                 */
                // @ts-ignore
                public setPage(pageIndex: number /*int*/, painter: java.awt.print.Printable, page: java.awt.print.PageFormat): void
                /**
                 * Appends a single page to the end of this <code>Book</code>.
                 * @param painter   the <code>Printable</code> instance that
                 *                   renders the page
                 * @param page      the size and orientation of the page
                 * @throws NullPointerException
                 *           If the <code>painter</code> or <code>page</code>
                 *           argument is <code>null</code>
                 */
                // @ts-ignore
                public append(painter: java.awt.print.Printable, page: java.awt.print.PageFormat): void
                /**
                 * Appends <code>numPages</code> pages to the end of this
                 * <code>Book</code>.  Each of the pages is associated with
                 * <code>page</code>.
                 * @param painter   the <code>Printable</code> instance that renders
                 *                   the page
                 * @param page      the size and orientation of the page
                 * @param numPages  the number of pages to be added to the
                 *                   this <code>Book</code>.
                 * @throws NullPointerException
                 *           If the <code>painter</code> or <code>page</code>
                 *           argument is <code>null</code>
                 */
                // @ts-ignore
                public append(painter: java.awt.print.Printable, page: java.awt.print.PageFormat, numPages: number /*int*/): void
            }
        }
    }
}

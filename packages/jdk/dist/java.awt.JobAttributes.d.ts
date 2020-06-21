declare namespace java {
    namespace awt {
        /**
         * A set of attributes which control a print job.
         * <p>
         * Instances of this class control the number of copies, default selection,
         * destination, print dialog, file and printer names, page ranges, multiple
         * document handling (including collation), and multi-page imposition (such
         * as duplex) of every print job which uses the instance. Attribute names are
         * compliant with the Internet Printing Protocol (IPP) 1.1 where possible.
         * Attribute values are partially compliant where possible.
         * <p>
         * To use a method which takes an inner class type, pass a reference to
         * one of the constant fields of the inner class. Client code cannot create
         * new instances of the inner class types because none of those classes
         * has a public constructor. For example, to set the print dialog type to
         * the cross-platform, pure Java print dialog, use the following code:
         * <pre>
         * import java.awt.JobAttributes;
         * public class PureJavaPrintDialogExample {
         * public void setPureJavaPrintDialog(JobAttributes jobAttributes) {
         * jobAttributes.setDialog(JobAttributes.DialogType.COMMON);
         * }
         * }
         * </pre>
         * <p>
         * Every IPP attribute which supports an <i>attributeName</i>-default value
         * has a corresponding <code>set<i>attributeName</i>ToDefault</code> method.
         * Default value fields are not provided.
         * @author David Mendenhall
         * @since 1.3
         */
        // @ts-ignore
        class JobAttributes extends java.lang.Object implements java.lang.Cloneable {
            /**
             * Constructs a <code>JobAttributes</code> instance with default
             * values for every attribute.  The dialog defaults to
             * <code>DialogType.NATIVE</code>.  Min page defaults to
             * <code>1</code>.  Max page defaults to <code>Integer.MAX_VALUE</code>.
             * Destination defaults to <code>DestinationType.PRINTER</code>.
             * Selection defaults to <code>DefaultSelectionType.ALL</code>.
             * Number of copies defaults to <code>1</code>. Multiple document handling defaults
             * to <code>MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES</code>.
             * Sides defaults to <code>SidesType.ONE_SIDED</code>. File name defaults
             * to <code>null</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>JobAttributes</code> instance which is a copy
             * of the supplied <code>JobAttributes</code>.
             * @param obj the <code>JobAttributes</code> to copy
             */
            // @ts-ignore
            constructor(obj: java.awt.JobAttributes)
            /**
             * Constructs a <code>JobAttributes</code> instance with the
             * specified values for every attribute.
             * @param copies an integer greater than 0
             * @param defaultSelection <code>DefaultSelectionType.ALL</code>,
             *           <code>DefaultSelectionType.RANGE</code>, or
             *           <code>DefaultSelectionType.SELECTION</code>
             * @param destination <code>DesintationType.FILE</code> or
             *           <code>DesintationType.PRINTER</code>
             * @param dialog <code>DialogType.COMMON</code>,
             *           <code>DialogType.NATIVE</code>, or
             *           <code>DialogType.NONE</code>
             * @param fileName the possibly <code>null</code> file name
             * @param maxPage an integer greater than zero and greater than or equal
             *           to <i>minPage</i>
             * @param minPage an integer greater than zero and less than or equal
             *           to <i>maxPage</i>
             * @param multipleDocumentHandling
             *      <code>MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_COLLATED_COPIES</code> or
             *      <code>MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES</code>
             * @param pageRanges an array of integer arrays of two elements; an array
             *           is interpreted as a range spanning all pages including and
             *           between the specified pages; ranges must be in ascending
             *           order and must not overlap; specified page numbers cannot be
             *           less than <i>minPage</i> nor greater than <i>maxPage</i>;
             *           for example:
             *           <pre>
             *           (new int[][] { new int[] { 1, 3 }, new int[] { 5, 5 },
             *                          new int[] { 15, 19 } }),
             *           </pre>
             *           specifies pages 1, 2, 3, 5, 15, 16, 17, 18, and 19. Note that
             *           (<code>new int[][] { new int[] { 1, 1 }, new int[] { 1, 2 } }</code>),
             *           is an invalid set of page ranges because the two ranges
             *           overlap
             * @param printer the possibly <code>null</code> printer name
             * @param sides <code>SidesType.ONE_SIDED</code>,
             *           <code>SidesType.TWO_SIDED_LONG_EDGE</code>, or
             *           <code>SidesType.TWO_SIDED_SHORT_EDGE</code>
             * @throws IllegalArgumentException if one or more of the above
             *           conditions is violated
             */
            // @ts-ignore
            constructor(copies: number /*int*/, defaultSelection: java.awt.JobAttributes.DefaultSelectionType, destination: java.awt.JobAttributes.DestinationType, dialog: java.awt.JobAttributes.DialogType, fileName: java.lang.String | string, maxPage: number /*int*/, minPage: number /*int*/, multipleDocumentHandling: java.awt.JobAttributes.MultipleDocumentHandlingType, pageRanges: number /*int*/[][], printer: java.lang.String | string, sides: java.awt.JobAttributes.SidesType)
            /**
             * Creates and returns a copy of this <code>JobAttributes</code>.
             * @return the newly created copy; it is safe to cast this Object into
             *           a <code>JobAttributes</code>
             */
            // @ts-ignore
            public clone(): any
            /**
             * Sets all of the attributes of this <code>JobAttributes</code> to
             * the same values as the attributes of obj.
             * @param obj the <code>JobAttributes</code> to copy
             */
            // @ts-ignore
            public set(obj: java.awt.JobAttributes): void
            /**
             * Returns the number of copies the application should render for jobs
             * using these attributes. This attribute is updated to the value chosen
             * by the user.
             * @return an integer greater than 0.
             */
            // @ts-ignore
            public getCopies(): number /*int*/
            /**
             * Specifies the number of copies the application should render for jobs
             * using these attributes. Not specifying this attribute is equivalent to
             * specifying <code>1</code>.
             * @param copies an integer greater than 0
             * @throws IllegalArgumentException if <code>copies</code> is less than
             *       or equal to 0
             */
            // @ts-ignore
            public setCopies(copies: number /*int*/): void
            /**
             * Sets the number of copies the application should render for jobs using
             * these attributes to the default. The default number of copies is 1.
             */
            // @ts-ignore
            public setCopiesToDefault(): void
            /**
             * Specifies whether, for jobs using these attributes, the application
             * should print all pages, the range specified by the return value of
             * <code>getPageRanges</code>, or the current selection. This attribute
             * is updated to the value chosen by the user.
             * @return DefaultSelectionType.ALL, DefaultSelectionType.RANGE, or
             *           DefaultSelectionType.SELECTION
             */
            // @ts-ignore
            public getDefaultSelection(): java.awt.JobAttributes.DefaultSelectionType
            /**
             * Specifies whether, for jobs using these attributes, the application
             * should print all pages, the range specified by the return value of
             * <code>getPageRanges</code>, or the current selection. Not specifying
             * this attribute is equivalent to specifying DefaultSelectionType.ALL.
             * @param defaultSelection DefaultSelectionType.ALL,
             *           DefaultSelectionType.RANGE, or DefaultSelectionType.SELECTION.
             * @throws IllegalArgumentException if defaultSelection is <code>null</code>
             */
            // @ts-ignore
            public setDefaultSelection(defaultSelection: java.awt.JobAttributes.DefaultSelectionType): void
            /**
             * Specifies whether output will be to a printer or a file for jobs using
             * these attributes. This attribute is updated to the value chosen by the
             * user.
             * @return DesintationType.FILE or DesintationType.PRINTER
             */
            // @ts-ignore
            public getDestination(): java.awt.JobAttributes.DestinationType
            /**
             * Specifies whether output will be to a printer or a file for jobs using
             * these attributes. Not specifying this attribute is equivalent to
             * specifying DesintationType.PRINTER.
             * @param destination DesintationType.FILE or DesintationType.PRINTER.
             * @throws IllegalArgumentException if destination is null.
             */
            // @ts-ignore
            public setDestination(destination: java.awt.JobAttributes.DestinationType): void
            /**
             * Returns whether, for jobs using these attributes, the user should see
             * a print dialog in which to modify the print settings, and which type of
             * print dialog should be displayed. DialogType.COMMON denotes a cross-
             * platform, pure Java print dialog. DialogType.NATIVE denotes the
             * platform's native print dialog. If a platform does not support a native
             * print dialog, the pure Java print dialog is displayed instead.
             * DialogType.NONE specifies no print dialog (i.e., background printing).
             * This attribute cannot be modified by, and is not subject to any
             * limitations of, the implementation or the target printer.
             * @return <code>DialogType.COMMON</code>, <code>DialogType.NATIVE</code>, or
             *           <code>DialogType.NONE</code>
             */
            // @ts-ignore
            public getDialog(): java.awt.JobAttributes.DialogType
            /**
             * Specifies whether, for jobs using these attributes, the user should see
             * a print dialog in which to modify the print settings, and which type of
             * print dialog should be displayed. DialogType.COMMON denotes a cross-
             * platform, pure Java print dialog. DialogType.NATIVE denotes the
             * platform's native print dialog. If a platform does not support a native
             * print dialog, the pure Java print dialog is displayed instead.
             * DialogType.NONE specifies no print dialog (i.e., background printing).
             * Not specifying this attribute is equivalent to specifying
             * DialogType.NATIVE.
             * @param dialog DialogType.COMMON, DialogType.NATIVE, or
             *           DialogType.NONE.
             * @throws IllegalArgumentException if dialog is null.
             */
            // @ts-ignore
            public setDialog(dialog: java.awt.JobAttributes.DialogType): void
            /**
             * Specifies the file name for the output file for jobs using these
             * attributes. This attribute is updated to the value chosen by the user.
             * @return the possibly <code>null</code> file name
             */
            // @ts-ignore
            public getFileName(): string
            /**
             * Specifies the file name for the output file for jobs using these
             * attributes. Default is platform-dependent and implementation-defined.
             * @param fileName the possibly null file name.
             */
            // @ts-ignore
            public setFileName(fileName: java.lang.String | string): void
            /**
             * Returns, for jobs using these attributes, the first page to be
             * printed, if a range of pages is to be printed. This attribute is
             * updated to the value chosen by the user. An application should ignore
             * this attribute on output, unless the return value of the <code>
             * getDefaultSelection</code> method is DefaultSelectionType.RANGE. An
             * application should honor the return value of <code>getPageRanges</code>
             * over the return value of this method, if possible.
             * @return an integer greater than zero and less than or equal to
             *           <i>toPage</i> and greater than or equal to <i>minPage</i> and
             *           less than or equal to <i>maxPage</i>.
             */
            // @ts-ignore
            public getFromPage(): number /*int*/
            /**
             * Specifies, for jobs using these attributes, the first page to be
             * printed, if a range of pages is to be printed. If this attribute is not
             * specified, then the values from the pageRanges attribute are used. If
             * pageRanges and either or both of fromPage and toPage are specified,
             * pageRanges takes precedence. Specifying none of pageRanges, fromPage,
             * or toPage is equivalent to calling
             * setPageRanges(new int[][] { new int[] { <i>minPage</i> } });
             * @param fromPage an integer greater than zero and less than or equal to
             *           <i>toPage</i> and greater than or equal to <i>minPage</i> and
             *           less than or equal to <i>maxPage</i>.
             * @throws IllegalArgumentException if one or more of the above
             *           conditions is violated.
             */
            // @ts-ignore
            public setFromPage(fromPage: number /*int*/): void
            /**
             * Specifies the maximum value the user can specify as the last page to
             * be printed for jobs using these attributes. This attribute cannot be
             * modified by, and is not subject to any limitations of, the
             * implementation or the target printer.
             * @return an integer greater than zero and greater than or equal
             *           to <i>minPage</i>.
             */
            // @ts-ignore
            public getMaxPage(): number /*int*/
            /**
             * Specifies the maximum value the user can specify as the last page to
             * be printed for jobs using these attributes. Not specifying this
             * attribute is equivalent to specifying <code>Integer.MAX_VALUE</code>.
             * @param maxPage an integer greater than zero and greater than or equal
             *           to <i>minPage</i>
             * @throws IllegalArgumentException if one or more of the above
             *           conditions is violated
             */
            // @ts-ignore
            public setMaxPage(maxPage: number /*int*/): void
            /**
             * Specifies the minimum value the user can specify as the first page to
             * be printed for jobs using these attributes. This attribute cannot be
             * modified by, and is not subject to any limitations of, the
             * implementation or the target printer.
             * @return an integer greater than zero and less than or equal
             *           to <i>maxPage</i>.
             */
            // @ts-ignore
            public getMinPage(): number /*int*/
            /**
             * Specifies the minimum value the user can specify as the first page to
             * be printed for jobs using these attributes. Not specifying this
             * attribute is equivalent to specifying <code>1</code>.
             * @param minPage an integer greater than zero and less than or equal
             *           to <i>maxPage</i>.
             * @throws IllegalArgumentException if one or more of the above
             *           conditions is violated.
             */
            // @ts-ignore
            public setMinPage(minPage: number /*int*/): void
            /**
             * Specifies the handling of multiple copies, including collation, for
             * jobs using these attributes. This attribute is updated to the value
             * chosen by the user.
             * @return MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_COLLATED_COPIES or
             *      MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES.
             */
            // @ts-ignore
            public getMultipleDocumentHandling(): java.awt.JobAttributes.MultipleDocumentHandlingType
            /**
             * Specifies the handling of multiple copies, including collation, for
             * jobs using these attributes. Not specifying this attribute is equivalent
             * to specifying
             * MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES.
             * @param multipleDocumentHandling
             *      MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_COLLATED_COPIES or
             *      MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES.
             * @throws IllegalArgumentException if multipleDocumentHandling is null.
             */
            // @ts-ignore
            public setMultipleDocumentHandling(multipleDocumentHandling: java.awt.JobAttributes.MultipleDocumentHandlingType): void
            /**
             * Sets the handling of multiple copies, including collation, for jobs
             * using these attributes to the default. The default handling is
             * MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES.
             */
            // @ts-ignore
            public setMultipleDocumentHandlingToDefault(): void
            /**
             * Specifies, for jobs using these attributes, the ranges of pages to be
             * printed, if a range of pages is to be printed. All range numbers are
             * inclusive. This attribute is updated to the value chosen by the user.
             * An application should ignore this attribute on output, unless the
             * return value of the <code>getDefaultSelection</code> method is
             * DefaultSelectionType.RANGE.
             * @return an array of integer arrays of 2 elements. An array
             *           is interpreted as a range spanning all pages including and
             *           between the specified pages. Ranges must be in ascending
             *           order and must not overlap. Specified page numbers cannot be
             *           less than <i>minPage</i> nor greater than <i>maxPage</i>.
             *           For example:
             *           (new int[][] { new int[] { 1, 3 }, new int[] { 5, 5 },
             *                          new int[] { 15, 19 } }),
             *           specifies pages 1, 2, 3, 5, 15, 16, 17, 18, and 19.
             */
            // @ts-ignore
            public getPageRanges(): number /*int*/[][]
            /**
             * Specifies, for jobs using these attributes, the ranges of pages to be
             * printed, if a range of pages is to be printed. All range numbers are
             * inclusive. If this attribute is not specified, then the values from the
             * fromPage and toPages attributes are used. If pageRanges and either or
             * both of fromPage and toPage are specified, pageRanges takes precedence.
             * Specifying none of pageRanges, fromPage, or toPage is equivalent to
             * calling setPageRanges(new int[][] { new int[] { <i>minPage</i>,
             * <i>minPage</i> } });
             * @param pageRanges an array of integer arrays of 2 elements. An array
             *           is interpreted as a range spanning all pages including and
             *           between the specified pages. Ranges must be in ascending
             *           order and must not overlap. Specified page numbers cannot be
             *           less than <i>minPage</i> nor greater than <i>maxPage</i>.
             *           For example:
             *           (new int[][] { new int[] { 1, 3 }, new int[] { 5, 5 },
             *                          new int[] { 15, 19 } }),
             *           specifies pages 1, 2, 3, 5, 15, 16, 17, 18, and 19. Note that
             *           (new int[][] { new int[] { 1, 1 }, new int[] { 1, 2 } }),
             *           is an invalid set of page ranges because the two ranges
             *           overlap.
             * @throws IllegalArgumentException if one or more of the above
             *           conditions is violated.
             */
            // @ts-ignore
            public setPageRanges(pageRanges: number /*int*/[][]): void
            /**
             * Returns the destination printer for jobs using these attributes. This
             * attribute is updated to the value chosen by the user.
             * @return the possibly null printer name.
             */
            // @ts-ignore
            public getPrinter(): string
            /**
             * Specifies the destination printer for jobs using these attributes.
             * Default is platform-dependent and implementation-defined.
             * @param printer the possibly null printer name.
             */
            // @ts-ignore
            public setPrinter(printer: java.lang.String | string): void
            /**
             * Returns how consecutive pages should be imposed upon the sides of the
             * print medium for jobs using these attributes. SidesType.ONE_SIDED
             * imposes each consecutive page upon the same side of consecutive media
             * sheets. This imposition is sometimes called <i>simplex</i>.
             * SidesType.TWO_SIDED_LONG_EDGE imposes each consecutive pair of pages
             * upon front and back sides of consecutive media sheets, such that the
             * orientation of each pair of pages on the medium would be correct for
             * the reader as if for binding on the long edge. This imposition is
             * sometimes called <i>duplex</i>. SidesType.TWO_SIDED_SHORT_EDGE imposes
             * each consecutive pair of pages upon front and back sides of consecutive
             * media sheets, such that the orientation of each pair of pages on the
             * medium would be correct for the reader as if for binding on the short
             * edge. This imposition is sometimes called <i>tumble</i>. This attribute
             * is updated to the value chosen by the user.
             * @return SidesType.ONE_SIDED, SidesType.TWO_SIDED_LONG_EDGE, or
             *           SidesType.TWO_SIDED_SHORT_EDGE.
             */
            // @ts-ignore
            public getSides(): java.awt.JobAttributes.SidesType
            /**
             * Specifies how consecutive pages should be imposed upon the sides of the
             * print medium for jobs using these attributes. SidesType.ONE_SIDED
             * imposes each consecutive page upon the same side of consecutive media
             * sheets. This imposition is sometimes called <i>simplex</i>.
             * SidesType.TWO_SIDED_LONG_EDGE imposes each consecutive pair of pages
             * upon front and back sides of consecutive media sheets, such that the
             * orientation of each pair of pages on the medium would be correct for
             * the reader as if for binding on the long edge. This imposition is
             * sometimes called <i>duplex</i>. SidesType.TWO_SIDED_SHORT_EDGE imposes
             * each consecutive pair of pages upon front and back sides of consecutive
             * media sheets, such that the orientation of each pair of pages on the
             * medium would be correct for the reader as if for binding on the short
             * edge. This imposition is sometimes called <i>tumble</i>. Not specifying
             * this attribute is equivalent to specifying SidesType.ONE_SIDED.
             * @param sides SidesType.ONE_SIDED, SidesType.TWO_SIDED_LONG_EDGE, or
             *           SidesType.TWO_SIDED_SHORT_EDGE.
             * @throws IllegalArgumentException if sides is null.
             */
            // @ts-ignore
            public setSides(sides: java.awt.JobAttributes.SidesType): void
            /**
             * Sets how consecutive pages should be imposed upon the sides of the
             * print medium for jobs using these attributes to the default. The
             * default imposition is SidesType.ONE_SIDED.
             */
            // @ts-ignore
            public setSidesToDefault(): void
            /**
             * Returns, for jobs using these attributes, the last page (inclusive)
             * to be printed, if a range of pages is to be printed. This attribute is
             * updated to the value chosen by the user. An application should ignore
             * this attribute on output, unless the return value of the <code>
             * getDefaultSelection</code> method is DefaultSelectionType.RANGE. An
             * application should honor the return value of <code>getPageRanges</code>
             * over the return value of this method, if possible.
             * @return an integer greater than zero and greater than or equal
             *           to <i>toPage</i> and greater than or equal to <i>minPage</i>
             *           and less than or equal to <i>maxPage</i>.
             */
            // @ts-ignore
            public getToPage(): number /*int*/
            /**
             * Specifies, for jobs using these attributes, the last page (inclusive)
             * to be printed, if a range of pages is to be printed.
             * If this attribute is not specified, then the values from the pageRanges
             * attribute are used. If pageRanges and either or both of fromPage and
             * toPage are specified, pageRanges takes precedence. Specifying none of
             * pageRanges, fromPage, or toPage is equivalent to calling
             * setPageRanges(new int[][] { new int[] { <i>minPage</i> } });
             * @param toPage an integer greater than zero and greater than or equal
             *           to <i>fromPage</i> and greater than or equal to <i>minPage</i>
             *           and less than or equal to <i>maxPage</i>.
             * @throws IllegalArgumentException if one or more of the above
             *           conditions is violated.
             */
            // @ts-ignore
            public setToPage(toPage: number /*int*/): void
            /**
             * Determines whether two JobAttributes are equal to each other.
             * <p>
             * Two JobAttributes are equal if and only if each of their attributes are
             * equal. Attributes of enumeration type are equal if and only if the
             * fields refer to the same unique enumeration object. A set of page
             * ranges is equal if and only if the sets are of equal length, each range
             * enumerates the same pages, and the ranges are in the same order.
             * @param obj the object whose equality will be checked.
             * @return whether obj is equal to this JobAttribute according to the
             *           above criteria.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns a hash code value for this JobAttributes.
             * @return the hash code.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns a string representation of this JobAttributes.
             * @return the string representation.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}

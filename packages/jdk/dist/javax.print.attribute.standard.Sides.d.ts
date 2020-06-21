declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class Sides is a printing attribute class, an enumeration, that specifies
                 * how print-stream pages are to be imposed upon the sides of an instance of a
                 * selected medium, i.e., an impression.
                 * <P>
                 * The effect of a Sides attribute on a multidoc print job (a job with multiple
                 * documents) depends on whether all the docs have the same sides values
                 * specified or whether different docs have different sides values specified,
                 * and on the (perhaps defaulted) value of the {@link MultipleDocumentHandling
                 * MultipleDocumentHandling} attribute.
                 * <UL>
                 * <LI>
                 * If all the docs have the same sides value <I>n</I> specified, then any value
                 * of {@link MultipleDocumentHandling MultipleDocumentHandling} makes sense,
                 * and the printer's processing depends on the {@link MultipleDocumentHandling
                 * MultipleDocumentHandling} value:
                 * <UL>
                 * <LI>
                 * SINGLE_DOCUMENT -- All the input docs will be combined together into one
                 * output document. Each media sheet will consist of <I>n</I> impressions from
                 * the output document.
                 * <P>
                 * <LI>
                 * SINGLE_DOCUMENT_NEW_SHEET -- All the input docs will be combined together
                 * into one output document. Each media sheet will consist of <I>n</I>
                 * impressions from the output document. However, the first impression of each
                 * input doc will always start on a new media sheet; this means the last media
                 * sheet of an input doc may have only one impression on it.
                 * <P>
                 * <LI>
                 * SEPARATE_DOCUMENTS_UNCOLLATED_COPIES -- The input docs will remain separate.
                 * Each media sheet will consist of <I>n</I> impressions from the input doc.
                 * Since the input docs are separate, the first impression of each input doc
                 * will always start on a new media sheet; this means the last media sheet of
                 * an input doc may have only one impression on it.
                 * <P>
                 * <LI>
                 * SEPARATE_DOCUMENTS_COLLATED_COPIES -- The input docs will remain separate.
                 * Each media sheet will consist of <I>n</I> impressions from the input doc.
                 * Since the input docs are separate, the first impression of each input doc
                 * will always start on a new media sheet; this means the last media sheet of
                 * an input doc may have only one impression on it.
                 * </UL>
                 * <P>
                 * <UL>
                 * <LI>
                 * SINGLE_DOCUMENT -- All the input docs will be combined together into one
                 * output document. Each media sheet will consist of <I>n<SUB>i</SUB></I>
                 * impressions from the output document, where <I>i</I> is the number of the
                 * input doc corresponding to that point in the output document. When the next
                 * input doc has a different sides value from the previous input doc, the first
                 * print-stream page of the next input doc goes at the start of the next media
                 * sheet, possibly leaving only one impression on the previous media sheet.
                 * <P>
                 * <LI>
                 * SINGLE_DOCUMENT_NEW_SHEET -- All the input docs will be combined together
                 * into one output document. Each media sheet will consist of <I>n</I>
                 * impressions from the output document. However, the first impression of each
                 * input doc will always start on a new media sheet; this means the last
                 * impression of an input doc may have only one impression on it.
                 * <P>
                 * <LI>
                 * SEPARATE_DOCUMENTS_UNCOLLATED_COPIES -- The input docs will remain separate.
                 * For input doc <I>i,</I> each media sheet will consist of <I>n<SUB>i</SUB></I>
                 * impressions from the input doc. Since the input docs are separate, the first
                 * impression of each input doc will always start on a new media sheet; this
                 * means the last media sheet of an input doc may have only one impression on
                 * it.
                 * <P>
                 * <LI>
                 * SEPARATE_DOCUMENTS_COLLATED_COPIES -- The input docs will remain separate.
                 * For input doc <I>i,</I> each media sheet will consist of <I>n<SUB>i</SUB></I>
                 * impressions from the input doc. Since the input docs are separate, the first
                 * impression of each input doc will always start on a new media sheet; this
                 * means the last media sheet of an input doc may have only one impression on
                 * it.
                 * </UL>
                 * </UL>
                 * <P>
                 * <B>IPP Compatibility:</B> The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class Sides extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
                    /**
                     * Construct a new sides enumeration value with the given integer value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * Imposes each consecutive print-stream page upon the same side of
                     * consecutive media sheets.
                     */
                    // @ts-ignore
                    public static readonly ONE_SIDED: javax.print.attribute.standard.Sides
                    /**
                     * Imposes each consecutive pair of print-stream pages upon front and back
                     * sides of consecutive media sheets, such that the orientation of each
                     * pair of print-stream pages on the medium would be correct for the
                     * reader as if for binding on the long edge. This imposition is also
                     * known as "duplex" (see {@link #DUPLEX DUPLEX}).
                     */
                    // @ts-ignore
                    public static readonly TWO_SIDED_LONG_EDGE: javax.print.attribute.standard.Sides
                    /**
                     * Imposes each consecutive pair of print-stream pages upon front and back
                     * sides of consecutive media sheets, such that the orientation of each
                     * pair of print-stream pages on the medium would be correct for the
                     * reader as if for binding on the short edge. This imposition is also
                     * known as "tumble" (see {@link #TUMBLE TUMBLE}).
                     */
                    // @ts-ignore
                    public static readonly TWO_SIDED_SHORT_EDGE: javax.print.attribute.standard.Sides
                    /**
                     * An alias for "two sided long edge" (see {@link #TWO_SIDED_LONG_EDGE
                     * TWO_SIDED_LONG_EDGE}).
                     */
                    // @ts-ignore
                    public static readonly DUPLEX: javax.print.attribute.standard.Sides
                    /**
                     * An alias for "two sided short edge" (see {@link #TWO_SIDED_SHORT_EDGE
                     * TWO_SIDED_SHORT_EDGE}).
                     */
                    // @ts-ignore
                    public static readonly TUMBLE: javax.print.attribute.standard.Sides
                    /**
                     * Returns the string table for class Sides.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class Sides.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class Sides, the category is class Sides itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class Sides, the category name is <CODE>"sides"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}

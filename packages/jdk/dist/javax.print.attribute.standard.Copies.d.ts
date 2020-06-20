declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class Copies is an integer valued printing attribute class that specifies the
                 * number of copies to be printed.
                 * <P>
                 * On many devices the supported number of collated copies will be limited by
                 * the number of physical output bins on the device, and may be different from
                 * the number of uncollated copies which can be supported.
                 * <P>
                 * The effect of a Copies attribute with a value of <I>n</I> on a multidoc print
                 * job (a job with multiple documents) depends on the (perhaps defaulted) value
                 * of the {@link MultipleDocumentHandling MultipleDocumentHandling} attribute:
                 * <UL>
                 * <LI>
                 * SINGLE_DOCUMENT -- The result will be <I>n</I> copies of a single output
                 * document comprising all the input docs.
                 * <P>
                 * <LI>
                 * SINGLE_DOCUMENT_NEW_SHEET -- The result will be <I>n</I> copies of a single
                 * output document comprising all the input docs, and the first impression of
                 * each input doc will always start on a new media sheet.
                 * <P>
                 * <LI>
                 * SEPARATE_DOCUMENTS_UNCOLLATED_COPIES -- The result will be <I>n</I> copies of
                 * the first input document, followed by <I>n</I> copies of the second input
                 * document, . . . followed by <I>n</I> copies of the last input document.
                 * <P>
                 * <LI>
                 * SEPARATE_DOCUMENTS_COLLATED_COPIES -- The result will be the first input
                 * document, the second input document, . . . the last input document, the group
                 * of documents being repeated <I>n</I> times.
                 * </UL>
                 * <P>
                 * <B>IPP Compatibility:</B> The integer value gives the IPP integer value. The
                 * category name returned by <CODE>getName()</CODE> gives the IPP attribute
                 * name.
                 * <P>
                 * @author David Mendenhall
                 * @author Alan Kamihensky
                 */
                // @ts-ignore
                class Copies extends javax.print.attribute.IntegerSyntax implements javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
                    /**
                     * Construct a new copies attribute with the given integer value.
                     * @param value  Integer value.
                     * @exception IllegalArgumentException
                     *   (Unchecked exception) Thrown if <CODE>value</CODE> is less than 1.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * Returns whether this copies attribute is equivalent to the passed in
                     * object. To be equivalent, all of the following conditions must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class Copies.
                     * <LI>
                     * This copies attribute's value and <CODE>object</CODE>'s value are
                     * equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this copies
                     *           attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class Copies, the category is class Copies itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class Copies, the category name is <CODE>"copies"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}

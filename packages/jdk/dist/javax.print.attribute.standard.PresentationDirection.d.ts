declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PresentationDirection is a printing attribute class, an enumeration,
                 * that is used in conjunction with the {@link  NumberUp NumberUp} attribute to
                 * indicate the layout of multiple print-stream pages to impose upon a
                 * single side of an instance of a selected medium.
                 * This is useful to mirror the text layout conventions of different scripts.
                 * For example, English is "toright-tobottom", Hebrew is "toleft-tobottom"
                 * and Japanese is usually "tobottom-toleft".
                 * <P>
                 * <B>IPP Compatibility:</B>  This attribute is not an IPP 1.1
                 * attribute; it is an attribute in the Production Printing Extension
                 * (<a href="ftp://ftp.pwg.org/pub/pwg/standards/pwg5100.3.pdf">PDF</a>)
                 * of IPP 1.1.  The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author Phil Race.
                 */
                // @ts-ignore
                class PresentationDirection extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintJobAttribute, javax.print.attribute.PrintRequestAttribute {
                    /**
                     * Pages are laid out in columns starting at the top left,
                     * proceeding towards the bottom {@literal &} right.
                     */
                    // @ts-ignore
                    readonly TOBOTTOM_TORIGHT: javax.print.attribute.standard.PresentationDirection
                    /**
                     * Pages are laid out in columns starting at the top right,
                     * proceeding towards the bottom {@literal &} left.
                     */
                    // @ts-ignore
                    readonly TOBOTTOM_TOLEFT: javax.print.attribute.standard.PresentationDirection
                    /**
                     * Pages are laid out in columns starting at the bottom left,
                     * proceeding towards the top {@literal &} right.
                     */
                    // @ts-ignore
                    readonly TOTOP_TORIGHT: javax.print.attribute.standard.PresentationDirection
                    /**
                     * Pages are laid out in columns starting at the bottom right,
                     * proceeding towards the top {@literal &} left.
                     */
                    // @ts-ignore
                    readonly TOTOP_TOLEFT: javax.print.attribute.standard.PresentationDirection
                    /**
                     * Pages are laid out in rows starting at the top left,
                     * proceeding towards the right {@literal &} bottom.
                     */
                    // @ts-ignore
                    readonly TORIGHT_TOBOTTOM: javax.print.attribute.standard.PresentationDirection
                    /**
                     * Pages are laid out in rows starting at the bottom left,
                     * proceeding towards the right {@literal &} top.
                     */
                    // @ts-ignore
                    readonly TORIGHT_TOTOP: javax.print.attribute.standard.PresentationDirection
                    /**
                     * Pages are laid out in rows starting at the top right,
                     * proceeding towards the left {@literal &} bottom.
                     */
                    // @ts-ignore
                    readonly TOLEFT_TOBOTTOM: javax.print.attribute.standard.PresentationDirection
                    /**
                     * Pages are laid out in rows starting at the bottom right,
                     * proceeding towards the left {@literal &} top.
                     */
                    // @ts-ignore
                    readonly TOLEFT_TOTOP: javax.print.attribute.standard.PresentationDirection
                    /**
                     * Returns the string table for class PresentationDirection.
                     */
                    // @ts-ignore
                    getStringTable(): java.lang.String[]
                    /**
                     * Returns the enumeration value table for class PresentationDirection.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PresentationDirection
                     * the category is class PresentationDirection itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PresentationDirection
                     * the category name is <CODE>"presentation-direction"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}

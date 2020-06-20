declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class Fidelity is a printing attribute class, an enumeration,
                 * that indicates whether total fidelity to client supplied print request
                 * attributes is required.
                 * If FIDELITY_TRUE is specified and a service cannot print the job exactly
                 * as specified it must reject the job.
                 * If FIDELITY_FALSE is specified a reasonable attempt to print the job is
                 * acceptable. If not supplied the default is FIDELITY_FALSE.
                 * <P>
                 * <B>IPP Compatibility:</B> The IPP boolean value is "true" for FIDELITY_TRUE
                 * and "false" for FIDELITY_FALSE. The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * See <a href="http://www.ietf.org/rfc/rfc2911.txt">RFC 2911</a> Section 15.1 for
                 * a fuller description of the IPP fidelity attribute.
                 * <P>
                 */
                // @ts-ignore
                class Fidelity extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintJobAttribute, javax.print.attribute.PrintRequestAttribute {
                    /**
                     * Construct a new fidelity enumeration value with the
                     * given integer value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * The job must be printed exactly as specified. or else rejected.
                     */
                    // @ts-ignore
                    readonly FIDELITY_TRUE: javax.print.attribute.standard.Fidelity
                    /**
                     * The printer should make reasonable attempts to print the job,
                     * even if it cannot print it exactly as specified.
                     */
                    // @ts-ignore
                    readonly FIDELITY_FALSE: javax.print.attribute.standard.Fidelity
                    /**
                     * Returns the string table for class Fidelity.
                     */
                    // @ts-ignore
                    getStringTable(): java.lang.String[]
                    /**
                     * Returns the enumeration value table for class Fidelity.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class Fidelity the category is class Fidelity itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class Fidelity the category name is
                     * <CODE>"ipp-attribute-fidelity"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}

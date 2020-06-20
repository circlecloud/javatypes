declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrinterResolution is a printing attribute class that specifies an
                 * exact resolution supported by a printer or to be used for a print job.
                 * This attribute assumes that printers have a small set of device resolutions
                 * at which they can operate rather than a continuum.
                 * <p>
                 * PrinterResolution is used in multiple ways:
                 * <OL TYPE=1>
                 * <LI>
                 * When a client searches looking for a printer that supports the client's
                 * desired resolution exactly (no more, no less), the client specifies
                 * an instance of class PrinterResolution indicating the exact resolution the
                 * client wants. Only printers supporting that exact resolution will match the
                 * search.
                 * <P>
                 * <LI>
                 * When a client needs to print a job using the client's desired resolution
                 * exactly (no more, no less), the client specifies an instance of class
                 * PrinterResolution as an attribute of the Print Job. This will fail if the
                 * Print Job doesn't support that exact resolution, and Fidelity is set to
                 * true.
                 * </OL>
                 * If a client wants to locate a printer supporting a resolution
                 * greater than some required minimum, then it may be necessary to exclude
                 * this attribute from a lookup request and to directly query the set of
                 * supported resolutions, and specify the one that most closely meets
                 * the client's requirements.
                 * In some cases this may be more simply achieved by specifying a
                 * PrintQuality attribute which often controls resolution.
                 * <P>
                 * <P>
                 * <B>IPP Compatibility:</B> The information needed to construct an IPP
                 * <CODE>"printer-resolution"</CODE> attribute can be obtained by calling
                 * methods on the PrinterResolution object. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author David Mendenhall
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrinterResolution extends javax.print.attribute.ResolutionSyntax implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
                    /**
                     * Construct a new printer resolution attribute from the given items.
                     * @param crossFeedResolution
                     *      Cross feed direction resolution.
                     * @param feedResolution
                     *      Feed direction resolution.
                     * @param units
                     *     Unit conversion factor, e.g. <code>ResolutionSyntax.DPI</CODE>
                     *  or <code>ResolutionSyntax.DPCM</CODE>.
                     * @exception IllegalArgumentException
                     *      (unchecked exception) Thrown if {#code crossFeedResolution < 1} or
                     *      {@code feedResolution < 1} or {@code units < 1}.
                     */
                    // @ts-ignore
                    constructor(crossFeedResolution: number /*int*/, feedResolution: number /*int*/, units: number /*int*/)
                    /**
                     * Returns whether this printer resolution attribute is equivalent to the
                     * passed in object. To be equivalent, all of the following conditions
                     * must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class PrinterResolution.
                     * <LI>
                     * This attribute's cross feed direction resolution is equal to
                     * <CODE>object</CODE>'s cross feed direction resolution.
                     * <LI>
                     * This attribute's feed direction resolution is equal to
                     * <CODE>object</CODE>'s feed direction resolution.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this printer
                     *           resolution attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrinterResolution, the category is class PrinterResolution itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrinterResolution, the
                     * category name is <CODE>"printer-resolution"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}

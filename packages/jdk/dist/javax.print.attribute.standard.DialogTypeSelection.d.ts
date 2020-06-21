declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class DialogTypeSelection is a printing attribute class, an enumeration,
                 * that indicates the user dialog type to be used for specifying
                 * printing options.
                 * If {@code NATIVE} is specified, then where available, a native
                 * platform dialog is displayed.
                 * If {@code COMMON} is specified, a cross-platform print dialog is displayed.
                 * This option to specify a native dialog for use with an IPP attribute
                 * set provides a standard way to reflect back of the setting and option
                 * changes made by a user to the calling application, and integrates
                 * the native dialog into the Java printing APIs.
                 * But note that some options and settings in a native dialog may not
                 * necessarily map to IPP attributes as they may be non-standard platform,
                 * or even printer specific options.
                 * <P>
                 * <B>IPP Compatibility:</B> This is not an IPP attribute.
                 * <P>
                 * @since 1.7
                 */
                // @ts-ignore
                class DialogTypeSelection extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintRequestAttribute {
                    /**
                     * Construct a new dialog type selection enumeration value with the
                     * given integer value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    // @ts-ignore
                    public static readonly NATIVE: javax.print.attribute.standard.DialogTypeSelection
                    // @ts-ignore
                    public static readonly COMMON: javax.print.attribute.standard.DialogTypeSelection
                    /**
                     * Returns the string table for class DialogTypeSelection.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class DialogTypeSelection.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class DialogTypeSelection the category is class
                     * DialogTypeSelection itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class DialogTypeSelection the category name is
                     * <CODE>"dialog-type-selection"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}

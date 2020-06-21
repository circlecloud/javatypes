declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace Control {
                /**
                 * An instance of the <code>Type</code> class represents the type of
                 * the control.  Static instances are provided for the
                 * common types.
                 */
                // @ts-ignore
                class Type extends java.lang.Object {
                    /**
                     * Constructs a new control type with the name specified.
                     * The name should be a descriptive string appropriate for
                     * labelling the control in an application, such as "Gain" or "Balance."
                     * @param name  the name of the new control type.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * Finalizes the equals method
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Finalizes the hashCode method
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Provides the <code>String</code> representation of the control type.  This <code>String</code> is
                     * the same name that was passed to the constructor.
                     * @return the control type name
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}

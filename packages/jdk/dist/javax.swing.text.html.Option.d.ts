declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * Value for the ListModel used to represent
                 * &lt;option&gt; elements.  This is the object
                 * installed as items of the DefaultComboBoxModel
                 * used to represent the &lt;select&gt; element.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class Option extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Creates a new Option object.
                     * @param attr the attributes associated with the
                     *   option element.  The attributes are copied to
                     *   ensure they won't change.
                     */
                    // @ts-ignore
                    constructor(attr: javax.swing.text.AttributeSet)
                    /**
                     * Sets the label to be used for the option.
                     */
                    // @ts-ignore
                    public setLabel(label: java.lang.String | string): void
                    /**
                     * Fetch the label associated with the option.
                     */
                    // @ts-ignore
                    public getLabel(): string
                    /**
                     * Fetch the attributes associated with this option.
                     */
                    // @ts-ignore
                    public getAttributes(): javax.swing.text.AttributeSet
                    /**
                     * String representation is the label.
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Sets the selected state.
                     */
                    // @ts-ignore
                    setSelection(state: boolean): void
                    /**
                     * Fetches the selection state associated with this option.
                     */
                    // @ts-ignore
                    public isSelected(): boolean
                    /**
                     * Convenience method to return the string associated
                     * with the <code>value</code> attribute.  If the
                     * value has not been specified, the label will be
                     * returned.
                     */
                    // @ts-ignore
                    public getValue(): string
                }
            }
        }
    }
}

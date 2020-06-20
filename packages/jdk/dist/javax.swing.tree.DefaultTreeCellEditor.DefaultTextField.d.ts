declare namespace javax {
    namespace swing {
        namespace tree {
            namespace DefaultTreeCellEditor {
                /**
                 * <code>TextField</code> used when no editor is supplied.
                 * This textfield locks into the border it is constructed with.
                 * It also prefers its parents font over its font. And if the
                 * renderer is not <code>null</code> and no font
                 * has been specified the preferred height is that of the renderer.
                 */
                // @ts-ignore
                class DefaultTextField extends javax.swing.JTextField {
                    /**
                     * Constructs a
                     * <code>DefaultTreeCellEditor.DefaultTextField</code> object.
                     * @param border  a <code>Border</code> object
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(border: javax.swing.border.Border)
                    /**
                     * Border to use.
                     */
                    // @ts-ignore
                    border: javax.swing.border.Border
                    /**
                     * Sets the border of this component.<p>
                     * This is a bound property.
                     * @param border the border to be rendered for this component
                     * @see Border
                     * @see CompoundBorder
                     * @beaninfo bound: true
                     *     preferred: true
                     *     attribute: visualUpdate true
                     *   description: The component's border.
                     */
                    // @ts-ignore
                    setBorder(border: javax.swing.border.Border): void
                    /**
                     * Overrides <code>JComponent.getBorder</code> to
                     * returns the current border.
                     */
                    // @ts-ignore
                    getBorder(): javax.swing.border.Border
                    // @ts-ignore
                    getFont(): java.awt.Font
                    /**
                     * Overrides <code>JTextField.getPreferredSize</code> to
                     * return the preferred size based on current font, if set,
                     * or else use renderer's font.
                     * @return a <code>Dimension</code> object containing
                     *    the preferred size
                     */
                    // @ts-ignore
                    getPreferredSize(): java.awt.Dimension
                }
            }
        }
    }
}

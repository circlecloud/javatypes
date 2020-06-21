declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * ComboBox renderer
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Arnaud Weber
                 */
                // @ts-ignore
                class BasicComboBoxRenderer extends javax.swing.JLabel implements javax.swing.ListCellRenderer<any>, java.io.Serializable {
                    // @ts-ignore
                    constructor()
                    /**
                     * An empty <code>Border</code>. This field might not be used. To change the
                     * <code>Border</code> used by this renderer directly set it using
                     * the <code>setBorder</code> method.
                     */
                    // @ts-ignore
                    static noFocusBorder: javax.swing.border.Border
                    // @ts-ignore
                    public getPreferredSize(): java.awt.Dimension
                    // @ts-ignore
                    public getListCellRendererComponent(list: javax.swing.JList<any>, value: java.lang.Object | any, index: number /*int*/, isSelected: boolean, cellHasFocus: boolean): java.awt.Component
                }
            }
        }
    }
}

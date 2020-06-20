declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * JButton subclass to help out MetalComboBoxUI
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @see MetalComboBoxButton
                 * @author Tom Santos
                 */
                // @ts-ignore
                class MetalComboBoxButton extends javax.swing.JButton {
                    // @ts-ignore
                    constructor(cb: javax.swing.JComboBox, i: javax.swing.Icon, pane: javax.swing.CellRendererPane, list: javax.swing.JList)
                    // @ts-ignore
                    constructor(cb: javax.swing.JComboBox, i: javax.swing.Icon, onlyIcon: boolean, pane: javax.swing.CellRendererPane, list: javax.swing.JList)
                    // @ts-ignore
                    comboBox: javax.swing.JComboBox
                    // @ts-ignore
                    listBox: javax.swing.JList
                    // @ts-ignore
                    rendererPane: javax.swing.CellRendererPane
                    // @ts-ignore
                    comboIcon: javax.swing.Icon
                    // @ts-ignore
                    iconOnly: boolean
                    // @ts-ignore
                    getComboBox(): javax.swing.JComboBox
                    // @ts-ignore
                    setComboBox(cb: javax.swing.JComboBox): void
                    // @ts-ignore
                    getComboIcon(): javax.swing.Icon
                    // @ts-ignore
                    setComboIcon(i: javax.swing.Icon): void
                    // @ts-ignore
                    isIconOnly(): boolean
                    // @ts-ignore
                    setIconOnly(isIconOnly: boolean): void
                    // @ts-ignore
                    isFocusTraversable(): boolean
                    // @ts-ignore
                    setEnabled(enabled: boolean): void
                    // @ts-ignore
                    paintComponent(g: java.awt.Graphics): void
                    // @ts-ignore
                    getMinimumSize(): java.awt.Dimension
                }
            }
        }
    }
}

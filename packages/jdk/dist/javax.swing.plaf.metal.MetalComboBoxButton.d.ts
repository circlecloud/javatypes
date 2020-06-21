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
                    constructor(cb: javax.swing.JComboBox<any>, i: javax.swing.Icon, pane: javax.swing.CellRendererPane, list: javax.swing.JList<any>)
                    // @ts-ignore
                    constructor(cb: javax.swing.JComboBox<any>, i: javax.swing.Icon, onlyIcon: boolean, pane: javax.swing.CellRendererPane, list: javax.swing.JList<any>)
                    // @ts-ignore
                    comboBox: javax.swing.JComboBox<any>
                    // @ts-ignore
                    listBox: javax.swing.JList<any>
                    // @ts-ignore
                    rendererPane: javax.swing.CellRendererPane
                    // @ts-ignore
                    comboIcon: javax.swing.Icon
                    // @ts-ignore
                    iconOnly: boolean
                    // @ts-ignore
                    public getComboBox(): javax.swing.JComboBox<any>
                    // @ts-ignore
                    public setComboBox(cb: javax.swing.JComboBox<any>): void
                    // @ts-ignore
                    public getComboIcon(): javax.swing.Icon
                    // @ts-ignore
                    public setComboIcon(i: javax.swing.Icon): void
                    // @ts-ignore
                    public isIconOnly(): boolean
                    // @ts-ignore
                    public setIconOnly(isIconOnly: boolean): void
                    // @ts-ignore
                    public isFocusTraversable(): boolean
                    // @ts-ignore
                    public setEnabled(enabled: boolean): void
                    // @ts-ignore
                    public paintComponent(g: java.awt.Graphics): void
                    // @ts-ignore
                    public getMinimumSize(): java.awt.Dimension
                }
            }
        }
    }
}

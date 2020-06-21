declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * JButton object for Metal scrollbar arrows.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Tom Santos
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class MetalScrollButton extends javax.swing.plaf.basic.BasicArrowButton {
                    // @ts-ignore
                    constructor(direction: number /*int*/, width: number /*int*/, freeStanding: boolean)
                    // @ts-ignore
                    public setFreeStanding(freeStanding: boolean): void
                    // @ts-ignore
                    public paint(g: java.awt.Graphics): void
                    // @ts-ignore
                    public getPreferredSize(): java.awt.Dimension
                    // @ts-ignore
                    public getMinimumSize(): java.awt.Dimension
                    // @ts-ignore
                    public getMaximumSize(): java.awt.Dimension
                    // @ts-ignore
                    public getButtonWidth(): number /*int*/
                }
            }
        }
    }
}

declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * The Metal implementation of ProgressBarUI.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Michael C. Albers
                 */
                // @ts-ignore
                class MetalProgressBarUI extends javax.swing.plaf.basic.BasicProgressBarUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Draws a bit of special highlighting on the progress bar.
                     * The core painting is deferred to the BasicProgressBar's
                     * <code>paintDeterminate</code> method.
                     * @since 1.4
                     */
                    // @ts-ignore
                    public paintDeterminate(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Draws a bit of special highlighting on the progress bar
                     * and bouncing box.
                     * The core painting is deferred to the BasicProgressBar's
                     * <code>paintIndeterminate</code> method.
                     * @since 1.4
                     */
                    // @ts-ignore
                    public paintIndeterminate(g: java.awt.Graphics, c: javax.swing.JComponent): void
                }
            }
        }
    }
}

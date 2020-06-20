declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * The class that manages a basic title bar
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author David Kloba
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class BasicInternalFrameTitlePane extends javax.swing.JComponent {
                    // @ts-ignore
                    constructor(f: javax.swing.JInternalFrame)
                    // @ts-ignore
                    menuBar: javax.swing.JMenuBar
                    // @ts-ignore
                    iconButton: javax.swing.JButton
                    // @ts-ignore
                    maxButton: javax.swing.JButton
                    // @ts-ignore
                    closeButton: javax.swing.JButton
                    // @ts-ignore
                    windowMenu: javax.swing.JMenu
                    // @ts-ignore
                    frame: javax.swing.JInternalFrame
                    // @ts-ignore
                    selectedTitleColor: java.awt.Color
                    // @ts-ignore
                    selectedTextColor: java.awt.Color
                    // @ts-ignore
                    notSelectedTitleColor: java.awt.Color
                    // @ts-ignore
                    notSelectedTextColor: java.awt.Color
                    // @ts-ignore
                    maxIcon: javax.swing.Icon
                    // @ts-ignore
                    minIcon: javax.swing.Icon
                    // @ts-ignore
                    iconIcon: javax.swing.Icon
                    // @ts-ignore
                    closeIcon: javax.swing.Icon
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    closeAction: javax.swing.Action
                    // @ts-ignore
                    maximizeAction: javax.swing.Action
                    // @ts-ignore
                    iconifyAction: javax.swing.Action
                    // @ts-ignore
                    restoreAction: javax.swing.Action
                    // @ts-ignore
                    moveAction: javax.swing.Action
                    // @ts-ignore
                    sizeAction: javax.swing.Action
                    // @ts-ignore
                    readonly CLOSE_CMD: string
                    // @ts-ignore
                    readonly ICONIFY_CMD: string
                    // @ts-ignore
                    readonly RESTORE_CMD: string
                    // @ts-ignore
                    readonly MAXIMIZE_CMD: string
                    // @ts-ignore
                    readonly MOVE_CMD: string
                    // @ts-ignore
                    readonly SIZE_CMD: string
                    // @ts-ignore
                    installTitlePane(): void
                    // @ts-ignore
                    addSubComponents(): void
                    // @ts-ignore
                    createActions(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    createButtons(): void
                    // @ts-ignore
                    setButtonIcons(): void
                    // @ts-ignore
                    assembleSystemMenu(): void
                    // @ts-ignore
                    addSystemMenuItems(systemMenu: javax.swing.JMenu): void
                    // @ts-ignore
                    createSystemMenu(): javax.swing.JMenu
                    // @ts-ignore
                    createSystemMenuBar(): javax.swing.JMenuBar
                    // @ts-ignore
                    showSystemMenu(): void
                    // @ts-ignore
                    paintComponent(g: java.awt.Graphics): void
                    /**
                     * Invoked from paintComponent.
                     * Paints the background of the titlepane.  All text and icons will
                     * then be rendered on top of this background.
                     * @param g the graphics to use to render the background
                     * @since 1.4
                     */
                    // @ts-ignore
                    paintTitleBackground(g: java.awt.Graphics): void
                    // @ts-ignore
                    getTitle(text: string, fm: java.awt.FontMetrics, availTextWidth: number /*int*/): java.lang.String
                    /**
                     * Post a WINDOW_CLOSING-like event to the frame, so that it can
                     * be treated like a regular Frame.
                     */
                    // @ts-ignore
                    postClosingEvent(frame: javax.swing.JInternalFrame): void
                    // @ts-ignore
                    enableActions(): void
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    createLayout(): java.awt.LayoutManager
                }
            }
        }
    }
}

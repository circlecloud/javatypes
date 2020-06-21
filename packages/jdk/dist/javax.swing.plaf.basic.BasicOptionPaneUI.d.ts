declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Provides the basic look and feel for a <code>JOptionPane</code>.
                 * <code>BasicMessagePaneUI</code> provides a means to place an icon,
                 * message and buttons into a <code>Container</code>.
                 * Generally, the layout will look like:
                 * <pre>
                 * ------------------
                 * | i | message    |
                 * | c | message    |
                 * | o | message    |
                 * | n | message    |
                 * ------------------
                 * |     buttons    |
                 * |________________|
                 * </pre>
                 * icon is an instance of <code>Icon</code> that is wrapped inside a
                 * <code>JLabel</code>.  The message is an opaque object and is tested
                 * for the following: if the message is a <code>Component</code> it is
                 * added to the <code>Container</code>, if it is an <code>Icon</code>
                 * it is wrapped inside a <code>JLabel</code> and added to the
                 * <code>Container</code> otherwise it is wrapped inside a <code>JLabel</code>.
                 * <p>
                 * The above layout is used when the option pane's
                 * <code>ComponentOrientation</code> property is horizontal, left-to-right.
                 * The layout will be adjusted appropriately for other orientations.
                 * <p>
                 * The <code>Container</code>, message, icon, and buttons are all
                 * determined from abstract methods.
                 * @author James Gosling
                 * @author Scott Violet
                 * @author Amy Fowler
                 */
                // @ts-ignore
                class BasicOptionPaneUI extends javax.swing.plaf.OptionPaneUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly MinimumWidth: number /*int*/
                    // @ts-ignore
                    public static readonly MinimumHeight: number /*int*/
                    /**
                     * <code>JOptionPane</code> that the receiver is providing the
                     * look and feel for.
                     */
                    // @ts-ignore
                    optionPane: javax.swing.JOptionPane
                    // @ts-ignore
                    minimumSize: java.awt.Dimension
                    /**
                     * JComponent provide for input if optionPane.getWantsInput() returns
                     * true.
                     */
                    // @ts-ignore
                    inputComponent: javax.swing.JComponent
                    /**
                     * Component to receive focus when messaged with selectInitialValue.
                     */
                    // @ts-ignore
                    initialFocusComponent: java.awt.Component
                    /**
                     * This is set to true in validateComponent if a Component is contained
                     * in either the message or the buttons.
                     */
                    // @ts-ignore
                    hasCustomComponents: boolean
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    /**
                     * Creates a new BasicOptionPaneUI instance.
                     */
                    // @ts-ignore
                    public static createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Installs the receiver as the L&amp;F for the passed in
                     * <code>JOptionPane</code>.
                     */
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    /**
                     * Removes the receiver from the L&amp;F controller of the passed in split
                     * pane.
                     */
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    installComponents(): void
                    // @ts-ignore
                    uninstallComponents(): void
                    // @ts-ignore
                    createLayoutManager(): java.awt.LayoutManager
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    /**
                     * Returns the minimum size the option pane should be. Primarily
                     * provided for subclassers wishing to offer a different minimum size.
                     */
                    // @ts-ignore
                    public getMinimumOptionPaneSize(): java.awt.Dimension
                    /**
                     * If <code>c</code> is the <code>JOptionPane</code> the receiver
                     * is contained in, the preferred
                     * size that is returned is the maximum of the preferred size of
                     * the <code>LayoutManager</code> for the <code>JOptionPane</code>, and
                     * <code>getMinimumOptionPaneSize</code>.
                     */
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Messaged from installComponents to create a Container containing the
                     * body of the message. The icon is the created by calling
                     * <code>addIcon</code>.
                     */
                    // @ts-ignore
                    createMessageArea(): java.awt.Container
                    /**
                     * Creates the appropriate object to represent <code>msg</code> and
                     * places it into <code>container</code>. If <code>msg</code> is an
                     * instance of Component, it is added directly, if it is an Icon,
                     * a JLabel is created to represent it, otherwise a JLabel is
                     * created for the string, if <code>d</code> is an Object[], this
                     * method will be recursively invoked for the children.
                     * <code>internallyCreated</code> is true if Objc is an instance
                     * of Component and was created internally by this method (this is
                     * used to correctly set hasCustomComponents only if !internallyCreated).
                     */
                    // @ts-ignore
                    addMessageComponents(container: java.awt.Container, cons: java.awt.GridBagConstraints, msg: java.lang.Object | any, maxll: number /*int*/, internallyCreated: boolean): void
                    /**
                     * Returns the message to display from the JOptionPane the receiver is
                     * providing the look and feel for.
                     */
                    // @ts-ignore
                    getMessage(): any
                    /**
                     * Creates and adds a JLabel representing the icon returned from
                     * <code>getIcon</code> to <code>top</code>. This is messaged from
                     * <code>createMessageArea</code>
                     */
                    // @ts-ignore
                    addIcon(top: java.awt.Container): void
                    /**
                     * Returns the icon from the JOptionPane the receiver is providing
                     * the look and feel for, or the default icon as returned from
                     * <code>getDefaultIcon</code>.
                     */
                    // @ts-ignore
                    getIcon(): javax.swing.Icon
                    /**
                     * Returns the icon to use for the passed in type.
                     */
                    // @ts-ignore
                    getIconForType(messageType: number /*int*/): javax.swing.Icon
                    /**
                     * Returns the maximum number of characters to place on a line.
                     */
                    // @ts-ignore
                    getMaxCharactersPerLineCount(): number /*int*/
                    /**
                     * Recursively creates new JLabel instances to represent <code>d</code>.
                     * Each JLabel instance is added to <code>c</code>.
                     */
                    // @ts-ignore
                    burstStringInto(c: java.awt.Container, d: java.lang.String | string, maxll: number /*int*/): void
                    // @ts-ignore
                    createSeparator(): java.awt.Container
                    /**
                     * Creates and returns a Container containing the buttons. The buttons
                     * are created by calling <code>getButtons</code>.
                     */
                    // @ts-ignore
                    createButtonArea(): java.awt.Container
                    /**
                     * Creates the appropriate object to represent each of the objects in
                     * <code>buttons</code> and adds it to <code>container</code>. This
                     * differs from addMessageComponents in that it will recurse on
                     * <code>buttons</code> and that if button is not a Component
                     * it will create an instance of JButton.
                     */
                    // @ts-ignore
                    addButtonComponents(container: java.awt.Container, buttons: java.lang.Object[] | any[], initialIndex: number /*int*/): void
                    // @ts-ignore
                    createButtonActionListener(buttonIndex: number /*int*/): java.awt.event.ActionListener
                    /**
                     * Returns the buttons to display from the JOptionPane the receiver is
                     * providing the look and feel for. If the JOptionPane has options
                     * set, they will be provided, otherwise if the optionType is
                     * YES_NO_OPTION, yesNoOptions is returned, if the type is
                     * YES_NO_CANCEL_OPTION yesNoCancelOptions is returned, otherwise
                     * defaultButtons are returned.
                     */
                    // @ts-ignore
                    getButtons(): any[]
                    /**
                     * Returns true, basic L&amp;F wants all the buttons to have the same
                     * width.
                     */
                    // @ts-ignore
                    getSizeButtonsToSameWidth(): boolean
                    /**
                     * Returns the initial index into the buttons to select. The index
                     * is calculated from the initial value from the JOptionPane and
                     * options of the JOptionPane or 0.
                     */
                    // @ts-ignore
                    getInitialValueIndex(): number /*int*/
                    /**
                     * Sets the input value in the option pane the receiver is providing
                     * the look and feel for based on the value in the inputComponent.
                     */
                    // @ts-ignore
                    resetInputValue(): void
                    /**
                     * If inputComponent is non-null, the focus is requested on that,
                     * otherwise request focus on the default value
                     */
                    // @ts-ignore
                    public selectInitialValue(op: javax.swing.JOptionPane): void
                    /**
                     * Returns true if in the last call to validateComponent the message
                     * or buttons contained a subclass of Component.
                     */
                    // @ts-ignore
                    public containsCustomComponents(op: javax.swing.JOptionPane): boolean
                }
            }
        }
    }
}

declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * The default Spinner UI delegate.
                 * @author Hans Muller
                 * @since 1.4
                 */
                // @ts-ignore
                class BasicSpinnerUI extends javax.swing.plaf.SpinnerUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * The spinner that we're a UI delegate for.  Initialized by
                     * the <code>installUI</code> method, and reset to null
                     * by <code>uninstallUI</code>.
                     * @see #installUI
                     * @see #uninstallUI
                     */
                    // @ts-ignore
                    spinner: javax.swing.JSpinner
                    /**
                     * Returns a new instance of BasicSpinnerUI.  SpinnerListUI
                     * delegates are allocated one per JSpinner.
                     * @param c the JSpinner (not used)
                     * @see ComponentUI#createUI
                     * @return a new BasicSpinnerUI object
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Calls <code>installDefaults</code>, <code>installListeners</code>,
                     * and then adds the components returned by <code>createNextButton</code>,
                     * <code>createPreviousButton</code>, and <code>createEditor</code>.
                     * @param c the JSpinner
                     * @see #installDefaults
                     * @see #installListeners
                     * @see #createNextButton
                     * @see #createPreviousButton
                     * @see #createEditor
                     */
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    /**
                     * Calls <code>uninstallDefaults</code>, <code>uninstallListeners</code>,
                     * and then removes all of the spinners children.
                     * @param c the JSpinner (not used)
                     */
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Initializes <code>PropertyChangeListener</code> with
                     * a shared object that delegates interesting PropertyChangeEvents
                     * to protected methods.
                     * <p>
                     * This method is called by <code>installUI</code>.
                     * @see #replaceEditor
                     * @see #uninstallListeners
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Removes the <code>PropertyChangeListener</code> added
                     * by installListeners.
                     * <p>
                     * This method is called by <code>uninstallUI</code>.
                     * @see #installListeners
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    /**
                     * Initialize the <code>JSpinner</code> <code>border</code>,
                     * <code>foreground</code>, and <code>background</code>, properties
                     * based on the corresponding "Spinner.*" properties from defaults table.
                     * The <code>JSpinners</code> layout is set to the value returned by
                     * <code>createLayout</code>.  This method is called by <code>installUI</code>.
                     * @see #uninstallDefaults
                     * @see #installUI
                     * @see #createLayout
                     * @see LookAndFeel#installBorder
                     * @see LookAndFeel#installColors
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Sets the <code>JSpinner's</code> layout manager to null.  This
                     * method is called by <code>uninstallUI</code>.
                     * @see #installDefaults
                     * @see #uninstallUI
                     */
                    // @ts-ignore
                    uninstallDefaults(): void
                    /**
                     * Installs the necessary listeners on the next button, <code>c</code>,
                     * to update the <code>JSpinner</code> in response to a user gesture.
                     * @param c Component to install the listeners on
                     * @throws NullPointerException if <code>c</code> is null.
                     * @see #createNextButton
                     * @since 1.5
                     */
                    // @ts-ignore
                    installNextButtonListeners(c: java.awt.Component): void
                    /**
                     * Installs the necessary listeners on the previous button, <code>c</code>,
                     * to update the <code>JSpinner</code> in response to a user gesture.
                     * @param c Component to install the listeners on.
                     * @throws NullPointerException if <code>c</code> is null.
                     * @see #createPreviousButton
                     * @since 1.5
                     */
                    // @ts-ignore
                    installPreviousButtonListeners(c: java.awt.Component): void
                    /**
                     * Creates a <code>LayoutManager</code> that manages the <code>editor</code>,
                     * <code>nextButton</code>, and <code>previousButton</code>
                     * children of the JSpinner.  These three children must be
                     * added with a constraint that identifies their role:
                     * "Editor", "Next", and "Previous". The default layout manager
                     * can handle the absence of any of these children.
                     * @return a LayoutManager for the editor, next button, and previous button.
                     * @see #createNextButton
                     * @see #createPreviousButton
                     * @see #createEditor
                     */
                    // @ts-ignore
                    createLayout(): java.awt.LayoutManager
                    /**
                     * Creates a <code>PropertyChangeListener</code> that can be
                     * added to the JSpinner itself.  Typically, this listener
                     * will call replaceEditor when the "editor" property changes,
                     * since it's the <code>SpinnerUI's</code> responsibility to
                     * add the editor to the JSpinner (and remove the old one).
                     * This method is called by <code>installListeners</code>.
                     * @return A PropertyChangeListener for the JSpinner itself
                     * @see #installListeners
                     */
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    /**
                     * Creates a decrement button, i.e. component that replaces the spinner
                     * value with the object returned by <code>spinner.getPreviousValue</code>.
                     * By default the <code>previousButton</code> is a {@code JButton}. If the
                     * decrement button is not needed this method should return {@code null}.
                     * @return a component that will replace the spinner's value with the
                     *      previous value in the sequence, or {#code null}
                     * @see #installUI
                     * @see #createNextButton
                     * @see #installPreviousButtonListeners
                     */
                    // @ts-ignore
                    createPreviousButton(): java.awt.Component
                    /**
                     * Creates an increment button, i.e. component that replaces the spinner
                     * value with the object returned by <code>spinner.getNextValue</code>.
                     * By default the <code>nextButton</code> is a {@code JButton}. If the
                     * increment button is not needed this method should return {@code null}.
                     * @return a component that will replace the spinner's value with the
                     *      next value in the sequence, or {#code null}
                     * @see #installUI
                     * @see #createPreviousButton
                     * @see #installNextButtonListeners
                     */
                    // @ts-ignore
                    createNextButton(): java.awt.Component
                    /**
                     * This method is called by installUI to get the editor component
                     * of the <code>JSpinner</code>.  By default it just returns
                     * <code>JSpinner.getEditor()</code>.  Subclasses can override
                     * <code>createEditor</code> to return a component that contains
                     * the spinner's editor or null, if they're going to handle adding
                     * the editor to the <code>JSpinner</code> in an
                     * <code>installUI</code> override.
                     * <p>
                     * Typically this method would be overridden to wrap the editor
                     * with a container with a custom border, since one can't assume
                     * that the editors border can be set directly.
                     * <p>
                     * The <code>replaceEditor</code> method is called when the spinners
                     * editor is changed with <code>JSpinner.setEditor</code>.  If you've
                     * overriden this method, then you'll probably want to override
                     * <code>replaceEditor</code> as well.
                     * @return the JSpinners editor JComponent, spinner.getEditor() by default
                     * @see #installUI
                     * @see #replaceEditor
                     * @see JSpinner#getEditor
                     */
                    // @ts-ignore
                    createEditor(): javax.swing.JComponent
                    /**
                     * Called by the <code>PropertyChangeListener</code> when the
                     * <code>JSpinner</code> editor property changes.  It's the responsibility
                     * of this method to remove the old editor and add the new one.  By
                     * default this operation is just:
                     * <pre>
                     * spinner.remove(oldEditor);
                     * spinner.add(newEditor, "Editor");
                     * </pre>
                     * The implementation of <code>replaceEditor</code> should be coordinated
                     * with the <code>createEditor</code> method.
                     * @see #createEditor
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    replaceEditor(oldEditor: javax.swing.JComponent, newEditor: javax.swing.JComponent): void
                    /**
                     * Installs the keyboard Actions onto the JSpinner.
                     * @since 1.5
                     */
                    // @ts-ignore
                    installKeyboardActions(): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                }
            }
        }
    }
}

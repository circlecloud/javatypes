declare namespace javax {
    namespace swing {
        namespace JSpinner {
            /**
             * A simple base class for more specialized editors
             * that displays a read-only view of the model's current
             * value with a <code>JFormattedTextField</code>.  Subclasses
             * can configure the <code>JFormattedTextField</code> to create
             * an editor that's appropriate for the type of model they
             * support and they may want to override
             * the <code>stateChanged</code> and <code>propertyChanged</code>
             * methods, which keep the model and the text field in sync.
             * <p>
             * This class defines a <code>dismiss</code> method that removes the
             * editors <code>ChangeListener</code> from the <code>JSpinner</code>
             * that it's part of.   The <code>setEditor</code> method knows about
             * <code>DefaultEditor.dismiss</code>, so if the developer
             * replaces an editor that's derived from <code>JSpinner.DefaultEditor</code>
             * its <code>ChangeListener</code> connection back to the
             * <code>JSpinner</code> will be removed.  However after that,
             * it's up to the developer to manage their editor listeners.
             * Similarly, if a subclass overrides <code>createEditor</code>,
             * it's up to the subclasser to deal with their editor
             * subsequently being replaced (with <code>setEditor</code>).
             * We expect that in most cases, and in editor installed
             * with <code>setEditor</code> or created by a <code>createEditor</code>
             * override, will not be replaced anyway.
             * <p>
             * This class is the <code>LayoutManager</code> for it's single
             * <code>JFormattedTextField</code> child.   By default the
             * child is just centered with the parents insets.
             * @since 1.4
             */
            // @ts-ignore
            class DefaultEditor extends javax.swing.JPanel implements javax.swing.event.ChangeListener, java.beans.PropertyChangeListener, java.awt.LayoutManager {
                /**
                 * Constructs an editor component for the specified <code>JSpinner</code>.
                 * This <code>DefaultEditor</code> is it's own layout manager and
                 * it is added to the spinner's <code>ChangeListener</code> list.
                 * The constructor creates a single <code>JFormattedTextField</code> child,
                 * initializes it's value to be the spinner model's current value
                 * and adds it to <code>this</code> <code>DefaultEditor</code>.
                 * @param spinner the spinner whose model <code>this</code> editor will monitor
                 * @see #getTextField
                 * @see JSpinner#addChangeListener
                 */
                // @ts-ignore
                constructor(spinner: javax.swing.JSpinner)
                /**
                 * Disconnect <code>this</code> editor from the specified
                 * <code>JSpinner</code>.  By default, this method removes
                 * itself from the spinners <code>ChangeListener</code> list.
                 * @param spinner the <code>JSpinner</code> to disconnect this
                 *     editor from; the same spinner as was passed to the constructor.
                 */
                // @ts-ignore
                dismiss(spinner: javax.swing.JSpinner): void
                /**
                 * Returns the <code>JSpinner</code> ancestor of this editor or
                 * <code>null</code> if none of the ancestors are a
                 * <code>JSpinner</code>.
                 * Typically the editor's parent is a <code>JSpinner</code> however
                 * subclasses of <code>JSpinner</code> may override the
                 * the <code>createEditor</code> method and insert one or more containers
                 * between the <code>JSpinner</code> and it's editor.
                 * @return <code>JSpinner</code> ancestor; <code>null</code>
                 *          if none of the ancestors are a <code>JSpinner</code>
                 * @see JSpinner#createEditor
                 */
                // @ts-ignore
                getSpinner(): javax.swing.JSpinner
                /**
                 * Returns the <code>JFormattedTextField</code> child of this
                 * editor.  By default the text field is the first and only
                 * child of editor.
                 * @return the <code>JFormattedTextField</code> that gives the user
                 *      access to the <code>SpinnerDateModel's</code> value.
                 * @see #getSpinner
                 * @see #getModel
                 */
                // @ts-ignore
                getTextField(): javax.swing.JFormattedTextField
                /**
                 * This method is called when the spinner's model's state changes.
                 * It sets the <code>value</code> of the text field to the current
                 * value of the spinners model.
                 * @param e the <code>ChangeEvent</code> whose source is the
                 *  <code>JSpinner</code> whose model has changed.
                 * @see #getTextField
                 * @see JSpinner#getValue
                 */
                // @ts-ignore
                stateChanged(e: javax.swing.event.ChangeEvent): void
                /**
                 * Called by the <code>JFormattedTextField</code>
                 * <code>PropertyChangeListener</code>.  When the <code>"value"</code>
                 * property changes, which implies that the user has typed a new
                 * number, we set the value of the spinners model.
                 * <p>
                 * This class ignores <code>PropertyChangeEvents</code> whose
                 * source is not the <code>JFormattedTextField</code>, so subclasses
                 * may safely make <code>this</code> <code>DefaultEditor</code> a
                 * <code>PropertyChangeListener</code> on other objects.
                 * @param e the <code>PropertyChangeEvent</code> whose source is
                 *     the <code>JFormattedTextField</code> created by this class.
                 * @see #getTextField
                 */
                // @ts-ignore
                propertyChange(e: java.beans.PropertyChangeEvent): void
                /**
                 * This <code>LayoutManager</code> method does nothing.  We're
                 * only managing a single child and there's no support
                 * for layout constraints.
                 * @param name ignored
                 * @param child ignored
                 */
                // @ts-ignore
                addLayoutComponent(name: string, child: java.awt.Component): void
                /**
                 * This <code>LayoutManager</code> method does nothing.  There
                 * isn't any per-child state.
                 * @param child ignored
                 */
                // @ts-ignore
                removeLayoutComponent(child: java.awt.Component): void
                /**
                 * Returns the preferred size of first (and only) child plus the
                 * size of the parents insets.
                 * @param parent the Container that's managing the layout
                 * @return the preferred dimensions to lay out the subcomponents
                 *           of the specified container.
                 */
                // @ts-ignore
                preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension
                /**
                 * Returns the minimum size of first (and only) child plus the
                 * size of the parents insets.
                 * @param parent the Container that's managing the layout
                 * @return the minimum dimensions needed to lay out the subcomponents
                 *           of the specified container.
                 */
                // @ts-ignore
                minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension
                /**
                 * Resize the one (and only) child to completely fill the area
                 * within the parents insets.
                 */
                // @ts-ignore
                layoutContainer(parent: java.awt.Container): void
                /**
                 * Pushes the currently edited value to the <code>SpinnerModel</code>.
                 * <p>
                 * The default implementation invokes <code>commitEdit</code> on the
                 * <code>JFormattedTextField</code>.
                 * @throws ParseException if the edited value is not legal
                 */
                // @ts-ignore
                commitEdit(): void
                /**
                 * Returns the baseline.
                 * @throws IllegalArgumentException {#inheritDoc}
                 * @see javax.swing.JComponent#getBaseline(int,int)
                 * @see javax.swing.JComponent#getBaselineResizeBehavior()
                 * @since 1.6
                 */
                // @ts-ignore
                getBaseline(width: number /*int*/, height: number /*int*/): int
                /**
                 * Returns an enum indicating how the baseline of the component
                 * changes as the size changes.
                 * @throws NullPointerException {#inheritDoc}
                 * @see javax.swing.JComponent#getBaseline(int, int)
                 * @since 1.6
                 */
                // @ts-ignore
                getBaselineResizeBehavior(): java.awt.Component.BaselineResizeBehavior
            }
        }
    }
}

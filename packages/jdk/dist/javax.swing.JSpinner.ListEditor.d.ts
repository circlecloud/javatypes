declare namespace javax {
    namespace swing {
        namespace JSpinner {
            /**
             * An editor for a <code>JSpinner</code> whose model is a
             * <code>SpinnerListModel</code>.
             * @since 1.4
             */
            // @ts-ignore
            class ListEditor extends javax.swing.JSpinner.DefaultEditor {
                /**
                 * Construct a <code>JSpinner</code> editor that supports displaying
                 * and editing the value of a <code>SpinnerListModel</code>
                 * with a <code>JFormattedTextField</code>.  <code>This</code>
                 * <code>ListEditor</code> becomes both a <code>ChangeListener</code>
                 * on the spinner and a <code>PropertyChangeListener</code>
                 * on the new <code>JFormattedTextField</code>.
                 * @param spinner the spinner whose model <code>this</code> editor will monitor
                 * @exception IllegalArgumentException if the spinners model is not
                 *      an instance of <code>SpinnerListModel</code>
                 * @see #getModel
                 * @see SpinnerListModel
                 */
                // @ts-ignore
                constructor(spinner: javax.swing.JSpinner)
                /**
                 * Return our spinner ancestor's <code>SpinnerNumberModel</code>.
                 * @return <code>getSpinner().getModel()</code>
                 * @see #getSpinner
                 * @see #getTextField
                 */
                // @ts-ignore
                getModel(): javax.swing.SpinnerListModel
            }
        }
    }
}

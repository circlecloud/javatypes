declare namespace javax {
    namespace swing {
        namespace JSpinner {
            /**
             * An editor for a <code>JSpinner</code> whose model is a
             * <code>SpinnerDateModel</code>.  The value of the editor is
             * displayed with a <code>JFormattedTextField</code> whose format
             * is defined by a <code>DateFormatter</code> instance whose
             * <code>minimum</code> and <code>maximum</code> properties
             * are mapped to the <code>SpinnerDateModel</code>.
             * @since 1.4
             */
            // @ts-ignore
            class DateEditor extends javax.swing.JSpinner.DefaultEditor {
                /**
                 * Construct a <code>JSpinner</code> editor that supports displaying
                 * and editing the value of a <code>SpinnerDateModel</code>
                 * with a <code>JFormattedTextField</code>.  <code>This</code>
                 * <code>DateEditor</code> becomes both a <code>ChangeListener</code>
                 * on the spinners model and a <code>PropertyChangeListener</code>
                 * on the new <code>JFormattedTextField</code>.
                 * @param spinner the spinner whose model <code>this</code> editor will monitor
                 * @exception IllegalArgumentException if the spinners model is not
                 *      an instance of <code>SpinnerDateModel</code>
                 * @see #getModel
                 * @see #getFormat
                 * @see SpinnerDateModel
                 */
                // @ts-ignore
                constructor(spinner: javax.swing.JSpinner)
                /**
                 * Construct a <code>JSpinner</code> editor that supports displaying
                 * and editing the value of a <code>SpinnerDateModel</code>
                 * with a <code>JFormattedTextField</code>.  <code>This</code>
                 * <code>DateEditor</code> becomes both a <code>ChangeListener</code>
                 * on the spinner and a <code>PropertyChangeListener</code>
                 * on the new <code>JFormattedTextField</code>.
                 * @param spinner the spinner whose model <code>this</code> editor will monitor
                 * @param dateFormatPattern the initial pattern for the
                 *      <code>SimpleDateFormat</code> object that's used to display
                 *      and parse the value of the text field.
                 * @exception IllegalArgumentException if the spinners model is not
                 *      an instance of <code>SpinnerDateModel</code>
                 * @see #getModel
                 * @see #getFormat
                 * @see SpinnerDateModel
                 * @see java.text.SimpleDateFormat
                 */
                // @ts-ignore
                constructor(spinner: javax.swing.JSpinner, dateFormatPattern: string)
                /**
                 * Returns the <code>java.text.SimpleDateFormat</code> object the
                 * <code>JFormattedTextField</code> uses to parse and format
                 * numbers.
                 * @return the value of <code>getTextField().getFormatter().getFormat()</code>.
                 * @see #getTextField
                 * @see java.text.SimpleDateFormat
                 */
                // @ts-ignore
                getFormat(): java.text.SimpleDateFormat
                /**
                 * Return our spinner ancestor's <code>SpinnerDateModel</code>.
                 * @return <code>getSpinner().getModel()</code>
                 * @see #getSpinner
                 * @see #getTextField
                 */
                // @ts-ignore
                getModel(): javax.swing.SpinnerDateModel
            }
        }
    }
}

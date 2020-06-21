declare namespace javax {
    namespace swing {
        namespace JSpinner {
            /**
             * An editor for a <code>JSpinner</code> whose model is a
             * <code>SpinnerNumberModel</code>.  The value of the editor is
             * displayed with a <code>JFormattedTextField</code> whose format
             * is defined by a <code>NumberFormatter</code> instance whose
             * <code>minimum</code> and <code>maximum</code> properties
             * are mapped to the <code>SpinnerNumberModel</code>.
             * @since 1.4
             */
            // @ts-ignore
            class NumberEditor extends javax.swing.JSpinner.DefaultEditor {
                /**
                 * Construct a <code>JSpinner</code> editor that supports displaying
                 * and editing the value of a <code>SpinnerNumberModel</code>
                 * with a <code>JFormattedTextField</code>.  <code>This</code>
                 * <code>NumberEditor</code> becomes both a <code>ChangeListener</code>
                 * on the spinner and a <code>PropertyChangeListener</code>
                 * on the new <code>JFormattedTextField</code>.
                 * @param spinner the spinner whose model <code>this</code> editor will monitor
                 * @exception IllegalArgumentException if the spinners model is not
                 *      an instance of <code>SpinnerNumberModel</code>
                 * @see #getModel
                 * @see #getFormat
                 * @see SpinnerNumberModel
                 */
                // @ts-ignore
                constructor(spinner: javax.swing.JSpinner)
                /**
                 * Construct a <code>JSpinner</code> editor that supports displaying
                 * and editing the value of a <code>SpinnerNumberModel</code>
                 * with a <code>JFormattedTextField</code>.  <code>This</code>
                 * <code>NumberEditor</code> becomes both a <code>ChangeListener</code>
                 * on the spinner and a <code>PropertyChangeListener</code>
                 * on the new <code>JFormattedTextField</code>.
                 * @param spinner the spinner whose model <code>this</code> editor will monitor
                 * @param decimalFormatPattern the initial pattern for the
                 *      <code>DecimalFormat</code> object that's used to display
                 *      and parse the value of the text field.
                 * @exception IllegalArgumentException if the spinners model is not
                 *      an instance of <code>SpinnerNumberModel</code> or if
                 *      <code>decimalFormatPattern</code> is not a legal
                 *      argument to <code>DecimalFormat</code>
                 * @see #getTextField
                 * @see SpinnerNumberModel
                 * @see java.text.DecimalFormat
                 */
                // @ts-ignore
                constructor(spinner: javax.swing.JSpinner, decimalFormatPattern: java.lang.String | string)
                /**
                 * Returns the <code>java.text.DecimalFormat</code> object the
                 * <code>JFormattedTextField</code> uses to parse and format
                 * numbers.
                 * @return the value of <code>getTextField().getFormatter().getFormat()</code>.
                 * @see #getTextField
                 * @see java.text.DecimalFormat
                 */
                // @ts-ignore
                public getFormat(): java.text.DecimalFormat
                /**
                 * Return our spinner ancestor's <code>SpinnerNumberModel</code>.
                 * @return <code>getSpinner().getModel()</code>
                 * @see #getSpinner
                 * @see #getTextField
                 */
                // @ts-ignore
                public getModel(): javax.swing.SpinnerNumberModel
            }
        }
    }
}

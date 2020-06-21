declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * DateFormatter is an <code>InternationalFormatter</code> that does its
             * formatting by way of an instance of <code>java.text.DateFormat</code>.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see java.text.DateFormat
             * @since 1.4
             */
            // @ts-ignore
            class DateFormatter extends javax.swing.text.InternationalFormatter {
                /**
                 * This is shorthand for
                 * <code>new DateFormatter(DateFormat.getDateInstance())</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a DateFormatter configured with the specified
                 * <code>Format</code> instance.
                 * @param format Format used to dictate legal values
                 */
                // @ts-ignore
                constructor(format: java.text.DateFormat)
                /**
                 * Sets the format that dictates the legal values that can be edited
                 * and displayed.
                 * <p>
                 * If you have used the nullary constructor the value of this property
                 * will be determined for the current locale by way of the
                 * <code>Dateformat.getDateInstance()</code> method.
                 * @param format DateFormat instance used for converting from/to Strings
                 */
                // @ts-ignore
                public setFormat(format: java.text.DateFormat): void
            }
        }
    }
}

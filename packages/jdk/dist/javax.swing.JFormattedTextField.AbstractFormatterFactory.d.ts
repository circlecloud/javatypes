declare namespace javax {
    namespace swing {
        namespace JFormattedTextField {
            /**
             * Instances of <code>AbstractFormatterFactory</code> are used by
             * <code>JFormattedTextField</code> to obtain instances of
             * <code>AbstractFormatter</code> which in turn are used to format values.
             * <code>AbstractFormatterFactory</code> can return different
             * <code>AbstractFormatter</code>s based on the state of the
             * <code>JFormattedTextField</code>, perhaps returning different
             * <code>AbstractFormatter</code>s when the
             * <code>JFormattedTextField</code> has focus vs when it
             * doesn't have focus.
             * @since 1.4
             */
            // @ts-ignore
            class AbstractFormatterFactory extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Returns an <code>AbstractFormatter</code> that can handle formatting
                 * of the passed in <code>JFormattedTextField</code>.
                 * @param tf JFormattedTextField requesting AbstractFormatter
                 * @return AbstractFormatter to handle formatting duties, a null
                 *          return value implies the JFormattedTextField should behave
                 *          like a normal JTextField
                 */
                // @ts-ignore
                abstract getFormatter(tf: javax.swing.JFormattedTextField): javax.swing.JFormattedTextField.AbstractFormatter
            }
        }
    }
}

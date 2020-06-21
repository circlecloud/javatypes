declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JOptionPane.
             * @author Scott Violet
             */
            // @ts-ignore
            abstract class OptionPaneUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * Requests the component representing the default value to have
                 * focus.
                 */
                // @ts-ignore
                public abstract selectInitialValue(op: javax.swing.JOptionPane): void
                /**
                 * Returns true if the user has supplied instances of Component for
                 * either the options or message.
                 */
                // @ts-ignore
                public abstract containsCustomComponents(op: javax.swing.JOptionPane): boolean
            }
        }
    }
}

declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JComboBox.
             * @author Arnaud Weber
             * @author Tom Santos
             */
            // @ts-ignore
            class ComboBoxUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * Set the visibility of the popup
                 */
                // @ts-ignore
                abstract setPopupVisible(c: javax.swing.JComboBox, v: boolean): void
                /**
                 * Determine the visibility of the popup
                 */
                // @ts-ignore
                abstract isPopupVisible(c: javax.swing.JComboBox): boolean
                /**
                 * Determine whether or not the combo box itself is traversable
                 */
                // @ts-ignore
                abstract isFocusTraversable(c: javax.swing.JComboBox): boolean
            }
        }
    }
}

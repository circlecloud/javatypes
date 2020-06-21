declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JComboBox.
             * @author Arnaud Weber
             * @author Tom Santos
             */
            // @ts-ignore
            abstract class ComboBoxUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * Set the visibility of the popup
                 */
                // @ts-ignore
                public abstract setPopupVisible(c: javax.swing.JComboBox<any>, v: boolean): void
                /**
                 * Determine the visibility of the popup
                 */
                // @ts-ignore
                public abstract isPopupVisible(c: javax.swing.JComboBox<any>): boolean
                /**
                 * Determine whether or not the combo box itself is traversable
                 */
                // @ts-ignore
                public abstract isFocusTraversable(c: javax.swing.JComboBox<any>): boolean
            }
        }
    }
}

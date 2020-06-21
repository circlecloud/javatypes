declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JPopupMenu.
             * @author Georges Saab
             * @author David Karlton
             */
            // @ts-ignore
            abstract class PopupMenuUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * @since 1.3
                 */
                // @ts-ignore
                public isPopupTrigger(e: java.awt.event.MouseEvent): boolean
                /**
                 * Returns the <code>Popup</code> that will be responsible for
                 * displaying the <code>JPopupMenu</code>.
                 * @param popup JPopupMenu requesting Popup
                 * @param x     Screen x location Popup is to be shown at
                 * @param y     Screen y location Popup is to be shown at.
                 * @return Popup that will show the JPopupMenu
                 * @since 1.4
                 */
                // @ts-ignore
                public getPopup(popup: javax.swing.JPopupMenu, x: number /*int*/, y: number /*int*/): javax.swing.Popup
            }
        }
    }
}

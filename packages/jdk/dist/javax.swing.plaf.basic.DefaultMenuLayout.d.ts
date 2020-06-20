declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * The default layout manager for Popup menus and menubars.  This
                 * class is an extension of BoxLayout which adds the UIResource tag
                 * so that pluggable L&amp;Fs can distinguish it from user-installed
                 * layout managers on menus.
                 * @author Georges Saab
                 */
                // @ts-ignore
                class DefaultMenuLayout extends javax.swing.BoxLayout implements javax.swing.plaf.UIResource {
                    // @ts-ignore
                    constructor(target: java.awt.Container, axis: number /*int*/)
                    // @ts-ignore
                    preferredLayoutSize(target: java.awt.Container): java.awt.Dimension
                }
            }
        }
    }
}

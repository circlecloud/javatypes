declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicMenuUI {
                    /**
                     * As of Java 2 platform 1.4, this previously undocumented class
                     * is now obsolete. KeyBindings are now managed by the popup menu.
                     */
                    // @ts-ignore
                    class ChangeHandler extends java.lang.Object implements javax.swing.event.ChangeListener {
                        // @ts-ignore
                        constructor(m: javax.swing.JMenu, ui: javax.swing.plaf.basic.BasicMenuUI)
                        // @ts-ignore
                        menu: javax.swing.JMenu
                        // @ts-ignore
                        ui: javax.swing.plaf.basic.BasicMenuUI
                        // @ts-ignore
                        isSelected: boolean
                        // @ts-ignore
                        wasFocused: java.awt.Component
                        // @ts-ignore
                        stateChanged(e: javax.swing.event.ChangeEvent): void
                    }
                }
            }
        }
    }
}

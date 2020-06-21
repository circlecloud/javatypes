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
                        public menu: javax.swing.JMenu
                        // @ts-ignore
                        public ui: javax.swing.plaf.basic.BasicMenuUI
                        // @ts-ignore
                        public isSelected: boolean
                        // @ts-ignore
                        public wasFocused: java.awt.Component
                        // @ts-ignore
                        public stateChanged(e: javax.swing.event.ChangeEvent): void
                    }
                }
            }
        }
    }
}

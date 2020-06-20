declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicSliderUI {
                    /**
                     * As of Java 2 platform v1.3 this undocumented class is no longer used.
                     * The recommended approach to creating bindings is to use a
                     * combination of an <code>ActionMap</code>, to contain the action,
                     * and an <code>InputMap</code> to contain the mapping from KeyStroke
                     * to action description. The InputMap is is usually described in the
                     * LookAndFeel tables.
                     * <p>
                     * Please refer to the key bindings specification for further details.
                     * <p>
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of <code>Foo</code>.
                     */
                    // @ts-ignore
                    class ActionScroller extends javax.swing.AbstractAction {
                        // @ts-ignore
                        constructor(slider: javax.swing.JSlider, dir: number /*int*/, block: boolean)
                        // @ts-ignore
                        actionPerformed(e: java.awt.event.ActionEvent): void
                        // @ts-ignore
                        isEnabled(): boolean
                    }
                }
            }
        }
    }
}

declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicListUI {
                    /**
                     * The PropertyChangeListener that's added to the JList at
                     * installUI time.  When the value of a JList property that
                     * affects layout changes, we set a bit in updateLayoutStateNeeded.
                     * If the JLists model changes we additionally remove our listeners
                     * from the old model.  Likewise for the JList selectionModel.
                     * <p>
                     * <strong>Warning:</strong>
                     * Serialized objects of this class will not be compatible with
                     * future Swing releases. The current serialization support is
                     * appropriate for short term storage or RMI between applications running
                     * the same version of Swing.  As of 1.4, support for long term storage
                     * of all JavaBeans&trade;
                     * has been added to the <code>java.beans</code> package.
                     * Please see {@link java.beans.XMLEncoder}.
                     * @see #maybeUpdateLayoutState
                     * @see #createPropertyChangeListener
                     * @see #installUI
                     */
                    // @ts-ignore
                    class PropertyChangeHandler extends java.lang.Object implements java.beans.PropertyChangeListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        propertyChange(e: java.beans.PropertyChangeEvent): void
                    }
                }
            }
        }
    }
}

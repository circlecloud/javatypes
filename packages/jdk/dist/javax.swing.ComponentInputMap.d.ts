declare namespace javax {
    namespace swing {
        /**
         * A <code>ComponentInputMap</code> is an <code>InputMap</code>
         * associated with a particular <code>JComponent</code>.
         * The component is automatically notified whenever
         * the <code>ComponentInputMap</code> changes.
         * <code>ComponentInputMap</code>s are used for
         * <code>WHEN_IN_FOCUSED_WINDOW</code> bindings.
         * @author Scott Violet
         * @since 1.3
         */
        // @ts-ignore
        class ComponentInputMap extends javax.swing.InputMap {
            /**
             * Creates a <code>ComponentInputMap</code> associated with the
             * specified component.
             * @param component  a non-null <code>JComponent</code>
             * @throws IllegalArgumentException  if <code>component</code> is null
             */
            // @ts-ignore
            constructor(component: javax.swing.JComponent)
            /**
             * Sets the parent, which must be a <code>ComponentInputMap</code>
             * associated with the same component as this
             * <code>ComponentInputMap</code>.
             * @param map  a <code>ComponentInputMap</code>
             * @throws IllegalArgumentException  if <code>map</code>
             *          is not a <code>ComponentInputMap</code>
             *          or is not associated with the same component
             */
            // @ts-ignore
            setParent(map: javax.swing.InputMap): void
            /**
             * Returns the component the <code>InputMap</code> was created for.
             */
            // @ts-ignore
            getComponent(): javax.swing.JComponent
            /**
             * Adds a binding for <code>keyStroke</code> to <code>actionMapKey</code>.
             * If <code>actionMapKey</code> is null, this removes the current binding
             * for <code>keyStroke</code>.
             */
            // @ts-ignore
            put(keyStroke: javax.swing.KeyStroke, actionMapKey: any): void
            /**
             * Removes the binding for <code>key</code> from this object.
             */
            // @ts-ignore
            remove(key: javax.swing.KeyStroke): void
            /**
             * Removes all the mappings from this object.
             */
            // @ts-ignore
            clear(): void
        }
    }
}

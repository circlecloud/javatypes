declare namespace javax {
    namespace swing {
        /**
         * <code>InputMap</code> provides a binding between an input event
         * (currently only <code>KeyStroke</code>s are used)
         * and an <code>Object</code>. <code>InputMap</code>s
         * are usually used with an <code>ActionMap</code>,
         * to determine an <code>Action</code> to perform
         * when a key is pressed.
         * An <code>InputMap</code> can have a parent
         * that is searched for bindings not defined in the <code>InputMap</code>.
         * <p>As with <code>ActionMap</code> if you create a cycle, eg:
         * <pre>
         * InputMap am = new InputMap();
         * InputMap bm = new InputMap():
         * am.setParent(bm);
         * bm.setParent(am);
         * </pre>
         * some of the methods will cause a StackOverflowError to be thrown.
         * @author Scott Violet
         * @since 1.3
         */
        // @ts-ignore
        class InputMap extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates an <code>InputMap</code> with no parent and no mappings.
             */
            // @ts-ignore
            constructor()
            /**
             * Sets this <code>InputMap</code>'s parent.
             * @param map  the <code>InputMap</code> that is the parent of this one
             */
            // @ts-ignore
            public setParent(map: javax.swing.InputMap): void
            /**
             * Gets this <code>InputMap</code>'s parent.
             * @return map  the <code>InputMap</code> that is the parent of this one,
             *               or null if this <code>InputMap</code> has no parent
             */
            // @ts-ignore
            public getParent(): javax.swing.InputMap
            /**
             * Adds a binding for <code>keyStroke</code> to <code>actionMapKey</code>.
             * If <code>actionMapKey</code> is null, this removes the current binding
             * for <code>keyStroke</code>.
             */
            // @ts-ignore
            public put(keyStroke: javax.swing.KeyStroke, actionMapKey: java.lang.Object | any): void
            /**
             * Returns the binding for <code>keyStroke</code>, messaging the
             * parent <code>InputMap</code> if the binding is not locally defined.
             */
            // @ts-ignore
            public get(keyStroke: javax.swing.KeyStroke): any
            /**
             * Removes the binding for <code>key</code> from this
             * <code>InputMap</code>.
             */
            // @ts-ignore
            public remove(key: javax.swing.KeyStroke): void
            /**
             * Removes all the mappings from this <code>InputMap</code>.
             */
            // @ts-ignore
            public clear(): void
            /**
             * Returns the <code>KeyStroke</code>s that are bound in this <code>InputMap</code>.
             */
            // @ts-ignore
            public keys(): javax.swing.KeyStroke[]
            /**
             * Returns the number of <code>KeyStroke</code> bindings.
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Returns an array of the <code>KeyStroke</code>s defined in this
             * <code>InputMap</code> and its parent. This differs from <code>keys()</code> in that
             * this method includes the keys defined in the parent.
             */
            // @ts-ignore
            public allKeys(): javax.swing.KeyStroke[]
        }
    }
}

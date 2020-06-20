declare namespace javax {
    namespace swing {
        /**
         * <code>ActionMap</code> provides mappings from
         * <code>Object</code>s
         * (called <em>keys</em> or <em><code>Action</code> names</em>)
         * to <code>Action</code>s.
         * An <code>ActionMap</code> is usually used with an <code>InputMap</code>
         * to locate a particular action
         * when a key is pressed. As with <code>InputMap</code>,
         * an <code>ActionMap</code> can have a parent
         * that is searched for keys not defined in the <code>ActionMap</code>.
         * <p>As with <code>InputMap</code> if you create a cycle, eg:
         * <pre>
         * ActionMap am = new ActionMap();
         * ActionMap bm = new ActionMap():
         * am.setParent(bm);
         * bm.setParent(am);
         * </pre>
         * some of the methods will cause a StackOverflowError to be thrown.
         * @see InputMap
         * @author Scott Violet
         * @since 1.3
         */
        // @ts-ignore
        class ActionMap extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates an <code>ActionMap</code> with no parent and no mappings.
             */
            // @ts-ignore
            constructor()
            /**
             * Sets this <code>ActionMap</code>'s parent.
             * @param map  the <code>ActionMap</code> that is the parent of this one
             */
            // @ts-ignore
            setParent(map: javax.swing.ActionMap): void
            /**
             * Returns this <code>ActionMap</code>'s parent.
             * @return the <code>ActionMap</code> that is the parent of this one,
             *          or null if this <code>ActionMap</code> has no parent
             */
            // @ts-ignore
            getParent(): javax.swing.ActionMap
            /**
             * Adds a binding for <code>key</code> to <code>action</code>.
             * If <code>action</code> is null, this removes the current binding
             * for <code>key</code>.
             * <p>In most instances, <code>key</code> will be
             * <code>action.getValue(NAME)</code>.
             */
            // @ts-ignore
            put(key: any, action: javax.swing.Action): void
            /**
             * Returns the binding for <code>key</code>, messaging the
             * parent <code>ActionMap</code> if the binding is not locally defined.
             */
            // @ts-ignore
            get(key: any): javax.swing.Action
            /**
             * Removes the binding for <code>key</code> from this <code>ActionMap</code>.
             */
            // @ts-ignore
            remove(key: any): void
            /**
             * Removes all the mappings from this <code>ActionMap</code>.
             */
            // @ts-ignore
            clear(): void
            /**
             * Returns the <code>Action</code> names that are bound in this <code>ActionMap</code>.
             */
            // @ts-ignore
            keys(): java.lang.Object[]
            /**
             * Returns the number of bindings in this {@code ActionMap}.
             * @return the number of bindings in this {#code ActionMap}
             */
            // @ts-ignore
            size(): int
            /**
             * Returns an array of the keys defined in this <code>ActionMap</code> and
             * its parent. This method differs from <code>keys()</code> in that
             * this method includes the keys defined in the parent.
             */
            // @ts-ignore
            allKeys(): java.lang.Object[]
        }
    }
}

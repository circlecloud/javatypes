declare namespace javax {
    namespace swing {
        /**
         * A generic implementation of SingleSelectionModel.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Dave Moore
         */
        // @ts-ignore
        class DefaultSingleSelectionModel extends java.lang.Object implements javax.swing.SingleSelectionModel, java.io.Serializable {
            // @ts-ignore
            constructor()
            // @ts-ignore
            changeEvent: javax.swing.event.ChangeEvent
            /**
             * The collection of registered listeners
             */
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            // @ts-ignore
            public getSelectedIndex(): number /*int*/
            // @ts-ignore
            public setSelectedIndex(index: number /*int*/): void
            // @ts-ignore
            public clearSelection(): void
            // @ts-ignore
            public isSelected(): boolean
            /**
             * Adds a <code>ChangeListener</code> to the button.
             */
            // @ts-ignore
            public addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a <code>ChangeListener</code> from the button.
             */
            // @ts-ignore
            public removeChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the change listeners
             * registered on this <code>DefaultSingleSelectionModel</code>.
             * @return all of this model's <code>ChangeListener</code>s
             *          or an empty
             *          array if no change listeners are currently registered
             * @see #addChangeListener
             * @see #removeChangeListener
             * @since 1.4
             */
            // @ts-ignore
            public getChangeListeners(): javax.swing.event.ChangeListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is created lazily.
             * @see EventListenerList
             */
            // @ts-ignore
            fireStateChanged(): void
            /**
             * Returns an array of all the objects currently registered as
             * <code><em>Foo</em>Listener</code>s
             * upon this model.
             * <code><em>Foo</em>Listener</code>s
             * are registered using the <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a <code>DefaultSingleSelectionModel</code>
             * instance <code>m</code>
             * for its change listeners
             * with the following code:
             * <pre>ChangeListener[] cls = (ChangeListener[])(m.getListeners(ChangeListener.class));</pre>
             * If no such listeners exist,
             * this method returns an empty array.
             * @param listenerType  the type of listeners requested;
             *           this parameter should specify an interface
             *           that descends from <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s
             *           on this model,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code> doesn't
             *           specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @see #getChangeListeners
             * @since 1.3
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
        }
    }
}

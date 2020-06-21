declare namespace javax {
    namespace swing {
        /**
         * The abstract definition for the data model that provides
         * a <code>List</code> with its contents.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @param <E> the type of the elements of this model
         * @author Hans Muller
         */
        // @ts-ignore
        abstract class AbstractListModel<E> extends java.lang.Object implements javax.swing.ListModel<E>, java.io.Serializable {
            // @ts-ignore
            constructor()
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            /**
             * Adds a listener to the list that's notified each time a change
             * to the data model occurs.
             * @param l the <code>ListDataListener</code> to be added
             */
            // @ts-ignore
            public addListDataListener(l: javax.swing.event.ListDataListener): void
            /**
             * Removes a listener from the list that's notified each time a
             * change to the data model occurs.
             * @param l the <code>ListDataListener</code> to be removed
             */
            // @ts-ignore
            public removeListDataListener(l: javax.swing.event.ListDataListener): void
            /**
             * Returns an array of all the list data listeners
             * registered on this <code>AbstractListModel</code>.
             * @return all of this model's <code>ListDataListener</code>s,
             *          or an empty array if no list data listeners
             *          are currently registered
             * @see #addListDataListener
             * @see #removeListDataListener
             * @since 1.4
             */
            // @ts-ignore
            public getListDataListeners(): javax.swing.event.ListDataListener[]
            /**
             * <code>AbstractListModel</code> subclasses must call this method
             * <b>after</b>
             * one or more elements of the list change.  The changed elements
             * are specified by the closed interval index0, index1 -- the endpoints
             * are included.  Note that
             * index0 need not be less than or equal to index1.
             * @param source the <code>ListModel</code> that changed, typically "this"
             * @param index0 one end of the new interval
             * @param index1 the other end of the new interval
             * @see EventListenerList
             * @see DefaultListModel
             */
            // @ts-ignore
            fireContentsChanged(source: java.lang.Object | any, index0: number /*int*/, index1: number /*int*/): void
            /**
             * <code>AbstractListModel</code> subclasses must call this method
             * <b>after</b>
             * one or more elements are added to the model.  The new elements
             * are specified by a closed interval index0, index1 -- the enpoints
             * are included.  Note that
             * index0 need not be less than or equal to index1.
             * @param source the <code>ListModel</code> that changed, typically "this"
             * @param index0 one end of the new interval
             * @param index1 the other end of the new interval
             * @see EventListenerList
             * @see DefaultListModel
             */
            // @ts-ignore
            fireIntervalAdded(source: java.lang.Object | any, index0: number /*int*/, index1: number /*int*/): void
            /**
             * <code>AbstractListModel</code> subclasses must call this method
             * <b>after</b> one or more elements are removed from the model.
             * <code>index0</code> and <code>index1</code> are the end points
             * of the interval that's been removed.  Note that <code>index0</code>
             * need not be less than or equal to <code>index1</code>.
             * @param source the <code>ListModel</code> that changed, typically "this"
             * @param index0 one end of the removed interval,
             *                including <code>index0</code>
             * @param index1 the other end of the removed interval,
             *                including <code>index1</code>
             * @see EventListenerList
             * @see DefaultListModel
             */
            // @ts-ignore
            fireIntervalRemoved(source: java.lang.Object | any, index0: number /*int*/, index1: number /*int*/): void
            /**
             * Returns an array of all the objects currently registered as
             * <code><em>Foo</em>Listener</code>s
             * upon this model.
             * <code><em>Foo</em>Listener</code>s
             * are registered using the <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a list model
             * <code>m</code>
             * for its list data listeners
             * with the following code:
             * <pre>ListDataListener[] ldls = (ListDataListener[])(m.getListeners(ListDataListener.class));</pre>
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
             * @see #getListDataListeners
             * @since 1.3
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
        }
    }
}

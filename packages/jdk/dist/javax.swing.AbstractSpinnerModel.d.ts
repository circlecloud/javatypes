declare namespace javax {
    namespace swing {
        /**
         * This class provides the ChangeListener part of the
         * SpinnerModel interface that should be suitable for most concrete SpinnerModel
         * implementations.  Subclasses must provide an implementation of the
         * <code>setValue</code>, <code>getValue</code>, <code>getNextValue</code> and
         * <code>getPreviousValue</code> methods.
         * @see JSpinner
         * @see SpinnerModel
         * @see SpinnerListModel
         * @see SpinnerNumberModel
         * @see SpinnerDateModel
         * @author Hans Muller
         * @since 1.4
         */
        // @ts-ignore
        abstract class AbstractSpinnerModel extends java.lang.Object implements javax.swing.SpinnerModel, java.io.Serializable {
            // @ts-ignore
            constructor()
            /**
             * The list of ChangeListeners for this model.  Subclasses may
             * store their own listeners here.
             */
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            /**
             * Adds a ChangeListener to the model's listener list.  The
             * ChangeListeners must be notified when the models value changes.
             * @param l the ChangeListener to add
             * @see #removeChangeListener
             * @see SpinnerModel#addChangeListener
             */
            // @ts-ignore
            public addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a ChangeListener from the model's listener list.
             * @param l the ChangeListener to remove
             * @see #addChangeListener
             * @see SpinnerModel#removeChangeListener
             */
            // @ts-ignore
            public removeChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the <code>ChangeListener</code>s added
             * to this AbstractSpinnerModel with addChangeListener().
             * @return all of the <code>ChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getChangeListeners(): javax.swing.event.ChangeListener[]
            /**
             * Run each ChangeListeners stateChanged() method.
             * @see #setValue
             * @see EventListenerList
             */
            // @ts-ignore
            fireStateChanged(): void
            /**
             * Return an array of all the listeners of the given type that
             * were added to this model.  For example to find all of the
             * ChangeListeners added to this model:
             * <pre>
             * myAbstractSpinnerModel.getListeners(ChangeListener.class);
             * </pre>
             * @param listenerType the type of listeners to return, e.g. ChangeListener.class
             * @return all of the objects receiving <em>listenerType</em> notifications
             *          from this model
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
        }
    }
}

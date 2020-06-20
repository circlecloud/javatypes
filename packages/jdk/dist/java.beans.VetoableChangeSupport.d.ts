declare namespace java {
    namespace beans {
        /**
         * This is a utility class that can be used by beans that support constrained
         * properties.  It manages a list of listeners and dispatches
         * {@link PropertyChangeEvent}s to them.  You can use an instance of this class
         * as a member field of your bean and delegate these types of work to it.
         * The {@link VetoableChangeListener} can be registered for all properties
         * or for a property specified by name.
         * <p>
         * Here is an example of {@code VetoableChangeSupport} usage that follows
         * the rules and recommendations laid out in the JavaBeans&trade; specification:
         * <pre>{@code
         * public class MyBean {
         * private final VetoableChangeSupport vcs = new VetoableChangeSupport(this);
         * public void addVetoableChangeListener(VetoableChangeListener listener) {
         * this.vcs.addVetoableChangeListener(listener);
         * }
         * public void removeVetoableChangeListener(VetoableChangeListener listener) {
         * this.vcs.removeVetoableChangeListener(listener);
         * }
         * private String value;
         * public String getValue() {
         * return this.value;
         * }
         * public void setValue(String newValue) throws PropertyVetoException {
         * String oldValue = this.value;
         * this.vcs.fireVetoableChange("value", oldValue, newValue);
         * this.value = newValue;
         * }
         * [...]
         * }
         * }</pre>
         * <p>
         * A {@code VetoableChangeSupport} instance is thread-safe.
         * <p>
         * This class is serializable.  When it is serialized it will save
         * (and restore) any listeners that are themselves serializable.  Any
         * non-serializable listeners will be skipped during serialization.
         * @see PropertyChangeSupport
         */
        // @ts-ignore
        class VetoableChangeSupport extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a <code>VetoableChangeSupport</code> object.
             * @param sourceBean  The bean to be given as the source for any events.
             */
            // @ts-ignore
            constructor(sourceBean: any)
            /**
             * Add a VetoableChangeListener to the listener list.
             * The listener is registered for all properties.
             * The same listener object may be added more than once, and will be called
             * as many times as it is added.
             * If <code>listener</code> is null, no exception is thrown and no action
             * is taken.
             * @param listener  The VetoableChangeListener to be added
             */
            // @ts-ignore
            addVetoableChangeListener(listener: java.beans.VetoableChangeListener): void
            /**
             * Remove a VetoableChangeListener from the listener list.
             * This removes a VetoableChangeListener that was registered
             * for all properties.
             * If <code>listener</code> was added more than once to the same event
             * source, it will be notified one less time after being removed.
             * If <code>listener</code> is null, or was never added, no exception is
             * thrown and no action is taken.
             * @param listener  The VetoableChangeListener to be removed
             */
            // @ts-ignore
            removeVetoableChangeListener(listener: java.beans.VetoableChangeListener): void
            /**
             * Returns an array of all the listeners that were added to the
             * VetoableChangeSupport object with addVetoableChangeListener().
             * <p>
             * If some listeners have been added with a named property, then
             * the returned array will be a mixture of VetoableChangeListeners
             * and <code>VetoableChangeListenerProxy</code>s. If the calling
             * method is interested in distinguishing the listeners then it must
             * test each element to see if it's a
             * <code>VetoableChangeListenerProxy</code>, perform the cast, and examine
             * the parameter.
             * <pre>{@code
             * VetoableChangeListener[] listeners = bean.getVetoableChangeListeners();
             * for (int i = 0; i < listeners.length; i++) {
             * if (listeners[i] instanceof VetoableChangeListenerProxy) {
             * VetoableChangeListenerProxy proxy =
             * (VetoableChangeListenerProxy)listeners[i];
             * if (proxy.getPropertyName().equals("foo")) {
             * // proxy is a VetoableChangeListener which was associated
             * // with the property named "foo"
             * }
             * }
             * }
             * }</pre>
             * @see VetoableChangeListenerProxy
             * @return all of the <code>VetoableChangeListeners</code> added or an
             *          empty array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
            /**
             * Add a VetoableChangeListener for a specific property.  The listener
             * will be invoked only when a call on fireVetoableChange names that
             * specific property.
             * The same listener object may be added more than once.  For each
             * property,  the listener will be invoked the number of times it was added
             * for that property.
             * If <code>propertyName</code> or <code>listener</code> is null, no
             * exception is thrown and no action is taken.
             * @param propertyName  The name of the property to listen on.
             * @param listener  The VetoableChangeListener to be added
             */
            // @ts-ignore
            addVetoableChangeListener(propertyName: string, listener: java.beans.VetoableChangeListener): void
            /**
             * Remove a VetoableChangeListener for a specific property.
             * If <code>listener</code> was added more than once to the same event
             * source for the specified property, it will be notified one less time
             * after being removed.
             * If <code>propertyName</code> is null, no exception is thrown and no
             * action is taken.
             * If <code>listener</code> is null, or was never added for the specified
             * property, no exception is thrown and no action is taken.
             * @param propertyName  The name of the property that was listened on.
             * @param listener  The VetoableChangeListener to be removed
             */
            // @ts-ignore
            removeVetoableChangeListener(propertyName: string, listener: java.beans.VetoableChangeListener): void
            /**
             * Returns an array of all the listeners which have been associated
             * with the named property.
             * @param propertyName  The name of the property being listened to
             * @return all the <code>VetoableChangeListeners</code> associated with
             *          the named property.  If no such listeners have been added,
             *          or if <code>propertyName</code> is null, an empty array is
             *          returned.
             * @since 1.4
             */
            // @ts-ignore
            getVetoableChangeListeners(propertyName: string): java.beans.VetoableChangeListener[]
            /**
             * Reports a constrained property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * Any listener can throw a {@code PropertyVetoException} to veto the update.
             * If one of the listeners vetoes the update, this method passes
             * a new "undo" {@code PropertyChangeEvent} that reverts to the old value
             * to all listeners that already confirmed this update
             * and throws the {@code PropertyVetoException} again.
             * <p>
             * No event is fired if old and new values are equal and non-null.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #fireVetoableChange(PropertyChangeEvent)} method.
             * @param propertyName  the programmatic name of the property that is about to change
             * @param oldValue      the old value of the property
             * @param newValue      the new value of the property
             * @throws PropertyVetoException if one of listeners vetoes the property update
             */
            // @ts-ignore
            fireVetoableChange(propertyName: string, oldValue: any, newValue: any): void
            /**
             * Reports an integer constrained property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * Any listener can throw a {@code PropertyVetoException} to veto the update.
             * If one of the listeners vetoes the update, this method passes
             * a new "undo" {@code PropertyChangeEvent} that reverts to the old value
             * to all listeners that already confirmed this update
             * and throws the {@code PropertyVetoException} again.
             * <p>
             * No event is fired if old and new values are equal.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #fireVetoableChange(String, Object, Object)} method.
             * @param propertyName  the programmatic name of the property that is about to change
             * @param oldValue      the old value of the property
             * @param newValue      the new value of the property
             * @throws PropertyVetoException if one of listeners vetoes the property update
             */
            // @ts-ignore
            fireVetoableChange(propertyName: string, oldValue: number /*int*/, newValue: number /*int*/): void
            /**
             * Reports a boolean constrained property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * Any listener can throw a {@code PropertyVetoException} to veto the update.
             * If one of the listeners vetoes the update, this method passes
             * a new "undo" {@code PropertyChangeEvent} that reverts to the old value
             * to all listeners that already confirmed this update
             * and throws the {@code PropertyVetoException} again.
             * <p>
             * No event is fired if old and new values are equal.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #fireVetoableChange(String, Object, Object)} method.
             * @param propertyName  the programmatic name of the property that is about to change
             * @param oldValue      the old value of the property
             * @param newValue      the new value of the property
             * @throws PropertyVetoException if one of listeners vetoes the property update
             */
            // @ts-ignore
            fireVetoableChange(propertyName: string, oldValue: boolean, newValue: boolean): void
            /**
             * Fires a property change event to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * Any listener can throw a {@code PropertyVetoException} to veto the update.
             * If one of the listeners vetoes the update, this method passes
             * a new "undo" {@code PropertyChangeEvent} that reverts to the old value
             * to all listeners that already confirmed this update
             * and throws the {@code PropertyVetoException} again.
             * <p>
             * No event is fired if the given event's old and new values are equal and non-null.
             * @param event  the {#code PropertyChangeEvent} to be fired
             * @throws PropertyVetoException if one of listeners vetoes the property update
             */
            // @ts-ignore
            fireVetoableChange(event: java.beans.PropertyChangeEvent): void
            /**
             * Check if there are any listeners for a specific property, including
             * those registered on all properties.  If <code>propertyName</code>
             * is null, only check for listeners registered on all properties.
             * @param propertyName  the property name.
             * @return true if there are one or more listeners for the given property
             */
            // @ts-ignore
            hasListeners(propertyName: string): boolean
        }
    }
}

declare namespace javax {
    namespace swing {
        /**
         * This class provides default implementations for the JFC <code>Action</code>
         * interface. Standard behaviors like the get and set methods for
         * <code>Action</code> object properties (icon, text, and enabled) are defined
         * here. The developer need only subclass this abstract class and
         * define the <code>actionPerformed</code> method.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Georges Saab
         * @see Action
         */
        // @ts-ignore
        class AbstractAction extends java.lang.Object implements javax.swing.Action, java.lang.Cloneable, java.io.Serializable {
            /**
             * Creates an {@code Action}.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an {@code Action} with the specified name.
             * @param name the name ({#code Action.NAME}) for the action; a
             *         value of {@code null} is ignored
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates an {@code Action} with the specified name and small icon.
             * @param name the name ({#code Action.NAME}) for the action; a
             *         value of {@code null} is ignored
             * @param icon the small icon ({#code Action.SMALL_ICON}) for the action; a
             *         value of {@code null} is ignored
             */
            // @ts-ignore
            constructor(name: string, icon: javax.swing.Icon)
            /**
             * Specifies whether action is enabled; the default is true.
             */
            // @ts-ignore
            enabled: boolean
            /**
             * If any <code>PropertyChangeListeners</code> have been registered, the
             * <code>changeSupport</code> field describes them.
             */
            // @ts-ignore
            changeSupport: javax.swing.event.SwingPropertyChangeSupport
            /**
             * Gets the <code>Object</code> associated with the specified key.
             * @param key a string containing the specified <code>key</code>
             * @return the binding <code>Object</code> stored with this key; if there
             *           are no keys, it will return <code>null</code>
             * @see Action#getValue
             */
            // @ts-ignore
            getValue(key: string): java.lang.Object
            /**
             * Sets the <code>Value</code> associated with the specified key.
             * @param key  the <code>String</code> that identifies the stored object
             * @param newValue the <code>Object</code> to store using this key
             * @see Action#putValue
             */
            // @ts-ignore
            putValue(key: string, newValue: any): void
            /**
             * Returns true if the action is enabled.
             * @return true if the action is enabled, false otherwise
             * @see Action#isEnabled
             */
            // @ts-ignore
            isEnabled(): boolean
            /**
             * Sets whether the {@code Action} is enabled. The default is {@code true}.
             * @param newValue  {#code true} to enable the action, {@code false} to
             *                   disable it
             * @see Action#setEnabled
             */
            // @ts-ignore
            setEnabled(newValue: boolean): void
            /**
             * Returns an array of <code>Object</code>s which are keys for
             * which values have been set for this <code>AbstractAction</code>,
             * or <code>null</code> if no keys have values set.
             * @return an array of key objects, or <code>null</code> if no
             *                   keys have values set
             * @since 1.3
             */
            // @ts-ignore
            getKeys(): java.lang.Object[]
            /**
             * Supports reporting bound property changes.  This method can be called
             * when a bound property has changed and it will send the appropriate
             * <code>PropertyChangeEvent</code> to any registered
             * <code>PropertyChangeListeners</code>.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: any, newValue: any): void
            /**
             * Adds a <code>PropertyChangeListener</code> to the listener list.
             * The listener is registered for all properties.
             * <p>
             * A <code>PropertyChangeEvent</code> will get fired in response to setting
             * a bound property, e.g. <code>setFont</code>, <code>setBackground</code>,
             * or <code>setForeground</code>.
             * Note that if the current component is inheriting its foreground,
             * background, or font from its container, then no event will be
             * fired in response to a change in the inherited property.
             * @param listener  The <code>PropertyChangeListener</code> to be added
             * @see Action#addPropertyChangeListener
             */
            // @ts-ignore
            addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            /**
             * Removes a <code>PropertyChangeListener</code> from the listener list.
             * This removes a <code>PropertyChangeListener</code> that was registered
             * for all properties.
             * @param listener  the <code>PropertyChangeListener</code> to be removed
             * @see Action#removePropertyChangeListener
             */
            // @ts-ignore
            removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            /**
             * Returns an array of all the <code>PropertyChangeListener</code>s added
             * to this AbstractAction with addPropertyChangeListener().
             * @return all of the <code>PropertyChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
            /**
             * Clones the abstract action. This gives the clone
             * its own copy of the key/value list,
             * which is not handled for you by <code>Object.clone()</code>.
             */
            // @ts-ignore
            clone(): java.lang.Object
        }
    }
}

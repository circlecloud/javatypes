declare namespace javax {
    namespace swing {
        /**
         * The default implementation of a <code>Button</code> component's data model.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing. As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Jeff Dinkins
         */
        // @ts-ignore
        class DefaultButtonModel extends java.lang.Object implements javax.swing.ButtonModel, java.io.Serializable {
            /**
             * Constructs a <code>DefaultButtonModel</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * The bitmask used to store the state of the button.
             */
            // @ts-ignore
            stateMask: number /*int*/
            /**
             * The action command string fired by the button.
             */
            // @ts-ignore
            actionCommand: java.lang.String | string
            /**
             * The button group that the button belongs to.
             */
            // @ts-ignore
            group: javax.swing.ButtonGroup
            /**
             * The button's mnemonic.
             */
            // @ts-ignore
            mnemonic: number /*int*/
            /**
             * Only one <code>ChangeEvent</code> is needed per button model
             * instance since the event's only state is the source property.
             * The source of events generated is always "this".
             */
            // @ts-ignore
            changeEvent: javax.swing.event.ChangeEvent
            /**
             * Stores the listeners on this model.
             */
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            /**
             * Identifies the "armed" bit in the bitmask, which
             * indicates partial commitment towards choosing/triggering
             * the button.
             */
            // @ts-ignore
            public static readonly ARMED: number /*int*/
            /**
             * Identifies the "selected" bit in the bitmask, which
             * indicates that the button has been selected. Only needed for
             * certain types of buttons - such as radio button or check box.
             */
            // @ts-ignore
            public static readonly SELECTED: number /*int*/
            /**
             * Identifies the "pressed" bit in the bitmask, which
             * indicates that the button is pressed.
             */
            // @ts-ignore
            public static readonly PRESSED: number /*int*/
            /**
             * Identifies the "enabled" bit in the bitmask, which
             * indicates that the button can be selected by
             * an input device (such as a mouse pointer).
             */
            // @ts-ignore
            public static readonly ENABLED: number /*int*/
            /**
             * Identifies the "rollover" bit in the bitmask, which
             * indicates that the mouse is over the button.
             */
            // @ts-ignore
            public static readonly ROLLOVER: number /*int*/
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setActionCommand(actionCommand: java.lang.String | string): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getActionCommand(): string
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isArmed(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isSelected(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isEnabled(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isPressed(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isRollover(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setArmed(b: boolean): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setEnabled(b: boolean): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setSelected(b: boolean): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setPressed(b: boolean): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setRollover(b: boolean): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setMnemonic(key: number /*int*/): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public getMnemonic(): number /*int*/
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public removeChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the change listeners
             * registered on this <code>DefaultButtonModel</code>.
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
             * {@inheritDoc}
             */
            // @ts-ignore
            public addActionListener(l: java.awt.event.ActionListener): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public removeActionListener(l: java.awt.event.ActionListener): void
            /**
             * Returns an array of all the action listeners
             * registered on this <code>DefaultButtonModel</code>.
             * @return all of this model's <code>ActionListener</code>s
             *          or an empty
             *          array if no action listeners are currently registered
             * @see #addActionListener
             * @see #removeActionListener
             * @since 1.4
             */
            // @ts-ignore
            public getActionListeners(): java.awt.event.ActionListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param e the <code>ActionEvent</code> to deliver to listeners
             * @see EventListenerList
             */
            // @ts-ignore
            fireActionPerformed(e: java.awt.event.ActionEvent): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public addItemListener(l: java.awt.event.ItemListener): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public removeItemListener(l: java.awt.event.ItemListener): void
            /**
             * Returns an array of all the item listeners
             * registered on this <code>DefaultButtonModel</code>.
             * @return all of this model's <code>ItemListener</code>s
             *          or an empty
             *          array if no item listeners are currently registered
             * @see #addItemListener
             * @see #removeItemListener
             * @since 1.4
             */
            // @ts-ignore
            public getItemListeners(): java.awt.event.ItemListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param e the <code>ItemEvent</code> to deliver to listeners
             * @see EventListenerList
             */
            // @ts-ignore
            fireItemStateChanged(e: java.awt.event.ItemEvent): void
            /**
             * Returns an array of all the objects currently registered as
             * <code><em>Foo</em>Listener</code>s
             * upon this model.
             * <code><em>Foo</em>Listener</code>s
             * are registered using the <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a <code>DefaultButtonModel</code>
             * instance <code>m</code>
             * for its action listeners
             * with the following code:
             * <pre>ActionListener[] als = (ActionListener[])(m.getListeners(ActionListener.class));</pre>
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
             * @see #getActionListeners
             * @see #getChangeListeners
             * @see #getItemListeners
             * @since 1.3
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Overridden to return <code>null</code>.
             */
            // @ts-ignore
            public getSelectedObjects(): any[]
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setGroup(group: javax.swing.ButtonGroup): void
            /**
             * Returns the group that the button belongs to.
             * Normally used with radio buttons, which are mutually
             * exclusive within their group.
             * @return the <code>ButtonGroup</code> that the button belongs to
             * @since 1.3
             */
            // @ts-ignore
            public getGroup(): javax.swing.ButtonGroup
        }
    }
}

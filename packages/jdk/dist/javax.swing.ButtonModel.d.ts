declare namespace javax {
    namespace swing {
        /**
         * State model for buttons.
         * <p>
         * This model is used for regular buttons, as well as check boxes
         * and radio buttons, which are special kinds of buttons. In practice,
         * a button's UI takes the responsibility of calling methods on its
         * model to manage the state, as detailed below:
         * <p>
         * In simple terms, pressing and releasing the mouse over a regular
         * button triggers the button and causes and <code>ActionEvent</code>
         * to be fired. The same behavior can be produced via a keyboard key
         * defined by the look and feel of the button (typically the SPACE BAR).
         * Pressing and releasing this key while the button has
         * focus will give the same results. For check boxes and radio buttons, the
         * mouse or keyboard equivalent sequence just described causes the button
         * to become selected.
         * <p>
         * In details, the state model for buttons works as follows
         * when used with the mouse:
         * <br>
         * Pressing the mouse on top of a button makes the model both
         * armed and pressed. As long as the mouse remains down,
         * the model remains pressed, even if the mouse moves
         * outside the button. On the contrary, the model is only
         * armed while the mouse remains pressed within the bounds of
         * the button (it can move in or out of the button, but the model
         * is only armed during the portion of time spent within the button).
         * A button is triggered, and an <code>ActionEvent</code> is fired,
         * when the mouse is released while the model is armed
         * - meaning when it is released over top of the button after the mouse
         * has previously been pressed on that button (and not already released).
         * Upon mouse release, the model becomes unarmed and unpressed.
         * <p>
         * In details, the state model for buttons works as follows
         * when used with the keyboard:
         * <br>
         * Pressing the look and feel defined keyboard key while the button
         * has focus makes the model both armed and pressed. As long as this key
         * remains down, the model remains in this state. Releasing the key sets
         * the model to unarmed and unpressed, triggers the button, and causes an
         * <code>ActionEvent</code> to be fired.
         * @author Jeff Dinkins
         */
        // @ts-ignore
        interface ButtonModel extends java.awt.ItemSelectable {
            /**
             * Indicates partial commitment towards triggering the
             * button.
             * @return <code>true</code> if the button is armed,
             *          and ready to be triggered
             * @see #setArmed
             */
            // @ts-ignore
            isArmed(): boolean
            /**
             * Indicates if the button has been selected. Only needed for
             * certain types of buttons - such as radio buttons and check boxes.
             * @return <code>true</code> if the button is selected
             */
            // @ts-ignore
            isSelected(): boolean
            /**
             * Indicates if the button can be selected or triggered by
             * an input device, such as a mouse pointer.
             * @return <code>true</code> if the button is enabled
             */
            // @ts-ignore
            isEnabled(): boolean
            /**
             * Indicates if the button is pressed.
             * @return <code>true</code> if the button is pressed
             */
            // @ts-ignore
            isPressed(): boolean
            /**
             * Indicates that the mouse is over the button.
             * @return <code>true</code> if the mouse is over the button
             */
            // @ts-ignore
            isRollover(): boolean
            /**
             * Marks the button as armed or unarmed.
             * @param b whether or not the button should be armed
             */
            // @ts-ignore
            setArmed(b: boolean): void
            /**
             * Selects or deselects the button.
             * @param b <code>true</code> selects the button,
             *           <code>false</code> deselects the button
             */
            // @ts-ignore
            setSelected(b: boolean): void
            /**
             * Enables or disables the button.
             * @param b whether or not the button should be enabled
             * @see #isEnabled
             */
            // @ts-ignore
            setEnabled(b: boolean): void
            /**
             * Sets the button to pressed or unpressed.
             * @param b whether or not the button should be pressed
             * @see #isPressed
             */
            // @ts-ignore
            setPressed(b: boolean): void
            /**
             * Sets or clears the button's rollover state
             * @param b whether or not the button is in the rollover state
             * @see #isRollover
             */
            // @ts-ignore
            setRollover(b: boolean): void
            /**
             * Sets the keyboard mnemonic (shortcut key or
             * accelerator key) for the button.
             * @param key an int specifying the accelerator key
             */
            // @ts-ignore
            setMnemonic(key: number /*int*/): void
            /**
             * Gets the keyboard mnemonic for the button.
             * @return an int specifying the accelerator key
             * @see #setMnemonic
             */
            // @ts-ignore
            getMnemonic(): int
            /**
             * Sets the action command string that gets sent as part of the
             * <code>ActionEvent</code> when the button is triggered.
             * @param s the <code>String</code> that identifies the generated event
             * @see #getActionCommand
             * @see java.awt.event.ActionEvent#getActionCommand
             */
            // @ts-ignore
            setActionCommand(s: string): void
            /**
             * Returns the action command string for the button.
             * @return the <code>String</code> that identifies the generated event
             * @see #setActionCommand
             */
            // @ts-ignore
            getActionCommand(): java.lang.String
            /**
             * Identifies the group the button belongs to --
             * needed for radio buttons, which are mutually
             * exclusive within their group.
             * @param group the <code>ButtonGroup</code> the button belongs to
             */
            // @ts-ignore
            setGroup(group: javax.swing.ButtonGroup): void
            /**
             * Adds an <code>ActionListener</code> to the model.
             * @param l the listener to add
             */
            // @ts-ignore
            addActionListener(l: java.awt.event.ActionListener): void
            /**
             * Removes an <code>ActionListener</code> from the model.
             * @param l the listener to remove
             */
            // @ts-ignore
            removeActionListener(l: java.awt.event.ActionListener): void
            /**
             * Adds an <code>ItemListener</code> to the model.
             * @param l the listener to add
             */
            // @ts-ignore
            addItemListener(l: java.awt.event.ItemListener): void
            /**
             * Removes an <code>ItemListener</code> from the model.
             * @param l the listener to remove
             */
            // @ts-ignore
            removeItemListener(l: java.awt.event.ItemListener): void
            /**
             * Adds a <code>ChangeListener</code> to the model.
             * @param l the listener to add
             */
            // @ts-ignore
            addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a <code>ChangeListener</code> from the model.
             * @param l the listener to remove
             */
            // @ts-ignore
            removeChangeListener(l: javax.swing.event.ChangeListener): void
        }
    }
}

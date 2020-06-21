declare namespace javax {
    namespace swing {
        /**
         * Manages all the <code>ToolTips</code> in the system.
         * <p>
         * ToolTipManager contains numerous properties for configuring how long it
         * will take for the tooltips to become visible, and how long till they
         * hide. Consider a component that has a different tooltip based on where
         * the mouse is, such as JTree. When the mouse moves into the JTree and
         * over a region that has a valid tooltip, the tooltip will become
         * visible after <code>initialDelay</code> milliseconds. After
         * <code>dismissDelay</code> milliseconds the tooltip will be hidden. If
         * the mouse is over a region that has a valid tooltip, and the tooltip
         * is currently visible, when the mouse moves to a region that doesn't have
         * a valid tooltip the tooltip will be hidden. If the mouse then moves back
         * into a region that has a valid tooltip within <code>reshowDelay</code>
         * milliseconds, the tooltip will immediately be shown, otherwise the
         * tooltip will be shown again after <code>initialDelay</code> milliseconds.
         * @see JComponent#createToolTip
         * @author Dave Moore
         * @author Rich Schiavi
         */
        // @ts-ignore
        class ToolTipManager extends java.awt.event.MouseAdapter implements java.awt.event.MouseMotionListener {
            // @ts-ignore
            lightWeightPopupEnabled: boolean
            // @ts-ignore
            heavyWeightPopupEnabled: boolean
            /**
             * Enables or disables the tooltip.
             * @param flag  true to enable the tip, false otherwise
             */
            // @ts-ignore
            public setEnabled(flag: boolean): void
            /**
             * Returns true if this object is enabled.
             * @return true if this object is enabled, false otherwise
             */
            // @ts-ignore
            public isEnabled(): boolean
            /**
             * When displaying the <code>JToolTip</code>, the
             * <code>ToolTipManager</code> chooses to use a lightweight
             * <code>JPanel</code> if it fits. This method allows you to
             * disable this feature. You have to do disable it if your
             * application mixes light weight and heavy weights components.
             * @param aFlag true if a lightweight panel is desired, false otherwise
             */
            // @ts-ignore
            public setLightWeightPopupEnabled(aFlag: boolean): void
            /**
             * Returns true if lightweight (all-Java) <code>Tooltips</code>
             * are in use, or false if heavyweight (native peer)
             * <code>Tooltips</code> are being used.
             * @return true if lightweight <code>ToolTips</code> are in use
             */
            // @ts-ignore
            public isLightWeightPopupEnabled(): boolean
            /**
             * Specifies the initial delay value.
             * @param milliseconds  the number of milliseconds to delay
             *         (after the cursor has paused) before displaying the
             *         tooltip
             * @see #getInitialDelay
             */
            // @ts-ignore
            public setInitialDelay(milliseconds: number /*int*/): void
            /**
             * Returns the initial delay value.
             * @return an integer representing the initial delay value,
             *           in milliseconds
             * @see #setInitialDelay
             */
            // @ts-ignore
            public getInitialDelay(): number /*int*/
            /**
             * Specifies the dismissal delay value.
             * @param milliseconds  the number of milliseconds to delay
             *         before taking away the tooltip
             * @see #getDismissDelay
             */
            // @ts-ignore
            public setDismissDelay(milliseconds: number /*int*/): void
            /**
             * Returns the dismissal delay value.
             * @return an integer representing the dismissal delay value,
             *           in milliseconds
             * @see #setDismissDelay
             */
            // @ts-ignore
            public getDismissDelay(): number /*int*/
            /**
             * Used to specify the amount of time before the user has to wait
             * <code>initialDelay</code> milliseconds before a tooltip will be
             * shown. That is, if the tooltip is hidden, and the user moves into
             * a region of the same Component that has a valid tooltip within
             * <code>milliseconds</code> milliseconds the tooltip will immediately
             * be shown. Otherwise, if the user moves into a region with a valid
             * tooltip after <code>milliseconds</code> milliseconds, the user
             * will have to wait an additional <code>initialDelay</code>
             * milliseconds before the tooltip is shown again.
             * @param milliseconds time in milliseconds
             * @see #getReshowDelay
             */
            // @ts-ignore
            public setReshowDelay(milliseconds: number /*int*/): void
            /**
             * Returns the reshow delay property.
             * @return reshown delay property
             * @see #setReshowDelay
             */
            // @ts-ignore
            public getReshowDelay(): number /*int*/
            /**
             * Returns a shared <code>ToolTipManager</code> instance.
             * @return a shared <code>ToolTipManager</code> object
             */
            // @ts-ignore
            public static sharedInstance(): javax.swing.ToolTipManager
            /**
             * Registers a component for tooltip management.
             * <p>
             * This will register key bindings to show and hide the tooltip text
             * only if <code>component</code> has focus bindings. This is done
             * so that components that are not normally focus traversable, such
             * as <code>JLabel</code>, are not made focus traversable as a result
             * of invoking this method.
             * @param component  a <code>JComponent</code> object to add
             * @see JComponent#isFocusTraversable
             */
            // @ts-ignore
            public registerComponent(component: javax.swing.JComponent): void
            /**
             * Removes a component from tooltip control.
             * @param component  a <code>JComponent</code> object to remove
             */
            // @ts-ignore
            public unregisterComponent(component: javax.swing.JComponent): void
            /**
             * Called when the mouse enters the region of a component.
             * This determines whether the tool tip should be shown.
             * @param event  the event in question
             */
            // @ts-ignore
            public mouseEntered(event: java.awt.event.MouseEvent): void
            /**
             * Called when the mouse exits the region of a component.
             * Any tool tip showing should be hidden.
             * @param event  the event in question
             */
            // @ts-ignore
            public mouseExited(event: java.awt.event.MouseEvent): void
            /**
             * Called when the mouse is pressed.
             * Any tool tip showing should be hidden.
             * @param event  the event in question
             */
            // @ts-ignore
            public mousePressed(event: java.awt.event.MouseEvent): void
            /**
             * Called when the mouse is pressed and dragged.
             * Does nothing.
             * @param event  the event in question
             */
            // @ts-ignore
            public mouseDragged(event: java.awt.event.MouseEvent): void
            /**
             * Called when the mouse is moved.
             * Determines whether the tool tip should be displayed.
             * @param event  the event in question
             */
            // @ts-ignore
            public mouseMoved(event: java.awt.event.MouseEvent): void
        }
    }
}

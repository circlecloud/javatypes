declare namespace java {
    namespace awt {
        /**
         * The default KeyboardFocusManager for AWT applications. Focus traversal is
         * done in response to a Component's focus traversal keys, and using a
         * Container's FocusTraversalPolicy.
         * <p>
         * Please see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
         * How to Use the Focus Subsystem</a>,
         * a section in <em>The Java Tutorial</em>, and the
         * <a href="../../java/awt/doc-files/FocusSpec.html">Focus Specification</a>
         * for more information.
         * @author David Mendenhall
         * @see FocusTraversalPolicy
         * @see Component#setFocusTraversalKeys
         * @see Component#getFocusTraversalKeys
         * @since 1.4
         */
        // @ts-ignore
        class DefaultKeyboardFocusManager extends java.awt.KeyboardFocusManager {
            // @ts-ignore
            constructor()
            /**
             * This method is called by the AWT event dispatcher requesting that the
             * current KeyboardFocusManager dispatch the specified event on its behalf.
             * DefaultKeyboardFocusManagers dispatch all FocusEvents, all WindowEvents
             * related to focus, and all KeyEvents. These events are dispatched based
             * on the KeyboardFocusManager's notion of the focus owner and the focused
             * and active Windows, sometimes overriding the source of the specified
             * AWTEvent. If this method returns <code>false</code>, then the AWT event
             * dispatcher will attempt to dispatch the event itself.
             * @param e the AWTEvent to be dispatched
             * @return <code>true</code> if this method dispatched the event;
             *          <code>false</code> otherwise
             */
            // @ts-ignore
            public dispatchEvent(e: java.awt.AWTEvent): boolean
            /**
             * Called by <code>dispatchEvent</code> if no other
             * KeyEventDispatcher in the dispatcher chain dispatched the KeyEvent, or
             * if no other KeyEventDispatchers are registered. If the event has not
             * been consumed, its target is enabled, and the focus owner is not null,
             * this method dispatches the event to its target. This method will also
             * subsequently dispatch the event to all registered
             * KeyEventPostProcessors. After all this operations are finished,
             * the event is passed to peers for processing.
             * <p>
             * In all cases, this method returns <code>true</code>, since
             * DefaultKeyboardFocusManager is designed so that neither
             * <code>dispatchEvent</code>, nor the AWT event dispatcher, should take
             * further action on the event in any situation.
             * @param e the KeyEvent to be dispatched
             * @return <code>true</code>
             * @see Component#dispatchEvent
             */
            // @ts-ignore
            public dispatchKeyEvent(e: java.awt.event.KeyEvent): boolean
            /**
             * This method will be called by <code>dispatchKeyEvent</code>. It will
             * handle any unconsumed KeyEvents that map to an AWT
             * <code>MenuShortcut</code> by consuming the event and activating the
             * shortcut.
             * @param e the KeyEvent to post-process
             * @return <code>true</code>
             * @see #dispatchKeyEvent
             * @see MenuShortcut
             */
            // @ts-ignore
            public postProcessKeyEvent(e: java.awt.event.KeyEvent): boolean
            /**
             * This method initiates a focus traversal operation if and only if the
             * KeyEvent represents a focus traversal key for the specified
             * focusedComponent. It is expected that focusedComponent is the current
             * focus owner, although this need not be the case. If it is not,
             * focus traversal will nevertheless proceed as if focusedComponent
             * were the focus owner.
             * @param focusedComponent the Component that is the basis for a focus
             *         traversal operation if the specified event represents a focus
             *         traversal key for the Component
             * @param e the event that may represent a focus traversal key
             */
            // @ts-ignore
            public processKeyEvent(focusedComponent: java.awt.Component, e: java.awt.event.KeyEvent): void
            /**
             * Delays dispatching of KeyEvents until the specified Component becomes
             * the focus owner. KeyEvents with timestamps later than the specified
             * timestamp will be enqueued until the specified Component receives a
             * FOCUS_GAINED event, or the AWT cancels the delay request by invoking
             * <code>dequeueKeyEvents</code> or <code>discardKeyEvents</code>.
             * @param after timestamp of current event, or the current, system time if
             *         the current event has no timestamp, or the AWT cannot determine
             *         which event is currently being handled
             * @param untilFocused Component which will receive a FOCUS_GAINED event
             *         before any pending KeyEvents
             * @see #dequeueKeyEvents
             * @see #discardKeyEvents
             */
            // @ts-ignore
            enqueueKeyEvents(after: number /*long*/, untilFocused: java.awt.Component): void
            /**
             * Releases for normal dispatching to the current focus owner all
             * KeyEvents which were enqueued because of a call to
             * <code>enqueueKeyEvents</code> with the same timestamp and Component.
             * If the given timestamp is less than zero, the outstanding enqueue
             * request for the given Component with the <b>oldest</b> timestamp (if
             * any) should be cancelled.
             * @param after the timestamp specified in the call to
             *         <code>enqueueKeyEvents</code>, or any value &lt; 0
             * @param untilFocused the Component specified in the call to
             *         <code>enqueueKeyEvents</code>
             * @see #enqueueKeyEvents
             * @see #discardKeyEvents
             */
            // @ts-ignore
            dequeueKeyEvents(after: number /*long*/, untilFocused: java.awt.Component): void
            /**
             * Discards all KeyEvents which were enqueued because of one or more calls
             * to <code>enqueueKeyEvents</code> with the specified Component, or one of
             * its descendants.
             * @param comp the Component specified in one or more calls to
             *         <code>enqueueKeyEvents</code>, or a parent of such a Component
             * @see #enqueueKeyEvents
             * @see #dequeueKeyEvents
             */
            // @ts-ignore
            discardKeyEvents(comp: java.awt.Component): void
            /**
             * Focuses the Component before aComponent, typically based on a
             * FocusTraversalPolicy.
             * @param aComponent the Component that is the basis for the focus
             *         traversal operation
             * @see FocusTraversalPolicy
             * @see Component#transferFocusBackward
             */
            // @ts-ignore
            public focusPreviousComponent(aComponent: java.awt.Component): void
            /**
             * Focuses the Component after aComponent, typically based on a
             * FocusTraversalPolicy.
             * @param aComponent the Component that is the basis for the focus
             *         traversal operation
             * @see FocusTraversalPolicy
             * @see Component#transferFocus
             */
            // @ts-ignore
            public focusNextComponent(aComponent: java.awt.Component): void
            /**
             * Moves the focus up one focus traversal cycle. Typically, the focus owner
             * is set to aComponent's focus cycle root, and the current focus cycle
             * root is set to the new focus owner's focus cycle root. If, however,
             * aComponent's focus cycle root is a Window, then the focus owner is set
             * to the focus cycle root's default Component to focus, and the current
             * focus cycle root is unchanged.
             * @param aComponent the Component that is the basis for the focus
             *         traversal operation
             * @see Component#transferFocusUpCycle
             */
            // @ts-ignore
            public upFocusCycle(aComponent: java.awt.Component): void
            /**
             * Moves the focus down one focus traversal cycle. If aContainer is a focus
             * cycle root, then the focus owner is set to aContainer's default
             * Component to focus, and the current focus cycle root is set to
             * aContainer. If aContainer is not a focus cycle root, then no focus
             * traversal operation occurs.
             * @param aContainer the Container that is the basis for the focus
             *         traversal operation
             * @see Container#transferFocusDownCycle
             */
            // @ts-ignore
            public downFocusCycle(aContainer: java.awt.Container): void
        }
    }
}

declare namespace java {
    namespace awt {
        namespace event {
            /**
             * A semantic event which indicates that a component-defined action occurred.
             * This high-level event is generated by a component (such as a
             * <code>Button</code>) when
             * the component-specific action occurs (such as being pressed).
             * The event is passed to every <code>ActionListener</code> object
             * that registered to receive such events using the component's
             * <code>addActionListener</code> method.
             * <p>
             * <b>Note:</b> To invoke an <code>ActionEvent</code> on a
             * <code>Button</code> using the keyboard, use the Space bar.
             * <P>
             * The object that implements the <code>ActionListener</code> interface
             * gets this <code>ActionEvent</code> when the event occurs. The listener
             * is therefore spared the details of processing individual mouse movements
             * and mouse clicks, and can instead process a "meaningful" (semantic)
             * event like "button pressed".
             * <p>
             * An unspecified behavior will be caused if the {@code id} parameter
             * of any particular {@code ActionEvent} instance is not
             * in the range from {@code ACTION_FIRST} to {@code ACTION_LAST}.
             * @see ActionListener
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/actionlistener.html">Tutorial: How to Write an Action Listener</a>
             * @author Carl Quinn
             * @since 1.1
             */
            // @ts-ignore
            class ActionEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>ActionEvent</code> object.
                 * <p>
                 * This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * A <code>null</code> <code>command</code> string is legal,
                 * but not recommended.
                 * @param source  The object that originated the event
                 * @param id      An integer that identifies the event.
                 *                      For information on allowable values, see
                 *                      the class description for {#link ActionEvent}
                 * @param command A string that may specify a command (possibly one
                 *                 of several) associated with the event
                 * @throws IllegalArgumentException if <code>source</code> is null
                 * @see #getSource()
                 * @see #getID()
                 * @see #getActionCommand()
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, id: number /*int*/, command: java.lang.String | string)
                /**
                 * Constructs an <code>ActionEvent</code> object with modifier keys.
                 * <p>
                 * This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * A <code>null</code> <code>command</code> string is legal,
                 * but not recommended.
                 * @param source  The object that originated the event
                 * @param id      An integer that identifies the event.
                 *                      For information on allowable values, see
                 *                      the class description for {#link ActionEvent}
                 * @param command A string that may specify a command (possibly one
                 *                 of several) associated with the event
                 * @param modifiers The modifier keys down during event
                 *                   (shift, ctrl, alt, meta).
                 *                   Passing negative parameter is not recommended.
                 *                   Zero value means that no modifiers were passed
                 * @throws IllegalArgumentException if <code>source</code> is null
                 * @see #getSource()
                 * @see #getID()
                 * @see #getActionCommand()
                 * @see #getModifiers()
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, id: number /*int*/, command: java.lang.String | string, modifiers: number /*int*/)
                /**
                 * Constructs an <code>ActionEvent</code> object with the specified
                 * modifier keys and timestamp.
                 * <p>
                 * This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * A <code>null</code> <code>command</code> string is legal,
                 * but not recommended.
                 * @param source    The object that originated the event
                 * @param id      An integer that identifies the event.
                 *                      For information on allowable values, see
                 *                      the class description for {#link ActionEvent}
                 * @param command A string that may specify a command (possibly one
                 *                 of several) associated with the event
                 * @param modifiers The modifier keys down during event
                 *                   (shift, ctrl, alt, meta).
                 *                   Passing negative parameter is not recommended.
                 *                   Zero value means that no modifiers were passed
                 * @param when   A long that gives the time the event occurred.
                 *                Passing negative or zero value
                 *                is not recommended
                 * @throws IllegalArgumentException if <code>source</code> is null
                 * @see #getSource()
                 * @see #getID()
                 * @see #getActionCommand()
                 * @see #getModifiers()
                 * @see #getWhen()
                 * @since 1.4
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, id: number /*int*/, command: java.lang.String | string, when: number /*long*/, modifiers: number /*int*/)
                /**
                 * The shift modifier. An indicator that the shift key was held
                 * down during the event.
                 */
                // @ts-ignore
                public static readonly SHIFT_MASK: number /*int*/
                /**
                 * The control modifier. An indicator that the control key was held
                 * down during the event.
                 */
                // @ts-ignore
                public static readonly CTRL_MASK: number /*int*/
                /**
                 * The meta modifier. An indicator that the meta key was held
                 * down during the event.
                 */
                // @ts-ignore
                public static readonly META_MASK: number /*int*/
                /**
                 * The alt modifier. An indicator that the alt key was held
                 * down during the event.
                 */
                // @ts-ignore
                public static readonly ALT_MASK: number /*int*/
                /**
                 * The first number in the range of ids used for action events.
                 */
                // @ts-ignore
                public static readonly ACTION_FIRST: number /*int*/
                /**
                 * The last number in the range of ids used for action events.
                 */
                // @ts-ignore
                public static readonly ACTION_LAST: number /*int*/
                /**
                 * This event id indicates that a meaningful action occurred.
                 */
                // @ts-ignore
                public static readonly ACTION_PERFORMED: number /*int*/
                /**
                 * Returns the command string associated with this action.
                 * This string allows a "modal" component to specify one of several
                 * commands, depending on its state. For example, a single button might
                 * toggle between "show details" and "hide details". The source object
                 * and the event would be the same in each case, but the command string
                 * would identify the intended action.
                 * <p>
                 * Note that if a <code>null</code> command string was passed
                 * to the constructor for this <code>ActionEvent</code>, this
                 * this method returns <code>null</code>.
                 * @return the string identifying the command for this event
                 */
                // @ts-ignore
                public getActionCommand(): string
                /**
                 * Returns the timestamp of when this event occurred. Because an
                 * ActionEvent is a high-level, semantic event, the timestamp is typically
                 * the same as an underlying InputEvent.
                 * @return this event's timestamp
                 * @since 1.4
                 */
                // @ts-ignore
                public getWhen(): number /*long*/
                /**
                 * Returns the modifier keys held down during this action event.
                 * @return the bitwise-or of the modifier constants
                 */
                // @ts-ignore
                public getModifiers(): number /*int*/
                /**
                 * Returns a parameter string identifying this action event.
                 * This method is useful for event-logging and for debugging.
                 * @return a string identifying the event and its associated command
                 */
                // @ts-ignore
                public paramString(): string
            }
        }
    }
}

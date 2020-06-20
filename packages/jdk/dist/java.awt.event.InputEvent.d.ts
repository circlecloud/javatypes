declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The root event class for all component-level input events.
             * Input events are delivered to listeners before they are
             * processed normally by the source where they originated.
             * This allows listeners and component subclasses to "consume"
             * the event so that the source will not process them in their
             * default manner.  For example, consuming mousePressed events
             * on a Button component will prevent the Button from being
             * activated.
             * @author Carl Quinn
             * @see KeyEvent
             * @see KeyAdapter
             * @see MouseEvent
             * @see MouseAdapter
             * @see MouseMotionAdapter
             * @since 1.1
             */
            // @ts-ignore
            class InputEvent extends java.awt.event.ComponentEvent {
                /**
                 * The Shift key modifier constant.
                 * It is recommended that SHIFT_DOWN_MASK be used instead.
                 */
                // @ts-ignore
                readonly SHIFT_MASK: number /*int*/
                /**
                 * The Control key modifier constant.
                 * It is recommended that CTRL_DOWN_MASK be used instead.
                 */
                // @ts-ignore
                readonly CTRL_MASK: number /*int*/
                /**
                 * The Meta key modifier constant.
                 * It is recommended that META_DOWN_MASK be used instead.
                 */
                // @ts-ignore
                readonly META_MASK: number /*int*/
                /**
                 * The Alt key modifier constant.
                 * It is recommended that ALT_DOWN_MASK be used instead.
                 */
                // @ts-ignore
                readonly ALT_MASK: number /*int*/
                /**
                 * The AltGraph key modifier constant.
                 */
                // @ts-ignore
                readonly ALT_GRAPH_MASK: number /*int*/
                /**
                 * The Mouse Button1 modifier constant.
                 * It is recommended that BUTTON1_DOWN_MASK be used instead.
                 */
                // @ts-ignore
                readonly BUTTON1_MASK: number /*int*/
                /**
                 * The Mouse Button2 modifier constant.
                 * It is recommended that BUTTON2_DOWN_MASK be used instead.
                 * Note that BUTTON2_MASK has the same value as ALT_MASK.
                 */
                // @ts-ignore
                readonly BUTTON2_MASK: number /*int*/
                /**
                 * The Mouse Button3 modifier constant.
                 * It is recommended that BUTTON3_DOWN_MASK be used instead.
                 * Note that BUTTON3_MASK has the same value as META_MASK.
                 */
                // @ts-ignore
                readonly BUTTON3_MASK: number /*int*/
                /**
                 * The Shift key extended modifier constant.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly SHIFT_DOWN_MASK: number /*int*/
                /**
                 * The Control key extended modifier constant.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly CTRL_DOWN_MASK: number /*int*/
                /**
                 * The Meta key extended modifier constant.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly META_DOWN_MASK: number /*int*/
                /**
                 * The Alt key extended modifier constant.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly ALT_DOWN_MASK: number /*int*/
                /**
                 * The Mouse Button1 extended modifier constant.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly BUTTON1_DOWN_MASK: number /*int*/
                /**
                 * The Mouse Button2 extended modifier constant.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly BUTTON2_DOWN_MASK: number /*int*/
                /**
                 * The Mouse Button3 extended modifier constant.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly BUTTON3_DOWN_MASK: number /*int*/
                /**
                 * The AltGraph key extended modifier constant.
                 * @since 1.4
                 */
                // @ts-ignore
                readonly ALT_GRAPH_DOWN_MASK: number /*int*/
                /**
                 * A method to obtain a mask for any existing mouse button.
                 * The returned mask may be used for different purposes. Following are some of them:
                 * <ul>
                 * <li> {@link java.awt.Robot#mousePress(int) mousePress(buttons)} and
                 * {@link java.awt.Robot#mouseRelease(int) mouseRelease(buttons)}
                 * <li> as a {@code modifiers} parameter when creating a new {@link MouseEvent} instance
                 * <li> to check {@link MouseEvent#getModifiersEx() modifiersEx} of existing {@code MouseEvent}
                 * </ul>
                 * @param button is a number to represent a button starting from 1.
                 *  For example,
                 *  <pre>
                 *  int button = InputEvent.getMaskForButton(1);
                 *  </pre>
                 *  will have the same meaning as
                 *  <pre>
                 *  int button = InputEvent.getMaskForButton(MouseEvent.BUTTON1);
                 *  </pre>
                 *  because {#link MouseEvent#BUTTON1 MouseEvent.BUTTON1} equals to 1.
                 *  If a mouse has three enabled buttons(see {@link java.awt.MouseInfo#getNumberOfButtons() MouseInfo.getNumberOfButtons()})
                 *  then the values from the left column passed into the method will return
                 *  corresponding values from the right column:
                 *  <PRE>
                 *     <b>button </b>   <b>returned mask</b>
                 *     {@link MouseEvent#BUTTON1 BUTTON1}  {@link MouseEvent#BUTTON1_DOWN_MASK BUTTON1_DOWN_MASK}
                 *     {@link MouseEvent#BUTTON2 BUTTON2}  {@link MouseEvent#BUTTON2_DOWN_MASK BUTTON2_DOWN_MASK}
                 *     {@link MouseEvent#BUTTON3 BUTTON3}  {@link MouseEvent#BUTTON3_DOWN_MASK BUTTON3_DOWN_MASK}
                 *  </PRE>
                 *  If a mouse has more than three enabled buttons then more values
                 *  are admissible (4, 5, etc.). There is no assigned constants for these extended buttons.
                 *  The button masks for the extra buttons returned by this method have no assigned names like the
                 *  first three button masks.
                 *  <p>
                 *  This method has the following implementation restriction.
                 *  It returns masks for a limited number of buttons only. The maximum number is
                 *  implementation dependent and may vary.
                 *  This limit is defined by the relevant number
                 *  of buttons that may hypothetically exist on the mouse but it is greater than the
                 *  {@link java.awt.MouseInfo#getNumberOfButtons() MouseInfo.getNumberOfButtons()}.
                 *  <p>
                 * @throws IllegalArgumentException if {#code button} is less than zero or greater than the number
                 *          of button masks reserved for buttons
                 * @since 7.0
                 * @see java.awt.MouseInfo#getNumberOfButtons()
                 * @see Toolkit#areExtraMouseButtonsEnabled()
                 * @see MouseEvent#getModifiers()
                 * @see MouseEvent#getModifiersEx()
                 */
                // @ts-ignore
                getMaskForButton(button: number /*int*/): int
                /**
                 * Returns whether or not the Shift modifier is down on this event.
                 */
                // @ts-ignore
                isShiftDown(): boolean
                /**
                 * Returns whether or not the Control modifier is down on this event.
                 */
                // @ts-ignore
                isControlDown(): boolean
                /**
                 * Returns whether or not the Meta modifier is down on this event.
                 */
                // @ts-ignore
                isMetaDown(): boolean
                /**
                 * Returns whether or not the Alt modifier is down on this event.
                 */
                // @ts-ignore
                isAltDown(): boolean
                /**
                 * Returns whether or not the AltGraph modifier is down on this event.
                 */
                // @ts-ignore
                isAltGraphDown(): boolean
                /**
                 * Returns the difference in milliseconds between the timestamp of when this event occurred and
                 * midnight, January 1, 1970 UTC.
                 */
                // @ts-ignore
                getWhen(): long
                /**
                 * Returns the modifier mask for this event.
                 */
                // @ts-ignore
                getModifiers(): int
                /**
                 * Returns the extended modifier mask for this event.
                 * <P>
                 * Extended modifiers are the modifiers that ends with the _DOWN_MASK suffix,
                 * such as ALT_DOWN_MASK, BUTTON1_DOWN_MASK, and others.
                 * <P>
                 * Extended modifiers represent the state of all modal keys,
                 * such as ALT, CTRL, META, and the mouse buttons just after
                 * the event occurred.
                 * <P>
                 * For example, if the user presses <b>button 1</b> followed by
                 * <b>button 2</b>, and then releases them in the same order,
                 * the following sequence of events is generated:
                 * <PRE>
                 * <code>MOUSE_PRESSED</code>:  <code>BUTTON1_DOWN_MASK</code>
                 * <code>MOUSE_PRESSED</code>:  <code>BUTTON1_DOWN_MASK | BUTTON2_DOWN_MASK</code>
                 * <code>MOUSE_RELEASED</code>: <code>BUTTON2_DOWN_MASK</code>
                 * <code>MOUSE_CLICKED</code>:  <code>BUTTON2_DOWN_MASK</code>
                 * <code>MOUSE_RELEASED</code>:
                 * <code>MOUSE_CLICKED</code>:
                 * </PRE>
                 * <P>
                 * It is not recommended to compare the return value of this method
                 * using <code>==</code> because new modifiers can be added in the future.
                 * For example, the appropriate way to check that SHIFT and BUTTON1 are
                 * down, but CTRL is up is demonstrated by the following code:
                 * <PRE>
                 * int onmask = SHIFT_DOWN_MASK | BUTTON1_DOWN_MASK;
                 * int offmask = CTRL_DOWN_MASK;
                 * if ((event.getModifiersEx() &amp; (onmask | offmask)) == onmask) {
                 * ...
                 * }
                 * </PRE>
                 * The above code will work even if new modifiers are added.
                 * @since 1.4
                 */
                // @ts-ignore
                getModifiersEx(): int
                /**
                 * Consumes this event so that it will not be processed
                 * in the default manner by the source which originated it.
                 */
                // @ts-ignore
                consume(): void
                /**
                 * Returns whether or not this event has been consumed.
                 * @see #consume
                 */
                // @ts-ignore
                isConsumed(): boolean
                /**
                 * Returns a String describing the extended modifier keys and
                 * mouse buttons, such as "Shift", "Button1", or "Ctrl+Shift".
                 * These strings can be localized by changing the
                 * <code>awt.properties</code> file.
                 * <p>
                 * Note that passing negative parameter is incorrect,
                 * and will cause the returning an unspecified string.
                 * Zero parameter means that no modifiers were passed and will
                 * cause the returning an empty string.
                 * @param modifiers a modifier mask describing the extended
                 *                 modifier keys and mouse buttons for the event
                 * @return a text description of the combination of extended
                 *          modifier keys and mouse buttons that were held down
                 *          during the event.
                 * @since 1.4
                 */
                // @ts-ignore
                getModifiersExText(modifiers: number /*int*/): java.lang.String
            }
        }
    }
}

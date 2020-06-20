declare namespace java {
    namespace awt {
        /**
         * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
         * available only for backwards compatibility.  It has been replaced
         * by the <code>AWTEvent</code> class and its subclasses.
         * <p>
         * <code>Event</code> is a platform-independent class that
         * encapsulates events from the platform's Graphical User
         * Interface in the Java&nbsp;1.0 event model. In Java&nbsp;1.1
         * and later versions, the <code>Event</code> class is maintained
         * only for backwards compatibility. The information in this
         * class description is provided to assist programmers in
         * converting Java&nbsp;1.0 programs to the new event model.
         * <p>
         * In the Java&nbsp;1.0 event model, an event contains an
         * {@link Event#id} field
         * that indicates what type of event it is and which other
         * <code>Event</code> variables are relevant for the event.
         * <p>
         * For keyboard events, {@link Event#key}
         * contains a value indicating which key was activated, and
         * {@link Event#modifiers} contains the
         * modifiers for that event.  For the KEY_PRESS and KEY_RELEASE
         * event ids, the value of <code>key</code> is the unicode
         * character code for the key. For KEY_ACTION and
         * KEY_ACTION_RELEASE, the value of <code>key</code> is
         * one of the defined action-key identifiers in the
         * <code>Event</code> class (<code>PGUP</code>,
         * <code>PGDN</code>, <code>F1</code>, <code>F2</code>, etc).
         * @author Sami Shaio
         * @since JDK1.0
         */
        // @ts-ignore
        class Event extends java.lang.Object implements java.io.Serializable {
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Creates an instance of <code>Event</code> with the specified target
             * component, time stamp, event type, <i>x</i> and <i>y</i>
             * coordinates, keyboard key, state of the modifier keys, and
             * argument.
             * @param target     the target component.
             * @param when       the time stamp.
             * @param id         the event type.
             * @param x          the <i>x</i> coordinate.
             * @param y          the <i>y</i> coordinate.
             * @param key        the key pressed in a keyboard event.
             * @param modifiers  the state of the modifier keys.
             * @param arg        the specified argument.
             */
            // @ts-ignore
            constructor(target: any, when: number /*long*/, id: number /*int*/, x: number /*int*/, y: number /*int*/, key: number /*int*/, modifiers: number /*int*/, arg: any)
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Creates an instance of <code>Event</code>, with the specified target
             * component, time stamp, event type, <i>x</i> and <i>y</i>
             * coordinates, keyboard key, state of the modifier keys, and an
             * argument set to <code>null</code>.
             * @param target     the target component.
             * @param when       the time stamp.
             * @param id         the event type.
             * @param x          the <i>x</i> coordinate.
             * @param y          the <i>y</i> coordinate.
             * @param key        the key pressed in a keyboard event.
             * @param modifiers  the state of the modifier keys.
             */
            // @ts-ignore
            constructor(target: any, when: number /*long*/, id: number /*int*/, x: number /*int*/, y: number /*int*/, key: number /*int*/, modifiers: number /*int*/)
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Creates an instance of <code>Event</code> with the specified
             * target component, event type, and argument.
             * @param target     the target component.
             * @param id         the event type.
             * @param arg        the specified argument.
             */
            // @ts-ignore
            constructor(target: any, id: number /*int*/, arg: any)
            /**
             * This flag indicates that the Shift key was down when the event
             * occurred.
             */
            // @ts-ignore
            readonly SHIFT_MASK: number /*int*/
            /**
             * This flag indicates that the Control key was down when the event
             * occurred.
             */
            // @ts-ignore
            readonly CTRL_MASK: number /*int*/
            /**
             * This flag indicates that the Meta key was down when the event
             * occurred. For mouse events, this flag indicates that the right
             * button was pressed or released.
             */
            // @ts-ignore
            readonly META_MASK: number /*int*/
            /**
             * This flag indicates that the Alt key was down when
             * the event occurred. For mouse events, this flag indicates that the
             * middle mouse button was pressed or released.
             */
            // @ts-ignore
            readonly ALT_MASK: number /*int*/
            /**
             * The Home key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly HOME: number /*int*/
            /**
             * The End key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly END: number /*int*/
            /**
             * The Page Up key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly PGUP: number /*int*/
            /**
             * The Page Down key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly PGDN: number /*int*/
            /**
             * The Up Arrow key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly UP: number /*int*/
            /**
             * The Down Arrow key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly DOWN: number /*int*/
            /**
             * The Left Arrow key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly LEFT: number /*int*/
            /**
             * The Right Arrow key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly RIGHT: number /*int*/
            /**
             * The F1 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F1: number /*int*/
            /**
             * The F2 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F2: number /*int*/
            /**
             * The F3 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F3: number /*int*/
            /**
             * The F4 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F4: number /*int*/
            /**
             * The F5 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F5: number /*int*/
            /**
             * The F6 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F6: number /*int*/
            /**
             * The F7 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F7: number /*int*/
            /**
             * The F8 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F8: number /*int*/
            /**
             * The F9 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F9: number /*int*/
            /**
             * The F10 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F10: number /*int*/
            /**
             * The F11 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F11: number /*int*/
            /**
             * The F12 function key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly F12: number /*int*/
            /**
             * The Print Screen key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly PRINT_SCREEN: number /*int*/
            /**
             * The Scroll Lock key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly SCROLL_LOCK: number /*int*/
            /**
             * The Caps Lock key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly CAPS_LOCK: number /*int*/
            /**
             * The Num Lock key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly NUM_LOCK: number /*int*/
            /**
             * The Pause key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly PAUSE: number /*int*/
            /**
             * The Insert key, a non-ASCII action key.
             */
            // @ts-ignore
            readonly INSERT: number /*int*/
            /**
             * The Enter key.
             */
            // @ts-ignore
            readonly ENTER: number /*int*/
            /**
             * The BackSpace key.
             */
            // @ts-ignore
            readonly BACK_SPACE: number /*int*/
            /**
             * The Tab key.
             */
            // @ts-ignore
            readonly TAB: number /*int*/
            /**
             * The Escape key.
             */
            // @ts-ignore
            readonly ESCAPE: number /*int*/
            /**
             * The Delete key.
             */
            // @ts-ignore
            readonly DELETE: number /*int*/
            /**
             * The user has asked the window manager to kill the window.
             */
            // @ts-ignore
            readonly WINDOW_DESTROY: number /*int*/
            /**
             * The user has asked the window manager to expose the window.
             */
            // @ts-ignore
            readonly WINDOW_EXPOSE: number /*int*/
            /**
             * The user has asked the window manager to iconify the window.
             */
            // @ts-ignore
            readonly WINDOW_ICONIFY: number /*int*/
            /**
             * The user has asked the window manager to de-iconify the window.
             */
            // @ts-ignore
            readonly WINDOW_DEICONIFY: number /*int*/
            /**
             * The user has asked the window manager to move the window.
             */
            // @ts-ignore
            readonly WINDOW_MOVED: number /*int*/
            /**
             * The user has pressed a normal key.
             */
            // @ts-ignore
            readonly KEY_PRESS: number /*int*/
            /**
             * The user has released a normal key.
             */
            // @ts-ignore
            readonly KEY_RELEASE: number /*int*/
            /**
             * The user has pressed a non-ASCII <em>action</em> key.
             * The <code>key</code> field contains a value that indicates
             * that the event occurred on one of the action keys, which
             * comprise the 12 function keys, the arrow (cursor) keys,
             * Page Up, Page Down, Home, End, Print Screen, Scroll Lock,
             * Caps Lock, Num Lock, Pause, and Insert.
             */
            // @ts-ignore
            readonly KEY_ACTION: number /*int*/
            /**
             * The user has released a non-ASCII <em>action</em> key.
             * The <code>key</code> field contains a value that indicates
             * that the event occurred on one of the action keys, which
             * comprise the 12 function keys, the arrow (cursor) keys,
             * Page Up, Page Down, Home, End, Print Screen, Scroll Lock,
             * Caps Lock, Num Lock, Pause, and Insert.
             */
            // @ts-ignore
            readonly KEY_ACTION_RELEASE: number /*int*/
            /**
             * The user has pressed the mouse button. The <code>ALT_MASK</code>
             * flag indicates that the middle button has been pressed.
             * The <code>META_MASK</code>flag indicates that the
             * right button has been pressed.
             * @see java.awt.Event#ALT_MASK
             * @see java.awt.Event#META_MASK
             */
            // @ts-ignore
            readonly MOUSE_DOWN: number /*int*/
            /**
             * The user has released the mouse button. The <code>ALT_MASK</code>
             * flag indicates that the middle button has been released.
             * The <code>META_MASK</code>flag indicates that the
             * right button has been released.
             * @see java.awt.Event#ALT_MASK
             * @see java.awt.Event#META_MASK
             */
            // @ts-ignore
            readonly MOUSE_UP: number /*int*/
            /**
             * The mouse has moved with no button pressed.
             */
            // @ts-ignore
            readonly MOUSE_MOVE: number /*int*/
            /**
             * The mouse has entered a component.
             */
            // @ts-ignore
            readonly MOUSE_ENTER: number /*int*/
            /**
             * The mouse has exited a component.
             */
            // @ts-ignore
            readonly MOUSE_EXIT: number /*int*/
            /**
             * The user has moved the mouse with a button pressed. The
             * <code>ALT_MASK</code> flag indicates that the middle
             * button is being pressed. The <code>META_MASK</code> flag indicates
             * that the right button is being pressed.
             * @see java.awt.Event#ALT_MASK
             * @see java.awt.Event#META_MASK
             */
            // @ts-ignore
            readonly MOUSE_DRAG: number /*int*/
            /**
             * The user has activated the <em>line up</em>
             * area of a scroll bar.
             */
            // @ts-ignore
            readonly SCROLL_LINE_UP: number /*int*/
            /**
             * The user has activated the <em>line down</em>
             * area of a scroll bar.
             */
            // @ts-ignore
            readonly SCROLL_LINE_DOWN: number /*int*/
            /**
             * The user has activated the <em>page up</em>
             * area of a scroll bar.
             */
            // @ts-ignore
            readonly SCROLL_PAGE_UP: number /*int*/
            /**
             * The user has activated the <em>page down</em>
             * area of a scroll bar.
             */
            // @ts-ignore
            readonly SCROLL_PAGE_DOWN: number /*int*/
            /**
             * The user has moved the bubble (thumb) in a scroll bar,
             * moving to an "absolute" position, rather than to
             * an offset from the last position.
             */
            // @ts-ignore
            readonly SCROLL_ABSOLUTE: number /*int*/
            /**
             * The scroll begin event.
             */
            // @ts-ignore
            readonly SCROLL_BEGIN: number /*int*/
            /**
             * The scroll end event.
             */
            // @ts-ignore
            readonly SCROLL_END: number /*int*/
            /**
             * An item in a list has been selected.
             */
            // @ts-ignore
            readonly LIST_SELECT: number /*int*/
            /**
             * An item in a list has been deselected.
             */
            // @ts-ignore
            readonly LIST_DESELECT: number /*int*/
            /**
             * This event indicates that the user wants some action to occur.
             */
            // @ts-ignore
            readonly ACTION_EVENT: number /*int*/
            /**
             * A file loading event.
             */
            // @ts-ignore
            readonly LOAD_FILE: number /*int*/
            /**
             * A file saving event.
             */
            // @ts-ignore
            readonly SAVE_FILE: number /*int*/
            /**
             * A component gained the focus.
             */
            // @ts-ignore
            readonly GOT_FOCUS: number /*int*/
            /**
             * A component lost the focus.
             */
            // @ts-ignore
            readonly LOST_FOCUS: number /*int*/
            /**
             * The target component. This indicates the component over which the
             * event occurred or with which the event is associated.
             * This object has been replaced by AWTEvent.getSource()
             * @serial 
             * @see java.awt.AWTEvent#getSource()
             */
            // @ts-ignore
            target: any
            /**
             * The time stamp.
             * Replaced by InputEvent.getWhen().
             * @serial 
             * @see java.awt.event.InputEvent#getWhen()
             */
            // @ts-ignore
            when: number /*long*/
            /**
             * Indicates which type of event the event is, and which
             * other <code>Event</code> variables are relevant for the event.
             * This has been replaced by AWTEvent.getID()
             * @serial 
             * @see java.awt.AWTEvent#getID()
             */
            // @ts-ignore
            id: number /*int*/
            /**
             * The <i>x</i> coordinate of the event.
             * Replaced by MouseEvent.getX()
             * @serial 
             * @see java.awt.event.MouseEvent#getX()
             */
            // @ts-ignore
            x: number /*int*/
            /**
             * The <i>y</i> coordinate of the event.
             * Replaced by MouseEvent.getY()
             * @serial 
             * @see java.awt.event.MouseEvent#getY()
             */
            // @ts-ignore
            y: number /*int*/
            /**
             * The key code of the key that was pressed in a keyboard event.
             * This has been replaced by KeyEvent.getKeyCode()
             * @serial 
             * @see java.awt.event.KeyEvent#getKeyCode()
             */
            // @ts-ignore
            key: number /*int*/
            /**
             * The state of the modifier keys.
             * This is replaced with InputEvent.getModifiers()
             * In java 1.1 MouseEvent and KeyEvent are subclasses
             * of InputEvent.
             * @serial 
             * @see java.awt.event.InputEvent#getModifiers()
             */
            // @ts-ignore
            modifiers: number /*int*/
            /**
             * For <code>MOUSE_DOWN</code> events, this field indicates the
             * number of consecutive clicks. For other events, its value is
             * <code>0</code>.
             * This field has been replaced by MouseEvent.getClickCount().
             * @serial 
             * @see java.awt.event.MouseEvent#getClickCount()
             */
            // @ts-ignore
            clickCount: number /*int*/
            /**
             * An arbitrary argument of the event. The value of this field
             * depends on the type of event.
             * <code>arg</code> has been replaced by event specific property.
             * @serial 
             */
            // @ts-ignore
            arg: any
            /**
             * The next event. This field is set when putting events into a
             * linked list.
             * This has been replaced by EventQueue.
             * @serial 
             * @see java.awt.EventQueue
             */
            // @ts-ignore
            evt: java.awt.Event
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Translates this event so that its <i>x</i> and <i>y</i>
             * coordinates are increased by <i>dx</i> and <i>dy</i>,
             * respectively.
             * <p>
             * This method translates an event relative to the given component.
             * This involves, at a minimum, translating the coordinates into the
             * local coordinate system of the given component. It may also involve
             * translating a region in the case of an expose event.
             * @param dx     the distance to translate the <i>x</i> coordinate.
             * @param dy     the distance to translate the <i>y</i> coordinate.
             */
            // @ts-ignore
            translate(dx: number /*int*/, dy: number /*int*/): void
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Checks if the Shift key is down.
             * @return <code>true</code> if the key is down;
             *             <code>false</code> otherwise.
             * @see java.awt.Event#modifiers
             * @see java.awt.Event#controlDown
             * @see java.awt.Event#metaDown
             */
            // @ts-ignore
            shiftDown(): boolean
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Checks if the Control key is down.
             * @return <code>true</code> if the key is down;
             *             <code>false</code> otherwise.
             * @see java.awt.Event#modifiers
             * @see java.awt.Event#shiftDown
             * @see java.awt.Event#metaDown
             */
            // @ts-ignore
            controlDown(): boolean
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Checks if the Meta key is down.
             * @return <code>true</code> if the key is down;
             *             <code>false</code> otherwise.
             * @see java.awt.Event#modifiers
             * @see java.awt.Event#shiftDown
             * @see java.awt.Event#controlDown
             */
            // @ts-ignore
            metaDown(): boolean
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Returns a string representing the state of this <code>Event</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             * @return the parameter string of this event
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * <b>NOTE:</b> The <code>Event</code> class is obsolete and is
             * available only for backwards compatibility.  It has been replaced
             * by the <code>AWTEvent</code> class and its subclasses.
             * <p>
             * Returns a representation of this event's values as a string.
             * @return a string that represents the event and the values
             *                  of its member fields.
             * @see java.awt.Event#paramString
             * @since JDK1.1
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}

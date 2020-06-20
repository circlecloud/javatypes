declare namespace java {
    namespace awt {
        /**
         * The <code>TextComponent</code> class is the superclass of
         * any component that allows the editing of some text.
         * <p>
         * A text component embodies a string of text.  The
         * <code>TextComponent</code> class defines a set of methods
         * that determine whether or not this text is editable. If the
         * component is editable, it defines another set of methods
         * that supports a text insertion caret.
         * <p>
         * In addition, the class defines methods that are used
         * to maintain a current <em>selection</em> from the text.
         * The text selection, a substring of the component's text,
         * is the target of editing operations. It is also referred
         * to as the <em>selected text</em>.
         * @author Sami Shaio
         * @author Arthur van Hoff
         * @since JDK1.0
         */
        // @ts-ignore
        class TextComponent extends java.awt.Component implements javax.accessibility.Accessible {
            // @ts-ignore
            textListener: java.awt.event.TextListener
            /**
             * Enables or disables input method support for this text component. If input
             * method support is enabled and the text component also processes key events,
             * incoming events are offered to the current input method and will only be
             * processed by the component or dispatched to its listeners if the input method
             * does not consume them. Whether and how input method support for this text
             * component is enabled or disabled by default is implementation dependent.
             * @param enable true to enable, false to disable
             * @see #processKeyEvent
             * @since 1.2
             */
            // @ts-ignore
            enableInputMethods(enable: boolean): void
            // @ts-ignore
            getInputMethodRequests(): java.awt.im.InputMethodRequests
            /**
             * Makes this Component displayable by connecting it to a
             * native screen resource.
             * This method is called internally by the toolkit and should
             * not be called directly by programs.
             * @see java.awt.TextComponent#removeNotify
             */
            // @ts-ignore
            addNotify(): void
            /**
             * Removes the <code>TextComponent</code>'s peer.
             * The peer allows us to modify the appearance of the
             * <code>TextComponent</code> without changing its
             * functionality.
             */
            // @ts-ignore
            removeNotify(): void
            /**
             * Sets the text that is presented by this
             * text component to be the specified text.
             * @param t   the new text;
             *                   if this parameter is <code>null</code> then
             *                   the text is set to the empty string ""
             * @see java.awt.TextComponent#getText
             */
            // @ts-ignore
            setText(t: string): void
            /**
             * Returns the text that is presented by this text component.
             * By default, this is an empty string.
             * @return the value of this <code>TextComponent</code>
             * @see java.awt.TextComponent#setText
             */
            // @ts-ignore
            getText(): java.lang.String
            /**
             * Returns the selected text from the text that is
             * presented by this text component.
             * @return the selected text of this text component
             * @see java.awt.TextComponent#select
             */
            // @ts-ignore
            getSelectedText(): java.lang.String
            /**
             * Indicates whether or not this text component is editable.
             * @return <code>true</code> if this text component is
             *                   editable; <code>false</code> otherwise.
             * @see java.awt.TextComponent#setEditable
             * @since JDK1.0
             */
            // @ts-ignore
            isEditable(): boolean
            /**
             * Sets the flag that determines whether or not this
             * text component is editable.
             * <p>
             * If the flag is set to <code>true</code>, this text component
             * becomes user editable. If the flag is set to <code>false</code>,
             * the user cannot change the text of this text component.
             * By default, non-editable text components have a background color
             * of SystemColor.control.  This default can be overridden by
             * calling setBackground.
             * @param b   a flag indicating whether this text component
             *                       is user editable.
             * @see java.awt.TextComponent#isEditable
             * @since JDK1.0
             */
            // @ts-ignore
            setEditable(b: boolean): void
            /**
             * Gets the background color of this text component.
             * By default, non-editable text components have a background color
             * of SystemColor.control.  This default can be overridden by
             * calling setBackground.
             * @return This text component's background color.
             *          If this text component does not have a background color,
             *          the background color of its parent is returned.
             * @see #setBackground(Color)
             * @since JDK1.0
             */
            // @ts-ignore
            getBackground(): java.awt.Color
            /**
             * Sets the background color of this text component.
             * @param c The color to become this text component's color.
             *         If this parameter is null then this text component
             *         will inherit the background color of its parent.
             * @see #getBackground()
             * @since JDK1.0
             */
            // @ts-ignore
            setBackground(c: java.awt.Color): void
            /**
             * Gets the start position of the selected text in
             * this text component.
             * @return the start position of the selected text
             * @see java.awt.TextComponent#setSelectionStart
             * @see java.awt.TextComponent#getSelectionEnd
             */
            // @ts-ignore
            getSelectionStart(): int
            /**
             * Sets the selection start for this text component to
             * the specified position. The new start point is constrained
             * to be at or before the current selection end. It also
             * cannot be set to less than zero, the beginning of the
             * component's text.
             * If the caller supplies a value for <code>selectionStart</code>
             * that is out of bounds, the method enforces these constraints
             * silently, and without failure.
             * @param selectionStart   the start position of the
             *                         selected text
             * @see java.awt.TextComponent#getSelectionStart
             * @see java.awt.TextComponent#setSelectionEnd
             * @since JDK1.1
             */
            // @ts-ignore
            setSelectionStart(selectionStart: number /*int*/): void
            /**
             * Gets the end position of the selected text in
             * this text component.
             * @return the end position of the selected text
             * @see java.awt.TextComponent#setSelectionEnd
             * @see java.awt.TextComponent#getSelectionStart
             */
            // @ts-ignore
            getSelectionEnd(): int
            /**
             * Sets the selection end for this text component to
             * the specified position. The new end point is constrained
             * to be at or after the current selection start. It also
             * cannot be set beyond the end of the component's text.
             * If the caller supplies a value for <code>selectionEnd</code>
             * that is out of bounds, the method enforces these constraints
             * silently, and without failure.
             * @param selectionEnd   the end position of the
             *                         selected text
             * @see java.awt.TextComponent#getSelectionEnd
             * @see java.awt.TextComponent#setSelectionStart
             * @since JDK1.1
             */
            // @ts-ignore
            setSelectionEnd(selectionEnd: number /*int*/): void
            /**
             * Selects the text between the specified start and end positions.
             * <p>
             * This method sets the start and end positions of the
             * selected text, enforcing the restriction that the start position
             * must be greater than or equal to zero.  The end position must be
             * greater than or equal to the start position, and less than or
             * equal to the length of the text component's text.  The
             * character positions are indexed starting with zero.
             * The length of the selection is
             * <code>endPosition</code> - <code>startPosition</code>, so the
             * character at <code>endPosition</code> is not selected.
             * If the start and end positions of the selected text are equal,
             * all text is deselected.
             * <p>
             * If the caller supplies values that are inconsistent or out of
             * bounds, the method enforces these constraints silently, and
             * without failure. Specifically, if the start position or end
             * position is greater than the length of the text, it is reset to
             * equal the text length. If the start position is less than zero,
             * it is reset to zero, and if the end position is less than the
             * start position, it is reset to the start position.
             * @param selectionStart the zero-based index of the first
             *                        character (<code>char</code> value) to be selected
             * @param selectionEnd the zero-based end position of the
             *                        text to be selected; the character (<code>char</code> value) at
             *                        <code>selectionEnd</code> is not selected
             * @see java.awt.TextComponent#setSelectionStart
             * @see java.awt.TextComponent#setSelectionEnd
             * @see java.awt.TextComponent#selectAll
             */
            // @ts-ignore
            select(selectionStart: number /*int*/, selectionEnd: number /*int*/): void
            /**
             * Selects all the text in this text component.
             * @see java.awt.TextComponent#select
             */
            // @ts-ignore
            selectAll(): void
            /**
             * Sets the position of the text insertion caret.
             * The caret position is constrained to be between 0
             * and the last character of the text, inclusive.
             * If the passed-in value is greater than this range,
             * the value is set to the last character (or 0 if
             * the <code>TextComponent</code> contains no text)
             * and no error is returned.  If the passed-in value is
             * less than 0, an <code>IllegalArgumentException</code>
             * is thrown.
             * @param position the position of the text insertion caret
             * @exception IllegalArgumentException if <code>position</code>
             *                is less than zero
             * @since JDK1.1
             */
            // @ts-ignore
            setCaretPosition(position: number /*int*/): void
            /**
             * Returns the position of the text insertion caret.
             * The caret position is constrained to be between 0
             * and the last character of the text, inclusive.
             * If the text or caret have not been set, the default
             * caret position is 0.
             * @return the position of the text insertion caret
             * @see #setCaretPosition(int)
             * @since JDK1.1
             */
            // @ts-ignore
            getCaretPosition(): int
            /**
             * Adds the specified text event listener to receive text events
             * from this text component.
             * If <code>l</code> is <code>null</code>, no exception is
             * thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l the text event listener
             * @see #removeTextListener
             * @see #getTextListeners
             * @see java.awt.event.TextListener
             */
            // @ts-ignore
            addTextListener(l: java.awt.event.TextListener): void
            /**
             * Removes the specified text event listener so that it no longer
             * receives text events from this text component
             * If <code>l</code> is <code>null</code>, no exception is
             * thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l     the text listener
             * @see #addTextListener
             * @see #getTextListeners
             * @see java.awt.event.TextListener
             * @since JDK1.1
             */
            // @ts-ignore
            removeTextListener(l: java.awt.event.TextListener): void
            /**
             * Returns an array of all the text listeners
             * registered on this text component.
             * @return all of this text component's <code>TextListener</code>s
             *          or an empty array if no text
             *          listeners are currently registered
             * @see #addTextListener
             * @see #removeTextListener
             * @since 1.4
             */
            // @ts-ignore
            getTextListeners(): java.awt.event.TextListener[]
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>TextComponent</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>TextComponent</code> <code>t</code>
             * for its text listeners with the following code:
             * <pre>TextListener[] tls = (TextListener[])(t.getListeners(TextListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             * @param listenerType the type of listeners requested; this parameter
             *           should specify an interface that descends from
             *           <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s on this text component,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code>
             *           doesn't specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @see #getTextListeners
             * @since 1.3
             */
            // @ts-ignore
            getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Processes events on this text component. If the event is a
             * <code>TextEvent</code>, it invokes the <code>processTextEvent</code>
             * method else it invokes its superclass's <code>processEvent</code>.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the event
             */
            // @ts-ignore
            processEvent(e: java.awt.AWTEvent): void
            /**
             * Processes text events occurring on this text component by
             * dispatching them to any registered <code>TextListener</code> objects.
             * <p>
             * NOTE: This method will not be called unless text events
             * are enabled for this component. This happens when one of the
             * following occurs:
             * <ul>
             * <li>A <code>TextListener</code> object is registered
             * via <code>addTextListener</code>
             * <li>Text events are enabled via <code>enableEvents</code>
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the text event
             * @see Component#enableEvents
             */
            // @ts-ignore
            processTextEvent(e: java.awt.event.TextEvent): void
            /**
             * Returns a string representing the state of this
             * <code>TextComponent</code>. This
             * method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             * @return the parameter string of this text component
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this TextComponent.
             * For text components, the AccessibleContext takes the form of an
             * AccessibleAWTTextComponent.
             * A new AccessibleAWTTextComponent instance is created if necessary.
             * @return an AccessibleAWTTextComponent that serves as the
             *          AccessibleContext of this TextComponent
             * @since 1.3
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}

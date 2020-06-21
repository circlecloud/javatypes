declare namespace java {
    namespace awt {
        /**
         * A check box is a graphical component that can be in either an
         * "on" (<code>true</code>) or "off" (<code>false</code>) state.
         * Clicking on a check box changes its state from
         * "on" to "off," or from "off" to "on."
         * <p>
         * The following code example creates a set of check boxes in
         * a grid layout:
         * <hr><blockquote><pre>
         * setLayout(new GridLayout(3, 1));
         * add(new Checkbox("one", null, true));
         * add(new Checkbox("two"));
         * add(new Checkbox("three"));
         * </pre></blockquote><hr>
         * <p>
         * This image depicts the check boxes and grid layout
         * created by this code example:
         * <p>
         * <img src="doc-files/Checkbox-1.gif" alt="The following context describes the graphic."
         * style="float:center; margin: 7px 10px;">
         * <p>
         * The button labeled <code>one</code> is in the "on" state, and the
         * other two are in the "off" state. In this example, which uses the
         * <code>GridLayout</code> class, the states of the three check
         * boxes are set independently.
         * <p>
         * Alternatively, several check boxes can be grouped together under
         * the control of a single object, using the
         * <code>CheckboxGroup</code> class.
         * In a check box group, at most one button can be in the "on"
         * state at any given time. Clicking on a check box to turn it on
         * forces any other check box in the same group that is on
         * into the "off" state.
         * @author Sami Shaio
         * @see java.awt.GridLayout
         * @see java.awt.CheckboxGroup
         * @since JDK1.0
         */
        // @ts-ignore
        class Checkbox extends java.awt.Component implements java.awt.ItemSelectable, javax.accessibility.Accessible {
            /**
             * Creates a check box with an empty string for its label.
             * The state of this check box is set to "off," and it is not
             * part of any check box group.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless()
             *  returns true
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a check box with the specified label.  The state
             * of this check box is set to "off," and it is not part of
             * any check box group.
             * @param label   a string label for this check box,
             *                         or <code>null</code> for no label.
             * @exception HeadlessException if
             *       <code>GraphicsEnvironment.isHeadless</code>
             *       returns <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor(label: java.lang.String | string)
            /**
             * Creates a check box with the specified label
             * and sets the specified state.
             * This check box is not part of any check box group.
             * @param label   a string label for this check box,
             *                         or <code>null</code> for no label
             * @param state    the initial state of this check box
             * @exception HeadlessException if
             *      <code>GraphicsEnvironment.isHeadless</code>
             *      returns <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor(label: java.lang.String | string, state: boolean)
            /**
             * Constructs a Checkbox with the specified label, set to the
             * specified state, and in the specified check box group.
             * @param label   a string label for this check box,
             *                         or <code>null</code> for no label.
             * @param state   the initial state of this check box.
             * @param group   a check box group for this check box,
             *                            or <code>null</code> for no group.
             * @exception HeadlessException if
             *      <code>GraphicsEnvironment.isHeadless</code>
             *      returns <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(label: java.lang.String | string, state: boolean, group: java.awt.CheckboxGroup)
            /**
             * Creates a check box with the specified label, in the specified
             * check box group, and set to the specified state.
             * @param label   a string label for this check box,
             *                         or <code>null</code> for no label.
             * @param group   a check box group for this check box,
             *                            or <code>null</code> for no group.
             * @param state   the initial state of this check box.
             * @exception HeadlessException if
             *     <code>GraphicsEnvironment.isHeadless</code>
             *     returns <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(label: java.lang.String | string, group: java.awt.CheckboxGroup, state: boolean)
            /**
             * Creates the peer of the Checkbox. The peer allows you to change the
             * look of the Checkbox without changing its functionality.
             * @see java.awt.Toolkit#createCheckbox(java.awt.Checkbox)
             * @see java.awt.Component#getToolkit()
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Gets the label of this check box.
             * @return the label of this check box, or <code>null</code>
             *                   if this check box has no label.
             * @see #setLabel(String)
             */
            // @ts-ignore
            public getLabel(): string
            /**
             * Sets this check box's label to be the string argument.
             * @param label   a string to set as the new label, or
             *                         <code>null</code> for no label.
             * @see #getLabel
             */
            // @ts-ignore
            public setLabel(label: java.lang.String | string): void
            /**
             * Determines whether this check box is in the "on" or "off" state.
             * The boolean value <code>true</code> indicates the "on" state,
             * and <code>false</code> indicates the "off" state.
             * @return the state of this check box, as a boolean value
             * @see #setState
             */
            // @ts-ignore
            public getState(): boolean
            /**
             * Sets the state of this check box to the specified state.
             * The boolean value <code>true</code> indicates the "on" state,
             * and <code>false</code> indicates the "off" state.
             * <p>Note that this method should be primarily used to
             * initialize the state of the checkbox.  Programmatically
             * setting the state of the checkbox will <i>not</i> trigger
             * an <code>ItemEvent</code>.  The only way to trigger an
             * <code>ItemEvent</code> is by user interaction.
             * @param state   the boolean state of the check box
             * @see #getState
             */
            // @ts-ignore
            public setState(state: boolean): void
            /**
             * Returns an array (length 1) containing the checkbox
             * label or null if the checkbox is not selected.
             * @see ItemSelectable
             */
            // @ts-ignore
            public getSelectedObjects(): any[]
            /**
             * Determines this check box's group.
             * @return this check box's group, or <code>null</code>
             *                if the check box is not part of a check box group.
             * @see #setCheckboxGroup(CheckboxGroup)
             */
            // @ts-ignore
            public getCheckboxGroup(): java.awt.CheckboxGroup
            /**
             * Sets this check box's group to the specified check box group.
             * If this check box is already in a different check box group,
             * it is first taken out of that group.
             * <p>
             * If the state of this check box is <code>true</code> and the new
             * group already has a check box selected, this check box's state
             * is changed to <code>false</code>.  If the state of this check
             * box is <code>true</code> and the new group has no check box
             * selected, this check box becomes the selected checkbox for
             * the new group and its state is <code>true</code>.
             * @param g   the new check box group, or <code>null</code>
             *                 to remove this check box from any check box group
             * @see #getCheckboxGroup
             */
            // @ts-ignore
            public setCheckboxGroup(g: java.awt.CheckboxGroup): void
            /**
             * Adds the specified item listener to receive item events from
             * this check box.  Item events are sent to listeners in response
             * to user input, but not in response to calls to setState().
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l    the item listener
             * @see #removeItemListener
             * @see #getItemListeners
             * @see #setState
             * @see java.awt.event.ItemEvent
             * @see java.awt.event.ItemListener
             * @since JDK1.1
             */
            // @ts-ignore
            public addItemListener(l: java.awt.event.ItemListener): void
            /**
             * Removes the specified item listener so that the item listener
             * no longer receives item events from this check box.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l    the item listener
             * @see #addItemListener
             * @see #getItemListeners
             * @see java.awt.event.ItemEvent
             * @see java.awt.event.ItemListener
             * @since JDK1.1
             */
            // @ts-ignore
            public removeItemListener(l: java.awt.event.ItemListener): void
            /**
             * Returns an array of all the item listeners
             * registered on this checkbox.
             * @return all of this checkbox's <code>ItemListener</code>s
             *          or an empty array if no item
             *          listeners are currently registered
             * @see #addItemListener
             * @see #removeItemListener
             * @see java.awt.event.ItemEvent
             * @see java.awt.event.ItemListener
             * @since 1.4
             */
            // @ts-ignore
            public getItemListeners(): java.awt.event.ItemListener[]
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>Checkbox</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>Checkbox</code> <code>c</code>
             * for its item listeners with the following code:
             * <pre>ItemListener[] ils = (ItemListener[])(c.getListeners(ItemListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             * @param listenerType the type of listeners requested; this parameter
             *           should specify an interface that descends from
             *           <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s on this checkbox,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code>
             *           doesn't specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @see #getItemListeners
             * @since 1.3
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Processes events on this check box.
             * If the event is an instance of <code>ItemEvent</code>,
             * this method invokes the <code>processItemEvent</code> method.
             * Otherwise, it calls its superclass's <code>processEvent</code> method.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the event
             * @see java.awt.event.ItemEvent
             * @see #processItemEvent
             * @since JDK1.1
             */
            // @ts-ignore
            processEvent(e: java.awt.AWTEvent): void
            /**
             * Processes item events occurring on this check box by
             * dispatching them to any registered
             * <code>ItemListener</code> objects.
             * <p>
             * This method is not called unless item events are
             * enabled for this component. Item events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>ItemListener</code> object is registered
             * via <code>addItemListener</code>.
             * <li>Item events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the item event
             * @see java.awt.event.ItemEvent
             * @see java.awt.event.ItemListener
             * @see #addItemListener
             * @see java.awt.Component#enableEvents
             * @since JDK1.1
             */
            // @ts-ignore
            processItemEvent(e: java.awt.event.ItemEvent): void
            /**
             * Returns a string representing the state of this <code>Checkbox</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             * @return the parameter string of this check box
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this Checkbox.
             * For checkboxes, the AccessibleContext takes the form of an
             * AccessibleAWTCheckbox.
             * A new AccessibleAWTCheckbox is created if necessary.
             * @return an AccessibleAWTCheckbox that serves as the
             *          AccessibleContext of this Checkbox
             * @since 1.3
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}

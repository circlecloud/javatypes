declare namespace javax {
    namespace swing {
        /**
         * A component that visually displays the progress of some task.  As the task
         * progresses towards completion, the progress bar displays the
         * task's percentage of completion.
         * This percentage is typically represented visually by a rectangle which
         * starts out empty and gradually becomes filled in as the task progresses.
         * In addition, the progress bar can display a textual representation of this
         * percentage.
         * <p>
         * {@code JProgressBar} uses a {@code BoundedRangeModel} as its data model,
         * with the {@code value} property representing the "current" state of the task,
         * and the {@code minimum} and {@code maximum} properties representing the
         * beginning and end points, respectively.
         * <p>
         * To indicate that a task of unknown length is executing,
         * you can put a progress bar into indeterminate mode.
         * While the bar is in indeterminate mode,
         * it animates constantly to show that work is occurring.
         * As soon as you can determine the task's length and amount of progress,
         * you should update the progress bar's value
         * and switch it back to determinate mode.
         * <p>
         * Here is an example of creating a progress bar,
         * where <code>task</code> is an object (representing some piece of work)
         * which returns information about the progress of the task:
         * <pre>
         * progressBar = new JProgressBar(0, task.getLengthOfTask());
         * progressBar.setValue(0);
         * progressBar.setStringPainted(true);
         * </pre>
         * Here is an example of querying the current state of the task, and using
         * the returned value to update the progress bar:
         * <pre>
         * progressBar.setValue(task.getCurrent());
         * </pre>
         * Here is an example of putting a progress bar into
         * indeterminate mode,
         * and then switching back to determinate mode
         * once the length of the task is known:
         * <pre>
         * progressBar = new JProgressBar();
         * <em>...//when the task of (initially) unknown length begins:</em>
         * progressBar.setIndeterminate(true);
         * <em>...//do some work; get length of task...</em>
         * progressBar.setMaximum(newLength);
         * progressBar.setValue(newValue);
         * progressBar.setIndeterminate(false);
         * </pre>
         * <p>
         * For complete examples and further documentation see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/progress.html" target="_top">How to Monitor Progress</a>,
         * a section in <em>The Java Tutorial.</em>
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see javax.swing.plaf.basic.BasicProgressBarUI
         * @see javax.swing.BoundedRangeModel
         * @see javax.swing.SwingWorker
         * @beaninfo attribute: isContainer false
         *     description: A component that displays an integer value.
         * @author Michael C. Albers
         * @author Kathy Walrath
         */
        // @ts-ignore
        class JProgressBar extends javax.swing.JComponent implements javax.swing.SwingConstants, javax.accessibility.Accessible {
            /**
             * Creates a horizontal progress bar
             * that displays a border but no progress string.
             * The initial and minimum values are 0,
             * and the maximum is 100.
             * @see #setOrientation
             * @see #setBorderPainted
             * @see #setStringPainted
             * @see #setString
             * @see #setIndeterminate
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a progress bar with the specified orientation,
             * which can be
             * either {@code SwingConstants.VERTICAL} or
             * {@code SwingConstants.HORIZONTAL}.
             * By default, a border is painted but a progress string is not.
             * The initial and minimum values are 0,
             * and the maximum is 100.
             * @param orient  the desired orientation of the progress bar
             * @throws IllegalArgumentException if {#code orient} is an illegal value
             * @see #setOrientation
             * @see #setBorderPainted
             * @see #setStringPainted
             * @see #setString
             * @see #setIndeterminate
             */
            // @ts-ignore
            constructor(orient: number /*int*/)
            /**
             * Creates a horizontal progress bar
             * with the specified minimum and maximum.
             * Sets the initial value of the progress bar to the specified minimum.
             * By default, a border is painted but a progress string is not.
             * <p>
             * The <code>BoundedRangeModel</code> that holds the progress bar's data
             * handles any issues that may arise from improperly setting the
             * minimum, initial, and maximum values on the progress bar.
             * See the {@code BoundedRangeModel} documentation for details.
             * @param min  the minimum value of the progress bar
             * @param max  the maximum value of the progress bar
             * @see BoundedRangeModel
             * @see #setOrientation
             * @see #setBorderPainted
             * @see #setStringPainted
             * @see #setString
             * @see #setIndeterminate
             */
            // @ts-ignore
            constructor(min: number /*int*/, max: number /*int*/)
            /**
             * Creates a progress bar using the specified orientation,
             * minimum, and maximum.
             * By default, a border is painted but a progress string is not.
             * Sets the initial value of the progress bar to the specified minimum.
             * <p>
             * The <code>BoundedRangeModel</code> that holds the progress bar's data
             * handles any issues that may arise from improperly setting the
             * minimum, initial, and maximum values on the progress bar.
             * See the {@code BoundedRangeModel} documentation for details.
             * @param orient  the desired orientation of the progress bar
             * @param min  the minimum value of the progress bar
             * @param max  the maximum value of the progress bar
             * @throws IllegalArgumentException if {#code orient} is an illegal value
             * @see BoundedRangeModel
             * @see #setOrientation
             * @see #setBorderPainted
             * @see #setStringPainted
             * @see #setString
             * @see #setIndeterminate
             */
            // @ts-ignore
            constructor(orient: number /*int*/, min: number /*int*/, max: number /*int*/)
            /**
             * Creates a horizontal progress bar
             * that uses the specified model
             * to hold the progress bar's data.
             * By default, a border is painted but a progress string is not.
             * @param newModel  the data model for the progress bar
             * @see #setOrientation
             * @see #setBorderPainted
             * @see #setStringPainted
             * @see #setString
             * @see #setIndeterminate
             */
            // @ts-ignore
            constructor(newModel: javax.swing.BoundedRangeModel)
            /**
             * Whether the progress bar is horizontal or vertical.
             * The default is <code>HORIZONTAL</code>.
             * @see #setOrientation
             */
            // @ts-ignore
            orientation: number /*int*/
            /**
             * The object that holds the data for the progress bar.
             * @see #setModel
             */
            // @ts-ignore
            model: javax.swing.BoundedRangeModel
            /**
             * An optional string that can be displayed on the progress bar.
             * The default is <code>null</code>. Setting this to a non-<code>null</code>
             * value does not imply that the string will be displayed.
             * To display the string, {@code paintString} must be {@code true}.
             * @see #setString
             * @see #setStringPainted
             */
            // @ts-ignore
            progressString: string
            /**
             * Whether to display a string of text on the progress bar.
             * The default is <code>false</code>.
             * Setting this to <code>true</code> causes a textual
             * display of the progress to be rendered on the progress bar. If
             * the <code>progressString</code> is <code>null</code>,
             * the percentage of completion is displayed on the progress bar.
             * Otherwise, the <code>progressString</code> is
             * rendered on the progress bar.
             * @see #setStringPainted
             * @see #setString
             */
            // @ts-ignore
            paintString: boolean
            /**
             * Only one <code>ChangeEvent</code> is needed per instance since the
             * event's only interesting property is the immutable source, which
             * is the progress bar.
             * The event is lazily created the first time that an
             * event notification is fired.
             * @see #fireStateChanged
             */
            // @ts-ignore
            changeEvent: javax.swing.event.ChangeEvent
            /**
             * Listens for change events sent by the progress bar's model,
             * redispatching them
             * to change-event listeners registered upon
             * this progress bar.
             * @see #createChangeListener
             */
            // @ts-ignore
            changeListener: javax.swing.event.ChangeListener
            /**
             * Returns {@code SwingConstants.VERTICAL} or
             * {@code SwingConstants.HORIZONTAL}, depending on the orientation
             * of the progress bar. The default orientation is
             * {@code SwingConstants.HORIZONTAL}.
             * @return <code>HORIZONTAL</code> or <code>VERTICAL</code>
             * @see #setOrientation
             */
            // @ts-ignore
            getOrientation(): int
            /**
             * Sets the progress bar's orientation to <code>newOrientation</code>,
             * which must be {@code SwingConstants.VERTICAL} or
             * {@code SwingConstants.HORIZONTAL}. The default orientation
             * is {@code SwingConstants.HORIZONTAL}.
             * @param newOrientation  <code>HORIZONTAL</code> or <code>VERTICAL</code>
             * @exception IllegalArgumentException    if <code>newOrientation</code>
             *                                               is an illegal value
             * @see #getOrientation
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: Set the progress bar's orientation.
             */
            // @ts-ignore
            setOrientation(newOrientation: number /*int*/): void
            /**
             * Returns the value of the <code>stringPainted</code> property.
             * @return the value of the <code>stringPainted</code> property
             * @see #setStringPainted
             * @see #setString
             */
            // @ts-ignore
            isStringPainted(): boolean
            /**
             * Sets the value of the <code>stringPainted</code> property,
             * which determines whether the progress bar
             * should render a progress string.
             * The default is <code>false</code>, meaning
             * no string is painted.
             * Some look and feels might not support progress strings
             * or might support them only when the progress bar is in determinate mode.
             * @param b       <code>true</code> if the progress bar should render a string
             * @see #isStringPainted
             * @see #setString
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Whether the progress bar should render a string.
             */
            // @ts-ignore
            setStringPainted(b: boolean): void
            /**
             * Returns a {@code String} representation of the current progress.
             * By default, this returns a simple percentage {@code String} based on
             * the value returned from {@code getPercentComplete}.  An example
             * would be the "42%".  You can change this by calling {@code setString}.
             * @return the value of the progress string, or a simple percentage string
             *          if the progress string is {#code null}
             * @see #setString
             */
            // @ts-ignore
            getString(): java.lang.String
            /**
             * Sets the value of the progress string. By default,
             * this string is <code>null</code>, implying the built-in behavior of
             * using a simple percent string.
             * If you have provided a custom progress string and want to revert to
             * the built-in behavior, set the string back to <code>null</code>.
             * <p>
             * The progress string is painted only if
             * the <code>isStringPainted</code> method returns <code>true</code>.
             * @param s       the value of the progress string
             * @see #getString
             * @see #setStringPainted
             * @see #isStringPainted
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Specifies the progress string to paint
             */
            // @ts-ignore
            setString(s: string): void
            /**
             * Returns the percent complete for the progress bar.
             * Note that this number is between 0.0 and 1.0.
             * @return the percent complete for this progress bar
             */
            // @ts-ignore
            getPercentComplete(): double
            /**
             * Returns the <code>borderPainted</code> property.
             * @return the value of the <code>borderPainted</code> property
             * @see #setBorderPainted
             * @beaninfo description: Does the progress bar paint its border
             */
            // @ts-ignore
            isBorderPainted(): boolean
            /**
             * Sets the <code>borderPainted</code> property, which is
             * <code>true</code> if the progress bar should paint its border.
             * The default value for this property is <code>true</code>.
             * Some look and feels might not implement painted borders;
             * they will ignore this property.
             * @param b       <code>true</code> if the progress bar
             *                   should paint its border;
             *                   otherwise, <code>false</code>
             * @see #isBorderPainted
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Whether the progress bar should paint its border.
             */
            // @ts-ignore
            setBorderPainted(b: boolean): void
            /**
             * Paints the progress bar's border if the <code>borderPainted</code>
             * property is <code>true</code>.
             * @param g  the <code>Graphics</code> context within which to paint the border
             * @see #paint
             * @see #setBorder
             * @see #isBorderPainted
             * @see #setBorderPainted
             */
            // @ts-ignore
            paintBorder(g: java.awt.Graphics): void
            /**
             * Returns the look-and-feel object that renders this component.
             * @return the <code>ProgressBarUI</code> object that renders this component
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.ProgressBarUI
            /**
             * Sets the look-and-feel object that renders this component.
             * @param ui  a <code>ProgressBarUI</code> object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.ProgressBarUI): void
            /**
             * Resets the UI property to a value from the current look and feel.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the name of the look-and-feel class that renders this component.
             * @return the string "ProgressBarUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             * @beaninfo expert: true
             *    description: A string that specifies the name of the look-and-feel class.
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Subclasses that want to handle change events
             * from the model differently
             * can override this to return
             * an instance of a custom <code>ChangeListener</code> implementation.
             * The default {@code ChangeListener} simply calls the
             * {@code fireStateChanged} method to forward {@code ChangeEvent}s
             * to the {@code ChangeListener}s that have been added directly to the
             * progress bar.
             * @see #changeListener
             * @see #fireStateChanged
             * @see javax.swing.event.ChangeListener
             * @see javax.swing.BoundedRangeModel
             */
            // @ts-ignore
            createChangeListener(): javax.swing.event.ChangeListener
            /**
             * Adds the specified <code>ChangeListener</code> to the progress bar.
             * @param l the <code>ChangeListener</code> to add
             */
            // @ts-ignore
            addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a <code>ChangeListener</code> from the progress bar.
             * @param l the <code>ChangeListener</code> to remove
             */
            // @ts-ignore
            removeChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the <code>ChangeListener</code>s added
             * to this progress bar with <code>addChangeListener</code>.
             * @return all of the <code>ChangeListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getChangeListeners(): javax.swing.event.ChangeListener[]
            /**
             * Send a {@code ChangeEvent}, whose source is this {@code JProgressBar}, to
             * all {@code ChangeListener}s that have registered interest in
             * {@code ChangeEvent}s.
             * This method is called each time a {@code ChangeEvent} is received from
             * the model.
             * <p>
             * The event instance is created if necessary, and stored in
             * {@code changeEvent}.
             * @see #addChangeListener
             * @see EventListenerList
             */
            // @ts-ignore
            fireStateChanged(): void
            /**
             * Returns the data model used by this progress bar.
             * @return the <code>BoundedRangeModel</code> currently in use
             * @see #setModel
             * @see BoundedRangeModel
             */
            // @ts-ignore
            getModel(): javax.swing.BoundedRangeModel
            /**
             * Sets the data model used by the <code>JProgressBar</code>.
             * Note that the {@code BoundedRangeModel}'s {@code extent} is not used,
             * and is set to {@code 0}.
             * @param newModel the <code>BoundedRangeModel</code> to use
             * @beaninfo expert: true
             *  description: The data model used by the JProgressBar.
             */
            // @ts-ignore
            setModel(newModel: javax.swing.BoundedRangeModel): void
            /**
             * Returns the progress bar's current {@code value}
             * from the <code>BoundedRangeModel</code>.
             * The value is always between the
             * minimum and maximum values, inclusive.
             * @return the current value of the progress bar
             * @see #setValue
             * @see BoundedRangeModel#getValue
             */
            // @ts-ignore
            getValue(): int
            /**
             * Returns the progress bar's {@code minimum} value
             * from the <code>BoundedRangeModel</code>.
             * @return the progress bar's minimum value
             * @see #setMinimum
             * @see BoundedRangeModel#getMinimum
             */
            // @ts-ignore
            getMinimum(): int
            /**
             * Returns the progress bar's {@code maximum} value
             * from the <code>BoundedRangeModel</code>.
             * @return the progress bar's maximum value
             * @see #setMaximum
             * @see BoundedRangeModel#getMaximum
             */
            // @ts-ignore
            getMaximum(): int
            /**
             * Sets the progress bar's current value to {@code n}.  This method
             * forwards the new value to the model.
             * <p>
             * The data model (an instance of {@code BoundedRangeModel})
             * handles any mathematical
             * issues arising from assigning faulty values.  See the
             * {@code BoundedRangeModel} documentation for details.
             * <p>
             * If the new value is different from the previous value,
             * all change listeners are notified.
             * @param n       the new value
             * @see #getValue
             * @see #addChangeListener
             * @see BoundedRangeModel#setValue
             * @beaninfo preferred: true
             *   description: The progress bar's current value.
             */
            // @ts-ignore
            setValue(n: number /*int*/): void
            /**
             * Sets the progress bar's minimum value
             * (stored in the progress bar's data model) to <code>n</code>.
             * <p>
             * The data model (a <code>BoundedRangeModel</code> instance)
             * handles any mathematical
             * issues arising from assigning faulty values.
             * See the {@code BoundedRangeModel} documentation for details.
             * <p>
             * If the minimum value is different from the previous minimum,
             * all change listeners are notified.
             * @param n       the new minimum
             * @see #getMinimum
             * @see #addChangeListener
             * @see BoundedRangeModel#setMinimum
             * @beaninfo preferred: true
             *  description: The progress bar's minimum value.
             */
            // @ts-ignore
            setMinimum(n: number /*int*/): void
            /**
             * Sets the progress bar's maximum value
             * (stored in the progress bar's data model) to <code>n</code>.
             * <p>
             * The underlying <code>BoundedRangeModel</code> handles any mathematical
             * issues arising from assigning faulty values.
             * See the {@code BoundedRangeModel} documentation for details.
             * <p>
             * If the maximum value is different from the previous maximum,
             * all change listeners are notified.
             * @param n       the new maximum
             * @see #getMaximum
             * @see #addChangeListener
             * @see BoundedRangeModel#setMaximum
             * @beaninfo preferred: true
             *   description: The progress bar's maximum value.
             */
            // @ts-ignore
            setMaximum(n: number /*int*/): void
            /**
             * Sets the <code>indeterminate</code> property of the progress bar,
             * which determines whether the progress bar is in determinate
             * or indeterminate mode.
             * An indeterminate progress bar continuously displays animation
             * indicating that an operation of unknown length is occurring.
             * By default, this property is <code>false</code>.
             * Some look and feels might not support indeterminate progress bars;
             * they will ignore this property.
             * <p>
             * See
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/progress.html" target="_top">How to Monitor Progress</a>
             * for examples of using indeterminate progress bars.
             * @param newValue  <code>true</code> if the progress bar
             *                   should change to indeterminate mode;
             *                   <code>false</code> if it should revert to normal.
             * @see #isIndeterminate
             * @see javax.swing.plaf.basic.BasicProgressBarUI
             * @since 1.4
             * @beaninfo bound: true
             *     attribute: visualUpdate true
             *   description: Set whether the progress bar is indeterminate (true)
             *                or normal (false).
             */
            // @ts-ignore
            setIndeterminate(newValue: boolean): void
            /**
             * Returns the value of the <code>indeterminate</code> property.
             * @return the value of the <code>indeterminate</code> property
             * @see #setIndeterminate
             * @since 1.4
             * @beaninfo description: Is the progress bar indeterminate (true)
             *                or normal (false)?
             */
            // @ts-ignore
            isIndeterminate(): boolean
            /**
             * Returns a string representation of this <code>JProgressBar</code>.
             * This method is intended to be used only for debugging purposes. The
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JProgressBar</code>
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the <code>AccessibleContext</code> associated with this
             * <code>JProgressBar</code>. For progress bars, the
             * <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleJProgressBar</code>.
             * A new <code>AccessibleJProgressBar</code> instance is created if necessary.
             * @return an <code>AccessibleJProgressBar</code> that serves as the
             *          <code>AccessibleContext</code> of this <code>JProgressBar</code>
             * @beaninfo expert: true
             *   description: The AccessibleContext associated with this ProgressBar.
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}

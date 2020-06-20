declare namespace javax {
    namespace swing {
        /**
         * Fires one or more {@code ActionEvent}s at specified
         * intervals. An example use is an animation object that uses a
         * <code>Timer</code> as the trigger for drawing its frames.
         * <p>
         * Setting up a timer
         * involves creating a <code>Timer</code> object,
         * registering one or more action listeners on it,
         * and starting the timer using
         * the <code>start</code> method.
         * For example,
         * the following code creates and starts a timer
         * that fires an action event once per second
         * (as specified by the first argument to the <code>Timer</code> constructor).
         * The second argument to the <code>Timer</code> constructor
         * specifies a listener to receive the timer's action events.
         * <pre>
         * int delay = 1000; //milliseconds
         * ActionListener taskPerformer = new ActionListener() {
         * public void actionPerformed(ActionEvent evt) {
         * <em>//...Perform a task...</em>
         * }
         * };
         * new Timer(delay, taskPerformer).start();</pre>
         * <p>
         * {@code Timers} are constructed by specifying both a delay parameter
         * and an {@code ActionListener}. The delay parameter is used
         * to set both the initial delay and the delay between event
         * firing, in milliseconds. Once the timer has been started,
         * it waits for the initial delay before firing its
         * first <code>ActionEvent</code> to registered listeners.
         * After this first event, it continues to fire events
         * every time the between-event delay has elapsed, until it
         * is stopped.
         * <p>
         * After construction, the initial delay and the between-event
         * delay can be changed independently, and additional
         * <code>ActionListeners</code> may be added.
         * <p>
         * If you want the timer to fire only the first time and then stop,
         * invoke <code>setRepeats(false)</code> on the timer.
         * <p>
         * Although all <code>Timer</code>s perform their waiting
         * using a single, shared thread
         * (created by the first <code>Timer</code> object that executes),
         * the action event handlers for <code>Timer</code>s
         * execute on another thread -- the event-dispatching thread.
         * This means that the action handlers for <code>Timer</code>s
         * can safely perform operations on Swing components.
         * However, it also means that the handlers must execute quickly
         * to keep the GUI responsive.
         * <p>
         * In v 1.3, another <code>Timer</code> class was added
         * to the Java platform: <code>java.util.Timer</code>.
         * Both it and <code>javax.swing.Timer</code>
         * provide the same basic functionality,
         * but <code>java.util.Timer</code>
         * is more general and has more features.
         * The <code>javax.swing.Timer</code> has two features
         * that can make it a little easier to use with GUIs.
         * First, its event handling metaphor is familiar to GUI programmers
         * and can make dealing with the event-dispatching thread
         * a bit simpler.
         * Second, its
         * automatic thread sharing means that you don't have to
         * take special steps to avoid spawning
         * too many threads.
         * Instead, your timer uses the same thread
         * used to make cursors blink,
         * tool tips appear,
         * and so on.
         * <p>
         * You can find further documentation
         * and several examples of using timers by visiting
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/timer.html"
         * target = "_top">How to Use Timers</a>,
         * a section in <em>The Java Tutorial.</em>
         * For more examples and help in choosing between
         * this <code>Timer</code> class and
         * <code>java.util.Timer</code>,
         * see
         * <a href="http://java.sun.com/products/jfc/tsc/articles/timer/"
         * target="_top">Using Timers in Swing Applications</a>,
         * an article in <em>The Swing Connection.</em>
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see java.util.Timer <code>java.util.Timer</code>
         * @author Dave Moore
         */
        // @ts-ignore
        class Timer extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates a {@code Timer} and initializes both the initial delay and
             * between-event delay to {@code delay} milliseconds. If {@code delay}
             * is less than or equal to zero, the timer fires as soon as it
             * is started. If <code>listener</code> is not <code>null</code>,
             * it's registered as an action listener on the timer.
             * @param delay milliseconds for the initial and between-event delay
             * @param listener  an initial listener; can be <code>null</code>
             * @see #addActionListener
             * @see #setInitialDelay
             * @see #setRepeats
             */
            // @ts-ignore
            constructor(delay: number /*int*/, listener: java.awt.event.ActionListener)
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            /**
             * Adds an action listener to the <code>Timer</code>.
             * @param listener the listener to add
             * @see #Timer
             */
            // @ts-ignore
            addActionListener(listener: java.awt.event.ActionListener): void
            /**
             * Removes the specified action listener from the <code>Timer</code>.
             * @param listener the listener to remove
             */
            // @ts-ignore
            removeActionListener(listener: java.awt.event.ActionListener): void
            /**
             * Returns an array of all the action listeners registered
             * on this timer.
             * @return all of the timer's <code>ActionListener</code>s or an empty
             *          array if no action listeners are currently registered
             * @see #addActionListener
             * @see #removeActionListener
             * @since 1.4
             */
            // @ts-ignore
            getActionListeners(): java.awt.event.ActionListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param e the action event to fire
             * @see EventListenerList
             */
            // @ts-ignore
            fireActionPerformed(e: java.awt.event.ActionEvent): void
            /**
             * Returns an array of all the objects currently registered as
             * <code><em>Foo</em>Listener</code>s
             * upon this <code>Timer</code>.
             * <code><em>Foo</em>Listener</code>s
             * are registered using the <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a <code>Timer</code>
             * instance <code>t</code>
             * for its action listeners
             * with the following code:
             * <pre>ActionListener[] als = (ActionListener[])(t.getListeners(ActionListener.class));</pre>
             * If no such listeners exist,
             * this method returns an empty array.
             * @param listenerType  the type of listeners requested;
             *           this parameter should specify an interface
             *           that descends from <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s
             *           on this timer,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code> doesn't
             *           specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @see #getActionListeners
             * @see #addActionListener
             * @see #removeActionListener
             * @since 1.3
             */
            // @ts-ignore
            getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Enables or disables the timer log. When enabled, a message
             * is posted to <code>System.out</code> whenever the timer goes off.
             * @param flag  <code>true</code> to enable logging
             * @see #getLogTimers
             */
            // @ts-ignore
            setLogTimers(flag: boolean): void
            /**
             * Returns <code>true</code> if logging is enabled.
             * @return <code>true</code> if logging is enabled; otherwise, false
             * @see #setLogTimers
             */
            // @ts-ignore
            getLogTimers(): boolean
            /**
             * Sets the <code>Timer</code>'s between-event delay, the number of milliseconds
             * between successive action events. This does not affect the initial delay
             * property, which can be set by the {@code setInitialDelay} method.
             * @param delay the delay in milliseconds
             * @see #setInitialDelay
             */
            // @ts-ignore
            setDelay(delay: number /*int*/): void
            /**
             * Returns the delay, in milliseconds,
             * between firings of action events.
             * @see #setDelay
             * @see #getInitialDelay
             */
            // @ts-ignore
            getDelay(): int
            /**
             * Sets the <code>Timer</code>'s initial delay, the time
             * in milliseconds to wait after the timer is started
             * before firing the first event. Upon construction, this
             * is set to be the same as the between-event delay,
             * but then its value is independent and remains unaffected
             * by changes to the between-event delay.
             * @param initialDelay the initial delay, in milliseconds
             * @see #setDelay
             */
            // @ts-ignore
            setInitialDelay(initialDelay: number /*int*/): void
            /**
             * Returns the <code>Timer</code>'s initial delay.
             * @see #setInitialDelay
             * @see #setDelay
             */
            // @ts-ignore
            getInitialDelay(): int
            /**
             * If <code>flag</code> is <code>false</code>,
             * instructs the <code>Timer</code> to send only one
             * action event to its listeners.
             * @param flag specify <code>false</code> to make the timer
             *              stop after sending its first action event
             */
            // @ts-ignore
            setRepeats(flag: boolean): void
            /**
             * Returns <code>true</code> (the default)
             * if the <code>Timer</code> will send
             * an action event
             * to its listeners multiple times.
             * @see #setRepeats
             */
            // @ts-ignore
            isRepeats(): boolean
            /**
             * Sets whether the <code>Timer</code> coalesces multiple pending
             * <code>ActionEvent</code> firings.
             * A busy application may not be able
             * to keep up with a <code>Timer</code>'s event generation,
             * causing multiple
             * action events to be queued.  When processed,
             * the application sends these events one after the other, causing the
             * <code>Timer</code>'s listeners to receive a sequence of
             * events with no delay between them. Coalescing avoids this situation
             * by reducing multiple pending events to a single event.
             * <code>Timer</code>s
             * coalesce events by default.
             * @param flag specify <code>false</code> to turn off coalescing
             */
            // @ts-ignore
            setCoalesce(flag: boolean): void
            /**
             * Returns <code>true</code> if the <code>Timer</code> coalesces
             * multiple pending action events.
             * @see #setCoalesce
             */
            // @ts-ignore
            isCoalesce(): boolean
            /**
             * Sets the string that will be delivered as the action command
             * in <code>ActionEvent</code>s fired by this timer.
             * <code>null</code> is an acceptable value.
             * @param command the action command
             * @since 1.6
             */
            // @ts-ignore
            setActionCommand(command: string): void
            /**
             * Returns the string that will be delivered as the action command
             * in <code>ActionEvent</code>s fired by this timer. May be
             * <code>null</code>, which is also the default.
             * @return the action command used in firing events
             * @since 1.6
             */
            // @ts-ignore
            getActionCommand(): java.lang.String
            /**
             * Starts the <code>Timer</code>,
             * causing it to start sending action events
             * to its listeners.
             * @see #stop
             */
            // @ts-ignore
            start(): void
            /**
             * Returns <code>true</code> if the <code>Timer</code> is running.
             * @see #start
             */
            // @ts-ignore
            isRunning(): boolean
            /**
             * Stops the <code>Timer</code>,
             * causing it to stop sending action events
             * to its listeners.
             * @see #start
             */
            // @ts-ignore
            stop(): void
            /**
             * Restarts the <code>Timer</code>,
             * canceling any pending firings and causing
             * it to fire with its initial delay.
             */
            // @ts-ignore
            restart(): void
        }
    }
}

declare namespace java {
    namespace awt {
        /**
         * <code>EventQueue</code> is a platform-independent class
         * that queues events, both from the underlying peer classes
         * and from trusted application classes.
         * <p>
         * It encapsulates asynchronous event dispatch machinery which
         * extracts events from the queue and dispatches them by calling
         * {@link #dispatchEvent(AWTEvent) dispatchEvent(AWTEvent)} method
         * on this <code>EventQueue</code> with the event to be dispatched
         * as an argument.  The particular behavior of this machinery is
         * implementation-dependent.  The only requirements are that events
         * which were actually enqueued to this queue (note that events
         * being posted to the <code>EventQueue</code> can be coalesced)
         * are dispatched:
         * <dl>
         * <dt> Sequentially.
         * <dd> That is, it is not permitted that several events from
         * this queue are dispatched simultaneously.
         * <dt> In the same order as they are enqueued.
         * <dd> That is, if <code>AWTEvent</code>&nbsp;A is enqueued
         * to the <code>EventQueue</code> before
         * <code>AWTEvent</code>&nbsp;B then event B will not be
         * dispatched before event A.
         * </dl>
         * <p>
         * Some browsers partition applets in different code bases into
         * separate contexts, and establish walls between these contexts.
         * In such a scenario, there will be one <code>EventQueue</code>
         * per context. Other browsers place all applets into the same
         * context, implying that there will be only a single, global
         * <code>EventQueue</code> for all applets. This behavior is
         * implementation-dependent.  Consult your browser's documentation
         * for more information.
         * <p>
         * For information on the threading issues of the event dispatch
         * machinery, see <a href="doc-files/AWTThreadIssues.html#Autoshutdown"
         * >AWT Threading Issues</a>.
         * @author Thomas Ball
         * @author Fred Ecks
         * @author David Mendenhall
         * @since 1.1
         */
        // @ts-ignore
        class EventQueue extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Posts a 1.1-style event to the <code>EventQueue</code>.
             * If there is an existing event on the queue with the same ID
             * and event source, the source <code>Component</code>'s
             * <code>coalesceEvents</code> method will be called.
             * @param theEvent an instance of <code>java.awt.AWTEvent</code>,
             *           or a subclass of it
             * @throws NullPointerException if <code>theEvent</code> is <code>null</code>
             */
            // @ts-ignore
            postEvent(theEvent: java.awt.AWTEvent): void
            /**
             * Removes an event from the <code>EventQueue</code> and
             * returns it.  This method will block until an event has
             * been posted by another thread.
             * @return the next <code>AWTEvent</code>
             * @exception InterruptedException
             *             if any thread has interrupted this thread
             */
            // @ts-ignore
            getNextEvent(): java.awt.AWTEvent
            /**
             * Returns the first event on the <code>EventQueue</code>
             * without removing it.
             * @return the first event
             */
            // @ts-ignore
            peekEvent(): java.awt.AWTEvent
            /**
             * Returns the first event with the specified id, if any.
             * @param id the id of the type of event desired
             * @return the first event of the specified id or <code>null</code>
             *     if there is no such event
             */
            // @ts-ignore
            peekEvent(id: number /*int*/): java.awt.AWTEvent
            /**
             * Dispatches an event. The manner in which the event is
             * dispatched depends upon the type of the event and the
             * type of the event's source object:
             * <table border=1 summary="Event types, source types, and dispatch methods">
             * <tr>
             * <th>Event Type</th>
             * <th>Source Type</th>
             * <th>Dispatched To</th>
             * </tr>
             * <tr>
             * <td>ActiveEvent</td>
             * <td>Any</td>
             * <td>event.dispatch()</td>
             * </tr>
             * <tr>
             * <td>Other</td>
             * <td>Component</td>
             * <td>source.dispatchEvent(AWTEvent)</td>
             * </tr>
             * <tr>
             * <td>Other</td>
             * <td>MenuComponent</td>
             * <td>source.dispatchEvent(AWTEvent)</td>
             * </tr>
             * <tr>
             * <td>Other</td>
             * <td>Other</td>
             * <td>No action (ignored)</td>
             * </tr>
             * </table>
             * <p>
             * @param event an instance of <code>java.awt.AWTEvent</code>,
             *           or a subclass of it
             * @throws NullPointerException if <code>event</code> is <code>null</code>
             * @since 1.2
             */
            // @ts-ignore
            dispatchEvent(event: java.awt.AWTEvent): void
            /**
             * Returns the timestamp of the most recent event that had a timestamp, and
             * that was dispatched from the <code>EventQueue</code> associated with the
             * calling thread. If an event with a timestamp is currently being
             * dispatched, its timestamp will be returned. If no events have yet
             * been dispatched, the EventQueue's initialization time will be
             * returned instead.In the current version of
             * the JDK, only <code>InputEvent</code>s,
             * <code>ActionEvent</code>s, and <code>InvocationEvent</code>s have
             * timestamps; however, future versions of the JDK may add timestamps to
             * additional event types. Note that this method should only be invoked
             * from an application's {@link #isDispatchThread event dispatching thread}.
             * If this method is
             * invoked from another thread, the current system time (as reported by
             * <code>System.currentTimeMillis()</code>) will be returned instead.
             * @return the timestamp of the last <code>InputEvent</code>,
             *          <code>ActionEvent</code>, or <code>InvocationEvent</code> to be
             *          dispatched, or <code>System.currentTimeMillis()</code> if this
             *          method is invoked on a thread other than an event dispatching
             *          thread
             * @see java.awt.event.InputEvent#getWhen
             * @see java.awt.event.ActionEvent#getWhen
             * @see java.awt.event.InvocationEvent#getWhen
             * @see #isDispatchThread
             * @since 1.4
             */
            // @ts-ignore
            getMostRecentEventTime(): long
            /**
             * Returns the the event currently being dispatched by the
             * <code>EventQueue</code> associated with the calling thread. This is
             * useful if a method needs access to the event, but was not designed to
             * receive a reference to it as an argument. Note that this method should
             * only be invoked from an application's event dispatching thread. If this
             * method is invoked from another thread, null will be returned.
             * @return the event currently being dispatched, or null if this method is
             *          invoked on a thread other than an event dispatching thread
             * @since 1.4
             */
            // @ts-ignore
            getCurrentEvent(): java.awt.AWTEvent
            /**
             * Replaces the existing <code>EventQueue</code> with the specified one.
             * Any pending events are transferred to the new <code>EventQueue</code>
             * for processing by it.
             * @param newEventQueue an <code>EventQueue</code>
             *           (or subclass thereof) instance to be use
             * @see java.awt.EventQueue#pop
             * @throws NullPointerException if <code>newEventQueue</code> is <code>null</code>
             * @since 1.2
             */
            // @ts-ignore
            push(newEventQueue: java.awt.EventQueue): void
            /**
             * Stops dispatching events using this <code>EventQueue</code>.
             * Any pending events are transferred to the previous
             * <code>EventQueue</code> for processing.
             * <p>
             * Warning: To avoid deadlock, do not declare this method
             * synchronized in a subclass.
             * @exception EmptyStackException if no previous push was made
             *   on this <code>EventQueue</code>
             * @see java.awt.EventQueue#push
             * @since 1.2
             */
            // @ts-ignore
            pop(): void
            /**
             * Creates a new {@code secondary loop} associated with this
             * event queue. Use the {@link SecondaryLoop#enter} and
             * {@link SecondaryLoop#exit} methods to start and stop the
             * event loop and dispatch the events from this queue.
             * @return secondaryLoop A new secondary loop object, which can
             *                        be used to launch a new nested event
             *                        loop and dispatch events from this queue
             * @see SecondaryLoop#enter
             * @see SecondaryLoop#exit
             * @since 1.7
             */
            // @ts-ignore
            createSecondaryLoop(): java.awt.SecondaryLoop
            /**
             * Returns true if the calling thread is
             * {@link Toolkit#getSystemEventQueue the current AWT EventQueue}'s
             * dispatch thread. Use this method to ensure that a particular
             * task is being executed (or not being) there.
             * <p>
             * Note: use the {@link #invokeLater} or {@link #invokeAndWait}
             * methods to execute a task in
             * {@link Toolkit#getSystemEventQueue the current AWT EventQueue}'s
             * dispatch thread.
             * <p>
             * @return true if running in
             *  {#link Toolkit#getSystemEventQueue the current AWT EventQueue}'s
             *  dispatch thread
             * @see #invokeLater
             * @see #invokeAndWait
             * @see Toolkit#getSystemEventQueue
             * @since 1.2
             */
            // @ts-ignore
            isDispatchThread(): boolean
            /**
             * Causes <code>runnable</code> to have its <code>run</code>
             * method called in the {@link #isDispatchThread dispatch thread} of
             * {@link Toolkit#getSystemEventQueue the system EventQueue}.
             * This will happen after all pending events are processed.
             * @param runnable  the <code>Runnable</code> whose <code>run</code>
             *                   method should be executed
             *                   asynchronously in the
             *                   {#link #isDispatchThread event dispatch thread}
             *                   of {@link Toolkit#getSystemEventQueue the system EventQueue}
             * @see #invokeAndWait
             * @see Toolkit#getSystemEventQueue
             * @see #isDispatchThread
             * @since 1.2
             */
            // @ts-ignore
            invokeLater(runnable: java.lang.Runnable): void
            /**
             * Causes <code>runnable</code> to have its <code>run</code>
             * method called in the {@link #isDispatchThread dispatch thread} of
             * {@link Toolkit#getSystemEventQueue the system EventQueue}.
             * This will happen after all pending events are processed.
             * The call blocks until this has happened.  This method
             * will throw an Error if called from the
             * {@link #isDispatchThread event dispatcher thread}.
             * @param runnable  the <code>Runnable</code> whose <code>run</code>
             *                   method should be executed
             *                   synchronously in the
             *                   {#link #isDispatchThread event dispatch thread}
             *                   of {@link Toolkit#getSystemEventQueue the system EventQueue}
             * @exception InterruptedException  if any thread has
             *                   interrupted this thread
             * @exception InvocationTargetException  if an throwable is thrown
             *                   when running <code>runnable</code>
             * @see #invokeLater
             * @see Toolkit#getSystemEventQueue
             * @see #isDispatchThread
             * @since 1.2
             */
            // @ts-ignore
            invokeAndWait(runnable: java.lang.Runnable): void
        }
    }
}

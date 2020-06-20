declare namespace javax {
    namespace management {
        /**
         * <p>Provides an implementation of {@link
         * javax.management.NotificationEmitter NotificationEmitter}
         * interface.  This can be used as the super class of an MBean that
         * sends notifications.</p>
         * <p>By default, the notification dispatch model is synchronous.
         * That is, when a thread calls sendNotification, the
         * <code>NotificationListener.handleNotification</code> method of each listener
         * is called within that thread. You can override this default
         * by overriding <code>handleNotification</code> in a subclass, or by passing an
         * Executor to the constructor.</p>
         * <p>If the method call of a filter or listener throws an {@link Exception},
         * then that exception does not prevent other listeners from being invoked.  However,
         * if the method call of a filter or of {@code Executor.execute} or of
         * {@code handleNotification} (when no {@code Excecutor} is specified) throws an
         * {@link Error}, then that {@code Error} is propagated to the caller of
         * {@link #sendNotification sendNotification}.</p>
         * <p>Remote listeners added using the JMX Remote API (see JMXConnector) are not
         * usually called synchronously.  That is, when sendNotification returns, it is
         * not guaranteed that any remote listeners have yet received the notification.</p>
         * @since 1.5
         */
        // @ts-ignore
        class NotificationBroadcasterSupport extends java.lang.Object implements javax.management.NotificationEmitter {
            /**
             * Constructs a NotificationBroadcasterSupport where each listener is invoked by the
             * thread sending the notification. This constructor is equivalent to
             * {@link NotificationBroadcasterSupport#NotificationBroadcasterSupport(Executor,
             * MBeanNotificationInfo[] info) NotificationBroadcasterSupport(null, null)}.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a NotificationBroadcasterSupport where each listener is invoked using
             * the given {@link java.util.concurrent.Executor}. When {@link #sendNotification
             * sendNotification} is called, a listener is selected if it was added with a null
             * {@link NotificationFilter}, or if {@link NotificationFilter#isNotificationEnabled
             * isNotificationEnabled} returns true for the notification being sent. The call to
             * <code>NotificationFilter.isNotificationEnabled</code> takes place in the thread
             * that called <code>sendNotification</code>. Then, for each selected listener,
             * {@link Executor#execute executor.execute} is called with a command
             * that calls the <code>handleNotification</code> method.
             * This constructor is equivalent to
             * {@link NotificationBroadcasterSupport#NotificationBroadcasterSupport(Executor,
             * MBeanNotificationInfo[] info) NotificationBroadcasterSupport(executor, null)}.
             * @param executor an executor used by the method <code>sendNotification</code> to
             *  send each notification. If it is null, the thread calling <code>sendNotification</code>
             *  will invoke the <code>handleNotification</code> method itself.
             * @since 1.6
             */
            // @ts-ignore
            constructor(executor: java.util.concurrent.Executor)
            /**
             * <p>Constructs a NotificationBroadcasterSupport with information
             * about the notifications that may be sent.  Each listener is
             * invoked by the thread sending the notification.  This
             * constructor is equivalent to {@link
             * NotificationBroadcasterSupport#NotificationBroadcasterSupport(Executor,
             * MBeanNotificationInfo[] info)
             * NotificationBroadcasterSupport(null, info)}.</p>
             * <p>If the <code>info</code> array is not empty, then it is
             * cloned by the constructor as if by {@code info.clone()}, and
             * each call to {@link #getNotificationInfo()} returns a new
             * clone.</p>
             * @param info an array indicating, for each notification this
             *  MBean may send, the name of the Java class of the notification
             *  and the notification type.  Can be null, which is equivalent to
             *  an empty array.
             * @since 1.6
             */
            // @ts-ignore
            constructor(...info: javax.management.MBeanNotificationInfo[])
            /**
             * <p>Constructs a NotificationBroadcasterSupport with information about the notifications that may be sent,
             * and where each listener is invoked using the given {@link java.util.concurrent.Executor}.</p>
             * <p>When {@link #sendNotification sendNotification} is called, a
             * listener is selected if it was added with a null {@link
             * NotificationFilter}, or if {@link
             * NotificationFilter#isNotificationEnabled isNotificationEnabled}
             * returns true for the notification being sent. The call to
             * <code>NotificationFilter.isNotificationEnabled</code> takes
             * place in the thread that called
             * <code>sendNotification</code>. Then, for each selected
             * listener, {@link Executor#execute executor.execute} is called
             * with a command that calls the <code>handleNotification</code>
             * method.</p>
             * <p>If the <code>info</code> array is not empty, then it is
             * cloned by the constructor as if by {@code info.clone()}, and
             * each call to {@link #getNotificationInfo()} returns a new
             * clone.</p>
             * @param executor an executor used by the method
             *  <code>sendNotification</code> to send each notification. If it
             *  is null, the thread calling <code>sendNotification</code> will
             *  invoke the <code>handleNotification</code> method itself.
             * @param info an array indicating, for each notification this
             *  MBean may send, the name of the Java class of the notification
             *  and the notification type.  Can be null, which is equivalent to
             *  an empty array.
             * @since 1.6
             */
            // @ts-ignore
            constructor(executor: java.util.concurrent.Executor, ...info: javax.management.MBeanNotificationInfo[])
            /**
             * Adds a listener.
             * @param listener The listener to receive notifications.
             * @param filter The filter object. If filter is null, no
             *  filtering will be performed before handling notifications.
             * @param handback An opaque object to be sent back to the
             *  listener when a notification is emitted. This object cannot be
             *  used by the Notification broadcaster object. It should be
             *  resent unchanged with the notification to the listener.
             * @exception IllegalArgumentException thrown if the listener is null.
             * @see #removeNotificationListener
             */
            // @ts-ignore
            addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void
            // @ts-ignore
            removeNotificationListener(listener: javax.management.NotificationListener): void
            // @ts-ignore
            removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void
            // @ts-ignore
            getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            /**
             * Sends a notification.
             * If an {@code Executor} was specified in the constructor, it will be given one
             * task per selected listener to deliver the notification to that listener.
             * @param notification The notification to send.
             */
            // @ts-ignore
            sendNotification(notification: javax.management.Notification): void
            /**
             * <p>This method is called by {@link #sendNotification
             * sendNotification} for each listener in order to send the
             * notification to that listener.  It can be overridden in
             * subclasses to change the behavior of notification delivery,
             * for instance to deliver the notification in a separate
             * thread.</p>
             * <p>The default implementation of this method is equivalent to
             * <pre>
             * listener.handleNotification(notif, handback);
             * </pre>
             * @param listener the listener to which the notification is being
             *  delivered.
             * @param notif the notification being delivered to the listener.
             * @param handback the handback object that was supplied when the
             *  listener was added.
             */
            // @ts-ignore
            handleNotification(listener: javax.management.NotificationListener, notif: javax.management.Notification, handback: any): void
        }
    }
}

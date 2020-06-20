declare namespace javax {
    namespace management {
        namespace timer {
            /**
             * Provides the implementation of the timer MBean.
             * The timer MBean sends out an alarm at a specified time
             * that wakes up all the listeners registered to receive timer notifications.
             * <P>
             * This class manages a list of dated timer notifications.
             * A method allows users to add/remove as many notifications as required.
             * When a timer notification is emitted by the timer and becomes obsolete,
             * it is automatically removed from the list of timer notifications.
             * <BR>Additional timer notifications can be added into regularly repeating notifications.
             * <P>
             * Note:
             * <OL>
             * <LI>When sending timer notifications, the timer updates the notification sequence number
             * irrespective of the notification type.
             * <LI>The timer service relies on the system date of the host where the <CODE>Timer</CODE> class is loaded.
             * Listeners may receive untimely notifications
             * if their host has a different system date.
             * To avoid such problems, synchronize the system date of all host machines where timing is needed.
             * <LI>The default behavior for periodic notifications is <i>fixed-delay execution</i>, as
             * specified in {@link java.util.Timer}. In order to use <i>fixed-rate execution</i>, use the
             * overloaded {@link #addNotification(String, String, Object, Date, long, long, boolean)} method.
             * <LI>Notification listeners are potentially all executed in the same
             * thread.  Therefore, they should execute rapidly to avoid holding up
             * other listeners or perturbing the regularity of fixed-delay
             * executions.  See {@link NotificationBroadcasterSupport}.
             * </OL>
             * @since 1.5
             */
            // @ts-ignore
            class Timer extends javax.management.NotificationBroadcasterSupport implements javax.management.timer.TimerMBean, javax.management.MBeanRegistration {
                /**
                 * Default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Number of milliseconds in one second.
                 * Useful constant for the <CODE>addNotification</CODE> method.
                 */
                // @ts-ignore
                readonly ONE_SECOND: number /*long*/
                /**
                 * Number of milliseconds in one minute.
                 * Useful constant for the <CODE>addNotification</CODE> method.
                 */
                // @ts-ignore
                readonly ONE_MINUTE: number /*long*/
                /**
                 * Number of milliseconds in one hour.
                 * Useful constant for the <CODE>addNotification</CODE> method.
                 */
                // @ts-ignore
                readonly ONE_HOUR: number /*long*/
                /**
                 * Number of milliseconds in one day.
                 * Useful constant for the <CODE>addNotification</CODE> method.
                 */
                // @ts-ignore
                readonly ONE_DAY: number /*long*/
                /**
                 * Number of milliseconds in one week.
                 * Useful constant for the <CODE>addNotification</CODE> method.
                 */
                // @ts-ignore
                readonly ONE_WEEK: number /*long*/
                /**
                 * Allows the timer MBean to perform any operations it needs before being registered
                 * in the MBean server.
                 * <P>
                 * Not used in this context.
                 * @param server The MBean server in which the timer MBean will be registered.
                 * @param name The object name of the timer MBean.
                 * @return The name of the timer MBean registered.
                 * @exception java.lang.Exception
                 */
                // @ts-ignore
                preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
                /**
                 * Allows the timer MBean to perform any operations needed after having been
                 * registered in the MBean server or after the registration has failed.
                 * <P>
                 * Not used in this context.
                 */
                // @ts-ignore
                postRegister(registrationDone: java.lang.Boolean): void
                /**
                 * Allows the timer MBean to perform any operations it needs before being unregistered
                 * by the MBean server.
                 * <P>
                 * Stops the timer.
                 * @exception java.lang.Exception
                 */
                // @ts-ignore
                preDeregister(): void
                /**
                 * Allows the timer MBean to perform any operations needed after having been
                 * unregistered by the MBean server.
                 * <P>
                 * Not used in this context.
                 */
                // @ts-ignore
                postDeregister(): void
                // @ts-ignore
                getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                /**
                 * Starts the timer.
                 * <P>
                 * If there is one or more timer notifications before the time in the list of notifications, the notification
                 * is sent according to the <CODE>sendPastNotifications</CODE> flag and then, updated
                 * according to its period and remaining number of occurrences.
                 * If the timer notification date remains earlier than the current date, this notification is just removed
                 * from the list of notifications.
                 */
                // @ts-ignore
                start(): void
                /**
                 * Stops the timer.
                 */
                // @ts-ignore
                stop(): void
                /**
                 * Creates a new timer notification with the specified <CODE>type</CODE>, <CODE>message</CODE>
                 * and <CODE>userData</CODE> and inserts it into the list of notifications with a given date,
                 * period and number of occurrences.
                 * <P>
                 * If the timer notification to be inserted has a date that is before the current date,
                 * the method behaves as if the specified date were the current date. <BR>
                 * For once-off notifications, the notification is delivered immediately. <BR>
                 * For periodic notifications, the first notification is delivered immediately and the
                 * subsequent ones are spaced as specified by the period parameter.
                 * <P>
                 * Note that once the timer notification has been added into the list of notifications,
                 * its associated date, period and number of occurrences cannot be updated.
                 * <P>
                 * In the case of a periodic notification, the value of parameter <i>fixedRate</i> is used to
                 * specify the execution scheme, as specified in {@link java.util.Timer}.
                 * @param type The timer notification type.
                 * @param message The timer notification detailed message.
                 * @param userData The timer notification user data object.
                 * @param date The date when the notification occurs.
                 * @param period The period of the timer notification (in milliseconds).
                 * @param nbOccurences The total number the timer notification will be emitted.
                 * @param fixedRate If <code>true</code> and if the notification is periodic, the notification
                 *                   is scheduled with a <i>fixed-rate</i> execution scheme. If
                 *                   <code>false</code> and if the notification is periodic, the notification
                 *                   is scheduled with a <i>fixed-delay</i> execution scheme. Ignored if the
                 *                   notification is not periodic.
                 * @return The identifier of the new created timer notification.
                 * @exception java.lang.IllegalArgumentException The date is {#code null} or
                 *  the period or the number of occurrences is negative.
                 * @see #addNotification(String, String, Object, Date, long, long)
                 */
                // @ts-ignore
                addNotification(type: string, message: string, userData: any, date: java.util.Date, period: number /*long*/, nbOccurences: number /*long*/, fixedRate: boolean): java.lang.Integer
                /**
                 * Creates a new timer notification with the specified <CODE>type</CODE>, <CODE>message</CODE>
                 * and <CODE>userData</CODE> and inserts it into the list of notifications with a given date,
                 * period and number of occurrences.
                 * <P>
                 * If the timer notification to be inserted has a date that is before the current date,
                 * the method behaves as if the specified date were the current date. <BR>
                 * For once-off notifications, the notification is delivered immediately. <BR>
                 * For periodic notifications, the first notification is delivered immediately and the
                 * subsequent ones are spaced as specified by the period parameter.
                 * <P>
                 * Note that once the timer notification has been added into the list of notifications,
                 * its associated date, period and number of occurrences cannot be updated.
                 * <P>
                 * In the case of a periodic notification, uses a <i>fixed-delay</i> execution scheme, as specified in
                 * {@link java.util.Timer}. In order to use a <i>fixed-rate</i> execution scheme, use
                 * {@link #addNotification(String, String, Object, Date, long, long, boolean)} instead.
                 * @param type The timer notification type.
                 * @param message The timer notification detailed message.
                 * @param userData The timer notification user data object.
                 * @param date The date when the notification occurs.
                 * @param period The period of the timer notification (in milliseconds).
                 * @param nbOccurences The total number the timer notification will be emitted.
                 * @return The identifier of the new created timer notification.
                 * @exception java.lang.IllegalArgumentException The date is {#code null} or
                 *  the period or the number of occurrences is negative.
                 * @see #addNotification(String, String, Object, Date, long, long, boolean)
                 */
                // @ts-ignore
                addNotification(type: string, message: string, userData: any, date: java.util.Date, period: number /*long*/, nbOccurences: number /*long*/): java.lang.Integer
                /**
                 * Creates a new timer notification with the specified <CODE>type</CODE>, <CODE>message</CODE>
                 * and <CODE>userData</CODE> and inserts it into the list of notifications with a given date
                 * and period and a null number of occurrences.
                 * <P>
                 * The timer notification will repeat continuously using the timer period using a <i>fixed-delay</i>
                 * execution scheme, as specified in {@link java.util.Timer}. In order to use a <i>fixed-rate</i>
                 * execution scheme, use {@link #addNotification(String, String, Object, Date, long, long,
                 * boolean)} instead.
                 * <P>
                 * If the timer notification to be inserted has a date that is before the current date,
                 * the method behaves as if the specified date were the current date. The
                 * first notification is delivered immediately and the subsequent ones are
                 * spaced as specified by the period parameter.
                 * @param type The timer notification type.
                 * @param message The timer notification detailed message.
                 * @param userData The timer notification user data object.
                 * @param date The date when the notification occurs.
                 * @param period The period of the timer notification (in milliseconds).
                 * @return The identifier of the new created timer notification.
                 * @exception java.lang.IllegalArgumentException The date is {#code null} or
                 *  the period is negative.
                 */
                // @ts-ignore
                addNotification(type: string, message: string, userData: any, date: java.util.Date, period: number /*long*/): java.lang.Integer
                /**
                 * Creates a new timer notification with the specified <CODE>type</CODE>, <CODE>message</CODE>
                 * and <CODE>userData</CODE> and inserts it into the list of notifications with a given date
                 * and a null period and number of occurrences.
                 * <P>
                 * The timer notification will be handled once at the specified date.
                 * <P>
                 * If the timer notification to be inserted has a date that is before the current date,
                 * the method behaves as if the specified date were the current date and the
                 * notification is delivered immediately.
                 * @param type The timer notification type.
                 * @param message The timer notification detailed message.
                 * @param userData The timer notification user data object.
                 * @param date The date when the notification occurs.
                 * @return The identifier of the new created timer notification.
                 * @exception java.lang.IllegalArgumentException The date is {#code null}.
                 */
                // @ts-ignore
                addNotification(type: string, message: string, userData: any, date: java.util.Date): java.lang.Integer
                /**
                 * Removes the timer notification corresponding to the specified identifier from the list of notifications.
                 * @param id The timer notification identifier.
                 * @exception InstanceNotFoundException The specified identifier does not correspond to any timer notification
                 *  in the list of notifications of this timer MBean.
                 */
                // @ts-ignore
                removeNotification(id: number): void
                /**
                 * Removes all the timer notifications corresponding to the specified type from the list of notifications.
                 * @param type The timer notification type.
                 * @exception InstanceNotFoundException The specified type does not correspond to any timer notification
                 *  in the list of notifications of this timer MBean.
                 */
                // @ts-ignore
                removeNotifications(type: string): void
                /**
                 * Removes all the timer notifications from the list of notifications
                 * and resets the counter used to update the timer notification identifiers.
                 */
                // @ts-ignore
                removeAllNotifications(): void
                /**
                 * Gets the number of timer notifications registered into the list of notifications.
                 * @return The number of timer notifications.
                 */
                // @ts-ignore
                getNbNotifications(): int
                /**
                 * Gets all timer notification identifiers registered into the list of notifications.
                 * @return A vector of <CODE>Integer</CODE> objects containing all the timer notification identifiers.
                 *  <BR>The vector is empty if there is no timer notification registered for this timer MBean.
                 */
                // @ts-ignore
                getAllNotificationIDs(): java.util.Vector<java.lang.Integer>
                /**
                 * Gets all the identifiers of timer notifications corresponding to the specified type.
                 * @param type The timer notification type.
                 * @return A vector of <CODE>Integer</CODE> objects containing all the identifiers of
                 *  timer notifications with the specified <CODE>type</CODE>.
                 *  <BR>The vector is empty if there is no timer notifications registered for this timer MBean
                 *  with the specified <CODE>type</CODE>.
                 */
                // @ts-ignore
                getNotificationIDs(type: string): java.util.Vector<java.lang.Integer>
                /**
                 * Gets the timer notification type corresponding to the specified identifier.
                 * @param id The timer notification identifier.
                 * @return The timer notification type or null if the identifier is not mapped to any
                 *  timer notification registered for this timer MBean.
                 */
                // @ts-ignore
                getNotificationType(id: number): java.lang.String
                /**
                 * Gets the timer notification detailed message corresponding to the specified identifier.
                 * @param id The timer notification identifier.
                 * @return The timer notification detailed message or null if the identifier is not mapped to any
                 *  timer notification registered for this timer MBean.
                 */
                // @ts-ignore
                getNotificationMessage(id: number): java.lang.String
                /**
                 * Gets the timer notification user data object corresponding to the specified identifier.
                 * @param id The timer notification identifier.
                 * @return The timer notification user data object or null if the identifier is not mapped to any
                 *  timer notification registered for this timer MBean.
                 */
                // @ts-ignore
                getNotificationUserData(id: number): java.lang.Object
                /**
                 * Gets a copy of the date associated to a timer notification.
                 * @param id The timer notification identifier.
                 * @return A copy of the date or null if the identifier is not mapped to any
                 *  timer notification registered for this timer MBean.
                 */
                // @ts-ignore
                getDate(id: number): java.util.Date
                /**
                 * Gets a copy of the period (in milliseconds) associated to a timer notification.
                 * @param id The timer notification identifier.
                 * @return A copy of the period or null if the identifier is not mapped to any
                 *  timer notification registered for this timer MBean.
                 */
                // @ts-ignore
                getPeriod(id: number): java.lang.Long
                /**
                 * Gets a copy of the remaining number of occurrences associated to a timer notification.
                 * @param id The timer notification identifier.
                 * @return A copy of the remaining number of occurrences or null if the identifier is not mapped to any
                 *  timer notification registered for this timer MBean.
                 */
                // @ts-ignore
                getNbOccurences(id: number): java.lang.Long
                /**
                 * Gets a copy of the flag indicating whether a periodic notification is
                 * executed at <i>fixed-delay</i> or at <i>fixed-rate</i>.
                 * @param id The timer notification identifier.
                 * @return A copy of the flag indicating whether a periodic notification is
                 *          executed at <i>fixed-delay</i> or at <i>fixed-rate</i>.
                 */
                // @ts-ignore
                getFixedRate(id: number): java.lang.Boolean
                /**
                 * Gets the flag indicating whether or not the timer sends past notifications.
                 * <BR>The default value of the past notifications sending on/off flag is <CODE>false</CODE>.
                 * @return The past notifications sending on/off flag value.
                 * @see #setSendPastNotifications
                 */
                // @ts-ignore
                getSendPastNotifications(): boolean
                /**
                 * Sets the flag indicating whether the timer sends past notifications or not.
                 * <BR>The default value of the past notifications sending on/off flag is <CODE>false</CODE>.
                 * @param value The past notifications sending on/off flag value.
                 * @see #getSendPastNotifications
                 */
                // @ts-ignore
                setSendPastNotifications(value: boolean): void
                /**
                 * Tests whether the timer MBean is active.
                 * A timer MBean is marked active when the {@link #start start} method is called.
                 * It becomes inactive when the {@link #stop stop} method is called.
                 * <BR>The default value of the active on/off flag is <CODE>false</CODE>.
                 * @return <CODE>true</CODE> if the timer MBean is active, <CODE>false</CODE> otherwise.
                 */
                // @ts-ignore
                isActive(): boolean
                /**
                 * Tests whether the list of timer notifications is empty.
                 * @return <CODE>true</CODE> if the list of timer notifications is empty, <CODE>false</CODE> otherwise.
                 */
                // @ts-ignore
                isEmpty(): boolean
            }
        }
    }
}

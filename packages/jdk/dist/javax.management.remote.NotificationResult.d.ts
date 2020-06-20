declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>Result of a query for buffered notifications.  Notifications in
             * a notification buffer have positive, monotonically increasing
             * sequence numbers.  The result of a notification query contains the
             * following elements:</p>
             * <ul>
             * <li>The sequence number of the earliest notification still in
             * the buffer.
             * <li>The sequence number of the next notification available for
             * querying.  This will be the starting sequence number for the next
             * notification query.
             * <li>An array of (Notification,listenerID) pairs corresponding to
             * the returned notifications and the listeners they correspond to.
             * </ul>
             * <p>It is possible for the <code>nextSequenceNumber</code> to be less
             * than the <code>earliestSequenceNumber</code>.  This signifies that
             * notifications between the two might have been lost.</p>
             * @since 1.5
             */
            // @ts-ignore
            class NotificationResult extends java.lang.Object implements java.io.Serializable {
                /**
                 * <p>Constructs a notification query result.</p>
                 * @param earliestSequenceNumber the sequence number of the
                 *  earliest notification still in the buffer.
                 * @param nextSequenceNumber the sequence number of the next
                 *  notification available for querying.
                 * @param targetedNotifications the notifications resulting from
                 *  the query, and the listeners they correspond to.  This array
                 *  can be empty.
                 * @exception IllegalArgumentException if
                 *  <code>targetedNotifications</code> is null or if
                 *  <code>earliestSequenceNumber</code> or
                 *  <code>nextSequenceNumber</code> is negative.
                 */
                // @ts-ignore
                constructor(earliestSequenceNumber: number /*long*/, nextSequenceNumber: number /*long*/, targetedNotifications: javax.management.remote.TargetedNotification[])
                /**
                 * Returns the sequence number of the earliest notification still
                 * in the buffer.
                 * @return the sequence number of the earliest notification still
                 *  in the buffer.
                 */
                // @ts-ignore
                getEarliestSequenceNumber(): long
                /**
                 * Returns the sequence number of the next notification available
                 * for querying.
                 * @return the sequence number of the next notification available
                 *  for querying.
                 */
                // @ts-ignore
                getNextSequenceNumber(): long
                /**
                 * Returns the notifications resulting from the query, and the
                 * listeners they correspond to.
                 * @return the notifications resulting from the query, and the
                 *  listeners they correspond to.  This array can be empty.
                 */
                // @ts-ignore
                getTargetedNotifications(): javax.management.remote.TargetedNotification[]
                /**
                 * Returns a string representation of the object.  The result
                 * should be a concise but informative representation that is easy
                 * for a person to read.
                 * @return a string representation of the object.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}

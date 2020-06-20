declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>Notification emitted when a client connection is opened or
             * closed or when notifications are lost.  These notifications are
             * sent by connector servers (instances of {@link JMXConnectorServer})
             * and by connector clients (instances of {@link JMXConnector}).  For
             * certain connectors, a session can consist of a sequence of
             * connections.  Connection-opened and connection-closed notifications
             * will be sent for each one.</p>
             * <p>The notification type is one of the following:</p>
             * <table summary="JMXConnectionNotification Types">
             * <tr>
             * <th align=left>Type</th>
             * <th align=left>Meaning</th>
             * </tr>
             * <tr>
             * <td><code>jmx.remote.connection.opened</code></td>
             * <td>A new client connection has been opened.</td>
             * </tr>
             * <tr>
             * <td><code>jmx.remote.connection.closed</code></td>
             * <td>A client connection has been closed.</td>
             * </tr>
             * <tr>
             * <td><code>jmx.remote.connection.failed</code></td>
             * <td>A client connection has failed unexpectedly.</td>
             * </tr>
             * <tr>
             * <td><code>jmx.remote.connection.notifs.lost</code></td>
             * <td>A client connection has potentially lost notifications.  This
             * notification only appears on the client side.</td>
             * </tr>
             * </table>
             * <p>The <code>timeStamp</code> of the notification is a time value
             * (consistent with {@link System#currentTimeMillis()}) indicating
             * when the notification was constructed.</p>
             * @since 1.5
             */
            // @ts-ignore
            class JMXConnectionNotification extends javax.management.Notification {
                /**
                 * Constructs a new connection notification.  The {@link
                 * #getSource() source} of the notification depends on whether it
                 * is being sent by a connector server or a connector client:
                 * <ul>
                 * <li>For a connector server, if it is registered in an MBean
                 * server, the source is the {@link ObjectName} under which it is
                 * registered.  Otherwise, it is a reference to the connector
                 * server object itself, an instance of a subclass of {@link
                 * JMXConnectorServer}.
                 * <li>For a connector client, the source is a reference to the
                 * connector client object, an instance of a class implementing
                 * {@link JMXConnector}.
                 * </ul>
                 * @param type the type of the notification.  This is usually one
                 *  of the constants {#link #OPENED}, {@link #CLOSED}, {@link
                 *  #FAILED}, {@link #NOTIFS_LOST}.  It is not an error for it to
                 *  be a different string.
                 * @param source the connector server or client emitting the
                 *  notification.
                 * @param connectionId the ID of the connection within its
                 *  connector server.
                 * @param sequenceNumber a non-negative integer.  It is expected
                 *  but not required that this number will be greater than any
                 *  previous <code>sequenceNumber</code> in a notification from
                 *  this source.
                 * @param message an unspecified text message, typically containing
                 *  a human-readable description of the event.  Can be null.
                 * @param userData an object whose type and meaning is defined by
                 *  the connector server.  Can be null.
                 * @exception NullPointerException if <code>type</code>,
                 *  <code>source</code>, or <code>connectionId</code> is null.
                 * @exception IllegalArgumentException if
                 *  <code>sequenceNumber</code> is negative.
                 */
                // @ts-ignore
                constructor(type: string, source: any, connectionId: string, sequenceNumber: number /*long*/, message: string, userData: any)
                /**
                 * <p>Notification type string for a connection-opened notification.
                 */
                // @ts-ignore
                readonly OPENED: string
                /**
                 * <p>Notification type string for a connection-closed notification.
                 */
                // @ts-ignore
                readonly CLOSED: string
                /**
                 * <p>Notification type string for a connection-failed notification.
                 */
                // @ts-ignore
                readonly FAILED: string
                /**
                 * <p>Notification type string for a connection that has possibly
                 * lost notifications.</p>
                 */
                // @ts-ignore
                readonly NOTIFS_LOST: string
                /**
                 * <p>The connection ID to which this notification pertains.
                 * @return the connection ID.
                 */
                // @ts-ignore
                getConnectionId(): java.lang.String
            }
        }
    }
}

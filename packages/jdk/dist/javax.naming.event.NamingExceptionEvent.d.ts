declare namespace javax {
    namespace naming {
        namespace event {
            /**
             * This class represents an event fired when the procedures/processes
             * used to collect information for notifying listeners of
             * <tt>NamingEvent</tt>s threw a <tt>NamingException</tt>.
             * This can happen, for example, if the server which the listener is using
             * aborts subsequent to the <tt>addNamingListener()</tt> call.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see NamingListener#namingExceptionThrown
             * @see EventContext
             * @since 1.3
             */
            // @ts-ignore
            class NamingExceptionEvent extends java.util.EventObject {
                /**
                 * Constructs an instance of <tt>NamingExceptionEvent</tt> using
                 * the context in which the <tt>NamingException</tt> was thrown and the exception
                 * that was thrown.
                 * @param source The non-null context in which the exception was thrown.
                 * @param exc    The non-null <tt>NamingException</tt> that was thrown.
                 */
                // @ts-ignore
                constructor(source: javax.naming.event.EventContext, exc: javax.naming.NamingException)
                /**
                 * Retrieves the exception that was thrown.
                 * @return The exception that was thrown.
                 */
                // @ts-ignore
                public getException(): javax.naming.NamingException
                /**
                 * Retrieves the <tt>EventContext</tt> that fired this event.
                 * This returns the same object as <tt>EventObject.getSource()</tt>.
                 * @return The non-null <tt>EventContext</tt> that fired this event.
                 */
                // @ts-ignore
                public getEventContext(): javax.naming.event.EventContext
                /**
                 * Invokes the <tt>namingExceptionThrown()</tt> method on
                 * a listener using this event.
                 * @param listener The non-null naming listener on which to invoke
                 *  the method.
                 */
                // @ts-ignore
                public dispatch(listener: javax.naming.event.NamingListener): void
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>Store</b> is the abstraction of a Catalina component that provides
             * persistent storage and loading of Sessions and their associated user data.
             * Implementations are free to save and load the Sessions to any media they
             * wish, but it is assumed that saved Sessions are persistent across
             * server or context restarts.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Store {
                /**
                 * @return the Manager instance associated with this Store.
                 */
                // @ts-ignore
                getManager(): org.apache.catalina.Manager
                /**
                 * Set the Manager associated with this Store.
                 * @param manager The Manager which will use this Store.
                 */
                // @ts-ignore
                setManager(manager: org.apache.catalina.Manager): void
                /**
                 * @return the number of Sessions present in this Store.
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                getSize(): number /*int*/
                /**
                 * Add a property change listener to this component.
                 * @param listener The listener to add
                 */
                // @ts-ignore
                addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * @return an array containing the session identifiers of all Sessions
                 *  currently saved in this Store.  If there are no such Sessions, a
                 *  zero-length array is returned.
                 * @exception IOException if an input/output error occurred
                 */
                // @ts-ignore
                keys(): string[]
                /**
                 * Load and return the Session associated with the specified session
                 * identifier from this Store, without removing it.  If there is no
                 * such stored Session, return <code>null</code>.
                 * @param id Session identifier of the session to load
                 * @exception ClassNotFoundException if a deserialization error occurs
                 * @exception IOException if an input/output error occurs
                 * @return the loaded Session instance
                 */
                // @ts-ignore
                load(id: java.lang.String | string): org.apache.catalina.Session
                /**
                 * Remove the Session with the specified session identifier from
                 * this Store, if present.  If no such Session is present, this method
                 * takes no action.
                 * @param id Session identifier of the Session to be removed
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                remove(id: java.lang.String | string): void
                /**
                 * Remove all Sessions from this Store.
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Remove a property change listener from this component.
                 * @param listener The listener to remove
                 */
                // @ts-ignore
                removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Save the specified Session into this Store.  Any previously saved
                 * information for the associated session identifier is replaced.
                 * @param session Session to be saved
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                save(session: org.apache.catalina.Session): void
            }
        }
    }
}

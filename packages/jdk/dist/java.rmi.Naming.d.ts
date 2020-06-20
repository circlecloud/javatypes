declare namespace java {
    namespace rmi {
        /**
         * The <code>Naming</code> class provides methods for storing and obtaining
         * references to remote objects in a remote object registry.  Each method of
         * the <code>Naming</code> class takes as one of its arguments a name that
         * is a <code>java.lang.String</code> in URL format (without the
         * scheme component) of the form:
         * <PRE>
         * //host:port/name
         * </PRE>
         * <P>where <code>host</code> is the host (remote or local) where the registry
         * is located, <code>port</code> is the port number on which the registry
         * accepts calls, and where <code>name</code> is a simple string uninterpreted
         * by the registry. Both <code>host</code> and <code>port</code> are optional.
         * If <code>host</code> is omitted, the host defaults to the local host. If
         * <code>port</code> is omitted, then the port defaults to 1099, the
         * "well-known" port that RMI's registry, <code>rmiregistry</code>, uses.
         * <P><em>Binding</em> a name for a remote object is associating or
         * registering a name for a remote object that can be used at a later time to
         * look up that remote object.  A remote object can be associated with a name
         * using the <code>Naming</code> class's <code>bind</code> or
         * <code>rebind</code> methods.
         * <P>Once a remote object is registered (bound) with the RMI registry on the
         * local host, callers on a remote (or local) host can lookup the remote
         * object by name, obtain its reference, and then invoke remote methods on the
         * object.  A registry may be shared by all servers running on a host or an
         * individual server process may create and use its own registry if desired
         * (see <code>java.rmi.registry.LocateRegistry.createRegistry</code> method
         * for details).
         * @author Ann Wollrath
         * @author Roger Riggs
         * @since JDK1.1
         * @see java.rmi.registry.Registry
         * @see java.rmi.registry.LocateRegistry
         * @see java.rmi.registry.LocateRegistry#createRegistry(int)
         */
        // @ts-ignore
        class Naming extends java.lang.Object {
            /**
             * Returns a reference, a stub, for the remote object associated
             * with the specified <code>name</code>.
             * @param name a name in URL format (without the scheme component)
             * @return a reference for a remote object
             * @exception NotBoundException if name is not currently bound
             * @exception RemoteException if registry could not be contacted
             * @exception AccessException if this operation is not permitted
             * @exception MalformedURLException if the name is not an appropriately
             *   formatted URL
             * @since JDK1.1
             */
            // @ts-ignore
            lookup(name: string): java.rmi.Remote
            /**
             * Binds the specified <code>name</code> to a remote object.
             * @param name a name in URL format (without the scheme component)
             * @param obj a reference for the remote object (usually a stub)
             * @exception AlreadyBoundException if name is already bound
             * @exception MalformedURLException if the name is not an appropriately
             *   formatted URL
             * @exception RemoteException if registry could not be contacted
             * @exception AccessException if this operation is not permitted (if
             *  originating from a non-local host, for example)
             * @since JDK1.1
             */
            // @ts-ignore
            bind(name: string, obj: java.rmi.Remote): void
            /**
             * Destroys the binding for the specified name that is associated
             * with a remote object.
             * @param name a name in URL format (without the scheme component)
             * @exception NotBoundException if name is not currently bound
             * @exception MalformedURLException if the name is not an appropriately
             *   formatted URL
             * @exception RemoteException if registry could not be contacted
             * @exception AccessException if this operation is not permitted (if
             *  originating from a non-local host, for example)
             * @since JDK1.1
             */
            // @ts-ignore
            unbind(name: string): void
            /**
             * Rebinds the specified name to a new remote object. Any existing
             * binding for the name is replaced.
             * @param name a name in URL format (without the scheme component)
             * @param obj new remote object to associate with the name
             * @exception MalformedURLException if the name is not an appropriately
             *   formatted URL
             * @exception RemoteException if registry could not be contacted
             * @exception AccessException if this operation is not permitted (if
             *  originating from a non-local host, for example)
             * @since JDK1.1
             */
            // @ts-ignore
            rebind(name: string, obj: java.rmi.Remote): void
            /**
             * Returns an array of the names bound in the registry.  The names are
             * URL-formatted (without the scheme component) strings. The array contains
             * a snapshot of the names present in the registry at the time of the
             * call.
             * @param name a registry name in URL format (without the scheme
             *           component)
             * @return an array of names (in the appropriate format) bound
             *           in the registry
             * @exception MalformedURLException if the name is not an appropriately
             *   formatted URL
             * @exception RemoteException if registry could not be contacted.
             * @since JDK1.1
             */
            // @ts-ignore
            list(name: string): java.lang.String[]
        }
    }
}

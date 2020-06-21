declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Catalina JNDI Context implementation.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class NamingContext extends java.lang.Object implements javax.naming.Context {
                /**
                 * Builds a naming context.
                 * @param env The environment to use to construct the naming context
                 * @param name The name of the associated Catalina Context
                 */
                // @ts-ignore
                constructor(env: java.util.Hashtable<java.lang.String | string, java.lang.Object | any>, name: java.lang.String | string)
                /**
                 * Builds a naming context.
                 * @param env The environment to use to construct the naming context
                 * @param name The name of the associated Catalina Context
                 * @param bindings The initial bindings for the naming context
                 */
                // @ts-ignore
                constructor(env: java.util.Hashtable<java.lang.String | string, java.lang.Object | any>, name: java.lang.String | string, bindings: java.util.HashMap<java.lang.String | string, org.apache.naming.NamingEntry>)
                /**
                 * Name parser for this context.
                 */
                // @ts-ignore
                static readonly nameParser: javax.naming.NameParser
                /**
                 * Environment.
                 */
                // @ts-ignore
                readonly env: java.util.Hashtable<java.lang.String | string, java.lang.Object | any>
                /**
                 * The string manager for this package.
                 */
                // @ts-ignore
                static readonly sm: org.apache.naming.StringManager
                /**
                 * Bindings in this Context.
                 */
                // @ts-ignore
                readonly bindings: java.util.HashMap<java.lang.String | string, org.apache.naming.NamingEntry>
                /**
                 * Name of the associated Catalina Context.
                 */
                // @ts-ignore
                readonly name: java.lang.String | string
                // @ts-ignore
                public getExceptionOnFailedWrite(): boolean
                // @ts-ignore
                public setExceptionOnFailedWrite(exceptionOnFailedWrite: boolean): void
                /**
                 * Retrieves the named object. If name is empty, returns a new instance
                 * of this context (which represents the same naming context as this
                 * context, but its environment may be modified independently and it may
                 * be accessed concurrently).
                 * @param name the name of the object to look up
                 * @return the object bound to name
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public lookup(name: javax.naming.Name): any
                /**
                 * Retrieves the named object.
                 * @param name the name of the object to look up
                 * @return the object bound to name
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public lookup(name: java.lang.String | string): any
                /**
                 * Binds a name to an object. All intermediate contexts and the target
                 * context (that named by all but terminal atomic component of the name)
                 * must already exist.
                 * @param name the name to bind; may not be empty
                 * @param obj the object to bind; possibly null
                 * @exception NameAlreadyBoundException if name is already bound
                 * @exception javax.naming.directory.InvalidAttributesException if object
                 *  did not supply all mandatory attributes
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public bind(name: javax.naming.Name, obj: java.lang.Object | any): void
                /**
                 * Binds a name to an object.
                 * @param name the name to bind; may not be empty
                 * @param obj the object to bind; possibly null
                 * @exception NameAlreadyBoundException if name is already bound
                 * @exception javax.naming.directory.InvalidAttributesException if object
                 *  did not supply all mandatory attributes
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public bind(name: java.lang.String | string, obj: java.lang.Object | any): void
                /**
                 * Binds a name to an object, overwriting any existing binding. All
                 * intermediate contexts and the target context (that named by all but
                 * terminal atomic component of the name) must already exist.
                 * <p>
                 * If the object is a DirContext, any existing attributes associated with
                 * the name are replaced with those of the object. Otherwise, any
                 * existing attributes associated with the name remain unchanged.
                 * @param name the name to bind; may not be empty
                 * @param obj the object to bind; possibly null
                 * @exception javax.naming.directory.InvalidAttributesException if object
                 *  did not supply all mandatory attributes
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public rebind(name: javax.naming.Name, obj: java.lang.Object | any): void
                /**
                 * Binds a name to an object, overwriting any existing binding.
                 * @param name the name to bind; may not be empty
                 * @param obj the object to bind; possibly null
                 * @exception javax.naming.directory.InvalidAttributesException if object
                 *  did not supply all mandatory attributes
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public rebind(name: java.lang.String | string, obj: java.lang.Object | any): void
                /**
                 * Unbinds the named object. Removes the terminal atomic name in name
                 * from the target context--that named by all but the terminal atomic
                 * part of name.
                 * <p>
                 * This method is idempotent. It succeeds even if the terminal atomic
                 * name is not bound in the target context, but throws
                 * NameNotFoundException if any of the intermediate contexts do not exist.
                 * @param name the name to bind; may not be empty
                 * @exception NameNotFoundException if an intermediate context does not
                 *  exist
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public unbind(name: javax.naming.Name): void
                /**
                 * Unbinds the named object.
                 * @param name the name to bind; may not be empty
                 * @exception NameNotFoundException if an intermediate context does not
                 *  exist
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public unbind(name: java.lang.String | string): void
                /**
                 * Binds a new name to the object bound to an old name, and unbinds the
                 * old name. Both names are relative to this context. Any attributes
                 * associated with the old name become associated with the new name.
                 * Intermediate contexts of the old name are not changed.
                 * @param oldName the name of the existing binding; may not be empty
                 * @param newName the name of the new binding; may not be empty
                 * @exception NameAlreadyBoundException if newName is already bound
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public rename(oldName: javax.naming.Name, newName: javax.naming.Name): void
                /**
                 * Binds a new name to the object bound to an old name, and unbinds the
                 * old name.
                 * @param oldName the name of the existing binding; may not be empty
                 * @param newName the name of the new binding; may not be empty
                 * @exception NameAlreadyBoundException if newName is already bound
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public rename(oldName: java.lang.String | string, newName: java.lang.String | string): void
                /**
                 * Enumerates the names bound in the named context, along with the class
                 * names of objects bound to them. The contents of any subcontexts are
                 * not included.
                 * <p>
                 * If a binding is added to or removed from this context, its effect on
                 * an enumeration previously returned is undefined.
                 * @param name the name of the context to list
                 * @return an enumeration of the names and class names of the bindings in
                 *  this context. Each element of the enumeration is of type NameClassPair.
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public list(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                /**
                 * Enumerates the names bound in the named context, along with the class
                 * names of objects bound to them.
                 * @param name the name of the context to list
                 * @return an enumeration of the names and class names of the bindings in
                 *  this context. Each element of the enumeration is of type NameClassPair.
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public list(name: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                /**
                 * Enumerates the names bound in the named context, along with the
                 * objects bound to them. The contents of any subcontexts are not
                 * included.
                 * <p>
                 * If a binding is added to or removed from this context, its effect on
                 * an enumeration previously returned is undefined.
                 * @param name the name of the context to list
                 * @return an enumeration of the bindings in this context.
                 *  Each element of the enumeration is of type Binding.
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public listBindings(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                /**
                 * Enumerates the names bound in the named context, along with the
                 * objects bound to them.
                 * @param name the name of the context to list
                 * @return an enumeration of the bindings in this context.
                 *  Each element of the enumeration is of type Binding.
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public listBindings(name: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                /**
                 * Destroys the named context and removes it from the namespace. Any
                 * attributes associated with the name are also removed. Intermediate
                 * contexts are not destroyed.
                 * <p>
                 * This method is idempotent. It succeeds even if the terminal atomic
                 * name is not bound in the target context, but throws
                 * NameNotFoundException if any of the intermediate contexts do not exist.
                 * In a federated naming system, a context from one naming system may be
                 * bound to a name in another. One can subsequently look up and perform
                 * operations on the foreign context using a composite name. However, an
                 * attempt destroy the context using this composite name will fail with
                 * NotContextException, because the foreign context is not a "subcontext"
                 * of the context in which it is bound. Instead, use unbind() to remove
                 * the binding of the foreign context. Destroying the foreign context
                 * requires that the destroySubcontext() be performed on a context from
                 * the foreign context's "native" naming system.
                 * @param name the name of the context to be destroyed; may not be empty
                 * @exception NameNotFoundException if an intermediate context does not
                 *  exist
                 * @exception NotContextException if the name is bound but does not name
                 *  a context, or does not name a context of the appropriate type
                 */
                // @ts-ignore
                public destroySubcontext(name: javax.naming.Name): void
                /**
                 * Destroys the named context and removes it from the namespace.
                 * @param name the name of the context to be destroyed; may not be empty
                 * @exception NameNotFoundException if an intermediate context does not
                 *  exist
                 * @exception NotContextException if the name is bound but does not name
                 *  a context, or does not name a context of the appropriate type
                 */
                // @ts-ignore
                public destroySubcontext(name: java.lang.String | string): void
                /**
                 * Creates and binds a new context. Creates a new context with the given
                 * name and binds it in the target context (that named by all but
                 * terminal atomic component of the name). All intermediate contexts and
                 * the target context must already exist.
                 * @param name the name of the context to create; may not be empty
                 * @return the newly created context
                 * @exception NameAlreadyBoundException if name is already bound
                 * @exception javax.naming.directory.InvalidAttributesException if creation
                 *  of the sub-context requires specification of mandatory attributes
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public createSubcontext(name: javax.naming.Name): javax.naming.Context
                /**
                 * Creates and binds a new context.
                 * @param name the name of the context to create; may not be empty
                 * @return the newly created context
                 * @exception NameAlreadyBoundException if name is already bound
                 * @exception javax.naming.directory.InvalidAttributesException if creation
                 *  of the sub-context requires specification of mandatory attributes
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public createSubcontext(name: java.lang.String | string): javax.naming.Context
                /**
                 * Retrieves the named object, following links except for the terminal
                 * atomic component of the name. If the object bound to name is not a
                 * link, returns the object itself.
                 * @param name the name of the object to look up
                 * @return the object bound to name, not following the terminal link
                 *  (if any).
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public lookupLink(name: javax.naming.Name): any
                /**
                 * Retrieves the named object, following links except for the terminal
                 * atomic component of the name.
                 * @param name the name of the object to look up
                 * @return the object bound to name, not following the terminal link
                 *  (if any).
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public lookupLink(name: java.lang.String | string): any
                /**
                 * Retrieves the parser associated with the named context. In a
                 * federation of namespaces, different naming systems will parse names
                 * differently. This method allows an application to get a parser for
                 * parsing names into their atomic components using the naming convention
                 * of a particular naming system. Within any single naming system,
                 * NameParser objects returned by this method must be equal (using the
                 * equals() test).
                 * @param name the name of the context from which to get the parser
                 * @return a name parser that can parse compound names into their atomic
                 *  components
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public getNameParser(name: javax.naming.Name): javax.naming.NameParser
                /**
                 * Retrieves the parser associated with the named context.
                 * @param name the name of the context from which to get the parser
                 * @return a name parser that can parse compound names into their atomic
                 *  components
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public getNameParser(name: java.lang.String | string): javax.naming.NameParser
                /**
                 * Composes the name of this context with a name relative to this context.
                 * <p>
                 * Given a name (name) relative to this context, and the name (prefix)
                 * of this context relative to one of its ancestors, this method returns
                 * the composition of the two names using the syntax appropriate for the
                 * naming system(s) involved. That is, if name names an object relative
                 * to this context, the result is the name of the same object, but
                 * relative to the ancestor context. None of the names may be null.
                 * @param name a name relative to this context
                 * @param prefix the name of this context relative to one of its ancestors
                 * @return the composition of prefix and name
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name
                /**
                 * Composes the name of this context with a name relative to this context.
                 * @param name a name relative to this context
                 * @param prefix the name of this context relative to one of its ancestors
                 * @return the composition of prefix and name
                 */
                // @ts-ignore
                public composeName(name: java.lang.String | string, prefix: java.lang.String | string): string
                /**
                 * Adds a new environment property to the environment of this context. If
                 * the property already exists, its value is overwritten.
                 * @param propName the name of the environment property to add; may not
                 *  be null
                 * @param propVal the value of the property to add; may not be null
                 */
                // @ts-ignore
                public addToEnvironment(propName: java.lang.String | string, propVal: java.lang.Object | any): any
                /**
                 * Removes an environment property from the environment of this context.
                 * @param propName the name of the environment property to remove;
                 *  may not be null
                 */
                // @ts-ignore
                public removeFromEnvironment(propName: java.lang.String | string): any
                /**
                 * Retrieves the environment in effect for this context. See class
                 * description for more details on environment properties.
                 * The caller should not make any changes to the object returned: their
                 * effect on the context is undefined. The environment of this context
                 * may be changed using addToEnvironment() and removeFromEnvironment().
                 * @return the environment of this context; never null
                 */
                // @ts-ignore
                public getEnvironment(): java.util.Hashtable<any, any>
                /**
                 * Closes this context. This method releases this context's resources
                 * immediately, instead of waiting for them to be released automatically
                 * by the garbage collector.
                 * This method is idempotent: invoking it on a context that has already
                 * been closed has no effect. Invoking any other method on a closed
                 * context is not allowed, and results in undefined behaviour.
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public close(): void
                /**
                 * Retrieves the full name of this context within its own namespace.
                 * <p>
                 * Many naming services have a notion of a "full name" for objects in
                 * their respective namespaces. For example, an LDAP entry has a
                 * distinguished name, and a DNS record has a fully qualified name. This
                 * method allows the client application to retrieve this name. The string
                 * returned by this method is not a JNDI composite name and should not be
                 * passed directly to context methods. In naming systems for which the
                 * notion of full name does not make sense,
                 * OperationNotSupportedException is thrown.
                 * @return this context's name in its own namespace; never null
                 * @exception OperationNotSupportedException if the naming system does
                 *  not have the notion of a full name
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                public getNameInNamespace(): string
                /**
                 * Retrieves the named object.
                 * @param name the name of the object to look up
                 * @param resolveLinks If true, the links will be resolved
                 * @return the object bound to name
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                lookup(name: javax.naming.Name, resolveLinks: boolean): any
                /**
                 * Binds a name to an object. All intermediate contexts and the target
                 * context (that named by all but terminal atomic component of the name)
                 * must already exist.
                 * @param name the name to bind; may not be empty
                 * @param obj the object to bind; possibly null
                 * @param rebind if true, then perform a rebind (ie, overwrite)
                 * @exception NameAlreadyBoundException if name is already bound
                 * @exception javax.naming.directory.InvalidAttributesException if object
                 *  did not supply all mandatory attributes
                 * @exception NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                bind(name: javax.naming.Name, obj: java.lang.Object | any, rebind: boolean): void
                /**
                 * @return <code>true</code> if writing is allowed on this context.
                 */
                // @ts-ignore
                isWritable(): boolean
                /**
                 * Throws a naming exception is Context is not writable.
                 * @return <code>true</code> if the Context is writable
                 * @throws NamingException if the Context is not writable and
                 *   <code>exceptionOnFailedWrite</code> is <code>true</code>
                 */
                // @ts-ignore
                checkWritable(): boolean
            }
        }
    }
}

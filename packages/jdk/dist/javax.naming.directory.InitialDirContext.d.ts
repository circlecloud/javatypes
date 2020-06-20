declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This class is the starting context for performing
             * directory operations. The documentation in the class description
             * of InitialContext (including those for synchronization) apply here.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see javax.naming.InitialContext
             * @since 1.3
             */
            // @ts-ignore
            class InitialDirContext extends javax.naming.InitialContext implements javax.naming.directory.DirContext {
                /**
                 * Constructs an initial DirContext with the option of not
                 * initializing it.  This may be used by a constructor in
                 * a subclass when the value of the environment parameter
                 * is not yet known at the time the <tt>InitialDirContext</tt>
                 * constructor is called.  The subclass's constructor will
                 * call this constructor, compute the value of the environment,
                 * and then call <tt>init()</tt> before returning.
                 * @param lazy
                 *           true means do not initialize the initial DirContext; false
                 *           is equivalent to calling <tt>new InitialDirContext()</tt>
                 * @throws NamingException if a naming exception is encountered
                 * @see InitialContext#init(Hashtable)
                 * @since 1.3
                 */
                // @ts-ignore
                constructor(lazy: boolean)
                /**
                 * Constructs an initial DirContext.
                 * No environment properties are supplied.
                 * Equivalent to <tt>new InitialDirContext(null)</tt>.
                 * @throws NamingException if a naming exception is encountered
                 * @see #InitialDirContext(Hashtable)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an initial DirContext using the supplied environment.
                 * Environment properties are discussed in the
                 * <tt>javax.naming.InitialContext</tt> class description.
                 * <p> This constructor will not modify <tt>environment</tt>
                 * or save a reference to it, but may save a clone.
                 * Caller should not modify mutable keys and values in
                 * <tt>environment</tt> after it has been passed to the constructor.
                 * @param environment
                 *           environment used to create the initial DirContext.
                 *           Null indicates an empty environment.
                 * @throws NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                constructor(environment: java.util.Hashtable<any, ?>)
                // @ts-ignore
                getAttributes(name: string): javax.naming.directory.Attributes
                // @ts-ignore
                getAttributes(name: string, attrIds: string[]): javax.naming.directory.Attributes
                // @ts-ignore
                getAttributes(name: javax.naming.Name): javax.naming.directory.Attributes
                // @ts-ignore
                getAttributes(name: javax.naming.Name, attrIds: string[]): javax.naming.directory.Attributes
                // @ts-ignore
                modifyAttributes(name: string, mod_op: number /*int*/, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                modifyAttributes(name: javax.naming.Name, mod_op: number /*int*/, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                modifyAttributes(name: string, mods: javax.naming.directory.ModificationItem[]): void
                // @ts-ignore
                modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[]): void
                // @ts-ignore
                bind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                rebind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                createSubcontext(name: string, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                // @ts-ignore
                createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                // @ts-ignore
                getSchema(name: string): javax.naming.directory.DirContext
                // @ts-ignore
                getSchema(name: javax.naming.Name): javax.naming.directory.DirContext
                // @ts-ignore
                getSchemaClassDefinition(name: string): javax.naming.directory.DirContext
                // @ts-ignore
                getSchemaClassDefinition(name: javax.naming.Name): javax.naming.directory.DirContext
                // @ts-ignore
                search(name: string, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                search(name: string, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                search(name: string, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                search(name: string, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
            }
        }
    }
}

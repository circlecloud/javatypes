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
                constructor(environment: java.util.Hashtable<any, any>)
                // @ts-ignore
                public getAttributes(name: java.lang.String | string): javax.naming.directory.Attributes
                // @ts-ignore
                public getAttributes(name: java.lang.String | string, attrIds: java.lang.String[] | string[]): javax.naming.directory.Attributes
                // @ts-ignore
                public getAttributes(name: javax.naming.Name): javax.naming.directory.Attributes
                // @ts-ignore
                public getAttributes(name: javax.naming.Name, attrIds: java.lang.String[] | string[]): javax.naming.directory.Attributes
                // @ts-ignore
                public modifyAttributes(name: java.lang.String | string, mod_op: number /*int*/, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                public modifyAttributes(name: javax.naming.Name, mod_op: number /*int*/, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                public modifyAttributes(name: java.lang.String | string, mods: javax.naming.directory.ModificationItem[]): void
                // @ts-ignore
                public modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[]): void
                // @ts-ignore
                public bind(name: java.lang.String | string, obj: java.lang.Object | any, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                public bind(name: javax.naming.Name, obj: java.lang.Object | any, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                public rebind(name: java.lang.String | string, obj: java.lang.Object | any, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                public rebind(name: javax.naming.Name, obj: java.lang.Object | any, attrs: javax.naming.directory.Attributes): void
                // @ts-ignore
                public createSubcontext(name: java.lang.String | string, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                // @ts-ignore
                public createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                // @ts-ignore
                public getSchema(name: java.lang.String | string): javax.naming.directory.DirContext
                // @ts-ignore
                public getSchema(name: javax.naming.Name): javax.naming.directory.DirContext
                // @ts-ignore
                public getSchemaClassDefinition(name: java.lang.String | string): javax.naming.directory.DirContext
                // @ts-ignore
                public getSchemaClassDefinition(name: javax.naming.Name): javax.naming.directory.DirContext
                // @ts-ignore
                public search(name: java.lang.String | string, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                public search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                public search(name: java.lang.String | string, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: java.lang.String[] | string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                public search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: java.lang.String[] | string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                public search(name: java.lang.String | string, filter: java.lang.String | string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                public search(name: javax.naming.Name, filter: java.lang.String | string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                public search(name: java.lang.String | string, filterExpr: java.lang.String | string, filterArgs: java.lang.Object[] | any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                // @ts-ignore
                public search(name: javax.naming.Name, filterExpr: java.lang.String | string, filterArgs: java.lang.Object[] | any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
            }
        }
    }
}

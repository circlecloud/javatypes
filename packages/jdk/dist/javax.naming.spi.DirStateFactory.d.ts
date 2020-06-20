declare namespace javax {
    namespace naming {
        namespace spi {
            /**
             * This interface represents a factory for obtaining the state of an
             * object and corresponding attributes for binding.
             * <p>
             * The JNDI framework allows for object implementations to
             * be loaded in dynamically via <tt>object factories</tt>.
             * <p>
             * A <tt>DirStateFactory</tt> extends <tt>StateFactory</tt>
             * by allowing an <tt>Attributes</tt> instance
             * to be supplied to and be returned by the <tt>getStateToBind()</tt> method.
             * <tt>DirStateFactory</tt> implementations are intended to be used by
             * <tt>DirContext</tt> service providers.
             * When a caller binds an object using <tt>DirContext.bind()</tt>,
             * he might also specify a set of attributes to be bound with the object.
             * The object and attributes to be bound are passed to
             * the <tt>getStateToBind()</tt> method of a factory.
             * If the factory processes the object and attributes, it returns
             * a corresponding pair of object and attributes to be bound.
             * If the factory does not process the object, it must return null.
             * <p>
             * For example, a caller might bind a printer object with some printer-related
             * attributes.
             * <blockquote><pre>
             * ctx.rebind("inky", printer, printerAttrs);
             * </pre></blockquote>
             * An LDAP service provider for <tt>ctx</tt> uses a <tt>DirStateFactory</tt>
             * (indirectly via <tt>DirectoryManager.getStateToBind()</tt>)
             * and gives it <tt>printer</tt> and <tt>printerAttrs</tt>. A factory for
             * an LDAP directory might turn <tt>printer</tt> into a set of attributes
             * and merge that with <tt>printerAttrs</tt>. The service provider then
             * uses the resulting attributes to create an LDAP entry and updates
             * the directory.
             * <p> Since <tt>DirStateFactory</tt> extends <tt>StateFactory</tt>, it
             * has two <tt>getStateToBind()</tt> methods, where one
             * differs from the other by the attributes
             * argument. <tt>DirectoryManager.getStateToBind()</tt> will only use
             * the form that accepts the attributes argument, while
             * <tt>NamingManager.getStateToBind()</tt> will only use the form that
             * does not accept the attributes argument.
             * <p> Either form of the <tt>getStateToBind()</tt> method of a
             * DirStateFactory may be invoked multiple times, possibly using different
             * parameters.  The implementation is thread-safe.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see DirectoryManager#getStateToBind
             * @see DirObjectFactory
             * @since 1.3
             */
            // @ts-ignore
            interface DirStateFactory extends javax.naming.spi.StateFactory {
                /**
                 * Retrieves the state of an object for binding given the object and attributes
                 * to be transformed.
                 * <p>
                 * <tt>DirectoryManager.getStateToBind()</tt>
                 * successively loads in state factories. If a factory implements
                 * <tt>DirStateFactory</tt>, <tt>DirectoryManager</tt> invokes this method;
                 * otherwise, it invokes <tt>StateFactory.getStateToBind()</tt>.
                 * It does this until a factory produces a non-null answer.
                 * <p>
                 * When an exception is thrown by a factory,
                 * the exception is passed on to the caller
                 * of <tt>DirectoryManager.getStateToBind()</tt>. The search for other factories
                 * that may produce a non-null answer is halted.
                 * A factory should only throw an exception if it is sure that
                 * it is the only intended factory and that no other factories
                 * should be tried.
                 * If this factory cannot create an object using the arguments supplied,
                 * it should return null.
                 * <p>
                 * The <code>name</code> and <code>nameCtx</code> parameters may
                 * optionally be used to specify the name of the object being created.
                 * See the description of "Name and Context Parameters" in
                 * {@link ObjectFactory#getObjectInstance ObjectFactory.getObjectInstance()}
                 * for details.
                 * If a factory uses <code>nameCtx</code> it should synchronize its use
                 * against concurrent access, since context implementations are not
                 * guaranteed to be thread-safe.
                 * <p>
                 * The <tt>name</tt>, <tt>inAttrs</tt>, and <tt>environment</tt> parameters
                 * are owned by the caller.
                 * The implementation will not modify these objects or keep references
                 * to them, although it may keep references to clones or copies.
                 * The object returned by this method is owned by the caller.
                 * The implementation will not subsequently modify it.
                 * It will contain either a new <tt>Attributes</tt> object that is
                 * likewise owned by the caller, or a reference to the original
                 * <tt>inAttrs</tt> parameter.
                 * @param obj A possibly null object whose state is to be retrieved.
                 * @param name The name of this object relative to <code>nameCtx</code>,
                 *               or null if no name is specified.
                 * @param nameCtx The context relative to which the <code>name</code>
                 *               parameter is specified, or null if <code>name</code> is
                 *               relative to the default initial context.
                 * @param environment The possibly null environment to
                 *               be used in the creation of the object's state.
                 * @param inAttrs The possibly null attributes to be bound with the object.
                 *       The factory must not modify <tt>inAttrs</tt>.
                 * @return A <tt>Result</tt> containing the object's state for binding
                 *  and the corresponding
                 *  attributes to be bound; null if the object don't use this factory.
                 * @exception NamingException If this factory encountered an exception
                 *  while attempting to get the object's state, and no other factories are
                 *  to be tried.
                 * @see DirectoryManager#getStateToBind
                 */
                // @ts-ignore
                getStateToBind(obj: any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any, ?>, inAttrs: javax.naming.directory.Attributes): javax.naming.spi.DirStateFactory.Result
            }
        }
    }
}

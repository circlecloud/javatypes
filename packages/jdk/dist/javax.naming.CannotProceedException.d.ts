declare namespace javax {
    namespace naming {
        /**
         * This exception is thrown to indicate that the operation reached
         * a point in the name where the operation cannot proceed any further.
         * When performing an operation on a composite name, a naming service
         * provider may reach a part of the name that does not belong to its
         * namespace.  At that point, it can construct a
         * CannotProceedException and then invoke methods provided by
         * javax.naming.spi.NamingManager (such as getContinuationContext())
         * to locate another provider to continue the operation.  If this is
         * not possible, this exception is raised to the caller of the
         * context operation.
         * <p>
         * If the program wants to handle this exception in particular, it
         * should catch CannotProceedException explicitly before attempting to
         * catch NamingException.
         * <p>
         * A CannotProceedException instance is not synchronized against concurrent
         * multithreaded access. Multiple threads trying to access and modify
         * CannotProceedException should lock the object.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class CannotProceedException extends javax.naming.NamingException {
            /**
             * Constructs a new instance of CannotProceedException using an
             * explanation. All unspecified fields default to null.
             * @param explanation     A possibly null string containing additional
             *                           detail about this exception.
             *    If null, this exception has no detail message.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: java.lang.String | string)
            /**
             * Constructs a new instance of CannotProceedException.
             * All fields default to null.
             */
            // @ts-ignore
            constructor()
            /**
             * Contains the remaining unresolved part of the second
             * "name" argument to Context.rename().
             * This information necessary for
             * continuing the Context.rename() operation.
             * <p>
             * This field is initialized to null.
             * It should not be manipulated directly:  it should
             * be accessed and updated using getRemainingName() and setRemainingName().
             * @serial 
             * @see #getRemainingNewName
             * @see #setRemainingNewName
             */
            // @ts-ignore
            remainingNewName: javax.naming.Name
            /**
             * Contains the environment
             * relevant for the Context or DirContext method that cannot proceed.
             * <p>
             * This field is initialized to null.
             * It should not be manipulated directly:  it should be accessed
             * and updated using getEnvironment() and setEnvironment().
             * @serial 
             * @see #getEnvironment
             * @see #setEnvironment
             */
            // @ts-ignore
            environment: java.util.Hashtable<any, any>
            /**
             * Contains the name of the resolved object, relative
             * to the context <code>altNameCtx</code>.  It is a composite name.
             * If null, then no name is specified.
             * See the <code>javax.naming.spi.ObjectFactory.getObjectInstance</code>
             * method for details on how this is used.
             * <p>
             * This field is initialized to null.
             * It should not be manipulated directly:  it should
             * be accessed and updated using getAltName() and setAltName().
             * @serial 
             * @see #getAltName
             * @see #setAltName
             * @see #altNameCtx
             * @see javax.naming.spi.ObjectFactory#getObjectInstance
             */
            // @ts-ignore
            altName: javax.naming.Name
            /**
             * Contains the context relative to which
             * <code>altName</code> is specified.  If null, then the default initial
             * context is implied.
             * See the <code>javax.naming.spi.ObjectFactory.getObjectInstance</code>
             * method for details on how this is used.
             * <p>
             * This field is initialized to null.
             * It should not be manipulated directly:  it should
             * be accessed and updated using getAltNameCtx() and setAltNameCtx().
             * @serial 
             * @see #getAltNameCtx
             * @see #setAltNameCtx
             * @see #altName
             * @see javax.naming.spi.ObjectFactory#getObjectInstance
             */
            // @ts-ignore
            altNameCtx: javax.naming.Context
            /**
             * Retrieves the environment that was in effect when this exception
             * was created.
             * @return Possibly null environment property set.
             *           null means no environment was recorded for this exception.
             * @see #setEnvironment
             */
            // @ts-ignore
            getEnvironment(): java.util.Hashtable<any, any>
            /**
             * Sets the environment that will be returned when getEnvironment()
             * is called.
             * @param environment A possibly null environment property set.
             *           null means no environment is being recorded for
             *           this exception.
             * @see #getEnvironment
             */
            // @ts-ignore
            setEnvironment(environment: java.util.Hashtable<any, any>): void
            /**
             * Retrieves the "remaining new name" field of this exception, which is
             * used when this exception is thrown during a rename() operation.
             * @return The possibly null part of the new name that has not been resolved.
             *           It is a composite name. It can be null, which means
             *           the remaining new name field has not been set.
             * @see #setRemainingNewName
             */
            // @ts-ignore
            getRemainingNewName(): javax.naming.Name
            /**
             * Sets the "remaining new name" field of this exception.
             * This is the value returned by <code>getRemainingNewName()</code>.
             * <p>
             * <tt>newName</tt> is a composite name. If the intent is to set
             * this field using a compound name or string, you must
             * "stringify" the compound name, and create a composite
             * name with a single component using the string. You can then
             * invoke this method using the resulting composite name.
             * <p>
             * A copy of <code>newName</code> is made and stored.
             * Subsequent changes to <code>name</code> does not
             * affect the copy in this NamingException and vice versa.
             * @param newName The possibly null name to set the "remaining new name" to.
             *           If null, it sets the remaining name field to null.
             * @see #getRemainingNewName
             */
            // @ts-ignore
            setRemainingNewName(newName: javax.naming.Name): void
            /**
             * Retrieves the <code>altName</code> field of this exception.
             * This is the name of the resolved object, relative to the context
             * <code>altNameCtx</code>. It will be used during a subsequent call to the
             * <code>javax.naming.spi.ObjectFactory.getObjectInstance</code> method.
             * @return The name of the resolved object, relative to
             *           <code>altNameCtx</code>.
             *           It is a composite name.  If null, then no name is specified.
             * @see #setAltName
             * @see #getAltNameCtx
             * @see javax.naming.spi.ObjectFactory#getObjectInstance
             */
            // @ts-ignore
            getAltName(): javax.naming.Name
            /**
             * Sets the <code>altName</code> field of this exception.
             * @param altName   The name of the resolved object, relative to
             *                   <code>altNameCtx</code>.
             *                   It is a composite name.
             *                   If null, then no name is specified.
             * @see #getAltName
             * @see #setAltNameCtx
             */
            // @ts-ignore
            setAltName(altName: javax.naming.Name): void
            /**
             * Retrieves the <code>altNameCtx</code> field of this exception.
             * This is the context relative to which <code>altName</code> is named.
             * It will be used during a subsequent call to the
             * <code>javax.naming.spi.ObjectFactory.getObjectInstance</code> method.
             * @return The context relative to which <code>altName</code> is named.
             *           If null, then the default initial context is implied.
             * @see #setAltNameCtx
             * @see #getAltName
             * @see javax.naming.spi.ObjectFactory#getObjectInstance
             */
            // @ts-ignore
            getAltNameCtx(): javax.naming.Context
            /**
             * Sets the <code>altNameCtx</code> field of this exception.
             * @param altNameCtx
             *                   The context relative to which <code>altName</code>
             *                   is named.  If null, then the default initial context
             *                   is implied.
             * @see #getAltNameCtx
             * @see #setAltName
             */
            // @ts-ignore
            setAltNameCtx(altNameCtx: javax.naming.Context): void
        }
    }
}

declare namespace javax {
    namespace naming {
        /**
         * This is the superclass of all exceptions thrown by
         * operations in the Context and DirContext interfaces.
         * The nature of the failure is described by the name of the subclass.
         * This exception captures the information pinpointing where the operation
         * failed, such as where resolution last proceeded to.
         * <ul>
         * <li> Resolved Name. Portion of name that has been resolved.
         * <li> Resolved Object. Object to which resolution of name proceeded.
         * <li> Remaining Name. Portion of name that has not been resolved.
         * <li> Explanation. Detail explaining why name resolution failed.
         * <li> Root Exception. The exception that caused this naming exception
         * to be thrown.
         * </ul>
         * null is an acceptable value for any of these fields. When null,
         * it means that no such information has been recorded for that field.
         * <p>
         * A NamingException instance is not synchronized against concurrent
         * multithreaded access. Multiple threads trying to access and modify
         * a single NamingException instance should lock the object.
         * <p>
         * This exception has been retrofitted to conform to
         * the general purpose exception-chaining mechanism.  The
         * <i>root exception</i> (or <i>root cause</i>) is the same object as the
         * <i>cause</i> returned by the {@link Throwable#getCause()} method.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class NamingException extends java.lang.Exception {
            /**
             * Constructs a new NamingException with an explanation.
             * All unspecified fields are set to null.
             * @param explanation     A possibly null string containing
             *                           additional detail about this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            constructor(explanation: string)
            /**
             * Constructs a new NamingException.
             * All fields are set to null.
             */
            // @ts-ignore
            constructor()
            /**
             * Contains the part of the name that has been successfully resolved.
             * It is a composite name and can be null.
             * This field is initialized by the constructors.
             * You should access and manipulate this field
             * through its get and set methods.
             * @serial 
             * @see #getResolvedName
             * @see #setResolvedName
             */
            // @ts-ignore
            resolvedName: javax.naming.Name
            /**
             * Contains the object to which resolution of the part of the name was
             * successful. Can be null.
             * This field is initialized by the constructors.
             * You should access and manipulate this field
             * through its get and set methods.
             * @serial 
             * @see #getResolvedObj
             * @see #setResolvedObj
             */
            // @ts-ignore
            resolvedObj: any
            /**
             * Contains the remaining name that has not been resolved yet.
             * It is a composite name and can be null.
             * This field is initialized by the constructors.
             * You should access and manipulate this field
             * through its get, set, "append" methods.
             * @serial 
             * @see #getRemainingName
             * @see #setRemainingName
             * @see #appendRemainingName
             * @see #appendRemainingComponent
             */
            // @ts-ignore
            remainingName: javax.naming.Name
            /**
             * Contains the original exception that caused this NamingException to
             * be thrown. This field is set if there is additional
             * information that could be obtained from the original
             * exception, or if the original exception could not be
             * mapped to a subclass of NamingException.
             * Can be null.
             * <p>
             * This field predates the general-purpose exception chaining facility.
             * The {@link #initCause(Throwable)} and {@link #getCause()} methods
             * are now the preferred means of accessing this information.
             * @serial 
             * @see #getRootCause
             * @see #setRootCause(Throwable)
             * @see #initCause(Throwable)
             * @see #getCause
             */
            // @ts-ignore
            rootException: Error
            /**
             * Retrieves the leading portion of the name that was resolved
             * successfully.
             * @return The part of the name that was resolved successfully.
             *           It is a composite name. It can be null, which means
             *           the resolved name field has not been set.
             * @see #getResolvedObj
             * @see #setResolvedName
             */
            // @ts-ignore
            getResolvedName(): javax.naming.Name
            /**
             * Retrieves the remaining unresolved portion of the name.
             * @return The part of the name that has not been resolved.
             *           It is a composite name. It can be null, which means
             *           the remaining name field has not been set.
             * @see #setRemainingName
             * @see #appendRemainingName
             * @see #appendRemainingComponent
             */
            // @ts-ignore
            getRemainingName(): javax.naming.Name
            /**
             * Retrieves the object to which resolution was successful.
             * This is the object to which the resolved name is bound.
             * @return The possibly null object that was resolved so far.
             *   null means that the resolved object field has not been set.
             * @see #getResolvedName
             * @see #setResolvedObj
             */
            // @ts-ignore
            getResolvedObj(): java.lang.Object
            /**
             * Retrieves the explanation associated with this exception.
             * @return The possibly null detail string explaining more
             *          about this exception. If null, it means there is no
             *          detail message for this exception.
             * @see java.lang.Throwable#getMessage
             */
            // @ts-ignore
            getExplanation(): java.lang.String
            /**
             * Sets the resolved name field of this exception.
             * <p>
             * <tt>name</tt> is a composite name. If the intent is to set
             * this field using a compound name or string, you must
             * "stringify" the compound name, and create a composite
             * name with a single component using the string. You can then
             * invoke this method using the resulting composite name.
             * <p>
             * A copy of <code>name</code> is made and stored.
             * Subsequent changes to <code>name</code> does not
             * affect the copy in this NamingException and vice versa.
             * @param name The possibly null name to set resolved name to.
             *           If null, it sets the resolved name field to null.
             * @see #getResolvedName
             */
            // @ts-ignore
            setResolvedName(name: javax.naming.Name): void
            /**
             * Sets the remaining name field of this exception.
             * <p>
             * <tt>name</tt> is a composite name. If the intent is to set
             * this field using a compound name or string, you must
             * "stringify" the compound name, and create a composite
             * name with a single component using the string. You can then
             * invoke this method using the resulting composite name.
             * <p>
             * A copy of <code>name</code> is made and stored.
             * Subsequent changes to <code>name</code> does not
             * affect the copy in this NamingException and vice versa.
             * @param name The possibly null name to set remaining name to.
             *           If null, it sets the remaining name field to null.
             * @see #getRemainingName
             * @see #appendRemainingName
             * @see #appendRemainingComponent
             */
            // @ts-ignore
            setRemainingName(name: javax.naming.Name): void
            /**
             * Sets the resolved object field of this exception.
             * @param obj The possibly null object to set resolved object to.
             *             If null, the resolved object field is set to null.
             * @see #getResolvedObj
             */
            // @ts-ignore
            setResolvedObj(obj: any): void
            /**
             * Add name as the last component in remaining name.
             * @param name The component to add.
             *          If name is null, this method does not do anything.
             * @see #setRemainingName
             * @see #getRemainingName
             * @see #appendRemainingName
             */
            // @ts-ignore
            appendRemainingComponent(name: string): void
            /**
             * Add components from 'name' as the last components in
             * remaining name.
             * <p>
             * <tt>name</tt> is a composite name. If the intent is to append
             * a compound name, you should "stringify" the compound name
             * then invoke the overloaded form that accepts a String parameter.
             * <p>
             * Subsequent changes to <code>name</code> does not
             * affect the remaining name field in this NamingException and vice versa.
             * @param name The possibly null name containing ordered components to add.
             *                  If name is null, this method does not do anything.
             * @see #setRemainingName
             * @see #getRemainingName
             * @see #appendRemainingComponent
             */
            // @ts-ignore
            appendRemainingName(name: javax.naming.Name): void
            /**
             * Retrieves the root cause of this NamingException, if any.
             * The root cause of a naming exception is used when the service provider
             * wants to indicate to the caller a non-naming related exception
             * but at the same time wants to use the NamingException structure
             * to indicate how far the naming operation proceeded.
             * <p>
             * This method predates the general-purpose exception chaining facility.
             * The {@link #getCause()} method is now the preferred means of obtaining
             * this information.
             * @return The possibly null exception that caused this naming
             *     exception. If null, it means no root cause has been
             *     set for this naming exception.
             * @see #setRootCause
             * @see #rootException
             * @see #getCause
             */
            // @ts-ignore
            getRootCause(): java.lang.Throwable
            /**
             * Records the root cause of this NamingException.
             * If <tt>e</tt> is <tt>this</tt>, this method does not do anything.
             * <p>
             * This method predates the general-purpose exception chaining facility.
             * The {@link #initCause(Throwable)} method is now the preferred means
             * of recording this information.
             * @param e The possibly null exception that caused the naming
             *           operation to fail. If null, it means this naming
             *           exception has no root cause.
             * @see #getRootCause
             * @see #rootException
             * @see #initCause
             */
            // @ts-ignore
            setRootCause(e: Error): void
            /**
             * Returns the cause of this exception.  The cause is the
             * throwable that caused this naming exception to be thrown.
             * Returns <code>null</code> if the cause is nonexistent or
             * unknown.
             * @return the cause of this exception, or <code>null</code> if the
             *           cause is nonexistent or unknown.
             * @see #initCause(Throwable)
             * @since 1.4
             */
            // @ts-ignore
            getCause(): java.lang.Throwable
            /**
             * Initializes the cause of this exception to the specified value.
             * The cause is the throwable that caused this naming exception to be
             * thrown.
             * <p>
             * This method may be called at most once.
             * @param cause   the cause, which is saved for later retrieval by
             *          the {#link #getCause()} method.  A <tt>null</tt> value
             *          indicates that the cause is nonexistent or unknown.
             * @return a reference to this <code>NamingException</code> instance.
             * @throws IllegalArgumentException if <code>cause</code> is this
             *          exception.  (A throwable cannot be its own cause.)
             * @throws IllegalStateException if this method has already
             *          been called on this exception.
             * @see #getCause
             * @since 1.4
             */
            // @ts-ignore
            initCause(cause: Error): java.lang.Throwable
            /**
             * Generates the string representation of this exception.
             * The string representation consists of this exception's class name,
             * its detailed message, and if it has a root cause, the string
             * representation of the root cause exception, followed by
             * the remaining name (if it is not null).
             * This string is used for debugging and not meant to be interpreted
             * programmatically.
             * @return The non-null string containing the string representation
             *  of this exception.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Generates the string representation in more detail.
             * This string representation consists of the information returned
             * by the toString() that takes no parameters, plus the string
             * representation of the resolved object (if it is not null).
             * This string is used for debugging and not meant to be interpreted
             * programmatically.
             * @param detail If true, include details about the resolved object
             *                  in addition to the other information.
             * @return The non-null string containing the string representation.
             */
            // @ts-ignore
            toString(detail: boolean): java.lang.String
        }
    }
}

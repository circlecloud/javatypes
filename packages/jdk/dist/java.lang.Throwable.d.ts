declare namespace java {
    namespace lang {
        /**
         * This class is the superclass of all classes which
         * can be thrown by the virtual machine. The two direct
         * subclasses represent recoverable exceptions (Exception)
         * and unrecoverable errors (Error). This class provides
         * common methods for accessing a string message which
         * provides extra information about the circumstances in
         * which the throwable was created, and for filling in a
         * walkback (i.e. a record of the call stack at a
         * particular point in time) which can be printed later.
         * @author OTI
         * @version initial
         * @see Error
         * @see Exception
         * @see RuntimeException
         */
        // @ts-ignore
        class Throwable extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a new instance of this class with its
             * walkback filled in.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance of this class with its
             * walkback and message filled in.
             * @param detailMessage String
             * 				The detail message for the exception.
             */
            // @ts-ignore
            constructor(detailMessage: java.lang.String | string)
            /**
             * Constructs a new instance of this class with its
             * walkback, message and cause filled in.
             * @param detailMessage String
             * 				The detail message for the exception.
             * @param throwable The cause of this Throwable
             */
            // @ts-ignore
            constructor(detailMessage: java.lang.String | string, throwable: java.lang.Throwable | Error)
            /**
             * Constructs a new instance of this class with its
             * walkback and cause filled in.
             * @param throwable The cause of this Throwable
             */
            // @ts-ignore
            constructor(throwable: java.lang.Throwable | Error)
            /**
             * Constructs a new instance of this class with its walkback, message
             * and cause filled in.
             * enableSuppression and enableWritableStackTrace are true by default
             * in other constructors
             * If enableSuppression is false, suppression is disabled, getSuppressed()
             * returns a zero-length array and calls to addSuppressed(Throwable) have
             * no effect.
             * If enableWritableStackTrace is false, fillInStackTrace() will not be
             * called within this constructor, stackTrace field will be set to null,
             * subsequent calls to fillInStackTrace() and setStackTrace(StackTraceElement[])
             * will not set the stack trace, and  getStackTrace() will return a zero
             * length array.
             * @param detailMessage String
             * 				The detail message for the exception.
             * @param throwable The cause of this Throwable
             * @param enableSuppression boolean 
             *  				enable or disable suppression
             * @param enableWritableStackTrace boolean
             *  				whether the stack trace is writable
             * @since 1.7
             */
            // @ts-ignore
            constructor(detailMessage: java.lang.String | string, throwable: java.lang.Throwable | Error, enableSuppression: boolean, enableWritableStackTrace: boolean)
            /**
             * Record in the receiver a walkback from the point
             * where this message was sent. The message is
             * public so that code which catches a throwable and
             * then <em>re-throws</em> it can adjust the walkback
             * to represent the location where the exception was
             * re-thrown.
             * @return the receiver
             */
            // @ts-ignore
            public fillInStackTrace(): Error
            /**
             * Answers the extra information message which was provided
             * when the throwable was created. If no message was provided
             * at creation time, then answer null.
             * @return String
             * 				The receiver's message.
             */
            // @ts-ignore
            public getMessage(): string
            /**
             * Answers the extra information message which was provided
             * when the throwable was created. If no message was provided
             * at creation time, then answer null. Subclasses may override
             * this method to answer localized text for the message.
             * @return String
             * 				The receiver's message.
             */
            // @ts-ignore
            public getLocalizedMessage(): string
            /**
             * Answers an array of StackTraceElement. Each StackTraceElement represents
             * a entry on the stack.
             * @return an array of StackTraceElement representing the stack
             */
            // @ts-ignore
            public getStackTrace(): java.lang.StackTraceElement[]
            /**
             * Sets the array of StackTraceElements. Each StackTraceElement represents
             * a entry on the stack. A copy of this array will be returned by getStackTrace()
             * and printed by printStackTrace().
             * @param trace The array of StackTraceElement
             */
            // @ts-ignore
            public setStackTrace(trace: java.lang.StackTraceElement[]): void
            /**
             * Outputs a printable representation of the receiver's
             * walkback on the System.err stream.
             */
            // @ts-ignore
            public printStackTrace(): void
            /**
             * Outputs a printable representation of the receiver's
             * walkback on the stream specified by the argument.
             * @param err PrintStream
             * 				The stream to write the walkback on.
             */
            // @ts-ignore
            public printStackTrace(err: java.io.PrintStream): void
            /**
             * Outputs a printable representation of the receiver's
             * walkback on the writer specified by the argument.
             * @param err PrintWriter
             * 				The writer to write the walkback on.
             */
            // @ts-ignore
            public printStackTrace(err: java.io.PrintWriter): void
            /**
             * Answers a string containing a concise, human-readable
             * description of the receiver.
             * @return String
             * 				a printable representation for the receiver.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Initialize the cause of the receiver. The cause cannot be
             * reassigned.
             * @param throwable The cause of this Throwable
             * @exception IllegalArgumentException when the cause is the receiver
             * @exception IllegalStateException when the cause has already been initialized
             * @return the receiver.
             */
            // @ts-ignore
            public initCause(throwable: java.lang.Throwable | Error): Error
            /**
             * Answers the cause of this Throwable, or null if there
             * is no cause.
             * @return Throwable
             * 				The receiver's cause.
             */
            // @ts-ignore
            public getCause(): Error
            /**
             * The specified exception is going to be suppressed in order to give priority
             * to this exception (primary exception) and to be appended to the list of
             * suppressed exceptions.
             * This method is typically called by the automatically generated code from the
             * try-with-resources statement.
             * @param exception Throwable
             *  			an exception to be suppressed and added to 
             *  			the list of suppressed exceptions
             * @throws IllegalArgumentException 	
             *  			if exception is this throwable, can't suppress itself
             * @throws NullPointerException 			
             *  			if exception is null and there is an exception suppressed before
             * @since 1.7
             */
            // @ts-ignore
            public addSuppressed(exception: java.lang.Throwable | Error): void
            /**
             * Returns an array of exceptions suppressed, typically by the automatically
             * generated code from the try-with-resources statement, in order to give
             * priority to this exception (primary exception).
             * @return an array of exceptions representing all exceptions suppressed to
             *  			give priority to this exception (primary exception)
             * @since 1.7
             */
            // @ts-ignore
            public getSuppressed(): Error[]
        }
    }
}

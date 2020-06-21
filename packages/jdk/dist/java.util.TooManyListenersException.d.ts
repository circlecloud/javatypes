declare namespace java {
    namespace util {
        /**
         * <p>
         * The <code> TooManyListenersException </code> Exception is used as part of
         * the Java Event model to annotate and implement a unicast special case of
         * a multicast Event Source.
         * </p>
         * <p>
         * The presence of a "throws TooManyListenersException" clause on any given
         * concrete implementation of the normally multicast "void addXyzEventListener"
         * event listener registration pattern is used to annotate that interface as
         * implementing a unicast Listener special case, that is, that one and only
         * one Listener may be registered on the particular event listener source
         * concurrently.
         * </p>
         * @see java.util.EventObject
         * @see java.util.EventListener
         * @author Laurence P. G. Cable
         * @since JDK1.1
         */
        // @ts-ignore
        class TooManyListenersException extends java.lang.Exception {
            /**
             * Constructs a TooManyListenersException with no detail message.
             * A detail message is a String that describes this particular exception.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a TooManyListenersException with the specified detail message.
             * A detail message is a String that describes this particular exception.
             * @param s the detail message
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}

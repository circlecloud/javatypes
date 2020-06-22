declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    /**
                     * Annotation to declare an infinite stream using MongoDB's {@link com.mongodb.CursorType#TailableAwait tailable}
                     * cursors. An infinite stream can only be used with capped collections. Objects are emitted through the stream as data
                     * is inserted into the collection. An infinite stream can only be used with streams that emit more than one element,
                     * such as {@link reactor.core.publisher.Flux}.
                     * <p>
                     * The stream may become dead, or invalid, if either the query returns no match or the cursor returns the document at
                     * the "end" of the collection and then the application deletes that document.
                     * <p>
                     * A stream that is no longer in use must be {@link reactor.core.Disposable#dispose()} disposed} otherwise the streams
                     * will linger and exhaust resources.
                     * @author Mark Paluch
                     * @see <a href="https://docs.mongodb.com/manual/core/tailable-cursors/">Tailable Cursors</a>
                     * @since 2.0
                     */
                    // @ts-ignore
                    abstract class Tailable implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}

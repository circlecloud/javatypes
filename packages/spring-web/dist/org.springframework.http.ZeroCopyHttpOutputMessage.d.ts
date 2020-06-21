declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Sub-interface of {@code ReactiveOutputMessage} that has support for "zero-copy"
             * file transfers.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @since 5.0
             * @see <a href="https://en.wikipedia.org/wiki/Zero-copy">Zero-copy</a>
             */
            // @ts-ignore
            interface ZeroCopyHttpOutputMessage extends org.springframework.http.ReactiveHttpOutputMessage {
                /**
                 * Use the given {@link File} to write the body of the message to the underlying
                 * HTTP layer.
                 * @param file the file to transfer
                 * @param position the position within the file from which the transfer is to begin
                 * @param count the number of bytes to be transferred
                 * @return a publisher that indicates completion or error.
                 */
                // @ts-ignore
                writeWith(file: java.io.File, position: number /*long*/, count: number /*long*/): object
                /**
                 * Use the given {@link Path} to write the body of the message to the underlying
                 * HTTP layer.
                 * @param file the file to transfer
                 * @param position the position within the file from which the transfer is to begin
                 * @param count the number of bytes to be transferred
                 * @return a publisher that indicates completion or error.
                 * @since 5.1
                 */
                // @ts-ignore
                writeWith(file: java.nio.file.Path, position: number /*long*/, count: number /*long*/): object
            }
        }
    }
}

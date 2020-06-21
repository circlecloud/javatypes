declare namespace java {
    namespace net {
        /**
         * A socket option associated with a socket.
         * <p> In the {@link java.nio.channels channels} package, the {@link
         * java.nio.channels.NetworkChannel} interface defines the {@link
         * java.nio.channels.NetworkChannel#setOption(SocketOption,Object) setOption}
         * and {@link java.nio.channels.NetworkChannel#getOption(SocketOption) getOption}
         * methods to set and query the channel's socket options.
         * @param <T>     The type of the socket option value.
         * @since 1.7
         * @see StandardSocketOptions
         */
        // @ts-ignore
        interface SocketOption<T> {
            /**
             * Returns the name of the socket option.
             * @return the name of the socket option
             */
            // @ts-ignore
            name(): string
            /**
             * Returns the type of the socket option value.
             * @return the type of the socket option value
             */
            // @ts-ignore
            type(): java.lang.Class<T>
        }
    }
}

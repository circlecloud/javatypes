declare namespace org {
    namespace apache {
        namespace coyote {
            // @ts-ignore
            class ErrorState extends java.lang.Enum<org.apache.coyote.ErrorState> {
                /**
                 * Not in an error state.
                 */
                // @ts-ignore
                public static readonly NONE: org.apache.coyote.ErrorState
                /**
                 * The current request/response is in an error state and while it is safe to
                 * complete the current response it is not safe to continue to use the
                 * existing connection which must be closed once the response has been
                 * completed. For multiplexed protocols, the channel must be closed when the
                 * current request/response completes but the connection may continue.
                 */
                // @ts-ignore
                public static readonly CLOSE_CLEAN: org.apache.coyote.ErrorState
                /**
                 * The current request/response is in an error state and it is not safe to
                 * continue to use them. For multiplexed protocols (such as HTTP/2) the
                 * stream/channel must be closed immediately but the connection may
                 * continue. For non-multiplexed protocols (AJP, HTTP/1.x) the current
                 * connection must be closed.
                 */
                // @ts-ignore
                public static readonly CLOSE_NOW: org.apache.coyote.ErrorState
                /**
                 * An error has been detected that impacts the underlying network
                 * connection. It is not safe to continue using the network connection which
                 * must be closed immediately. For multiplexed protocols (such as HTTP/2)
                 * this impacts all multiplexed channels.
                 */
                // @ts-ignore
                public static readonly CLOSE_CONNECTION_NOW: org.apache.coyote.ErrorState
                // @ts-ignore
                public static values(): org.apache.coyote.ErrorState[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.apache.coyote.ErrorState
                // @ts-ignore
                public isError(): boolean
                /**
                 * Compare this ErrorState with the provided ErrorState and return the most
                 * severe.
                 * @param input The error state to compare to this one
                 * @return The most severe error state from the the provided error state and
                 *          this one
                 */
                // @ts-ignore
                public getMostSevere(input: org.apache.coyote.ErrorState): org.apache.coyote.ErrorState
                // @ts-ignore
                public isIoAllowed(): boolean
                // @ts-ignore
                public isConnectionIoAllowed(): boolean
            }
        }
    }
}

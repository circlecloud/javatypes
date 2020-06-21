declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            interface AMQP {
                // @ts-ignore
                readonly FRAME_METHOD: number /*int*/
                // @ts-ignore
                readonly FRAME_HEADER: number /*int*/
                // @ts-ignore
                readonly FRAME_BODY: number /*int*/
                // @ts-ignore
                readonly FRAME_HEARTBEAT: number /*int*/
                // @ts-ignore
                readonly FRAME_MIN_SIZE: number /*int*/
                // @ts-ignore
                readonly FRAME_END: number /*int*/
                // @ts-ignore
                readonly REPLY_SUCCESS: number /*int*/
                // @ts-ignore
                readonly CONTENT_TOO_LARGE: number /*int*/
                // @ts-ignore
                readonly NO_ROUTE: number /*int*/
                // @ts-ignore
                readonly NO_CONSUMERS: number /*int*/
                // @ts-ignore
                readonly ACCESS_REFUSED: number /*int*/
                // @ts-ignore
                readonly NOT_FOUND: number /*int*/
                // @ts-ignore
                readonly RESOURCE_LOCKED: number /*int*/
                // @ts-ignore
                readonly PRECONDITION_FAILED: number /*int*/
                // @ts-ignore
                readonly CONNECTION_FORCED: number /*int*/
                // @ts-ignore
                readonly INVALID_PATH: number /*int*/
                // @ts-ignore
                readonly FRAME_ERROR: number /*int*/
                // @ts-ignore
                readonly SYNTAX_ERROR: number /*int*/
                // @ts-ignore
                readonly COMMAND_INVALID: number /*int*/
                // @ts-ignore
                readonly CHANNEL_ERROR: number /*int*/
                // @ts-ignore
                readonly UNEXPECTED_FRAME: number /*int*/
                // @ts-ignore
                readonly RESOURCE_ERROR: number /*int*/
                // @ts-ignore
                readonly NOT_ALLOWED: number /*int*/
                // @ts-ignore
                readonly NOT_IMPLEMENTED: number /*int*/
                // @ts-ignore
                readonly INTERNAL_ERROR: number /*int*/
            }
        }
    }
}

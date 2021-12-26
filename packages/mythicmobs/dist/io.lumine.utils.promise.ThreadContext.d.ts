declare namespace io {
    namespace lumine {
        namespace utils {
            namespace promise {
                // @ts-ignore
                class ThreadContext extends java.lang.Enum<io.lumine.utils.promise.ThreadContext> {
                    // @ts-ignore
                    public static readonly SYNC: io.lumine.utils.promise.ThreadContext
                    // @ts-ignore
                    public static readonly ASYNC: io.lumine.utils.promise.ThreadContext
                    // @ts-ignore
                    public static values(): io.lumine.utils.promise.ThreadContext[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): io.lumine.utils.promise.ThreadContext
                    // @ts-ignore
                    public static forCurrentThread(): io.lumine.utils.promise.ThreadContext
                    // @ts-ignore
                    public static forThread(thread: java.lang.Thread): io.lumine.utils.promise.ThreadContext
                }
            }
        }
    }
}

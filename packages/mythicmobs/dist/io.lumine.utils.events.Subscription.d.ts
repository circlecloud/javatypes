declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                // @ts-ignore
                interface Subscription extends io.lumine.utils.terminable.Terminable {
                    // @ts-ignore
                    isActive(): boolean
                    // @ts-ignore
                    getCallCounter(): number /*long*/
                    // @ts-ignore
                    unregister(): boolean
                    // @ts-ignore
                    terminate(): boolean
                }
            }
        }
    }
}

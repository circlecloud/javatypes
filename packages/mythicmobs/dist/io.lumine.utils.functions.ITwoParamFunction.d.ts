declare namespace io {
    namespace lumine {
        namespace utils {
            namespace functions {
                // @ts-ignore
                interface ITwoParamFunction<T1, T2, T3> {
                    // @ts-ignore
                    execute(p0: T2, p1: T3): T1
                }
            }
        }
    }
}

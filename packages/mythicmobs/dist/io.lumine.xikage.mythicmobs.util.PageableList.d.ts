declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    // @ts-ignore
                    class PageableList<T> extends java.lang.Object {
                        // @ts-ignore
                        constructor(list: java.util.List<T> | Array<T>)
                        // @ts-ignore
                        public static readonly DEFAULT_PAGE_SIZE: number /*int*/
                        // @ts-ignore
                        public getList(): Array<T>
                        // @ts-ignore
                        public getListForPage(): Array<T>
                        // @ts-ignore
                        public getPageSize(): number /*int*/
                        // @ts-ignore
                        public setPageSize(pageSize: number /*int*/): io.lumine.xikage.mythicmobs.util.PageableList<T>
                        // @ts-ignore
                        public getPage(): number /*int*/
                        // @ts-ignore
                        public setPage(p: number /*int*/): io.lumine.xikage.mythicmobs.util.PageableList<T>
                        // @ts-ignore
                        public getMaxPages(): number /*int*/
                        // @ts-ignore
                        public getPreviousPage(): number /*int*/
                        // @ts-ignore
                        public getNextPage(): number /*int*/
                        // @ts-ignore
                        public getMinPageRange(): number /*int*/
                        // @ts-ignore
                        public getMaxPageRange(): number /*int*/
                    }
                }
            }
        }
    }
}
